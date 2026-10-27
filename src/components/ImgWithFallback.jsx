import React, { useState } from 'react';

export default function ImgWithFallback({ 
  src, 
  alt = '', 
  className = '', 
  fallbackTitle = 'Punjab Heritage',
  ...props 
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div 
        className={`fallback-img-container ${className}`} 
        style={{
          background: 'linear-gradient(135deg, var(--color-emerald-dark), var(--color-crimson-dark))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          color: '#FFF6E0',
          textAlign: 'center',
          minHeight: '200px',
          position: 'relative',
          overflow: 'hidden'
        }}
        {...props}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.15,
          background: 'radial-gradient(circle at center, #D4AF37 0%, transparent 70%)'
        }}></div>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.75rem', color: 'var(--color-mustard)' }}>
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <span style={{ fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.02em', zIndex: 1 }}>
          {alt || fallbackTitle}
        </span>
        <span style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.25rem', zIndex: 1 }}>
          Discover Punjab
        </span>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isLoading && (
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--bg-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
          <div style={{
            width: '24px',
            height: '24px',
            border: '2px solid var(--border-medium)',
            borderTopColor: 'var(--color-mustard)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
          }}></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
    </div>
  );
}
