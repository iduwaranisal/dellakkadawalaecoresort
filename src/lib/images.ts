export interface ImageItem {
  id: string;
  src: string;
  alt: string;
  category: "all" | "resort" | "river" | "rooms" | "dining";
  caption?: string;
  width?: number;
  height?: number;
}

export const heroImages: ImageItem[] = [
  {
    id: "hero-1",
    src: "/images/hero/hero1.jpg",
    alt: "Aerial drone view of Dellakkadawala Eco Resort nestled beside the winding river and misty green rainforest",
    category: "resort",
    caption: "Aerial view of the resort and winding river",
  },
  {
    id: "hero-2",
    src: "/images/hero/hero2.jpg",
    alt: "Earthy clay cottage at Dellakkadawala Eco Resort with thatched porch posts and rainforest mountains",
    category: "resort",
    caption: "Traditional clay cottage framed by mist-covered hills",
  },
  {
    id: "hero-3",
    src: "/images/hero/hero3.jpg",
    alt: "Blue kayaks floating on the calm river surrounded by lush rainforest trees and morning mist",
    category: "river",
    caption: "Kayaks resting on the peaceful morning river",
  },
  {
    id: "hero-4",
    src: "/images/hero/hero4.jpg",
    alt: "Two-story resort house viewed from the riverbank with stone steps, kayaks, and rising hill mist",
    category: "resort",
    caption: "Two-story riverfront building and stone bathing steps",
  },
];

export const galleryImages: ImageItem[] = [
  {
    id: "gal-1",
    src: "/images/gallery/img 1.jpg",
    alt: "Warm evening dining room with floor-to-ceiling glass wall and red curtains",
    category: "dining",
    caption: "Glass-front dining room with warm ambient lighting",
  },
  {
    id: "gal-2",
    src: "/images/gallery/img 2.jpg",
    alt: "Clean double bedroom with wooden bed frame and attached bathroom",
    category: "rooms",
    caption: "Cozy private bedroom with attached washroom",
  },
  {
    id: "gal-3",
    src: "/images/gallery/img 3.jpg",
    alt: "Upper wooden balcony with warm lanterns looking over tropical palms and mountains at dusk",
    category: "resort",
    caption: "Evening balcony view across lush palms and hills",
  },
  {
    id: "gal-4",
    src: "/images/gallery/img 4.jpg",
    alt: "Resort grounds at dusk with eco cottage, parked van, and blue kayak",
    category: "resort",
    caption: "Resort parking area and cottage at dusk",
  },
  {
    id: "gal-5",
    src: "/images/gallery/img 5.jpg",
    alt: "Natural clear river stream flowing over rocks through pristine Sinharaja rainforest",
    category: "river",
    caption: "Natural fresh river pool surrounded by forest trees",
  },
  {
    id: "gal-6",
    src: "/images/gallery/img 6.jpg",
    alt: "Evening barbecue grill with glowing fire coals on the open dining patio",
    category: "dining",
    caption: "Barbecue grill fired up for an evening gathering",
  },
  {
    id: "gal-7",
    src: "/images/gallery/img 7.jpg",
    alt: "Spacious group bedroom with multiple comfortable beds and ceiling fan",
    category: "rooms",
    caption: "Group and family bedroom with multiple beds",
  },
  {
    id: "gal-9",
    src: "/images/gallery/img 9.jpg",
    alt: "Night reflection of the illuminated two-story resort and riverbank stairs on the still water",
    category: "resort",
    caption: "Night reflection of the resort building on the river",
  },
  {
    id: "gal-10",
    src: "/images/gallery/img 10.jpg",
    alt: "Clean private bedroom with tiled floor, modern wall fan, and window",
    category: "rooms",
    caption: "Simple guest room with clean tiled floors",
  },
  {
    id: "gal-11",
    src: "/images/gallery/img 11.jpg",
    alt: "Two-story resort building with wooden balcony overlooking green rainforest hills",
    category: "resort",
    caption: "Two-story lodge surrounded by tea hills and greenery",
  },
  {
    id: "gal-12",
    src: "/images/gallery/img 12.jpg",
    alt: "Double bedroom with neat patterned bedding and wooden towel rack",
    category: "rooms",
    caption: "Neat double room for restful nights",
  },
  {
    id: "gal-13",
    src: "/images/gallery/img 13.jpg",
    alt: "Modern tiled bathroom with shower, washbasin, and hygienic amenities",
    category: "rooms",
    caption: "Clean tiled ensuite bathroom with shower",
  },
  {
    id: "gal-15",
    src: "/images/gallery/img 15.jpg",
    alt: "Large family suite and lounge area with sofas and multiple beds for group stays",
    category: "rooms",
    caption: "Spacious living suite with beds and sofas",
  },
  {
    id: "gal-16",
    src: "/images/gallery/img 16.jpg",
    alt: "Evening gathering space with long wooden dining tables and ambient lighting for group meals",
    category: "dining",
    caption: "Group dining hall with long wooden tables",
  },
  {
    id: "gal-17",
    src: "/images/gallery/img 17.jpg",
    alt: "Suite room featuring leather armchairs, clothes stand, mirror, and double bed",
    category: "rooms",
    caption: "Comfortable suite with armchairs and wooden furnishings",
  },
  {
    id: "gal-18",
    src: "/images/gallery/img 18.jpg",
    alt: "Open-air covered dining patio under thatched ceiling with wooden bench seating",
    category: "dining",
    caption: "Thatched-roof open dining patio with wooden benches",
  },
  {
    id: "gal-21",
    src: "/images/gallery/img 21.jpg",
    alt: "Point of view from a blue kayak gliding along the peaceful river surrounded by greenery",
    category: "river",
    caption: "Paddling a blue kayak along the serene river",
  },
  {
    id: "gal-23",
    src: "/images/gallery/img 23.jpg",
    alt: "Scenic rocky riverbed with fresh running water beneath lush green rainforest branches",
    category: "river",
    caption: "Sunlit river stream running over smooth river boulders",
  },
  {
    id: "gal-24",
    src: "/images/gallery/img 24.jpg",
    alt: "Cozy bedroom with wood-panel ceiling and wide window looking out into the trees",
    category: "rooms",
    caption: "Forest-view guest bedroom with wood ceiling accents",
  },
  {
    id: "gal-25",
    src: "/images/gallery/img 25.jpg",
    alt: "Private ensuite bathroom with overhead shower and scenic tiled walls",
    category: "rooms",
    caption: "Private bathroom with fresh water shower",
  },
  {
    id: "gal-26",
    src: "/images/gallery/img 26.jpg",
    alt: "Dressing area and vanity mirror with natural light and scenic forest views",
    category: "rooms",
    caption: "Dressing corner with forest outlook",
  },
];

export const experienceThumbnails = [
  {
    title: "Kayaking",
    image: "/images/hero/hero3.jpg",
    alt: "Kayaking on misty river",
    targetId: "experiences",
  },
  {
    title: "River Bathing",
    image: "/images/gallery/img 5.jpg",
    alt: "Natural river stream",
    targetId: "experiences",
  },
  {
    title: "Day Out",
    image: "/images/gallery/img 18.jpg",
    alt: "Covered dining patio",
    targetId: "day-outs",
  },
];

