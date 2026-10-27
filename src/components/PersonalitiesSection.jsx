import React, { useState } from 'react';
import { Users, Award, BookOpen, Quote, ChevronRight, CheckCircle2 } from 'lucide-react';
import { personalities } from '../data/personalitiesData';
import ImgWithFallback from './ImgWithFallback';

export default function PersonalitiesSection({ onSelectDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Personalities (11)' },
    { id: 'Freedom Fighters', label: 'Freedom Fighters & Martyrs' },
    { id: 'Spiritual Leaders', label: 'Spiritual Pioneer' },
    { id: 'Rulers & Monarchs', label: 'Sovereign Emperor' },
    { id: 'Literary Icons', label: 'Literary Legends' },
    { id: 'Sports Legends', label: 'Sports Champions' },
    { id: 'Arts, Cinema & Global Music', label: 'Global Music & Arts' }
  ];

  const filteredPersonalities = selectedCategory === 'all'
    ? personalities
    : personalities.filter(p => p.category === selectedCategory);

  return (
    <section id="personalities" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Users size={14} />
            <span>Icons of Courage & Creativity</span>
          </span>
          <h2 className="section-title">
            Famous Personalities of Punjab
          </h2>
          <p className="section-subtitle">
            From the universal spiritual wisdom of Guru Nanak Dev Ji and the fiery martyrdom of Bhagat Singh to literary doyennes and global cultural ambassadors.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? 'var(--color-crimson)' : 'var(--border-medium)',
                backgroundColor: selectedCategory === cat.id ? 'var(--color-crimson)' : 'var(--bg-card)',
                color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Personalities Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredPersonalities.map((person) => (
            <div 
              key={person.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-card)',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <ImgWithFallback
                    src={person.image}
                    alt={person.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    padding: '0.6rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(12, 19, 15, 0.85)',
                    color: '#FFF6E0',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-mustard)', fontWeight: 700 }}>
                        {person.category}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                        {person.lifespan}
                      </div>
                    </div>
                    <span className="gurmukhi" style={{ fontSize: '1rem', color: '#FFF' }}>
                      {person.punjabiName}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.45rem', margin: '0 0 0.35rem 0', color: 'var(--text-primary)' }}>
                    {person.name}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-emerald)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {person.role}
                  </div>

                  {/* Connection to Punjab callout */}
                  <div style={{
                    padding: '0.6rem 0.85rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    borderLeft: '3px solid var(--color-mustard)',
                    marginBottom: '1rem'
                  }}>
                    <strong>Connection to Punjab:</strong> {person.connection}
                  </div>

                  {person.quote && (
                    <div style={{
                      fontSize: '0.88rem',
                      fontStyle: 'italic',
                      color: 'var(--text-secondary)',
                      marginBottom: '1rem',
                      lineHeight: '1.5'
                    }}>
                      {person.quote}
                    </div>
                  )}

                  <div>
                    <strong style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                      Key Historic Achievements:
                    </strong>
                    <ul style={{ paddingLeft: '1.1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {person.achievements.slice(0, 2).map((ach, i) => (
                        <li key={i} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer with Details Modal Trigger */}
              <div style={{
                padding: '1rem 1.5rem',
                borderTop: '1px solid var(--border-light)',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Read complete profile
                </span>
                <button
                  onClick={() => onSelectDetail({
                    title: person.name,
                    subtitle: `${person.punjabiName} (${person.lifespan}) • ${person.role}`,
                    tag: person.category,
                    image: person.image,
                    quote: person.quote,
                    description: person.bio,
                    details: `Geographical Roots: ${person.connection}`,
                    keyFacts: person.achievements
                  })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-crimson)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  <span>Full Biography</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
