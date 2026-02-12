import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, ArrowRight, Zap, Globe, Plane, Users, 
  Palmtree, Sunrise, Check, Calendar, Info, Phone, 
  Clock, DollarSign, ChevronRight, Mountain, Waves, ShieldCheck, Footprints,
  HeartHandshake, Droplets, Tent, Ship, Bird, Sun,
  FileText, Shield, CreditCard, Download, ExternalLink,
  Sparkles, Compass, Crown, Camera
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';
import { getSafarisByDestination } from '@/lib/sanity-queries';

export const metadata = {
  title: 'Botswana Safaris - Okavango Delta & Luxury Wildlife | Barabara Voyagers',
  description: 'Experience the pristine wilderness of Botswana. Explore the Okavango Delta and encounter massive elephant herds in Chobe.',
};

export default async function BotswanaPage() {
  const whyBotswanaData = [
    { 
      title: 'Okavango Delta', 
      desc: 'The world\'s largest inland delta and a unique water wilderness.', 
      icon: Droplets, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Exclusive Access', 
      desc: 'Private concessions ensure an intimate, uncrowded safari.', 
      icon: ShieldCheck, 
      img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Elephant Capital', 
      desc: 'Home to Africa\'s largest elephant population—over 120,000.', 
      icon: Mountain, 
      img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Pristine Nature', 
      desc: '40% of the country is protected with no fences.', 
      icon: Globe, 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Predator Paradise', 
      desc: 'Exceptional viewing of wild dogs, leopards, and lions.', 
      icon: Zap, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Year-Round Appeal', 
      desc: 'Unique experiences across flood and dry seasons.', 
      icon: Sun, 
      img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80' 
    },
  ];

  // Fetch safaris from Sanity or fallback to hardcoded data
  const sanityData = await getSafarisByDestination('Botswana');
  const safariPackagesData = sanityData.length > 0 ? sanityData.map(safari => ({
    id: safari.id,
    title: safari.title,
    slug: safari.slug,
    duration: `${safari.duration} Days / ${safari.durationNights} Nights`,
    basePrice: safari.basePrice,
    description: safari.description,
    image: safari.images[0] || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    highlights: safari.highlights,
  })) : [
    {
      id: '1',
      title: 'Classic Okavango Delta Safari',
      slug: 'okavango-delta-safari',
      duration: '7 Days / 6 Nights',
      basePrice: 8500,
      description: 'A masterpiece of water and wilderness. Navigate the crystal channels of the Delta by mokoro and explore the predator-rich Moremi Game Reserve.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Okavango Delta Mokoro Trips', 'Moremi Game Reserve', 'Water & Land Activities', 'Luxury Tented Camps'],
      category: 'Signature',
      exclusivity: 'Private Concession Access',
      groupSize: 'Max 8 Guests'
    },
    {
      id: '2',
      title: 'Botswana Mobile Safari',
      slug: 'botswana-mobile-safari',
      duration: '10 Days / 9 Nights',
      basePrice: 9800,
      description: 'The authentic way to see Botswana. Follow the wildlife through Savuti and Chobe, staying in high-end moving tented camps that bring you closer to nature.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Okavango Delta', 'Chobe National Park', 'Savuti Area', 'Moving Tented Camps'],
      category: 'Ultimate',
      exclusivity: 'Mobile Camp Experience',
      groupSize: 'Max 6 Guests'
    },
    {
      id: '3',
      title: 'Ultimate Botswana Explorer',
      slug: 'ultimate-botswana-explorer',
      duration: '12 Days / 11 Nights',
      basePrice: 12500,
      description: 'An uncompromising circuit of Botswana\'s most exclusive concessions. Maximum wildlife density and ultra-luxury lodging for the discerning traveler.',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Complete Botswana Circuit', 'Private Concessions', 'Luxury Camps', 'Maximum Wildlife'],
      category: 'Luxury',
      exclusivity: 'Fully Bespoke',
      groupSize: 'Private Journey'
    },
  ];

  // ✅ FIXED: Converted to bullet points with original data intact
  const essentials = [
    {
      label: 'Visa Requirements',
      bullets: [
        'Many nationalities receive a free 90-day visa on arrival',
        'Passports must be valid for 6 months beyond travel dates'
      ],
      icon: FileText
    },
    {
      label: 'Health Requirements',
      bullets: [
        'Malaria prophylaxis strongly recommended',
        'Yellow fever certificate needed if arriving from endemic zones'
      ],
      icon: Shield
    },
    {
      label: 'Currency & Payments',
      bullets: [
        'Botswana Pula (BWP)',
        'US Dollars and credit cards are widely accepted at luxury lodges'
      ],
      icon: CreditCard
    },
    {
      label: 'Language',
      bullets: [
        'English is the official language and used throughout the tourism sector',
        'Setswana is the national language'
      ],
      icon: Globe
    },
    {
      label: 'Getting There',
      bullets: [
        'Maun and Kasane are the main gateways',
        'Transfers to remote camps are typically via light aircraft'
      ],
      icon: Plane
    },
    {
      label: 'Safari Style',
      bullets: [
        'Small, intimate camps (12-20 guests)',
        'The "High-Value, Low-Impact" model ensures maximum exclusivity'
      ],
      icon: Tent
    }
  ];

  return (
    <main className="bg-white">
      <WhyChooseSection
        title="Why Botswana"
        subtitle="The Ultimate Wilderness"
        tagline="Africa's last remaining Eden"
        description="Botswana pioneered the high-value, low-impact tourism model. Experience Africa's most intimate and exclusive safari destination."
        items={whyBotswanaData}
      />

      <SafariPackagesSection
        title="Delta Expeditions"
        subtitle="Curated Journeys"
        description="Luxury safari experiences curated for those seeking the most pristine wilderness in Africa, where water meets savannah."
        safaris={safariPackagesData}
      />

      {/* Okavango Delta Experience - Split Layout */}
      <section className="py-32 bg-gradient-to-b from-[#0a1a2a] to-[#07111a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                <span className="text-blue-400 uppercase tracking-[0.3em] text-xs font-light">
                  UNESCO World Heritage
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl title text-white mb-8 leading-tight">
                The Okavango<br />Delta
              </h2>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Fed by seasonal floods from Angola, the delta transforms the Kalahari Desert into a lush paradise. 
                Experience private islands where you are often the only humans for miles around.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center">
                    <Ship className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-400 mb-1">Water Safari</h4>
                    <p className="text-gray-400 text-sm font-light">Mokoro trips, motor boat excursions, tiger fishing & birding</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center">
                    <Tent className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-amber-400 mb-1">Land Safari</h4>
                    <p className="text-gray-400 text-sm font-light">Remote island game drives, guided walks, night predator drives</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10">
              <div className="flex items-center gap-4 mb-8">
                <Calendar className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl title text-white">Seasonality Guide</h3>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-blue-500/50 pl-6">
                  <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">High Water</p>
                  <p className="text-gray-300 text-sm font-light">May – September. The delta is at its fullest. Best for mokoro trips and lush scenery.</p>
                </div>
                <div className="border-l-2 border-amber-500/50 pl-6">
                  <p className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-2">Dry Season</p>
                  <p className="text-gray-300 text-sm font-light">June – October. Maximum wildlife concentration around permanent water.</p>
                </div>
                <div className="border-l-2 border-green-500/50 pl-6">
                  <p className="text-green-400 font-bold text-sm uppercase tracking-wider mb-2">Green Season</p>
                  <p className="text-gray-300 text-sm font-light">November – April. Lush landscapes, new-born animals, and lower rates.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Travel Essentials - EXACT 6 ITEMS WITH BULLETS */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl" />
        
        <Container className="relative">
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
              Everything you need for a seamless and extraordinary Botswanan adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essentials.slice(0, 3).map((item, i) => (
              <div key={i} className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
                <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {item.label}
                </h3>
                
                <div className="pt-6 border-t border-gray-200/50">
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {essentials.slice(3, 6).map((item, i) => (
              <div key={i+3} className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
                <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {item.label}
                </h3>
                
                <div className="pt-6 border-t border-gray-200/50">
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
                </div>
              </div>
            ))}
          </div>

          {/* Downloadable guide - ROUNDED BADGE, SQUARE BUTTON */}
          <div className="mt-20 pt-12 border-t border-gray-200/50">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-6 py-3 mb-6">
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600 font-light tracking-wider">
                  Premium Service Included
                </span>
              </div>
              <h4 className="text-2xl title text-gray-950 mb-4">
                Botswana Travel Guide
              </h4>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                All clients receive our exclusive digital travel guide with detailed delta preparation, 
                packing lists for water & land safaris, and emergency contact information.
              </p>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:text-foreground hover:bg-gray-50 h-12 px-8 font-light tracking-wider group/download"
                asChild
              >
                <a href="/downloads/botswana-travel-guide.pdf" download>
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

      <DestinationSwitcher currentDestination="botswana" />

      <PremiumCTASection
        title="Experience Africa's Last Eden"
        subtitle="Begin Your Journey"
        description="Our Botswana specialists are ready to help you craft an exclusive safari in the heart of the Okavango Delta."
        primaryButton={{
          text: "Get a Custom Quote",
          href: "/contact" 
        }}
        secondaryButton={{
          text: "Call Specialist",
          href: "+267123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920"
        brightness={50}
      />
    </main>
  );
}

