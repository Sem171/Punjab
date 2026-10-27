import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { culture } from '../data/site';
import { useScrollProgress } from '../motion';

// A synthesised dhol: a pitched-down bass "dagga" and a bright noise "tilli" slap,
// looping a simple bhangra chaal.
function useDhol() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef(null);
  const timerRef = useRef(null);

  const hit = (ctx, t, kind) => {
    const out = ctx.createGain();
    out.connect(ctx.destination);
    if (kind === 'bass') {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(48, t + 0.22);
      out.gain.setValueAtTime(0.9, t);
      out.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
      o.connect(out);
      o.start(t);
      o.stop(t + 0.5);
    } else {
      const len = Math.floor(ctx.sampleRate * 0.08);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 2;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 2400;
      bp.Q.value = 1.2;
      out.gain.setValueAtTime(kind === 'accent' ? 0.7 : 0.35, t);
      src.connect(bp).connect(out);
      src.start(t);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setPlaying(false);
  };

  const start = () => {
    const ctx = ctxRef.current || new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;
    ctx.resume();
    // 8 steps per bar: D = bass, a = accent slap, t = light slap, . = rest
    const pattern = 'D.taD.ta'.split('');
    const step = 60 / 150 / 2;
    let next = ctx.currentTime + 0.05;
    let i = 0;
    const schedule = () => {
      while (next < ctx.currentTime + 0.2) {
        const s = pattern[i % pattern.length];
        if (s === 'D') hit(ctx, next, 'bass');
        if (s === 'a') hit(ctx, next, 'accent');
        if (s === 't') hit(ctx, next, 'tap');
        next += step;
        i++;
      }
    };
    schedule();
    timerRef.current = setInterval(schedule, 50);
    setPlaying(true);
  };

  useEffect(() => () => {
    clearInterval(timerRef.current);
    ctxRef.current?.close();
  }, []);

  return { playing, toggle: () => (playing ? stop() : start()) };
}

function MusicVisual() {
  const { playing, toggle } = useDhol();
  return (
    <div className={`music ${playing ? 'is-playing' : ''}`}>
      <svg viewBox="0 0 240 160" className="music__dhol" aria-hidden="true">
        <defs>
          <linearGradient id="dhol-body" x1="0" x2="1">
            <stop offset="0" stopColor="#5a2a10" />
            <stop offset="0.5" stopColor="#a8551f" />
            <stop offset="1" stopColor="#5a2a10" />
          </linearGradient>
        </defs>
        <ellipse cx="40" cy="80" rx="26" ry="62" fill="#f1e2bf" stroke="#d4a64a" strokeWidth="3" />
        <path d="M40 18 H200 V142 H40 Z" fill="url(#dhol-body)" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path key={i} d={`M${48 + i * 22} 20 L${70 + i * 22} 140`} stroke="#d4a64a" strokeWidth="1.5" opacity="0.7" />
        ))}
        <ellipse cx="200" cy="80" rx="26" ry="62" fill="#e9d6a9" stroke="#d4a64a" strokeWidth="3" />
        <ellipse cx="200" cy="80" rx="12" ry="30" fill="none" stroke="#d4a64a" strokeWidth="1" opacity="0.5" className="music__skin" />
      </svg>
      <div className="music__bars" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
      <button className="btn btn--gold music__btn" onClick={toggle} aria-pressed={playing}>
        {playing ? <Pause size={16} /> : <Play size={16} />}
        {playing ? 'Stop the dhol' : 'Play the dhol'}
      </button>
    </div>
  );
}

export default function Culture() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const progress = useScrollProgress(pinRef);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setShift(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section id="culture" className="culture">
      <div className="culture__pin" ref={pinRef} style={{ '--shift': `${shift}px` }}>
        <div className="culture__sticky">
          <div className="culture__bg-word" aria-hidden="true" style={{ transform: `translateX(${-progress * 30}%)` }}>
            ਸਭਿਆਚਾਰ · Culture · ਸਭਿਆਚਾਰ
          </div>
          <div className="culture__track" ref={trackRef} style={{ transform: `translate3d(${-progress * shift}px,0,0)` }}>
            <header className="culture__intro">
              <span className="kicker"><i>03</i> Punjabi Culture</span>
              <h2 className="display">
                A culture that <em>dances</em>,<br />stitches &amp; sings.
              </h2>
              <p className="section-sub">
                Joy is a discipline in Punjab. Keep scrolling to move through the dances, threads and songs of the
                land.
              </p>
              <div className="culture__progress" aria-hidden="true">
                <span style={{ transform: `scaleX(${progress})` }} />
              </div>
            </header>

            {culture.map((c, i) => (
              <article key={c.id} className="ccard glow">
                <div className="ccard__media">
                  {c.photo ? (
                    <img
                      src={c.photo.src}
                      alt={c.photo.alt}
                      loading="lazy"
                      decoding="async"
                      style={c.position ? { objectPosition: c.position } : undefined}
                    />
                  ) : (
                    <MusicVisual />
                  )}
                  <span className="ccard__num">0{i + 1}</span>
                </div>
                <div className="ccard__body">
                  <span className="ccard__kicker">{c.kicker}</span>
                  <h3>
                    {c.title} <span className="ccard__g">{c.gurmukhi}</span>
                  </h3>
                  <p>{c.text}</p>
                  <ul>
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
