"use client";
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Camera, Users, Heart, Footprints, Globe, ShieldCheck, Languages } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const safariHeroData: Record<string, any> = {
  classic: { 
    title: "Classic Safari",
    badge: "Community & Adventure",
    badgeColor: "bg-amber-600",
    icon: <Users className="h-4 w-4" />,
    description: "Small group safaris with guaranteed departures. Great value, social experience, and expertly planned itineraries.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600",
    targetId: "tours"
  },
  private: {
    title: "Private Safari",
    badge: "Exclusive & Bespoke", 
    badgeColor: "bg-blue-700",
    icon: <Globe className="h-4 w-4" />,
    description: "Fully customized for your group only. Total flexibility, private vehicles, and personalized service from start to finish.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600",
    targetId: "examples"
  },
  family: {
    title: "Family Safari",
    badge: "Generational Journeys",
    badgeColor: "bg-emerald-600",
    icon: <Users className="h-4 w-4" />,
    description: "Child-friendly safaris with age-appropriate activities, flexible schedules, and family-focused lodges.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1600", 
    targetId: "tours"
  },
  honeymoon: {
    title: "Honeymoon Safari",
    badge: "Romance in the Wild",
    badgeColor: "bg-rose-600",
    icon: <Heart className="h-4 w-4" />,
    description: "Romantic safaris with luxury lodges, private dinners under the stars, and unforgettable moments.",
    image: "/romance_header.jpg", 
    targetId: "packages"
  },
  photography: {
    title: "Photography Safaris",
    badge: "Photography Focused",
    badgeColor: "bg-indigo-600",
    icon: <Camera className="h-4 w-4" />,
    description: "Capture the magic of African wildlife with expert photographer guides. Specialized vehicles and professional instruction.",
    image: "/photography_header.jpg",
    targetId: "safaris" 
  },
  walking: {
    title: "Walking Safari",
    badge: "The Pulse of Nature",
    badgeColor: "bg-green-800",
    icon: <Footprints className="h-4 w-4" />,
    description: "Experience Africa on foot with expert armed guides. Intimate wildlife encounters and an authentic bush experience.",
    image: "https://images.unsplash.com/photo-1523910088385-d313124c68aa?w=1600", 
    targetId: "safaris"
  },
  conservation: {
    title: "Conservation Safari",
    badge: "Guardians of the Wild",
    badgeColor: "bg-teal-900",
    icon: <ShieldCheck className="h-4 w-4" />,
    description: "Go behind the scenes with rangers and researchers. Participate in rhino tracking, reforestation, and anti-poaching awareness.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1600", 
    targetId: "projects"
  },
  cultural: {
    title: "Our Cultures",
    badge: "Heritage & Connection",
    badgeColor: "bg-orange-800",
    icon: <Languages className="h-4 w-4" />,
    description: "Connect with the soul of Africa. Engage with local communities through respectful, authentic storytelling and shared traditions.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600",
    targetId: "experiences"
  }
};

export default function SafarisLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment(); 
  const safari = segment ? safariHeroData[segment] : null;

  if (!safari) return <>{children}</>;

  return (
    <>
      <section className="relative h-[60vh] md:h-[55vh] lg:h-[75vh] 2xl:h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={safari.image}
            alt={safari.title}
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative w-full">
          <Container>
            <div className="max-w-3xl mb-12 lg:mb-16">
              <div className={`inline-flex items-center gap-2 ${safari.badgeColor} px-4 py-2 mb-5 text-white shadow-lg`}>
                {safari.icon}
                <span className="font-light text-xs uppercase tracking-[0.1em]">{safari.badge}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl title text-white mb-4 leading-[0.9] tracking-tight">
                {safari.title}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl leading-relaxed mb-6">
                {safari.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-10 font-light tracking-wider border-none rounded-none group" asChild>
                  <Link href={`/safaris/${segment}#${safari.targetId}`} className="flex items-center gap-3">
                    Explore {safari.title}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:text-white hover:bg-white/10 hover:border-white/50 h-14 px-10 font-light tracking-wider rounded-none backdrop-blur-sm" asChild>
                  <Link href="/contact">Enquire Privately</Link>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <nav className="bg-white border-b border-gray-100 py-5">
        <Container>
          <Link 
            href="/safaris" 
            className="flex items-center text-xs font-light uppercase tracking-[0.2em] text-gray-500 hover:text-amber-700 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" /> 
            <span className="font-light">Back to Safari Types</span>
          </Link>
        </Container>
      </nav>

      {children}
    </>
  );
}

