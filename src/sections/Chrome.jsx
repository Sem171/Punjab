import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../data/site';

export function Preloader({ done }) {
  return (
    <div className={`preloader ${done ? 'is-done' : ''}`} aria-hidden="true">
      <div className="preloader__mark">
        <span className="preloader__gurmukhi">ਪੰਜਾਬ</span>
        <span className="preloader__line" />
        <span className="preloader__latin">Land of Five Rivers</span>
      </div>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 40);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="nav__brand" aria-label="Punjab — back to top">
          <span className="nav__brand-g">ਪੰਜਾਬ</span>
          <span className="nav__brand-l">Punjab</span>
        </a>
        <nav className="nav__links" aria-label="Sections">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : ''}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#places" className="nav__cta">Plan a journey</a>
        <button className="nav__toggle" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
        <span className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
      </header>

      <div className={`menu ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <button className="menu__close" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={26} />
        </button>
        <nav>
          {nav.map((n, i) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} style={{ '--i': i }}>
              <span className="menu__num">0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
