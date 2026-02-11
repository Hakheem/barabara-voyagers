'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Package } from '@/types';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FeaturedPackagesProps {
  packages: Package[];
}

const FeaturedPackages = ({ packages }: FeaturedPackagesProps) => {
  return (
    <section className="py-24 bg-white overflow-hidden"> 
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <span className=" text-amber-700 uppercase tracking-[0.3em] text-xs font-medium block mb-4">Our Curated Collection</span>
            <h2 className="title text-4xl md:text-5xl lg:text-6xl font-medium mb-4">Signature Safaris</h2>
          </div>
          <div className="flex gap-4">
            <button className="swiper-prev-btn w-12 h-12 rounded border border-gray-200 flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300 cursor-pointer ">
              <ChevronLeft size={20} />
            </button>
            <button className="swiper-next-btn w-12 h-12 rounded border border-gray-200 flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300 cursor-pointer ">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ prevEl: '.swiper-prev-btn', nextEl: '.swiper-next-btn' }}
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="featured-swiper !pb-16"
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={pkg.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded flex flex-col h-full hover:shadow-sm "
              >
                <div className="relative h-72 overflow-hidden  ">
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 right-3 bg-white/90 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900 shadow-sm">
                    From {pkg.currency} {pkg.price}
                  </div>
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-2 text-amber-600 label-luxury mb-4 text-xs">
                    <MapPin size={12} /><span>{pkg.destination}</span>
                  </div>
                  <h3 className="title text-2xl font-medium mb-4 group-hover:text-amber-700 transition-colors line-clamp-1">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-8 line-clamp-2">{pkg.excerpt}</p>
                  <div className="mt-auto border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-6 text-[12px] uppercase tracking-[0.2em] text-gray-500 mb-6">
                      <div className="flex items-center gap-2"><Clock size={12} /><span>{pkg.duration}</span></div>
                      <div className="flex items-center gap-2"><Users size={12} /><span>{pkg.groupSize}</span></div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/destinations/${pkg.slug}`}>View Expedition</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default FeaturedPackages;

