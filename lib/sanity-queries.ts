// import { client } from "@/sanity/lib/client";
import type { Package } from "@/types";

/**
 * MOCK DATA FOR DEVELOPMENT
 * Remove this section and uncomment Sanity code when ready to connect to CMS
 */
const MOCK_PACKAGES: Package[] = [
  {
    id: '1',
    title: 'Classic Kenya Safari - Masai Mara & Amboseli',
    slug: 'classic-kenya-safari',
    description: '<p>Journey through the heart of the Great Rift Valley. This expedition combines the elephant-rich plains of Amboseli with the predator-dense savannahs of the Masai Mara for the ultimate introduction to East African wildlife.</p><p>Experience breathtaking landscapes, encounter the Big Five, and immerse yourself in authentic Maasai culture. Our expert guides will ensure you witness the very best of Kenya\'s incredible biodiversity.</p>',
    excerpt: 'Experience the magic of Kenya with visits to Masai Mara and Amboseli National Parks. Witness the Big Five and stunning landscapes.',
    destination: 'Kenya',
    duration: '8 Days / 7 Nights',
    price: '4800',
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
    gallery: [ 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200' ,
       'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    ],
    highlights: [
      'Masai Mara National Reserve game drives',
      'Amboseli National Park elephant viewing',
      'Lake Nakuru flamingo sightings',
      'Big Five wildlife encounters',
      'Cultural visit to Maasai village',
      'Professional safari guide throughout'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nairobi',
        description: 'Arrive at Jomo Kenyatta International Airport where you\'ll be met by our representative. Transfer to your hotel for an overnight stay and safari briefing.',
        accommodation: 'Nairobi Serena Hotel',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Nairobi to Amboseli National Park',
        description: 'After breakfast, depart for Amboseli National Park. Arrive in time for lunch and an afternoon game drive with views of Mount Kilimanjaro.',
        accommodation: 'Amboseli Serena Safari Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Full Day in Amboseli',
        description: 'Enjoy morning and afternoon game drives in Amboseli, famous for its large elephant herds and stunning views of Kilimanjaro.',
        accommodation: 'Amboseli Serena Safari Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Amboseli to Lake Nakuru',
        description: 'Travel to Lake Nakuru National Park, home to millions of flamingos and endangered rhinos. Afternoon game drive.',
        accommodation: 'Lake Nakuru Sopa Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Lake Nakuru to Masai Mara',
        description: 'Drive to the legendary Masai Mara National Reserve. Evening game drive in search of the Big Five.',
        accommodation: 'Mara Serena Safari Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Full Day Masai Mara',
        description: 'Full day of game drives in the Mara. Optional hot air balloon safari available (additional cost).',
        accommodation: 'Mara Serena Safari Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Masai Mara Exploration',
        description: 'Another full day exploring the Mara ecosystem. Visit a traditional Maasai village in the afternoon.',
        accommodation: 'Mara Serena Safari Lodge',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 8,
        title: 'Return to Nairobi',
        description: 'Morning game drive, then drive back to Nairobi. Day room at hotel before evening departure.',
        accommodation: 'Day room at Nairobi Serena Hotel',
        meals: 'Breakfast, Lunch'
      }
    ],
    includes: [
      'Airport transfers',
      'All accommodation as specified',
      'All meals as indicated',
      'All park entrance fees',
      'Professional English-speaking driver-guide',
      '4x4 safari vehicle with pop-up roof',
      'Game drives as per itinerary',
      'Bottled water during game drives',
      'Emergency evacuation insurance'
    ],
    excludes: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Optional activities (hot air balloon safari)',
      'Drinks at lodges',
      'Items not mentioned in inclusions'
    ],
    bestTimeToVisit: 'July to October (Great Migration), January to March (Green season)',
    difficultyLevel: 'Easy - suitable for all fitness levels',
    groupSize: 'Small groups (Max 6 people per vehicle)'
  },
  {
    id: '2',
    title: 'Kenya & Zanzibar Beach Escape',
    slug: 'kenya-zanzibar-beach',
    description: '<p>The perfect blend of adventure and relaxation. Start with heart-pounding game drives in Kenya\'s premier reserves before flying to the spice island of Zanzibar for white sands and turquoise waters.</p><p>This carefully curated journey offers the best of both worlds - thrilling wildlife encounters followed by tropical beach relaxation and cultural exploration in historic Stone Town.</p>',
    excerpt: 'Combine Kenya safari adventure with the pristine beaches of Zanzibar for the ultimate African experience.',
    destination: 'Kenya & Tanzania',
    duration: '12 Days / 11 Nights',
    price: '6500',
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    gallery: [],
    highlights: [
      'Masai Mara wildlife safaris',
      'Great Migration viewing (seasonal)',
      'Zanzibar beach resort relaxation',
      'Stone Town cultural tour',
      'Spice plantation visit',
      'Snorkeling in crystal-clear waters'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nairobi',
        description: 'Meet and greet at airport, transfer to hotel.',
        accommodation: 'Nairobi hotel',
        meals: 'Dinner'
      }
    ],
    includes: [
      'All flights (Nairobi-Zanzibar)',
      'All accommodation',
      'Safari activities',
      'Beach resort stay',
      'Most meals'
    ],
    excludes: [
      'International flights',
      'Visa fees',
      'Travel insurance'
    ],
    bestTimeToVisit: 'June to October, December to February',
    difficultyLevel: 'Easy',
    groupSize: 'Flexible'
  },
  {
    id: '3',
    title: 'Luxury Kenya Private Safari',
    slug: 'luxury-kenya-private',
    description: '<p>An exclusive, tailor-made journey featuring Kenya\'s most prestigious boutique lodges. Enjoy private 4x4 vehicles, personal guides, and secluded conservancies away from the main tourist tracks.</p><p>This is safari at its finest - personalized service, gourmet cuisine, and intimate wildlife encounters in some of Africa\'s most exclusive locations.</p>',
    excerpt: 'Experience Kenya in ultimate luxury with private vehicles, exclusive lodges, and personalized service.',
    destination: 'Kenya',
    duration: '10 Days / 9 Nights',
    price: '7800',
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200',
    gallery: [],
    highlights: [
      'Private game drives with dedicated guide',
      'Exclusive luxury lodges and camps',
      'Hot air balloon safari over the Mara',
      'Fully personalized itinerary',
      'Bush dinners and sundowners',
      'Night game drives in private conservancies'
    ],
    itinerary: [],
    includes: [
      'Private safari vehicle',
      'Luxury accommodation',
      'All meals and premium drinks',
      'Hot air balloon safari',
      'Private guide'
    ],
    excludes: [
      'International flights',
      'Visa fees',
      'Personal expenses'
    ],
    bestTimeToVisit: 'Year-round',
    difficultyLevel: 'Easy - Luxury comfort',
    groupSize: 'Private (2-6 people)'
  }
];

