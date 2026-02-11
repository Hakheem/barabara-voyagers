import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, ArrowRight, Zap, Globe, Plane, Users,
  Palmtree, Sunrise, Check, Calendar, Info, Phone,
  Clock, DollarSign, ChevronRight, Mountain, Waves,
  FileText, Shield, CreditCard, Download, ExternalLink,
  Crown, Sparkles, Compass, Camera
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Tanzania Safaris - Serengeti, Ngorongoro & Zanzibar | Barabara Voyagers',
  description: 'Experience the wonders of Tanzania with our luxury safari packages.',
};

export default function TanzaniaPage() {
  const whyTanzaniaData = [
    {
      title: 'The Great Migration',
      desc: 'Witness the world\'s most spectacular wildlife phenomenon.',
      icon: Zap,
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Ngorongoro Crater',
      desc: 'The world\'s largest intact volcanic caldera.',
      icon: Mountain,
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Private Conservancies',
      desc: 'Exclusive wildlife viewing in remote reserves.',
      icon: Crown,
      img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Maasai Heritage',
      desc: 'Authentic cultural immersion experiences.',
      // extendedDesc: 'Engage with Maasai communities through curated cultural exchanges and village visits.',
      icon: Users,
      img: 'https://images.unsplash.com/photo-1519659528534-7fd733a82ad1?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Zanzibar Coast',
      desc: 'Pristine beaches and spice island culture.',
      icon: Palmtree,
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'Year-Round Safaris',
      desc: 'Exceptional wildlife viewing every month.',
      icon: Sunrise,
      img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=80'
    },
  ];

  const safariPackagesData = [
    {
      id: '1',
      title: 'Signature Tanzania Safari',
      slug: 'signature-tanzania-safari',
      duration: '10 Days / 9 Nights',
      basePrice: 5800,
      description: 'An exclusive journey through Tanzania\'s northern circuit, featuring private conservancies and luxury tented camps.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Private Serengeti Conservancy', 'Ngorongoro Crater Descent', 'Tarangire Elephant Research', 'Hot Air Balloon Safari'],
      category: 'Signature',
      exclusivity: 'Private Guide & Vehicle',
      groupSize: 'Max 6 Guests'
    },
    {
      id: '2',
      title: 'Tanzania & Zanzibar Elegance',
      slug: 'tanzania-zanzibar-elegance',
      duration: '14 Days / 13 Nights',
      basePrice: 7800,
      description: 'A sophisticated blend of wildlife adventure and coastal luxury, featuring private island access and marine conservation experiences.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Private Beach Villa', 'Spice Island Tour', 'Dhow Sunset Cruise', 'Marine Safari'],
      category: 'Luxury',
      exclusivity: 'Butler Service Included',
      groupSize: 'Tailored to You'
    },
    {
      id: '3',
      title: 'Ultimate Tanzania Expedition',
      slug: 'ultimate-tanzania-expedition',
      duration: '16 Days / 15 Nights',
      basePrice: 13500,
      description: 'The definitive Tanzanian experience, combining rare wildlife encounters with cultural immersion and conservation initiatives.',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Chimpanzee Tracking', 'Rhino Conservation Project', 'Bespoke Dining Experiences', 'Helicopter Transfers'],
      category: 'Ultimate',
      exclusivity: 'Fully Bespoke',
      groupSize: 'Private Journey'
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. WHY CHOOSE TANZANIA */}
      <WhyChooseSection
        title="Why Tanzania"
        subtitle="Africa's Wildlife Crown"
        // tagline="Where the wild still rules"
        items={whyTanzaniaData}
      />

      {/* 2. SAFARI PACKAGES */}
      <SafariPackagesSection
        title="Tailored Expeditions"
        subtitle="Curated Journeys"
        description="Each itinerary is meticulously crafted to deliver unparalleled wildlife encounters and luxurious comfort in Tanzania's wilderness."
        safaris={safariPackagesData}
      />

      {/* 3. WHEN TO VISIT  */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="sticky top-24">
                <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-light block mb-6">
                  Optimal Timing
                </span>
                <h2 className="text-5xl md:text-6xl title text-gray-950 mb-6 leading-tight">
                  When to Experience<br />Tanzania's Majesty
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                  Our experts will guide you to the perfect season for your desired experience,
                  whether it's the drama of migration or the intimacy of green season.
                </p>
                <Button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 h-14 px-10 text-sm font-light tracking-wider " asChild>
                  <a href="/contact">Consult Our Experts</a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Dry Season Card */}
              <div className=" p-8  group hover:shadow-md hover:shadow-amber-500/10 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-amber-600 text-xs font-light tracking-widest uppercase block mb-2">
                      Peak Season
                    </span>
                    <h3 className="text-2xl title text-gray-950">Great Migration</h3>
                  </div>
                  <div className="text-5xl title text-gray-100 group-hover:text-amber-50 transition-colors">
                    01
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Compass className="w-4 h-4" />
                    <span className="font-light">Serengeti River Crossings</span>
                  </div>
                  <div className="">
                    <span className="text-amber-700 text-sm font-light tracking-wider uppercase block mb-2">
                      June – October
                    </span>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Witness the dramatic river crossings and peak predator action.
                      Ideal for photographers seeking iconic wildlife moments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Green Season Card */}
              <div className=" p-8  group hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-emerald-600 text-xs font-light tracking-widest uppercase block mb-2">
                      Exclusive Season
                    </span>
                    <h3 className="text-2xl title text-gray-950">Calving Season</h3>
                  </div>
                  <div className="text-5xl title text-gray-100 group-hover:text-emerald-50 transition-colors">
                    02
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Camera className="w-4 h-4" />
                    <span className="font-light">Photographic Paradise</span>
                  </div>
                  <div className="">
                    <span className="text-emerald-700 text-sm font-light tracking-wider uppercase block mb-2">
                      November – May
                    </span>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Lush green landscapes, newborn wildlife, and fewer visitors.
                      Perfect for those seeking solitude and unique photographic opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. TRAVEL ESSENTIALS - TANZANIA */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl" />

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
              Everything you need for a seamless and extraordinary Tanzanian adventure
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
                Visa on arrival ($50-$100 USD) or E-visa required. Processing takes 48-72 hours.
              </p>

              {/* Details list */}
              <div className="pt-6 border-t border-gray-200/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Single-entry tourist visa
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Valid for 90 days
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Apply online in advance
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
                Health & Safety
              </h3>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Malaria prophylaxis recommended. Yellow Fever certificate required if arriving from endemic zones.
              </p>

              {/* Details list */}
              <div className="pt-6 border-t border-gray-200/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    COVID-19 vaccination recommended
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Travel insurance mandatory
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    24/7 medical support available
                  </li>
                </ul>
              </div>

              {/* Decorative corner accent */}
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
                Tanzanian Shilling (TZS). US Dollars (post-2006) widely accepted in lodges.
              </p>

              {/* Details list */}
              <div className="pt-6 border-t border-gray-200/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Credit cards widely accepted
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    ATMs available in major cities
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Tipping: 10-15% recommended
                  </li>
                </ul>
              </div>

              {/* Decorative corner accent */}
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
                Comprehensive Travel Guide
              </h4>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                All clients receive our exclusive digital travel guide with detailed packing lists,
                cultural etiquette tips, and emergency contact information for Tanzania.
              </p>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 h-12 px-8 hover:text-foreground font-light tracking-wider rounded group/download"
                asChild
              >
                <a href="/downloads/tanzania-travel-guide.pdf" download>
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

      <DestinationSwitcher currentDestination="tanzania" />

      {/* 5. CTA SECTION */}
      <PremiumCTASection
        title="Your Tanzanian Odyssey Awaits"
        subtitle="Begin Your Journey"
        description="Consult with our specialists to curate a bespoke journey that transcends the ordinary in the heart of Africa."
        primaryButton={{
          text: "Get a Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Speak to Expert",
          href: "+255123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920"
        brightness={50}
      />
    </main>
  );
}

