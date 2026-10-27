import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, History, Info, MapPin, Calendar, Languages, HeartHandshake, Sparkles, Clock } from 'lucide-react';
import ImgWithFallback from './ImgWithFallback';

export default function Hero({ onExploreClick, onHistoryClick }) {
  const [punjabTime, setPunjabTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Indian Standard Time (UTC+5:30)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setPunjabTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: 'Capital',
      value: 'Chandigarh',
      subtext: 'Union Territory shared with Haryana',
      icon: MapPin,
      color: 'var(--color-emerald)'
    },
    {
      label: 'State Established',
      value: '1 November 1966',
      subtext: 'Linguistic reorganization',
      icon: Calendar,
      color: 'var(--color-crimson)'
    },
    {
      label: 'Official Language',
      value: 'Punjabi (ਪੰਜਾਬੀ)',
      subtext: 'Gurmukhi script',
      icon: Languages,
      color: 'var(--color-mustard)'
    },
    {
      label: 'Famous For',
      value: 'Granary & Heritage',
      subtext: 'Agriculture, Sikh heritage, music & hospitality',
      icon: HeartHandshake,
      color: 'var(--color-emerald)'
    }
  ];

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'calc(var(--navbar-height) + 2.5rem)',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Hero Banner with Golden Temple with Cinematic Gradient Layers */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <ImgWithFallback
          src="https://images.unsplash.com/photo-1588096344356-9b6264ff03d9?auto=format&fit=crop&w=2200&q=90"
          alt="Golden Temple Sri Harmandir Sahib Amritsar Punjab"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.36) saturate(1.2)',
            transform: 'scale(1.03)',
            transition: 'transform 10s ease-out'
          }}
        />
        {/* Layered Atmospheric Gradient Shields */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8, 14, 10, 0.78) 0%, rgba(16, 28, 20, 0.6) 45%, var(--bg-primary) 100%)'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.22) 0%, transparent 70%)'
        }}></div>

        {/* Floating Golden Dust Particles */}
        <div className="hero-floating-particles">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${10 + (i * 7)}%`,
                left: `${5 + (i * 8)}%`,
                width: `${4 + (i % 4)}px`,
                height: `${4 + (i % 4)}px`,
                borderRadius: '50%',
                backgroundColor: '#FFE299',
                boxShadow: '0 0 10px #FFD700',
                opacity: 0.4 + (i % 5) * 0.1,
                animation: `floatParticle ${4 + (i % 4)}s ease-in-out infinite alternate ${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Live Status Telemetry Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.45rem 1.35rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(212, 175, 55, 0.18)',
            border: '1.5px solid rgba(243, 208, 121, 0.45)',
            color: '#FFE299',
            fontSize: '0.88rem',
            fontWeight: 600,
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              boxShadow: '0 0 8px #4ade80'
            }}></span>
            <span>Amritsar, Punjab</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <Clock size={14} style={{ color: '#FFD700' }} />
            <span>{punjabTime || '09:30 PM'} IST</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span className="gurmukhi" style={{ color: '#FFD700', fontWeight: 700 }}>ਜੀ ਆਇਆਂ ਨੂੰ</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 2.25rem auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.12,
            marginBottom: '1.25rem',
            textShadow: '0 4px 30px rgba(0,0,0,0.6)',
            letterSpacing: '-0.025em'
          }}>
            Discover Punjab <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFF9EB 0%, #FADB88 35%, #D4AF37 70%, #AA820A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
              fontWeight: 700
            }}>
              The Land of Five Rivers
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
            color: '#F4EFE6',
            lineHeight: 1.6,
            maxWidth: '820px',
            margin: '0 auto 2.5rem auto',
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            fontWeight: 400
          }}>
            Explore the history, culture, courage, traditions, and vibrant spirit of Punjab, India.
          </p>

          {/* Action CTA Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap'
          }}>
            <button 
              className="btn btn-gold"
              onClick={onExploreClick}
              style={{
                padding: '1rem 2.4rem',
                fontSize: '1.08rem',
                fontWeight: 700,
                boxShadow: '0 8px 28px rgba(224, 146, 0, 0.45)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Compass size={22} />
              <span>Explore Punjab</span>
              <ArrowRight size={19} />
            </button>

            <button 
              className="btn btn-outline-gold"
              onClick={onHistoryClick}
              style={{
                padding: '1rem 2.4rem',
                fontSize: '1.08rem',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              <History size={22} />
              <span>Travel Through History</span>
            </button>
          </div>
        </div>

        {/* Historical Region Distinction Disclaimer Banner */}
        <div style={{
          maxWidth: '860px',
          margin: '0 auto 3.5rem auto',
          background: 'rgba(24, 78, 51, 0.55)',
          backdropFilter: 'blur(14px)',
          border: '1.5px solid rgba(212, 175, 55, 0.4)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          color: '#FBF8F2',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
        }}>
          <Info size={24} style={{ color: '#FFD700', flexShrink: 0 }} />
          <div style={{ fontSize: '0.9rem', lineHeight: 1.55 }}>
            <strong style={{ color: '#FFE299' }}>Important Note:</strong> Modern Indian Punjab (reorganized on 1 November 1966) spans 50,362 km². It is distinct from historical Greater Punjab, which originally encompassed the entire five-river basin from the Indus to the Yamuna, spanning present-day Pakistani Punjab, Haryana, Himachal Pradesh, and Chandigarh.
          </div>
        </div>

        {/* Animated Statistics Cards with Luxury Styling */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div 
                key={i}
                className="card"
                style={{
                  padding: '1.6rem 1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.15rem',
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1.5px solid var(--border-medium)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-mustard-subtle)',
                  color: 'var(--color-mustard-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'inset 0 0 10px rgba(224, 146, 0, 0.15)'
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700 }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.2rem', lineHeight: 1.2 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.4 }}>
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes floatParticle {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.3); }
        }
      `}</style>
    </section>
  );
}
