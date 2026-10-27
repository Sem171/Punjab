export const danceForms = [
  {
    id: 'bhangra',
    name: 'Bhangra',
    category: 'Men & Mixed Folk Dance',
    tagline: 'The Explosive Pulse of Harvest and Celebration',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    description: 'Bhangra is Punjab’s globally renowned harvest dance, traditionally performed during the month of Vaisakhi to celebrate the bountiful wheat harvest. Dancers wear brightly colored silk kurtas, chadrans (lungis), and stately pagris adorned with the fan-shaped turla.',
    moves: ['Dhamaal (jumping high with arms aloft)', 'Chaffa', 'Mirza', 'Jhummar steps', 'Khunda (hooked bamboo staff) tricks'],
    tempo: 'Fast, pulsating, syncopated to the deep rumble of the dhol'
  },
  {
    id: 'giddha',
    name: 'Giddha',
    category: 'Women Folk Dance',
    tagline: 'Grace, Wit, Clapping, and Spontaneous Verse',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    description: 'Giddha is the joyous folk dance performed by Punjabi women of all ages during weddings, teeyan (monsoon), and festive gatherings. Without needing any loud instruments other than natural rhythmic clapping (taali) and the gentle dholki, women form a circle (ghera) and take turns stepping into the center to recite boliyan (lyrical couplets) that express wit, sisterhood, romance, and playful family teasing.',
    moves: ['Taali (synchronized clapping)', 'Chhutki (snapping fingers)', 'Boli enactment', 'Kikli (whirling in pairs holding hands crossed)'],
    tempo: 'Melodic, rhythmic, accelerating to an ecstatic climax'
  },
  {
    id: 'jhumar',
    name: 'Jhumar',
    category: 'Graceful Traditional Folk Dance',
    tagline: 'Gentle, Rhythmic Swaying of the Plains',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    description: 'Jhumar originated in the Sandalbar region of western Punjab. Unlike the rapid acrobatics of Bhangra, Jhumar is a graceful, slow, rhythmic dance named after the "jhoom" (swaying movement). Dancers move softly in a circle around the dhol player, clapping and swinging arms gracefully.',
    moves: ['Slow coordinated sways', 'Synchronized foot taps', 'Arm sweeps in 3/4 tempo'],
    tempo: 'Moderate, hypnotic, and dignified'
  },
  {
    id: 'malwai-giddha',
    name: 'Malwai Giddha',
    category: 'Men\'s Heritage Folk Dance',
    tagline: 'Folk Wit and Instrumental Ensemble from Malwa',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
    description: 'A traditional dance unique to the Malwa region performed by men, often including village elders. Performers play unique folk instruments like the chimta, kato, bugchu, and sap (accordion lattice) while reciting witty, humorous boliyan reflecting everyday village life.',
    moves: ['Kato manipulation', 'Chimta flourishes', 'Dynamic comedic storytelling'],
    tempo: 'Playful, interactive, and community-centered'
  }
];

export const folkInstruments = [
  {
    id: 'dhol',
    name: 'Dhol',
    type: 'Double-headed Barrel Drum',
    material: 'Hollowed Sheesham (Tahli) or Mango wood, animal skin heads',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80',
    description: 'The undisputed heartbeat of Punjabi folk music. The base head (dagga side) produces a deep, thundering bass, while the treble head (tihli side) produces sharp, piercing cracking beats played with flexible cane twigs.'
  },
  {
    id: 'tumbi',
    name: 'Tumbi (Toombi)',
    type: 'Single-string Plucked Chordophone',
    material: 'Gourd or hollow wooden resonator, parchment, brass/steel string',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    description: 'A tiny instrument that produces an electrifying, instantly recognizable high-pitched folk melody. Popularized by legendary folk maestro Lal Chand Yamla Jatt, it is now an essential staple of modern global Bhangra beats.'
  },
  {
    id: 'algoza',
    name: 'Algoza (Jori)',
    type: 'Paired Aerophone Flutes',
    material: 'Seasoned bamboo or rosewood with tuned fingerholes',
    image: 'https://images.unsplash.com/photo-1520523839898-5071282543e1?auto=format&fit=crop&w=800&q=80',
    description: 'A pair of identical wooden beak flutes played simultaneously using the demanding technique of circular breathing. One pipe plays a continuous harmonic drone while the other weaves intricate melodies.'
  },
  {
    id: 'chimta',
    name: 'Chimta',
    type: 'Iron Tongs with Jingling Brass Cymbals',
    material: 'Forged steel fire tongs with small circular brass jingles',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    description: 'Adapted from traditional hearth fire-tongs by Sufi mendicants and devotional musicians. Clanged together and shaken to produce rhythmic metallic chimes accompanying boliyan and Qawwalis.'
  },
  {
    id: 'bugchu',
    name: 'Bugchu',
    type: 'Hourglass Friction Drum',
    material: 'Hardwood shell, goatskin membrane, string and wooden peg',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    description: 'Held under the arm while pulling and releasing a cord passing through the center of the skin, producing a unique vocal-like rhythmic "gur-gur" vibrato.'
  }
];

