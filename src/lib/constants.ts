// Hotel Information
export const HOTEL_INFO = {
  name: "Hotel Korona",
  tagline: "Coastal Castle Elegance on the Shores of Crimea",
  location: {
    address: "Crimea, Alushta, Utes village, Gagarina St. 23/2024",
    coordinates: {
      lat: 44.678055,
      lng: 34.384722
    }
  },
  contact: {
    phone: "+7 (978) 705 33 34",
    email: "hotelkorona.crimea@gmail.com",
    whatsapp: "+79788945102"
  },
  description: "Experience luxury in our castle-style resort located just 150 meters from pristine pebble beaches. Combining historic architecture with modern comfort, Hotel Korona offers an unforgettable vacation experience in the beautiful resort town of Utyos."
};

// Room Types with Real Data
export const ROOM_TYPES = [
  {
    id: "green-zone-no-balcony",
    nameRu: "Однокомнатный c видом на зеленую зону без балкона",
    nameEn: "1-Room Green Zone View",
    beds: "1 Double bed",
    maxGuests: 2,
    size: "15 m²",
    availableUnits: 1,
    price: 1500,
    viewType: "Green Zone/Gardens",
    balcony: false,
    description: "Budget-friendly option with views of hotel gardens and green landscaping.",
    category: "budget"
  },
  {
    id: "sea-view-no-balcony",
    nameRu: "Однокомнатный с видом на море без балкона",
    nameEn: "1-Room Sea View",
    beds: "1 Double bed",
    maxGuests: 4,
    size: "18 m²",
    availableUnits: 1,
    price: 1650,
    viewType: "Sea",
    balcony: false,
    description: "Standard room with sea views. Double bed. Window overlooks the sea. Equipment in rooms may slightly differ from photos - specify configuration when booking.",
    category: "standard"
  },
  {
    id: "superior-no-balcony",
    nameRu: "Однокомнатный улучшенный без балкона",
    nameEn: "1-Room Superior",
    beds: "1 Double bed",
    maxGuests: 4,
    size: "20 m²",
    availableUnits: 1,
    price: 1800,
    viewType: "Garden",
    balcony: false,
    description: "Enhanced standard room with superior comfort and amenities. No balcony. Spacious layout.",
    category: "standard-plus"
  },
  {
    id: "pool-view-balcony",
    nameRu: "Однокомнатный с видом на бассейн с балконом",
    nameEn: "1-Room Pool View",
    beds: "1 Double bed",
    maxGuests: 4,
    size: "18 m²",
    availableUnits: 1,
    price: 1900,
    viewType: "Pool",
    balcony: true,
    description: "Room overlooking the pool area. Double bed. Private balcony for relaxation.",
    category: "standard-plus"
  },
  {
    id: "superior-balcony",
    nameRu: "Однокомнатный улучшенный с балконом",
    nameEn: "1-Room Superior",
    beds: "1 Double bed",
    maxGuests: 4,
    size: "20 m²",
    availableUnits: 1,
    price: 2200,
    viewType: "Garden",
    balcony: true,
    description: "Enhanced standard room with private balcony. Double bed. Superior amenities and comfort.",
    category: "standard-plus"
  },
  {
    id: "semi-luxury-sea-balcony",
    nameRu: "Полулюкс с видом на море с балконом",
    nameEn: "Semi-Luxury Sea View",
    beds: "1 Double bed",
    maxGuests: 4,
    size: "25 m²",
    availableUnits: 1,
    price: 2700,
    viewType: "Sea",
    balcony: true,
    description: "Mid-luxury room with beautiful sea views. Private balcony. Spacious, well-appointed room.",
    category: "mid-luxury"
  },
  {
    id: "two-room-green-balcony",
    nameRu: "Двухкомнатный номер с видом на зеленую зону с балконом",
    nameEn: "2-Room Green Zone View",
    beds: "1 Double bed",
    maxGuests: 4,
    size: "40 m²",
    availableUnits: 2,
    price: 4300,
    viewType: "Green Zone/Gardens",
    balcony: true,
    description: "Spacious two-room suite with views of hotel gardens. Private balcony. Perfect for families or those wanting extra space.",
    category: "suite"
  },
  {
    id: "duplex-luxury-sea-balcony",
    nameRu: "Двухуровневый трехкомнатный люкс с видом на море с балконом",
    nameEn: "2-Level 3-Room Luxury Suite Sea View",
    beds: "2 Double beds + Sofa bed",
    maxGuests: 6,
    size: "60 m²",
    availableUnits: 3,
    price: 7950,
    viewType: "Sea",
    balcony: true,
    description: "Premium luxury two-level suite with spectacular sea views. Multiple bedrooms, sofa bed, private balcony. Highest comfort level for special occasions or group stays.",
    category: "luxury"
  }
];

