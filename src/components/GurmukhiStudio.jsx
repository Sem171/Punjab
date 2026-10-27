import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, Check } from 'lucide-react';
import { gurmukhiAlphabet } from '../data/languageData';

const culturalWords = {
  'ੳ': { word: 'ਉੱਦਮ', translit: 'Uddam', meaning: 'Effort, industrious enterprise & righteous initiative' },
  'ਅ': { word: 'ਅੰਮ੍ਰਿਤ', translit: 'Amrit', meaning: 'Nectar of immortality, divine grace & initiation' },
  'ੲ': { word: 'ਇਕ ਓਅੰਕਾਰ', translit: 'Ik Onkar', meaning: 'The One Universal Divine Creator & Reality' },
  'ਸ': { word: 'ਸੰਗਤ', translit: 'Sangat', meaning: 'Sacred fellowship of human beings without social hierarchy' },
  'ਹ': { word: 'ਹਰਿਮੰਦਰ', translit: 'Harmandir', meaning: 'The Temple of the Divine, welcoming all four directions' },
  'ਕ': { word: 'ਕਿਰਤ', translit: 'Kirat', meaning: 'Honest, ethical labor with sweat of the brow' },
  'ਖ': { word: 'ਖ਼ਾਲਸਾ', translit: 'Khalsa', meaning: 'Sovereign fellowship of saint-soldiers founded in 1699' },
  'ਗ': { word: 'ਗੁਰਮੁਖੀ', translit: 'Gurmukhi', meaning: 'The sacred script "from the mouth of the Guru"' },
  'ਘ': { word: 'ਘੋੜੀਆਂ', translit: 'Ghoriyan', meaning: 'Traditional wedding ballads sung for the groom' },
  'ਙ': { word: 'ਙਿਆਨ', translit: 'Gyaan', meaning: 'Divine spiritual illumination and wisdom' },
  'ਚ': { word: 'ਚੜ੍ਹਦੀ ਕਲਾ', translit: 'Chardi Kala', meaning: 'Eternal high spirits, optimism & unwavering fortitude' },
  'ਛ': { word: 'ਛੋਲੇ', translit: 'Chole', meaning: 'Spiced slow-simmered chickpeas of Punjab' },
  'ਜ': { word: 'ਜੀ ਆਇਆਂ ਨੂੰ', translit: 'Ji Aayan Nu', meaning: 'Heartfelt warm welcome to visitors' },
  'ਝ': { word: 'ਝੂਮਰ', translit: 'Jhumar', meaning: 'Graceful undulating folk dance of Sandalbar' },
  'ਞ': { word: 'ਞਾਣ', translit: 'Njaan', meaning: 'Deep intuitive discernment and inner knowing' },
  'ਟ': { word: 'ਟੱਪੇ', translit: 'Tappe', meaning: 'Rhyming couplets sung in joyful folk music' },
  'ਠ': { word: 'ਠੰਢੀ ਛਾਂ', translit: 'Thandhi Chhaan', meaning: 'Cool sheltering shade of ancient village banyan trees' },
  'ਡ': { word: 'ਡੋਲੀ', translit: 'Doli', meaning: 'Ceremonial bridal palanquin and tender farewell' },
  'ਢ': { word: 'ਢੋਲ', translit: 'Dhol', meaning: 'The booming double-headed barrel drum of Bhangra' },
  'ਣ': { word: 'ਬਾਣੀ', translit: 'Baani', meaning: 'Sacred hymns and utterances of spiritual masters' },
  'ਤ': { word: 'ਤੂੰਬੀ', translit: 'Tumbi', meaning: 'Single-stringed plucked melody instrument of Punjab' },
  'ਥ': { word: 'ਥਾਲੀ', translit: 'Thaali', meaning: 'Traditional platter of warm rotis, saag & dal' },
  'ਦ': { word: 'ਦਸਤਾਰ', translit: 'Dastar', meaning: 'The royal crown of equality, honor & responsibility' },
  'ਧ': { word: 'ਧੰਨਵਾਦ', translit: 'Dhanvaad', meaning: 'Profound gratitude and heartfelt thanks' },
  'ਨ': { word: 'ਨਾਮ ਜਪੋ', translit: 'Naam Japo', meaning: 'Constant mindful remembrance of the Creator' },
  'ਪ': { word: 'ਪੰਜਾਬ', translit: 'Punjab', meaning: 'The fertile Land of Five Roaring Rivers' },
  'ਫ': { word: 'ਫੁਲਕਾਰੀ', translit: 'Phulkari', meaning: 'Heirloom flower-work silk embroidery on handspun khaddar' },
  'ਬ': { word: 'ਭੰਗੜਾ', translit: 'Bhangra', meaning: 'World-famous harvest dance of joyous vitality' },
  'ਭ': { word: 'ਭਾਈਚਾਰਾ', translit: 'Bhaichara', meaning: 'Universal fraternal kinship and community brotherhood' },
  'ਮ': { word: 'ਮੱਕੀ ਦੀ ਰੋਟੀ', translit: 'Makki di Roti', meaning: 'Golden unleavened flatbread made of stoneground cornmeal' },
  'ਯ': { word: 'ਯਾਦਗਾਰ', translit: 'Yaadgaar', meaning: 'Sacred memorial of martyrs who defended freedom' },
  'ਰ': { word: 'ਰੱਬ ਰਾਖਾ', translit: 'Rab Rakha', meaning: 'May the Divine keep you in eternal protection' },
  'ਲ': { word: 'ਲੰਗਰ', translit: 'Langar', meaning: 'Radical egalitarian free community kitchen for all humans' },
  'ਵ': { word: 'ਵੰਡ ਛਕੋ', translit: 'Vand Chhako', meaning: 'Sharing one\'s honest earnings with the needy' },
  'ੜ': { word: 'ਪਿੰਡ', translit: 'Pind', meaning: 'The ancestral village, soil, and pastoral hearth of Punjab' }
};

