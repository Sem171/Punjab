import { useState } from 'react';
import { food, photos } from '../data/site';

export default function Food() {
  const [activeId, setActiveId] = useState(food[0].id);
  const active = food.find((f) => f.id === activeId);

  return (
    <section id="food" className="section food">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="kicker"><i>05</i> Punjabi Food</span>
          <h2 className="display">
            Generous, buttery, <em>unapologetic</em>.
          </h2>
          <p className="section-sub">
            In Punjab, food is love made visible, served with a heap of white butter and a refusal to take no for an
            answer.
          </p>
        </header>

        <div className="menu-board">
          <ol className="menu-board__list">
            {food.map((f, i) => (
              <li key={f.id}>
                <button
                  className={`dish ${f.id === activeId ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveId(f.id)}
                  onFocus={() => setActiveId(f.id)}
                  onClick={() => setActiveId(f.id)}
                  aria-pressed={f.id === activeId}
                  data-reveal
                  style={{ '--d': `${i * 80}ms` }}
                >
                  <span className="dish__num">0{i + 1}</span>
                  <span className="dish__name">{f.name}</span>
                  <span className="dish__g">{f.gurmukhi}</span>
                </button>
                {/* Inline detail for narrow screens, where the stage sits below the list */}
                {f.id === activeId && (
                  <div className="dish__inline">
                    <img src={f.photo.src} alt={f.photo.alt} loading="lazy" decoding="async" style={f.position ? { objectPosition: f.position } : undefined} />
                    <p>{f.text}</p>
                  </div>
                )}
              </li>
            ))}
          </ol>

          <div className="menu-board__stage glow" data-reveal style={{ '--d': '150ms' }}>
            {food.map((f) => (
              <img
                key={f.id}
                src={f.photo.src}
                alt={f.id === activeId ? f.photo.alt : ''}
                className={f.id === activeId ? 'is-active' : ''}
                style={f.position ? { objectPosition: f.position } : undefined}
                loading="lazy"
                decoding="async"
              />
            ))}
            <div className="menu-board__veil" />
            <div className="menu-board__detail glass" key={active.id}>
              <h3>{active.name}</h3>
              <p>{active.text}</p>
              <dl>
                <div>
                  <dt>Season</dt>
                  <dd>{active.when}</dd>
                </div>
                <div>
                  <dt>Best with</dt>
                  <dd>{active.pair}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="langar" data-parallax-host>
        <div className="langar__media" data-parallax="-0.2">
          <img src={photos.langar.src} alt={photos.langar.alt} loading="lazy" decoding="async" />
        </div>
        <div className="langar__veil" />
        <div className="langar__text wrap">
          <span className="kicker" data-reveal>Guru ka Langar · ਲੰਗਰ</span>
          <blockquote data-reveal style={{ '--d': '120ms' }}>
            Since Guru Nanak’s time, every gurdwara kitchen has fed anyone who walks in, for free, seated side by side
            on the floor, regardless of caste, creed or crown.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
