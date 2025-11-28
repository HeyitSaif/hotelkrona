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
    nameEn: "1-Room Green Zone View (No Balcony)",
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
    nameEn: "1-Room Sea View (No Balcony)",
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
    nameEn: "1-Room Superior (No Balcony)",
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
    nameEn: "1-Room Pool View (Balcony)",
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
    nameEn: "1-Room Superior (Balcony)",
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
    nameEn: "Semi-Luxury Sea View (Balcony)",
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
    nameEn: "2-Room Green Zone View (Balcony)",
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
    nameEn: "2-Level 3-Room Luxury Suite Sea View (Balcony)",
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
  { href: "/pricing", label: "Pricing", labelRu: "Прайс" },
  { href: "/amenities", label: "Amenities", labelRu: "Удобства" },
  { href: "/gallery", label: "Gallery", labelRu: "Галерея" },
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