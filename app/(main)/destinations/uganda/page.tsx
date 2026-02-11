import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, ArrowRight, Zap, Globe, Plane, Users,
  Palmtree, Sunrise, Check, Calendar, Info, Phone,
  Clock, DollarSign, ChevronRight, Trees, Mountain, Waves,
  ShieldCheck, Footprints, FileText, Shield, CreditCard,
  Download, ExternalLink, Sparkles, Compass, Crown, Camera
} from 'lucide-react';
import { GiMonkey } from "react-icons/gi";
import { SiSurveymonkey } from "react-icons/si";
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Uganda Safaris - Gorilla Trekking & Wildlife Adventures | Barabara Voyagers',
  description: 'Experience the magic of Uganda with gorilla trekking in Bwindi, chimpanzee tracking in Kibale, and wildlife safaris in Queen Elizabeth National Park.',
};

export default function UgandaPage() {
  const whyUgandaData = [
    {
      title: 'Mountain Gorillas',
      desc: 'Over half the world\'s remaining population.',
      extendedDesc: 'Only 1,000 mountain gorillas remain in the wild, and over half call Bwindi Impenetrable Forest home.',
      icon: GiMonkey,
      img: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Primate Paradise',
      desc: '13 primate species including chimpanzees.',
      extendedDesc: 'Kibale Forest has the highest concentration of primates in Africa, with over 1,500 chimps.',
      icon: SiSurveymonkey,
      img: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Source of the Nile',
      desc: 'The start of the world\'s longest river.',
      extendedDesc: 'Witness the mighty Nile begin its 6,650km journey to the Mediterranean Sea.',
      icon: Waves,
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Tree-Climbing Lions',
      desc: 'Unique behavior in Queen Elizabeth Park.',
      extendedDesc: 'One of only two populations in Africa where lions regularly climb fig and acacia trees.',
      icon: Trees,
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Diverse Landscapes',
      desc: 'From snow-capped peaks to rainforests.',
      extendedDesc: 'The Rwenzori Mountains, Africa\'s "Mountains of the Moon", are permanently glacier-capped.',
      icon: Mountain,
      img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Uncrowded Parks',
      desc: 'Authentic wilderness with fewer tourists.',
      extendedDesc: 'Experience intimate wildlife encounters without the crowds found in East Africa\'s more famous parks.',
      icon: Sunrise,
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80'
    },
  ];

  const safariPackagesData = [
    {
      id: '1',
      title: 'Signature Gorilla & Wildlife Safari',
      slug: 'uganda-gorilla-wildlife',
      duration: '8 Days / 7 Nights',
      basePrice: 6800,
      description: 'The definitive Pearl of Africa experience. Come face-to-face with mountain gorillas, track chimpanzees through ancient forests, and discover diverse wildlife in stunning landscapes.',
      image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Mountain Gorilla Trekking', 'Bwindi Impenetrable Forest', 'Queen Elizabeth National Park', 'Kazinga Channel Cruise'],
      category: 'Signature',
      exclusivity: 'Gorilla Permits Included',
      groupSize: 'Max 8 Guests'
    },
    {
      id: '2',
      title: 'Ultimate Primate Expedition',
      slug: 'uganda-primate-safari',
      duration: '10 Days / 9 Nights',
      basePrice: 7500,
      description: 'A deep dive into the world of primates. From the chimpanzees of Kibale to the mountain gorillas of Bwindi and the rare golden monkeys of Mgahinga.',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Gorilla Trekking', 'Chimpanzee Tracking', 'Golden Monkey Encounters', 'Murchison Falls'],
      category: 'Ultimate',
      exclusivity: 'Private Guide & Vehicle',
      groupSize: 'Max 6 Guests'
    },
    {
      id: '3',
      title: 'Luxury Uganda Explorer',
      slug: 'luxury-uganda-explorer',
      duration: '12 Days / 11 Nights',
      basePrice: 9200,
      description: 'An ultra-exclusive journey featuring Uganda\'s most prestigious boutique lodges. Enjoy private gorilla permits, personal guides, and secluded experiences.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Private Gorilla Permits', 'Luxury Lodges', 'Source of the Nile', 'Helicopter Transfers'],
      category: 'Luxury',
      exclusivity: 'Fully Bespoke',
      groupSize: 'Private Journey'
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. WHY CHOOSE UGANDA */}
      <WhyChooseSection
        title="Why Uganda"
        subtitle="The Pearl of Africa"
        description="Home to half the world's remaining mountain gorillas, Uganda offers intimate primate encounters in breathtaking landscapes."
        items={whyUgandaData}
      />

      {/* 2. SAFARI PACKAGES */}
      <SafariPackagesSection
        title="Gorilla Expeditions"
        subtitle="Curated Journeys"
        description="Each itinerary is meticulously crafted to deliver unforgettable primate encounters and luxurious comfort in Uganda's ancient forests."
        safaris={safariPackagesData}
      />

      {/* 3. GORILLA TREKKING EXPERIENCE */}
      <section className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-transparent blur-3xl" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-transparent" />
                <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-light">
                  Once-in-a-Lifetime
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl title text-white mb-8 leading-tight">
                Gorilla Trekking<br />Experience
              </h2>

              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Trekking into the misty Bwindi Impenetrable Forest is a profound encounter.
                Watch gentle giants feed, play, and interact in their natural habitat — an hour
                that will forever change how you see the natural world.
              </p>

              <div className="bg-white/5 border border-white/10 p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
                    Best Time to Trek
                  </span>
                </div>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  <span className="text-white font-medium">June – September & December – February</span>
                  {', '}drier conditions make for easier trekking and clearer views.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* What's Included Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 p-10 group hover:border-amber-500/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <ShieldCheck className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
                      <h3 className="text-2xl title text-white tracking-wide">
                        What's Included
                      </h3>
                    </div>
                    <span className="text-xs text-gray-500 font-light tracking-wider uppercase">
                      Premium Permit Package
                    </span>
                  </div>
                  <div className="text-5xl title text-gray-700/50 group-hover:text-amber-900/30 transition-colors duration-500">
                    01
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    'Gorilla permit ($700 USD)',
                    'Expert ranger guide',
                    'Park entrance fees',
                    'One hour with gorilla family',
                    'Porter service available'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-300 font-light">
                      <div className="w-5 h-5 rounded-full border border-amber-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-amber-500" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Pack Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 p-10 group hover:border-emerald-500/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Footprints className="w-6 h-6 text-emerald-500" strokeWidth={1.5} />
                      <h3 className="text-2xl title text-white tracking-wide">
                        What to Pack
                      </h3>
                    </div>
                    <span className="text-xs text-gray-500 font-light tracking-wider uppercase">
                      Essential Gear
                    </span>
                  </div>
                  <div className="text-5xl title text-gray-700/50 group-hover:text-emerald-900/30 transition-colors duration-500">
                    02
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    'Waterproof hiking boots',
                    'Long-sleeved shirt & trousers',
                    'Rain jacket & gardening gloves',
                    'Camera (strictly no flash)',
                    'Walking sticks (provided)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-300 font-light">
                      <div className="w-5 h-5 rounded-full border border-emerald-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-500" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. TRAVEL ESSENTIALS */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <Container className="relative">
          {/* Section header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-light">
                Journey Preparedness
              </span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>

            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-4 leading-tight">
              Travel Essentials
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Everything you need for a seamless and extraordinary Ugandan adventure
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Visa */}
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <FileText className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                Visa Requirements
              </h3>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                East Africa Tourist Visa ($100 USD) or single-entry Uganda visa ($50 USD) available online.
              </p>

              <div className="pt-6 border-t border-gray-200/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    East Africa Tourist Visa valid for 90 days
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Apply online via evisa.immigration.go.ug
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Available on arrival for select nationalities
                  </li>
                </ul>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
              </div>
            </div>

            {/* Card 2 - Health */}
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                Health Requirements
              </h3>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Yellow Fever certificate required. Malaria prophylaxis strongly recommended.
              </p>

              <div className="pt-6 border-t border-gray-200/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Yellow Fever vaccination mandatory
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Travel insurance with evacuation
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    24/7 medical support available
                  </li>
                </ul>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
              </div>
            </div>

            {/* Card 3 - Currency */}
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                Currency & Payments
              </h3>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Ugandan Shilling (UGX). US Dollars widely accepted and preferred for permits.
              </p>

              <div className="pt-6 border-t border-gray-200/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    USD bills from 2006 series accepted
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    ATMs available in Kampala and Entebbe
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Credit cards at major lodges
                  </li>
                </ul>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
              </div>
            </div>
          </div>



          {/* Downloadable guide */}
          <div className="mt-20 pt-12 border-t border-gray-200/50">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-6 py-3 mb-6">
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600 font-light tracking-wider">
                  Premium Service Included
                </span>
              </div>
              <h4 className="text-2xl title text-gray-950 mb-4">
                Uganda Travel Guide
              </h4>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                All clients receive our exclusive digital travel guide with detailed gorilla trekking preparation,
                cultural etiquette tips, and emergency contact information for Uganda.
              </p>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:text-foreground hover:bg-gray-50 h-10 px-8 font-light tracking-wider group/download"
                asChild
              >
                <a href="/downloads/uganda-travel-guide.pdf" download>
                  <span className="flex items-center gap-3">
                    <Download className="w-4 h-4" />
                    Download Guide
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section> 

      <DestinationSwitcher currentDestination="uganda" />

      {/* 5. CTA SECTION */}
      <PremiumCTASection
        title="Your Gorilla Trekking Odyssey Awaits"
        subtitle="Begin Your Journey"
        description="Consult with our specialists to curate a bespoke journey into the misty forests of Uganda, where ancient traditions and endangered gorillas await."
        primaryButton={{
          text: "Get a Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Speak to Expert",
          href: "+256123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1920"
        brightness={50}
      />
    </main>
  );
}

