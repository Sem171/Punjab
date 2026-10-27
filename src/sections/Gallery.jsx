import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { gallery } from '../data/site';

export default function Gallery() {
  const [open, setOpen] = useState(-1);
  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback((d) => setOpen((i) => (i + d + gallery.length) % gallery.length), []);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, step]);

  const item = gallery[open];

  return (
    <section id="gallery" className="section gallery">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="kicker"><i>06</i> Gallery</span>
          <h2 className="display">
            Punjab, in <em>light</em>.
          </h2>
        </header>

        <div className="mosaic">
          {gallery.map((g, i) => (
            <button
              key={g.photo.src + i}
              className={`mosaic__item glow ${g.wide ? 'is-wide' : ''} ${g.tall ? 'is-tall' : ''}`}
              onClick={() => setOpen(i)}
              data-reveal
              style={{ '--d': `${(i % 4) * 70}ms` }}
              aria-label={`Open photo: ${g.caption}`}
            >
              <img src={g.photo.src} alt={g.photo.alt} loading="lazy" decoding="async" />
              <span className="mosaic__cap">{g.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {item && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Close">
            <X size={26} />
          </button>
          <button
            className="lightbox__nav is-prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={30} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} key={open}>
            <img src={item.photo.src} alt={item.photo.alt} />
            <figcaption>
              <span>{item.caption}</span>
              <a href={item.photo.source} target="_blank" rel="noreferrer">
                Photo: {item.photo.author} · {item.photo.license}
              </a>
            </figcaption>
          </figure>
          <button
            className="lightbox__nav is-next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
