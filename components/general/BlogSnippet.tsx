'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { BlogPost } from '@/types';

// Swiper styles
import 'swiper/css'; 

interface BlogSnippetProps {
  posts: BlogPost[];
}

const BlogSnippet = ({ posts }: BlogSnippetProps) => {
  return (
    <section className="py-24 bg-white">
      <Container className="!pr-0 md:!pr-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pr-4">
          <div className="max-w-2xl">
            <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-medium block mb-2">The Journal</span>
            <h2 className="title text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
              Stories from the Savannah
            </h2>
          </div>
          <div className="hidden md:block">
            <Link href="/journal">
              <Button variant="ghost" className="group text-gray-900 hover:text-amber-700 p-0">
                View All Stories <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Blog Slider / Grid */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24} // Reduced gap (approx gap-6)
          slidesPerView={1.15} // Mobile Peeking
          grabCursor={true}
          breakpoints={{
            // Desktop: 3 columns, no peeking
            1024: {
              slidesPerView: 3,
              spaceBetween: 32, // gap-8
            },
            // Tablet: 2.2 columns peeking
            768: {
              slidesPerView: 2.2,
              spaceBetween: 28,
            }
          }}
          className="blog-swiper"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group pr-4 md:pr-0"
              >
                <Link href={`/journal/${post.slug}`} className="block relative aspect-[3/2] overflow-hidden mb-6">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] label-luxury text-gray-900 uppercase tracking-widest">
                      {post.categories[0]}
                    </span>
                  </div>
                </Link>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="title text-2xl group-hover:text-amber-700 transition-colors duration-300 line-clamp-2">
                    <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 font-light leading-relaxed line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/journal/${post.slug}`} 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-gray-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-all"
                  >
                    Read Story
                  </Link>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile View All */}
        <div className="mt-10 md:hidden pr-4">
          <Link href="/journal">
            <Button variant="outline" className="w-full px-4">View All Stories</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogSnippet;