// Room Amenities
export const ROOM_AMENITIES = [
  { icon: "📺", name: "LCD TV", nameRu: "LCD телевизор" },
  { icon: "📶", name: "Free WiFi", nameRu: "Бесплатный WiFi" },
  { icon: "🚿", name: "Toiletries", nameRu: "Туалетные принадлежности" },
  { icon: "🚿", name: "Shower", nameRu: "Душевая кабина" },
  { icon: "🏠", name: "Towels & Linens", nameRu: "Полотенца и постельное белье" },
  { icon: "❄️", name: "Air Conditioner", nameRu: "Кондиционер" },
  { icon: "☎️", name: "Telephone", nameRu: "Телефон" },
  { icon: "💇", name: "Hair Dryer", nameRu: "Фен" },
  { icon: "🧊", name: "Mini Fridge", nameRu: "Мини-холодильник" }
];

// Restaurant Information
export const RESTAURANTS = [
  {
    id: "romanov",
    name: "Romanov",
    cuisine: "European & Russian",
    atmosphere: "Refined, classical sophistication inspired by imperial Russian grandeur",
    keywords: ["elegant", "regal", "sophisticated", "warm hospitality"],
    signature: "Best borscht",
    description: "Discover refined European cuisine blended with authentic Russian heritage in our flagship restaurant. Elevated presentation, warm service, fine dining experience."
  },
  {
    id: "uzbek-tatar",
    name: "Uzbek & Tatar Restaurant",
    cuisine: "Central Asian (Uzbek & Tatar Traditional)",
    atmosphere: "Rustic, intimate setting with authentic Eastern design",
    keywords: ["soulful", "family-style", "slow-cooked", "centuries-old traditions"],
    signature: "Traditional slow-cooked dishes",
    description: "Taste the soul of Central Asia with our slow-cooked traditional dishes. Rooted in centuries-old traditions, this intimate space offers genuine Uzbek and Tatar flavors in a rustic, welcoming setting."
  },
  {
    id: "georgian",
    name: "Georgian Restaurant",
    cuisine: "Georgian (Caucasus)",
    atmosphere: "Seaside loft-meets-lounge with relaxed, open-air ambiance",
    keywords: ["vibrant", "energetic", "casual elegance", "coastal breeze"],
    signature: "Generous portions with vibrant flavors",
    description: "Experience vibrant Georgian cuisine and generous portions in our seaside restaurant. Featuring open-air ambiance with coastal breezes, this is where sunshine meets style and flavor."
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Like a fairytale castle! The tranquility here is unmatched. The balcony views of the mountains and sea were breathtaking.",
    author: "Marina K.",
    stayType: "Leisure vacation",
    highlights: ["Castle design", "peaceful atmosphere", "scenic views", "memorable experience"],
    rating: 5
  },
  {
    id: 2,
    quote: "The staff treated us like honored guests. The borscht at Romanov was the best I've ever had! Short walk to the beach makes it perfect.",
    author: "Dmitri P.",
    stayType: "Leisure with dining focus",
    highlights: ["Warm staff", "professional service", "excellent food", "beach proximity"],
    rating: 5
  },
  {
    id: 3,
    quote: "Perfect for families! Spacious rooms, safe peaceful area, beautiful parks and pebble beaches. Our kids loved it. We're coming back next summer!",
    author: "The Volkov Family",
    stayType: "Family vacation with 2 children",
    highlights: ["Family-friendly amenities", "safety", "spacious accommodations", "child activities"],
    rating: 5
  }
];

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home", labelRu: "Главная" },
  { href: "/rooms", label: "Rooms", labelRu: "Номера" },
  { href: "/events", label: "Events", labelRu: "События" },
  { href: "/amenities", label: "Amenities", labelRu: "Удобства" },
  { href: "/gallery", label: "Gallery", labelRu: "Галерея" },
  { href: "/careers", label: "Careers", labelRu: "Карьера" },
  { href: "/contact", label: "Contact", labelRu: "Контакты" }
];

