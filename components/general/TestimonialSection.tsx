'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Container from '@/components/ui/Container';
import { Testimonial } from '@/types';

// Swiper styles
import 'swiper/css';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <section className="bg-white overflow-hidden">
      {/* 1. THE LEGACY QUOTE */}
      <div className="py-24 bg-[#f8f5f0] border-y border-amber-100/50">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="mx-auto mb-8 text-amber-600/20" size={50} strokeWidth={1} />
            <h3 className="title italic text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-8">
              "They treat their guests like long-lost family returning to their ancestral home."
            </h3>
            <span className="label-luxury text-amber-700 tracking-[0.3em] block uppercase text-xs">
              The Global Voyager Magazine
            </span>
          </motion.div>
        </Container>
      </div>

      {/* 2. THE CLIENT STORIES SLIDER */}
      <div className="py-24 bg-white">
        <Container className="!pr-0 md:!pr-4"> {/* Removes padding on right for mobile peeking */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2} // The "Peeking" magic for mobile
            grabCursor={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              // Desktop: show 3 fully
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              // Tablet: show 2.2 for peeking
              768: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              }
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="flex flex-col h-full group pr-4 md:pr-0">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-200'}`} 
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="text-gray-700 text-lg font-light leading-relaxed mb-8 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </div>

                  {/* Author Info */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <p className="title text-lg text-gray-900 mb-1">{testimonial.clientName}</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-widest text-amber-700 font-medium">
                        {testimonial.packageName}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400">
                        {testimonial.clientLocation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </section>
  );
};

export default TestimonialSection;

