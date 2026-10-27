import React from 'react';
import { TrendingUp, Wheat, Zap, Milk, Bike, Trophy, Cpu, Flame, Droplets, ExternalLink } from 'lucide-react';
import { economyStats, agriculturePillars, industrialClusters, ecologicalSustainability } from '../data/economyData';

export default function EconomySection() {
  return (
    <section id="economy" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <TrendingUp size={14} />
            <span>Agriculture, Industry & Modern Vision</span>
          </span>
          <h2 className="section-title">
            Economy & Agriculture — The Granary of India
          </h2>
          <p className="section-subtitle">
            Feeding a billion citizens, manufacturing 75% of India’s bicycles, crafting world-cup cricket gear, and leading the transition to sustainable farming.
          </p>
        </div>

        {/* Big Key Statistical Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {economyStats.map((stat, i) => (
            <div 
              key={i}
              className="card"
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--bg-card)',
                borderTop: '4px solid var(--color-mustard)'
              }}
            >
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
                {stat.metric}
              </div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-emerald)', margin: '0.4rem 0' }}>
                {stat.value}
              </div>
              <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-secondary)' }}>
                {stat.detail}
              </p>
              <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-light)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Source: {stat.source}
              </div>
            </div>
          ))}
        </div>

        {/* Agricultural Pillars */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '1.75rem', textAlign: 'center' }}>
            Agrarian Foundations: Wheat, Rice & Dairy
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {agriculturePillars.map((pillar) => (
              <div 
                key={pillar.id}
                className="card"
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-mustard-subtle)',
                    color: 'var(--color-mustard-hover)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    {pillar.id === 'wheat-rice' && <Wheat size={22} />}
                    {pillar.id === 'green-revolution' && <Zap size={22} />}
                    {pillar.id === 'dairy-livestock' && <Milk size={22} />}
                  </div>

                  <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {pillar.title}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-crimson)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {pillar.tagline}
                  </div>
                  <p style={{ fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {pillar.description}
                  </p>
                </div>

                <div style={{
                  padding: '0.9rem',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.85rem'
                }}>
                  <strong style={{ color: 'var(--color-emerald)', display: 'block', marginBottom: '0.2rem' }}>
                    Key Data Insight:
                  </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {pillar.dataPoint}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial & Manufacturing Clusters */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '1.75rem', textAlign: 'center' }}>
            Punjab’s Industrial Clusters: From Bicycles to Sports Gear & IT
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {industrialClusters.map((cluster, idx) => (
              <div 
                key={idx}
                className="card"
                style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{
                    padding: '0.2rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-emerald-subtle)',
                    color: 'var(--color-emerald)'
                  }}>
                    {cluster.city}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0.35rem 0 0.75rem 0' }}>
                  {cluster.title}
                </h4>

                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  {cluster.description}
                </p>

                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                  <strong style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                    Cluster Specialties:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {cluster.specialties.map((spec, sIdx) => (
                      <span 
                        key={sIdx}
                        style={{
                          padding: '0.2rem 0.5rem',
                          backgroundColor: 'var(--bg-secondary)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.78rem',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability & Environmental Challenges Accordion / Cards */}
        <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-secondary)' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <span className="section-tag">
              <Droplets size={14} />
              <span>Sustainable Agriculture</span>
            </span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--text-primary)', margin: '0.5rem 0' }}>
              Ecological Stewardship & Future Agriculture
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
              Addressing water table depletion, stubble management, and crop diversification with verified scientific policy interventions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {ecologicalSustainability.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-medium)'
                }}
              >
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-crimson)', marginBottom: '0.5rem' }}>
                  {item.issue}
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.55', marginBottom: '0.85rem', color: 'var(--text-secondary)' }}>
                  <strong>Impact:</strong> {item.impact}
                </p>
                <div style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-light)',
                  fontSize: '0.88rem',
                  color: 'var(--color-emerald)',
                  lineHeight: '1.5'
                }}>
                  <strong>Remediation:</strong> {item.interventions}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