export default function GurmukhiStudio() {
  const [selectedChar, setSelectedChar] = useState('ਪ');

  const selectedItem = gurmukhiAlphabet.find(c => c.char === selectedChar) || gurmukhiAlphabet[0];
  const wordInfo = culturalWords[selectedChar] || { word: 'ਪੰਜਾਬ', translit: 'Punjab', meaning: 'Land of Five Rivers' };

  const playPronunciation = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const ut = new SpeechSynthesisUtterance(text);
      ut.rate = 0.85;
      ut.pitch = 1.0;
      window.speechSynthesis.speak(ut);
    }
  };

  return (
    <div className="card" style={{
      padding: '2.5rem',
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1.5px solid var(--border-medium)',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
        <span className="section-tag">
          <Sparkles size={14} />
          <span>Interactive Script Studio</span>
        </span>
        <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', margin: '0.4rem 0' }}>
          Painti Akhari — The 35 Sacred Characters
        </h3>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
          Click any letter below to view its phonetic sound, royal calligraphy, and an iconic Punjabi cultural word.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        {/* Left: 35 Letter Grid */}
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.5rem'
          }}>
            {gurmukhiAlphabet.map((item) => (
              <button
                key={item.char}
                onClick={() => setSelectedChar(item.char)}
                style={{
                  aspectRatio: '1 / 1',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: selectedChar === item.char ? 'var(--color-emerald)' : 'var(--bg-secondary)',
                  color: selectedChar === item.char ? '#FFFFFF' : 'var(--text-primary)',
                  border: `1.5px solid ${selectedChar === item.char ? 'var(--color-mustard)' : 'var(--border-light)'}`,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  if (selectedChar !== item.char) e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  if (selectedChar !== item.char) e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span className="gurmukhi" style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1 }}>
                  {item.char}
                </span>
                <span style={{ fontSize: '0.65rem', opacity: 0.8, marginTop: '2px' }}>
                  {item.translit.slice(0, 4)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Featured Calligraphy Showcase Card */}
        <div style={{
          padding: '2.25rem',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          border: '2px solid var(--border-accent)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-mustard-hover)' }}>
              Character Spotlight
            </span>
            <button
              onClick={() => playPronunciation(`${selectedItem.translit}. ${wordInfo.word}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                color: 'var(--color-emerald)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.8rem'
              }}
            >
              <Volume2 size={16} />
              <span>Listen</span>
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '1.5rem 0' }}>
            <div 
              className="gurmukhi"
              style={{
                fontSize: '5rem',
                color: 'var(--color-crimson)',
                lineHeight: 1,
                fontWeight: 700,
                textShadow: '0 4px 16px rgba(140, 29, 36, 0.2)'
              }}
            >
              {selectedItem.char}
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {selectedItem.translit}
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                {selectedItem.sound}
              </div>
            </div>
          </div>

          {/* Associated Cultural Heritage Word */}
          <div style={{
            padding: '1.25rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            borderLeft: '4px solid var(--color-emerald)'
          }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
              Cultural Word Association
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem' }}>
              <span className="gurmukhi" style={{ fontSize: '1.45rem', color: 'var(--color-emerald)', fontWeight: 700 }}>
                {wordInfo.word}
              </span>
              <span style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-mustard-hover)', fontWeight: 600 }}>
                ({wordInfo.translit})
              </span>
            </div>
            <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              {wordInfo.meaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
