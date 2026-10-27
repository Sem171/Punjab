import React, { useState } from 'react';
import { Utensils, Sparkles, Heart, ChevronRight, Info } from 'lucide-react';
import { punjabiDishes, foodRegionsNote } from '../data/foodData';
import ImgWithFallback from './ImgWithFallback';

export default function FoodSection({ onSelectDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'Winter Signature', label: 'Winter Signatures' },
    { id: 'Tandoori Street Food', label: 'Tandoori & Breads' },
    { id: 'Festive Classic', label: 'Curries & Classics' },
    { id: 'Beverage & Elixir', label: 'Lassi & Sweets' },
    { id: 'Spiritual Cuisine & Seva', label: 'Guru Ka Langar' }
  ];

  const filteredDishes = selectedCategory === 'all'
    ? punjabiDishes
    : punjabiDishes.filter(d => d.category.toLowerCase().includes(selectedCategory.toLowerCase()) || d.category === selectedCategory);

  return (
    <section id="food" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Utensils size={14} />
            <span>Gastronomic Heritage & Dhabas</span>
          </span>
          <h2 className="section-title">
            Punjabi Food — A Celebration on a Plate
          </h2>
          <p className="section-subtitle">
            Slow-simmered sarson da saag, blistered tandoori kulchas, creamy churned lassi, and the sacred equality of Guru Ka Langar.
          </p>
        </div>

        {/* Regional Heritage Clarification Note */}
        <div style={{
          maxWidth: '850px',
          margin: '0 auto 2.5rem auto',
          padding: '1rem 1.25rem',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-medium)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem'
        }}>
          <Info size={22} style={{ color: 'var(--color-mustard)', flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
            <strong>Culinary Note:</strong> {foodRegionsNote.text}
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
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? 'var(--color-crimson)' : 'var(--border-medium)',
                backgroundColor: selectedCategory === cat.id ? 'var(--color-crimson)' : 'var(--bg-card)',
                color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--text-primary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Food Dishes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredDishes.map((dish) => (
            <div 
              key={dish.id}
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
                    src={dish.image}
                    alt={dish.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--color-emerald)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                  }}>
                    {dish.diet}
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-mustard-hover)' }}>
                      {dish.category}
                    </span>
                    <span className="gurmukhi" style={{ fontSize: '0.95rem', color: 'var(--color-crimson)' }}>
                      {dish.punjabiName}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', margin: '0.2rem 0', color: 'var(--text-primary)' }}>
                    {dish.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                    {dish.tagline}
                  </div>

                  <p style={{ fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {dish.description}
                  </p>
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
                  {dish.keyIngredients?.length || 0} Core Ingredients
                </span>
                <button
                  onClick={() => onSelectDetail({
                    title: dish.name,
                    subtitle: `${dish.punjabiName} • ${dish.category}`,
                    tag: 'Culinary Heritage',
                    image: dish.image,
                    description: dish.description,
                    details: dish.originStory,
                    ingredients: dish.keyIngredients,
                    travelTips: dish.servingTip
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
                  <span>View Recipe & Story</span>
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
