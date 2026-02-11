// WordPress REST API Types

export interface WPImage {
  id: number;
  source_url: string;
  alt_text: string;
  title: { rendered: string };
  caption?: { rendered: string };
  media_details?: {
    width: number;
    height: number;
    sizes: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  acf?: any;
  _embedded?: {
    'wp:featuredmedia'?: WPImage[];
    author?: WPAuthor[];
  };
}

export interface WPAuthor {
  id: number;
  name: string;
  description: string;
  avatar_urls: {
    [key: string]: string;
  };
}

export interface WPCategory {
  id: number;
  count: number;
  name: string;
  slug: string;
  description: string;
}

export interface WPPackage {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  acf: {
    destination: string;
    duration: string;
    price: string;
    currency: string;
    highlights: string[];
    itinerary: Array<{
      day: number;
      title: string;
      description: string;
      accommodation?: string;
      meals?: string;
    }>;
    includes: string[];
    excludes: string[];
    best_time_to_visit: string;
    difficulty_level: string;
    group_size: string;
    gallery?: number[];
  };
  _embedded?: {
    'wp:featuredmedia'?: WPImage[];
  };
}

export interface WPGalleryAlbum {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  acf: {
    destination: string;
    images: number[];
  };
  _embedded?: {
    'wp:featuredmedia'?: WPImage[];
  };
}

export interface WPTestimonial {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    client_name: string;
    client_location: string;
    rating: number;
    package_name: string;
    trip_date: string;
    featured_review: boolean;
  };
}

export interface WPPage {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  acf?: any;
  _embedded?: {
    'wp:featuredmedia'?: WPImage[];
  };
}

// Custom Post Type Names
export const POST_TYPES = {
  POST: 'posts',
  PAGE: 'pages',
  PACKAGE: 'packages',
  GALLERY: 'gallery_albums',
  TESTIMONIAL: 'testimonials',
} as const;
