import { photos, stats, timeline } from '../data/site';
import { useCountUp, useInView } from '../motion';

function Stat({ value, suffix, label, plain, start, delay }) {
  const n = useCountUp(value, start);
  return (
    <div className="stat" data-reveal style={{ '--d': `${delay}ms` }}>
      <div className="stat__value">
        {plain ? n : n.toLocaleString('en-IN')}
        <span>{suffix}</span>
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

const statement =
  'Punjab is not simply a place on a map. It is the rhythm of a dhol at harvest, the hush of dawn at the Golden Temple, and an open door with a meal waiting inside.';

export default function Discover() {
  const [statsRef, statsIn] = useInView({ threshold: 0.4 });

  return (
    <section id="discover" className="section discover">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="kicker"><i>01</i> Discover Punjab</span>
          <h2 className="display">
            Where every field is <em>gold</em>,<br /> and every stranger is <em>family</em>.
          </h2>
        </header>

        <p className="statement" aria-label={statement}>
          {statement.split(' ').map((w, i) => (
            <span key={i} data-reveal style={{ '--d': `${i * 28}ms` }} aria-hidden="true">
              {w}{' '}
            </span>
          ))}
        </p>

        <div className="discover__grid">
          <figure className="discover__figure glow" data-reveal data-parallax-host>
            <div className="parallax-frame">
              <img data-parallax="-0.12" src={photos.templeDay.src} alt={photos.templeDay.alt} loading="lazy" decoding="async" />
            </div>
            <figcaption>Sri Harmandir Sahib, Amritsar</figcaption>
          </figure>
          <div className="discover__copy" data-reveal style={{ '--d': '120ms' }}>
            <p className="lede">
              <span className="dropcap">P</span>unjab takes its name from the Persian <em>panj</em> (five) and{' '}
              <em>āb</em> (waters). It is a land shaped by rivers and rebuilt by its people again and again.
            </p>
            <p>
              The cradle of the Indus Valley, the birthplace of Sikhism and the heartland of India’s
              Green Revolution, Punjab carries its history lightly and its hospitality fiercely. Its identity is
              stitched from many threads: Sikh, Hindu, Muslim and Sufi; warrior and farmer; poet and dancer.
            </p>
            <p>
              Its idea of <em>chardi kala</em>, an undying optimism, can be felt everywhere: in the generosity of
              the langar, in the ring of a <em>boli</em> at a wedding, in a farmer’s faith in the next monsoon.
            </p>
          </div>
        </div>

        <div className="stats" ref={statsRef}>
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} start={statsIn} delay={i * 90} />
          ))}
        </div>
      </div>

      <div className="timeline" aria-label="A brief history of Punjab">
        <div className="timeline__track">
          {timeline.map((t, i) => (
            <article key={t.year} className="timeline__item glow" data-reveal style={{ '--d': `${i * 70}ms` }}>
              <span className="timeline__year">{t.year}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
