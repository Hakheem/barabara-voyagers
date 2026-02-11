'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const styles = [
  {
    label: "Tailor-Made",
    title: "Bespoke Journeys",
    description: "Entirely private itineraries crafted around your specific interests, pace, and passions.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    href: "/travel/bespoke"
  },
  {
    label: "Small Groups",
    title: "Classic Expeditions",
    description: "Our signature hosted journeys, following the most iconic routes across the East African plains.",
    image: "/exped.jpg",
    href: "/travel/classic"
  },
  {
    label: "Multi-Generational",
    title: "The Family Lodge",
    description: "Curated experiences designed to bridge the gap between young explorers and ancestral wisdom.",
    image: "/family.png",
    href: "/travel/family"
  }
];

export default function TravelStyles() {
  return (
    <section className="w-full bg-white py-24  ">
      <div className=" lg:pt-12 grid grid-cols-1 md:grid-cols-3 min-h-100 lg:h-120">
        {styles.map((style, index) => (
          <Link 
            key={style.title} 
            href={style.href} 
            className="group relative flex flex-col justify-end p-8 md:p-12 lg:p-16 overflow-hidden border-r border-gray-100 last:border-r-0"
          >
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 z-0">
              <Image
                src={style.image}
                alt={style.title}
                fill
                className="object-cover transition-transform duration-2000ms ease-out group-hover:scale-110"
              />
              {/* Luxury Scrim: Dark at the bottom for readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="label-luxury text-amber-500 mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                {style.label}
              </span>
              
              <h3 className="title text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                {style.title}
              </h3>
              
              <p className="text-gray-300 font-light text-sm lg:text-base leading-relaxed mb-6 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                {style.description}
              </p>

              <div className="flex items-center text-white label-luxury text-[10px] group/btn">
                <span className="mr-2">Explore </span>
                <div className="w-8 h-1px bg-white transition-all duration-300 group-hover/btn:w-12 group-hover/btn:bg-amber-500" />
                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
              </div>
            </div>

            {/* Subtle Overlay that lightens on hover for 'activation' feel */}
            <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/10 transition-colors duration-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}

