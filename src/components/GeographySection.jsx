import React, { useState } from 'react';
import { Map, Droplets, Sun, Wind, Trees, ShieldAlert, CheckCircle, Info } from 'lucide-react';
import { fiveRivers, geographyOverview, subregions, environmentAndChallenges } from '../data/geographyData';
import InteractiveMap from './InteractiveMap';

export default function GeographySection() {
  const [activeRiverFilter, setActiveRiverFilter] = useState('all');

  const filteredRivers = activeRiverFilter === 'indian'
    ? fiveRivers.filter(r => r.inIndianPunjab)
    : activeRiverFilter === 'historical'
    ? fiveRivers.filter(r => !r.inIndianPunjab)
    : fiveRivers;

  return (
    <section id="geography" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Map size={14} />
            <span>Topography, Rivers & Climate</span>
          </span>
          <h2 className="section-title">
            Geography & Environment of Punjab
          </h2>
          <p className="section-subtitle">
            From the Himalayan snowmelt carving fertile alluvial plains to protected Ramsar wetlands and agrarian lifeblood.
          </p>
        </div>

        {/* Physical Overview Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3.5rem'
        }}>
          <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
            <div style={{ color: 'var(--color-emerald)', marginBottom: '0.75rem' }}>
              <Map size={26} />
            </div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Total Area & Elevation</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              <strong>50,362 sq km</strong> gently sloping from 500m in the northeastern Shivaliks down to 180m along the southwestern desert border.
            </p>
          </div>

          <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
            <div style={{ color: 'var(--color-mustard)', marginBottom: '0.75rem' }}>
              <Sun size={26} />
            </div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Climate & Seasons</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Semi-arid to sub-humid continental. Blistering summers (40–45°C), rejuvenating monsoons (July–Sept), and bracing winters with dense fog ("kohra").
            </p>
          </div>

          <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
            <div style={{ color: 'var(--color-crimson)', marginBottom: '0.75rem' }}>
              <Droplets size={26} />
            </div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Alluvial Soil & Canals</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Deep, nutrient-rich alluvial soils (Khadar and Bhangar) irrigated by massive canal networks (Sirhind, Bist Doab, Bhakra mainline) and tubewells.
            </p>
          </div>

          <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
            <div style={{ color: 'var(--color-emerald-light)', marginBottom: '0.75rem' }}>
              <Trees size={26} />
            </div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Wetlands & Wildlife</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Ramsar wetlands Harike, Ropar, and Kanjli. Protected sanctuary for the endangered Indus River Dolphin, Blackbuck (state animal), and winter migrants.
            </p>
          </div>
        </div>

        {/* Feature: Interactive Animated Vector Map of Punjab */}
        <div style={{ marginBottom: '4rem' }}>
          <InteractiveMap />
        </div>

        {/* The Rivers Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.75rem',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.75rem', margin: 0, color: 'var(--text-primary)' }}>
                The Five Rivers: Historical vs. Modern Course
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
                Three rivers (Sutlej, Beas, Ravi) traverse Indian Punjab; two (Chenab, Jhelum) flow in Pakistan.
              </p>
            </div>

            {/* River Filter Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All 5 Historical Rivers' },
                { id: 'indian', label: '3 In Indian Punjab' },
                { id: 'historical', label: '2 In Historical (Pak) Punjab' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveRiverFilter(f.id)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: activeRiverFilter === f.id ? 'var(--color-emerald)' : 'var(--border-medium)',
                    backgroundColor: activeRiverFilter === f.id ? 'var(--color-emerald)' : 'var(--bg-card)',
                    color: activeRiverFilter === f.id ? '#FFFFFF' : 'var(--text-primary)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filteredRivers.map((river, idx) => (
              <div 
                key={idx}
                className="card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: river.inIndianPunjab ? '4px solid var(--color-emerald)' : '4px solid var(--color-mustard)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: river.inIndianPunjab ? 'var(--color-emerald-subtle)' : 'var(--color-mustard-subtle)',
                      color: river.inIndianPunjab ? 'var(--color-emerald)' : 'var(--color-mustard-hover)'
                    }}>
                      {river.inIndianPunjab ? 'Flows Through Indian Punjab' : 'Flows Through Pakistani Punjab'}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.35rem', margin: '0.25rem 0', color: 'var(--text-primary)' }}>
                    {river.name}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-crimson)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {river.ancientName}
                  </div>

                  <div style={{ fontSize: '0.88rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
                    <strong>Origin:</strong> {river.origin}
                  </div>

                  <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {river.courseInPunjab}
                  </p>
                </div>

                <div style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-light)',
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)'
                }}>
                  {river.significance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Challenges & Sustainable Stewardship */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          border: '1px solid var(--border-medium)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <ShieldAlert size={28} style={{ color: 'var(--color-crimson)' }} />
            <div>
              <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>
                Ecological Realities & Conservation Priorities
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Balancing agricultural prosperity with groundwater replenishment and clean air.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {environmentAndChallenges.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-primary)' }}>
                    {item.title}
                  </h4>
                  <span style={{
                    padding: '0.15rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-crimson-subtle)',
                    color: 'var(--color-crimson)'
                  }}>
                    {item.severity}
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                  {item.description}
                </p>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-emerald)', lineHeight: '1.5', paddingTop: '0.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <strong>Action & Interventions:</strong> {item.solutions}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
