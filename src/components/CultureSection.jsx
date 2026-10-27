import React, { useState } from 'react';
import { Sparkles, Music, Shirt, Heart, BookOpen, Users, Volume2 } from 'lucide-react';
import { danceForms, folkInstruments, traditionalAttire, phulkariCraft, folkRomances, hospitalityAndTraditions } from '../data/cultureData';
import ImgWithFallback from './ImgWithFallback';
import WisdomCarousel from './WisdomCarousel';

export default function CultureSection({ onSelectDetail }) {
  const [activeTab, setActiveTab] = useState('dances');

  return (
    <section id="culture" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            <span>Folk Arts, Heritage & Spirit</span>
          </span>
          <h2 className="section-title">
            Culture & Traditions of Punjab
          </h2>
          <p className="section-subtitle">
            An exuberant tapestry of vibrant folk dances, soulful Sufi verses, artisanal Phulkari, and legendary hospitality.
          </p>
        </div>

        {/* Culture Sub-Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem'
        }}>
          {[
            { id: 'dances', label: 'Folk Dances (Bhangra & Giddha)', icon: Sparkles },
            { id: 'instruments', label: 'Folk Instruments', icon: Music },
            { id: 'attire', label: 'Traditional Attire & Turban', icon: Shirt },
            { id: 'phulkari', label: 'Phulkari Embroidery', icon: Sparkles },
            { id: 'weddings', label: 'Hospitality & Village Life', icon: Heart },
            { id: 'romances', label: 'Timeless Folk Romances', icon: BookOpen }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.3rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? 'var(--color-crimson)' : 'var(--border-medium)',
                  backgroundColor: activeTab === tab.id ? 'var(--color-crimson)' : 'var(--bg-card)',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Folk Dances */}
        {activeTab === 'dances' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {danceForms.map((dance) => (
              <div 
                key={dance.id} 
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden'
                }}
              >
                <div>
                  <div style={{ height: '230px', overflow: 'hidden' }}>
                    <ImgWithFallback
                      src={dance.image}
                      alt={dance.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="section-tag" style={{ margin: 0, padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>
                        {dance.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                      {dance.name}
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-crimson)', fontWeight: 600, marginBottom: '0.85rem' }}>
                      {dance.tagline}
                    </div>
                    <p style={{ fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                      {dance.description}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.35rem' }}>
                        Key Moves & Elements:
                      </strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {dance.moves.map((move, i) => (
                          <span key={i} style={{
                            padding: '0.2rem 0.6rem',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8rem',
                            border: '1px solid var(--border-light)'
                          }}>
                            {move}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '1rem 1.75rem',
                  borderTop: '1px solid var(--border-light)',
                  background: 'var(--bg-secondary)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  <strong>Rhythm & Tempo:</strong> {dance.tempo}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Folk Instruments */}
        {activeTab === 'instruments' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {folkInstruments.map((inst) => (
              <div 
                key={inst.id}
                className="card"
                style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)' }}
              >
                <div style={{ height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem' }}>
                  <ImgWithFallback
                    src={inst.image}
                    alt={inst.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-mustard-hover)', fontWeight: 700 }}>
                  {inst.type}
                </div>
                <h4 style={{ fontSize: '1.35rem', margin: '0.25rem 0 0.5rem 0', color: 'var(--text-primary)' }}>
                  {inst.name}
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {inst.description}
                </p>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                  <strong>Crafted with:</strong> {inst.material}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Attire & Turban */}
        {activeTab === 'attire' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              {traditionalAttire.map((att, idx) => (
                <div 
                  key={idx}
                  className="card"
                  style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}
                >
                  <span className="section-tag" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>
                    {att.significance}
                  </span>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: '0.25rem 0 0.75rem 0' }}>
                    {att.item}
                  </h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                    {att.details}
                  </p>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-emerald)', fontWeight: 600 }}>
                    <strong>Materials:</strong> {att.fabrics}
                  </div>
                </div>
              ))}
            </div>

            {/* Special Highlight on the Dastar / Turban */}
            <div className="card" style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '5px solid var(--color-mustard)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                The Crown of Sovereignty: The Punjabi Dastar (Turban)
              </h3>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', margin: 0 }}>
                In Punjabi society, and especially in the Sikh faith, the turban (Dastar/Pagri) is not merely headgear—it is an egalitarian crown representing absolute human dignity, self-respect, moral accountability, and universal equality. When 17th-century despots decreed that only aristocrats could wear turbans and carry weapons, Guru Gobind Singh Ji democratized nobility by instructing every Sikh to wear a radiant dastar with royal pride.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Phulkari */}
        {activeTab === 'phulkari' && (
          <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
              <span className="section-tag">
                <Sparkles size={14} />
                <span>Heirloom Textile Art</span>
              </span>
              <h3 style={{ fontSize: '2rem', margin: '0.5rem 0', color: 'var(--color-crimson)' }}>
                {phulkariCraft.title}
              </h3>
              <div style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-mustard-hover)', marginBottom: '1rem' }}>
                {phulkariCraft.etymology}
              </div>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
                {phulkariCraft.heritage}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
              {phulkariCraft.types.map((type, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: '1.75rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-crimson)', marginBottom: '0.5rem' }}>
                    {type.name}
                  </h4>
                  <p style={{ fontSize: '0.94rem', lineHeight: '1.6', margin: 0 }}>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Weddings, Hospitality & Coexistence */}
        {activeTab === 'weddings' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-emerald)' }}>
                Mehmaan-Nawazi: Punjabi Hospitality
              </h3>
              <p style={{ fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                {hospitalityAndTraditions.hospitalityLore}
              </p>
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--color-mustard-hover)', display: 'block', marginBottom: '0.25rem' }}>
                  The Spirit of Langar:
                </strong>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>
                  A living spiritual ideal where every gurdwara welcomes any traveler with warm food, sanctuary, and absolute respect regardless of religion, caste, or wealth.
                </p>
              </div>
            </div>

            <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-crimson)' }}>
                Sanjha Chulha: Communal Kinship
              </h3>
              <p style={{ fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                {hospitalityAndTraditions.sanjhaChulha}
              </p>
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--color-crimson)', display: 'block', marginBottom: '0.25rem' }}>
                  Historic Interfaith Oasis:
                </strong>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>
                  {hospitalityAndTraditions.interfaithHarmony}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Folk Romances */}
        {activeTab === 'romances' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {folkRomances.map((rom, idx) => (
              <div 
                key={idx}
                className="card"
                style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}
              >
                <span className="section-tag" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>
                  Legendary Folk Romance
                </span>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: '0.25rem 0' }}>
                  {rom.title}
                </h4>
                <div style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--color-mustard-hover)', marginBottom: '1rem', fontWeight: 600 }}>
                  {rom.poet}
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>
                  {rom.story}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Feature: Soul of Punjab Wisdom Carousel */}
        <div style={{ marginTop: '4.5rem' }}>
          <WisdomCarousel />
        </div>
      </div>
    </section>
  );
}
