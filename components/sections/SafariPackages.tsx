import Image from 'next/image';
import Link from 'next/link';
import { Clock, Check, Sparkles, ChevronRight, Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface SafariPackage {
  id: string;
  title: string;
  slug: string;
  duration: string;
  basePrice: number;
  description: string;
  image: string;
  highlights: string[];
  category?: string;
  exclusivity?: string;
  groupSize?: string;
}

interface SafariPackagesSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  safaris: SafariPackage[];
  backgroundColor?: string;
  basePath?: string;
  bookPath?: string;
}

export default function SafariPackagesSection({
  title,
  subtitle = 'Curated Expeditions', 
  description = 'Masterfully designed itineraries showcasing the raw beauty and refined elegance of East Africa.',
  safaris,
  backgroundColor = 'bg-gradient-to-b from-gray-50 to-white',
  basePath = '/destinations',
  bookPath = '/book'
}: SafariPackagesSectionProps) {
  return (
    <section id="safaris" className={`py-32 relative overflow-hidden ${backgroundColor}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <Container className="relative">
        <div className="max-w-5xl mb-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent" />
            <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-normal">
              {subtitle}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="text-5xl md:text-6xl title leading-[0.9] mb-6">
                {title}
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>
            
           
          </div>
        </div>

        {/* Safari packages */}
        <div className="space-y-8">
          {safaris.map((safari, index) => (
            <div
              key={safari.id}
              className="group relative bg-white overflow-hidden shadow-lg shadow-black/5 border border-gray-200/50 hover:border-amber-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image container with overlay */}
                <div className="relative lg:w-2/5 h-[380px] lg:h-auto overflow-hidden">
                  <Image
                    src={safari.image}
                    alt={safari.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-950/30 via-gray-950/10 to-transparent lg:bg-gradient-to-b lg:from-gray-950/30 lg:via-gray-950/10 lg:to-transparent" />
                  
                  {/* Price badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2  shadow-lg">
                    <div className="flex items-center gap-2 label-luxury  uppercase">
                      <span className="text-xs font-light tracking-wider">FROM</span>
                      <span className="text-xs font-normal ">${safari.basePrice.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  {safari.category && (
                    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white px-4 py-2  text-xs font-light label-luxury tracking-wider uppercase border border-white/20">
                      {safari.category}
                    </div>
                  )}
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-white/60 font-light block">Duration</span>
                      <span className="text-white font-light tracking-wide">{safari.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content container */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <div className="flex flex-col h-full">
                    {/* Header with exclusivity badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl title text-gray-950 mb-3 leading-tight">
                          {safari.title}
                        </h3>
                        {safari.exclusivity && (
                          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5  text-xs font-light tracking-wider">
                            <Sparkles className="w-3 h-3" />
                            {safari.exclusivity}
                          </div>
                        )}
                      </div>
                      <span className="text-6xl title text-gray-100 group-hover:text-gray-200 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg italic border-l-4 border-amber-500/30 pl-6 py-2">
                      {safari.description}
                    </p>

                    {/* Highlights grid */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-amber-600 to-transparent" />
                        <span className="text-xs font-light text-gray-500 uppercase tracking-wider">
                          Experience Highlights
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {safari.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-4 group/item">
                            <div className="w-8 h-8  bg-amber-50 flex items-center justify-center rounded-md transition-transform group-hover/item:scale-110">
                              <Check className="w-4 h-4 text-amber-600" />
                            </div>
                            <span className="text-gray-700 font-light  ">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer with CTA and details */}
                    <div className="mt-auto pt-8 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        {/* Additional info */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          {safari.groupSize && (
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span className="font-light">{safari.groupSize}</span>
                            </div>
                          )}
                        </div>

                        {/* CTA buttons */}
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            className="h-12 px-5 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 label-luxury font-light tracking-wider "
                            asChild
                          >
                            <Link href={`${bookPath}/${safari.slug}`}>
                              Check Availability
                            </Link>
                          </Button>
                          <Button
                            className="h-12 px-8 bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 border-none label-luxury font-light tracking-wider  group/btn"
                            asChild
                          >
                            <Link href={`${basePath}/${safari.slug}`}>
                              <span className="flex items-center gap-3">
                                Explore Journey
                                <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                              </span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


