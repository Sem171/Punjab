import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { heroSlides } from '../data/site';
import { prefersReducedMotion } from '../motion';

const SLIDE_MS = 7000;

// Drifting embers of gold light over the hero, on a cheap 2D canvas.
function Embers() {
  const ref = useRef(null);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w, h, raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const count = w < 700 ? 28 : 60;
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vy: -(Math.random() * 0.35 + 0.08),
      vx: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.6 + 0.2,
      t: Math.random() * Math.PI * 2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.t += 0.02;
        p.x += p.vx + Math.sin(p.t) * 0.12;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        const alpha = p.a * (0.6 + 0.4 * Math.sin(p.t * 1.7));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `rgba(255, 214, 140, ${alpha})`);
        g.addColorStop(1, 'rgba(255, 214, 140, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <canvas ref={ref} className="hero__embers" aria-hidden="true" />;
}

export default function Hero({ ready }) {
  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (window.scrollY < window.innerHeight * 1.2) setScrollY(window.scrollY);
      });
    };
    const onMove = (e) => {
      setTilt({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  const p = Math.min(1, scrollY / vh);
  const slide = heroSlides[index];

  return (
    <section id="top" className={`hero ${ready ? 'is-ready' : ''}`} aria-label="Welcome to Punjab">
      <div
        className="hero__media"
        style={{ transform: `translate3d(${tilt.x * -18}px, ${scrollY * 0.45 + tilt.y * -12}px, 0) scale(${1.08 + p * 0.12})` }}
      >
        {heroSlides.map((s, i) => (
          <img
            key={s.photo.src}
            src={s.photo.src}
            alt={i === index ? s.photo.alt : ''}
            className={`hero__img ${i === index ? 'is-active' : ''}`}
            style={{ objectPosition: s.position }}
            fetchPriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
      <div className="hero__veil" />
      <Embers />

      <div
        className="hero__gurmukhi"
        aria-hidden="true"
        style={{ transform: `translate3d(${tilt.x * 30}px, ${scrollY * 0.2}px, 0)` }}
      >
        ਪੰਜਾਬ
      </div>

      <div className="hero__content" style={{ transform: `translate3d(0, ${scrollY * -0.25}px, 0)`, opacity: 1 - p * 1.4 }}>
        <p className="hero__eyebrow">
          <span className="rule" /> Northern India · 31° N, 75° E
        </p>
        <h1 className="hero__title">
          {'Punjab'.split('').map((c, i) => (
            <span key={i} style={{ '--i': i }}>{c}</span>
          ))}
        </h1>
        <p className="hero__sub">
          The land of five rivers. Golden temples, golden fields and a spirit that dances. Step into a story
          five thousand years in the making.
        </p>
        <div className="hero__actions">
          <a href="#discover" className="btn btn--gold">Begin the journey</a>
          <a href="#places" className="btn btn--ghost">Explore the map</a>
        </div>
      </div>

      <div className="hero__footer">
        <div className="hero__caption" key={slide.photo.src}>
          <span className="hero__caption-place">{slide.place}</span>
          <span className="hero__caption-where">{slide.where}</span>
        </div>
        <div className="hero__dots" role="tablist" aria-label="Hero scenes">
          {heroSlides.map((s, i) => (
            <button
              key={s.photo.src}
              role="tab"
              aria-selected={i === index}
              aria-label={s.place}
              className={i === index ? 'is-active' : ''}
              onClick={() => setIndex(i)}
            >
              <span style={{ animationDuration: `${SLIDE_MS}ms` }} />
            </button>
          ))}
        </div>
        <a href="#discover" className="hero__scroll" aria-label="Scroll to discover">
          <span>Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
