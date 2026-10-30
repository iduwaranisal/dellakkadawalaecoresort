export interface NavLink {
  label: string;
  href: string;
}

export interface TourismDestination {
  id: string;
  name: string;
  tag: string;
  distance: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

export interface RoomSample {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isPlaceholder?: boolean;
}

export const siteConfig = {
  name: "Dellakkadawala Eco Resort",
  shortName: "Dellakkadawala",
  subTitle: "Eco Resort",
  tagline: "Peace Beside the River",
  description:
    "A quiet village-style getaway in Dellawa, Neluwa, Sri Lanka. Relax beside a natural river, paddle gentle kayaks, and spend calm time with family and friends near the Sinharaja Rainforest region.",
  
  // Confirmed Contact & Location Details
  contact: {
    primaryPhone: "+94 71 180 6801",
    primaryPhoneTel: "+94711806801",
    secondaryPhone: "+94 70 379 1112",
    secondaryPhoneTel: "+94703791112",
    whatsappUrl: "https://wa.me/94711806801",
    facebookUrl: "https://www.facebook.com/profile.php?id=61552296396088",
    // TODO: replace with real email address when provided by owner
    email: "info@dellakkadawalaecoresort.com", 
    address: {
      street: "Dellawa",
      town: "Neluwa",
      district: "Galle",
      province: "Southern Province",
      country: "Sri Lanka",
      full: "Dellawa, Neluwa, Galle, Southern Province, Sri Lanka",
      landmark: "Near the Sinharaja Rainforest region and local red tea estates",
    },
    // Exact Google Maps location provided by owner
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=6.3248959,80.4493405&hl=en&z=16&output=embed",
    googleMapsDirectionsUrl:
      "https://maps.app.goo.gl/cu8JCZugJVCRpT719",
    // TODO: replace with confirmed check-in and check-out or day-out timing
    operatingHoursNote: "Open daily for day visits and overnight stays. Please call ahead to confirm your visit.",
  },

  setting: {
    river: "Natural river stream flowing right beside the resort grounds",
    nature: "Lush green rainforest surroundings near Sinharaja and scenic red tea estates",
    atmosphere: "Calm, clean, and slow-paced village environment away from city noise",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experiences", href: "/experiences" },
    { label: "Stay", href: "/stay" },
    { label: "Gallery", href: "/gallery" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],

  experiences: [
    {
      id: "river-bathing",
      title: "River Bathing & Swimming",
      subtitle: "Pure Fresh Water",
      description:
        "Step down the stone steps into natural running river water. It is cool, clean, and refreshing on sunny days.",
      details:
        "The river flows gently next to the resort bank. You can wade in shallow spots or swim safely in calm pools. Life rings and tubes are available.",
      image: "/images/gallery/img 5.jpg",
      alt: "Natural clear river stream flowing over rocks surrounded by lush green trees",
    },
    {
      id: "kayaking",
      title: "Kayaking & Water Play",
      subtitle: "Gentle River Paddling",
      description:
        "Take one of our blue kayaks out onto the water. Paddle slowly through misty waters surrounded by tall trees.",
      details:
        "The water is calm and suitable for both beginners and experienced paddlers. Kayaks and safety gear are kept right by the bank.",
      image: "/images/hero/hero3.jpg",
      alt: "Blue kayaks floating on the peaceful river surrounded by lush rainforest trees and morning mist",
    },
    {
      id: "day-outs",
      title: "Relaxing Day Outs",
      subtitle: "For Family & Friends",
      description:
        "Spend a relaxed day away from town. Enjoy good food, sit under the thatched roof, and listen to the birds and water.",
      details:
        "Large open seating spaces make it easy for small and medium groups to spend the entire day together comfortably.",
      image: "/images/gallery/img 18.jpg",
      alt: "Open-air dining patio with wooden benches under thatched ceiling",
    },
    {
      id: "nature-trails",
      title: "Nearby Nature Trails",
      subtitle: "Sinharaja Rainforest Region",
      description:
        "Walk along quiet village paths and see local red tea estates, green hills, and forest trees.",
      details:
        "Dellawa is rich with green views. Take gentle morning or late-afternoon strolls where the air is cool and crisp.",
      image: "/images/hero/hero1.jpg",
      alt: "Aerial view of Dellakkadawala Eco Resort beside the winding river and green rainforest hills",
    },
    {
      id: "group-gatherings",
      title: "Small Group Gatherings",
      subtitle: "Celebrate Together",
      description:
        "A peaceful setting for family gatherings, office get-togethers, and quiet reunions with friends.",
      details:
        "We offer indoor and outdoor gathering spots with long dining tables, barbecue facilities, and evening lighting.",
      image: "/images/gallery/img 16.jpg",
      alt: "Dining hall with long wooden tables and ambient lights for group meals",
    },
  ],

  // Stay & Accommodation (Soft honest placeholders)
  // TODO: replace with confirmed room counts and exact pricing from resort owner
  stayOverview: {
    notice: "Please contact our desk to ask about rooms and day visits.",
    bookingCallText: "Contact us online to check room availability.",
    buildings: [
      {
        name: "Riverview Two-Story House",
        description:
          "A comfortable two-story building overlooking the river with an open balcony, dining spaces, and guest rooms.",
        image: "/images/hero/hero4.jpg",
        alt: "Two-story resort house viewed from the river with stone steps and balconies",
      },
      {
        name: "Earthy Eco Cottage",
        description:
          "A traditional clay-walled cottage with a covered veranda set against green forest hills.",
        image: "/images/hero/hero2.jpg",
        alt: "Earthy clay cottage at Dellakkadawala with thatched veranda posts and misty hills",
      },
    ],
    // TODO: replace with real facilities confirmed by the resort
    facilities: [
      { name: "Direct River Access", desc: "Private stone steps lead directly into the river" },
      { name: "Kayaks & Safety Gear", desc: "Available for calm paddling on the river" },
      { name: "Covered Dining Area", desc: "Spacious patio with wooden tables and benches" },
      { name: "Evening Barbecue Setup", desc: "Outdoor barbecue grill for fresh evening meals" },
      { name: "Private Attached Bathrooms", desc: "Clean tiled bathrooms with overhead showers" },
      { name: "Group Seating & Hall", desc: "Indoor lounge and gathering spaces for friends and families" },
      { name: "Free On-Site Parking", desc: "Spacious gravel parking area right in front of the building" },
    ],
    // TODO: replace with real room categories and rates
    sampleRooms: [
      {
        id: "room-double",
        title: "Standard Double Room",
        subtitle: "Cozy & Quiet",
        description:
          "Simple, clean room with a wooden bed, attached tiled bathroom, and fan for a peaceful night.",
        features: ["Double wooden bed", "Private bathroom", "Ceiling / wall fan", "Garden views"],
        image: "/images/gallery/img 2.jpg",
        alt: "Clean bedroom with wooden bed frame and attached bathroom",
      },
      {
        id: "room-family",
        title: "Family & Group Room",
        subtitle: "Spacious Group Comfort",
        description:
          "Large room with multiple comfortable beds, perfect for families and small groups traveling together.",
        features: ["Multiple beds", "Fan cooling", "Spacious layout", "Tile flooring"],
        image: "/images/gallery/img 7.jpg",
        alt: "Family bedroom with multiple beds and ceiling fan",
      },
      {
        id: "room-suite",
        title: "Balcony Nature Suite",
        subtitle: "Scenic Forest Outlook",
        description:
          "Upper floor room with seating area, wide windows facing the trees, and access to the river balcony.",
        features: ["Living chairs", "Balcony access", "Dressing mirror", "Attached bathroom"],
        image: "/images/gallery/img 17.jpg",
        alt: "Suite room with armchairs, mirror, and double bed",
      },
    ] as RoomSample[],
  },

  // Nearby Tourism Destinations (Minimum 6 most popular near Neluwa/Dellawa & Sinharaja)
  nearbyDestinations: [
    {
      id: "sinharaja-forest",
      name: "Sinharaja Forest Reserve",
      tag: "UNESCO World Heritage",
      distance: "Approx. 20-25 mins",
      description:
        "Sri Lanka's premier primary rainforest. Home to giant tropical canopies, rare endemic birds, and tranquil walking trails.",
      highlights: [
        "Primary rainforest canopy walks",
        "Famous bird wave watching",
        "Natural crystal streams",
      ],
      image: "/images/destinations/sinharaja-rainforest.jpg",
      alt: "UNESCO Sinharaja Forest Reserve misty tropical rainforest canopy",
    },
    {
      id: "doowili-ella",
      name: "Doowili Ella Waterfall",
      tag: "Hidden Cascade",
      distance: "Nearby in Neluwa",
      description:
        "A hidden waterfall cascading into deep natural river pools surrounded by wild moss and emerald jungle ferns.",
      highlights: [
        "Pristine natural swimming pools",
        "Shaded rainforest walking trail",
        "Quiet and uncrowded nature spot",
      ],
      image: "/images/destinations/doowili-ella-waterfall.jpg",
      alt: "Doowili Ella waterfall cascading into fresh forest pool",
    },
    {
      id: "pitadeniya-bridge",
      name: "Pitadeniya Conservation Centre",
      tag: "River & Bridge Walk",
      distance: "Approx. 15-20 mins",
      description:
        "The scenic southern gateway into Sinharaja featuring an iconic suspension footbridge crossing over the clear Gin River.",
      highlights: [
        "Scenic suspension footbridge",
        "River walk alongside crystal streams",
        "Official forest department entrance",
      ],
      image: "/images/destinations/pitadeniya-bridge.jpg",
      alt: "Pitadeniya suspension bridge crossing clear forest river",
    },
    {
      id: "neluwa-tea-estates",
      name: "Neluwa Terraced Tea Hills",
      tag: "Scenic Tea Trails",
      distance: "Surrounding the resort area",
      description:
        "Rolling emerald-green hillside tea gardens where Sri Lanka's famous low-grown tea thrives among cool mountain breezes.",
      highlights: [
        "Panoramic rolling green hills",
        "Gentle morning walking trails",
        "Traditional tea pluckers at work",
      ],
      image: "/images/destinations/neluwa-tea-estates.jpg",
      alt: "Lush green terraced tea plantations in Neluwa",
    },
    {
      id: "lankagama-falls",
      name: "Lankagama & Brahmana Ella",
      tag: "Waterfall Village",
      distance: "Short scenic drive",
      description:
        "A tranquil secluded village nestled between green mountains, famous for the majestic Brahmana Ella falls and pure mountain water.",
      highlights: [
        "Spectacular tiered rock cascades",
        "Untouched rural Sri Lankan village life",
        "Natural stone bathing spots",
      ],
      image: "/images/destinations/lankagama-falls.jpg",
      alt: "Brahmana Ella waterfall in Lankagama village",
    },
    {
      id: "suriyakanda-viewpoint",
      name: "Suriyakanda Mountain Ridge",
      tag: "Panoramic Viewpoint",
      distance: "Scenic mountain drive",
      description:
        "A breathtaking mountain pass offering sweeping vistas of the misty southern valleys and dense rainforest canopies.",
      highlights: [
        "Dramatic mountain ridge viewpoints",
        "Spectacular sunrise and mist views",
        "Crisp mountain air and photo spots",
      ],
      image: "/images/destinations/suriyakanda-viewpoint.jpg",
      alt: "Suriyakanda mountain viewpoint overlooking misty valley",
    },
  ] as TourismDestination[],

  // TODO: replace with real guest reviews when collected
  testimonials: [
    {
      id: "test-1",
      quote:
        "The river is so clean and calm. We spent hours paddling kayaks and swimming with our children. A very quiet and lovely place.",
      author: "Kasun & Family",
      location: "Galle",
      date: "Recent Guest",
    },
    {
      id: "test-2",
      quote:
        "Great place for our team day out. The barbecue at night by the river was memorable. Friendly atmosphere and scenic surroundings.",
      author: "Nuwan P.",
      location: "Matara",
      date: "Recent Guest",
    },
    {
      id: "test-3",
      quote:
        "If you want to escape city noise and relax near Sinharaja rainforest nature, Dellakkadawala is wonderful. Simple, clean, and peaceful.",
      author: "Dilani S.",
      location: "Colombo",
      date: "Recent Guest",
    },
  ] as Testimonial[],

  // FAQ
  faqs: [
    {
      id: "faq-1",
      question: "What activities can we enjoy at Dellakkadawala?",
      answer:
        "You can swim in the natural river, paddle our blue kayaks, relax on the shaded balcony, have an outdoor barbecue, and take quiet nature walks in the village and near tea estates.",
    },
    {
      id: "faq-2",
      question: "How do we make a reservation or check availability?",
      answer:
        "You can reach out through our contact page to send an inquiry or message us. We will help you pick the right date for your day visit or stay.",
    },
    {
      id: "faq-3",
      question: "Is Dellakkadawala suitable for children and families?",
      answer:
        "Yes, families love the shallow river spots, kayaking, and open grounds. We ask parents to always watch children near the water.",
    },
    {
      id: "faq-4",
      question: "Is there vehicle parking on the property?",
      answer:
        "Yes, there is free parking space right on the property for cars, vans, and bikes.",
    },
    {
      id: "faq-5",
      question: "What should we bring with us for a day out?",
      answer:
        "We recommend bringing swimwear, extra dry clothes, towels, river-friendly shoes or sandals, sun protection, and a camera for the scenic views.",
    },
    {
      id: "faq-6",
      question: "Can we book the resort for private group events?",
      answer:
        "Yes, we welcome small group gatherings, family days, and team retreats. Please contact us in advance so we can arrange the tables and spaces for your group.",
    },
    // TODO: replace with exact food policy
    {
      id: "faq-7",
      question: "Are meals provided at the resort?",
      answer:
        "Please contact our desk to discuss meal options, local home cooked Sri Lankan meals, and barbecue arrangements.",
      isPlaceholder: true,
    },
  ] as FAQItem[],
};

