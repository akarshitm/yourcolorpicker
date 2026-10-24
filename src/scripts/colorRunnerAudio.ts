// Sound for Color Runner, synthesized live with the Web Audio API so there
// are no audio files to download. Two looping soundtracks (a chiptune for
// normal running, a distorted rock loop while golden) are scheduled a little
// ahead of time; effects are short one-shot synth or noise bursts.

type Mode = "chip" | "rock";

const MASTER = 0.7;
const midi = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

// C – F – G – Am, one bar each.
const CHIP_CHORDS = [
	[60, 64, 67],
	[65, 69, 72],
	[67, 71, 74],
	[57, 60, 64],
];
const CHIP_ARP = [0, 1, 2, 1, 0, 1, 2, 3];
// E – G – A – G power chords.
const ROCK_ROOTS = [40, 43, 45, 43];
const STEP_SECONDS: Record<Mode, number> = { chip: 60 / 152 / 4, rock: 60 / 168 / 4 };

export class RunnerAudio {
	private ctx: AudioContext | null = null;
	private master!: GainNode;
	private music!: GainNode;
	private sfx!: GainNode;
	private guitar!: GainNode;
	private guitarIn!: WaveShaperNode;
	private noise!: AudioBuffer;
	private mode: Mode | null = null;
	private step = 0;
	private nextTime = 0;
	private timer = 0;

	constructor(public muted: boolean) {}

	// Must first run inside a user gesture (click / key) or browsers keep audio locked.
	unlock(): AudioContext | null {
		if (!this.ctx) {
			const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
			if (!Ctor) return null;
			const ctx = new Ctor();
			this.ctx = ctx;
			this.master = ctx.createGain();
			this.master.gain.value = this.muted ? 0 : MASTER;
			this.master.connect(ctx.destination);
			this.music = ctx.createGain();
			this.music.gain.value = 0.32;
			this.music.connect(this.master);
			this.sfx = ctx.createGain();
			this.sfx.gain.value = 0.9;
			this.sfx.connect(this.master);

			this.noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
			const data = this.noise.getChannelData(0);
			for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

			// Overdrive for the rock guitar.
			const shaper = ctx.createWaveShaper();
			const curve = new Float32Array(1024);
			const k = 60;
			for (let i = 0; i < curve.length; i++) {
				const x = (i * 2) / curve.length - 1;
				curve[i] = ((1 + k) * x) / (1 + k * Math.abs(x));
			}
			shaper.curve = curve;
			this.guitar = ctx.createGain();
			this.guitar.gain.value = 0.5;
			shaper.connect(this.guitar).connect(this.music);
			this.guitarIn = shaper;
		}
		if (this.ctx.state === "suspended") void this.ctx.resume();
		return this.ctx;
	}
	setMuted(muted: boolean) {
		this.muted = muted;
		if (this.ctx) this.master.gain.setTargetAtTime(muted ? 0 : MASTER, this.ctx.currentTime, 0.02);
	}

	pause() {
		void this.ctx?.suspend();
	}

	resume() {
		void this.ctx?.resume();
	}

	playMusic(mode: Mode) {
		const ctx = this.unlock();
		if (!ctx || this.mode === mode) return;
		this.mode = mode;
		this.step = 0;
		this.nextTime = ctx.currentTime + 0.05;
		if (!this.timer) this.timer = window.setInterval(() => this.schedule(), 25);
	}

	stopMusic() {
		this.mode = null;
		clearInterval(this.timer);
		this.timer = 0;
	}

	private schedule() {
		const ctx = this.ctx;
		if (!ctx || !this.mode) return;
		while (this.nextTime < ctx.currentTime + 0.12) {
			if (this.mode === "chip") this.chipStep(this.step, this.nextTime);
			else this.rockStep(this.step, this.nextTime);
			this.nextTime += STEP_SECONDS[this.mode];
			this.step = (this.step + 1) % 64;
		}
	}

	// --- Building blocks -----------------------------------------------------

	private tone(type: OscillatorType, freq: number, t: number, dur: number, gain: number, dest: AudioNode) {
		const ctx = this.ctx!;
		const osc = ctx.createOscillator();
		const g = ctx.createGain();
		osc.type = type;
		osc.frequency.setValueAtTime(freq, t);
		g.gain.setValueAtTime(gain, t);
		g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
		osc.connect(g).connect(dest);
		osc.start(t);
		osc.stop(t + dur + 0.02);
		return osc;
	}

