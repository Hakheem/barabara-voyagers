// components/general/DestinationSwitcher.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Globe, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

interface Destination {
  name: string;
  slug: string;
  region?: string;
  tagline?: string;
}

interface DestinationSwitcherProps {
  currentDestination?: string;
  title?: string;
  subtitle?: string;
}

export default function DestinationSwitcher({ 
  currentDestination, 
  title = "Continue Exploring", 
  subtitle = "Discover Africa's Finest"
}: DestinationSwitcherProps) {
  
  const destinations: Destination[] = [
    { name: 'Kenya', slug: 'kenya', region: 'East Africa', tagline: 'The Safari Capital' },
    { name: 'Tanzania', slug: 'tanzania', region: 'East Africa', tagline: 'Serengeti Wonders' },
    { name: 'Uganda', slug: 'uganda', region: 'East Africa', tagline: 'Gorilla Kingdom' },
    { name: 'Rwanda', slug: 'rwanda', region: 'East Africa', tagline: 'Land of a Thousand Hills' },
    { name: 'Botswana', slug: 'botswana', region: 'Southern Africa', tagline: 'Okavango Delta' },
    { name: 'Namibia', slug: 'namibia', region: 'Southern Africa', tagline: 'Desert Landscapes' },
    { name: 'South Africa', slug: 'south-africa', region: 'Southern Africa', tagline: 'Rainbow Nation' },
    { name: 'Zimbabwe', slug: 'zimbabwe', region: 'Southern Africa', tagline: 'Victoria Falls' },
    { name: 'Zambia', slug: 'zambia', region: 'Southern Africa', tagline: 'The Real Africa' },
    { name: 'Morocco', slug: 'morocco', region: 'North Africa', tagline: 'Magical Souks' },
    { name: 'Multiple Countries', slug: 'multi-country', region: 'Pan-Africa', tagline: 'Grand Expedition' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  // Filter out current destination if provided
  const availableDestinations = currentDestination 
    ? destinations.filter(d => d.slug !== currentDestination)
    : destinations;

  // Background gradients based on region
  const getRegionGradient = (region: string = '') => {
    switch (region) {
      case 'East Africa':
        return 'from-emerald-600/10 to-emerald-900/5';
      case 'Southern Africa':
        return 'from-amber-600/10 to-amber-900/5';
      case 'North Africa':
        return 'from-sky-600/10 to-sky-900/5';
      default:
        return 'from-gray-600/10 to-gray-900/5';
    }
  };

  const getRegionColor = (region: string = '') => {
    switch (region) {
      case 'East Africa':
        return 'emerald';
      case 'Southern Africa':
        return 'amber';
      case 'North Africa':
        return 'sky';
      default:
        return 'gray';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden ">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent  blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/5 to-transparent  blur-3xl" />
      
      <Container className="relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
            <Globe className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
          </div>
          
          <h2 className="text-5xl md:text-6xl title text-gray-950 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-light">
            {subtitle}
          </p>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-500 font-light tracking-wider">
              {availableDestinations.length} Destinations
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              ref={navigationPrevRef}
              className="w-12 h-12  border border-gray-300 flex items-center justify-center text-gray-600 hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous destinations"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              ref={navigationNextRef}
              className="w-12 h-12  border border-gray-300 flex items-center justify-center text-gray-600 hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next destinations"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView={'auto'}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumBounce: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!pb-12 !pt-4"
          >
            {availableDestinations.map((destination, index) => {
              const regionColor = getRegionColor(destination.region);
              const regionGradient = getRegionGradient(destination.region);
              
              return (
                <SwiperSlide 
                  key={destination.slug} 
                  className="!h-auto !w-auto"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link 
                      href={`/destinations/${destination.slug}`}
                      className={`
                        group relative block h-full min-w-[250px] overflow-hidden border transition-all duration-500 hover:scale-[1.02]
                        bg-gradient-to-br ${regionGradient} border-gray-200/50 hover:border-${regionColor}-500/30
                      `}
                    >
                      {/* Card background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm" />
                      
                      {/* Region indicator */}
                      <div className="absolute top-3 right-3">
                        <span className={`
                          px-3 py-1.5  text-xs font-light tracking-wider
                          bg-${regionColor}-500/10 text-${regionColor}-700 border border-${regionColor}-500/20
                        `}>
                          {destination.region}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="relative p-8 h-full flex flex-col">
                        {/* Destination number */}
                        <div className="text-6xl title text-gray-100 group-hover:text-gray-200 transition-colors duration-500 mb-6">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        
                        {/* Destination name */}
                        <h3 className={`
                          text-3xl title mb-3 
                          text-gray-950 group-hover:text-${regionColor}-700 transition-colors duration-500
                        `}>
                          {destination.name}
                        </h3>
                        
                        {/* Tagline */}
                        <p className="text-gray-600 font-light mb-8">
                          {destination.tagline}
                        </p>
                        
                        {/* CTA */}
                   
                      </div>
                      
                      {/* Hover overlay */}
                      <div className={`
                        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        bg-gradient-to-br from-${regionColor}-500/5 to-transparent
                      `} />
                    </Link>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <div className="flex items-center gap-3">
            {availableDestinations.slice(0, 5).map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`w-2 h-2 rounded transition-all duration-300 cursor-pointer ${
                  activeIndex % availableDestinations.length === index 
                    ? 'w-8 bg-amber-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            {availableDestinations.length > 5 && (
              <span className="text-sm text-gray-400 font-light">
                +{availableDestinations.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200/50">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 text-amber-700 hover:text-amber-800 font-light tracking-wider group"
          >
            <span>View All African Destinations</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

