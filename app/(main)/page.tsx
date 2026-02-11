import HeroSection from '@/components/general/HeroSection';
import TravelStyles from '@/components/general/TravelStyles';
import EditorialGrids from '@/components/general/EditorialGrids';
import FeaturedPackages from '@/components/general/FeaturedPackages';
import TestimonialSection from '@/components/general/TestimonialSection';
import WhyChooseUs from '@/components/general/WhyChooseUs';
import GrandCTA from '@/components/general/GrandCTA'; 
import BlogSnippet from '@/components/general/BlogSnippet';

import { PACKAGES, TESTIMONIALS, BLOG_POSTS } from '@/lib/constants/static-data';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TravelStyles />
      <EditorialGrids />
      <TestimonialSection testimonials={TESTIMONIALS} />
      <FeaturedPackages packages={PACKAGES} />
      <WhyChooseUs />
      <GrandCTA /> 
      <BlogSnippet posts={BLOG_POSTS} />
    </main>
  );
}

