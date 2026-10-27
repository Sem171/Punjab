import { nav, photos } from '../data/site';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const credits = Object.values(photos);
  return (
    <footer className="footer">
      <div className="footer__hero" data-parallax-host>
        <div className="footer__media" data-parallax="-0.18">
          <img src={photos.templeSunrise.src} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="footer__veil" />
        <div className="wrap footer__welcome">
          <p className="footer__g" data-reveal>ਜੀ ਆਇਆਂ ਨੂੰ</p>
          <h2 className="mega" data-reveal style={{ '--d': '100ms' }}>
            You are <em>welcome</em> here.
          </h2>
          <a href="#top" className="btn btn--gold" data-reveal style={{ '--d': '200ms' }}>
            Back to the beginning
          </a>
        </div>
      </div>

      <div className="wrap footer__grid">
        <div>
          <p className="footer__brand">ਪੰਜਾਬ · Punjab</p>
          <p className="footer__muted">
            A love letter to the land of five rivers. Made for curious travellers, homesick hearts and everyone in
            between.
          </p>
        </div>
        <nav aria-label="Footer">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </nav>
        <details className="footer__credits">
          <summary>Photo credits ({credits.length})</summary>
          <ul>
            {credits.map((c) => (
              <li key={c.src}>
                <a href={c.source} target="_blank" rel="noreferrer">{c.alt}</a> · {c.author} · {c.license}
              </li>
            ))}
          </ul>
          <p className="footer__muted">Photos via Wikimedia Commons, used under their Creative Commons licences.</p>
        </details>
      </div>
      <p className="wrap footer__base">© {YEAR} Discover Punjab · Chardi Kala</p>
    </footer>
  );
}
