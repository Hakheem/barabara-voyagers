import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, ArrowRight, Zap, Globe, Plane, Users, 
  Palmtree, Sunrise, Check, Calendar, Info, Phone, 
  Clock, DollarSign, ChevronRight, Mountain, Waves, 
  ShieldCheck, Footprints, HeartHandshake, Landmark,
  FileText, Shield, CreditCard, Download, ExternalLink,
  Sparkles, Compass, Crown, Camera
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Rwanda Safaris - Gorilla Trekking & Wildlife | Barabara Voyagers',
  description: 'Discover Rwanda, the Land of a Thousand Hills. Experience gorilla trekking in Volcanoes National Park and explore vibrant Kigali.',
};

export default function RwandaPage() {
  const whyRwandaData = [
    { 
      title: 'Premier Trekking', 
      desc: 'Well-maintained trails and exceptional habitats.', 
      icon: Zap, 
      img: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Easy Accessibility', 
      desc: 'Parks are just 2.5 hours from Kigali airport.', 
      icon: Plane, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Conservation Leader', 
      desc: 'Plastic bag ban and remarkable wildlife recovery.', 
      icon: Globe, 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Safety & Order', 
      desc: 'Excellent infrastructure and tourism services.', 
      icon: ShieldCheck, 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Cultural Depth', 
      desc: 'Powerful history and warm hospitality.', 
      icon: Landmark, 
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Diverse Landscapes', 
      desc: 'From rainforests to savannahs and lake beaches.', 
      icon: Mountain, 
      img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80' 
    },
  ];

  const safariPackagesData = [
    {
      id: '1',
      title: 'Signature Rwanda Gorilla Safari',
      slug: 'rwanda-gorilla-safari',
      duration: '5 Days / 4 Nights',
      basePrice: 5800,
      description: 'An intimate journey into the heart of the Virunga Mountains. Witness the majestic mountain gorillas and explore the clean, vibrant streets of Kigali.',
      image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Mountain Gorilla Trekking', 'Volcanoes National Park', 'Kigali City Tour', 'Genocide Memorial Visit'],
      // category: 'Signature',
      exclusivity: 'Gorilla Permits Included',
      // groupSize: 'Max 8 Guests'
    },
    {
      id: '2',
      title: 'Primates & Big Five Safari',
      slug: 'rwanda-primates-big-five',
      duration: '7 Days / 6 Nights',
      basePrice: 7200,
      description: 'The ultimate Rwandan circuit. From the lush primate forests of Volcanoes to the classic savannah Big Five experience in Akagera.',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Gorilla & Golden Monkeys', 'Akagera National Park', 'Big Five Game Drives', 'Boat Safari'],
      // category: 'Ultimate',
      exclusivity: 'Private Guide & Vehicle',
      // groupSize: 'Max 6 Guests'
    },
    {
      id: '3',
      title: 'Luxury Rwanda Experience',
      slug: 'luxury-rwanda-experience',
      duration: '8 Days / 7 Nights',
      basePrice: 9500,
      description: 'Experience Rwanda in absolute luxury. Stay at world-class forest lodges, enjoy private trekking, and relax at the stunning Lake Kivu.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Premium Gorilla Lodge', 'Private Trekking', 'Lake Kivu Retreat', 'Cultural Experiences'],
      category: 'Luxury',
      exclusivity: 'Fully Bespoke',
      groupSize: 'Private Journey'
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. WHY CHOOSE RWANDA */}
      <WhyChooseSection
        title="Why Rwanda"
        subtitle="Land of a Thousand Hills"
        items={whyRwandaData}
      />

      {/* 2. SAFARI PACKAGES */}
      <SafariPackagesSection
        title="Gorilla Expeditions"
        subtitle="Curated Journeys"
        description="Each itinerary is meticulously crafted to deliver unforgettable primate encounters and luxurious comfort in Rwanda's ancient forests."
        safaris={safariPackagesData}
      />

      {/* 3. GORILLA TREKKING EXPERIENCE */}
      <section className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />
        
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
                <div className="w-16 h-px bg-gradient-to-r from-green-500 to-transparent" />
                <span className="text-green-500 uppercase tracking-[0.3em] text-xs font-light">
                  Once-in-a-Lifetime
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl title text-white mb-8 leading-tight">
                Gorilla Trekking<br />in Rwanda
              </h2>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                The Volcanoes National Park is home to habituated gorilla families living in dramatic bamboo forests. 
                Rwanda offers the most accessible and organized trekking in Africa.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500 text-xs font-bold tracking-widest uppercase">
                    Permit Fee
                  </span>
                </div>
                <p className="text-gray-100 text-3xl title mb-1">$1,500 USD</p>
                <p className="text-gray-400 text-xs font-light">Per person, per trek</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* The Experience Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 p-10 group hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <ShieldCheck className="w-6 h-6 text-green-500" strokeWidth={1.5} />
                      <h3 className="text-2xl title text-white tracking-wide">
                        The Experience
                      </h3>
                    </div>
                    <span className="text-xs text-gray-500 font-light tracking-wider uppercase">
                      Intimate Encounters
                    </span>
                  </div>
                  <div className="text-5xl title text-gray-700/50 group-hover:text-green-900/30 transition-colors duration-500">
                    01
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
                    </div>
                    <span><strong className="text-white">Max 8 People:</strong> Ensuring an intimate encounter.</span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
                    </div>
                    <span><strong className="text-white">1 Hour:</strong> Strictly enforced time with the gorillas.</span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
                    </div>
                    <span><strong className="text-white">Shorter Treks:</strong> Generally 1-3 hours vs other regions.</span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
                    </div>
                    <span><strong className="text-white">Accessibility:</strong> Only 2.5 hours from Kigali airport.</span>
                  </li>
                </ul>
              </div>

              {/* Essential Info Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 p-10 group hover:border-amber-500/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Info className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
                      <h3 className="text-2xl title text-white tracking-wide">
                        Essential Info
                      </h3>
                    </div>
                    <span className="text-xs text-gray-500 font-light tracking-wider uppercase">
                      Planning Your Trek
                    </span>
                  </div>
                  <div className="text-5xl title text-gray-700/50 group-hover:text-amber-900/30 transition-colors duration-500">
                    02
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full border border-amber-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-amber-500" strokeWidth={3} />
                    </div>
                    <span><strong className="text-white">Minimum age:</strong> 15 years old</span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full border border-amber-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-amber-500" strokeWidth={3} />
                    </div>
                    <span><strong className="text-white">Moderate fitness</strong> required</span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full border border-amber-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-amber-500" strokeWidth={3} />
                    </div>
                    <span><strong className="text-white">Reserve</strong> 6-12 months in advance</span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full border border-amber-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-amber-500" strokeWidth={3} />
                    </div>
                    <span><strong className="text-white">Best time:</strong> June-Sept & Dec-Feb</span>
                  </li>
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
              Everything you need for a seamless and extraordinary Rwandan adventure
            </p>
          </div>

          {/* Cards grid - NO ROUNDNESS */}
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
                30-day visa on arrival ($50) or East Africa Tourist Visa ($100). E-visas available online.
              </p>
              
              <div className="pt-6 border-t border-gray-200/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Visa on arrival for most nationalities
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    East Africa Tourist Visa valid for 90 days
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Apply via migration.gov.rw
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
                Yellow Fever certificate required if arriving from endemic countries. Malaria prophylaxis recommended.
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
                    Kigali has excellent medical facilities
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
                Rwandan Franc (RWF). US Dollars widely accepted. Credit cards accepted in Kigali and major lodges.
              </p>
              
              <div className="pt-6 border-t border-gray-200/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    USD bills from 2006 series accepted
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    ATMs widely available in Kigali
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Visa/Mastercard accepted at lodges
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
                Rwanda Travel Guide
              </h4>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                All clients receive our exclusive digital travel guide with detailed gorilla trekking preparation, 
                cultural etiquette tips, and emergency contact information for Rwanda.
              </p>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 h-12 px-8 font-light tracking-wider hover:text-foreground group/download"
                asChild
              >
                <a href="/downloads/rwanda-travel-guide.pdf" download>
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

      <DestinationSwitcher currentDestination="rwanda" />

      {/* 5. CTA SECTION */}
      <PremiumCTASection
        title="Your Rwandan Adventure Awaits"
        subtitle="Begin Your Journey"
        description="Consult with our specialists to curate a bespoke journey into the Volcanoes National Park, where mountain gorillas thrive and hospitality reigns supreme."
        primaryButton={{
          text: "Get a Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Speak to Expert",
          href: "+250123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1920"
        brightness={50}
      />
    </main>
  );
}
