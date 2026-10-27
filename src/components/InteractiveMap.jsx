import React, { useState } from 'react';
import { MapPin, Navigation, Droplets, Info, Sparkles } from 'lucide-react';
import { subregions, fiveRivers } from '../data/geographyData';

export default function InteractiveMap() {
  const [activeZone, setActiveZone] = useState('majha');
  const [hoveredLandmark, setHoveredLandmark] = useState(null);

  const selectedData = subregions.find(s => s.id === activeZone) || subregions[0];

  const landmarks = [
    { id: 'amritsar', name: 'Amritsar (Golden Temple)', x: 195, y: 195, zone: 'majha', type: 'Spiritual Nucleus' },
    { id: 'anandpur', name: 'Sri Anandpur Sahib', x: 420, y: 220, zone: 'doaba', type: 'Takht & Khalsa Birthplace' },
    { id: 'jalandhar', name: 'Jalandhar', x: 260, y: 235, zone: 'doaba', type: 'Sports & Media Capital' },
    { id: 'ludhiana', name: 'Ludhiana', x: 320, y: 310, zone: 'malwa', type: 'Industrial & Bicycle Hub' },
    { id: 'patiala', name: 'Patiala (Qila Mubarak)', x: 440, y: 380, zone: 'malwa', type: 'Royal Heritage & Arts' },
    { id: 'bathinda', name: 'Bathinda (Historic Fort)', x: 190, y: 440, zone: 'malwa', type: 'Cotton Belt & Forts' },
    { id: 'chandigarh', name: 'Chandigarh (Capital)', x: 480, y: 300, zone: 'malwa', type: 'Joint Capital UT' },
    { id: 'harike', name: 'Harike Confluence & Wetland', x: 220, y: 260, zone: 'majha', type: 'Ramsar Wetland (Beas-Sutlej)' }
  ];

  return (
    <div className="interactive-map-container card" style={{
      padding: '2.5rem',
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1.5px solid var(--border-medium)',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
        <span className="section-tag">
          <Sparkles size={14} />
          <span>Interactive Vector Cartography</span>
        </span>
        <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', margin: '0.4rem 0' }}>
          Cartographic Explorer of Indian Punjab
        </h3>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
          Hover or click on the three historical Doabs (Majha, Doaba, Malwa) and follow the animated glowing courses of the Ravi, Beas, and Sutlej rivers.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        {/* Left Column: Stylized Vector SVG Map */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%',
            maxWidth: '520px',
            aspectRatio: '1 / 1',
            background: 'radial-gradient(circle at 50% 50%, var(--bg-secondary) 0%, var(--bg-card) 75%)',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem',
            border: '1px solid var(--border-light)',
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.04)',
            position: 'relative'
          }}>
            <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <filter id="glow-river" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="grad-majha" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8C1D24" stopOpacity={activeZone === 'majha' ? '0.85' : '0.35'} />
                  <stop offset="100%" stopColor="#691319" stopOpacity={activeZone === 'majha' ? '0.95' : '0.45'} />
                </linearGradient>
                <linearGradient id="grad-doaba" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E09200" stopOpacity={activeZone === 'doaba' ? '0.85' : '0.35'} />
                  <stop offset="100%" stopColor="#B36B00" stopOpacity={activeZone === 'doaba' ? '0.95' : '0.45'} />
                </linearGradient>
                <linearGradient id="grad-malwa" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#184E33" stopOpacity={activeZone === 'malwa' ? '0.85' : '0.35'} />
                  <stop offset="100%" stopColor="#0F3522" stopOpacity={activeZone === 'malwa' ? '0.95' : '0.45'} />
                </linearGradient>
              </defs>

              {/* Shivalik Foothills Contour (Northeast) */}
              <path
                d="M 380 90 Q 430 140 480 180 T 540 280"
                stroke="rgba(212, 175, 55, 0.4)"
                strokeWidth="6"
                strokeDasharray="4 6"
                fill="none"
              />
              <text x="460" y="150" fill="var(--color-mustard)" fontSize="11" fontWeight="700" letterSpacing="0.08em" transform="rotate(35 460 150)">
                SHIVALIK FOOTHILLS
              </text>

              {/* Subregion 1: MAJHA (Upper Northwest between Ravi and Beas) */}
              <g 
                onClick={() => setActiveZone('majha')}
                style={{ cursor: 'pointer', transition: 'all 0.3s' }}
              >
                <path
                  d="M 190 70 L 260 120 L 250 240 L 205 260 L 150 210 L 140 130 Z"
                  fill="url(#grad-majha)"
                  stroke={activeZone === 'majha' ? '#FFD700' : 'rgba(255,255,255,0.4)'}
                  strokeWidth={activeZone === 'majha' ? '3' : '1.5'}
                />
                <text x="195" y="170" textAnchor="middle" fill="#FFFFFF" fontWeight="800" fontSize="16" letterSpacing="0.05em">
                  MAJHA
                </text>
                <text x="195" y="186" textAnchor="middle" fill="#FFE299" fontSize="10">
                  4 Districts
                </text>
              </g>

              {/* Subregion 2: DOABA (Bist Doab, between Beas and Sutlej) */}
              <g 
                onClick={() => setActiveZone('doaba')}
                style={{ cursor: 'pointer', transition: 'all 0.3s' }}
              >
                <path
                  d="M 265 125 L 360 150 L 415 210 L 360 260 L 265 245 Z"
                  fill="url(#grad-doaba)"
                  stroke={activeZone === 'doaba' ? '#FFD700' : 'rgba(255,255,255,0.4)'}
                  strokeWidth={activeZone === 'doaba' ? '3' : '1.5'}
                />
                <text x="330" y="195" textAnchor="middle" fill="#FFFFFF" fontWeight="800" fontSize="16" letterSpacing="0.05em">
                  DOABA
                </text>
                <text x="330" y="211" textAnchor="middle" fill="#FFF6E0" fontSize="10">
                  4 Districts
                </text>
              </g>

              {/* Subregion 3: MALWA (Vast Southern Plains South of Sutlej) */}
              <g 
                onClick={() => setActiveZone('malwa')}
                style={{ cursor: 'pointer', transition: 'all 0.3s' }}
              >
                <path
                  d="M 210 265 L 360 265 L 420 215 L 490 280 L 480 430 L 390 510 L 240 520 L 150 460 L 130 360 L 205 270 Z"
                  fill="url(#grad-malwa)"
                  stroke={activeZone === 'malwa' ? '#FFD700' : 'rgba(255,255,255,0.4)'}
                  strokeWidth={activeZone === 'malwa' ? '3' : '1.5'}
                />
                <text x="310" y="380" textAnchor="middle" fill="#FFFFFF" fontWeight="800" fontSize="22" letterSpacing="0.08em">
                  MALWA
                </text>
                <text x="310" y="405" textAnchor="middle" fill="#A8E6CF" fontSize="12" fontWeight="600">
                  14 Districts • 65% State Area
                </text>
              </g>

              {/* Animated Rivers with Glowing Pulsing Flow */}
              {/* River 1: RAVI (Northwestern Boundary) */}
              <path
                d="M 185 50 Q 150 110 135 180 T 110 280"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="4"
                strokeDasharray="6 4"
                filter="url(#glow-river)"
                className="animated-river-flow"
              />
              <text x="95" y="160" fill="#38BDF8" fontSize="11" fontWeight="700">
                Ravi River
              </text>

              {/* River 2: BEAS */}
              <path
                d="M 270 95 Q 260 160 235 220 L 220 260"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="4.5"
                strokeDasharray="8 4"
                filter="url(#glow-river)"
                className="animated-river-flow"
              />
              <text x="265" y="160" fill="#0EA5E9" fontSize="11" fontWeight="700">
                Beas River
              </text>

              {/* River 3: SUTLEJ (Bisecting through Ropar to Harike and South) */}
              <path
                d="M 440 190 Q 380 240 280 255 L 220 260 Q 170 300 120 370"
                fill="none"
                stroke="#0284C7"
                strokeWidth="5"
                strokeDasharray="10 5"
                filter="url(#glow-river)"
                className="animated-river-flow"
              />
              <text x="375" y="240" fill="#0284C7" fontSize="11" fontWeight="700">
                Sutlej River
              </text>

              {/* Harike Confluence Ripple Marker */}
              <circle cx="220" cy="260" r="14" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.8">
                <animate attributeName="r" values="6;22" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="220" cy="260" r="5" fill="#FFD700" />

              {/* Landmark Pins */}
              {landmarks.map((lm) => (
                <g 
                  key={lm.id}
                  transform={`translate(${lm.x}, ${lm.y})`}
                  onMouseEnter={() => setHoveredLandmark(lm)}
                  onMouseLeave={() => setHoveredLandmark(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle cx="0" cy="0" r="6" fill="#FFFFFF" stroke="#000" strokeWidth="2" />
                  <circle cx="0" cy="0" r="3" fill="var(--color-crimson)" />
                  <text 
                    x="10" 
                    y="4" 
                    fill="var(--text-primary)" 
                    fontSize="10" 
                    fontWeight="700"
                    style={{ textShadow: '0 1px 3px rgba(255,255,255,0.8)' }}
                  >
                    {lm.name.split(' ')[0]}
                  </text>
                </g>
              ))}
            </svg>

            {/* Hovered Landmark Tooltip */}
            {hoveredLandmark && (
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                padding: '0.5rem 0.85rem',
                backgroundColor: 'rgba(12, 19, 15, 0.9)',
                color: '#FFE299',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                backdropFilter: 'blur(6px)',
                boxShadow: 'var(--shadow-md)',
                pointerEvents: 'none',
                zIndex: 5
              }}>
                <strong>{hoveredLandmark.name}</strong>
                <div style={{ fontSize: '0.72rem', color: '#FFF' }}>{hoveredLandmark.type}</div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Region Telemetry */}
        <div>
          {/* Subregion Selector Switcher */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {subregions.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveZone(sub.id)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: '1.5px solid',
                  borderColor: activeZone === sub.id ? sub.color : 'var(--border-medium)',
                  backgroundColor: activeZone === sub.id ? sub.color : 'transparent',
                  color: activeZone === sub.id ? '#FFFFFF' : 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {sub.name}
              </button>
            ))}
          </div>

          <div style={{
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-secondary)',
            borderLeft: `5px solid ${selectedData.color}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, color: selectedData.color }}>
                {selectedData.etymology}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {selectedData.districts.length} Districts
              </span>
            </div>

            <h4 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', margin: 0 }}>
              {selectedData.name} Region
            </h4>
            <div style={{ fontSize: '0.95rem', color: 'var(--color-mustard-hover)', fontWeight: 600, margin: '0.25rem 0 1rem 0' }}>
              {selectedData.tagline}
            </div>

            <p style={{ fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              {selectedData.cultureAndDialect}
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.4rem' }}>
                Districts in {selectedData.name}:
              </strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {selectedData.districts.map((d, i) => (
                  <span 
                    key={i}
                    style={{
                      padding: '0.25rem 0.65rem',
                      backgroundColor: 'var(--bg-card)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              padding: '0.85rem 1rem',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-light)'
            }}>
              <strong style={{ fontSize: '0.8rem', color: 'var(--color-emerald)', display: 'block', marginBottom: '0.2rem' }}>
                Cultural & Architectural Anchors:
              </strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {selectedData.highlights.join(' • ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes riverDash {
          to { stroke-dashoffset: -40; }
        }
        .animated-river-flow {
          animation: riverDash 2.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
