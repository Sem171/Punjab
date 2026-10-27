import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { mapRefs, places } from '../data/site';

// Equirectangular projection over Indian Punjab's bounding box onto a 600×640 canvas.
const BOUNDS = { lonMin: 73.7, lonMax: 77.1, latMin: 29.4, latMax: 32.7 };
const W = 600;
const H = 640;
const project = (lat, lon) => [
  ((lon - BOUNDS.lonMin) / (BOUNDS.lonMax - BOUNDS.lonMin)) * W,
  ((BOUNDS.latMax - lat) / (BOUNDS.latMax - BOUNDS.latMin)) * H,
];

// Simplified outline of the state (approximate, for orientation only).
const outline = [
  [32.52, 75.62], [32.4, 75.9], [32.15, 75.95], [31.95, 76.0], [31.75, 76.2], [31.5, 76.32], [31.38, 76.62],
  [31.08, 76.72], [30.85, 76.92], [30.62, 76.9], [30.38, 76.74], [30.16, 76.42], [29.95, 76.18], [29.82, 75.92],
  [29.58, 75.58], [29.55, 75.2], [29.72, 74.86], [29.92, 74.5], [30.1, 74.0], [30.38, 73.88], [30.62, 74.08],
  [30.92, 74.52], [31.14, 74.54], [31.45, 74.55], [31.62, 74.52], [31.88, 74.62], [32.08, 74.96], [32.28, 75.32],
];
const outlinePath =
  outline.map(([la, lo], i) => `${i ? 'L' : 'M'}${project(la, lo).map((n) => n.toFixed(1)).join(' ')}`).join(' ') + 'Z';

const line = (pts) =>
  pts.map(([la, lo], i) => `${i ? 'L' : 'M'}${project(la, lo).map((n) => n.toFixed(1)).join(' ')}`).join(' ');
const riverLines = [
  { name: 'Ravi', d: line([[32.45, 75.7], [32.2, 75.3], [31.95, 74.95], [31.75, 74.75], [31.6, 74.55]]) },
  { name: 'Beas', d: line([[31.98, 75.95], [31.7, 75.55], [31.45, 75.2], [31.15, 74.97]]) },
  { name: 'Sutlej', d: line([[31.42, 76.38], [31.0, 76.52], [30.95, 76.1], [30.98, 75.6], [31.15, 74.97], [30.95, 74.6], [30.6, 74.15], [30.35, 73.9]]) },
];

export default function Places() {
  const [activeId, setActiveId] = useState(places[0].id);
  const active = places.find((p) => p.id === activeId);

  return (
    <section id="places" className="section places">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="kicker"><i>04</i> Famous Places</span>
          <h2 className="display">
            Sacred, defiant, <em>unforgettable</em>.
          </h2>
          <p className="section-sub">Tap a marker to explore four places that define the soul of Punjab.</p>
        </header>

        <div className="places__stage">
          <div className="pmap glass" data-reveal>
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Stylised map of Punjab with famous places marked">
              <defs>
                <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#2a2214" />
                  <stop offset="1" stopColor="#15110b" />
                </linearGradient>
                <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0V24" fill="none" stroke="rgba(212,166,74,0.07)" />
                </pattern>
              </defs>
              <rect width={W} height={H} fill="url(#grid)" />
              <path d={outlinePath} className="pmap__land" />
              {riverLines.map((r) => (
                <path key={r.name} d={r.d} className="pmap__river" />
              ))}
              <text x="70" y="40" className="pmap__country">PAKISTAN</text>
              <text x="440" y="70" className="pmap__country">HIMACHAL</text>
              <text x="440" y="610" className="pmap__country">HARYANA</text>
              <text x="40" y="620" className="pmap__country">RAJASTHAN</text>

              {mapRefs.map((c) => {
                const [x, y] = project(c.lat, c.lon);
                return (
                  <g key={c.name} className="pmap__ref">
                    <circle cx={x} cy={y} r="2.5" />
                    <text x={c.end ? x - 8 : x + 8} y={y + 4} textAnchor={c.end ? 'end' : 'start'}>{c.name}</text>
                  </g>
                );
              })}

              {places.map((p, i) => {
                const [bx, by] = project(p.lat, p.lon);
                const [dx, dy] = p.nudge || [0, 0];
                const [lx, ly, anchor = 'start'] = p.label || [16, -12];
                const x = bx + dx;
                const y = by + dy;
                return (
                  <g
                    key={p.id}
                    className={`pmap__pin ${p.id === activeId ? 'is-active' : ''}`}
                    transform={`translate(${x} ${y})`}
                    tabIndex={0}
                    role="button"
                    aria-label={p.name}
                    aria-pressed={p.id === activeId}
                    onClick={() => setActiveId(p.id)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveId(p.id)}
                    style={{ '--i': i }}
                  >
                    {p.nudge && <line x1={-dx} y1={-dy} x2="0" y2="0" className="pmap__leader" />}
                    <circle r="22" className="pmap__pulse" />
                    <circle r="9" className="pmap__dot" />
                    <text x={lx} y={ly} textAnchor={anchor} className="pmap__label">{p.name}</text>
                  </g>
                );
              })}
            </svg>
            <p className="pmap__note">Stylised map · not to scale</p>
          </div>

          <article className="pcard glow" key={active.id}>
            <div className="pcard__media">
              <img src={active.photo.src} alt={active.photo.alt} decoding="async" />
            </div>
            <div className="pcard__body">
              <p className="pcard__loc"><MapPin size={14} /> {active.city}</p>
              <h3>{active.name}</h3>
              <p className="pcard__g">{active.local}</p>
              <p className="pcard__tagline">{active.tagline}</p>
              <p>{active.text}</p>
              <dl className="pcard__facts">
                {active.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </div>

        <div className="places__grid">
          {places.map((p, i) => (
            <button
              key={p.id}
              className={`ptile glow ${p.id === activeId ? 'is-active' : ''}`}
              onClick={() => {
                setActiveId(p.id);
                document.querySelector('.places__stage')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              data-reveal
              style={{ '--d': `${i * 90}ms` }}
            >
              <img src={p.photo.src} alt="" loading="lazy" decoding="async" />
              <span className="ptile__veil" />
              <span className="ptile__text">
                <small>{p.city}</small>
                <strong>{p.name}</strong>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