export const traditionalAttire = [
  {
    item: 'The Turban (Pagri / Dastar)',
    significance: 'The crown of Punjabi dignity and spiritual sovereignty',
    details: 'Worn with immense pride, the Dastar represents honor, equality, self-respect, moral courage, and public responsibility. In Sikhism, it is an essential article of faith. Styles range from the royal Patiala Shahi and crisp Nok Pagg to Amritsari Dumalla and classic Turla harvest turbans.',
    fabrics: 'Rubia, Full Voile, or Malmal cotton'
  },
  {
    item: 'Kurta-Pajama & Chadra',
    significance: 'The traditional masculine silhouette',
    details: 'A knee-length or calf-length straight-cut cotton tunic paired with either tailored pajamas or a flowing, unstitched starched waist-wrap known as the Tehmat or Chadra, often detailed with embroidered borders for festive occasions.',
    fabrics: 'Pure Khadi cotton, silk, and linen'
  },
  {
    item: 'Salwar Kameez & Patiala Shahi Salwar',
    significance: 'Elegance, mobility, and vibrant flair',
    details: 'The iconic women’s dress of Punjab. The famous Patiala Shahi salwar features hundreds of dense, cascading pleats originating at the waist yoke, creating voluminous drape and graceful movement, paired with a fitted kameez.',
    fabrics: 'Georgette, silk, Chanderi, and handloom cotton'
  },
  {
    item: 'Phulkari Dupatta',
    significance: 'Heirloom embroidered flower-craft',
    details: 'A lightweight or rich ceremonial scarf draped over the shoulders or head, adorned with geometric silk embroidery, mirrors, gota-patti gold borders, and shimmering tassels.',
    fabrics: 'Handspun khaddar base with raw silk floss (pat)'
  },
  {
    item: 'Punjabi Jutti',
    significance: 'Artisanal handcrafted leather footwear',
    details: 'Originating from royal workshops in Patiala and Muktsar, authentic Punjabi juttis are made of supple cured leather, stitched with zero nails, featuring upturned curled toes (nokh) and adorned with intricate gold and silver tilla thread embroidery.',
    fabrics: 'Handcrafted buffalo and goat leather with metallic wire embroidery'
  }
];

export const phulkariCraft = {
  title: 'Phulkari — The Garden of Threads',
  etymology: 'Literal meaning: "Phul" (Flower) + "Kari" (Craft/Work)',
  heritage: 'Phulkari is an centuries-old folk embroidery tradition of Punjab passed down lovingly from mothers and grandmothers to daughters as wedding dowry heirlooms. Unlike commercial embroidery, authentic Phulkari is stitched from the reverse side of coarse, vegetable-dyed khaddar fabric using untwisted silk floss (pat) without any pre-drawn stencils.',
  types: [
    {
      name: 'Bagh (The Garden)',
      description: 'The pinnacle of Phulkari artistry. The geometric silk stitches are so densely packed that not a single square millimeter of the underlying base cloth remains visible, turning the garment into a shimmering golden garden of silk.'
    },
    {
      name: 'Chope',
      description: 'Stitched in bright red with yellow or golden borders, traditionally gifted by the maternal grandmother (nani) to the bride to wrap around her during the sacred wedding ceremonies.'
    },
    {
      name: 'Sainchi',
      description: 'A rare pictorial narrative Phulkari popular in Malwa depicting village life: women churning butter, men plowing fields with bullocks, birds, trains, charkhas, and games of chopar.'
    }
  ]
};

export const folkRomances = [
  {
    title: 'Heer Ranjha',
    poet: 'Immortalized by Sufi poet Waris Shah (1766)',
    story: 'The supreme love epic of Punjab. Dido Ranjha leaves his ancestral village of Takht Hazara, wanders to Jhang, and falls in love with the fiery Heer Syal. After tragic separation, forced marriage, and Ranjha turning into a wandering jogi (disciple of Gorakhnath), the lovers are poisoned by treachery. The poem serves as an exquisite portrait of 18th-century Punjabi civilization.'
  },
  {
    title: 'Mirza Sahiban',
    poet: 'Composed by folk bard Pilu (c. 16th/17th century)',
    story: 'A tragedy of love and conflicting loyalties. Mirza, renowned for his unmatched marksmanship with bow and arrow, elopes with Sahiban on her wedding eve on his mare Bakki. When resting under a Jand tree, Sahiban breaks Mirza\'s arrows fearing bloodshed between her beloved and her brothers, leading to Mirza\'s tragic slaying.'
  },
  {
    title: 'Sohni Mahiwal',
    poet: 'Rendered by Fazal Shah and Hashim Shah',
    story: 'Set on the banks of the Chenab River. Sohni swims across the roaring river every night to meet Mahiwal using a baked earthen pot (pakka ghada) as a float. Her jealous sister-in-law replaces the pot with an unbaked one (kacha ghada), which dissolves amidst turbulent waters, leading both lovers to perish together.'
  }
];

export const hospitalityAndTraditions = {
  title: 'Mehmaan-Nawazi & Sanjha Chulha',
  hospitalityLore: 'In Punjabi culture, a guest is treated as an embodiment of the Divine ("Mehmaan rab da roop hunda hai"). Homes greet visitors immediately with tall brass tumblers of churned lassi, warm tea, homemade panjiri, and openhearted conversation that stretches late into the night.',
  sanjhaChulha: 'Before modern kitchens, rural Punjabi villages featured a "Sanjha Chulha" (communal village clay tandoor). Every evening, women from different households gathered with their dough to bake rotis together, sharing laughter, folk songs, recipe secrets, and mutual support across caste and community divides.',
  interfaithHarmony: 'The wider Punjab region has a profound history of interfaith fellowship. In Malerkotla (in modern Punjab), the city was blessed by Guru Gobind Singh Ji when its Muslim ruler Nawab Sher Mohammad Khan protested the inhumane execution of the Guru’s young sons; during the violent turmoil of Partition in 1947, Malerkotla remained a miraculous oasis of peace where not a single drop of communal blood was shed.'
};
