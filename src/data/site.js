// All copy and imagery for the site lives here so sections stay presentational.
// Photos are from Wikimedia Commons; credits are rendered in the footer and lightbox.

const commons = (file) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`;

export const photos = {
  templeNight: { src: '/img/temple-night.jpg', alt: 'Sri Harmandir Sahib glowing gold at night, reflected in the sacred pool', author: 'Slyronit', license: 'CC BY-SA 4.0', source: commons('Golden Temple, Amritsar at night 02.jpg') },
  templeSunrise: { src: '/img/temple-sunrise.jpg', alt: 'The Golden Temple silhouetted at sunrise over the Amrit Sarovar', author: 'Jeetsarai', license: 'CC BY-SA 3.0', source: commons('Harmandir Sahib During Sunrise.jpg') },
  templePano: { src: '/img/temple-pano.jpg', alt: 'Night panorama of the Golden Temple complex', author: 'Slyronit', license: 'CC BY-SA 4.0', source: commons('Panorama of Golden Temple, Amritsar at night.jpg') },
  templeDay: { src: '/img/temple-day.jpg', alt: 'Harmandir Sahib illuminated at night', author: 'Rupeshsarkar', license: 'CC BY-SA 4.0', source: commons('Golden Temple - Amritsar - Punjab - 0002.jpg') },
  mustardField: { src: '/img/mustard-field.jpg', alt: 'Mustard in bloom beneath the Shivalik hills near Chandigarh', author: 'UnpetitproleX', license: 'CC BY-SA 4.0', source: commons('Mustard field near Chandigarh.jpg') },
  mustardGolden: { src: '/img/mustard-golden.jpg', alt: 'A yellow mustard field between green wheat in rural Punjab', author: 'Tjasbee', license: 'CC BY-SA 4.0', source: commons('Golden mustard fields.jpg') },
  wheat: { src: '/img/wheat.jpg', alt: 'Ripe ears of wheat in a Punjab field', author: 'Satpal Dandiwal', license: 'CC BY-SA 4.0', source: commons('Wheat in Punjab, India.jpg') },
  wagah: { src: '/img/wagah.jpg', alt: 'Crowds watch the flag-lowering ceremony at the Wagah–Attari border', author: 'Guilhem Vellut', license: 'CC BY 2.0', source: commons('Wagah border ceremony2.jpg') },
  jallianwala: { src: '/img/jallianwala.jpg', alt: 'Entrance wall of Jallianwala Bagh with a statue of Udham Singh', author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', source: commons('Jallianwala Bagh, Amritsar 01.jpg') },
  jallianwalaMemorial: { src: '/img/jallianwala-memorial.jpg', alt: 'The flame-shaped Jallianwala Bagh memorial', author: 'Gannu03', license: 'CC BY-SA 4.0', source: commons('Jallianwala Bagh Memorial in Amritsar.jpg') },
  anandpur: { src: '/img/anandpur.jpg', alt: 'Virasat-e-Khalsa museum and its reflecting pools at Anandpur Sahib', author: 'Sanyambahga', license: 'CC BY-SA 3.0', source: commons('Khalsa Heritage Memorial 176 Edit.jpg') },
  bhangra: { src: '/img/bhangra-2.jpg', alt: 'Bhangra dancers leaping mid-air in bright traditional dress', author: 'Monisankar54', license: 'CC BY-SA 4.0', source: commons('Performing regional Bhangra dance of Panjab.jpg') },
  giddha: { src: '/img/giddha.jpg', alt: 'Women in vivid suits and gota-trimmed dupattas dancing giddha', author: 'University of the Fraser Valley', license: 'CC BY 2.0', source: commons('Giddha dance Teeyan Punjab Teej India.jpg') },
  phulkari: { src: '/img/phulkari.jpg', alt: 'Magenta silk floss being darned into a phulkari pattern', author: 'Sheebamadanloewinger', license: 'CC BY-SA 4.0', source: commons('Close-up of contemporary Phulkari embroidery technique .jpg') },
  phulkariShawl: { src: '/img/phulkari-shawl.jpg', alt: 'Close-up of hand embroidery on a red Punjabi shawl', author: 'Kritzolina', license: 'CC BY-SA 4.0', source: commons('Embroidery on a shawl from Punjab 05.jpg') },
  saag: { src: '/img/saag.jpg', alt: 'Sarson da saag with makki di roti, white butter and chillies on a tray', author: 'Officialksv', license: 'CC BY-SA 4.0', source: commons('Sarson-ki-saag makki di roti.jpg') },
  saag2: { src: '/img/saag-2.jpg', alt: 'A plate of sarson ka saag and makki ki roti', author: 'Barthateslisa', license: 'CC BY-SA 4.0', source: commons('Sarson ka Saag aur Makki ki Roti, from India.jpg') },
  kulcha: { src: '/img/kulcha.jpg', alt: 'Amritsari kulcha topped with butter, served with chole and chutney', author: 'Ravi Dwivedi', license: 'CC BY-SA 4.0', source: commons('Amritsari Kulcha served with chhole.jpg') },
  lassi: { src: '/img/lassi.jpg', alt: 'Thick lassi in a clay kulhad', author: 'Ravi Dwivedi', license: 'CC BY-SA 4.0', source: commons('Lassi with malai and barfi.jpg') },
  paddy: { src: '/img/paddy.jpg', alt: 'Ripening paddy fields stretching to the horizon in Punjab', author: 'Shagil Kannur', license: 'CC BY-SA 4.0', source: commons('Paddy field in Punjab 002.jpg') },
  langar: { src: '/img/langar.jpg', alt: 'Pilgrims seated in rows on the floor of the Golden Temple langar hall, sharing a free meal', author: 'shankar s.', license: 'CC BY 2.0', source: commons("The famous 'langar'- free meals for one and all (38938496121).jpg") },
};

export const nav = [
  { id: 'discover', label: 'Discover' },
  { id: 'rivers', label: 'Five Rivers' },
  { id: 'culture', label: 'Culture' },
  { id: 'places', label: 'Places' },
  { id: 'food', label: 'Food' },
  { id: 'gallery', label: 'Gallery' },
];

export const heroSlides = [
  { photo: photos.templeNight, place: 'Sri Harmandir Sahib', where: 'Amritsar', position: '62% 60%' },
  { photo: photos.mustardField, place: 'Mustard in bloom', where: 'Shivalik foothills', position: '50% 70%' },
  { photo: photos.templeSunrise, place: 'Dawn over the Sarovar', where: 'Amritsar', position: '50% 50%' },
];

export const stats = [
  { value: 50362, suffix: ' km²', label: 'of fertile plains' },
  { value: 23, suffix: '', label: 'districts' },
  { value: 3, suffix: '', label: 'historic regions — Majha, Doaba, Malwa' },
  { value: 1966, suffix: '', label: 'present state formed', plain: true },
];

export const timeline = [
  { year: 'c. 2500 BCE', title: 'Indus Valley', text: 'Some of the world’s first cities rise across the greater Punjab plain.' },
  { year: '1469', title: 'Guru Nanak', text: 'The founder of Sikhism is born at Talwandi, now Nankana Sahib.' },
  { year: '1699', title: 'The Khalsa', text: 'Guru Gobind Singh creates the Khalsa at Anandpur Sahib on Vaisakhi.' },
  { year: '1799', title: 'Sikh Empire', text: 'Maharaja Ranjit Singh takes Lahore and unites Punjab.' },
  { year: '1919', title: 'Jallianwala Bagh', text: 'A massacre in Amritsar galvanises India’s freedom struggle.' },
  { year: '1947', title: 'Partition', text: 'Punjab is divided between India and Pakistan.' },
  { year: '1966', title: 'Today’s Punjab', text: 'The present state is formed, with Chandigarh as its capital.' },
];

export const rivers = [
  { id: 'jhelum', name: 'Jhelum', gurmukhi: 'ਜਿਹਲਮ', vedic: 'Vitasta', color: '#7fb7c9', today: 'Flows through Kashmir and Pakistani Punjab', text: 'The westernmost of the five, rising at Verinag in Kashmir. Alexander crossed it to fight King Porus in 326 BCE.' },
  { id: 'chenab', name: 'Chenab', gurmukhi: 'ਚਨਾਬ', vedic: 'Asikni', color: '#8fc6a8', today: 'Flows through Pakistani Punjab', text: 'The river of Heer–Ranjha and Sohni–Mahiwal. It’s the setting of Punjab’s best-loved love stories.' },
  { id: 'ravi', name: 'Ravi', gurmukhi: 'ਰਾਵੀ', vedic: 'Parushni / Iravati', color: '#e7c27a', today: 'Traces India’s border near Gurdaspur & Amritsar', text: 'The river of Lahore. In Indian Punjab it marks the frontier before flowing on into Pakistan.' },
  { id: 'beas', name: 'Beas', gurmukhi: 'ਬਿਆਸ', vedic: 'Vipasha', color: '#f0a65a', today: 'Flows wholly within India', text: 'The eastern limit of Alexander’s march. It meets the Sutlej at Harike, now a Ramsar-listed wetland of migratory birds.' },
  { id: 'sutlej', name: 'Sutlej', gurmukhi: 'ਸਤਲੁਜ', vedic: 'Shatudri', color: '#e5735a', today: 'Crosses the heart of Indian Punjab', text: 'The longest of the five. The Sutlej feeds the Bhakra dam and the canals that turned Punjab into India’s granary.' },
];

export const seasons = [
  {
    id: 'winter', label: 'Winter', months: 'Dec – Feb', crop: 'Sarson (Mustard)', photo: photos.mustardGolden,
    tint: '#e3b505',
    text: 'Fields turn electric yellow as mustard flowers between rows of young wheat. The greens go into sarson da saag, and Lohri bonfires mark the end of the coldest nights.',
  },
  {
    id: 'spring', label: 'Spring', months: 'Mar – May', crop: 'Kanak (Wheat)', photo: photos.wheat,
    tint: '#d4a64a',
    text: 'Rabi wheat ripens to gold and the harvest begins around Vaisakhi in mid-April, a festival of thanksgiving, bhangra and the founding of the Khalsa.',
  },
  {
    id: 'monsoon', label: 'Monsoon', months: 'Jun – Oct', crop: 'Jhona (Paddy)', photo: photos.paddy,
    tint: '#5fae6e',
    text: 'Kharif paddy is transplanted into flooded fields as the monsoon arrives, while cotton and maize grow across the drier Malwa. The cycle ends with autumn harvest and sowing again.',
  },
];

export const agriFacts = [
  { k: 'Green Revolution', v: 'High-yield wheat varieties in the 1960s, with research led by Punjab Agricultural University in Ludhiana (est. 1962), transformed India’s food security.' },
  { k: 'Canal country', v: 'The Bhakra dam on the Sutlej and a dense web of canals irrigate one of the most intensively farmed landscapes on Earth.' },
  { k: 'Three doabs', v: 'Majha, Doaba and Malwa, the lands between the rivers, each have their own dialect, food and folk traditions.' },
];

export const culture = [
  {
    id: 'bhangra', title: 'Bhangra', gurmukhi: 'ਭੰਗੜਾ', kicker: 'The harvest dance', photo: photos.bhangra,
    text: 'Born in the fields as a celebration of the Vaisakhi harvest, bhangra is all exuberance: high leaps, raised arms and shoulders that bounce to the dhol.',
    points: ['Danced to the dhol’s chaal rhythm', 'Props: saap (wooden “snake”) & khunda', 'Boliyan: call-and-response couplets'],
  },
  {
    id: 'giddha', title: 'Giddha', gurmukhi: 'ਗਿੱਧਾ', kicker: 'The women’s celebration', photo: photos.giddha,
    text: 'Graceful and witty, giddha is danced in a circle to rhythmic clapping. Its boliyan tease in-laws, praise beauty and tell village stories, especially during Teeyan in the monsoon.',
    points: ['Rhythm made by clapping hands', 'Sung boliyan carry the story', 'Heart of Teeyan festivities'],
  },
  {
    id: 'phulkari', title: 'Phulkari', gurmukhi: 'ਫੁਲਕਾਰੀ', kicker: 'Flower work', photo: photos.phulkari,
    text: 'Silk floss is darned from the back of handspun khaddar into dazzling geometric blooms. A densely worked bagh (“garden”) was once embroidered by a grandmother for a bride.',
    points: ['Untwisted silk “pat” thread', 'Darn stitch worked from the reverse', 'Bagh: fabric fully covered'],
  },
  {
    id: 'attire', title: 'Traditional Dress', gurmukhi: 'ਪਹਿਰਾਵਾ', kicker: 'Colour as identity', photo: photos.giddha, position: '70% 40%',
    text: 'The dastar (turban) and kurta-chadra for men; for women the Punjabi suit with a phulkari dupatta and the tinkling paranda in the braid. Juttis complete the look.',
    points: ['Dastar: a crown of faith & honour', 'Salwar kameez & phulkari dupatta', 'Hand-embroidered Punjabi jutti'],
  },
  {
    id: 'music', title: 'Folk Music', gurmukhi: 'ਲੋਕ ਸੰਗੀਤ', kicker: 'The heartbeat', photo: null,
    text: 'From the thunder of the dhol to the single bright string of the tumbi and the twin flutes of the algoza, Punjabi folk music is built for dancing, mourning and falling in love.',
    points: ['Dhol · Tumbi · Algoza · Chimta', 'Heer, the epic sung for centuries', 'Sufi kafis of Bulleh Shah'],
  },
];

// Approximate lat/lon used to place markers on the stylised map.
export const places = [
  {
    id: 'golden-temple', name: 'Golden Temple', local: 'ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ', city: 'Amritsar', lat: 31.62, lon: 74.88, label: [14, -16], photo: photos.templeNight,
    tagline: 'A sanctum of gold, floating on a pool of nectar.',
    text: 'Sri Harmandir Sahib, the holiest gurdwara of Sikhism, was built under Guru Arjan Dev and completed in 1604. Maharaja Ranjit Singh later clad it in gold. Its four doors face every direction, open to all, and its langar feeds tens of thousands every day for free.',
    facts: [['Completed', '1604'], ['Open', '24 hours'], ['Best at', 'Dawn & night']],
  },
  {
    id: 'wagah', name: 'Wagah Border', local: 'ਅਟਾਰੀ–ਵਾਹਗਾ', city: 'Attari, Amritsar', lat: 31.6, lon: 74.57, label: [-14, 30, 'end'], photo: photos.wagah,
    tagline: 'High kicks, roaring crowds, two flags at dusk.',
    text: 'Every evening before sunset, India’s Border Security Force and Pakistan’s Rangers perform the Beating Retreat, a choreographed ceremony of high-stepping drill and synchronised flag lowering. It has been held since 1959, with thousands of spectators cheering from both sides.',
    facts: [['From Amritsar', '~30 km'], ['Since', '1959'], ['Arrive', '2 hrs early']],
  },
  {
    id: 'jallianwala', name: 'Jallianwala Bagh', local: 'ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ', city: 'Amritsar', lat: 31.62, lon: 74.88, nudge: [26, 34], label: [14, 22], photo: photos.jallianwala,
    tagline: 'A garden that changed the course of a nation.',
    text: 'On Vaisakhi, 13 April 1919, British troops fired without warning on an unarmed crowd trapped inside this walled garden. Officially 379 people were killed; many estimates are far higher. The bullet-scarred walls, the Martyrs’ Well and the eternal flame memorial remain.',
    facts: [['Date', '13 Apr 1919'], ['Walk from temple', '~5 min'], ['Entry', 'Free']],
  },
  {
    id: 'anandpur', name: 'Anandpur Sahib', local: 'ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ', city: 'Rupnagar', lat: 31.24, lon: 76.5, label: [0, 36, 'middle'], photo: photos.anandpur,
    tagline: 'The city of bliss, birthplace of the Khalsa.',
    text: 'Founded in 1665 by Guru Tegh Bahadur in the Shivalik foothills beside the Sutlej. Here Guru Gobind Singh created the Khalsa on Vaisakhi 1699, at what is now Takht Sri Kesgarh Sahib. The Virasat-e-Khalsa museum (2011) tells the story in breathtaking architecture.',
    facts: [['Founded', '1665'], ['Khalsa', '1699'], ['Festival', 'Hola Mohalla']],
  },
];

export const mapRefs = [
  { name: 'Chandigarh', lat: 30.73, lon: 76.78, end: true },
  { name: 'Ludhiana', lat: 30.9, lon: 75.85 },
  { name: 'Jalandhar', lat: 31.33, lon: 75.58 },
  { name: 'Patiala', lat: 30.34, lon: 76.39 },
  { name: 'Bathinda', lat: 30.21, lon: 74.95 },
  { name: 'Pathankot', lat: 32.27, lon: 75.65 },
];

export const food = [
  {
    id: 'saag', name: 'Sarson da Saag', gurmukhi: 'ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ', photo: photos.saag, position: '35% 55%',
    when: 'Winter', pair: 'Makki di roti, gur & lassi',
    text: 'Mustard greens, simmered for hours with spinach and bathua, then hand-churned with a wooden madhani until silky. It’s finished with a fat knob of white makkhan.',
  },
  {
    id: 'makki', name: 'Makki di Roti', gurmukhi: 'ਮੱਕੀ ਦੀ ਰੋਟੀ', photo: photos.saag2,
    when: 'Winter', pair: 'Sarson da saag & white butter',
    text: 'Golden flatbread of maize flour, patted out by hand and roasted on a tawa until blistered. Crumbly, nutty and made for tearing into a bowl of saag.',
  },
  {
    id: 'kulcha', name: 'Amritsari Kulcha', gurmukhi: 'ਅੰਮ੍ਰਿਤਸਰੀ ਕੁਲਚਾ', photo: photos.kulcha, position: '70% 50%',
    when: 'Breakfast, all year', pair: 'Chole, tamarind chutney & onions',
    text: 'Layered dough stuffed with spiced potato, onion or paneer, slapped onto the walls of a clay tandoor and pulled out crisp, flaky and dripping with butter.',
  },
  {
    id: 'lassi', name: 'Lassi', gurmukhi: 'ਲੱਸੀ', photo: photos.lassi,
    when: 'Summer afternoons', pair: 'Anything. Or a nap',
    text: 'Yoghurt churned with water, sweet or salted, served in tall steel glasses or clay kulhads and crowned with a thick layer of malai. Punjab’s cool, creamy answer to the heat.',
  },
];

export const gallery = [
  { photo: photos.templePano, caption: 'The Golden Temple complex by night', wide: true },
  { photo: photos.giddha, caption: 'Giddha in full swing' },
  { photo: photos.mustardGolden, caption: 'Mustard and wheat, Punjab countryside', tall: true },
  { photo: photos.langar, caption: 'Langar: everyone eats together, for free' },
  { photo: photos.templeDay, caption: 'Harmandir Sahib, lit for the night' },
  { photo: photos.phulkariShawl, caption: 'Hand-embroidered shawl' },
  { photo: photos.wheat, caption: 'Kanak, the wheat that feeds a nation' },
  { photo: photos.jallianwalaMemorial, caption: 'Jallianwala Bagh memorial', tall: true },
  { photo: photos.bhangra, caption: 'Bhangra in flight' },
  { photo: photos.templeSunrise, caption: 'Sunrise over the Amrit Sarovar', wide: true },
  { photo: photos.anandpur, caption: 'Virasat-e-Khalsa, Anandpur Sahib' },
  { photo: photos.kulcha, caption: 'Amritsari kulcha, fresh from the tandoor' },
];
