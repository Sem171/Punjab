import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Sparkles, BookOpen } from 'lucide-react';

export const punjabiWisdom = [
  {
    id: 1,
    author: 'Guru Nanak Dev Ji (1469–1539)',
    gurmukhi: 'ਸਚਹੁ ਓਰੈ ਸਭੁ ਕੋ ਉਪਰਿ ਸਚੁ ਆਚਾਰੁ ॥',
    transliteration: 'Sachahu orai sabh ko upari sachu aachaaru.',
    translation: 'Truth is the highest virtue, but higher still is truthful living.',
    context: 'Sri Guru Granth Sahib (Ang 62) — The core ethical pillar emphasizing that moral action in daily society surpasses empty dogmatic assertions.'
  },
  {
    id: 2,
    author: 'Baba Sheikh Farid (1179–1266)',
    gurmukhi: 'ਫਰੀਦਾ ਜੋ ਤੈ ਮਾਰਨਿ ਮੁਕੀਆ ਤਿਨ੍ਹਾ ਨ ਮਾਰੇ ਘੁੰਮਿ ॥ ਆਪਨੜੈ ਘਰਿ ਜਾਈਐ ਪੈਰ ਤਿਨ੍ਹਾ ਦੇ ਚੁੰਮਿ ॥',
    transliteration: 'Fareeda jo tai maaran mukkiya tinha na maare ghummi. Aapanrai ghari jaaiai pair tinha de chummi.',
    translation: 'Fareed, do not turn and strike those who strike you with their fists; kiss their feet, and return peacefully to your home.',
    context: 'The earliest recorded masterpiece of Punjabi literature, preaching radical forgiveness, compassion, and transcendence of revenge.'
  },
  {
    id: 3,
    author: 'Hazrat Bulleh Shah (1680–1757)',
    gurmukhi: 'ਮੱਕੇ ਗਇਆਂ ਗੱਲ ਮੁੱਕਦੀ ਨਾਹੀਂ, ਭਾਵੇਂ ਸੌ ਸੌ ਹੱਜ ਕਰ ਆਈਏ... ਬੁੱਲ੍ਹਾ ਸ਼ਹੁ ਮਿਲੇ ਵਿਚ ਦਿਲ ਦੇ!',
    transliteration: 'Makke gaiyan gall mukkdi naahin, bhaaven sau sau hajj kar aaiye... Bullha shah mile vich dil de!',
    translation: 'Going to Mecca does not complete the quest, even if one performs a hundred pilgrimages... Bulleh, the Divine is discovered right within the human heart!',
    context: 'Iconic Sufi Kafi challenging clerical dogma and establishing universal love as the sole true sanctum of the Divine.'
  },
  {
    id: 4,
    author: 'Waris Shah (1722–1798)',
    gurmukhi: 'ਵਾਰਿਸ ਸ਼ਾਹ ਨਾ ਮੁੜਾਂ ਰੰਜੇਟੜੇ ਤੋਂ, ਭਾਵੇਂ ਬਾਪ ਦੇ ਬਾਪ ਦਾ ਬਾਪ ਆਵੇ...',
    transliteration: 'Waris Shah na muran Ranjhetre ton, bhaaven baap de baap da baap aave...',
    translation: 'Waris Shah: I will never turn my back on Ranjha, even if the father of my father\'s father commands it!',
    context: 'From the epic "Heer Ranjha" (1766), embodying Heer’s defiance of feudal coercion in favor of sovereign love and truth.'
  },
  {
    id: 5,
    author: 'Amrita Pritam (1919–2005)',
    gurmukhi: 'ਅੱਜ ਆਖਾਂ ਵਾਰਿਸ ਸ਼ਾਹ ਨੂੰ ਕਿਤੋਂ ਕਬਰਾਂ ਵਿਚੋਂ ਬੋਲ... ਤੇ ਅੱਜ ਕਿਤਾਬ-ਏ-ਇਸ਼ਕ ਦਾ ਕੋਈ ਅਗਲਾ ਵਰਕਾ ਫੋਲ...',
    transliteration: 'Ajj aakhaan Waris Shah nu kithon qabraan vichon bol... Te ajj kitaab-e-ishq da koi agla varka phol...',
    translation: 'Today I call upon Waris Shah: Speak from your grave! Turn another page in your book of love, for the five rivers run crimson with tears...',
    context: 'The immortal 1947 Partition elegy giving voice to millions of displaced and grieving women across divided Punjab.'
  },
  {
    id: 6,
    author: 'Shiv Kumar Batalvi (1936–1973)',
    gurmukhi: 'ਮਾਏ ਨੀ ਮਾਏ ਮੇਰੇ ਗੀਤਾਂ ਦੇ ਨੈਣਾਂ ਵਿਚੋਂ ਬਿਰਹੋਂ ਦੀ ਰੜਕ ਪਵੇ...',
    transliteration: 'Maaye ni maaye mere geetaan de nainan vichon birhon di rarak pave...',
    translation: 'O mother, from the eyes of my songs, the sharp ache of separation continues to sting...',
    context: 'The poetic essence of "Birha da Sultan", transforming grief and romantic longing into divine classical melody.'
  }
];

export default function WisdomCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % punjabiWisdom.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const item = punjabiWisdom[index];

  return (
    <div style={{
      maxWidth: '920px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <div 
        className="card"
        style={{
          padding: '2.5rem 3rem',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Quote Icon Background */}
        <Quote 
          size={110} 
          style={{
            position: 'absolute',
            top: '10px',
            right: '20px',
            opacity: 0.05,
            color: 'var(--color-mustard)',
            pointerEvents: 'none'
          }} 
        />

        {/* Carousel Header Tag */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="section-tag" style={{ margin: 0, padding: '0.2rem 0.75rem', fontSize: '0.75rem' }}>
              <BookOpen size={13} />
              <span>Soul of Punjab • Timeless Verse</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              onClick={() => setIndex((prev) => (prev - 1 + punjabiWisdom.length) % punjabiWisdom.length)}
              aria-label="Previous quote"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)'
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', minWidth: '40px', textAlign: 'center' }}>
              {index + 1} / {punjabiWisdom.length}
            </span>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % punjabiWisdom.length)}
              aria-label="Next quote"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)'
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Gurmukhi Verse */}
        <div 
          className="gurmukhi" 
          style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
            color: 'var(--color-crimson)',
            lineHeight: 1.45,
            marginBottom: '0.85rem',
            fontWeight: 700
          }}
        >
          "{item.gurmukhi}"
        </div>

        {/* Roman Phonetic */}
        <div style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--color-mustard-hover)', marginBottom: '1.25rem', fontWeight: 600 }}>
          {item.transliteration}
        </div>

        {/* English Translation */}
        <p style={{
          fontSize: '1.15rem',
          lineHeight: '1.65',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem',
          fontWeight: 500
        }}>
          "{item.translation}"
        </p>

        {/* Author & Historical Note */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-light)',
          gap: '0.75rem'
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-emerald)' }}>
              — {item.author}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
              {item.context}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
