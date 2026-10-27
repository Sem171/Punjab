import React from 'react';
import { Compass, ExternalLink, Heart, Shield, Landmark } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-tertiary)',
      borderTop: '1px solid var(--border-medium)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        {/* Top 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Col 1: Brand & Ethos */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                background: 'linear-gradient(135deg, var(--color-crimson) 0%, var(--color-emerald) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFD700'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 8H21L16 12L18 19L12 15L6 19L8 12L3 8H9L12 2Z" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                  Discover Punjab
                </h4>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-mustard)', fontWeight: 700 }}>
                  Land of Five Rivers
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              An educational and cultural portal chronicling Punjab’s history, heritage, agriculture, cuisine, and world-renowned spirit of <em>Chardi Kala</em>.
            </p>

            <div style={{
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              fontSize: '0.85rem'
            }}>
              <span className="gurmukhi" style={{ display: 'block', color: 'var(--color-emerald)', fontWeight: 700, fontSize: '0.95rem' }}>
                ਨਾਨਕ ਨਾਮ ਚੜ੍ਹਦੀ ਕਲਾ, ਤੇਰੇ ਭਾਣੇ ਸਰਬੱਤ ਦਾ ਭਲਾ
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Universal Peace, Goodwill & High Spirits for All
              </span>
            </div>
          </div>

          {/* Col 2: Exploration Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>
              Heritage & Places
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { name: 'About Punjab', id: 'about' },
                { name: 'Historical Timeline', id: 'history' },
                { name: 'Geography & Rivers', id: 'geography' },
                { name: 'Culture & Traditions', id: 'culture' },
                { name: 'Punjabi Cuisine', id: 'food' },
                { name: 'Tourism Destinations', id: 'tourism' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-mustard)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Knowledge Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>
              Knowledge & Society
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { name: 'Famous Personalities', id: 'personalities' },
                { name: 'Economy & Agriculture', id: 'economy' },
                { name: 'Festivals of Punjab', id: 'festivals' },
                { name: 'Language & Phrasebook', id: 'language' },
                { name: 'Interactive Quiz', id: 'quiz' },
                { name: 'Visual Gallery', id: 'gallery' },
                { name: 'Visitor FAQs & Contact', id: 'contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-emerald)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Resources */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>
              Official Portals & Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { name: 'Punjab Tourism Official', url: 'https://punjabtourism.punjab.gov.in' },
                { name: 'Government of Punjab Portal', url: 'https://punjab.gov.in' },
                { name: 'Punjab Agricultural University (PAU)', url: 'https://www.pau.edu' },
                { name: 'Central Sikh Museum (SGPC)', url: 'https://www.sgpc.net' },
                { name: 'Archaeological Survey of India (ASI)', url: 'https://asi.nic.in' }
              ].map((ext, idx) => (
                <li key={idx}>
                  <a
                    href={ext.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-crimson)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <span>{ext.name}</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clear Historical Scope Disclaimer Box */}
        <div style={{
          padding: '1.25rem 1.5rem',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-medium)',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}>
          <Shield size={20} style={{ color: 'var(--color-crimson)', flexShrink: 0, marginTop: '0.2rem' }} />
          <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            <strong>Educational Scope & Historical Clarification:</strong> This website is an educational resource focusing primarily on the modern Indian state of Punjab (formed 1 November 1966, area: 50,362 sq km, capital: Chandigarh). It respects and explicitly distinguishes modern Punjab from historical Greater Punjab, which extended across northwestern South Asia into modern-day Pakistan, Haryana, and Himachal Pradesh.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-light)',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Discover Punjab — The Land of Five Rivers. Built with React & Vite.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Crafted with devotion for students, tourists, and heritage lovers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
