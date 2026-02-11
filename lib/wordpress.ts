import axios from 'axios';
import type {
  WPPost,
  WPPackage,
  WPGalleryAlbum,
  WPTestimonial,
  WPPage,
  WPImage,
  Package,
  BlogPost,
  GalleryAlbum,
  Testimonial,
  GalleryImage,
} from '@/types';

const WP_API_URL = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-json/wp/v2';
const WP_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || '';

// Helper to create axios instance with auth
const createAuthClient = () => {
  const username = process.env.WORDPRESS_USERNAME;
  const password = process.env.WORDPRESS_APP_PASSWORD;

  if (!username || !password) {
    throw new Error('WordPress credentials not configured');
  }

  return axios.create({
    auth: {
      username,
      password,
    },
  });
};

// Transform WordPress post to BlogPost
export const transformPost = (wpPost: WPPost): BlogPost => {
  const featuredImage = wpPost._embedded?.['wp:featuredmedia']?.[0];

  return {
    id: wpPost.id.toString(),
    title: wpPost.title.rendered,
    slug: wpPost.slug,
    excerpt: wpPost.excerpt.rendered,
    content: wpPost.content.rendered,
    author: wpPost._embedded?.author?.[0]?.name || 'Anonymous',
    date: wpPost.date,
    image: featuredImage?.source_url || '/images/placeholder.jpg',
    categories: wpPost.categories.map(String),
    tags: wpPost.tags.map(String),
  };
};

// Transform WordPress package to Package
export const transformPackage = (wpPackage: WPPackage): Package => {
  const featuredImage = wpPackage._embedded?.['wp:featuredmedia']?.[0];

  return {
    id: wpPackage.id.toString(),
    title: wpPackage.title.rendered,
    slug: wpPackage.slug,
    description: wpPackage.content.rendered,
    excerpt: wpPackage.excerpt.rendered,
    destination: wpPackage.acf?.destination || '',
    duration: wpPackage.acf?.duration || '',
    price: wpPackage.acf?.price || '',
    currency: wpPackage.acf?.currency || 'USD',
    image: featuredImage?.source_url || '/images/placeholder.jpg',
    gallery: wpPackage.acf?.gallery || [],
    highlights: wpPackage.acf?.highlights || [],
    itinerary: wpPackage.acf?.itinerary || [],
    includes: wpPackage.acf?.includes || [],
    excludes: wpPackage.acf?.excludes || [],
    bestTimeToVisit: wpPackage.acf?.best_time_to_visit || '',
    difficultyLevel: wpPackage.acf?.difficulty_level || '',
    groupSize: wpPackage.acf?.group_size || '',
  };
};

// Transform WordPress gallery album to GalleryAlbum
export const transformGalleryAlbum = (wpAlbum: WPGalleryAlbum, images: WPImage[] = []): GalleryAlbum => {
  const featuredImage = wpAlbum._embedded?.['wp:featuredmedia']?.[0];

  return {
    id: wpAlbum.id.toString(),
    title: wpAlbum.title.rendered,
    slug: wpAlbum.slug,
    description: wpAlbum.content.rendered,
    destination: wpAlbum.acf?.destination || '',
    coverImage: featuredImage?.source_url || '/images/placeholder.jpg',
    images: images.map((img): GalleryImage => ({
      id: img.id.toString(),
      url: img.source_url,
      alt: img.alt_text,
      caption: img.caption?.rendered,
      width: img.media_details?.width || 1200,
      height: img.media_details?.height || 800,
    })),
  };
};

// Transform WordPress testimonial to Testimonial
export const transformTestimonial = (wpTestimonial: WPTestimonial): Testimonial => {
  return {
    id: wpTestimonial.id.toString(),
    clientName: wpTestimonial.acf?.client_name || '',
    clientLocation: wpTestimonial.acf?.client_location || '',
    content: wpTestimonial.content.rendered,
    rating: wpTestimonial.acf?.rating || 5,
    packageName: wpTestimonial.acf?.package_name || '',
    tripDate: wpTestimonial.acf?.trip_date || '',
    featured: wpTestimonial.acf?.featured_review || false,
  };
};

