import React, { useState } from 'react';
import { Compass, Search, MapPin, Calendar, ExternalLink, ChevronRight, Filter } from 'lucide-react';
import { tourismDestinations } from '../data/tourismData';
import ImgWithFallback from './ImgWithFallback';
import GoldenTempleAmbiance from './GoldenTempleAmbiance';

export default function TourismSection({ onSelectDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Destinations (12)' },
    { id: 'Spiritual', label: 'Spiritual & Gurdwaras' },
    { id: 'Historical & Forts', label: 'Historic Forts & Memorials' },
    { id: 'Nature & Wetlands', label: 'Ramsar Wetlands & Wildlife' },
    { id: 'Architecture', label: 'Architectural Heritage' },
    { id: 'Cultural & Rural', label: 'Village & Border Experiences' }
  ];

  const filteredDestinations = tourismDestinations.filter(dest => {
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tourism" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} />
            <span>Travel & Heritage Circuits</span>
          </span>
          <h2 className="section-title">
            Tourism in Punjab — Crown Jewels of the North
          </h2>
          <p className="section-subtitle">
            From the divine marble precincts of Amritsar to French-inspired palaces, dramatic frontier flag ceremonies, and pristine bird sanctuaries.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          maxWidth: '960px',
          margin: '0 auto 3rem auto'
        }}>
          {/* Search Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-full)',
            border: '1.5px solid var(--border-medium)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Search size={20} style={{ color: 'var(--color-mustard)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations by name, district, or landmark (e.g. Amritsar, Wetland, Fort)..."
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: selectedCategory === cat.id ? 'var(--color-emerald)' : 'var(--border-medium)',
                  backgroundColor: selectedCategory === cat.id ? 'var(--color-emerald)' : 'var(--bg-card)',
                  color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Showing <strong>{filteredDestinations.length}</strong> destination{filteredDestinations.length === 1 ? '' : 's'}
          </span>
          <a 
            href="https://punjabtourism.punjab.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              color: 'var(--color-emerald)',
              fontWeight: 600
            }}
          >
            <span>Punjab Tourism Official Portal</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Destinations Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id}
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
                    src={dest.image}
                    alt={dest.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '0.25rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(12, 19, 15, 0.75)',
                    color: '#FFF6E0',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <MapPin size={12} style={{ color: 'var(--color-mustard)' }} />
                    <span>{dest.location}</span>
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-crimson)', letterSpacing: '0.04em' }}>
                    {dest.category}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', margin: '0.25rem 0 0.35rem 0', color: 'var(--text-primary)' }}>
                    {dest.name}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-mustard-hover)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {dest.tagline}
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {dest.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                    {dest.highlights.slice(0, 3).map((hl, i) => (
                      <span key={i} style={{
                        padding: '0.2rem 0.55rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.78rem',
                        border: '1px solid var(--border-light)'
                      }}>
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Tips & Modal Trigger */}
              <div style={{
                padding: '1rem 1.5rem',
                borderTop: '1px solid var(--border-light)',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <Calendar size={14} />
                  <span>{dest.bestTimeToVisit.split(';')[0]}</span>
                </div>
                <button
                  onClick={() => onSelectDetail({
                    title: dest.name,
                    subtitle: `${dest.location} (${dest.district}) • ${dest.category}`,
                    tag: 'Tourism Destination',
                    image: dest.image,
                    description: dest.description,
                    details: `Nearest Transport Hub: ${dest.nearestHub} | Best Time: ${dest.bestTimeToVisit}`,
                    keyFacts: dest.highlights,
                    travelTips: dest.travelTips
                  })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-emerald)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  <span>Explore Tips</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature: Living Ambiance of Sri Harmandir Sahib */}
        <GoldenTempleAmbiance />
      </div>
    </section>
  );
}
