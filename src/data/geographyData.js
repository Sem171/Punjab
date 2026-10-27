export const geographyOverview = {
  location: 'Northwestern India',
  areaKm2: '50,362 sq km (19,445 sq miles)',
  latitude: '29°30\' N to 32°32\' N',
  longitude: '73°55\' E to 76°50\' E',
  terrain: 'Vast, gently sloping alluvial plains flanked by the Shivalik foothills in the northeast',
  elevationRange: '180 m to 500 m above sea level',
  borders: [
    { direction: 'West', entity: 'Pakistan (Punjab Province, international boundary ~553 km)' },
    { direction: 'North', entity: 'Union Territory of Jammu & Kashmir' },
    { direction: 'Northeast', entity: 'State of Himachal Pradesh' },
    { direction: 'South & Southeast', entity: 'State of Haryana' },
    { direction: 'Southwest', entity: 'State of Rajasthan' }
  ]
};

export const historicalVsModern = {
  title: 'Historical Greater Punjab vs. Modern Indian Punjab',
  explanation: 'It is essential not to confuse the modern Indian state of Punjab with historical Greater Punjab. Historically, "Punjab" referred to the vast fertile basin between the Indus River and the Yamuna River, spanning over 350,000 sq km. This historical realm encompasses present-day Pakistani Punjab (West Punjab, capital Lahore), Indian Punjab (East Punjab), Haryana, Himachal Pradesh, Chandigarh, and portions of Delhi and Jammu. Following the 1947 Partition, Punjab was divided between India and Pakistan; in 1966, the Indian portion was reorganized linguistically into modern Punjab, Haryana, and Himachal Pradesh.',
  comparison: [
    { aspect: 'Geographical Scope', historical: 'Spanned from Indus River in the west to Yamuna River in the east', modern: 'Bounded between Ravi/Sutlej and Haryana/Rajasthan (50,362 km²)' },
    { aspect: 'Rivers Flowing Through', historical: 'All 5 rivers: Jhelum, Chenab, Ravi, Beas, Sutlej (plus Indus & Saraswati)', modern: '3 rivers flow through or border modern Indian Punjab: Sutlej, Beas, Ravi' },
    { aspect: 'Historic Capital', historical: 'Lahore (now in Pakistan)', modern: 'Chandigarh (shared Union Territory with Haryana)' },
    { aspect: 'Administrative Units', historical: 'Five Doabs across vast undivided provinces', modern: '23 administrative districts in 3 cultural zones (Majha, Doaba, Malwa)' }
  ]
};

export const fiveRivers = [
  {
    name: 'Sutlej (Satluj)',
    ancientName: 'Shutudri (Sanskrit) / Zaradros (Greek)',
    inIndianPunjab: true,
    origin: 'Lake Rakshastal near Mount Kailash, Tibet',
    courseInPunjab: 'Enters Punjab through Ropar district, feeds the colossal Bhakra Dam and Nangal Barrage, bisects the state, meets the Beas at Harike Wetland, and flows southwest along the Indo-Pak border.',
    significance: 'The longest river in Punjab and the backbone of the state\'s perennial canal irrigation network (Sirhind Canal, Bist Doab Canal).',
    status: 'Indian Punjab (Under Indus Waters Treaty: India has full rights over Sutlej, Beas, and Ravi)'
  },
  {
    name: 'Beas (Bias)',
    ancientName: 'Vipasa (Sanskrit) / Hyphasis (Greek)',
    inIndianPunjab: true,
    origin: 'Beas Kund near Rohtang Pass, Himachal Pradesh',
    courseInPunjab: 'Enters Punjab near Hoshiarpur, flows south through Pathankot, Gurdaspur, Amritsar, Kapurthala, and Tarn Taran, terminating at its confluence with the Sutlej at Harike.',
    significance: 'Historical boundary of Alexander the Great’s eastern conquest (326 BCE). It is the only river of the Indus system that flows entirely within Indian territory.',
    status: 'Indian Punjab (Home to the rare Indus River Dolphin conservation reserve)'
  },
  {
    name: 'Ravi',
    ancientName: 'Parushni / Iravati (Sanskrit) / Hydraotes (Greek)',
    inIndianPunjab: true,
    origin: 'Bara Bhangal, Kangra district, Himachal Pradesh',
    courseInPunjab: 'Enters Punjab at Chamba/Pathankot borders, flows along the northern edge of Gurdaspur and Amritsar districts, acting as part of the international Indo-Pak border before entering Pakistan.',
    significance: 'Site of the Vedic Battle of the Ten Kings and location of ancient Harappa and Lahore further downstream.',
    status: 'Indian Punjab / Border (Ranjit Sagar Dam / Thein Dam generates major hydro power)'
  },
  {
    name: 'Chenab (Tchanaab)',
    ancientName: 'Asikni / Chandrabhaga (Sanskrit) / Acesines (Greek)',
    inIndianPunjab: false,
    origin: 'Baralacha La Pass, Lahaul & Spiti, Himachal Pradesh',
    courseInPunjab: 'Flows through Jammu & Kashmir into Pakistani Punjab, cutting through Gujrat, Gujranwala, and Jhang.',
    significance: 'Immortalized in Punjabi folk romance as the river where Sohni drowned attempting to cross on an unbaked earthen pot (kacha ghada) to meet Mahiwal.',
    status: 'Historical Punjab (Today in Pakistan; Western River under Indus Waters Treaty)'
  },
  {
    name: 'Jhelum (Jehlum)',
    ancientName: 'Vitasta (Sanskrit) / Hydaspes (Greek)',
    inIndianPunjab: false,
    origin: 'Verinag Spring, Kashmir Valley',
    courseInPunjab: 'Flows through Srinagar, enters Pakistani Punjab, passing Mirpur, Jhelum city, and Muzaffarabad.',
    significance: 'Site of the historic Battle of the Hydaspes between King Porus and Alexander the Great in 326 BCE.',
    status: 'Historical Punjab (Today in Pakistan; Western River under Indus Waters Treaty)'
  }
];

