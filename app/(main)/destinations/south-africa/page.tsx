import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, Zap, Globe, Users, Check, Clock, 
  Sun, Camera, Car, Compass, Shield,
  Heart, BadgeDollarSign, Binoculars, Info, Plane,
  FileText, CreditCard, Download, Sparkles, Star,
  Tent, Phone, Mountain
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';
import { getSafarisByDestination } from '@/lib/sanity-queries';

export const metadata = {
  title: 'South Africa Safaris - Big Five & Garden Route | Barabara Voyagers',
  description: 'Discover South Africa\'s incredible diversity. Big Five safaris in malaria-free reserves, Cape Town\'s stunning beauty, wine country, Garden Route, and world-class infrastructure.',
};

export default async function SouthAfricaPage() {
  const whySouthAfricaData = [
    { 
      title: 'Malaria-Free Safaris', 
      desc: 'Excellent Big Five reserves without malaria risk, perfect for families.', 
      icon: Shield, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Incredible Diversity', 
      desc: 'Safari, city, wine country, beaches, and mountains all in one trip.', 
      icon: Globe, 
      img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'World-Class Infrastructure', 
      desc: 'Excellent roads, reliable services, and international airports.', 
      icon: Zap, 
      img: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Big Five Guarantee', 
      desc: 'Private reserves like Sabi Sands offer virtually guaranteed sightings.', 
      icon: Binoculars, 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Year-Round Destination', 
      desc: 'Great viewing year-round. Summer for beaches, winter for game.', 
      icon: Sun, 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Great Value', 
      desc: 'More affordable than many African destinations with exceptional quality.', 
      icon: BadgeDollarSign, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
  ];

  // Fetch safaris from Sanity or fallback to hardcoded data
  const sanityData = await getSafarisByDestination('South Africa');
  const safariPackagesData = sanityData.length > 0 ? sanityData.map(safari => ({
    id: safari.id,
    title: safari.title,
    slug: safari.slug,
    duration: `${safari.duration} Days / ${safari.durationNights} Nights`,
    basePrice: safari.basePrice,
    description: safari.description,
    image: safari.images[0] || 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1200',
    highlights: safari.highlights,
  })) : [
    {
      id: '1',
      title: 'Classic South Africa Safari & Cape Town',
      slug: 'south-africa-safari-cape-town', 
      duration: '10 Days / 9 Nights',
      basePrice: 4200,
      description: 'The perfect introduction to the Rainbow Nation. Track the Big Five in Kruger, then discover Cape Town and the rolling vineyards of the Winelands.',
      image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Kruger National Park Big Five', 'Cape Town & Table Mountain', 'Cape Winelands tour', 'Garden Route scenery'],
      category: 'Signature',
      exclusivity: 'Malaria-Free Option',
    },
    {
      id: '2',
      title: 'Luxury Sabi Sands Safari',
      slug: 'luxury-sabi-sands',
      duration: '7 Days / 6 Nights',
      basePrice: 6800,
      description: 'Experience the pinnacle of African luxury. Sabi Sands offers the world\'s best leopard viewing with ultra-luxury lodges, gourmet dining, and off-road game drives.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Exclusive Sabi Sands Reserve', 'Guaranteed Big Five', 'Ultra-luxury lodges', 'Expert ranger guides'],
      category: 'Luxury',
      exclusivity: 'Private Vehicle',
    },
    {
      id: '3',
      title: 'Family-Friendly Malaria-Free Safari',
      slug: 'family-malaria-free-safari',
      duration: '8 Days / 7 Nights',
      basePrice: 3800,
      description: 'A worry-free adventure designed for families. Explore premier malaria-free reserves with specialized kids\' programs, family suites, and safe wildlife encounters.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Malaria-free reserves', 'Child-friendly lodges', 'Educational programs', 'Safe for all ages'],
      category: 'Family',
      exclusivity: 'Kids Activities Included',
      groupSize: 'Family Suites'
    },
  ];

  const destinations = [
    {
      name: 'Kruger National Park',
      description: 'South Africa\'s flagship park, one of the world\'s greatest wildlife destinations. Home to the Big Five and over 500 bird species across 7,500 square miles.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Sabi Sands Private Reserve',
      description: 'Exclusive private reserve adjacent to Kruger. Famous for incredible leopard sightings and ultra-luxury lodges with exceptional guiding.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Cape Town',
      description: 'One of the world\'s most beautiful cities. Table Mountain, Cape Point, pristine beaches, vibrant culture, and world-class dining.',
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Garden Route',
      description: 'Stunning coastal drive through indigenous forests, charming towns, whale watching in Hermanus, and dramatic scenery.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80',
    },
  ];

  const essentials = [
    {
      label: 'Visa Requirements',
      bullets: [
        'Many nationalities (USA, UK, EU, Canada, Australia) receive a free 90-day tourist visa on arrival',
        'We provide guidance for all bookings'
      ]
    },
    {
      label: 'Health & Safety',
      bullets: [
        'Yellow fever cert only if arriving from endemic zone',
        'Malaria prophylaxis recommended for Kruger, but optional for malaria-free reserves'
      ]
    },
    {
      label: 'Getting There',
      bullets: [
        'Johannesburg (JNB) and Cape Town (CPT) are major hubs with direct flights from USA, Europe, and Asia',
        'Domestic network is excellent'
      ]
    },
    {
      label: 'Currency',
      bullets: [
        'South African Rand (ZAR)',
        'Credit cards are widely accepted everywhere',
        'ATMs are readily available'
      ]
    },
    {
      label: 'Language',
      bullets: [
        'English is widely spoken and is the main language of tourism and business',
        '11 official languages'
      ]
    },
    {
      label: 'Safety',
      bullets: [
        'Safari areas are very safe',
        'In cities, use registered transport and standard common sense as you would in any major metropolis'
      ]
    }
  ];

  return (
    <main className="bg-white">
      <WhyChooseSection
        title="Why South Africa"
        subtitle="The Rainbow Nation"
        tagline="A world in one country"
        items={whySouthAfricaData}
      />

      {/* Top Destinations */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <Container className="relative">
          <div className="max-w-5xl mb-16">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent" />
              <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-light">
                Iconic Destinations
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-6 leading-[0.9]">
              South Africa's Top<br />Destinations
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
              From world-class game reserves to stunning coastal beauty and vibrant cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group relative bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-md hover:shadow-amber-500/10 overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={destination.image} 
                    alt={destination.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl title text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                      {destination.name}
                    </h3>
                    <span className="text-5xl title text-gray-100 group-hover:text-amber-50 transition-colors duration-500">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-px bg-amber-600/50 group-hover:w-12 transition-all duration-500" />
                    <span className="text-xs text-gray-400 font-light tracking-wider uppercase group-hover:text-amber-600 transition-colors duration-300">
                      Discover
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SafariPackagesSection
        title="Safari Experiences"
        subtitle="Curated Journeys"
        description="Expertly designed itineraries showcasing the best of South Africa, from the Bushveld to the Cape."
        safaris={safariPackagesData}
      />

      {/* Malaria-Free Information */}
      <section className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-green-500 to-transparent" />
                <span className="text-green-500 uppercase tracking-[0.3em] text-xs font-light">
                  Family-Friendly
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl title text-white mb-8 leading-tight">
                Malaria-Free<br />Safaris
              </h2>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                South Africa offers several excellent malaria-free Big Five reserves, making it the perfect choice for families with young children, pregnant women, or anyone preferring to avoid medication.
              </p>
              
              <div className="mb-10">
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm text-green-500">
                  Top Malaria-Free Reserves
                </h4>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Madikwe Game Reserve</p>
                      <p className="text-gray-400 text-sm font-light">Big Five, excellent lodges, 185,000 acres near Botswana border.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Pilanesberg National Park</p>
                      <p className="text-gray-400 text-sm font-light">Volcanic landscape hosting the Big Five, accessible from Johannesburg.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Eastern Cape Reserves</p>
                      <p className="text-gray-400 text-sm font-light">Addo Elephant Park, Shamwari, and Amakhala offer lush, malaria-free viewing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Heart className="text-red-500 h-4 w-4" /> 
                  <span className="font-light">Safe for all ages</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Shield className="text-green-500 h-4 w-4" /> 
                  <span className="font-light">No medication needed</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] overflow-hidden border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80"
                alt="Family safari in South Africa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* When to Visit */}
      <section className="py-28 bg-white relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 justify-start items-center ">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent" />
                <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-light">
                  Seasonal Wisdom
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl title text-gray-950 mb-8 leading-tight">
                When to Visit<br />South Africa
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                South Africa is a year-round destination. The best time depends on whether you prioritize game viewing or Cape Town's beaches.
              </p>
              <div className="bg-blue-50 border border-blue-100 p-6">
                <h4 className="font-bold text-blue-900 mb-2 text-sm uppercase tracking-wider">Shoulder Seasons</h4>
                <p className="text-sm text-blue-800 font-light">April & October offer a great compromise with good weather, fewer crowds, and often the best rates.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-amber-600 pl-8 py-4 group hover:border-amber-700 transition-colors">
                <h4 className="text-2xl title text-gray-900 mb-3 flex items-center gap-3">
                  <Binoculars className="text-amber-600" size={24} />
                  Safari Season
                </h4>
                <p className="text-gray-600 font-light mb-3">May to September (Winter). Dry season means sparse vegetation and animals congregating at water. Cool mornings, optimal wildlife viewing.</p>
                <div className="flex gap-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-light">Optimal Wildlife</span>
                  <span className="text-xs uppercase tracking-wider text-green-600 font-light">Whale Watching (Jul-Nov)</span>
                </div>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 py-4 group hover:border-blue-700 transition-colors">
                <h4 className="text-2xl title text-gray-900 mb-3 flex items-center gap-3">
                  <Sun className="text-blue-600" size={24} />
                  Summer Season
                </h4>
                <p className="text-gray-600 font-light mb-3">November to March. The "Green Season" features lush landscapes and newborn animals. Perfect time for Cape Town beaches and Winelands.</p>
                <span className="text-xs uppercase tracking-wider text-blue-600 font-light">Cape Town Peak</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Travel Essentials - BULLET FORMAT, ORIGINAL DATA ONLY */}
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
              Everything you need for a seamless and extraordinary South African adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essentials.slice(0, 3).map((item, i) => (
              <div key={i} className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
                <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                  {i === 0 && <FileText className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
                  {i === 1 && <Shield className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
                  {i === 2 && <Plane className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
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
                  {i === 0 && <CreditCard className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
                  {i === 1 && <Globe className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
                  {i === 2 && <Shield className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
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
                South Africa Travel Guide
              </h4>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                All clients receive our exclusive digital travel guide with detailed safari preparation, 
                malaria-free reserve options, and emergency contact information.
              </p>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:text-foreground hover:bg-gray-50 h-12 px-8 font-light tracking-wider group/download"
                asChild
              >
                <a href="/downloads/south-africa-travel-guide.pdf" download>
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

      <DestinationSwitcher currentDestination="south-africa" />

      <PremiumCTASection
        title="Ready to Explore South Africa?"
        subtitle="Begin Your Journey"
        description="Contact our specialists to design your perfect mix of safari, city, and coast in the Rainbow Nation."
        primaryButton={{
          text: "Request a Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Call Expert Team",
          href: "+27123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920"
        brightness={50}
      />
    </main>
  );
}

