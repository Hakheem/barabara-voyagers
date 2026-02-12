import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, Zap, Globe, Users, Check, Clock, 
  Sunrise, Camera, Car, Compass, Mountain, Shield,
  Tent, Phone, Info, Droplets, Sparkles, Plane,
  FileText, CreditCard, Download, ExternalLink,
  Footprints, Star
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';
import { getSafarisByDestination } from '@/lib/sanity-queries';

export const metadata = {
  title: 'Namibia Safaris - Desert Landscapes & Wildlife | Barabara Voyagers',
  description: 'Experience Namibia\'s otherworldly landscapes. Towering red dunes, desert-adapted wildlife, dramatic coastlines, and ancient cultures in Africa\'s most photogenic country.',
};

export default async function NamibiaPage() {
  const whyNamibiaData = [
    { 
      title: 'Surreal Landscapes', 
      desc: 'The world\'s oldest desert meets the Atlantic Ocean.', 
      icon: Mountain, 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Desert Wildlife', 
      desc: 'Elephants and lions evolved to survive arid conditions.', 
      icon: Zap, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Self-Drive Freedom', 
      desc: 'Africa\'s premier self-drive destination.', 
      icon: Car, 
      img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Dark Sky Reserve', 
      desc: 'Some of the world\'s darkest skies for astro-photography.', 
      icon: Star, 
      img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Ancient Cultures', 
      desc: 'Meet the semi-nomadic Himba people.', 
      icon: Users, 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Malaria-Low Areas', 
      desc: 'Much of the country is arid and low-risk.', 
      icon: Shield, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
  ];

  // Fetch safaris from Sanity or fallback to hardcoded data
  const sanityData = await getSafarisByDestination('Namibia');
  const safariPackagesData = sanityData.length > 0 ? sanityData.map(safari => ({
    id: safari.id,
    title: safari.title,
    slug: safari.slug,
    duration: `${safari.duration} Days / ${safari.durationNights} Nights`,
    basePrice: safari.basePrice,
    description: safari.description,
    image: safari.images[0] || 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200',
    highlights: safari.highlights,
  })) : [
    {
      id: '1',
      title: 'Classic Namibia: Dunes & Dust',
      slug: 'namibia-classic-safari',
      duration: '10 Days / 9 Nights', 
      basePrice: 4200,
      description: 'Experience the silence of the world\'s oldest desert. From the towering red dunes of Sossusvlei to the wildlife-rich salt pans of Etosha.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Sossusvlei & Dune 45', 'Etosha Big Game Viewing', 'Swakopmund Adventure', 'Damaraland Petroglyphs'],
      category: 'Signature',
      exclusivity: 'Desert Camping Experience',
      groupSize: 'Max 10 Guests'
    },
    {
      id: '2',
      title: 'The Photographer\'s Dream',
      slug: 'namibia-photo-expedition',
      duration: '12 Days / 11 Nights',
      basePrice: 5500,
      description: 'A dedicated expedition for visual storytellers. Capture the skeletal trees of Deadvlei and the haunting shipwrecks of the Skeleton Coast.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Sunrise at Deadvlei', 'Skeleton Coast Shipwrecks', 'Himba Cultural Visit', 'Quiver Tree Forest'],
      category: 'Ultimate',
      exclusivity: 'Photography Guide',
      groupSize: 'Max 6 Guests'
    },
    {
      id: '3',
      title: 'Ultimate 4x4 Self-Drive',
      slug: 'namibia-self-drive-adventure',
      duration: '14 Days / 13 Nights',
      basePrice: 3100,
      description: 'The freedom of the open road. Navigate Namibia\'s gravel tracks in a fully equipped 4x4 with hand-picked lodges and wilderness campsites.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Fully Equipped 4x4', 'Pre-booked Camps/Lodges', 'Fish River Canyon', 'Complete Independence'],
      category: 'Self-Drive',
      exclusivity: 'Satellite Phone Included',
      groupSize: 'Private Vehicle'
    },
  ];

  const destinations = [
    {
      name: 'Sossusvlei & Deadvlei',
      description: 'The world\'s highest apricot-colored dunes. Witness the skeletal 900-year-old camel thorn trees of Deadvlei against deep orange sand.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Etosha National Park',
      description: 'Centered around a massive salt pan. Famous for floodlit waterholes where lions, elephants, and rhinos gather in the dry season.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'The Skeleton Coast',
      description: 'Where the icy Atlantic meets the burning Namib Desert. Shipwreck remains and hauntingly beautiful fog-shrouded shores.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Damaraland',
      description: 'A rugged, prehistoric landscape home to desert-adapted elephant and ancient San rock engravings at Twyfelfontein.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&auto=format&fit=crop&q=80',
    },
  ];

  const essentials = [
    { label: 'Visa Requirements', text: 'Many Western countries (USA, UK, EU) do not require a visa for stays up to 90 days. Always check the latest requirements before flying.' },
    { label: 'Health & Safety', text: 'Namibia is very safe. Most of the southern half is malaria-free. Tap water in major towns is generally safe to drink.' },
    { label: 'Local Currency', text: 'Namibian Dollar (NAD), pegged 1:1 with the South African Rand (ZAR) which is also accepted.' }
  ];

  return (
    <main className="bg-white">
      <WhyChooseSection
        title="Why Namibia"
        subtitle="The Namibia Experience"
        tagline="Land of endless horizons"
        description="Namibia is a land of contrasts. It's one of the least densely populated places on Earth, offering a profound sense of isolation and grandeur."
        items={whyNamibiaData}
      />

      {/* Iconic Destinations - Card Grid */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <Container className="relative">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent" />
              <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-light">
                Iconic Landscapes
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-6 leading-[0.9]">
              Namibia's Iconic<br />Destinations
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
              From the deep south to the rugged northwest, explore the most photogenic landscapes on Earth.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
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
        title="Desert Expeditions"
        subtitle="Curated Journeys"
        description="Tailored journeys designed for the ultimate desert adventure, from guided fly-ins to self-drive expeditions."
        safaris={safariPackagesData}
      />

      {/* Self-Drive Experience - Split Layout */}
      <section className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-transparent" />
                <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-light">
                  The Ultimate Road Trip
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl title text-white mb-8 leading-tight">
                Self-Drive<br />Namibia
              </h2>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Namibia is built for the independent traveler. With an extensive network of well-marked roads and world-class campsites, a self-drive safari offers a level of freedom you won't find anywhere else in Africa.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Car, text: 'Fully kitted 4x4s' },
                  { icon: Tent, text: 'Roof-top tents' },
                  { icon: Phone, text: 'Satellite phones' },
                  { icon: Info, text: '24/7 Roadside assist' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 bg-amber-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-light">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-amber-600 text-white hover:bg-amber-700 h-14 px-10 font-light tracking-wider border-none">
                Explore Self-Drive Options
              </Button>
            </div>
            
            <div className="relative h-[500px] overflow-hidden border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80"
                alt="4x4 driving in Namibia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* When to Visit */}
      <section className="py-32 bg-white relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent" />
                <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-light">
                  Seasonal Wisdom
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl title text-gray-950 mb-8 leading-tight">
                When to Visit<br />Namibia
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Namibia is a year-round destination, but the experience shifts dramatically between seasons. Our experts will guide you to the perfect time for your journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-amber-600 pl-8 py-4 group hover:border-amber-700 transition-colors">
                <h4 className="text-2xl title text-gray-900 mb-3 flex items-center gap-3">
                  <Sunrise className="text-amber-600" size={24} />
                  Dry Season
                </h4>
                <p className="text-gray-600 font-light mb-3">May to October. Best for wildlife as animals gather at waterholes. Days are sunny, but nights can be freezing.</p>
                <span className="text-xs uppercase tracking-wider text-amber-600 font-light">Peak Season</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 py-4 group hover:border-blue-700 transition-colors">
                <h4 className="text-2xl title text-gray-900 mb-3 flex items-center gap-3">
                  <Camera className="text-blue-600" size={24} />
                  Green Season
                </h4>
                <p className="text-gray-600 font-light mb-3">November to April. Fantastic for photography with dramatic skies, newborn animals, and lush green landscapes.</p>
                <span className="text-xs uppercase tracking-wider text-blue-600 font-light">Best Value</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

    
{/* Travel Essentials - NAMIBIA FIX */}
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
        Everything you need for a seamless and extraordinary Namibian adventure
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Visa */}
      <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <FileText className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          Visa Requirements
        </h3>
        
        <div className="pt-6 border-t border-gray-200/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Many Western countries (USA, UK, EU) do not require a visa for stays up to 90 days
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Passport valid for 6 months beyond travel dates
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Check latest requirements before flying
            </li>
          </ul>
        </div>

        <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
        </div>
      </div>

      {/* Health & Safety */}
      <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <Shield className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          Health & Safety
        </h3>
        
        <div className="pt-6 border-t border-gray-200/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Southern half of the country is malaria-free
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Tap water is generally safe in major towns
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Very safe for tourists, standard precautions apply
            </li>
          </ul>
        </div>

        <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
        </div>
      </div>

      {/* Currency */}
      <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <CreditCard className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          Currency & Payments
        </h3>
        
        <div className="pt-6 border-t border-gray-200/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Namibian Dollar (NAD) pegged 1:1 with South African Rand
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              South African Rand (ZAR) also widely accepted
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Credit cards accepted at major lodges and cities
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
          Namibia Travel Guide
        </h4>
        <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
          All clients receive our exclusive digital travel guide with detailed route planning, 
          packing lists for desert conditions, and emergency contact information.
        </p>
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:text-foreground hover:bg-gray-50 h-12 px-8 font-light tracking-wider group/download"
          asChild
        >
          <a href="/downloads/namibia-travel-guide.pdf" download>
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

      <DestinationSwitcher currentDestination="namibia" />

      <PremiumCTASection
        title="Start Your Namibian Journey"
        subtitle="Begin Your Adventure"
        description="Our experts have driven every mile of these desert roads. Let us plan your perfect escape into the world's oldest desert."
        primaryButton={{
          text: "Request a Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Call Windhoek Office",
          href: "+26461000000",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920"
        brightness={50}
      />
    </main>
  );
}

