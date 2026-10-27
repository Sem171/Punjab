import { useState } from 'react';
import { agriFacts, photos, rivers, seasons } from '../data/site';
import { useInView } from '../motion';

// Stylised, not-to-scale courses: tributaries descend from the Himalaya (top right)
// and gather at Panjnad before joining the Indus (left).
const paths = {
  indus: 'M70 10 C110 180 70 360 120 470 C140 515 150 540 160 560',
  jhelum: 'M330 20 C305 120 255 220 232 300 C215 360 200 400 188 432',
  chenab: 'M440 20 C405 140 345 260 292 350 C250 420 205 462 140 505',
  ravi: 'M575 36 C530 150 468 258 405 338 C352 400 300 430 258 448',
  beas: 'M770 36 C705 118 645 198 606 258 C584 296 562 330 540 352',
  sutlej: 'M930 70 C880 160 770 250 666 296 C602 322 566 342 540 352 C470 402 382 468 272 496 C220 508 186 506 140 505',
};
const labels = {
  jhelum: [330, 20],
  chenab: [440, 20],
  ravi: [575, 36],
  beas: [770, 36],
  sutlej: [930, 70],
};

function RiverMap({ active, setActive }) {
  const [ref, inView] = useInView({ threshold: 0.35 });
  return (
    <div ref={ref} className={`rivermap ${inView ? 'is-drawn' : ''}`}>
      <svg viewBox="0 0 1000 560" role="img" aria-label="Stylised map of the five rivers of Punjab joining the Indus">
        <defs>
          <filter id="river-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="plain" cx="45%" cy="60%" r="70%">
            <stop offset="0" stopColor="#d4a64a" stopOpacity="0.14" />
            <stop offset="1" stopColor="#d4a64a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1000" height="560" fill="url(#plain)" />
        {/* Himalayan ridge */}
        <path
          className="rivermap__ridge"
          d="M240 60 L300 18 L350 50 L410 8 L470 44 L540 12 L600 46 L660 14 L730 52 L800 20 L860 56 L930 30 L1000 70"
        />
        <text x="228" y="66" className="rivermap__note" textAnchor="end">Himalaya</text>

        <path d={paths.indus} className="rivermap__indus" />
        <text x="58" y="300" className="rivermap__note" transform="rotate(-82 58 300)">Indus · ਸਿੰਧ</text>

        {rivers.map((r, i) => (
          <g
            key={r.id}
            className={`rivermap__river ${active === r.id ? 'is-active' : ''}`}
            style={{ '--c': r.color, '--i': i }}
            onMouseEnter={() => setActive(r.id)}
            onFocus={() => setActive(r.id)}
            onClick={() => setActive(r.id)}
            tabIndex={0}
            role="button"
            aria-pressed={active === r.id}
            aria-label={`${r.name} river`}
          >
            <path d={paths[r.id]} className="rivermap__hit" />
            <path d={paths[r.id]} className="rivermap__line" pathLength="1" />
            <path d={paths[r.id]} className="rivermap__flow" />
            <circle cx={labels[r.id][0]} cy={labels[r.id][1]} r="5" className="rivermap__source" />
            <text x={labels[r.id][0] + 12} y={labels[r.id][1] + 34} className="rivermap__label">{r.name}</text>
            <text x={labels[r.id][0] + 12} y={labels[r.id][1] + 54} className="rivermap__label-g">{r.gurmukhi}</text>
          </g>
        ))}

        <circle cx="140" cy="505" r="7" className="rivermap__confluence" />
        <text x="160" y="530" className="rivermap__note">Panjnad · the five waters meet</text>
        <circle cx="540" cy="352" r="5" className="rivermap__confluence" />
        <text x="552" y="378" className="rivermap__note">Harike</text>
      </svg>
    </div>
  );
}

export default function Rivers() {
  const [active, setActive] = useState('sutlej');
  const [season, setSeason] = useState(seasons[0].id);
  const river = rivers.find((r) => r.id === active);
  const s = seasons.find((x) => x.id === season);

  return (
    <section id="rivers" className="section rivers">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="kicker"><i>02</i> Land of Five Rivers</span>
          <h2 className="display">
            <em>Panj</em> + <em>Āb</em>.<br />Five waters, one civilisation.
          </h2>
          <p className="section-sub">
            Five Himalayan rivers wind across an alluvial plain so fertile that it has fed empires. Hover or tap a
            river to follow its course.
          </p>
        </header>

        <div className="rivers__stage">
          <RiverMap active={active} setActive={setActive} />
          <aside className="rivers__card glass glow" key={river.id} style={{ '--c': river.color }} aria-live="polite">
            <span className="rivers__g">{river.gurmukhi}</span>
            <h3>{river.name}</h3>
            <p className="rivers__vedic">Vedic name: <em>{river.vedic}</em></p>
            <p>{river.text}</p>
            <p className="rivers__today">{river.today}</p>
            <div className="rivers__pills" role="group" aria-label="Choose a river">
              {rivers.map((r) => (
                <button
                  key={r.id}
                  className={r.id === active ? 'is-active' : ''}
                  style={{ '--c': r.color }}
                  onClick={() => setActive(r.id)}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="fields" data-parallax-host>
        <div className="fields__media" data-parallax="-0.25">
          <img src={photos.mustardField.src} alt={photos.mustardField.alt} loading="lazy" decoding="async" />
        </div>
        <div className="fields__veil" />
        <div className="fields__text wrap">
          <span className="kicker" data-reveal>The Golden Fields</span>
          <h2 className="mega" data-reveal style={{ '--d': '100ms' }}>
            The <em>granary</em> of India
          </h2>
          <p data-reveal style={{ '--d': '200ms' }}>
            Just 1.5% of India’s land, yet for decades the breadbasket that kept a nation fed.
          </p>
        </div>
      </div>

      <div className="wrap seasons">
        <div className="seasons__tabs" role="tablist" aria-label="A year in the fields" data-reveal>
          {seasons.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={x.id === season}
              className={x.id === season ? 'is-active' : ''}
              style={{ '--tint': x.tint }}
              onClick={() => setSeason(x.id)}
            >
              <span>{x.label}</span>
              <small>{x.months}</small>
            </button>
          ))}
        </div>
        <div className="seasons__panel" style={{ '--tint': s.tint }}>
          <div className="seasons__media glow">
            {seasons.map((x) => (
              <img
                key={x.id}
                src={x.photo.src}
                alt={x.id === season ? x.photo.alt : ''}
                className={x.id === season ? 'is-active' : ''}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="seasons__copy" key={s.id}>
            <span className="seasons__crop">{s.crop}</span>
            <h3>{s.label} in Punjab</h3>
            <p>{s.text}</p>
            <dl className="agri">
              {agriFacts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
