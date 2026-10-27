import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, ChevronDown, Sparkles } from 'lucide-react';
import { soundscape } from '../utils/audioSynth';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('dawn');
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.4);

  const tracks = [
    { id: 'dawn', name: 'Golden Temple Meditation', desc: 'Sa-Pa Tanpura & Chimes' },
    { id: 'sufi', name: 'Sufi Mystical Drone', desc: 'D Acoustic Resonance' },
    { id: 'night', name: 'Nocturnal Serenity', desc: 'Deep Night Reflection' }
  ];

  const handleTogglePlay = () => {
    if (isPlaying) {
      soundscape.stop();
      setIsPlaying(false);
    } else {
      soundscape.startTrack(selectedTrack);
      setIsPlaying(true);
    }
  };

  const handleSelectTrack = (trackId) => {
    setSelectedTrack(trackId);
    if (isPlaying) {
      soundscape.startTrack(trackId);
    }
    setIsExpanded(false);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    soundscape.setVolume(val);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        left: '28px',
        zIndex: 95,
        fontFamily: 'var(--font-sans)'
      }}
    >
      {/* Expanded Track Selection Tray */}
      {isExpanded && (
        <div
          className="card"
          style={{
            position: 'absolute',
            bottom: '100%',
            left: 0,
            marginBottom: '0.75rem',
            width: '280px',
            padding: '0.85rem',
            backgroundColor: 'var(--bg-card)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            animation: 'fadeIn 0.2s ease',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-mustard)' }}>
              Select Soundscape
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              Synthesized Audio
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {tracks.map((t) => (
              <button
                key={t.id}
                onClick={() => handleSelectTrack(t.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  backgroundColor: selectedTrack === t.id ? 'var(--color-mustard-subtle)' : 'transparent',
                  color: selectedTrack === t.id ? 'var(--color-mustard-hover)' : 'var(--text-primary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.desc}</div>
              </button>
            ))}
          </div>

          {/* Volume Slider */}
          <div style={{ marginTop: '0.75rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
              <span>Volume</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              style={{
                width: '100%',
                accentColor: 'var(--color-mustard)',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>
      )}

      {/* Main Glassmorphic Control Pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.45rem 0.9rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(12, 19, 15, 0.88)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
          color: '#F4ECE1'
        }}
      >
        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          aria-label={isPlaying ? 'Pause Soundscape' : 'Play Soundscape'}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: isPlaying ? 'var(--color-mustard)' : 'rgba(255, 255, 255, 0.15)',
            color: isPlaying ? '#000' : '#FFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
        >
          {isPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" style={{ marginLeft: '2px' }} />}
        </button>

        {/* Dynamic Equalizer Wave Bars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '18px' }}>
          {[1, 2, 3, 4].map((bar) => (
            <span
              key={bar}
              style={{
                width: '3px',
                height: isPlaying ? `${6 + (bar * 3.5)}px` : '4px',
                backgroundColor: isPlaying ? '#FFD700' : 'rgba(255, 255, 255, 0.4)',
                borderRadius: '2px',
                animation: isPlaying ? `equalizerAnim 0.7s ease-in-out infinite alternate ${bar * 0.15}s` : 'none',
                transition: 'all 0.2s'
              }}
            />
          ))}
        </div>

        {/* Track Name & Popover Trigger */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            border: 'none',
            color: '#F4ECE1',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            cursor: 'pointer',
            padding: '0.2rem 0.4rem'
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FFE299', lineHeight: 1.1 }}>
              {isPlaying ? 'Ambiance Live' : 'Soundscape'}
            </div>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              {tracks.find(t => t.id === selectedTrack)?.name.split(' ')[0]} Drone
            </div>
          </div>
          <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </button>
      </div>

      <style>{`
        @keyframes equalizerAnim {
          0% { height: 4px; }
          100% { height: 18px; }
        }
      `}</style>
    </div>
  );
}
