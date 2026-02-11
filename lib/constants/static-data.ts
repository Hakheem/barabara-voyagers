import { Package, BlogPost, Testimonial } from '@/types';

export const PACKAGES: Package[] = [
  {
    id: "1",
    title: "The Great Migration Safari",
    slug: "great-migration-safari",
    description: "Experience the world's greatest wildlife spectacle.",
    excerpt: "Witness the thundering hooves of the wildebeest migration across the golden plains of the Serengeti.",
    destination: "Tanzania & Kenya",
    duration: "10 Days",
    price: "4,500",
    currency: "USD",
    image: "/migration.jpg",
    gallery: [],
    highlights: ["River crossings", "Big Five sightings"],
    itinerary: [],
    includes: [],
    excludes: [],
    bestTimeToVisit: "July - October",
    difficultyLevel: "Easy",
    groupSize: "Max 6"
  },
  {
    id: "2",
    title: "Amboseli Elephant Trail",
    slug: "amboseli-elephant-trail",
    description: "Walk with the giants of Africa.",
    excerpt: "Experience the shadow of Kilimanjaro while watching the iconic red elephants of Amboseli.",
    destination: "Kenya",
    duration: "7 Days",
    price: "3,200",
    currency: "USD",
    image: "/hero.webp",
    gallery: [],
    highlights: ["Kilimanjaro views", "Large elephant herds"],
    itinerary: [],
    includes: [],
    excludes: [],
    bestTimeToVisit: "Year round",
    difficultyLevel: "Easy",
    groupSize: "Max 4"
  },
  {
    id: "3",
    title: "Gombe Primate Expedition",
    slug: "gombe-primate-expedition",
    description: "Follow the footsteps of Jane Goodall.",
    excerpt: "Discover the intricate lives of the chimpanzees in the lush forests of Gombe.",
    destination: "Tanzania",
    duration: "12 Days",
    price: "5,800",
    currency: "USD",
    image: "/gombe.webp",
    gallery: [],
    highlights: ["Chimpanzee trekking", "Lakeside relaxation"],
    itinerary: [],
    includes: [],
    excludes: [],
    bestTimeToVisit: "May - October",
    difficultyLevel: "Moderate",
    groupSize: "Private"
  },
  {
    id: "4",
    title: "The Mara Luxury Escape",
    slug: "mara-luxury-escape",
    description: "Pure opulence in the wild.",
    excerpt: "A sophisticated blend of high-end canvas living and raw African wilderness.",
    destination: "Kenya",
    duration: "8 Days",
    price: "6,400",
    currency: "USD",
    image: "/mara_resort.webp",
    gallery: [],
    highlights: ["Hot air balloon safari", "Private chef"],
    itinerary: [],
    includes: [],
    excludes: [],
    bestTimeToVisit: "Year round",
    difficultyLevel: "Easy",
    groupSize: "Private"
  },
  {
    id: "5",
    title: "Samburu Northern Frontier",
    slug: "samburu-frontier",
    description: "The rugged north.",
    excerpt: "Explore the rugged beauty of Samburu, home to the 'Special Five'.",
    destination: "Kenya",
    duration: "9 Days",
    price: "3,950",
    currency: "USD",
    image: "/samburu.jpg",
    gallery: [],
    highlights: ["Unique species", "Cultural visits"],
    itinerary: [],
    includes: [],
    excludes: [],
    bestTimeToVisit: "December - March",
    difficultyLevel: "Easy",
    groupSize: "Max 6"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    clientName: "Eleanor Rigby",
    clientLocation: "London, UK",
    content: "Barabara Voyagers treat their guests like long-lost family. An experience that transcends mere travel.",
    rating: 4.8,
    packageName: "Serengeti Soul Safari",
    tripDate: "October 2025",
    featured: true
  },
  {
    id: "t2",
    clientName: "Julian Casablancas",
    clientLocation: "New York, USA",
    content: "The attention to detail was staggering. From the private sundowners to the expert tracking.",
    rating: 5,
    packageName: "The Great Migration",
    tripDate: "August 2025",
    featured: true
  },
  {
    id: "t3",
    clientName: "Sarah Jenkins",
    clientLocation: "Sydney, AU",
    content: "From the lodges to the wildlife sightings, everything was flawless. Our guides were walking encyclopedias.",
    rating: 5,
    packageName: "Amboseli Trail",
    tripDate: "September 2025",
    featured: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "The Great Migration: A Spectacle of Life",
    slug: "migration-spectacle",
    excerpt: "Witnessing the thundering hooves across the Mara River is an experience that defies description.",
    content: "",
    author: "Barabara Team",
    date: "Jan 12, 2026",
    image: "/what-to-pack.webp",
    categories: ["Wilderness", "Photography"],
    tags: ["Migration", "Kenya"]
  },
  {
    id: "b2",
    title: "Ancestral Wisdom: The Maasai Way",
    slug: "maasai-wisdom",
    excerpt: "Beyond the red shukas lies a culture deeply rooted in the rhythm of the African soil.",
    content: "",
    author: "Barabara Team",
    date: "Jan 05, 2026",
    image: "/tips.webp",
    categories: ["Culture", "Lifestyle"],
    tags: ["Maasai", "History"]
  },
  {
    id: "b3",
    title: "The Silent Giants of Amboseli",
    slug: "silent-giants",
    excerpt: "In the shadow of Kilimanjaro, the great tuskers roam. Discover why this sanctuary is vital.",
    content: "",
    author: "Barabara Team",
    date: "Dec 28, 2025",
    image: "/canooeing.webp",
    categories: ["Conservation"],
    tags: ["Elephants", "Amboseli"]
  }
];
