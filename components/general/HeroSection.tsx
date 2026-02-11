'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const HeroSection = ({ 
  title = "Discover the Magic of Africa",
  subtitle = "Embark on the adventure of a lifetime with our expertly crafted luxury safari experiences",
}: HeroSectionProps) => {
  return (
    <section className="relative h-[85vh] lg:h-screen min-h-150 flex items-end overflow-hidden">
      {/* 1. Background Image with responsive sizes */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/lion_cub.jpg'
          alt="African Safari"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 text-gray-100 bottom-18 md:bottom-24 lg:bottom-18 px-6 md:px-12 lg:pl-16 max-w-5xl lg:max-w-[50%] ">
        
        {/* Label */}
        <span className="label-luxury text-amber-600 mb-4 block animate-in fade-in slide-in-from-left duration-700 2xl:text-lg ">
          Private & Bespoke Expeditions
        </span>

        {/* Title - Added 2xl:text-8xl */}
        <h1 className="title font-medium mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight leading-[1.1] animate-in fade-in slide-in-from-left duration-1000">
          {title}
        </h1>

        {/* Subtitle - Added 2xl:text-2xl and 2xl:max-w-3xl */}
        <p className="mb-8 max-w-2xl 2xl:max-w-3xl text-lg md:text-xl 2xl:text-2xl leading-relaxed opacity-90 animate-in fade-in slide-in-from-left duration-1000 delay-200">
          {subtitle}
        </p>

        {/* CTAs - Added 2xl:h-14 and 2xl:text-lg for better clickable areas on big screens */}
        <div className="flex text-white flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Link href="/destinations">
            <Button className="label-luxury h-12 2xl:h-14 px-6 2xl:px-8 2xl:text-lg">
              Explore Destinations <ArrowRight className="ml-2 h-4 w-4 2xl:h-5 2xl:w-5" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button 
              variant="outline" 
              className="label-luxury px-6 2xl:px-8 h-12 2xl:h-14 2xl:text-lg bg-white/5 backdrop-blur-md border-white text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              Plan Your Safari
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

