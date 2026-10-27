// Web Audio API Soundscape Engine for Discover Punjab
// Synthesizes soothing ambient drones (Tanpura style harmonics, warm meditative tones, and gentle temple bell chimes)
// 100% self-contained, zero external network requests or audio file dependencies.

class SoundscapeEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.oscillators = [];
    this.currentTrack = 'dawn';
    this.volume = 0.4;
    this.bellTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  playBell(freq = 880) {
    if (!this.ctx || !this.isPlaying) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 3.5);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 3.6);
  }

  startTrack(trackId = 'dawn') {
    this.init();
    this.stop();
    this.isPlaying = true;
    this.currentTrack = trackId;

    const baseFreqs = {
      dawn: [130.81, 196.00, 261.63, 392.00], // C3, G3, C4, G4 (Peaceful Sa-Pa Tanpura)
      sufi: [146.83, 220.00, 293.66, 440.00], // D3, A3, D4, A4 (Mystical D drone)
      night: [110.00, 164.81, 220.00, 329.63] // A2, E3, A3, E4 (Deep Nocturnal Serenity)
    };

    const freqs = baseFreqs[trackId] || baseFreqs.dawn;

    // Create rich multi-oscillator drone with subtle slow vibrato/chorus
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Lowpass filter for smooth, warm acoustic warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500 + idx * 120, this.ctx.currentTime);

      // Soft envelope
      const targetGain = 0.04 / (idx + 1);
      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(targetGain, this.ctx.currentTime + 2.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push({ osc, gain });
    });

    // Schedule gentle random meditative chimes every 8 to 15 seconds
    const scheduleNextBell = () => {
      if (!this.isPlaying) return;
      const delay = 7000 + Math.random() * 8000;
      this.bellTimer = setTimeout(() => {
        const bellNotes = [523.25, 659.25, 783.99, 1046.50];
        const randomNote = bellNotes[Math.floor(Math.random() * bellNotes.length)];
        this.playBell(randomNote);
        scheduleNextBell();
      }, delay);
    };
    scheduleNextBell();
  }

  stop() {
    this.isPlaying = false;
    if (this.bellTimer) clearTimeout(this.bellTimer);
    if (this.oscillators.length > 0 && this.ctx) {
      this.oscillators.forEach(({ osc, gain }) => {
        try {
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
          osc.stop(this.ctx.currentTime + 0.7);
        } catch (e) {
          // Ignore if already stopped
        }
      });
      this.oscillators = [];
    }
  }
}

export const soundscape = new SoundscapeEngine();