// Get all posts
export async function getPosts(params: {
  per_page?: number;
  page?: number;
  categories?: string;
  search?: string;
} = {}): Promise<BlogPost[]> {
  try {
    const response = await axios.get(`${WP_API_URL}/posts`, {
      params: {
        _embed: true,
        ...params,
      },
    });
    return response.data.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await axios.get(`${WP_API_URL}/posts`, {
      params: {
        slug,
        _embed: true,
      },
    });
    if (response.data.length > 0) {
      return transformPost(response.data[0]);
    }
    return null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Get all packages
export async function getPackages(params: {
  per_page?: number;
  page?: number;
  destination?: string;
} = {}): Promise<Package[]> {
  try {
    const response = await axios.get(`${WP_BASE_URL}/wp-json/wp/v2/packages`, {
      params: {
        _embed: true,
        ...params,
      },
    });
    return response.data.map(transformPackage);
  } catch (error) {
    console.error('Error fetching packages:', error);
    // Return mock data if WordPress is not set up yet
    return getMockPackages();
  }
}

// Get single package by slug
export async function getPackageBySlug(slug: string): Promise<Package | null> {
  try {
    const response = await axios.get(`${WP_BASE_URL}/wp-json/wp/v2/packages`, {
      params: {
        slug,
        _embed: true,
      },
    });
    if (response.data.length > 0) {
      return transformPackage(response.data[0]);
    }
    return null;
  } catch (error) {
    console.error('Error fetching package:', error);
    const mockPackages = getMockPackages();
    return mockPackages.find(p => p.slug === slug) || null;
  }
}

// Get gallery albums
export async function getGalleryAlbums(params: {
  per_page?: number;
  page?: number;
} = {}): Promise<GalleryAlbum[]> {
  try {
    const response = await axios.get(`${WP_BASE_URL}/wp-json/wp/v2/gallery_albums`, {
      params: {
        _embed: true,
        ...params,
      },
    });

    const albums = await Promise.all(
      response.data.map(async (album: WPGalleryAlbum) => {
        const imageIds = album.acf?.images || [];
        const images = await Promise.all(
          imageIds.map((id: number) => getMediaById(id))
        );
        return transformGalleryAlbum(album, images.filter(Boolean) as WPImage[]);
      })
    );

    return albums;
  } catch (error) {
    console.error('Error fetching gallery albums:', error);
    return getMockGalleryAlbums();
  }
}

// Get testimonials
export async function getTestimonials(params: {
  per_page?: number;
  featured?: boolean;
} = {}): Promise<Testimonial[]> {
  try {
    const response = await axios.get(`${WP_BASE_URL}/wp-json/wp/v2/testimonials`, {
      params: {
        per_page: params.per_page || 100,
      },
    });

    let testimonials = response.data.map(transformTestimonial);

    if (params.featured) {
      testimonials = testimonials.filter(t => t.featured);
    }

    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return getMockTestimonials();
  }
}

// Get page by slug
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const response = await axios.get(`${WP_API_URL}/pages`, {
      params: {
        slug,
        _embed: true,
      },
    });
    if (response.data.length > 0) {
      return response.data[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

// Get media by ID
export async function getMediaById(id: number): Promise<WPImage | null> {
  try {
    const response = await axios.get(`${WP_API_URL}/media/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching media:', error);
    return null;
  }
}

// Admin API functions (require authentication)

export async function createPost(data: Partial<WPPost>): Promise<WPPost> {
  const client = createAuthClient();
  const response = await client.post(`${WP_API_URL}/posts`, data);
  return response.data;
}

export async function updatePost(id: number, data: Partial<WPPost>): Promise<WPPost> {
  const client = createAuthClient();
  const response = await client.post(`${WP_API_URL}/posts/${id}`, data);
  return response.data;
}

export async function deletePost(id: number): Promise<void> {
  const client = createAuthClient();
  await client.delete(`${WP_API_URL}/posts/${id}`);
}

export async function createPackage(data: Partial<WPPackage>): Promise<WPPackage> {
  const client = createAuthClient();
  const response = await client.post(`${WP_BASE_URL}/wp-json/wp/v2/packages`, data);
  return response.data;
}

export async function updatePackage(id: number, data: Partial<WPPackage>): Promise<WPPackage> {
  const client = createAuthClient();
  const response = await client.post(`${WP_BASE_URL}/wp-json/wp/v2/packages/${id}`, data);
  return response.data;
}

export async function deletePackage(id: number): Promise<void> {
  const client = createAuthClient();
  await client.delete(`${WP_BASE_URL}/wp-json/wp/v2/packages/${id}`);
}

// Mock data for development (when WordPress is not set up)
function getMockPackages(): Package[] {
  return [
    {
      id: '1',
      title: 'Tanzania Safari Adventure',
      slug: 'tanzania-safari-adventure',
      description: '<p>Experience the ultimate safari adventure in Tanzania...</p>',
      excerpt: 'Experience the ultimate safari adventure in Tanzania',
      destination: 'Tanzania',
      duration: '10 Days / 9 Nights',
      price: '5,500',
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      gallery: [],
      highlights: [
        'Serengeti National Park',
        'Ngorongoro Crater',
        'Tarangire National Park',
        'Big Five wildlife viewing',
      ],
      itinerary: [],
      includes: ['Accommodation', 'Meals', 'Game drives', 'Park fees'],
      excludes: ['International flights', 'Visa fees', 'Travel insurance'],
      bestTimeToVisit: 'June to October',
      difficultyLevel: 'Easy',
      groupSize: '2-6 people',
    },
    {
      id: '2',
      title: 'Kenya Luxury Safari',
      slug: 'kenya-luxury-safari',
      description: '<p>Discover the beauty of Kenya on this luxury safari...</p>',
      excerpt: 'Discover the beauty of Kenya on this luxury safari',
      destination: 'Kenya',
      duration: '8 Days / 7 Nights',
      price: '4,800',
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
      gallery: [],
      highlights: [
        'Masai Mara National Reserve',
        'Amboseli National Park',
        'Lake Nakuru',
        'Witness the Great Migration',
      ],
      itinerary: [],
      includes: ['Luxury lodges', 'All meals', 'Game drives', 'Park fees'],
      excludes: ['International flights', 'Visa fees', 'Personal expenses'],
      bestTimeToVisit: 'July to September',
      difficultyLevel: 'Easy',
      groupSize: '2-8 people',
    },
  ];
}

function getMockGalleryAlbums(): GalleryAlbum[] {
  return [
    {
      id: '1',
      title: 'Serengeti Wildlife',
      slug: 'serengeti-wildlife',
      description: 'Amazing wildlife photography from the Serengeti',
      destination: 'Tanzania',
      coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      images: [
        {
          id: '1',
          url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
          alt: 'Lions in Serengeti',
          width: 1200,
          height: 800,
        },
      ],
    },
  ];
}

function getMockTestimonials(): Testimonial[] {
  return [
    {
      id: '1',
      clientName: 'John & Sarah Smith',
      clientLocation: 'New York, USA',
      content: '<p>Our safari with Barabara Voyagers was absolutely incredible! The attention to detail and personalized service exceeded our expectations.</p>',
      rating: 5,
      packageName: 'Tanzania Safari Adventure',
      tripDate: '2024-08-15',
      featured: true,
    },
  ];
}