/**
 * Fetch all safari packages from Sanity
 * CURRENTLY USING MOCK DATA - Uncomment Sanity code when ready
 */
export async function getPackages(): Promise<Package[]> {
  // Return mock data for development
  return MOCK_PACKAGES;

  /* UNCOMMENT WHEN SANITY IS READY
  const query = `
    *[_type == "package"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      excerpt,
      destination,
      duration,
      price,
      currency,
      "image": mainImage.asset->url,
      gallery[] {
        "asset": {
          "url": asset->url
        },
        alt
      },
      highlights[],
      itinerary[] {
        day,
        title,
        description,
        accommodation,
        meals
      },
      includes[],
      excludes[],
      bestTimeToVisit,
      difficultyLevel,
      groupSize
    }
  `;

  try {
    const packages = await client.fetch(query);
    return packages.map((pkg: any) => ({
      id: pkg._id,
      title: pkg.title,
      slug: pkg.slug.current,
      description: pkg.description,
      excerpt: pkg.excerpt,
      destination: pkg.destination,
      duration: pkg.duration,
      price: pkg.price,
      currency: pkg.currency || "USD",
      image: pkg.image || "/images/placeholder.jpg",
      gallery: pkg.gallery || [],
      highlights: pkg.highlights || [],
      itinerary: pkg.itinerary || [],
      includes: pkg.includes || [],
      excludes: pkg.excludes || [],
      bestTimeToVisit: pkg.bestTimeToVisit,
      difficultyLevel: pkg.difficultyLevel,
      groupSize: pkg.groupSize,
    }));
  } catch (error) {
    console.error("Error fetching packages from Sanity:", error);
    return [];
  }
  */
}

/**
 * Fetch a single package by slug from Sanity
 * CURRENTLY USING MOCK DATA - Uncomment Sanity code when ready
 */
export async function getPackageBySlug(slug: string): Promise<Package | null> {
  // Return mock data for development
  const pkg = MOCK_PACKAGES.find(p => p.slug === slug);
  return pkg || null;

  /* UNCOMMENT WHEN SANITY IS READY
  const query = `
    *[_type == "package" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      excerpt,
      destination,
      duration,
      price,
      currency,
      "image": mainImage.asset->url,
      gallery[] {
        "asset": {
          "url": asset->url
        },
        alt
      },
      highlights[],
      itinerary[] {
        day,
        title,
        description,
        accommodation,
        meals
      },
      includes[],
      excludes[],
      bestTimeToVisit,
      difficultyLevel,
      groupSize
    }
  `;

  try {
    const pkg = await client.fetch(query, { slug });

    if (!pkg) {
      return null;
    }

    return {
      id: pkg._id,
      title: pkg.title,
      slug: pkg.slug.current,
      description: pkg.description,
      excerpt: pkg.excerpt,
      destination: pkg.destination,
      duration: pkg.duration,
      price: pkg.price,
      currency: pkg.currency || "USD",
      image: pkg.image || "/images/placeholder.jpg",
      gallery: pkg.gallery || [],
      highlights: pkg.highlights || [],
      itinerary: pkg.itinerary || [],
      includes: pkg.includes || [],
      excludes: pkg.excludes || [],
      bestTimeToVisit: pkg.bestTimeToVisit,
      difficultyLevel: pkg.difficultyLevel,
      groupSize: pkg.groupSize,
    };
  } catch (error) {
    console.error(`Error fetching package "${slug}" from Sanity:`, error);
    return null;
  }
  */
}

