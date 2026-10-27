export const languageOverview = {
  name: 'Punjabi (ਪੰਜਾਬੀ / پنجابی)',
  family: 'Indo-Aryan (Indo-European language family)',
  speakersGlobal: 'Over 125 million native speakers globally (Ranked 10th most spoken language in the world)',
  statusInIndia: 'Official language of Punjab; recognized in the Eighth Schedule of the Indian Constitution; additional official language in Delhi and Haryana.',
  diasporaPresence: '3rd most spoken language in Canada; 4th most spoken in the United Kingdom; major community language in California, Australia, and New Zealand.',
  twoScripts: [
    {
      scriptName: 'Gurmukhi (ਗੁਰਮੁਖੀ)',
      region: 'Used in Indian Punjab and across the global Sikh and Hindu Punjabi diaspora',
      meaning: '"From the mouth of the Guru"',
      origin: 'Standardized by the second Sikh Guru, Guru Angad Dev Ji, in the 16th century based on the ancient Brahmi/Sharada scripts.',
      alphabet: 'Known traditionally as "Painti Akhari" (35 letters), expanded with 6 dotted consonant modifiers for Persian/Arabic phonemes (total 41 letters).'
    },
    {
      scriptName: 'Shahmukhi (شاہ مکھی)',
      region: 'Used in Pakistani Punjab (West Punjab)',
      meaning: '"From the King’s mouth"',
      origin: 'Based on the Perso-Arabic Nasta\'liq script, introduced during the medieval Sultanate era.',
      alphabet: 'Written right-to-left, consisting of 37 to 40 letters with diacritics for tonal modifications.'
    }
  ]
};

export const gurmukhiAlphabet = [
  { char: 'ੳ', translit: 'Uura', sound: 'Vowel bearer for u, oo, o' },
  { char: 'ਅ', translit: 'Aira', sound: 'Vowel bearer for a, aa, ai, au' },
  { char: 'ੲ', translit: 'Iri', sound: 'Vowel bearer for i, ee, e' },
  { char: 'ਸ', translit: 'Sassa', sound: 's as in sun' },
  { char: 'ਹ', translit: 'Haha', sound: 'h as in hope' },
  { char: 'ਕ', translit: 'Kakka', sound: 'k as in kite' },
  { char: 'ਖ', translit: 'Khakha', sound: 'kh aspirated' },
  { char: 'ਗ', translit: 'Gagga', sound: 'g as in gold' },
  { char: 'ਘ', translit: 'Ghagha', sound: 'gh tonal voiced' },
  { char: 'ਙ', translit: 'Nganga', sound: 'ng as in song' },
  { char: 'ਚ', translit: 'Chacha', sound: 'ch as in chair' },
  { char: 'ਛ', translit: 'Chhachha', sound: 'chh aspirated' },
  { char: 'ਜ', translit: 'Jajja', sound: 'j as in joy' },
  { char: 'ਝ', translit: 'Jhajha', sound: 'jh tonal' },
  { char: 'ਞ', translit: 'Njanja', sound: 'ny as in canyon' },
  { char: 'ਟ', translit: 'Tainka', sound: 't retroflex' },
  { char: 'ਠ', translit: 'Thatha', sound: 'th aspirated retroflex' },
  { char: 'ਡ', translit: 'Dadda', sound: 'd retroflex' },
  { char: 'ਢ', translit: 'Dhadha', sound: 'dh tonal retroflex' },
  { char: 'ਣ', translit: 'Naana', sound: 'n retroflex' },
  { char: 'ਤ', translit: 'Tatta', sound: 't dental as in Spanish' },
  { char: 'ਥ', translit: 'Thatha', sound: 'th aspirated dental' },
  { char: 'ਦ', translit: 'Dadda', sound: 'd dental' },
  { char: 'ਧ', translit: 'Dhadha', sound: 'dh tonal dental' },
  { char: 'ਨ', translit: 'Nanna', sound: 'n as in name' },
  { char: 'ਪ', translit: 'Pappa', sound: 'p as in pen' },
  { char: 'ਫ', translit: 'Phapha', sound: 'ph / f aspirated' },
  { char: 'ਬ', translit: 'Babba', sound: 'b as in book' },
  { char: 'ਭ', translit: 'Bhabha', sound: 'bh tonal' },
  { char: 'ਮ', translit: 'Mamma', sound: 'm as in moon' },
  { char: 'ਯ', translit: 'Yayya', sound: 'y as in yellow' },
  { char: 'ਰ', translit: 'Rara', sound: 'r tapped' },
  { char: 'ਲ', translit: 'Lalla', sound: 'l as in light' },
  { char: 'ਵ', translit: 'Vava', sound: 'v / w soft' },
  { char: 'ੜ', translit: 'Rhardha', sound: 'rh retroflex flap' }
];

