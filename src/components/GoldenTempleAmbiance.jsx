import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Clock, Sunrise, Sunset } from 'lucide-react';
import ImgWithFallback from './ImgWithFallback';

export default function GoldenTempleAmbiance() {
  const [activePhase, setActivePhase] = useState('night');

  const phases = [
    {
      id: 'dawn',
      name: 'Amrit Vela (Dawn • 04:00 AM)',
      icon: Sunrise,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      ambianceBg: 'linear-gradient(135deg, #0B192C 0%, #1E3E62 100%)',
      spiritualSignificance: 'The sacred hour of divine awakening. The doors of Sri Harmandir Sahib open, the Palki Sahib carries the Sri Guru Granth Sahib from the Akal Takht across the causeway, and Asa Di Vaar kirtan fills the dawn breeze.'
    },
    {
      id: 'midday',
      name: 'Dupahar (Midday • 12:00 PM)',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      ambianceBg: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      spiritualSignificance: 'The golden sanctum shines with dazzling brilliance under the Punjab sun, mirrored in the crystal waters of the Amrit Sarovar. Tens of thousands of pilgrims partake in the holy dip (ishnan) and gather in Guru Ka Langar.'
    },
    {
      id: 'sunset',
      name: 'Sandhya (Sunset • 06:30 PM)',
      icon: Sunset,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      ambianceBg: 'linear-gradient(135deg, #831843 0%, #BE185D 100%)',
      spiritualSignificance: 'As twilight falls over Amritsar, the evening Rehras Sahib prayer is recited in unison. Golden chandeliers and spotlights illuminate the marble facade, casting radiant liquid gold reflections across the lake.'
    },
    {
      id: 'night',
      name: 'Sukhasan (Night • 10:00 PM)',
      icon: Moon,
      image: 'https://images.unsplash.com/photo-1588096344356-9b6264ff03d9?auto=format&fit=crop&w=1200&q=80',
      ambianceBg: 'linear-gradient(135deg, #030712 0%, #111827 100%)',
      spiritualSignificance: 'The solemn Sukhasan ceremony: the Sri Guru Granth Sahib is reverently escorted back to the Akal Takht Sahib for rest in a flower-draped golden palanquin, while volunteers perform loving kar seva washing the marble floors.'
    }
  ];

  const current = phases.find(p => p.id === activePhase) || phases[0];

  return (
    <div className="card" style={{
      padding: '2.5rem',
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1.5px solid var(--border-medium)',
      boxShadow: 'var(--shadow-lg)',
      marginTop: '3.5rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2rem auto' }}>
        <span className="section-tag">
          <Clock size={14} />
          <span>Living Heritage Ambiance</span>
        </span>
        <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', margin: '0.4rem 0' }}>
          Sri Harmandir Sahib: 24 Hours of Divine Radiance
        </h3>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
          Witness the changing mood, rituals, and celestial reflections over the sacred Amrit Sarovar across four phases of the day.
        </p>
      </div>

      {/* Phase Selector Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.65rem',
        flexWrap: 'wrap',
        marginBottom: '2rem'
      }}>
        {phases.map((p) => {
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              onClick={() => setActivePhase(p.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: activePhase === p.id ? 'var(--color-mustard)' : 'var(--border-medium)',
                backgroundColor: activePhase === p.id ? 'var(--color-mustard)' : 'var(--bg-secondary)',
                color: activePhase === p.id ? '#FFFFFF' : 'var(--text-primary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Icon size={16} />
              <span>{p.name.split(' (')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Ambiance Feature Box */}
      <div style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}>
          <ImgWithFallback
            src={current.image}
            alt={current.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 20%, rgba(10, 16, 12, 0.9) 85%)'
          }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(212, 175, 55, 0.3)',
            color: '#FFE299',
            fontSize: '0.8rem',
            fontWeight: 700,
            backdropFilter: 'blur(8px)',
            marginBottom: '0.75rem'
          }}>
            <Sparkles size={14} />
            <span>{current.name}</span>
          </div>

          <h4 style={{ fontSize: '1.85rem', color: '#FFFFFF', margin: '0 0 0.75rem 0', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
            The Eternal Sarovar of Amritsar
          </h4>

          <p style={{ fontSize: '1.05rem', color: '#F3EFE6', lineHeight: '1.65', margin: 0, textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
            {current.spiritualSignificance}
          </p>
        </div>
      </div>
    </div>
  );
}
