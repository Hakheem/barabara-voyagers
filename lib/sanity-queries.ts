import { client } from "@/sanity/lib/client";
import type {
  Package,
  BlogPost,
  Destination,
  Testimonial,
  Safari,
} from "@/types";

/**
 * MOCK DATA FOR DEVELOPMENT (used when Sanity fetch fails)
 */
const MOCK_PACKAGES: Package[] = [
  {
    id: "1",
    title: "Classic Kenya Safari - Masai Mara & Amboseli",
    slug: "classic-kenya-safari",
    description: "<p>Journey through the heart of the Great Rift Valley...</p>",
    excerpt: "Experience the magic of Kenya with visits to Masai Mara and Amboseli.",
    destination: "Kenya",
    duration: "8 Days / 7 Nights",
    price: "4800",
    currency: "USD",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200",
    gallery: ["https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200"],
    highlights: ["Masai Mara National Reserve", "Big Five wildlife encounters"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Arrive at Jomo Kenyatta International Airport.",
        accommodation: "Nairobi Serena Hotel",
        meals: "Dinner",
      },
    ],
    includes: ["Airport transfers", "All park entrance fees"],
    excludes: ["International flights", "Visa fees"],
    bestTimeToVisit: "July to October",
    difficultyLevel: "Easy",
    groupSize: "Small groups", 
  },
];

/**
 * Helper to extract text from Portable Text blocks
 */
const extractText = (blocks: any): string => {
  if (typeof blocks === "string") return blocks;
  if (!Array.isArray(blocks)) return "";
  return blocks
    .filter((block: any) => block._type === "block")
    .map((block: any) => block.children?.map((child: any) => child.text).join(" "))
    .join("\n\n");
};

/**
 * Fetch all safari packages from Sanity
 */
export async function getPackages(): Promise<Package[]> {
  const query = `
    *[_type == "packages"] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      description,
      "destination": destination->name,
      duration,
      price,
      currency,
      "image": image.asset->url,
      "gallery": gallery[] { "url": asset->url },
      highlights[],
      itinerary[] {
        day,
        title,
        description
      },
      includes[],
      excludes[]
    }
  `;

  try {
    const packages = await client.fetch(query);
    return packages.map((pkg: any) => ({
      id: pkg._id,
      title: pkg.title,
      slug: pkg.slug || "",
      description: extractText(pkg.description),
      excerpt: pkg.excerpt || "",
      destination: pkg.destination || "Unknown",
      duration: pkg.duration || "",
      price: pkg.price?.toString() || "0",
      currency: pkg.currency || "USD",
      image: pkg.image || "/images/placeholder.jpg",
      gallery: pkg.gallery?.map((g: any) => g.url) || [],
      highlights: pkg.highlights || [],
      itinerary: pkg.itinerary || [],
      includes: pkg.includes || [],
      excludes: pkg.excludes || [],
    }));
  } catch (error) {
    console.error("Error fetching packages from Sanity:", error);
    return MOCK_PACKAGES;
  }
}

/**
 * Fetch all destinations from Sanity
 */
export async function getDestinations(): Promise<Destination[]> {
  const query = `
    *[_type == "destinations"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      country,
      region,
      description,
      "image": mainImage.asset->url,
      featured,
      tagline
    }
  `;

  try {
    const destinations = await client.fetch(query);
    return destinations.map((dest: any) => ({
      id: dest._id,
      name: dest.name,
      slug: dest.slug || "",
      description: extractText(dest.description),
      image: dest.image || "/images/placeholder.jpg",
      country: dest.country || "",
      region: dest.region || "",
      featured: dest.featured || false,
      tagline: dest.tagline || "",
    }));
  } catch (error) {
    console.error("Error fetching destinations from Sanity:", error);
    return [];
  }
}

/**
 * Fetch safaris by destination name (e.g., "Kenya")
 */
export async function getSafarisByDestination(destinationName: string): Promise<Safari[]> {
  const query = `
    *[_type == "safaris" && destination->name == $destinationName] | order(featured desc, _createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      description,
      "destinationName": destination->name,
      durationDays,
      durationNights,
      basePrice,
      currency,
      highlights[],
      itinerary[] {
        day,
        title,
        description
      },
      "images": images[] { "url": asset->url },
      featured,
      status
    }
  `;

  try {
    const safaris = await client.fetch(query, { destinationName });
    return safaris.map((safari: any) => ({
      id: safari._id,
      title: safari.title,
      slug: safari.slug || "",
      description: extractText(safari.description),
      shortDescription: safari.shortDescription || "",
      destination: safari.destinationName || "Unknown",
      duration: safari.durationDays || 0,
      durationNights: safari.durationNights || 0,
      basePrice: safari.basePrice || 0,
      currency: safari.currency || "USD",
      highlights: safari.highlights || [],
      itinerary: safari.itinerary || [],
      images: safari.images?.map((img: any) => img.url) || [],
      featured: safari.featured || false,
      status: safari.status || "DRAFT",
    })) as Safari[];
  } catch (error) {
    console.error(`Error fetching safaris for "${destinationName}":`, error);
    return [];
  }
}

/**
 * Fetch all testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  const query = `
    *[_type == "testimonials"] | order(tripDate desc) {
      _id,
      clientName,
      clientLocation,
      content,
      rating,
      featured,
      tripDate,
      "packageName": relatedPackage->title
    }
  `;

  try {
    const testimonials = await client.fetch(query);
    return testimonials.map((t: any) => ({
      id: t._id,
      clientName: t.clientName || "",
      clientLocation: t.clientLocation || "",
      content: t.content || "",
      rating: t.rating || 5,
      packageName: t.packageName || "Safari Experience",
      tripDate: t.tripDate ? new Date(t.tripDate).toLocaleDateString("en-US", { year: "numeric", month: "long" }) : "",
      featured: t.featured || false,
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}


/**
 * Fetch featured testimonials only
 */
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const testimonials = await getTestimonials();
  return testimonials.filter((t) => t.featured);
}
