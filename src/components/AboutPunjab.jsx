import React, { useState } from 'react';
import { Compass, Map, Shield, Award, Droplets, Layers, ChevronRight, CheckCircle2 } from 'lucide-react';
import { geographyOverview, historicalVsModern, subregions } from '../data/geographyData';
import ImgWithFallback from './ImgWithFallback';

export default function AboutPunjab() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} />
            <span>Introduction & Heritage</span>
          </span>
          <h2 className="section-title">
            About Punjab — The Land of Five Rivers
          </h2>
          <p className="section-subtitle">
            A fertile frontier of valor, spirituality, and bountiful harvest at the crossroads of South Asian civilizations.
          </p>
        </div>

        {/* Tab Navigation for Overview vs. Historical Distinction vs. Subregions */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'overview', label: 'State Profile & Identity' },
            { id: 'subregions', label: 'The 3 Cultural Zones (Majha, Doaba, Malwa)' },
            { id: 'historical-contrast', label: 'Historical vs Modern Punjab' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.92rem',
                border: '1px solid',
                borderColor: activeTab === tab.id ? 'var(--color-emerald)' : 'var(--border-medium)',
                backgroundColor: activeTab === tab.id ? 'var(--color-emerald)' : 'var(--bg-card)',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.85rem', marginBottom: '1.25rem', color: 'var(--color-emerald)' }}>
                The Crossroads of Northern India
              </h3>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                Nestled in the northwestern quadrant of the Republic of India, <strong>Punjab</strong> has stood for millennia as the grand geographical and cultural threshold between Central Asia and the Gangetic heartland.
              </p>
              <p style={{ marginBottom: '1.25rem', lineHeight: '1.7' }}>
                The name itself is of Persian origin, uniting <em>"Panj"</em> (پنج, meaning <strong>Five</strong>) and <em>"Aab"</em> (آب, meaning <strong>Water or River</strong>). Historically, this commemorated the five torrential tributaries of the mighty Indus: the <strong>Jhelum, Chenab, Ravi, Beas, and Sutlej</strong>.
              </p>

              {/* Quick Geographic Highlights List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-mustard)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Borders:</strong> Pakistan to the west (553 km border), Jammu & Kashmir to the north, Himachal Pradesh to the northeast, Haryana to the south/southeast, and Rajasthan to the southwest.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-mustard)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Capital City:</strong> Chandigarh, the modernist master-planned city designed by Le Corbusier, administered as a Union Territory shared with Haryana.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-mustard)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Administrative Divisions:</strong> 23 districts encompassing over 12,500 villages and bustling urban centers like Ludhiana, Amritsar, Jalandhar, Patiala, and Bathinda.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-mustard)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>National Significance:</strong> Known as the "Breadbasket of India", producing a disproportionate share of national food grains while contributing heroically to India’s armed forces, sports, and global music.
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Feature Card with Image */}
            <div className="card" style={{ padding: '0.75rem', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '360px' }}>
                <ImgWithFallback
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Rural Landscape of Punjab with fertile wheat fields"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--color-crimson)', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                    Statehood Reorganization
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Area: 50,362 km²
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>
                  A Land of Infinite Resilience and Joy (Chardi Kala)
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  From surviving ancient invasions and Partition to leading the Green Revolution, Punjab’s ethos is rooted in <em>Chardi Kala</em>—an eternal state of high spirits, perseverance, and goodwill towards all.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: The Three Cultural Subregions */}
        {activeTab === 'subregions' && (
          <div>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              <p style={{ fontSize: '1.1rem' }}>
                Indian Punjab is historically and culturally divided into three distinct zones defined by the courses of the <strong>Ravi, Beas, and Sutlej</strong> rivers:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
              {subregions.map((region) => (
                <div 
                  key={region.id}
                  className="card"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderTop: `4px solid ${region.color}`
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span className="section-tag" style={{ margin: 0, padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>
                        {region.name}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {region.districts.length} Districts
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                      {region.name}
                    </h3>
                    <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: region.color, marginBottom: '1rem', fontWeight: 600 }}>
                      {region.tagline}
                    </div>

                    <p style={{ fontSize: '0.92rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                      {region.cultureAndDialect}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                        Key Districts:
                      </strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {region.districts.map((d, i) => (
                          <span key={i} style={{
                            padding: '0.2rem 0.55rem',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.78rem',
                            border: '1px solid var(--border-light)'
                          }}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                    <strong style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Landmarks:
                    </strong>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-emerald)', marginTop: '0.25rem', fontWeight: 600 }}>
                      {region.highlights.join(' • ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Historical vs Modern Punjab Comparison */}
        {activeTab === 'historical-contrast' && (
          <div className="card" style={{ padding: '2.5rem', maxWidth: '980px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Shield size={28} style={{ color: 'var(--color-crimson)' }} />
              <h3 style={{ fontSize: '1.6rem', margin: 0, color: 'var(--text-primary)' }}>
                {historicalVsModern.title}
              </h3>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              {historicalVsModern.explanation}
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-medium)', background: 'var(--bg-secondary)' }}>
                    <th style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-primary)', width: '22%' }}>Historical Aspect</th>
                    <th style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-crimson)', width: '39%' }}>Historical Greater Punjab</th>
                    <th style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-emerald)', width: '39%' }}>Modern Indian State of Punjab</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalVsModern.comparison.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-primary)', verticalAlign: 'top' }}>
                        {row.aspect}
                      </td>
                      <td style={{ padding: '1rem', color: 'var(--text-secondary)', verticalAlign: 'top', lineHeight: '1.5', fontSize: '0.95rem' }}>
                        {row.historical}
                      </td>
                      <td style={{ padding: '1rem', color: 'var(--text-primary)', verticalAlign: 'top', lineHeight: '1.5', fontSize: '0.95rem', fontWeight: 500 }}>
                        {row.modern}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