export const literaryTraditions = [
  {
    era: 'Sufi Poetry & Mysticism (12th – 18th Century)',
    writers: 'Baba Farid, Shah Hussain, Bulleh Shah, Sultan Bahu, Waris Shah',
    significance: 'Preached divine love, human equality, and spiritual longing using the metaphor of the bride yearning for the Divine Groom. Waris Shah’s 1766 masterpiece "Heer Ranjha" remains the poetic summit of Punjabi language.'
  },
  {
    era: 'Sikh Devotional & Philosophical Literature',
    writers: 'Guru Nanak Dev Ji, Guru Arjan Dev Ji, Bhai Gurdas, Guru Gobind Singh Ji',
    significance: 'The compilation of the Sri Guru Granth Sahib codified spiritual, musical (ragas), and ethical teachings in Gurmukhi. Bhai Gurdas wrote the key interpretive keys (Vaars), while Guru Gobind Singh Ji authored the epic Dasam Granth.'
  },
  {
    era: 'Modern Renaissance & Partition Literature (20th Century)',
    writers: 'Bhai Vir Singh, Dhani Ram Chatrik, Prof. Puran Singh, Amrita Pritam, Shiv Kumar Batalvi, Paash',
    significance: 'Bhai Vir Singh revitalized modern Punjabi prose and poetry. Post-1947, Amrita Pritam captured the immense tragedy of Partition, while Shiv Kumar Batalvi explored poignant lyrical melancholy and Paash brought fierce revolutionary verses.'
  },
  {
    era: 'Contemporary Cinema, Music & Global Pollywood',
    writers: 'Surjit Patar, Gurdas Maan, Diljit Dosanjh, Chamkila, Sidhu Moose Wala',
    significance: 'Punjabi music and cinema (Pollywood) have transformed into a worldwide multi-billion dollar cultural juggernaut, commanding international pop charts, viral streams, and stadium tours from London to Vancouver.'
  }
];

export const phrasebook = [
  {
    id: 1,
    gurmukhi: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
    phonetic: 'Sat Sri Akal',
    english: 'Truth is the Timeless Divine (Universal Punjabi Greeting)',
    usage: 'The universal and respectful greeting used when meeting or parting.'
  },
  {
    id: 2,
    gurmukhi: 'ਕਿੱਦਾਂ? / ਕੀ ਹਾਲ ਹੈ?',
    phonetic: 'Kiddaan? / Ki haal hai?',
    english: 'How are you? / What\'s up?',
    usage: 'Casual and warm greeting among friends or acquaintances.'
  },
  {
    id: 3,
    gurmukhi: 'ਮੈਂ ਠੀਕ-ਠਾਕ ਹਾਂ / ਬਹੁਤ ਵਧੀਆ',
    phonetic: 'Main theek-thaak haan / Bahut vadiya',
    english: 'I am doing well / Very fine',
    usage: 'Standard optimistic response when asked about your well-being.'
  },
  {
    id: 4,
    gurmukhi: 'ਜੀ ਆਇਆਂ ਨੂੰ!',
    phonetic: 'Ji Aayan Nu!',
    english: 'A warm and heartfelt welcome!',
    usage: 'Welcoming guests into your home, wedding, or celebration.'
  },
  {
    id: 5,
    gurmukhi: 'ਧੰਨਵਾਦ / ਸ਼ੁਕਰੀਆ',
    phonetic: 'Dhanvaad / Shukriya',
    english: 'Thank you very much',
    usage: 'Expressing gratitude for assistance, food, or hospitality.'
  },
  {
    id: 6,
    gurmukhi: 'ਰੱਬ ਰਾਖਾ',
    phonetic: 'Rab Rakha',
    english: 'May the Divine protect you (Goodbye / Farewell)',
    usage: 'Affectionate farewell blessing given to travelers or family members.'
  },
  {
    id: 7,
    gurmukhi: 'ਚੱਕ ਦੇ ਫੱਟੇ!',
    phonetic: 'Chak De Phatte!',
    english: 'Keep it up! / Go smash it! / Let\'s do this!',
    usage: 'Iconic energetic Punjabi phrase of encouragement and victory.'
  },
  {
    id: 8,
    gurmukhi: 'ਖਾਣਾ ਬਹੁਤ ਸਵਾਦ ਹੈ!',
    phonetic: 'Khaana bahut swaad hai!',
    english: 'The food is exceptionally delicious!',
    usage: 'Complimenting the cook or host during a meal.'
  },
  {
    id: 9,
    gurmukhi: 'ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?',
    phonetic: 'Tuhada naam ki hai?',
    english: 'What is your name?',
    usage: 'Polite inquiry when meeting someone new.'
  },
  {
    id: 10,
    gurmukhi: 'ਕੋਈ ਗੱਲ ਨਹੀਂ',
    phonetic: 'Koi gall nahi',
    english: 'No problem at all / You\'re very welcome',
    usage: 'Gracious reply when someone thanks you or apologizes.'
  }
];
