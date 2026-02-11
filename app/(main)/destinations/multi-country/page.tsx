import Image from 'next/image';
import Link from 'next/link';
import { 
  Globe, Check, Clock, Compass, Plane, Map, Shield, 
  Users, BadgeDollarSign, Camera, Zap, Info,
  FileText, CreditCard, Download, ExternalLink,
  Sparkles, Star, Award, Briefcase
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Multi-Country Safari Packages - Combine African Destinations | Barabara Voyagers',
  description: 'Combine the best of African safaris. Kenya + Tanzania, Uganda + Rwanda gorillas, Victoria Falls + Botswana.',
};

export default function MultiCountryPage() {
  const whyMultiData = [
    { 
      title: 'Maximum Diversity', 
      desc: 'Combine desert dunes with lush deltas or savannahs with rainforests.', 
      icon: Globe, 
      img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Seamless Logistics', 
      desc: 'We handle all regional flights, border crossings, and multi-country visas.', 
      icon: Plane, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Better Value', 
      desc: 'Maximize your international airfare by seeing multiple bucket-list spots.', 
      icon: BadgeDollarSign, 
      img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Expert Curation', 
      desc: 'Itineraries designed to follow the seasonal movement of wildlife across borders.', 
      icon: Map, 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Elite Guiding', 
      desc: 'Hand-picked guides who specialize in regional cross-border expeditions.', 
      icon: Users, 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Priority Access', 
      desc: 'Pre-secured permits for high-demand activities like Gorilla trekking.', 
      icon: Zap, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
  ];

  const safariPackagesData = [
    {
      id: '1',
      title: 'Kenya & Tanzania Grand Safari',
      slug: 'kenya-tanzania-grand',
      duration: '12 Days / 11 Nights',
      basePrice: 6800,
      description: 'The ultimate East African circuit. Witness the Great Migration in both the Masai Mara and the Serengeti, explore the Ngorongoro Crater, and experience the diverse cultures of two safari giants.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Masai Mara & Serengeti', 'Ngorongoro Crater', 'Great Migration crossings', 'Amboseli elephant views'],
      category: 'Signature',
      exclusivity: 'Cross-Border Specialist Guide',
      groupSize: 'Max 8 Guests'
    },
    { 
      id: '2',
      title: 'Uganda & Rwanda Gorilla Adventure',
      slug: 'uganda-rwanda-gorillas',
      duration: '10 Days / 9 Nights',
      basePrice: 8500,
      description: 'A profound primate experience. Trek mountain gorillas in both Bwindi Impenetrable Forest and Volcanoes National Park, plus chimpanzee tracking in Kibale.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Double Gorilla Trekking', 'Chimpanzee tracking', 'Kigali memorial visit', 'Lake Kivu'],
      category: 'Ultimate',
      exclusivity: 'Gorilla Permits Included',
      groupSize: 'Max 6 Guests'
    },
    {
      id: '3',
      title: 'Vic Falls, Botswana & Namibia',
      slug: 'vic-falls-botswana-namibia',
      duration: '14 Days / 13 Nights',
      basePrice: 7200,
      description: 'A journey through Southern Africa\'s most dramatic landscapes. From the thunder of Victoria Falls to the floodplains of the Okavango Delta and the towering red dunes of Sossusvlei.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Victoria Falls', 'Okavango Delta', 'Chobe River cruise', 'Sossusvlei Dunes'],
      category: 'Signature',
      exclusivity: 'KAZA Univisa Included',
      groupSize: 'Max 8 Guests'
    },
  ];

  const essentials = [
    {
      label: 'Multi-Country Visas',
      bullets: [
        'East Africa Tourist Visa (Kenya, Uganda, Rwanda) - $100 USD',
        'KAZA Univisa (Zambia, Zimbabwe) - $50 USD',
        'We handle all visa applications and documentation'
      ]
    },
    {
      label: 'Regional Flights',
      bullets: [
        'Coordinated bush-to-bush transfers between parks',
        'Light aircraft between Kenya/Tanzania camps',
        'Never waste a day in an airport lounge'
      ]
    },
    {
      label: 'Packing Tips',
      bullets: [
        'Varying climates require versatile layers',
        'We provide a detailed packing list per itinerary',
        'Laundry services available at all lodges'
      ]
    },
    {
      label: 'Health Requirements',
      bullets: [
        'Yellow Fever certificate required for cross-border travel',
        'Malaria prophylaxis recommended for all low-lying areas',
        'Comprehensive travel insurance mandatory'
      ]
    },
    {
      label: 'Currency',
      bullets: [
        'Each country has its own currency',
        'US Dollars accepted everywhere',
        'Small denominations ($1, $5, $10) essential for tips'
      ]
    },
    {
      label: '24/7 Support',
      bullets: [
        'Regional teams in every destination',
        'Seamless hand-offs between countries',
        'Emergency contacts provided pre-departure'
      ]
    }
  ];

  return (
    <main className="bg-white">
      <WhyChooseSection
        title="Why Multi-Country"
        subtitle="Ultimate Africa"
        tagline="See the continent in full color"
        description="Africa is a continent of contrasts. By crossing borders, you experience the full spectrum of wildlife, geography, and culture in a single, seamless journey."
        items={whyMultiData}
      />

      <SafariPackagesSection
        title="Epic Cross-Border Journeys"
        subtitle="Curated Expeditions"
        description="Our signature multi-country routes designed for the traveler who wants to see it all, with every border crossing and regional flight seamlessly coordinated."
        safaris={safariPackagesData}
      />

      {/* Easy Border Guarantee - Premium Split Layout */}
      <section className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
              <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-light">
                Stress-Free Borders
              </span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-500/30 to-transparent" />
            </div>
            <h2 className="text-5xl md:text-6xl title text-white mb-6 leading-tight">
              The "Easy Border"<br />Guarantee
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Crossing borders in Africa shouldn't be complicated. We handle every detail so you can focus on the wildlife.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-amber-500/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl title text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                Visa Handling
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                We assist with East African Tourist Visas and KAZA UniVisas to keep border crossings simple and stress-free.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-xs text-amber-500 font-light tracking-wider uppercase">Included</span>
              </div>
            </div>

            <div className="group p-8 bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-amber-500/10 flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl title text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                Regional Flights
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Coordinated bush-to-bush transfers so you never waste a day in an airport waiting lounge.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-xs text-amber-500 font-light tracking-wider uppercase">Seamless</span>
              </div>
            </div>

            <div className="group p-8 bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-amber-500/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl title text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                24/7 Support
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Our regional teams are on the ground in every country to ensure seamless hand-offs and peace of mind.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-xs text-amber-500 font-light tracking-wider uppercase">Always On</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Travel Essentials - MULTI-COUNTRY */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-light">
                Cross-Border Preparedness
              </span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>
            
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-4 leading-tight">
              Multi-Country Essentials
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Everything you need to know for a seamless multi-country African adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essentials.slice(0, 3).map((item, i) => (
              <div key={i} className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
                <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                  {i === 0 && <FileText className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
                  {i === 1 && <Plane className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
                  {i === 2 && <Briefcase className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
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
                  {i === 0 && <Shield className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
                  {i === 1 && <CreditCard className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
                  {i === 2 && <Users className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
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
                Multi-Country Safari Guide
              </h4>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                All clients receive our exclusive digital travel guide with cross-border logistics, 
                visa requirements, and regional flight planning for multi-country journeys.
              </p>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:text-foreground hover:bg-gray-50 h-12 px-8 font-light tracking-wider group/download"
                asChild
              >
                <a href="/downloads/multi-country-guide.pdf" download>
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

      <DestinationSwitcher currentDestination="multi-country" />

      <PremiumCTASection
        title="Can't Find Your Perfect Combo?"
        subtitle="Design Your Journey"
        description="We can link any two (or three) destinations in Africa. Tell us your bucket list, and we will build the bridge across borders."
        primaryButton={{
          text: "Design Custom Multi-Country Trip",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Speak to a Specialist",
          href: "+254123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920"
        brightness={50}
      />
    </main>
  );
}

