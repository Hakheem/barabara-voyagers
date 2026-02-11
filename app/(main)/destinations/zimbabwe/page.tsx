import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, Zap, Globe, Users, Check, Clock, 
  Sun, Camera, Car, Compass, Shield,
  Heart, BadgeDollarSign, Binoculars, Info, Plane, Droplets, Waves,
  FileText, CreditCard, Download, Sparkles, Star,
  Tent, Phone, Mountain, Footprints
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Zimbabwe Safaris - Victoria Falls & Authentic Wilderness | Barabara Voyagers',
  description: 'Experience the raw beauty of Zimbabwe. From the thundering Victoria Falls to the elite walking safaris of Mana Pools and the massive elephant herds of Hwange.',
};

export default function ZimbabwePage() { 
  const whyZimbabweData = [
    { 
      title: 'Elite Guiding Standards', 
      desc: 'Zimbabwean guides undergo the most rigorous training in Africa.', 
      icon: Compass, 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Walking Safari Capital', 
      desc: 'The birthplace of the walking safari. Track big game on foot.', 
      icon: Footprints, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Victoria Falls', 
      desc: 'One of the Seven Natural Wonders—the Smoke That Thunders.', 
      icon: Droplets, 
      img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Uncrowded Wilderness', 
      desc: 'Intimate wildlife sightings without vehicle convoys.', 
      icon: Binoculars, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Massive Elephant Herds', 
      desc: 'Hwange is home to over 45,000 elephants.', 
      icon: Zap, 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Exceptional Value', 
      desc: 'World-class experiences at better price points than neighbors.', 
      icon: BadgeDollarSign, 
      img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80' 
    },
  ];

  const safariPackagesData = [
    {
      id: '1',
      title: 'Grand Zimbabwe Explorer',
      slug: 'grand-zimbabwe-explorer',
      duration: '10 Days / 9 Nights',
      basePrice: 5100,
      description: 'The ultimate circuit through Zimbabwe\'s crown jewels. Marvel at Victoria Falls, track massive elephant herds in Hwange, and experience the world-renowned walking safaris of Mana Pools.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Victoria Falls guided tour', 'Hwange National Park drives', 'Mana Pools walking safari', 'Zambezi sunset cruise'],
      category: 'Signature',
      exclusivity: 'Elite Guiding Included',
      groupSize: 'Max 8 Guests'
    },
    {
      id: '2',
      title: 'Luxury Kariba & Mana Pools Fly-In',
      slug: 'luxury-kariba-mana-pools',
      duration: '8 Days / 7 Nights',
      basePrice: 6400,
      description: 'A sophisticated fly-in safari focusing on remote luxury. Experience Lake Kariba from Bumi Hills before flying into Mana Pools for intimate wildlife encounters and elite guiding.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Scenic bush flights', 'Bumi Hills infinity views', 'Elite professional guides', 'Private boat safaris'],
      category: 'Luxury',
      exclusivity: 'Private Fly-In',
      groupSize: 'Max 6 Guests'
    },
    {
      id: '3',
      title: 'Adventure Victoria Falls & Hwange',
      slug: 'adventure-vic-falls-hwange',
      duration: '7 Days / 6 Nights',
      basePrice: 3400,
      description: 'Perfect for thrill-seekers and wildlife lovers. Combine adrenaline activities at the Falls with exceptional game viewing in Hwange, Zimbabwe\'s largest national park.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&auto=format&fit=crop&q=80',
      highlights: ['White water rafting option', 'Big Five game drives', 'Painted Dog conservation visit', 'Elephant waterhole sightings'],
      category: 'Adventure',
      exclusivity: 'Activity Package',
      groupSize: 'Max 10 Guests'
    },
  ];

  const destinations = [
    {
      name: 'Victoria Falls',
      description: 'Mosi-oa-Tunya (The Smoke That Thunders). Beyond the falls, it is Africa\'s adventure capital for rafting, bungee jumping, and luxury cruising.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Hwange National Park',
      description: 'Zimbabwe\'s largest park, famous for its "Serengeti" plains and incredible predator-prey interactions around pumped waterholes.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Mana Pools',
      description: 'A UNESCO World Heritage site on the Zambezi River. Famous for its blue-hued forests and "standing" elephants on their hind legs.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Lake Kariba & Matusadona',
      description: 'The world\'s largest man-made lake. Houseboats, tiger fishing, and tracking rhino in the remote Matusadona National Park.',
      image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800&auto=format&fit=crop&q=80',
    },
  ];

  // ✅ FIXED: Only 4 essentials, converted to bullets, removed Currency, Safety, Communications
  const essentials = [
    {
      label: 'Visa Requirements',
      bullets: [
        'Category B countries (USA, UK, EU) can obtain a 30-day tourist visa on arrival for $30-$55 USD',
        'KAZA Univisa allows easy entry into Zambia as well ($50 USD)',
        'Passport valid for 6 months beyond travel dates'
      ],
      icon: FileText
    },
    {
      label: 'Health',
      bullets: [
        'Malaria prophylaxis recommended for all low-lying areas (Vic Falls, Hwange, Mana Pools)',
        'Yellow fever certificate required only if arriving from an endemic zone',
        'Comprehensive travel insurance strongly advised'
      ],
      icon: Shield
    },
    {
      label: 'Getting There',
      bullets: [
        'Victoria Falls (VFA) and Harare (HRE) are the main international gateways',
        'Domestic bush flights are the most efficient way to travel between parks',
        'Light aircraft transfers offer scenic aerial views'
      ],
      icon: Plane
    }
  ];

  return (
    <main className="bg-white">
      <WhyChooseSection
        title="Why Zimbabwe"
        subtitle="The Smoke That Thunders"
        tagline="Soul of the African safari"
        items={whyZimbabweData}
      />

      {/* Top Destinations - Premium Card Grid */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <Container className="relative">
          <div className="max-w-6xl mb-16">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent" />
              <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-light">
                Iconic Destinations
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-6 leading-[0.9]">
              Zimbabwe's Top<br />Destinations
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
              From the thunder of the Zambezi to the silence of the Kalahari sands.
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
        title="Wilderness Journeys"
        subtitle="Curated Expeditions"
        description="Expertly designed itineraries highlighting the legendary guiding and raw wilderness of Zimbabwe."
        safaris={safariPackagesData}
      />

      {/* Elite Guiding Feature - Split Layout */}
      <section className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-transparent" />
                <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-light">
                  The Gold Standard
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl title text-white mb-8 leading-tight">
                Elite Guiding<br />Standards
              </h2>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Zimbabwean professional guides are widely considered the best in Africa. Their 4-to-7 year licensing process is the most grueling on the continent, focusing on deep ecology, safety, and the art of tracking.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-500" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Immersive Walking Safaris</p>
                    <p className="text-gray-400 text-sm font-light">Safe and educational encounters with lions and elephants on foot.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-500" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Deep Ecological Knowledge</p>
                    <p className="text-gray-400 text-sm font-light">Beyond the Big Five—learn bird calls, medicinal plants, and tracking.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-500" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Uncompromising Safety</p>
                    <p className="text-gray-400 text-sm font-light">Rest easy knowing you are with the highest-trained professionals.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Users className="text-amber-500 h-4 w-4" /> 
                  <span className="font-light">Expert Led</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Shield className="text-green-500 h-4 w-4" /> 
                  <span className="font-light">Safety First</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] overflow-hidden border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80"
                alt="Walking safari in Mana Pools"
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
                When to Visit<br />Zimbabwe
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                Zimbabwe's climate is subtropical, with a distinct dry and wet season. The best time depends on your interest in Victoria Falls vs. wildlife viewing.
              </p>
              <div className="bg-blue-50 border border-blue-100 p-6">
                <h4 className="font-bold text-blue-900 mb-2 text-sm uppercase tracking-wider">Pro Tip: Victoria Falls Flow</h4>
                <p className="text-sm text-blue-800 font-light">Peak flow is April-May. For the best white-water rafting, visit during the low water season from August to December.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-amber-600 pl-8 py-4 group hover:border-amber-700 transition-colors">
                <h4 className="text-2xl title text-gray-900 mb-3 flex items-center gap-3">
                  <Binoculars className="text-amber-600" size={24} />
                  Peak Safari
                </h4>
                <p className="text-gray-600 font-light mb-3">July to October. Wildlife concentrates at waterholes. October offers spectacular "armchair" safaris at camp waterholes.</p>
                <div className="flex gap-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-light">Best Game Viewing</span>
                  <span className="text-xs uppercase tracking-wider text-green-600 font-light">Mana Pools Walking Season</span>
                </div>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 py-4 group hover:border-blue-700 transition-colors">
                <h4 className="text-2xl title text-gray-900 mb-3 flex items-center gap-3">
                  <Waves className="text-blue-600" size={24} />
                  Green Season
                </h4>
                <p className="text-gray-600 font-light mb-3">November to March. The "Emerald Season" is excellent for birding and photography. Mana Pools lodges often close during peak rains (Jan-Mar).</p>
                <span className="text-xs uppercase tracking-wider text-blue-600 font-light">Waterfall Full Flow (Mar-May)</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Travel Essentials - 3 ITEMS WITH BULLETS */}
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
              Everything you need for a seamless and extraordinary Zimbabwean adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essentials.map((item, i) => (
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
                Zimbabwe Travel Guide
              </h4>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                All clients receive our exclusive digital travel guide with detailed safari preparation, 
                Victoria Falls activity planning, and emergency contact information.
              </p>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:text-foreground hover:bg-gray-50 h-12 px-8 font-light tracking-wider group/download"
                asChild
              >
                <a href="/downloads/zimbabwe-travel-guide.pdf" download>
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

      <DestinationSwitcher currentDestination="zimbabwe" />

      <PremiumCTASection
        title="Ready for an Authentic Safari?"
        subtitle="Begin Your Journey"
        description="Contact our specialists to craft your Zimbabwean journey, from the mist of the Falls to the shadows of the Mana forests."
        primaryButton={{
          text: "Request a Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Call Expert Team",
          href: "+263123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920"
        brightness={50}
      />
    </main>
  );
}


