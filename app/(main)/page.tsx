import HeroSection from '@/components/general/HeroSection';
import TravelStyles from '@/components/general/TravelStyles';
import EditorialGrids from '@/components/general/EditorialGrids';
import FeaturedPackages from '@/components/general/FeaturedPackages';
import TestimonialSection from '@/components/general/TestimonialSection';
import WhyChooseUs from '@/components/general/WhyChooseUs';
import GrandCTA from '@/components/general/GrandCTA'; 
import BlogSnippet from '@/components/general/BlogSnippet';

import { getPackages, getFeaturedTestimonials, getBlogs } from '@/lib/sanity-queries';
import { PACKAGES, TESTIMONIALS, BLOG_POSTS } from '@/lib/constants/static-data';

export default async function Home() {
  // Fetch dynamic data from Sanity, fallback to static data
  const [packagesData, testimonialsData, blogsData] = await Promise.all([
    getPackages().catch(() => PACKAGES),
    getFeaturedTestimonials().catch(() => TESTIMONIALS),
    getBlogs().catch(() => BLOG_POSTS),
  ]);

  return (
    <main>
      <HeroSection />
      <TravelStyles />
      <EditorialGrids />
      <TestimonialSection testimonials={testimonialsData.length > 0 ? testimonialsData : TESTIMONIALS} />
      <FeaturedPackages packages={packagesData.slice(0, 3)} />
      <WhyChooseUs />
      <GrandCTA /> 
      <BlogSnippet posts={blogsData.slice(0, 3)} />
    </main>
  );
}

