import React, { useState } from 'react';
import { Landmark, Calendar, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { historyEras } from '../data/historyData';
import ImgWithFallback from './ImgWithFallback';

export default function HistoryTimeline({ onSelectDetail }) {
  const [selectedEraId, setSelectedEraId] = useState('all');

  const filteredEras = selectedEraId === 'all' 
    ? historyEras 
    : historyEras.filter(era => era.id === selectedEraId);

  return (
    <section id="history" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Landmark size={14} />
            <span>Chronicles of Valor & Faith</span>
          </span>
          <h2 className="section-title">
            History of Punjab — An Epic Timeline
          </h2>
          <p className="section-subtitle">
            From the dawn of the Indus Valley Civilization to the sovereign Sikh Empire, freedom struggles, and the modern era.
          </p>
        </div>

        {/* Era Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem'
        }}>
          <button
            onClick={() => setSelectedEraId('all')}
            style={{
              padding: '0.55rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid',
              borderColor: selectedEraId === 'all' ? 'var(--color-mustard)' : 'var(--border-light)',
              backgroundColor: selectedEraId === 'all' ? 'var(--color-mustard)' : 'var(--bg-card)',
              color: selectedEraId === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
              transition: 'all var(--transition-fast)'
            }}
          >
            All Eras (8 Epochs)
          </button>
          {historyEras.map((era) => (
            <button
              key={era.id}
              onClick={() => setSelectedEraId(era.id)}
              style={{
                padding: '0.55rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: selectedEraId === era.id ? era.color : 'var(--border-light)',
                backgroundColor: selectedEraId === era.id ? era.color : 'var(--bg-card)',
                color: selectedEraId === era.id ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {era.name}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {filteredEras.map((era) => (
            <div 
              key={era.id} 
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                position: 'relative'
              }}
            >
              {/* Era Header Banner */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                paddingBottom: '1.5rem',
                marginBottom: '2rem',
                borderBottom: `2px solid ${era.color}`
              }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.2rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--bg-card)',
                    color: era.color,
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    border: '1px solid var(--border-light)'
                  }}>
                    {era.period}
                  </span>
                  <h3 style={{ fontSize: '1.75rem', margin: 0, color: 'var(--text-primary)' }}>
                    {era.name}
                  </h3>
                  <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    {era.summary}
                  </p>
                </div>

                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <ImgWithFallback
                    src={era.image}
                    alt={era.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Era Events Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
                {era.events.map((evt, idx) => (
                  <div 
                    key={idx}
                    className="card"
                    style={{
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backgroundColor: 'var(--bg-card)'
                    }}
                  >
                    <div>
                      {/* Event Date Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                        <Calendar size={15} style={{ color: era.color }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: era.color }}>
                          {evt.year}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                        {evt.title}
                      </h4>
                      <div style={{ fontSize: '0.88rem', color: 'var(--color-mustard-hover)', fontWeight: 600, marginBottom: '0.85rem' }}>
                        {evt.subtitle}
                      </div>

                      <p style={{ fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                        {evt.description}
                      </p>
                    </div>

                    <div style={{
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {evt.keyFacts?.length || 0} Key Takeaways
                      </span>
                      <button
                        onClick={() => onSelectDetail({
                          title: evt.title,
                          subtitle: `${evt.year} • ${era.name}`,
                          tag: 'Historical Period',
                          image: era.image,
                          description: evt.description,
                          details: evt.details,
                          keyFacts: evt.keyFacts
                        })}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          background: 'transparent',
                          border: 'none',
                          color: era.color,
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          cursor: 'pointer',
                          padding: '0.2rem 0.5rem'
                        }}
                      >
                        <span>Read More</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
