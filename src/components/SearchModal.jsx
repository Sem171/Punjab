import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, BookOpen, Utensils, User, Calendar, ArrowRight } from 'lucide-react';
import { tourismDestinations } from '../data/tourismData';
import { historyEras } from '../data/historyData';
import { punjabiDishes } from '../data/foodData';
import { personalities } from '../data/personalitiesData';
import { festivals } from '../data/festivalsData';

export default function SearchModal({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Flatten searchable items
  const cleanQ = query.trim().toLowerCase();

  const results = [];
  if (cleanQ.length >= 2) {
    // 1. Tourism
    tourismDestinations.forEach(item => {
      if (item.name.toLowerCase().includes(cleanQ) || item.description.toLowerCase().includes(cleanQ) || item.location.toLowerCase().includes(cleanQ)) {
        results.push({
          type: 'Tourism',
          icon: MapPin,
          title: item.name,
          subtitle: `${item.location} • ${item.category}`,
          sectionId: 'tourism',
          raw: item
        });
      }
    });

    // 2. History Events
    historyEras.forEach(era => {
      era.events.forEach(evt => {
        if (evt.title.toLowerCase().includes(cleanQ) || evt.description.toLowerCase().includes(cleanQ) || evt.year.toLowerCase().includes(cleanQ)) {
          results.push({
            type: 'History',
            icon: BookOpen,
            title: evt.title,
            subtitle: `${evt.year} • ${era.name}`,
            sectionId: 'history',
            raw: evt
          });
        }
      });
    });

    // 3. Food
    punjabiDishes.forEach(dish => {
      if (dish.name.toLowerCase().includes(cleanQ) || dish.description.toLowerCase().includes(cleanQ) || dish.punjabiName.includes(query)) {
        results.push({
          type: 'Cuisine',
          icon: Utensils,
          title: dish.name,
          subtitle: `${dish.punjabiName} • ${dish.category}`,
          sectionId: 'food',
          raw: dish
        });
      }
    });

    // 4. Personalities
    personalities.forEach(p => {
      if (p.name.toLowerCase().includes(cleanQ) || p.bio.toLowerCase().includes(cleanQ) || p.role.toLowerCase().includes(cleanQ)) {
        results.push({
          type: 'Personality',
          icon: User,
          title: p.name,
          subtitle: `${p.role} (${p.lifespan})`,
          sectionId: 'personalities',
          raw: p
        });
      }
    });

    // 5. Festivals
    festivals.forEach(f => {
      if (f.name.toLowerCase().includes(cleanQ) || f.significance.toLowerCase().includes(cleanQ)) {
        results.push({
          type: 'Festival',
          icon: Calendar,
          title: f.name,
          subtitle: f.timing,
          sectionId: 'festivals',
          raw: f
        });
      }
    });
  }

  const handleSelect = (item) => {
    onClose();
    if (onSelectResult) {
      onSelectResult(item);
    } else {
      const el = document.getElementById(item.sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        backgroundColor: 'rgba(12, 19, 15, 0.8)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5rem 1rem 2rem 1rem'
      }}
    >
      <div 
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-medium)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--border-light)',
          background: 'var(--bg-secondary)'
        }}>
          <Search size={22} style={{ color: 'var(--color-mustard)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Punjab's history, food, places, personalities..."
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              outline: 'none'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Results Container */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '0.75rem' }}>
          {query.trim().length < 2 ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Type at least 2 characters to search across history, cuisine, destinations, and icons...
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                {['Golden Temple', 'Bhagat Singh', 'Sarson da Saag', 'Vaisakhi', 'Ludhiana', 'Phulkari'].map((quick) => (
                  <button
                    key={quick}
                    onClick={() => setQuery(quick)}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    {quick}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '2.5rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>
                No matches found for "{query}"
              </p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem' }}>
                Try searching for "Amritsar", "Sutlej", "Bhangra", "Guru Nanak", or "Lassi"
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Found {results.length} result{results.length > 1 ? 's' : ''}
              </div>
              {results.map((res, index) => {
                const IconComp = res.icon;
                return (
                  <div
                    key={index}
                    onClick={() => handleSelect(res)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      transition: 'background-color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-mustard-subtle)',
                        color: 'var(--color-mustard-hover)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComp size={18} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                          {res.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {res.subtitle}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-emerald)', fontSize: '0.8rem', fontWeight: 600 }}>
                      <span>{res.type}</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Key hint */}
        <div style={{
          padding: '0.6rem 1.25rem',
          borderTop: '1px solid var(--border-light)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          <span>Press <strong>ESC</strong> to close</span>
          <span>Discover Punjab Educational Portal</span>
        </div>
      </div>
    </div>
  );
}