// Seasonal Pricing (2025)
export const SEASONAL_PRICING = {
  period1: { name: "Low Season", dates: "01.08 - 11.08", multiplier: 1 },
  period2: { name: "Mid Season", dates: "07.07 - 15.09", multiplier: 2.7 },
  period3: { name: "High Season", dates: "16.09 - 19.09", multiplier: 4 },
  period4: { name: "Peak Season", dates: "16.09 - 13.09", multiplier: 2.7 }
};

// Amenities Categories
export const HOTEL_AMENITIES = {
  dining: [
    "Three unique restaurants",
    "European & Russian cuisine",
    "Central Asian specialties",
    "Georgian cuisine",
    "Room service available"
  ],
  wellness: [
    "Outdoor heated pool",
    "Sunbathing areas",
    "Garden relaxation spaces",
    "Peaceful environment"
  ],
  recreation: [
    "150m to pebble beach",
    "Clean sea access",
    "Parks and gardens",
    "Princess Gagarina Palace nearby"
  ],
  services: [
    "24/7 professional staff",
    "Concierge service",
    "Housekeeping",
    "Parking available",
    "Free WiFi throughout"
  ]
};

// Wedding Packages
export const WEDDING_PACKAGES = [
  {
    id: 'classic',
    name: 'Classic Package',
    description: 'Everything you need for a beautiful wedding celebration',
    priceFrom: 'Contact for pricing',
    features: [
      'Venue rental for ceremony & reception',
      'Basic décor and setup',
      '3-course wedding menu',
      'Standard bar package',
      'Tables, chairs & linens',
      'Event coordinator'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Package',
    description: 'Enhanced celebration with premium services',
    priceFrom: 'Contact for pricing',
    features: [
      'All Classic Package inclusions',
      'Upgraded floral décor',
      'Professional photographer (6 hours)',
      'Live music or DJ',
      'Extended premium bar',
      'Wedding cake',
      'Bridal suite accommodation'
    ],
    popular: true
  },
  {
    id: 'elopement',
    name: 'Intimate Elopement',
    description: 'Perfect for small, intimate ceremonies',
    priceFrom: 'Contact for pricing',
    features: [
      'Ceremony setup for 2-10 guests',
      'Romantic beachfront location',
      'Private dinner service',
      'Professional photography (2 hours)',
      'Bouquet & boutonniere',
      'Celebration champagne'
    ]
  }
];

// Event Types
export const EVENT_TYPES = [
  {
    id: 'birthdays',
    title: 'Birthdays',
    description: 'From intimate dinners to big milestone parties',
    icon: '🎂'
  },
  {
    id: 'anniversaries',
    title: 'Anniversaries',
    description: 'Romantic dinners or family celebrations',
    icon: '💍'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Team dinners, product launches, cocktail receptions',
    icon: '🤝'
  },
  {
    id: 'private',
    title: 'Private Gatherings',
    description: 'Baby showers, reunions, bachelor/bachelorette nights',
    icon: '🎉'
  }
];

// Celebration Packages
export const CELEBRATION_PACKAGES = [
  {
    id: 'dinner-drinks',
    name: 'Dinner & Drinks',
    description: 'Perfect for sit-down celebrations',
    features: [
      'Set menu or buffet options',
      'Welcome drink for guests',
      'Standard bar package',
      'Table setup & linens',
      'Background music'
    ]
  },
  {
    id: 'cocktail-party',
    name: 'Cocktail Party',
    description: 'Stand-up reception with entertainment',
    features: [
      'Canapés & finger food selection',
      'Premium bar packages',
      'DJ or live background music',
      'Cocktail tables & high chairs',
      'Dance floor setup'
    ]
  },
  {
    id: 'custom',
    name: 'Custom Celebration',
    description: 'Tailored to your unique vision',
    features: [
      'Personalized event concept',
      'Custom menu creation',
      'Themed decoration options',
      'Entertainment coordination',
      'Flexible timing & format'
    ]
  }
];

// Event Spaces
export const EVENT_SPACES = [
  {
    id: 'terrace',
    name: 'Terrace by the Pool',
    capacity: 80,
    description: 'Ideal for summer parties and outdoor celebrations',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da8fd97?w=800&q=80'
  },
  {
    id: 'lounge',
    name: 'Lounge Bar',
    capacity: 50,
    description: 'Perfect for cocktail receptions and intimate gatherings',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
  },
  {
    id: 'dining',
    name: 'Private Dining Room',
    capacity: 30,
    description: 'Quiet setting for dinners and anniversaries',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'
  },
  {
    id: 'beachfront',
    name: 'Beachfront Deck',
    capacity: 100,
    description: 'Stunning seaside ceremonies and receptions',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80'
  }
];

// Job Positions
export interface JobPosition {
  id: string;
  title: string;
  titleRu: string;
  category: string;
  employmentType: 'Full-time' | 'Part-time' | 'Seasonal';
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  weOffer: string[];
  startDate?: string;
}

export const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'front-desk-receptionist',
    title: 'Front Desk Receptionist',
    titleRu: 'Администратор',
    category: 'Reception',
    employmentType: 'Full-time',
    location: 'Hotel Korona, Utyos, Crimea',
    description: 'We are looking for a friendly and professional Front Desk Receptionist to be the first point of contact for our guests. You will handle check-ins, reservations, and ensure every guest feels welcome.',
    responsibilities: [
      'Greet and assist guests during check-in and check-out',
      'Handle reservations and room assignments',
      'Answer phone calls and respond to guest inquiries',
      'Process payments and maintain accurate records'
    ],
    requirements: [
      'Basic German and English communication skills',
      'Excellent customer service and interpersonal abilities',
      'Previous hotel or hospitality experience is an advantage',
      'Proficiency with computer systems and booking software',
      'Flexibility to work shifts including weekends and holidays'
    ],
    weOffer: [
      'Stable contract and competitive salary',
      'Meals during shifts',
      'Supportive team environment and comprehensive training',
      'Opportunities for career growth within the hotel'
    ],
    startDate: 'Immediate'
  },
  {
    id: 'maintenance-technician',
    title: 'Maintenance Technician',
    titleRu: 'Техник по обслуживанию',
    category: 'Maintenance',
    employmentType: 'Full-time',
    location: 'Hotel Korona, Utyos, Crimea',
    description: 'Join our maintenance team to ensure our hotel facilities and guest rooms are in perfect condition. You will handle repairs, preventive maintenance, and technical support.',
    responsibilities: [
      'Perform routine maintenance and repairs on hotel facilities',
      'Respond to maintenance requests from guests and staff',
      'Conduct preventive maintenance on equipment and systems',
      'Ensure compliance with safety regulations and standards'
    ],
    requirements: [
      'Technical skills in plumbing, electrical, or general maintenance',
      'Ability to troubleshoot and solve problems independently',
      'Previous experience in hotel or building maintenance preferred',
      'Physical ability to lift and move equipment',
      'Basic communication skills in Russian; English is a plus'
    ],
    weOffer: [
      'Stable employment with fair compensation',
      'Meals provided during working hours',
      'Training and professional development opportunities',
      'Friendly and collaborative work environment'
    ],
    startDate: 'Flexible'
  },
  {
    id: 'restaurant-server',
    title: 'Restaurant Server',
    titleRu: 'Официант',
    category: 'Food & Beverage',
    employmentType: 'Full-time',
    location: 'Hotel Korona Restaurants, Utyos, Crimea',
    description: 'We are seeking enthusiastic Restaurant Servers to join our dining team. You will provide excellent service to our guests while creating memorable dining experiences.',
    responsibilities: [
      'Take orders and serve food and beverages to guests',
      'Provide menu recommendations and answer questions',
      'Ensure tables are clean and properly set',
      'Process payments and maintain cleanliness standards'
    ],
    requirements: [
      'Previous experience in restaurant or hospitality service',
      'Excellent communication and customer service skills',
      'Ability to work in a fast-paced environment',
      'Knowledge of basic German and English is preferred',
      'Willingness to work flexible hours including evenings and weekends'
    ],
    weOffer: [
      'Competitive salary plus tips',
      'Free meals during shifts',
      'Professional training and development',
      'Supportive team and positive work culture'
    ],
    startDate: 'Immediate'
  },
  {
    id: 'hotel-housekeeper',
    title: 'Hotel Housekeeper',
    titleRu: 'Горничная',
    category: 'Housekeeping',
    employmentType: 'Full-time',
    location: 'Hotel Korona, Utyos, Crimea',
    description: 'We need dedicated Housekeepers to maintain the cleanliness and comfort of our guest rooms and public areas. Your attention to detail will ensure our guests enjoy a spotless environment.',
    responsibilities: [
      'Clean and organize guest rooms to hotel standards',
      'Change linens, replenish amenities, and remove trash',
      'Report maintenance issues and lost items',
      'Maintain cleanliness of public areas and corridors'
    ],
    requirements: [
      'Attention to detail and high standards of cleanliness',
      'Physical stamina to perform cleaning tasks',
      'Ability to work independently and efficiently',
      'Previous housekeeping experience is an advantage',
      'Basic Russian communication; other languages are a plus'
    ],
    weOffer: [
      'Stable employment with fair wages',
      'Meals provided during work hours',
      'Comprehensive training program',
      'Friendly team and supportive management'
    ],
    startDate: 'Immediate'
  },
  {
    id: 'chef',
    title: 'Chef',
    titleRu: 'Шеф-повар',
    category: 'Food & Beverage',
    employmentType: 'Full-time',
    location: 'Hotel Korona Restaurants, Utyos, Crimea',
    description: 'We are looking for an experienced Chef to lead our kitchen team and create delicious dishes for our guests. You will oversee menu development, food preparation, and kitchen operations.',
    responsibilities: [
      'Plan and execute menu items for our restaurants',
      'Supervise kitchen staff and coordinate food preparation',
      'Ensure food quality, presentation, and safety standards',
      'Manage inventory and order supplies as needed'
    ],
    requirements: [
      'Culinary degree or equivalent professional experience',
      'Proven experience as a Chef in hotels or fine dining',
      'Strong leadership and team management skills',
      'Knowledge of European and international cuisines',
      'Ability to work under pressure and maintain high standards'
    ],
    weOffer: [
      'Competitive salary commensurate with experience',
      'Creative freedom in menu development',
      'Professional development and training opportunities',
      'Meals during shifts and staff benefits'
    ],
    startDate: 'Flexible'
  },
  {
    id: 'kitchen-assistant',
    title: 'Kitchen Assistant',
    titleRu: 'Помощник повара',
    category: 'Food & Beverage',
    employmentType: 'Full-time',
    location: 'Hotel Korona Restaurants, Utyos, Crimea',
    description: 'Join our kitchen team as a Kitchen Assistant and support our chefs in preparing high-quality meals. This is a great opportunity to learn and grow in the culinary field.',
    responsibilities: [
      'Assist chefs with food preparation and cooking',
      'Maintain cleanliness and organization in the kitchen',
      'Prepare ingredients and assist with basic cooking tasks',
      'Follow food safety and hygiene procedures'
    ],
    requirements: [
      'Interest in culinary arts and food preparation',
      'Ability to work in a fast-paced kitchen environment',
      'Physical stamina to stand for extended periods',
      'Basic knowledge of food safety and hygiene',
      'No experience required; training will be provided'
    ],
    weOffer: [
      'Entry-level position with training provided',
      'Fair salary and meals during shifts',
      'Opportunity to learn from experienced chefs',
      'Potential for advancement to cook positions'
    ],
    startDate: 'Immediate'
  }
];