	private noiseHit(t: number, dur: number, gain: number, filter: BiquadFilterType, freq: number, dest: AudioNode) {
		const ctx = this.ctx!;
		const src = ctx.createBufferSource();
		src.buffer = this.noise;
		const f = ctx.createBiquadFilter();
		f.type = filter;
		f.frequency.setValueAtTime(freq, t);
		const g = ctx.createGain();
		g.gain.setValueAtTime(gain, t);
		g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
		src.connect(f).connect(g).connect(dest);
		src.start(t, Math.random() * 0.5);
		src.stop(t + dur + 0.02);
		return f;
	}

	private kick(t: number, gain: number, dest: AudioNode) {
		const osc = this.tone("sine", 150, t, 0.2, gain, dest);
		osc.frequency.exponentialRampToValueAtTime(40, t + 0.12);
	}

	private snare(t: number, gain: number, dest: AudioNode) {
		this.noiseHit(t, 0.14, gain, "highpass", 1500, dest);
		this.tone("triangle", 190, t, 0.08, gain * 0.6, dest);
	}

	private hat(t: number, gain: number, dest: AudioNode) {
		this.noiseHit(t, 0.035, gain, "highpass", 7500, dest);
	}

	// --- Soundtracks -----------------------------------------------------------

	private chipStep(step: number, t: number) {
		const bar = Math.floor(step / 16) % CHIP_CHORDS.length;
		const s = step % 16;
		const chord = CHIP_CHORDS[bar];
		if (s % 2 === 0) {
			const i = CHIP_ARP[s / 2];
			const note = i === 3 ? chord[0] + 12 : chord[i];
			this.tone("square", midi(note + 12), t, 0.1, 0.11, this.music);
		}
		if (s % 4 === 0) this.tone("triangle", midi(chord[0] - 12), t, 0.2, 0.3, this.music);
		if (s % 8 === 0) this.kick(t, 0.55, this.music);
		if (s % 8 === 4) this.snare(t, 0.16, this.music);
		if (s % 2 === 1) this.hat(t, 0.05, this.music);
	}

	private rockStep(step: number, t: number) {
		const bar = Math.floor(step / 16) % ROCK_ROOTS.length;
		const s = step % 16;
		const root = ROCK_ROOTS[bar];
		if (s % 2 === 0) {
			const dur = s === 0 ? 0.32 : 0.11;
			for (const n of [root, root + 7, root + 12]) this.tone("sawtooth", midi(n), t, dur, 0.09, this.guitarIn);
		}
		if (s === 0 || s === 8 || s === 10) this.kick(t, 0.7, this.music);
		if (s === 4 || s === 12) this.snare(t, 0.3, this.music);
		if (s % 2 === 0) this.hat(t, 0.07, this.music);
		if (step === 0) this.noiseHit(t, 0.9, 0.18, "highpass", 5000, this.music);
	}

	// --- Effects ---------------------------------------------------------------

	// Spring "boing": a rising sine with fast vibrato.
	jump() {
		const ctx = this.unlock();
		if (!ctx) return;
		const t = ctx.currentTime;
		const osc = this.tone("sine", 260, t, 0.32, 0.35, this.sfx);
		osc.frequency.exponentialRampToValueAtTime(780, t + 0.16);
		osc.frequency.exponentialRampToValueAtTime(520, t + 0.3);
		const lfo = ctx.createOscillator();
		const depth = ctx.createGain();
		lfo.frequency.value = 28;
		depth.gain.value = 35;
		lfo.connect(depth).connect(osc.frequency);
		lfo.start(t);
		lfo.stop(t + 0.34);
	}

	// Quick dash "whoosh": a band of noise sweeping upward.
	dash() {
		const ctx = this.unlock();
		if (!ctx) return;
		const t = ctx.currentTime;
		const filter = this.noiseHit(t, 0.16, 0.5, "bandpass", 600, this.sfx);
		filter.Q.value = 1.2;
		filter.frequency.exponentialRampToValueAtTime(3200, t + 0.13);
	}

	// Golden bucket: a snare fill into a kick and crash.
	pickup() {
		const ctx = this.unlock();
		if (!ctx) return;
		const t = ctx.currentTime;
		[0, 0.06, 0.12, 0.18].forEach((d, i) => this.snare(t + d, 0.2 + i * 0.08, this.sfx));
		this.kick(t + 0.24, 0.9, this.sfx);
		this.noiseHit(t + 0.24, 0.8, 0.3, "highpass", 5000, this.sfx);
	}

	// Classic falling "game over" jingle.
	gameOver() {
		const ctx = this.unlock();
		if (!ctx) return;
		this.stopMusic();
		const t = ctx.currentTime + 0.05;
		[67, 63, 60, 55].forEach((n, i) => this.tone("square", midi(n), t + i * 0.16, 0.15, 0.14, this.sfx));
		const end = this.tone("square", midi(48), t + 0.64, 0.7, 0.14, this.sfx);
		end.frequency.exponentialRampToValueAtTime(midi(43), t + 1.3);
	}
}
