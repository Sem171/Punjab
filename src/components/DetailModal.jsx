import React, { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';
import ImgWithFallback from './ImgWithFallback';

export default function DetailModal({ isOpen, onClose, data }) {
  const [checkedIngredients, setCheckedIngredients] = useState({});

  useEffect(() => {
    setCheckedIngredients({});
  }, [data]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(10, 16, 12, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      <div 
        className="modal-content card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-medium)',
          overflow: 'hidden',
          position: 'relative'
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header Bar with Close Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-light)',
          background: 'var(--bg-secondary)',
          zIndex: 2
        }}>
          <div>
            {data.tag && (
              <span className="section-tag" style={{ marginBottom: '0.25rem', padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>
                {data.tag}
              </span>
            )}
            <h3 id="modal-title" style={{ fontSize: '1.35rem', margin: 0, color: 'var(--text-primary)' }}>
              {data.title}
            </h3>
            {data.subtitle && (
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                {data.subtitle}
              </p>
            )}
          </div>
          <button 
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'var(--bg-tertiary)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-crimson)';
              e.currentTarget.style.color = '#FFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{
          padding: '1.75rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          {data.image && (
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '320px' }}>
              <ImgWithFallback 
                src={data.image} 
                alt={data.title} 
                style={{ width: '100%', height: '320px', objectFit: 'cover' }}
              />
            </div>
          )}

          {data.quote && (
            <div style={{
              padding: '1rem 1.25rem',
              backgroundColor: 'var(--color-mustard-subtle)',
              borderLeft: '4px solid var(--color-mustard)',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              fontSize: '1.05rem'
            }}>
              {data.quote}
            </div>
          )}

          {data.description && (
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              {data.description}
            </p>
          )}

          {data.details && (
            <div style={{
              padding: '1.25rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)'
            }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-emerald)' }}>
                Historical Context & Deep Dive
              </h4>
              <p style={{ fontSize: '0.95rem', margin: 0, lineHeight: '1.65' }}>
                {data.details}
              </p>
            </div>
          )}

          {data.keyFacts && data.keyFacts.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Key Highlights & Insights
              </h4>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {data.keyFacts.map((fact, index) => (
                  <li key={index} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.ingredients && data.ingredients.length > 0 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--color-crimson)' }}>
                  Interactive Kitchen Ingredients
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Tap to check off
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {data.ingredients.map((ing, i) => {
                  const isChecked = checkedIngredients[i];
                  return (
                    <button
                      key={i}
                      onClick={() => setCheckedIngredients(prev => ({ ...prev, [i]: !prev[i] }))}
                      style={{
                        padding: '0.35rem 0.85rem',
                        backgroundColor: isChecked ? 'var(--color-emerald-subtle)' : 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        border: `1.5px solid ${isChecked ? 'var(--color-emerald)' : 'var(--border-light)'}`,
                        color: isChecked ? 'var(--color-emerald)' : 'var(--text-primary)',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        textDecoration: isChecked ? 'line-through' : 'none',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {isChecked && <Check size={14} />}
                      <span>{ing}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {data.travelTips && (
            <div style={{
              padding: '1rem',
              backgroundColor: 'var(--color-emerald-subtle)',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-md)'
            }}>
              <strong style={{ color: 'var(--color-emerald)', display: 'block', marginBottom: '0.25rem' }}>
                Traveler's Advice & Etiquette:
              </strong>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                {data.travelTips}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '1rem 1.75rem',
          borderTop: '1px solid var(--border-light)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button 
            className="btn btn-outline"
            onClick={onClose}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
