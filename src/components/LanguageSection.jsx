import React, { useState } from 'react';
import { Languages, Volume2, BookOpen, Sparkles, Check, Globe } from 'lucide-react';
import { languageOverview, literaryTraditions, phrasebook } from '../data/languageData';
import GurmukhiStudio from './GurmukhiStudio';

export default function LanguageSection() {
  const [activeTab, setActiveTab] = useState('phrasebook');
  const [speakingId, setSpeakingId] = useState(null);

  const speakPhrase = (phrase) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase.phonetic);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      setSpeakingId(phrase.id);
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="language" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Languages size={14} />
            <span>Gurmukhi, Poetry & Modern Resonance</span>
          </span>
          <h2 className="section-title">
            Punjabi Language & Literature
          </h2>
          <p className="section-subtitle">
            The mother tongue of over 125 million people across the globe, uniting centuries of Sufi mysticism with the Painti Akhari script.
          </p>
        </div>

        {/* Language Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem'
        }}>
          {[
            { id: 'phrasebook', label: 'Interactive Phrasebook & Pronunciation' },
            { id: 'gurmukhi', label: 'Gurmukhi Script Studio (Painti Akhari)' },
            { id: 'scripts-comparison', label: 'Gurmukhi vs. Shahmukhi' },
            { id: 'literature', label: 'Literary Traditions & Modern Media' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.65rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: activeTab === tab.id ? 'var(--color-emerald)' : 'var(--border-medium)',
                backgroundColor: activeTab === tab.id ? 'var(--color-emerald)' : 'var(--bg-card)',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Phrasebook */}
        {activeTab === 'phrasebook' && (
          <div>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                Learn essential daily Punjabi phrases with Gurmukhi script, English phonetics, and cultural context. Click the speaker icon to hear the pronunciation.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {phrasebook.map((phrase) => (
                <div 
                  key={phrase.id}
                  className="card"
                  style={{
                    padding: '1.75rem',
                    backgroundColor: 'var(--bg-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderLeft: '4px solid var(--color-mustard)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="gurmukhi" style={{ fontSize: '1.75rem', color: 'var(--color-emerald)', fontWeight: 700 }}>
                        {phrase.gurmukhi}
                      </span>
                      <button
                        onClick={() => speakPhrase(phrase)}
                        title="Listen to phonetic audio"
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: speakingId === phrase.id ? 'var(--color-mustard)' : 'var(--bg-secondary)',
                          color: speakingId === phrase.id ? '#FFFFFF' : 'var(--color-mustard-hover)',
                          border: '1px solid var(--border-medium)',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        <Volume2 size={18} />
                      </button>
                    </div>

                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {phrase.phonetic}
                    </div>

                    <div style={{ fontSize: '0.92rem', color: 'var(--color-crimson)', fontWeight: 600, marginBottom: '0.75rem' }}>
                      {phrase.english}
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                      <strong>Context:</strong> {phrase.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Gurmukhi Script Studio (Painti Akhari) */}
        {activeTab === 'gurmukhi' && (
          <GurmukhiStudio />
        )}

        {/* Tab 3: Gurmukhi vs. Shahmukhi */}
        {activeTab === 'scripts-comparison' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {languageOverview.twoScripts.map((sc, i) => (
              <div 
                key={i}
                className="card"
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'var(--bg-card)',
                  borderTop: i === 0 ? '5px solid var(--color-emerald)' : '5px solid var(--color-crimson)'
                }}
              >
                <span className="section-tag" style={{ marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                  {sc.region}
                </span>
                <h3 style={{ fontSize: '1.65rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {sc.scriptName}
                </h3>
                <div style={{ fontSize: '0.95rem', color: 'var(--color-mustard-hover)', fontWeight: 600, marginBottom: '1rem' }}>
                  Meaning: {sc.meaning}
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.25rem' }}>
                    Historical Origin:
                  </strong>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                    {sc.origin}
                  </p>
                </div>

                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-emerald)', display: 'block', marginBottom: '0.25rem' }}>
                    Structure & Alphabet:
                  </strong>
                  <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--text-secondary)' }}>
                    {sc.alphabet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Literary Traditions */}
        {activeTab === 'literature' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {literaryTraditions.map((trad, idx) => (
              <div 
                key={idx}
                className="card"
                style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--color-crimson)', margin: 0 }}>
                    {trad.era}
                  </h4>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-emerald)', margin: '0.3rem 0 0.85rem 0' }}>
                  Celebrated Luminaries: {trad.writers}
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.65', margin: 0, color: 'var(--text-secondary)' }}>
                  {trad.significance}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
