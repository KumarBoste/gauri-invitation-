/**
 * Devotional Indian ambient synthesizer using Web Audio API.
 * Provides a soothing Indian classical Tanpura drone + Bansuri/Shehnai melody
 * so the invitation always has authentic traditional music even without external MP3 files.
 */
class DevotionalAudioSynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private droneGain: GainNode | null = null;

  // Indian classical Raga Bhoopali / Deskar meditative notes in Hz (C# scale)
  // Sa, Re, Ga, Pa, Dha, Sa'
  private notes = [
    277.18, // C#4 (Sa)
    311.13, // D#4 (Re)
    349.23, // F4  (Ga)
    415.30, // G#4 (Pa)
    466.16, // A#4 (Dha)
    554.37, // C#5 (High Sa)
    466.16,
    415.30,
    349.23,
    311.13,
  ];

  public start() {
    if (this.isPlaying) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.isPlaying = true;
      this.startTanpuraDrone();
      this.startMelodyLoop();
    } catch (e) {
      console.warn('Web Audio playback failed:', e);
    }
  }

  private startTanpuraDrone() {
    if (!this.ctx) return;

    const masterDrone = this.ctx.createGain();
    masterDrone.gain.setValueAtTime(0.08, this.ctx.currentTime);
    masterDrone.connect(this.ctx.destination);
    this.droneGain = masterDrone;

    // Root fundamental (Sa) and Fifth (Pa)
    const freqs = [138.59, 207.65, 277.18]; // C#3, G#3, C#4
    freqs.forEach((freq) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle slow vibrato for realistic warmth
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.3, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, this.ctx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(masterDrone);
      osc.start();
    });
  }

  private playTone(freq: number, duration: number, type: OscillatorType = 'triangle') {
    if (!this.ctx || !this.isPlaying) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm envelope
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    // Subtle lowpass filter for silky shehnai/bansuri tone
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  // Gentle temple bell strike
  public playTempleBell() {
    if (!this.ctx) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx();
      } catch {
        return;
      }
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const partials = [880, 1760, 2640, 3520];
    partials.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const amp = 0.08 / (idx + 1);
      gain.gain.setValueAtTime(amp, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 2.0);
    });
  }

  private startMelodyLoop() {
    let noteIndex = 0;
    const playNext = () => {
      if (!this.isPlaying) return;
      const freq = this.notes[noteIndex % this.notes.length];
      this.playTone(freq, 1.8, 'triangle');
      noteIndex++;
    };

    playNext();
    this.intervalId = window.setInterval(playNext, 2200);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx) {
      this.ctx.close().catch(() => {});
      this.ctx = null;
      this.droneGain = null;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const devotionalSynth = new DevotionalAudioSynth();
