// src/data/cities.ts
// ═══════════════════════════════════════════════════════════════
// PackersHub — 75 Cities Data | South India | 5 States
// Full SEO data, GPS coordinates, content for all city pages
// ═══════════════════════════════════════════════════════════════

export interface City {
  slug: string;
  name: string;
  state: StateKey;
  district: string;
  lat: number;
  lng: number;
  population: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
  nearbyAreas: string[];
  pincode?: string;
}

export interface StateInfo {
  slug: string;
  name: string;
  code: StateKey;
  capital: string;
  cities: number;
  lat: number;
  lng: number;
  description: string;
  metaTitle: string;
  metaDescription: string;
  color: string;
  highlights: string[];
}

export type StateKey = 'AP' | 'TS' | 'TN' | 'KA' | 'KL';

// ── State Data ────────────────────────────────────────────────
export const states: Record<StateKey, StateInfo> = {
  AP: {
    slug: 'packers-movers-andhra-pradesh',
    name: 'Andhra Pradesh',
    code: 'AP',
    capital: 'Amaravati',
    cities: 20,
    lat: 15.9129,
    lng: 79.7400,
    color: '#f97316',
    description: 'Trusted packers and movers across all major cities in Andhra Pradesh',
    metaTitle: 'Best Packers and Movers in Andhra Pradesh | PackersHub – 20 Cities',
    metaDescription: 'PackersHub offers professional packers and movers services across 20 cities in Andhra Pradesh. Household shifting, office relocation, vehicle transport. Call +917731074075.',
    highlights: [
      'Serving 20 cities across Andhra Pradesh',
      'Licensed & insured moving professionals',
      'Local experts with regional knowledge',
      'Same-day quotation available',
    ],
  },
  TS: {
    slug: 'packers-movers-telangana',
    name: 'Telangana',
    code: 'TS',
    capital: 'Hyderabad',
    cities: 14,
    lat: 17.1232,
    lng: 79.2088,
    color: '#ec4899',
    description: 'Expert packers and movers services across Telangana state',
    metaTitle: 'Best Packers and Movers in Telangana | PackersHub – 14 Cities',
    metaDescription: 'PackersHub provides reliable packers and movers services across 14 cities in Telangana. Professional household & office shifting. Call +917731074075.',
    highlights: [
      'Serving Hyderabad & 13 major Telangana cities',
      'Professional trained moving crew',
      'GPS-tracked vehicles for secure transit',
      'Free packing materials on select plans',
    ],
  },
  TN: {
    slug: 'packers-movers-tamil-nadu',
    name: 'Tamil Nadu',
    code: 'TN',
    capital: 'Chennai',
    cities: 16,
    lat: 11.1271,
    lng: 78.6569,
    color: '#8b5cf6',
    description: 'Professional packers and movers across Tamil Nadu',
    metaTitle: 'Best Packers and Movers in Tamil Nadu | PackersHub – 16 Cities',
    metaDescription: 'PackersHub serves 16 major cities in Tamil Nadu with professional packers and movers services. Safe, affordable, timely. Call +917731074075.',
    highlights: [
      'Coverage across 16 Tamil Nadu cities',
      'Specialized corporate relocation',
      'Door-to-door service guarantee',
      'Marine/transit insurance included',
    ],
  },
  KA: {
    slug: 'packers-movers-karnataka',
    name: 'Karnataka',
    code: 'KA',
    capital: 'Bengaluru',
    cities: 15,
    lat: 15.3173,
    lng: 75.7139,
    color: '#10b981',
    description: 'Premium packers and movers services across Karnataka',
    metaTitle: 'Best Packers and Movers in Karnataka | PackersHub – 15 Cities',
    metaDescription: 'PackersHub covers 15 cities in Karnataka with trusted packers and movers. Bengaluru office shifting, home relocation, vehicle transport. Call +917731074075.',
    highlights: [
      'Bengaluru IT corridor specialists',
      '15 cities across Karnataka',
      'Fragile goods packing experts',
      'Weekend & holiday moving available',
    ],
  },
  KL: {
    slug: 'packers-movers-kerala',
    name: 'Kerala',
    code: 'KL',
    capital: 'Thiruvananthapuram',
    cities: 10,
    lat: 10.8505,
    lng: 76.2711,
    color: '#06b6d4',
    description: 'Reliable packers and movers services across Kerala',
    metaTitle: 'Best Packers and Movers in Kerala | PackersHub – 10 Cities',
    metaDescription: 'PackersHub offers premium packers and movers in 10 major Kerala cities. Trusted shifting services with marine insurance. Call +917731074075.',
    highlights: [
      'Coastal & hill area moving experts',
      'Serving 10 major Kerala cities',
      'Expat & Gulf returnee specialists',
      'Antique & luxury goods care',
    ],
  },
};