export const subregions = [
  {
    id: 'majha',
    name: 'Majha',
    tagline: 'The Historical Heart & Spiritual Core',
    etymology: 'Derived from "Majh" meaning "middle" or "core" in Punjabi.',
    location: 'Lies between the Ravi River in the northwest and the Beas River in the southeast.',
    districts: ['Amritsar', 'Gurdaspur', 'Tarn Taran', 'Pathankot'],
    cultureAndDialect: 'The cradle of Sikh heritage and traditional Punjabi culture. The Majhi dialect is considered standard literary Punjabi. Known for fierce martial spirit, historical forts, and world-renowned culinary traditions like Amritsari kulchas and fish.',
    highlights: ['Sri Harmandir Sahib (Golden Temple)', 'Jallianwala Bagh', 'Wagah Border', 'Dera Baba Nanak', 'Shahpur Kandi Fort'],
    color: '#8B1E24'
  },
  {
    id: 'doaba',
    name: 'Doaba (Bist Doab)',
    tagline: 'The Land of Pioneers & Global Diaspora',
    etymology: 'From Persian "Do" (two) + "Aab" (waters), meaning the land between two rivers.',
    location: 'Enclosed between the Beas River on the west and the Sutlej River on the south and east.',
    districts: ['Jalandhar', 'Hoshiarpur', 'Kapurthala', 'Shaheed Bhagat Singh Nagar (Nawanshahr)'],
    cultureAndDialect: 'Celebrated for the highest rate of overseas migration (NRI capital of Punjab), exceptional literacy, lush fertility, sports goods manufacturing (Jalandhar), and French-inspired royal architecture (Kapurthala). The local dialect is Doabi.',
    highlights: ['Jalandhar sports manufacturing hub', 'Kapurthala Jagatjit Palace', 'Kanjli Wetland', 'Shaheed Bhagat Singh Memorial at Khatkar Kalan', 'Wonderland'],
    color: '#D48806'
  },
  {
    id: 'malwa',
    name: 'Malwa',
    tagline: 'The Expansive Agricultural Powerhouse',
    etymology: 'Named after the ancient martial tribe Malavas who inhabited the northern plains.',
    location: 'The expansive southern and central plains south of the Sutlej River, extending to the Rajasthan border.',
    districts: [
      'Ludhiana', 'Patiala', 'Bathinda', 'Sangrur', 'Mohali (SAS Nagar)',
      'Firozpur', 'Faridkot', 'Mansa', 'Sri Muktsar Sahib', 'Moga',
      'Fazilka', 'Barnala', 'Fatehgarh Sahib', 'Malerkotla'
    ],
    cultureAndDialect: 'The largest subregion of Punjab, encompassing 14 out of 23 districts and over 65% of the state’s total area. Known for vast wheat and cotton belts (the "White Gold" region), royal courts of Patiala, industrial centers like Ludhiana, and spiritual takhts like Damdama Sahib and Anandpur Sahib foothills. The local dialect is Malwai.',
    highlights: ['Qila Mubarak Bathinda & Patiala', 'Ludhiana industrial center', 'Takht Sri Damdama Sahib', 'Fatehgarh Sahib', 'Malerkotla historic secular harmony'],
    color: '#1B4931'
  }
];

export const environmentAndChallenges = [
  {
    title: 'Groundwater Over-exploitation',
    severity: 'Critical Priority',
    description: 'Over 75% of administrative blocks in Punjab are officially classified as over-exploited due to the intensive water demands of summer paddy cultivation. The water table has been receding by an average of 40–50 cm annually in central districts.',
    solutions: 'Promotion of Direct Seeded Rice (DSR), revival of surface canal networks, crop diversification towards maize, cotton, and pulses, and micro-irrigation subsidies.'
  },
  {
    title: 'Stubble Burning & Air Quality',
    severity: 'Seasonal Challenge (Oct-Nov)',
    description: 'The short turnaround window between harvesting paddy (rice) in October and sowing rabi wheat in November historically led farmers to burn crop residue (parali), creating severe regional air pollution.',
    solutions: 'Incentivizing in-situ management machinery (Happy Seeders, Super Seeders, Balers), setup of bio-CNG plants converting paddy straw to clean fuel, and bio-decomposer sprays.'
  },
  {
    title: 'Ramsar Wetlands & Biodiversity',
    severity: 'Ecological Treasure',
    description: 'Punjab houses internationally recognized Ramsar wetland sites: Harike (41 sq km at Sutlej-Beas confluence), Ropar, and Kanjli. Harike supports over 200,000 migratory waterfowl arriving from Siberia and Central Asia every winter, as well as the endangered Indus River Dolphin.',
    solutions: 'Habitat protection, regulated water release from barrages, weed clearance, and community-led eco-tourism patrols.'
  }
];
