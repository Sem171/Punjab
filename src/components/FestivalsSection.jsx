import React from 'react';
import { Calendar, Sparkles, Flame, Moon, Sun, ChevronRight, Music } from 'lucide-react';
import { festivals } from '../data/festivalsData';
import ImgWithFallback from './ImgWithFallback';

export default function FestivalsSection({ onSelectDetail }) {
  return (
    <section id="festivals" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Calendar size={14} />
            <span>Seasonal Joy & Sacred Rites</span>
          </span>
          <h2 className="section-title">
            Festivals & Celebrations of Punjab
          </h2>
          <p className="section-subtitle">
            From the crackling winter bonfires of Lohri and martial valor of Hola Mohalla to the radiant illumination of Bandi Chhor Divas.
          </p>
        </div>

        {/* Festivals Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {festivals.map((fest) => (
            <div 
              key={fest.id}
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
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <ImgWithFallback
                    src={fest.image}
                    alt={fest.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(12, 19, 15, 0.85)',
                    color: '#FFE299',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(4px)'
                  }}>
                    {fest.timing}
                  </div>
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-crimson)', fontWeight: 700 }}>
                      {fest.category}
                    </span>
                    <span className="gurmukhi" style={{ fontSize: '1rem', color: 'var(--color-mustard-hover)' }}>
                      {fest.punjabiName}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', margin: '0.2rem 0', color: 'var(--text-primary)' }}>
                    {fest.name}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-emerald)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {fest.tagline}
                  </div>

                  <p style={{ fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {fest.significance}
                  </p>

                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                      Key Festivities:
                    </strong>
                    <ul style={{ paddingLeft: '1.1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {fest.traditions.slice(0, 3).map((tr, idx) => (
                        <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>
                          {tr}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer with Details Modal Trigger */}
              <div style={{
                padding: '1rem 1.75rem',
                borderTop: '1px solid var(--border-light)',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {fest.timing}
                </span>
                <button
                  onClick={() => onSelectDetail({
                    title: fest.name,
                    subtitle: `${fest.punjabiName} • ${fest.timing}`,
                    tag: fest.category,
                    image: fest.image,
                    description: fest.significance,
                    details: fest.historicalNote,
                    keyFacts: fest.traditions
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
                  <span>Traditions & Lore</span>
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