// ── City Data ─────────────────────────────────────────────────
export const cities: City[] = [

  // ════════════════════════════════════════
  // ANDHRA PRADESH — 20 Cities
  // ════════════════════════════════════════

  {
    slug: 'packers-movers-visakhapatnam',
    name: 'Visakhapatnam',
    state: 'AP',
    district: 'Visakhapatnam',
    lat: 17.6868,
    lng: 83.2185,
    population: '2.2M',
    description: 'Port city and industrial hub of AP',
    metaTitle: 'Best Packers and Movers in Visakhapatnam | PackersHub – Trusted & Affordable',
    metaDescription: 'PackersHub offers professional packers and movers in Visakhapatnam. Household shifting, office relocation, car transport. ✓ GST Invoice ✓ Insurance ✓ Free Quote. Call +917731074075.',
    h1: 'Packers and Movers in Visakhapatnam',
    intro: 'PackersHub is Visakhapatnam\'s most trusted packers and movers service, offering seamless household shifting, office relocation, and vehicle transport across Vizag and beyond. Our expert team handles every move with care, from packing delicate items to safely transporting heavy furniture to your new home.',
    highlights: ['Household & Office Shifting', 'Car & Bike Transport', 'Warehouse Storage', 'Marine Insurance'],
    faqs: [
      { q: 'What is the average cost of packers and movers in Visakhapatnam?', a: 'Shifting costs in Visakhapatnam range from ₹5,000–₹25,000 for local moves and ₹15,000–₹60,000+ for intercity relocations, depending on volume, distance, and services required.' },
      { q: 'How many days does shifting from Visakhapatnam to Hyderabad take?', a: 'Visakhapatnam to Hyderabad shifting typically takes 1–2 days. Our trucks cover the route efficiently via NH-16, ensuring your goods arrive safely on time.' },
      { q: 'Do you provide packing materials in Visakhapatnam?', a: 'Yes. We use high-quality corrugated boxes, bubble wrap, foam sheets, stretch wrap, and wooden crates for fragile/antique items.' },
      { q: 'Is insurance available for shifting in Visakhapatnam?', a: 'Absolutely. We offer comprehensive transit insurance covering all goods against damage, theft, or loss during transport.' },
    ],
    nearbyAreas: ['MVP Colony', 'Gajuwaka', 'Madhurawada', 'Rushikonda', 'Waltair', 'Dwaraka Nagar'],
  },

  {
    slug: 'packers-movers-vijayawada',
    name: 'Vijayawada',
    state: 'AP',
    district: 'Krishna',
    lat: 16.5062,
    lng: 80.6480,
    population: '1.1M',
    description: 'Business capital of Andhra Pradesh',
    metaTitle: 'Best Packers and Movers in Vijayawada | PackersHub – Safe & Affordable Moving',
    metaDescription: 'Top-rated packers and movers in Vijayawada by PackersHub. Household shifting, office relocation, vehicle transport with insurance. Free estimate. Call +917731074075.',
    h1: 'Packers and Movers in Vijayawada',
    intro: 'PackersHub delivers reliable and affordable packers and movers services in Vijayawada. Whether you\'re relocating your home in Benz Circle or shifting your office near Vijayawada railway station, our professional team ensures a smooth, stress-free move every time.',
    highlights: ['Residential Shifting', 'Commercial Relocation', 'Bike Transport', 'Storage Solutions'],
    faqs: [
      { q: 'What is the cost of moving in Vijayawada?', a: 'Local shifting in Vijayawada costs ₹4,000–₹18,000. Long-distance moves to cities like Hyderabad or Chennai cost ₹12,000–₹50,000 based on load and distance.' },
      { q: 'Do you serve Amaravati from Vijayawada?', a: 'Yes, we provide packers and movers services between Vijayawada and Amaravati, the new AP capital — just 30 km away.' },
      { q: 'Can you move heavy furniture safely?', a: 'Our team is trained in disassembling, wrapping, loading, transporting, and reassembling all types of furniture including wardrobes, beds, and sofas.' },
      { q: 'Do you operate on weekends in Vijayawada?', a: 'Yes, we operate 7 days a week including Sundays and public holidays. Book at least 48 hours in advance for weekend slots.' },
    ],
    nearbyAreas: ['Benz Circle', 'Kondapalli', 'Amaravati', 'Gannavaram', 'Ibrahimpatnam', 'Auto Nagar'],
  },

  {
    slug: 'packers-movers-guntur',
    name: 'Guntur',
    state: 'AP',
    district: 'Guntur',
    lat: 16.3067,
    lng: 80.4365,
    population: '1M',
    description: 'Major commercial city known for chilli trade',
    metaTitle: 'Best Packers and Movers in Guntur | PackersHub – Trusted Home & Office Shifting',
    metaDescription: 'PackersHub packers and movers in Guntur offer safe household shifting, office relocation, and vehicle transport. GST Invoice. Insurance. Call +917731074075.',
    h1: 'Packers and Movers in Guntur',
    intro: 'PackersHub is the leading packers and movers company in Guntur, serving residential and commercial clients across the city and nearby areas. From fragile kitchen items to heavy machinery, we pack, load, transport, and unpack everything with professional care.',
    highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Packing Services'],
    faqs: [
      { q: 'How much does shifting cost in Guntur?', a: 'Local shifting in Guntur costs ₹3,500–₹15,000. Interstate moves to Hyderabad or Bengaluru range from ₹12,000–₹45,000.' },
      { q: 'Do you provide storage facilities in Guntur?', a: 'Yes, we have secure warehouse storage in Guntur for short-term and long-term needs, with 24/7 CCTV surveillance.' },
      { q: 'How do I get a free quote in Guntur?', a: 'Call us at +917731074075 or fill the quote form on our website. Our team will survey your goods and give a transparent, itemized estimate.' },
      { q: 'Do you handle piano or antique shifting in Guntur?', a: 'Yes, our specialty packing team handles pianos, antiques, artwork, and other high-value fragile items with specialized crates and cushioning.' },
    ],
    nearbyAreas: ['Brodipet', 'Arundelpet', 'Narasaraopet', 'Ponnur', 'Tenali', 'Mangalagiri'],
  },

  {
    slug: 'packers-movers-nellore',
    name: 'Nellore',
    state: 'AP',
    district: 'SPSR Nellore',
    lat: 14.4426,
    lng: 79.9865,
    population: '0.6M',
    description: 'Gateway city to AP — our headquarters location',
    metaTitle: 'Best Packers and Movers in Nellore | PackersHub Headquarters – Trusted Service',
    metaDescription: 'PackersHub HQ in BV Nagar, Nellore. #1 packers and movers in Nellore for household shifting, office relocation, vehicle transport. Call +917731074075.',
    h1: 'Packers and Movers in Nellore',
    intro: 'PackersHub is headquartered in BV Nagar, Nellore — making us the most trusted local packers and movers in the city. With deep knowledge of Nellore\'s roads, localities, and logistical needs, we deliver unmatched shifting experiences for homes, offices, and vehicles across Nellore and South India.',
    highlights: ['Local Shifting Experts', 'Intercity Moving', 'Bike & Car Transport', '24/7 Customer Support'],
    faqs: [
      { q: 'Where is PackersHub located in Nellore?', a: 'Our headquarters is at BV Nagar, Nellore, Andhra Pradesh — PIN 524004. You can visit us or call +917731074075.' },
      { q: 'What is the cost of local shifting in Nellore?', a: 'Local Nellore shifting costs start at ₹2,500 for 1-BHK and go up to ₹10,000 for larger homes. Long-distance moves are priced based on distance and volume.' },
      { q: 'How quickly can you arrange packers in Nellore?', a: 'We can arrange a packing team within 24 hours for urgent requirements. Same-day service is available on request subject to availability.' },
      { q: 'Do you shift from Nellore to Hyderabad?', a: 'Yes, Nellore to Hyderabad is one of our busiest routes (~280 km). We run weekly consolidated loads and exclusive trucks, with delivery in 1–2 days.' },
    ],
    nearbyAreas: ['BV Nagar', 'Pogathota', 'Vedayapalem', 'Dargamitta', 'Santhapet', 'Grand Bypass Road'],
    pincode: '524004',
  },

  {
    slug: 'packers-movers-kurnool',
    name: 'Kurnool',
    state: 'AP',
    district: 'Kurnool',
    lat: 15.8281,
    lng: 78.0373,
    population: '0.5M',
    description: 'Historic city on the banks of Tungabhadra',
    metaTitle: 'Best Packers and Movers in Kurnool | PackersHub – Affordable & Trusted',
    metaDescription: 'Reliable packers and movers in Kurnool by PackersHub. Home shifting, office relocation, vehicle transport. Free estimate. Call +917731074075.',
    h1: 'Packers and Movers in Kurnool',
    intro: 'PackersHub provides professional and affordable packers and movers services in Kurnool. Whether you\'re moving within the city or to Hyderabad, Bengaluru, or Chennai, our trained team ensures your belongings arrive safely and on time.',
    highlights: ['Household Shifting', 'Office Moving', 'Vehicle Transport', 'Packing Services'],
    faqs: [
      { q: 'What does shifting in Kurnool cost?', a: 'Shifting within Kurnool costs ₹3,000–₹14,000. Long-distance moves to Hyderabad or Bengaluru range from ₹10,000–₹40,000 based on goods volume.' },
      { q: 'Do you move from Kurnool to Bengaluru?', a: 'Yes, Kurnool to Bengaluru is a popular route (~300 km). Our trucks run twice weekly with door-to-door delivery.' },
      { q: 'Is transit insurance available in Kurnool?', a: 'Yes, all our moves from Kurnool include optional transit insurance to protect your goods against damage or loss.' },
      { q: 'Can you pack electronics safely in Kurnool?', a: 'Yes, we use anti-static bubble wrap, foam inserts, and original-sized boxes for TVs, computers, and other electronics.' },
    ],
    nearbyAreas: ['Bellary Road', 'Kurnool Bypass', 'Adoni', 'Nandyal', 'Yemmiganur'],
  },

  {
    slug: 'packers-movers-rajahmundry',
    name: 'Rajahmundry',
    state: 'AP',
    district: 'East Godavari',
    lat: 17.0005,
    lng: 81.8040,
    population: '0.34M',
    description: 'Cultural capital on River Godavari',
    metaTitle: 'Best Packers and Movers in Rajahmundry | PackersHub – Reliable Shifting Service',
    metaDescription: 'PackersHub packers and movers in Rajahmundry. Professional household shifting, office relocation, vehicle transport. Trusted & affordable. Call +917731074075.',
    h1: 'Packers and Movers in Rajahmundry',
    intro: 'PackersHub offers reliable and professional packers and movers in Rajahmundry. Our experienced team handles everything from packing your home essentials to transporting heavy furniture safely across Godavari districts and beyond.',
    highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Storage Services'],
    faqs: [
      { q: 'How much does shifting in Rajahmundry cost?', a: 'Local moves in Rajahmundry range from ₹3,500–₹15,000. Interstate shifts depend on distance and goods volume — call for a free quote.' },
      { q: 'Do you serve Kakinada from Rajahmundry?', a: 'Yes, we regularly move goods between Rajahmundry and Kakinada (50 km). Same-day delivery available on this route.' },
      { q: 'Can you handle antique Godavari crafts and artifacts?', a: 'Yes, our specialty packing team wraps antiques, artwork, and collectibles with archival materials and custom crating.' },
      { q: 'Do you move from Rajahmundry to Hyderabad?', a: 'Yes, Rajahmundry to Hyderabad is approximately 340 km. We offer shared loads (budget) and exclusive trucks for urgent moves.' },
    ],
    nearbyAreas: ['Innespet', 'Danavai peta', 'Kakinada Road', 'Peddapuram', 'Kovur'],
  },

  {
    slug: 'packers-movers-kakinada',
    name: 'Kakinada',
    state: 'AP',
    district: 'East Godavari',
    lat: 16.9891,
    lng: 82.2475,
    population: '0.31M',
    description: 'Major port city in East Godavari',
    metaTitle: 'Best Packers and Movers in Kakinada | PackersHub – Safe & Affordable',
    metaDescription: 'Trusted packers and movers in Kakinada. PackersHub offers household shifting, office relocation, car transport. Free quote. Call +917731074075.',
    h1: 'Packers and Movers in Kakinada',
    intro: 'PackersHub is Kakinada\'s trusted packers and movers service. We offer complete relocation solutions for homes and businesses in Kakinada, serving all major areas including One Town, Two Town, and the industrial port zones.',
    highlights: ['Household Moving', 'Office Shifting', 'Port Cargo Assistance', 'Insurance Coverage'],
    faqs: [
      { q: 'What is the shifting cost in Kakinada?', a: 'Local Kakinada shifting costs ₹3,000–₹13,000. Long-distance to Visakhapatnam or Hyderabad costs ₹12,000–₹45,000.' },
      { q: 'Do you handle heavy machinery near Kakinada port?', a: 'Yes, we have special equipment and trained crew for industrial/machinery relocation in Kakinada\'s port and industrial areas.' },
      { q: 'How long does shifting from Kakinada to Chennai take?', a: 'Kakinada to Chennai (approximately 450 km) typically takes 1–2 days via NH-216. Our team ensures safe delivery within the committed timeline.' },
      { q: 'Do you provide packing boxes in Kakinada?', a: 'Yes, we supply corrugated boxes, bubble wrap, foam, and stretch film. Premium packing kits available for glass, ceramics, and valuables.' },
    ],
    nearbyAreas: ['One Town', 'Two Town', 'Suryaraopet', 'Jagannaickpur', 'JNTU Kakinada', 'Bommuru'],
  },

  {
    slug: 'packers-movers-tirupati',
    name: 'Tirupati',
    state: 'AP',
    district: 'Tirupati',
    lat: 13.6288,
    lng: 79.4192,
    population: '0.5M',
    description: 'Holy pilgrim city and IT hub',
    metaTitle: 'Best Packers and Movers in Tirupati | PackersHub – Trusted & Professional',
    metaDescription: 'PackersHub packers and movers in Tirupati. Household shifting, office relocation, car & bike transport. Transparent pricing. Call +917731074075.',
    h1: 'Packers and Movers in Tirupati',
    intro: 'PackersHub provides expert packers and movers services in Tirupati, the holy city of Lord Venkateswara. Whether you\'re relocating near the Tirumala hills or shifting your IT office in Renigunta, we guarantee safe and professional moving services.',
    highlights: ['Home & Office Shifting', 'Vehicle Transport', 'Fragile Goods Packing', 'Interstate Moving'],
    faqs: [
      { q: 'What is the cost of shifting in Tirupati?', a: 'Tirupati local shifting costs ₹3,000–₹14,000. Moves to Chennai (around 130 km) cost ₹8,000–₹30,000 based on goods volume.' },
      { q: 'Can you shift household goods in Tirupati quickly?', a: 'Yes, we offer 24-hour emergency shifting services in Tirupati. Call +917731074075 for immediate assistance.' },
      { q: 'Do you provide storage near Tirupati?', a: 'Yes, we have secure, climate-controlled storage near Tirupati bypass for short-term or long-term needs.' },
      { q: 'Do you shift from Tirupati to Bengaluru?', a: 'Yes, Tirupati to Bengaluru (~250 km) is a regular route. We offer both shared and exclusive truck options for this corridor.' },
    ],
    nearbyAreas: ['Tirumala', 'Alipiri', 'Renigunta', 'Chandragiri', 'Srikalahasti', 'Chittoor Road'],
  },

  { slug: 'packers-movers-eluru', name: 'Eluru', state: 'AP', district: 'Eluru', lat: 16.7107, lng: 81.0952, population: '0.22M', description: 'Major city in West Godavari', metaTitle: 'Packers and Movers in Eluru | PackersHub – Affordable & Reliable', metaDescription: 'PackersHub offers trusted packers and movers in Eluru. Home & office shifting, vehicle transport. Call +917731074075.', h1: 'Packers and Movers in Eluru', intro: 'PackersHub provides reliable and affordable packers and movers in Eluru. From residential shifts to commercial relocations, we handle everything professionally.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Packing Services'], faqs: [{ q: 'What is the cost of shifting in Eluru?', a: 'Local shifting in Eluru costs ₹2,500–₹12,000. Long-distance rates depend on goods volume and destination.' }, { q: 'Do you move from Eluru to Hyderabad?', a: 'Yes, Eluru to Hyderabad (about 350 km) is a regular route. Estimated transit time is 1 day.' }], nearbyAreas: ['Powerpet', 'Bandar Road', 'Tadepalligudem', 'Bhimavaram', 'Tanuku'] },

  { slug: 'packers-movers-ongole', name: 'Ongole', state: 'AP', district: 'Prakasam', lat: 15.5057, lng: 80.0499, population: '0.22M', description: 'Prakasam district headquarters', metaTitle: 'Packers and Movers in Ongole | PackersHub – Trusted Shifting Service', metaDescription: 'PackersHub provides reliable packers and movers in Ongole for household and office shifting. Call +917731074075.', h1: 'Packers and Movers in Ongole', intro: 'PackersHub delivers professional packers and movers in Ongole, serving all major areas in Prakasam district with safe, affordable relocation services.', highlights: ['Home Shifting', 'Office Moving', 'Bike Transport', 'Storage'], faqs: [{ q: 'What is the cost in Ongole?', a: 'Local shifting costs ₹3,000–₹12,000. Interstate moves are priced by distance and load.' }, { q: 'Do you serve Prakasam areas?', a: 'Yes, we cover Chirala, Markapur, Kandukur, and all Prakasam district towns.' }], nearbyAreas: ['Kurnool Road', 'Chirala', 'Kandukur', 'Markapur', 'Addanki'] },

  { slug: 'packers-movers-anantapur', name: 'Anantapur', state: 'AP', district: 'Anantapur', lat: 14.6819, lng: 77.6006, population: '0.26M', description: 'Gateway to Karnataka from AP', metaTitle: 'Packers and Movers in Anantapur | PackersHub – Affordable & Reliable', metaDescription: 'Trusted packers and movers in Anantapur by PackersHub. Household and office shifting. Call +917731074075.', h1: 'Packers and Movers in Anantapur', intro: 'PackersHub offers expert packers and movers services in Anantapur. Strategic border city for AP-Karnataka corridor moving needs.', highlights: ['Home Shifting', 'Karnataka Corridor', 'Vehicle Transport', 'Packing'], faqs: [{ q: 'Do you move between Anantapur and Bengaluru?', a: 'Yes, Anantapur to Bengaluru (~190 km) is one of our popular routes with daily truck runs.' }, { q: 'What is the cost in Anantapur?', a: 'Local moves cost ₹2,500–₹11,000. Interstate rates depend on destination and load.' }], nearbyAreas: ['Guntakal', 'Hindupur', 'Tadipatri', 'Dharmavaram', 'Kadiri'] },

  { slug: 'packers-movers-kadapa', name: 'Kadapa', state: 'AP', district: 'YSR Kadapa', lat: 14.4673, lng: 78.8242, population: '0.34M', description: 'Historic city in Rayalaseema', metaTitle: 'Packers and Movers in Kadapa | PackersHub – Professional & Trusted', metaDescription: 'PackersHub packers and movers in Kadapa for home and office shifting. Transparent pricing, insurance. Call +917731074075.', h1: 'Packers and Movers in Kadapa', intro: 'PackersHub provides trusted packers and movers in Kadapa, serving Rayalaseema\'s major city with professional moving solutions.', highlights: ['Home & Office Shifting', 'Car Transport', 'Insurance', 'Storage'], faqs: [{ q: 'What is the shifting cost in Kadapa?', a: 'Local Kadapa moves cost ₹2,800–₹12,000. Long-distance moves to Bengaluru or Hyderabad range from ₹10,000–₹38,000.' }, { q: 'Do you serve Cuddapah area?', a: 'Yes, Kadapa (formerly Cuddapah) and all surrounding areas are covered by our team.' }], nearbyAreas: ['Proddatur', 'Rajampeta', 'Pulivendla', 'Badvel', 'Jammalamadugu'] },

  { slug: 'packers-movers-srikakulam', name: 'Srikakulam', state: 'AP', district: 'Srikakulam', lat: 18.2949, lng: 83.8934, population: '0.18M', description: 'Northernmost district of Andhra Pradesh', metaTitle: 'Packers and Movers in Srikakulam | PackersHub – Safe & Affordable', metaDescription: 'PackersHub offers reliable packers and movers in Srikakulam for household and office shifting. Call +917731074075.', h1: 'Packers and Movers in Srikakulam', intro: 'PackersHub brings professional packers and movers services to Srikakulam, AP\'s northernmost district bordering Odisha.', highlights: ['Home Shifting', 'Office Relocation', 'Vehicle Transport', 'Packing'], faqs: [{ q: 'What is the cost in Srikakulam?', a: 'Local moves cost ₹2,500–₹11,000. Moves to Visakhapatnam (~110 km) cost ₹7,000–₹22,000.' }, { q: 'Do you operate near the Odisha border?', a: 'Yes, we handle interstate moves between Srikakulam and nearby Odisha cities.' }], nearbyAreas: ['Narasannapeta', 'Palasa', 'Amadalavalasa', 'Tekkali', 'Rajam'] },

  { slug: 'packers-movers-vizianagaram', name: 'Vizianagaram', state: 'AP', district: 'Vizianagaram', lat: 18.1066, lng: 83.3956, population: '0.23M', description: 'Cultural city in north AP', metaTitle: 'Packers and Movers in Vizianagaram | PackersHub', metaDescription: 'PackersHub provides trusted packers and movers in Vizianagaram. Home shifting, office relocation, vehicle transport. Call +917731074075.', h1: 'Packers and Movers in Vizianagaram', intro: 'PackersHub delivers reliable moving services in Vizianagaram, offering complete household and office shifting solutions.', highlights: ['Home & Office Shifting', 'Car Transport', 'Packing', 'Storage'], faqs: [{ q: 'What does shifting cost in Vizianagaram?', a: 'Local moves cost ₹2,500–₹11,000. Routes to Visakhapatnam (~75 km) start at ₹6,000.' }, { q: 'Do you offer weekend moves in Vizianagaram?', a: 'Yes, we operate all 7 days including weekends and holidays.' }], nearbyAreas: ['Bobbili', 'Parvathipuram', 'Salur', 'Gajapatinagaram', 'Cheepurupalli'] },

  { slug: 'packers-movers-bhimavaram', name: 'Bhimavaram', state: 'AP', district: 'West Godavari', lat: 16.5449, lng: 81.5212, population: '0.17M', description: 'Aquaculture hub of West Godavari', metaTitle: 'Packers and Movers in Bhimavaram | PackersHub', metaDescription: 'PackersHub packers and movers in Bhimavaram for home and office shifting. Transparent pricing. Call +917731074075.', h1: 'Packers and Movers in Bhimavaram', intro: 'PackersHub offers professional moving services in Bhimavaram, covering all localities in West Godavari district.', highlights: ['Home Shifting', 'Office Moving', 'Vehicle Transport', 'Insurance'], faqs: [{ q: 'What is the cost in Bhimavaram?', a: 'Local moves ₹2,800–₹12,000. Hyderabad route costs ₹12,000–₹38,000.' }, { q: 'Do you serve Narasapuram?', a: 'Yes, Narasapuram and nearby West Godavari towns are covered.' }], nearbyAreas: ['Tanuku', 'Narasapuram', 'Tadepalligudem', 'Palakol', 'Akividu'] },

  { slug: 'packers-movers-machilipatnam', name: 'Machilipatnam', state: 'AP', district: 'Krishna', lat: 16.1875, lng: 81.1389, population: '0.18M', description: 'Historic port city in Krishna district', metaTitle: 'Packers and Movers in Machilipatnam | PackersHub', metaDescription: 'Professional packers and movers in Machilipatnam. Home shifting, vehicle transport, storage. Call +917731074075.', h1: 'Packers and Movers in Machilipatnam', intro: 'PackersHub delivers reliable packing and moving services in Machilipatnam, the historic port city of Krishna district.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Storage'], faqs: [{ q: 'What does shifting cost in Machilipatnam?', a: 'Local moves ₹2,500–₹11,000. Vijayawada to Machilipatnam costs ₹5,000–₹15,000.' }, { q: 'Do you handle coastal cargo?', a: 'Yes, we assist with coastal moves and ensure goods are packed weatherproof.' }], nearbyAreas: ['Gudivada', 'Vuyyuru', 'Hanuman Junction', 'Nuzvid', 'Pedana'] },

  { slug: 'packers-movers-chittoor', name: 'Chittoor', state: 'AP', district: 'Chittoor', lat: 13.2172, lng: 79.1003, population: '0.17M', description: 'Mango capital near Karnataka-Tamil Nadu border', metaTitle: 'Packers and Movers in Chittoor | PackersHub', metaDescription: 'PackersHub packers and movers in Chittoor. Home shifting, car transport, affordable rates. Call +917731074075.', h1: 'Packers and Movers in Chittoor', intro: 'PackersHub provides expert moving services in Chittoor, ideally positioned for AP-TN-KA corridor relocations.', highlights: ['Home Shifting', 'Tri-State Corridor', 'Car Transport', 'Insurance'], faqs: [{ q: 'What is the cost in Chittoor?', a: 'Local moves ₹2,500–₹10,000. Chennai route (~190 km) costs ₹8,000–₹28,000.' }, { q: 'Can you move from Chittoor to Bengaluru?', a: 'Yes, Chittoor to Bengaluru (~150 km) with 1-day delivery.' }], nearbyAreas: ['Madanapalle', 'Palamaner', 'Punganur', 'Kuppam', 'Piler'] },

  { slug: 'packers-movers-narasaraopet', name: 'Narasaraopet', state: 'AP', district: 'Palnadu', lat: 16.2342, lng: 80.0485, population: '0.1M', description: 'New Palnadu district headquarters', metaTitle: 'Packers and Movers in Narasaraopet | PackersHub', metaDescription: 'PackersHub packers and movers in Narasaraopet. Affordable home shifting. Call +917731074075.', h1: 'Packers and Movers in Narasaraopet', intro: 'PackersHub offers affordable and reliable packing and moving services in Narasaraopet, serving Palnadu district.', highlights: ['Home Shifting', 'Office Relocation', 'Vehicle Transport', 'Packing'], faqs: [{ q: 'What is the cost in Narasaraopet?', a: 'Local moves ₹2,500–₹10,000. Hyderabad/Guntur routes depend on load.' }, { q: 'Do you cover all Palnadu towns?', a: 'Yes, including Macherla, Piduguralla, Dachepalli, and Gurazala.' }], nearbyAreas: ['Macherla', 'Piduguralla', 'Gurazala', 'Sattenapalli', 'Atchampeta'] },

  { slug: 'packers-movers-proddatur', name: 'Proddatur', state: 'AP', district: 'YSR Kadapa', lat: 14.7503, lng: 78.5486, population: '0.21M', description: 'Industrial city in YSR Kadapa', metaTitle: 'Packers and Movers in Proddatur | PackersHub', metaDescription: 'PackersHub packers and movers in Proddatur. Safe home shifting, car transport. Call +917731074075.', h1: 'Packers and Movers in Proddatur', intro: 'PackersHub brings professional moving services to Proddatur, one of AP\'s rapidly growing industrial towns.', highlights: ['Home Shifting', 'Industrial Moving', 'Car Transport', 'Storage'], faqs: [{ q: 'What is the cost in Proddatur?', a: 'Local moves ₹2,500–₹10,000. Hyderabad route (280 km) costs ₹10,000–₹35,000.' }, { q: 'Do you serve Cuddapah from Proddatur?', a: 'Yes, Proddatur to Kadapa (35 km) is a same-day service.' }], nearbyAreas: ['Yerraguntla', 'Jammalamadugu', 'Mydukur', 'Badvel', 'Rajampeta'] },

  { slug: 'packers-movers-tenali', name: 'Tenali', state: 'AP', district: 'Guntur', lat: 16.2430, lng: 80.6399, population: '0.17M', description: 'Tamarind city in Guntur district', metaTitle: 'Packers and Movers in Tenali | PackersHub', metaDescription: 'PackersHub packers and movers in Tenali. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Tenali', intro: 'PackersHub offers reliable and affordable moving services in Tenali, the cultural hub of Guntur district.', highlights: ['Home Shifting', 'Office Relocation', 'Vehicle Transport', 'Packing'], faqs: [{ q: 'What is the cost in Tenali?', a: 'Local moves ₹2,500–₹10,000. Vijayawada to Tenali (~40 km) starts at ₹4,000.' }, { q: 'Do you serve nearby towns?', a: 'Yes, we cover Repalle, Bapatla, Nidubrolu, and all Guntur district towns.' }], nearbyAreas: ['Repalle', 'Bapatla', 'Nidubrolu', 'Ponnur', 'Mangalagiri'] },

  // ════════════════════════════════════════
  // TELANGANA — 14 Cities
  // ════════════════════════════════════════

  {
    slug: 'packers-movers-hyderabad',
    name: 'Hyderabad',
    state: 'TS',
    district: 'Hyderabad / Ranga Reddy',
    lat: 17.3850,
    lng: 78.4867,
    population: '10M+',
    description: 'City of Pearls — Telangana capital, IT hub',
    metaTitle: 'Best Packers and Movers in Hyderabad | PackersHub – Top Rated, Affordable',
    metaDescription: 'PackersHub is Hyderabad\'s most trusted packers and movers. Home shifting, office relocation, bike/car transport, storage. Serving all areas. Call +917731074075.',
    h1: 'Packers and Movers in Hyderabad',
    intro: 'PackersHub is Hyderabad\'s premier packers and movers company, serving all areas from Hitech City to Old City. Whether you\'re relocating your IT workspace in Gachibowli, shifting your home in Banjara Hills, or transporting your luxury vehicle — our professional team ensures a flawless move every time.',
    highlights: ['IT Office Relocation', 'Home Shifting', 'Car & Bike Transport', 'Commercial Moving', 'Warehouse Storage'],
    faqs: [
      { q: 'What is the cost of packers and movers in Hyderabad?', a: 'Local shifting in Hyderabad costs ₹5,000–₹30,000 based on BHK and distance. Long-distance to Bengaluru or Chennai costs ₹18,000–₹70,000+ depending on load.' },
      { q: 'Which areas do you cover in Hyderabad?', a: 'We cover all Hyderabad areas: Hitech City, Gachibowli, Banjara Hills, Jubilee Hills, Kondapur, Madhapur, Secunderabad, Uppal, LB Nagar, Dilsukhnagar, Kompally, Miyapur, and all others.' },
      { q: 'How do I get a quote for Hyderabad shifting?', a: 'Call +917731074075 or use our website\'s Get Quote form. We offer free home surveys for large moves and instant telephonic quotes for standard shifts.' },
      { q: 'Do you provide storage in Hyderabad?', a: 'Yes, we have secure warehouse facilities near Gachibowli and Uppal with 24/7 CCTV, fire protection, and pest control.' },
    ],
    nearbyAreas: ['Hitech City', 'Gachibowli', 'Banjara Hills', 'Kondapur', 'Secunderabad', 'Uppal', 'Kompally', 'Miyapur'],
  },

  { slug: 'packers-movers-warangal', name: 'Warangal', state: 'TS', district: 'Hanumakonda', lat: 17.9689, lng: 79.5941, population: '0.81M', description: 'Heritage city and Telangana\'s second largest', metaTitle: 'Packers and Movers in Warangal | PackersHub – Trusted & Affordable', metaDescription: 'PackersHub offers reliable packers and movers in Warangal. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Warangal', intro: 'PackersHub delivers professional packing and moving services in Warangal, serving all parts of this heritage city.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Storage'], faqs: [{ q: 'What is the cost in Warangal?', a: 'Local moves ₹3,000–₹14,000. Hyderabad route (145 km) costs ₹9,000–₹30,000.' }, { q: 'Do you serve Kazipet and Hanamkonda?', a: 'Yes, all three — Warangal, Kazipet, and Hanamkonda — are in our coverage zone.' }], nearbyAreas: ['Hanamkonda', 'Kazipet', 'Narsampet', 'Jangaon', 'Bhupalpally'] },

  { slug: 'packers-movers-nizamabad', name: 'Nizamabad', state: 'TS', district: 'Nizamabad', lat: 18.6726, lng: 78.0941, population: '0.31M', description: 'Turmeric city of Telangana', metaTitle: 'Packers and Movers in Nizamabad | PackersHub', metaDescription: 'PackersHub packers and movers in Nizamabad. Safe, affordable home shifting. Call +917731074075.', h1: 'Packers and Movers in Nizamabad', intro: 'PackersHub provides trusted moving services in Nizamabad, Telangana\'s northern gateway city.', highlights: ['Home Shifting', 'Office Moving', 'Vehicle Transport', 'Insurance'], faqs: [{ q: 'What is the cost in Nizamabad?', a: 'Local moves ₹2,800–₹12,000. Hyderabad route (170 km) costs ₹9,000–₹28,000.' }, { q: 'Do you move from Nizamabad to Maharashtra?', a: 'Yes, we handle cross-state moves to Nanded, Latur, and other Maharashtra cities.' }], nearbyAreas: ['Bodhan', 'Kamareddy', 'Armoor', 'Banswada', 'Dichpally'] },

  { slug: 'packers-movers-karimnagar', name: 'Karimnagar', state: 'TS', district: 'Karimnagar', lat: 18.4386, lng: 79.1288, population: '0.26M', description: 'Smart city in Telangana', metaTitle: 'Packers and Movers in Karimnagar | PackersHub', metaDescription: 'PackersHub packers and movers in Karimnagar. Home shifting, office relocation, car transport. Call +917731074075.', h1: 'Packers and Movers in Karimnagar', intro: 'PackersHub offers professional and affordable moving services in Karimnagar, one of Telangana\'s fastest-growing smart cities.', highlights: ['Home Shifting', 'Office Relocation', 'Vehicle Transport', 'Packing'], faqs: [{ q: 'What is the cost in Karimnagar?', a: 'Local moves ₹2,800–₹12,000. Hyderabad route (160 km) costs ₹9,000–₹28,000.' }, { q: 'Do you serve Ramagundam from Karimnagar?', a: 'Yes, Karimnagar to Ramagundam (~45 km) is a same-day route.' }], nearbyAreas: ['Mancherial', 'Ramagundam', 'Jagtial', 'Peddapalli', 'Sircilla'] },

  { slug: 'packers-movers-khammam', name: 'Khammam', state: 'TS', district: 'Khammam', lat: 17.2473, lng: 80.1514, population: '0.27M', description: 'Gateway between Telangana and AP', metaTitle: 'Packers and Movers in Khammam | PackersHub', metaDescription: 'PackersHub packers and movers in Khammam. Household shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Khammam', intro: 'PackersHub delivers reliable packing and moving services in Khammam, perfectly positioned on the Telangana-AP border.', highlights: ['Home Shifting', 'Interstate Corridor', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost of shifting in Khammam?', a: 'Local moves ₹2,800–₹12,000. Hyderabad route (205 km) costs ₹10,000–₹32,000.' }, { q: 'Do you serve Bhadrachalam?', a: 'Yes, Khammam to Bhadrachalam and nearby tribal areas are covered.' }], nearbyAreas: ['Bhadrachalam', 'Kothagudem', 'Wyra', 'Manuguru', 'Yellandu'] },

  { slug: 'packers-movers-ramagundam', name: 'Ramagundam', state: 'TS', district: 'Peddapalli', lat: 18.7576, lng: 79.4751, population: '0.22M', description: 'Industrial city with major power plant', metaTitle: 'Packers and Movers in Ramagundam | PackersHub', metaDescription: 'Trusted packers and movers in Ramagundam. Home shifting, industrial moving. Call +917731074075.', h1: 'Packers and Movers in Ramagundam', intro: 'PackersHub provides professional packing and moving services in Ramagundam, serving both residential and industrial clients.', highlights: ['Home Shifting', 'Industrial Relocation', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost of shifting in Ramagundam?', a: 'Local moves ₹2,800–₹11,000. Hyderabad route costs ₹9,000–₹28,000.' }, { q: 'Do you handle industrial machinery shifts?', a: 'Yes, we have specialized equipment for heavy industrial goods.' }], nearbyAreas: ['Peddapalli', 'Godavarikhani', 'Mancherial', 'Sirpur', 'Bellampally'] },

  { slug: 'packers-movers-mahbubnagar', name: 'Mahbubnagar', state: 'TS', district: 'Wanaparthy', lat: 16.7371, lng: 77.9877, population: '0.19M', description: 'Palamuru — Telangana gateway to Karnataka', metaTitle: 'Packers and Movers in Mahbubnagar | PackersHub', metaDescription: 'PackersHub packers and movers in Mahbubnagar. Home shifting, car transport. Call +917731074075.', h1: 'Packers and Movers in Mahbubnagar', intro: 'PackersHub serves Mahbubnagar with professional packing and moving services for homes and offices.', highlights: ['Home Shifting', 'Karnataka Corridor', 'Vehicle Transport', 'Insurance'], faqs: [{ q: 'Cost of shifting in Mahbubnagar?', a: 'Local moves ₹2,500–₹11,000. Hyderabad route (100 km) costs ₹7,000–₹22,000.' }, { q: 'Do you move from Mahbubnagar to Bengaluru?', a: 'Yes, Mahbubnagar to Bengaluru (~370 km) with shared and exclusive options.' }], nearbyAreas: ['Jadcherla', 'Wanaparthy', 'Kollapur', 'Achampet', 'Nagarkurnool'] },

  { slug: 'packers-movers-nalgonda', name: 'Nalgonda', state: 'TS', district: 'Nalgonda', lat: 17.0576, lng: 79.2688, population: '0.17M', description: 'Nagarjuna Sagar district city', metaTitle: 'Packers and Movers in Nalgonda | PackersHub', metaDescription: 'PackersHub packers and movers in Nalgonda. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Nalgonda', intro: 'PackersHub provides affordable packers and movers in Nalgonda, connecting this central Telangana city.', highlights: ['Home Shifting', 'Office Moving', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost in Nalgonda?', a: 'Local moves ₹2,500–₹11,000. Hyderabad route (95 km) costs ₹7,000–₹22,000.' }, { q: 'Do you serve Suryapet from Nalgonda?', a: 'Yes, Nalgonda to Suryapet is covered under our TS network.' }], nearbyAreas: ['Suryapet', 'Miryalaguda', 'Bhongir', 'Yadagirigutta', 'Devarakonda'] },

  { slug: 'packers-movers-adilabad', name: 'Adilabad', state: 'TS', district: 'Adilabad', lat: 19.6641, lng: 78.5320, population: '0.12M', description: 'Tribal region city — northernmost Telangana', metaTitle: 'Packers and Movers in Adilabad | PackersHub', metaDescription: 'PackersHub packers and movers in Adilabad. Household shifting, car transport. Call +917731074075.', h1: 'Packers and Movers in Adilabad', intro: 'PackersHub brings professional moving services to Adilabad, the gateway to Telangana\'s tribal highland region.', highlights: ['Home Shifting', 'Office Relocation', 'Vehicle Transport', 'Storage'], faqs: [{ q: 'Cost of shifting in Adilabad?', a: 'Local moves ₹2,500–₹11,000. Hyderabad route (300 km) costs ₹10,000–₹32,000.' }, { q: 'Do you serve Mancherial from Adilabad?', a: 'Yes, Mancherial is part of our Adilabad-Karimnagar belt coverage.' }], nearbyAreas: ['Mancherial', 'Luxettipet', 'Nirmal', 'Bhainsa', 'Kaghaznagar'] },

  { slug: 'packers-movers-suryapet', name: 'Suryapet', state: 'TS', district: 'Suryapet', lat: 17.1433, lng: 79.6224, population: '0.11M', description: 'New Suryapet district headquarters', metaTitle: 'Packers and Movers in Suryapet | PackersHub', metaDescription: 'PackersHub packers and movers in Suryapet. Home shifting, affordable rates. Call +917731074075.', h1: 'Packers and Movers in Suryapet', intro: 'PackersHub offers reliable and affordable packing and moving services in Suryapet, a growing Telangana district town.', highlights: ['Home Shifting', 'Office Relocation', 'Vehicle Transport', 'Packing'], faqs: [{ q: 'Cost in Suryapet?', a: 'Local moves ₹2,500–₹10,000. Hyderabad route (140 km) costs ₹8,000–₹24,000.' }, { q: 'Do you cover Miryalaguda?', a: 'Yes, Suryapet and Miryalaguda are both in our TS district coverage.' }], nearbyAreas: ['Miryalaguda', 'Kodad', 'Huzurnagar', 'Mellacheruvu', 'Thungathurthi'] },

  { slug: 'packers-movers-siddipet', name: 'Siddipet', state: 'TS', district: 'Siddipet', lat: 18.1018, lng: 78.8520, population: '0.12M', description: 'Rising district town near Hyderabad', metaTitle: 'Packers and Movers in Siddipet | PackersHub', metaDescription: 'PackersHub packers and movers in Siddipet. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Siddipet', intro: 'PackersHub provides professional moving services in Siddipet, one of Telangana\'s fastest-growing district towns.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Siddipet?', a: 'Local moves ₹2,500–₹10,000. Hyderabad route (100 km) costs ₹7,000–₹22,000.' }, { q: 'How quickly can you shift in Siddipet?', a: 'We can arrange same-day or next-day shifting with advance booking.' }], nearbyAreas: ['Gajwel', 'Dubbaka', 'Medak', 'Mulugu', 'Toopran'] },

  { slug: 'packers-movers-miryalaguda', name: 'Miryalaguda', state: 'TS', district: 'Nalgonda', lat: 16.8726, lng: 79.5647, population: '0.1M', description: 'Sugar city of Telangana', metaTitle: 'Packers and Movers in Miryalaguda | PackersHub', metaDescription: 'PackersHub packers and movers in Miryalaguda. Home shifting, affordable. Call +917731074075.', h1: 'Packers and Movers in Miryalaguda', intro: 'PackersHub delivers cost-effective packing and moving services in Miryalaguda, Telangana\'s sugar belt city.', highlights: ['Home Shifting', 'Office Moving', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost in Miryalaguda?', a: 'Local moves ₹2,500–₹10,000. Hyderabad route costs ₹8,000–₹25,000.' }, { q: 'Do you serve Nalgonda from Miryalaguda?', a: 'Yes, we cover the entire Nalgonda-Miryalaguda-Suryapet belt.' }], nearbyAreas: ['Nalgonda', 'Huzurnagar', 'Kodad', 'Nakrekal', 'Choutuppal'] },

  { slug: 'packers-movers-mancherial', name: 'Mancherial', state: 'TS', district: 'Mancherial', lat: 18.8720, lng: 79.4606, population: '0.11M', description: 'Northern Telangana industrial town', metaTitle: 'Packers and Movers in Mancherial | PackersHub', metaDescription: 'Trusted packers and movers in Mancherial by PackersHub. Household shifting, car transport. Call +917731074075.', h1: 'Packers and Movers in Mancherial', intro: 'PackersHub provides professional packing and moving services in Mancherial, connecting north Telangana to major cities.', highlights: ['Home Shifting', 'Industrial Moving', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost in Mancherial?', a: 'Local moves ₹2,500–₹10,000. Hyderabad route costs ₹9,000–₹28,000.' }, { q: 'Do you serve Bellampally?', a: 'Yes, Bellampally and nearby coal belt towns are in our Mancherial coverage.' }], nearbyAreas: ['Bellampally', 'Chennur', 'Luxettipet', 'Mandamarri', 'Naspur'] },

  { slug: 'packers-movers-jagtial', name: 'Jagtial', state: 'TS', district: 'Jagtial', lat: 18.7942, lng: 78.9155, population: '0.09M', description: 'New Jagtial district headquarters', metaTitle: 'Packers and Movers in Jagtial | PackersHub', metaDescription: 'PackersHub packers and movers in Jagtial. Home shifting, affordable rates. Call +917731074075.', h1: 'Packers and Movers in Jagtial', intro: 'PackersHub offers cost-effective moving services in Jagtial, a rapidly developing district town in north Telangana.', highlights: ['Home Shifting', 'Office Relocation', 'Vehicle Transport', 'Insurance'], faqs: [{ q: 'Cost in Jagtial?', a: 'Local moves ₹2,500–₹9,500. Karimnagar route (~40 km) costs ₹5,000–₹14,000.' }, { q: 'Do you cover Dharmapuri from Jagtial?', a: 'Yes, Dharmapuri and all Jagtial district towns are covered.' }], nearbyAreas: ['Karimnagar', 'Metpalle', 'Koratla', 'Dharmapuri', 'Mallapur'] },

  // ════════════════════════════════════════
  // TAMIL NADU — 16 Cities
  // ════════════════════════════════════════

  {
    slug: 'packers-movers-chennai',
    name: 'Chennai',
    state: 'TN',
    district: 'Chennai',
    lat: 13.0827,
    lng: 80.2707,
    population: '11M+',
    description: 'Detroit of Asia — Tamil Nadu capital',
    metaTitle: 'Best Packers and Movers in Chennai | PackersHub – Top Rated, Affordable Moving',
    metaDescription: 'PackersHub offers expert packers and movers in Chennai. Home shifting, office relocation, car transport across all Chennai zones. Call +917731074075.',
    h1: 'Packers and Movers in Chennai',
    intro: 'PackersHub is Chennai\'s trusted name for professional packers and movers services. From T. Nagar apartments to OMR tech parks, Anna Nagar bungalows to Sholinganallur IT offices — we cover every corner of Greater Chennai with precision and care.',
    highlights: ['OMR & IT Corridor Specialists', 'Home Shifting', 'Car & Bike Transport', 'Office Relocation', 'Climate Storage'],
    faqs: [
      { q: 'What is the cost of packers and movers in Chennai?', a: 'Local shifting in Chennai costs ₹5,000–₹30,000 depending on BHK and distance. Long-distance to Bengaluru or Hyderabad costs ₹15,000–₹65,000+.' },
      { q: 'Which areas do you cover in Chennai?', a: 'We cover all Chennai areas: T. Nagar, Anna Nagar, Adyar, OMR, ECR, Porur, Tambaram, Chrompet, Sholinganallur, Velachery, Perambur, Tondiarpet, and all others.' },
      { q: 'How quickly can you shift in Chennai?', a: 'Emergency shifts can be arranged within 24 hours in Chennai. Standard bookings require 48 hours of advance notice.' },
      { q: 'Do you provide warehouse storage in Chennai?', a: 'Yes, we have secure storage facilities near OMR and Ambattur with CCTV surveillance and pest control.' },
    ],
    nearbyAreas: ['T. Nagar', 'Anna Nagar', 'Adyar', 'OMR', 'Porur', 'Tambaram', 'Sholinganallur', 'Velachery'],
  },

  {
    slug: 'packers-movers-coimbatore',
    name: 'Coimbatore',
    state: 'TN',
    district: 'Coimbatore',
    lat: 11.0168,
    lng: 76.9558,
    population: '1.6M',
    description: 'Manchester of South India — textile & industrial hub',
    metaTitle: 'Best Packers and Movers in Coimbatore | PackersHub – Trusted Home & Office Shifting',
    metaDescription: 'PackersHub packers and movers in Coimbatore. Household shifting, office relocation, industrial moving. Professional service. Call +917731074075.',
    h1: 'Packers and Movers in Coimbatore',
    intro: 'PackersHub provides premium packers and movers services in Coimbatore, serving all residential and commercial areas. From Gandhipuram to Saravanampatti, RS Puram to Peelamedu — our professional team ensures your belongings are shifted safely and efficiently.',
    highlights: ['Home Shifting', 'Industrial Moving', 'IT Park Relocation', 'Car Transport'],
    faqs: [
      { q: 'What is the cost of shifting in Coimbatore?', a: 'Local shifting costs ₹4,500–₹22,000. Long-distance to Chennai or Bengaluru costs ₹14,000–₹55,000.' },
      { q: 'Do you handle textile machinery in Coimbatore?', a: 'Yes, we have specialized equipment and trained crew for industrial textile machinery relocation.' },
      { q: 'Do you shift from Coimbatore to Bengaluru?', a: 'Yes, Coimbatore to Bengaluru (~360 km) is a popular route. Transit time is 1 day.' },
      { q: 'Which areas do you cover in Coimbatore?', a: 'RS Puram, Gandhipuram, Peelamedu, Saravanampatti, Singanallur, Podanur, Mettupalayam Road, and all areas.' }
    ],
    nearbyAreas: ['Gandhipuram', 'RS Puram', 'Peelamedu', 'Saravanampatti', 'Singanallur', 'Mettupalayam'],
  },

  { slug: 'packers-movers-madurai', name: 'Madurai', state: 'TN', district: 'Madurai', lat: 9.9252, lng: 78.1198, population: '1.5M', description: 'Temple city — Athens of the East', metaTitle: 'Packers and Movers in Madurai | PackersHub – Trusted Shifting Service', metaDescription: 'PackersHub packers and movers in Madurai. Home shifting, office relocation, vehicle transport. Call +917731074075.', h1: 'Packers and Movers in Madurai', intro: 'PackersHub offers professional packing and moving services in Madurai, TN\'s cultural capital. From Meenakshi Amman temple areas to Anna Nagar — we cover all.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Storage'], faqs: [{ q: 'Cost in Madurai?', a: 'Local moves ₹4,000–₹20,000. Chennai route (~460 km) costs ₹16,000–₹55,000.' }, { q: 'Do you cover Thiruparankundram?', a: 'Yes, all Madurai city areas and suburbs including Thiruparankundram, Avaniyapuram, and Vilangudi.' }], nearbyAreas: ['Anna Nagar', 'KK Nagar', 'Avaniyapuram', 'Thiruparankundram', 'Vilangudi', 'Sholavandan'] },

  { slug: 'packers-movers-trichy', name: 'Trichy', state: 'TN', district: 'Tiruchirappalli', lat: 10.7905, lng: 78.7047, population: '1M', description: 'Central TN hub — Rock Fort city', metaTitle: 'Packers and Movers in Trichy | PackersHub', metaDescription: 'PackersHub packers and movers in Trichy. Home shifting, car transport, affordable rates. Call +917731074075.', h1: 'Packers and Movers in Trichy', intro: 'PackersHub delivers professional packing and moving services in Trichy (Tiruchirappalli), the central gateway of Tamil Nadu.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Trichy?', a: 'Local moves ₹4,000–₹18,000. Chennai route (~320 km) costs ₹12,000–₹42,000.' }, { q: 'Do you serve Srirangam?', a: 'Yes, Srirangam, Thillai Nagar, and all Trichy areas are covered.' }], nearbyAreas: ['Srirangam', 'Thillai Nagar', 'Woraiyur', 'Ariyamangalam', 'Musiri', 'Manapparai'] },

  { slug: 'packers-movers-salem', name: 'Salem', state: 'TN', district: 'Salem', lat: 11.6643, lng: 78.1460, population: '0.92M', description: 'Steel city of Tamil Nadu', metaTitle: 'Packers and Movers in Salem | PackersHub', metaDescription: 'PackersHub packers and movers in Salem. Home shifting, office relocation, industrial moving. Call +917731074075.', h1: 'Packers and Movers in Salem', intro: 'PackersHub provides reliable packers and movers in Salem, TN\'s steel city with a rapidly growing industrial base.', highlights: ['Home Shifting', 'Industrial Moving', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost in Salem?', a: 'Local moves ₹3,500–₹16,000. Chennai route (~340 km) costs ₹12,000–₹40,000.' }, { q: 'Do you handle steel factory shifts in Salem?', a: 'Yes, we have specialized crews for industrial and factory machinery relocation.' }], nearbyAreas: ['Fairlands', 'Suramangalam', 'Omalur', 'Mettur', 'Attur', 'Yercaud Road'] },

  { slug: 'packers-movers-tirunelveli', name: 'Tirunelveli', state: 'TN', district: 'Tirunelveli', lat: 8.7139, lng: 77.7567, population: '0.47M', description: 'Halwa city in southern TN', metaTitle: 'Packers and Movers in Tirunelveli | PackersHub', metaDescription: 'PackersHub packers and movers in Tirunelveli. Home shifting, office relocation, car transport. Call +917731074075.', h1: 'Packers and Movers in Tirunelveli', intro: 'PackersHub delivers trusted packing and moving services in Tirunelveli, the gateway to southernmost Tamil Nadu.', highlights: ['Home Shifting', 'Office Moving', 'Vehicle Transport', 'Insurance'], faqs: [{ q: 'Cost in Tirunelveli?', a: 'Local moves ₹3,500–₹15,000. Chennai route costs ₹16,000–₹50,000.' }, { q: 'Do you serve Thoothukudi from Tirunelveli?', a: 'Yes, Tirunelveli to Thoothukudi (~30 km) is a same-day service.' }], nearbyAreas: ['Palayamkottai', 'Thoothukudi Road', 'Nagercoil', 'Ambasamudram', 'Cheranmahadevi'] },

  { slug: 'packers-movers-vellore', name: 'Vellore', state: 'TN', district: 'Vellore', lat: 12.9165, lng: 79.1325, population: '0.48M', description: 'Fort city near Chennai-Bengaluru highway', metaTitle: 'Packers and Movers in Vellore | PackersHub', metaDescription: 'PackersHub packers and movers in Vellore. Household shifting, car transport. Call +917731074075.', h1: 'Packers and Movers in Vellore', intro: 'PackersHub provides professional moving services in Vellore, ideally placed on the Chennai-Bengaluru corridor.', highlights: ['Home Shifting', 'Corridor Route', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost in Vellore?', a: 'Local moves ₹3,500–₹14,000. Chennai route (~135 km) costs ₹8,000–₹26,000.' }, { q: 'Do you serve CMC hospital area?', a: 'Yes, all Vellore areas including CMC and Katpadi are covered.' }], nearbyAreas: ['Katpadi', 'Gudiyatham', 'Ranipet', 'Ambur', 'Arcot', 'Arani'] },

  { slug: 'packers-movers-erode', name: 'Erode', state: 'TN', district: 'Erode', lat: 11.3410, lng: 77.7172, population: '0.5M', description: 'Textile capital of South India', metaTitle: 'Packers and Movers in Erode | PackersHub', metaDescription: 'PackersHub packers and movers in Erode. Home shifting, textile industry moving. Call +917731074075.', h1: 'Packers and Movers in Erode', intro: 'PackersHub delivers reliable packing and moving services in Erode, TN\'s textile and fabric trading capital.', highlights: ['Home Shifting', 'Textile Industry', 'Car Transport', 'Storage'], faqs: [{ q: 'Cost in Erode?', a: 'Local moves ₹3,500–₹15,000. Coimbatore route (~60 km) costs ₹5,000–₹16,000.' }, { q: 'Do you handle fabric/textile warehouse shifting?', a: 'Yes, our team has experience moving textile rolls, looms, and warehouse inventory.' }], nearbyAreas: ['Bhavani', 'Perundurai', 'Gobichettipalayam', 'Sathyamangalam', 'Anthiyur'] },

  { slug: 'packers-movers-tiruppur', name: 'Tiruppur', state: 'TN', district: 'Tiruppur', lat: 11.1085, lng: 77.3411, population: '0.96M', description: 'Knitwear capital of the world', metaTitle: 'Packers and Movers in Tiruppur | PackersHub', metaDescription: 'PackersHub packers and movers in Tiruppur. Home shifting, garment industry relocation. Call +917731074075.', h1: 'Packers and Movers in Tiruppur', intro: 'PackersHub provides expert packing and moving services in Tiruppur, the global knitwear export hub.', highlights: ['Home Shifting', 'Garment Factory Relocation', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Tiruppur?', a: 'Local moves ₹3,500–₹15,000. Coimbatore route (~50 km) costs ₹5,000–₹15,000.' }, { q: 'Can you handle garment machinery?', a: 'Yes, our industrial crew handles knitting machines, cutting machines, and factory equipment.' }], nearbyAreas: ['Avinashi', 'Kangeyam', 'Palladam', 'Dharapuram', 'Udumalaipettai'] },

  { slug: 'packers-movers-hosur', name: 'Hosur', state: 'TN', district: 'Krishnagiri', lat: 12.7396, lng: 77.8253, population: '0.3M', description: 'IT & EV hub near Bengaluru border', metaTitle: 'Packers and Movers in Hosur | PackersHub', metaDescription: 'PackersHub packers and movers in Hosur. Home shifting, IT park relocation. Near Bengaluru. Call +917731074075.', h1: 'Packers and Movers in Hosur', intro: 'PackersHub offers professional moving services in Hosur, the rapidly growing IT and EV city at the TN-Karnataka border.', highlights: ['Home Shifting', 'IT Park Relocation', 'Car Transport', 'Bengaluru Corridor'], faqs: [{ q: 'Cost in Hosur?', a: 'Local moves ₹3,000–₹13,000. Bengaluru route (~35 km) costs ₹5,000–₹16,000.' }, { q: 'Do you serve Ola Electric campus area?', a: 'Yes, all Hosur industrial areas including EV campuses are in our coverage.' }], nearbyAreas: ['Krishnagiri', 'Attibele', 'Anekal', 'Bagalur', 'Denkanikottai'] },

  { slug: 'packers-movers-thanjavur', name: 'Thanjavur', state: 'TN', district: 'Thanjavur', lat: 10.7870, lng: 79.1378, population: '0.22M', description: 'Temple city — rice bowl of Tamil Nadu', metaTitle: 'Packers and Movers in Thanjavur | PackersHub', metaDescription: 'PackersHub packers and movers in Thanjavur. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Thanjavur', intro: 'PackersHub delivers reliable packing and moving in Thanjavur, home of the world-famous Brihadeeswarar temple.', highlights: ['Home Shifting', 'Office Moving', 'Car Transport', 'Antique Packing'], faqs: [{ q: 'Cost in Thanjavur?', a: 'Local moves ₹3,000–₹13,000. Trichy route (~55 km) costs ₹5,000–₹15,000.' }, { q: 'Can you pack antique bronze statues safely?', a: 'Yes, our specialty team handles antiques with museum-grade packing.' }], nearbyAreas: ['Kumbakonam', 'Papanasam', 'Pattukottai', 'Needamangalam', 'Thiruvaiyaru'] },

  { slug: 'packers-movers-dindigul', name: 'Dindigul', state: 'TN', district: 'Dindigul', lat: 10.3624, lng: 77.9695, population: '0.21M', description: 'Lock city of India', metaTitle: 'Packers and Movers in Dindigul | PackersHub', metaDescription: 'PackersHub packers and movers in Dindigul. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Dindigul', intro: 'PackersHub provides affordable and reliable packing and moving services in Dindigul, TN\'s lock city.', highlights: ['Home Shifting', 'Office Moving', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost in Dindigul?', a: 'Local moves ₹3,000–₹12,000. Madurai route (~65 km) costs ₹5,000–₹15,000.' }, { q: 'Do you serve Kodaikanal from Dindigul?', a: 'Yes, hill station moves to Kodaikanal are available with special hill route expertise.' }], nearbyAreas: ['Palani', 'Kodaikanal Road', 'Natham', 'Oddanchatram', 'Vedasandur'] },

  { slug: 'packers-movers-nagercoil', name: 'Nagercoil', state: 'TN', district: 'Kanyakumari', lat: 8.1833, lng: 77.4119, population: '0.27M', description: 'Southernmost major city of India', metaTitle: 'Packers and Movers in Nagercoil | PackersHub', metaDescription: 'PackersHub packers and movers in Nagercoil. Home shifting, Kanyakumari area service. Call +917731074075.', h1: 'Packers and Movers in Nagercoil', intro: 'PackersHub serves Nagercoil, India\'s southernmost district hub, with professional packing and moving services.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Kerala Corridor'], faqs: [{ q: 'Cost in Nagercoil?', a: 'Local moves ₹3,000–₹12,000. Thiruvananthapuram route (~70 km) costs ₹6,000–₹18,000.' }, { q: 'Do you serve Kanyakumari?', a: 'Yes, Kanyakumari and all Nagercoil district areas are covered.' }], nearbyAreas: ['Kanyakumari', 'Marthandam', 'Thuckalay', 'Colachel', 'Padmanabhapuram'] },

  { slug: 'packers-movers-kumbakonam', name: 'Kumbakonam', state: 'TN', district: 'Thanjavur', lat: 10.9601, lng: 79.3845, population: '0.14M', description: 'Temple town with 18 famous shrines', metaTitle: 'Packers and Movers in Kumbakonam | PackersHub', metaDescription: 'PackersHub packers and movers in Kumbakonam. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Kumbakonam', intro: 'PackersHub offers trusted packing and moving services in Kumbakonam, the temple town known for its sacred water tanks and silk weaving.', highlights: ['Home Shifting', 'Office Moving', 'Car Transport', 'Antique Care'], faqs: [{ q: 'Cost in Kumbakonam?', a: 'Local moves ₹2,800–₹11,000. Trichy route (~95 km) costs ₹6,000–₹18,000.' }, { q: 'Can you shift silk sarees and antiques safely?', a: 'Yes, we use specialized packing for delicate textiles and antique items.' }], nearbyAreas: ['Papanasam', 'Mayiladuthurai', 'Sirkazhi', 'Ayyampettai', 'Swamimalai'] },

  { slug: 'packers-movers-karur', name: 'Karur', state: 'TN', district: 'Karur', lat: 10.9601, lng: 78.0766, population: '0.14M', description: 'Home textile export hub', metaTitle: 'Packers and Movers in Karur | PackersHub', metaDescription: 'PackersHub packers and movers in Karur. Home shifting, textile industry relocation. Call +917731074075.', h1: 'Packers and Movers in Karur', intro: 'PackersHub provides professional packing and moving in Karur, world\'s home textile export capital.', highlights: ['Home Shifting', 'Textile Industry', 'Car Transport', 'Storage'], faqs: [{ q: 'Cost in Karur?', a: 'Local moves ₹3,000–₹12,000. Trichy route (~78 km) costs ₹6,000–₹18,000.' }, { q: 'Do you handle home textile factory moves?', a: 'Yes, our industrial team handles loom and factory relocation professionally.' }], nearbyAreas: ['Kulithalai', 'Aravakurichi', 'Paramathi', 'Thanthoni', 'Krishnarayapuram'] },

  { slug: 'packers-movers-thoothukudi', name: 'Thoothukudi', state: 'TN', district: 'Thoothukudi', lat: 8.7642, lng: 78.1348, population: '0.23M', description: 'Pearl city — major southern port', metaTitle: 'Packers and Movers in Thoothukudi | PackersHub', metaDescription: 'PackersHub packers and movers in Thoothukudi (Tuticorin). Home shifting, port cargo. Call +917731074075.', h1: 'Packers and Movers in Thoothukudi', intro: 'PackersHub offers professional packing and moving in Thoothukudi (Tuticorin), TN\'s major southern port city.', highlights: ['Home Shifting', 'Port Cargo Assistance', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Thoothukudi?', a: 'Local moves ₹3,000–₹13,000. Chennai route costs ₹16,000–₹52,000.' }, { q: 'Do you handle port cargo from Thoothukudi?', a: 'Yes, we assist with port clearance documentation and inland transportation.' }], nearbyAreas: ['Tirunelveli', 'Kovilpatti', 'Ettayapuram', 'Sattankulam', 'Tiruchendur'] },

  // ════════════════════════════════════════
  // KARNATAKA — 15 Cities
  // ════════════════════════════════════════

  {
    slug: 'packers-movers-bengaluru',
    name: 'Bengaluru',
    state: 'KA',
    district: 'Bengaluru Urban',
    lat: 12.9716,
    lng: 77.5946,
    population: '13M+',
    description: 'Silicon Valley of India — India\'s IT capital',
    metaTitle: 'Best Packers and Movers in Bengaluru | PackersHub – Top Rated, Affordable',
    metaDescription: 'PackersHub is Bengaluru\'s most trusted packers and movers. Home shifting, office relocation, car transport across all Bengaluru zones. Call +917731074075.',
    h1: 'Packers and Movers in Bengaluru',
    intro: 'PackersHub provides Bengaluru\'s finest packers and movers services, covering all areas from Whitefield and Electronic City to Koramangala, Indiranagar, and Hebbal. Our professional team specializes in IT office shifting, apartment moves, and executive relocations across Garden City.',
    highlights: ['IT Office Specialists', 'Home Shifting', 'Car & Bike Transport', 'Storage Solutions', 'Same-Day Quotes'],
    faqs: [
      { q: 'What is the cost of packers and movers in Bengaluru?', a: 'Local Bengaluru shifting costs ₹6,000–₹35,000. Interstate to Hyderabad or Chennai costs ₹18,000–₹75,000+ depending on volume.' },
      { q: 'Which areas do you cover in Bengaluru?', a: 'Whitefield, Koramangala, Indiranagar, Electronic City, HSR Layout, BTM Layout, Jayanagar, JP Nagar, Hebbal, Yelahanka, Sarjapur Road, Marathahalli, and all areas.' },
      { q: 'How do I get a free quote in Bengaluru?', a: 'Call +917731074075 or fill the online form. We provide same-day telephonic quotes and free home surveys for large moves.' },
      { q: 'Do you offer storage in Bengaluru?', a: 'Yes, secure warehouse facilities near Whitefield, Electronic City, and Peenya for short-term and long-term storage.' },
    ],
    nearbyAreas: ['Whitefield', 'Koramangala', 'Indiranagar', 'Electronic City', 'HSR Layout', 'Sarjapur Road', 'Hebbal'],
  },

  { slug: 'packers-movers-mysuru', name: 'Mysuru', state: 'KA', district: 'Mysuru', lat: 12.2958, lng: 76.6394, population: '0.9M', description: 'City of Palaces — cultural heritage capital', metaTitle: 'Packers and Movers in Mysuru | PackersHub', metaDescription: 'PackersHub packers and movers in Mysuru. Home shifting, office relocation, car transport. Call +917731074075.', h1: 'Packers and Movers in Mysuru', intro: 'PackersHub provides professional packing and moving services in Mysuru, Karnataka\'s cultural jewel and heritage city.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Antique Care'], faqs: [{ q: 'Cost in Mysuru?', a: 'Local moves ₹4,000–₹18,000. Bengaluru route (~145 km) costs ₹10,000–₹32,000.' }, { q: 'Can you shift palace-style antiques?', a: 'Yes, our specialty crew handles heritage furniture, artifacts, and antiques with care.' }], nearbyAreas: ['Kuvempunagar', 'Jayalakshmipuram', 'Vijayanagar', 'Chamundi Hills', 'Nanjangud', 'Hunsur'] },

  { slug: 'packers-movers-hubballi', name: 'Hubballi', state: 'KA', district: 'Dharwad', lat: 15.3647, lng: 75.1240, population: '0.94M', description: 'Commercial twin-city of north Karnataka', metaTitle: 'Packers and Movers in Hubballi | PackersHub', metaDescription: 'PackersHub packers and movers in Hubballi. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Hubballi', intro: 'PackersHub delivers professional moving services in Hubballi, north Karnataka\'s commercial twin city with Dharwad.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Interstate Moving'], faqs: [{ q: 'Cost in Hubballi?', a: 'Local moves ₹3,500–₹16,000. Bengaluru route (~415 km) costs ₹14,000–₹45,000.' }, { q: 'Do you cover Dharwad from Hubballi?', a: 'Yes, Hubballi-Dharwad is covered as one zone by our team.' }], nearbyAreas: ['Dharwad', 'Gadag', 'Haveri', 'Kundgol', 'Savanur', 'Navalgund'] },

  { slug: 'packers-movers-mangaluru', name: 'Mangaluru', state: 'KA', district: 'Dakshina Kannada', lat: 12.9141, lng: 74.8560, population: '0.49M', description: 'Port city on Arabian Sea — cashew capital', metaTitle: 'Packers and Movers in Mangaluru | PackersHub', metaDescription: 'PackersHub packers and movers in Mangaluru. Home shifting, office relocation, vehicle transport. Call +917731074075.', h1: 'Packers and Movers in Mangaluru', intro: 'PackersHub delivers trusted packing and moving in Mangaluru, coastal Karnataka\'s commercial and port hub.', highlights: ['Home Shifting', 'Port Area Relocation', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Mangaluru?', a: 'Local moves ₹3,500–₹16,000. Bengaluru route (~350 km) costs ₹13,000–₹42,000.' }, { q: 'Do you handle coastal goods packing?', a: 'Yes, all goods are packed weatherproof for coastal climate conditions.' }], nearbyAreas: ['Udupi', 'Ullal', 'Surathkal', 'Mulki', 'Bantwal', 'Puttur'] },

  { slug: 'packers-movers-belagavi', name: 'Belagavi', state: 'KA', district: 'Belagavi', lat: 15.8497, lng: 74.4977, population: '0.49M', description: 'Gateway to Maharashtra — border city', metaTitle: 'Packers and Movers in Belagavi | PackersHub', metaDescription: 'PackersHub packers and movers in Belagavi (Belgaum). Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Belagavi', intro: 'PackersHub offers professional moving services in Belagavi (Belgaum), Karnataka\'s gateway to Maharashtra.', highlights: ['Home Shifting', 'Maharashtra Corridor', 'Car Transport', 'Cross-State Moving'], faqs: [{ q: 'Cost in Belagavi?', a: 'Local moves ₹3,500–₹15,000. Bengaluru route (~500 km) costs ₹16,000–₹50,000.' }, { q: 'Do you move between Karnataka and Maharashtra?', a: 'Yes, cross-state moves to Kolhapur, Sangli, Pune from Belagavi are available.' }], nearbyAreas: ['Hubli Road', 'Khanapur', 'Gokak', 'Chikkodi', 'Raybag', 'Athni'] },

  { slug: 'packers-movers-davanagere', name: 'Davanagere', state: 'KA', district: 'Davanagere', lat: 14.4644, lng: 75.9218, population: '0.44M', description: 'Textile and cotton city of Karnataka', metaTitle: 'Packers and Movers in Davanagere | PackersHub', metaDescription: 'PackersHub packers and movers in Davanagere. Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Davanagere', intro: 'PackersHub provides reliable packing and moving in Davanagere, Karnataka\'s central textile and education city.', highlights: ['Home Shifting', 'Textile Industry', 'Car Transport', 'Storage'], faqs: [{ q: 'Cost in Davanagere?', a: 'Local moves ₹3,000–₹14,000. Bengaluru route (~265 km) costs ₹11,000–₹36,000.' }, { q: 'Do you cover Harihar from Davanagere?', a: 'Yes, Harihar and nearby Shivamogga district towns are in our coverage.' }], nearbyAreas: ['Harihar', 'Bhadravathi', 'Channagiri', 'Honnali', 'Jagalur'] },

  { slug: 'packers-movers-ballari', name: 'Ballari', state: 'KA', district: 'Ballari', lat: 15.1394, lng: 76.9214, population: '0.41M', description: 'Iron ore mining hub of Karnataka', metaTitle: 'Packers and Movers in Ballari | PackersHub', metaDescription: 'PackersHub packers and movers in Ballari (Bellary). Home shifting, mining area relocation. Call +917731074075.', h1: 'Packers and Movers in Ballari', intro: 'PackersHub delivers trusted moving services in Ballari (Bellary), Karnataka\'s iron ore mining capital.', highlights: ['Home Shifting', 'Mining Area Relocation', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Ballari?', a: 'Local moves ₹3,000–₹13,000. Bengaluru route (~300 km) costs ₹11,000–₹35,000.' }, { q: 'Can you handle mining equipment?', a: 'Yes, we have specialized vehicles and crew for heavy mining equipment.' }], nearbyAreas: ['Hospet', 'Sandur', 'Siruguppa', 'Hadagali', 'Hagari'] },

  { slug: 'packers-movers-vijayapura', name: 'Vijayapura', state: 'KA', district: 'Vijayapura', lat: 16.8302, lng: 75.7100, population: '0.32M', description: 'Bijapur — historic Deccan city', metaTitle: 'Packers and Movers in Vijayapura | PackersHub', metaDescription: 'PackersHub packers and movers in Vijayapura (Bijapur). Home shifting. Call +917731074075.', h1: 'Packers and Movers in Vijayapura', intro: 'PackersHub provides professional moving services in Vijayapura (Bijapur), the historic Deccan city with Gol Gumbaz.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Storage'], faqs: [{ q: 'Cost in Vijayapura?', a: 'Local moves ₹3,000–₹13,000. Bengaluru route (~530 km) costs ₹16,000–₹50,000.' }, { q: 'Do you serve Solapur from Vijayapura?', a: 'Yes, Vijayapura to Solapur (~110 km) cross-state service available.' }], nearbyAreas: ['Solapur Road', 'Indi', 'Basavana Bagewadi', 'Muddebihal', 'Sindagi'] },

  { slug: 'packers-movers-shivamogga', name: 'Shivamogga', state: 'KA', district: 'Shivamogga', lat: 13.9299, lng: 75.5681, population: '0.32M', description: 'Gateway to Malnad — sugarcane city', metaTitle: 'Packers and Movers in Shivamogga | PackersHub', metaDescription: 'PackersHub packers and movers in Shivamogga (Shimoga). Home shifting. Call +917731074075.', h1: 'Packers and Movers in Shivamogga', intro: 'PackersHub provides professional moving in Shivamogga (Shimoga), the gateway to Karnataka\'s lush Malnad region.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Shivamogga?', a: 'Local moves ₹3,000–₹13,000. Bengaluru route (~280 km) costs ₹11,000–₹36,000.' }, { q: 'Do you serve Bhadravathi?', a: 'Yes, Bhadravathi and nearby Shivamogga district towns are covered.' }], nearbyAreas: ['Bhadravathi', 'Sagar', 'Soraba', 'Tirthahalli', 'Hosanagara'] },

  { slug: 'packers-movers-tumakuru', name: 'Tumakuru', state: 'KA', district: 'Tumakuru', lat: 13.3379, lng: 77.1173, population: '0.31M', description: 'Coconut city near Bengaluru', metaTitle: 'Packers and Movers in Tumakuru | PackersHub', metaDescription: 'PackersHub packers and movers in Tumakuru (Tumkur). Home shifting near Bengaluru. Call +917731074075.', h1: 'Packers and Movers in Tumakuru', intro: 'PackersHub offers reliable moving services in Tumakuru, Karnataka\'s coconut city just 70 km from Bengaluru.', highlights: ['Home Shifting', 'Bengaluru Corridor', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost in Tumakuru?', a: 'Local moves ₹3,000–₹12,000. Bengaluru route (~70 km) costs ₹5,000–₹18,000.' }, { q: 'Can you arrange same-day shifting from Tumakuru to Bengaluru?', a: 'Yes, same-day service on this short route is available.' }], nearbyAreas: ['Tiptur', 'Madhugiri', 'Sira', 'Kunigal', 'Koratagere'] },

  { slug: 'packers-movers-raichur', name: 'Raichur', state: 'KA', district: 'Raichur', lat: 16.2120, lng: 77.3439, population: '0.23M', description: 'Border city — rice bowl of north Karnataka', metaTitle: 'Packers and Movers in Raichur | PackersHub', metaDescription: 'PackersHub packers and movers in Raichur. Home shifting, cross-state moves. Call +917731074075.', h1: 'Packers and Movers in Raichur', intro: 'PackersHub provides professional moving in Raichur, Karnataka\'s northern gateway bordering Telangana.', highlights: ['Home Shifting', 'TS-KA Corridor', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Raichur?', a: 'Local moves ₹2,800–₹12,000. Hyderabad route (~215 km) costs ₹9,000–₹28,000.' }, { q: 'Do you move from Raichur to Hyderabad?', a: 'Yes, Raichur to Hyderabad is a regular route with weekly shared loads.' }], nearbyAreas: ['Manvi', 'Lingasugur', 'Sindhanur', 'Devadurga', 'Mudgal'] },

  { slug: 'packers-movers-hassan', name: 'Hassan', state: 'KA', district: 'Hassan', lat: 13.0068, lng: 76.0996, population: '0.13M', description: 'Gateway to Hoysala temples', metaTitle: 'Packers and Movers in Hassan | PackersHub', metaDescription: 'PackersHub packers and movers in Hassan. Home shifting, temple corridor. Call +917731074075.', h1: 'Packers and Movers in Hassan', intro: 'PackersHub delivers professional moving services in Hassan, the gateway to Belur and Halebidu\'s Hoysala heritage.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Antique Care'], faqs: [{ q: 'Cost in Hassan?', a: 'Local moves ₹2,800–₹11,000. Bengaluru route (~185 km) costs ₹9,000–₹28,000.' }, { q: 'Do you serve Belur and Halebidu?', a: 'Yes, all Hassan district towns including Belur and Halebidu are covered.' }], nearbyAreas: ['Belur', 'Halebidu', 'Sakleshpur', 'Arasikere', 'Channarayapatna'] },

  { slug: 'packers-movers-udupi', name: 'Udupi', state: 'KA', district: 'Udupi', lat: 13.3409, lng: 74.7421, population: '0.16M', description: 'Temple town on Arabian Sea coast', metaTitle: 'Packers and Movers in Udupi | PackersHub', metaDescription: 'PackersHub packers and movers in Udupi. Home shifting, coastal relocation. Call +917731074075.', h1: 'Packers and Movers in Udupi', intro: 'PackersHub provides professional moving in Udupi, the coastal temple city famous for Krishna Mutt and seafood culture.', highlights: ['Home Shifting', 'Coastal Expertise', 'Car Transport', 'Storage'], faqs: [{ q: 'Cost in Udupi?', a: 'Local moves ₹3,000–₹13,000. Mangaluru route (~60 km) costs ₹5,000–₹15,000.' }, { q: 'Do you handle coastal weatherproofing?', a: 'Yes, all packing is done with moisture-resistant materials suitable for coastal climate.' }], nearbyAreas: ['Manipal', 'Kundapur', 'Brahmavar', 'Karkala', 'Byndoor'] },

  { slug: 'packers-movers-bidar', name: 'Bidar', state: 'KA', district: 'Bidar', lat: 17.9136, lng: 77.5199, population: '0.21M', description: 'Bidarware craft city — north Karnataka heritage', metaTitle: 'Packers and Movers in Bidar | PackersHub', metaDescription: 'PackersHub packers and movers in Bidar. Home shifting, cross-state moves. Call +917731074075.', h1: 'Packers and Movers in Bidar', intro: 'PackersHub provides professional moving services in Bidar, Karnataka\'s northernmost city bordering Telangana and Maharashtra.', highlights: ['Home Shifting', 'Tri-State Corridor', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Bidar?', a: 'Local moves ₹2,800–₹12,000. Hyderabad route (~140 km) costs ₹8,000–₹25,000.' }, { q: 'Do you move from Bidar to Hyderabad?', a: 'Yes, Bidar to Hyderabad is a frequent route. 1-day delivery.' }], nearbyAreas: ['Basavakalyan', 'Humnabad', 'Bhalki', 'Aurad', 'Chitguppa'] },

  { slug: 'packers-movers-gadag', name: 'Gadag', state: 'KA', district: 'Gadag', lat: 15.4290, lng: 75.6278, population: '0.16M', description: 'Chalukya temple town in north Karnataka', metaTitle: 'Packers and Movers in Gadag | PackersHub', metaDescription: 'PackersHub packers and movers in Gadag-Betageri. Home shifting, affordable service. Call +917731074075.', h1: 'Packers and Movers in Gadag', intro: 'PackersHub delivers professional packing and moving in Gadag, a rapidly developing twin city in north Karnataka.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Packing'], faqs: [{ q: 'Cost in Gadag?', a: 'Local moves ₹2,800–₹11,000. Hubballi route (~60 km) costs ₹5,000–₹15,000.' }, { q: 'Do you serve Ron and Nargund?', a: 'Yes, all Gadag district towns are covered under our north Karnataka network.' }], nearbyAreas: ['Betageri', 'Ron', 'Nargund', 'Shirhatti', 'Mundargi'] },

  // ════════════════════════════════════════
  // KERALA — 10 Cities
  // ════════════════════════════════════════

  {
    slug: 'packers-movers-thiruvananthapuram',
    name: 'Thiruvananthapuram',
    state: 'KL',
    district: 'Thiruvananthapuram',
    lat: 8.5241,
    lng: 76.9366,
    population: '0.96M',
    description: 'Kerala capital — City of Lord Padmanabha',
    metaTitle: 'Best Packers and Movers in Thiruvananthapuram | PackersHub – Trusted Service',
    metaDescription: 'PackersHub packers and movers in Thiruvananthapuram (Trivandrum). Home shifting, office relocation, vehicle transport. Call +917731074075.',
    h1: 'Packers and Movers in Thiruvananthapuram',
    intro: 'PackersHub provides trusted packers and movers services in Thiruvananthapuram (Trivandrum), Kerala\'s capital city. Whether you\'re shifting near Technopark or relocating from Kovalam to Peroorkada, our professional team ensures a smooth, stress-free move.',
    highlights: ['Technopark IT Relocation', 'Home Shifting', 'Car & Bike Transport', 'Gulf Returnee Specialists'],
    faqs: [
      { q: 'What is the cost in Thiruvananthapuram?', a: 'Local shifting costs ₹4,500–₹22,000. Interstate moves to Bengaluru or Chennai cost ₹18,000–₹65,000.' },
      { q: 'Do you cover Technopark area?', a: 'Yes, all Technopark phases and surrounding Kazhakuttam area are in our coverage.' },
      { q: 'Do you handle Gulf returnees\' household goods?', a: 'Yes, we specialize in managing consignments from abroad including customs clearance assistance.' },
      { q: 'Do you serve Attingal and Neyyattinkara?', a: 'Yes, all Thiruvananthapuram district areas are covered including Neyyattinkara and Varkala.' },
    ],
    nearbyAreas: ['Technopark', 'Kazhakuttam', 'Peroorkada', 'Kovalam', 'Attingal', 'Neyyattinkara'],
  },

  {
    slug: 'packers-movers-kochi',
    name: 'Kochi',
    state: 'KL',
    district: 'Ernakulam',
    lat: 9.9312,
    lng: 76.2673,
    population: '2.1M',
    description: 'Queen of Arabian Sea — financial capital of Kerala',
    metaTitle: 'Best Packers and Movers in Kochi | PackersHub – Trusted & Affordable',
    metaDescription: 'PackersHub offers professional packers and movers in Kochi (Cochin). Home shifting, Infopark/SmartCity relocation, car transport. Call +917731074075.',
    h1: 'Packers and Movers in Kochi',
    intro: 'PackersHub is Kochi\'s trusted name for professional packing and moving services. From Infopark to Marine Drive, Kakkanad to Aluva — we serve all of Greater Kochi with speed, care, and transparency.',
    highlights: ['Infopark Relocation', 'Home Shifting', 'Car & Bike Transport', 'Gulf Consignments', 'Storage'],
    faqs: [
      { q: 'What is the cost in Kochi?', a: 'Local shifting costs ₹4,500–₹25,000. Long-distance to Bengaluru or Chennai costs ₹18,000–₹65,000+.' },
      { q: 'Which Kochi areas do you cover?', a: 'Infopark, Kakkanad, Edappally, Aluva, Perumbavoor, Thrippunithura, Marine Drive, Fort Kochi, Ernakulam, and all areas.' },
      { q: 'Do you handle LULU Mall area furniture shifting?', a: 'Yes, we cover all retail and commercial shifting in the LULU area and broader Edappally zone.' },
      { q: 'Is marine insurance available for Kochi moves?', a: 'Yes, being a coastal city, we offer comprehensive marine transit insurance for all moves.' },
    ],
    nearbyAreas: ['Infopark', 'Kakkanad', 'Edappally', 'Aluva', 'Marine Drive', 'Fort Kochi', 'Thrippunithura'],
  },

  { slug: 'packers-movers-kozhikode', name: 'Kozhikode', state: 'KL', district: 'Kozhikode', lat: 11.2588, lng: 75.7804, population: '0.6M', description: 'City of Spices — Calicut', metaTitle: 'Packers and Movers in Kozhikode | PackersHub', metaDescription: 'PackersHub packers and movers in Kozhikode (Calicut). Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Kozhikode', intro: 'PackersHub delivers professional moving in Kozhikode (Calicut), north Kerala\'s commercial and cultural capital.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Gulf Specialist'], faqs: [{ q: 'Cost in Kozhikode?', a: 'Local moves ₹4,000–₹20,000. Bengaluru route costs ₹18,000–₹55,000.' }, { q: 'Do you handle NRI household goods from Gulf?', a: 'Yes, we assist with port clearance and last-mile delivery for returned NRI goods.' }], nearbyAreas: ['Calicut Beach', 'Nadakavu', 'Feroke', 'Koyilandy', 'Vatakara', 'Ramanattukara'] },

  { slug: 'packers-movers-thrissur', name: 'Thrissur', state: 'KL', district: 'Thrissur', lat: 10.5276, lng: 76.2144, population: '0.32M', description: 'Cultural capital — Pooram city', metaTitle: 'Packers and Movers in Thrissur | PackersHub', metaDescription: 'PackersHub packers and movers in Thrissur (Trichur). Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Thrissur', intro: 'PackersHub provides professional packing and moving services in Thrissur, Kerala\'s cultural and financial powerhouse.', highlights: ['Home Shifting', 'Gold Jewelry Packing', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Thrissur?', a: 'Local moves ₹4,000–₹19,000. Kochi route (~75 km) costs ₹6,000–₹20,000.' }, { q: 'Do you handle jewelry and valuables packing?', a: 'Yes, we provide insured, tamper-proof packing for high-value items on request.' }], nearbyAreas: ['Chalakudy', 'Irinjalakuda', 'Guruvayur', 'Kodungallur', 'Kunnamkulam'] },

  { slug: 'packers-movers-kollam', name: 'Kollam', state: 'KL', district: 'Kollam', lat: 8.8932, lng: 76.6141, population: '0.35M', description: 'Cashew capital of the world — port city', metaTitle: 'Packers and Movers in Kollam | PackersHub', metaDescription: 'PackersHub packers and movers in Kollam (Quilon). Home shifting, port area service. Call +917731074075.', h1: 'Packers and Movers in Kollam', intro: 'PackersHub provides reliable packing and moving in Kollam, Kerala\'s cashew processing capital and port city.', highlights: ['Home Shifting', 'Port Cargo Assistance', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Kollam?', a: 'Local moves ₹3,500–₹17,000. Thiruvananthapuram route (~70 km) costs ₹6,000–₹18,000.' }, { q: 'Do you serve Chavara industrial area?', a: 'Yes, Chavara and all Kollam industrial belt covered.' }], nearbyAreas: ['Chavara', 'Karunagappally', 'Kottarakkara', 'Paravur', 'Punalur'] },

  { slug: 'packers-movers-palakkad', name: 'Palakkad', state: 'KL', district: 'Palakkad', lat: 10.7867, lng: 76.6548, population: '0.13M', description: 'Gateway to Kerala through Palakkad Gap', metaTitle: 'Packers and Movers in Palakkad | PackersHub', metaDescription: 'PackersHub packers and movers in Palakkad (Palghat). Home shifting, cross-state moves. Call +917731074075.', h1: 'Packers and Movers in Palakkad', intro: 'PackersHub delivers professional moving services in Palakkad, the historic gateway between Kerala and Tamil Nadu.', highlights: ['Home Shifting', 'TN-KL Corridor', 'Car Transport', 'Storage'], faqs: [{ q: 'Cost in Palakkad?', a: 'Local moves ₹3,500–₹15,000. Coimbatore route (~55 km) costs ₹5,000–₹16,000.' }, { q: 'Do you move from Palakkad to Coimbatore?', a: 'Yes, Palakkad to Coimbatore is a same-day route we serve regularly.' }], nearbyAreas: ['Ottapalam', 'Shoranur', 'Mannarkkad', 'Pattambi', 'Chittur'] },

  { slug: 'packers-movers-alappuzha', name: 'Alappuzha', state: 'KL', district: 'Alappuzha', lat: 9.4981, lng: 76.3388, population: '0.18M', description: 'Venice of the East — backwater city', metaTitle: 'Packers and Movers in Alappuzha | PackersHub', metaDescription: 'PackersHub packers and movers in Alappuzha (Alleppey). Home shifting, backwater area expertise. Call +917731074075.', h1: 'Packers and Movers in Alappuzha', intro: 'PackersHub provides expert moving services in Alappuzha (Alleppey), Kerala\'s famous backwater city.', highlights: ['Home Shifting', 'Waterfront Expertise', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Alappuzha?', a: 'Local moves ₹3,500–₹15,000. Kochi route (~55 km) costs ₹5,000–₹15,000.' }, { q: 'Can you move furniture across backwater areas?', a: 'Yes, we have experience navigating backwater locality access for shifting.' }], nearbyAreas: ['Cherthala', 'Kayamkulam', 'Mavelikara', 'Haripad', 'Mararikulam'] },

  { slug: 'packers-movers-malappuram', name: 'Malappuram', state: 'KL', district: 'Malappuram', lat: 11.0510, lng: 76.0711, population: '0.17M', description: 'Fast-growing district — Gulf connection hub', metaTitle: 'Packers and Movers in Malappuram | PackersHub', metaDescription: 'PackersHub packers and movers in Malappuram. Home shifting, NRI household goods. Call +917731074075.', h1: 'Packers and Movers in Malappuram', intro: 'PackersHub provides professional moving services in Malappuram, Kerala\'s fastest-growing Gulf connection district.', highlights: ['Home Shifting', 'NRI Specialist', 'Car Transport', 'Customs Assistance'], faqs: [{ q: 'Cost in Malappuram?', a: 'Local moves ₹3,500–₹16,000. Kozhikode route (~50 km) costs ₹5,000–₹15,000.' }, { q: 'Do you handle Gulf NRI goods from Malappuram?', a: 'Yes, Malappuram has a high NRI population and we specialize in returned household goods.' }], nearbyAreas: ['Tirur', 'Perinthalmanna', 'Manjeri', 'Wandoor', 'Nilambur'] },

  { slug: 'packers-movers-kannur', name: 'Kannur', state: 'KL', district: 'Kannur', lat: 11.8745, lng: 75.3704, population: '0.22M', description: 'Land of looms and lores — Cannanore', metaTitle: 'Packers and Movers in Kannur | PackersHub', metaDescription: 'PackersHub packers and movers in Kannur (Cannanore). Home shifting, office relocation. Call +917731074075.', h1: 'Packers and Movers in Kannur', intro: 'PackersHub delivers trusted packing and moving services in Kannur, north Kerala\'s weaving and cultural capital.', highlights: ['Home Shifting', 'Office Relocation', 'Car Transport', 'Textile Care'], faqs: [{ q: 'Cost in Kannur?', a: 'Local moves ₹3,500–₹16,000. Kozhikode route (~90 km) costs ₹6,000–₹18,000.' }, { q: 'Do you serve Thalassery from Kannur?', a: 'Yes, Thalassery, Mattannur, and all Kannur district towns are covered.' }], nearbyAreas: ['Thalassery', 'Mattannur', 'Taliparamba', 'Payyannur', 'Iritty'] },

  { slug: 'packers-movers-kottayam', name: 'Kottayam', state: 'KL', district: 'Kottayam', lat: 9.5916, lng: 76.5222, population: '0.17M', description: 'Land of letters, latex, and lakes', metaTitle: 'Packers and Movers in Kottayam | PackersHub', metaDescription: 'PackersHub packers and movers in Kottayam. Home shifting, rubber belt expertise. Call +917731074075.', h1: 'Packers and Movers in Kottayam', intro: 'PackersHub delivers professional moving services in Kottayam, Kerala\'s rubber belt district known for lakes and literacy.', highlights: ['Home Shifting', 'Rubber Region Expertise', 'Car Transport', 'Insurance'], faqs: [{ q: 'Cost in Kottayam?', a: 'Local moves ₹3,500–₹15,000. Kochi route (~75 km) costs ₹6,000–₹18,000.' }, { q: 'Do you serve Kumarakom?', a: 'Yes, Kumarakom, Vaikom, and all Kottayam district areas are covered.' }], nearbyAreas: ['Kumarakom', 'Vaikom', 'Ettumanoor', 'Changanacherry', 'Pala'] },
];

// ── Helper Functions ──────────────────────────────────────────

export function getCitiesByState(stateCode: StateKey): City[] {
  return cities.filter(c => c.state === stateCode);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getStateBySlug(slug: string): StateInfo | undefined {
  return Object.values(states).find(s => s.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(c => c.slug);
}

export function getAllStateSlugs(): string[] {
  return Object.values(states).map(s => s.slug);
}

export const CONTACT = {
  phone: '+917731074075',
  phone2: '+917730912913',
  phoneDisplay: '+91 77310 74075',
  whatsapp: '917731074075',
  email: 'info@packershub.in',
  address: 'BV Nagar, Nellore, Andhra Pradesh',
  pincode: '524004',
  city: 'Nellore',
  state: 'Andhra Pradesh',
  country: 'India',
  website: 'https://packershub.in',
  mapLink: 'https://maps.google.com/?q=PackersHub+BV+Nagar+Nellore',
  whatsappLink: (message = 'Hello! I need packers and movers.') =>
    `https://wa.me/917731074075?text=${encodeURIComponent(message)}`,
  callLink: 'tel:+917731074075',
} as const;

export const BUSINESS = {
  name: 'PackersHub',
  legalName: 'PackersHub Packers and Movers',
  tagline: 'South India\'s Trusted Packers & Movers',
  description: 'Professional packers and movers serving 75 cities across 5 South Indian states. Licensed, insured, and trusted by 50,000+ families.',
  founded: '2018',
  gstin: 'XXXXXXXXXXXXXXXXX', // Update with actual GSTIN
  totalCities: 75,
  totalStates: 5,
  experience: '7+',
  customers: '50,000+',
  rating: 4.8,
  reviews: 12500,
  states: ['Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'Karnataka', 'Kerala'],
  services: [
    'Household Shifting',
    'Office Relocation',
    'Car Transport',
    'Bike Transport',
    'Warehouse Storage',
    'International Moving',
    'Packing Services',
    'Furniture Assembly',
  ],
} as const;
