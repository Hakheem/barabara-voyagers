import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, Zap, Globe, Users, Check, Clock, 
  Sun, Camera, Car, Compass, Shield,
  Heart, BadgeDollarSign, Binoculars, Info, Plane, Waves, Anchor,
  FileText, CreditCard, Download, Sparkles, Star,
  Tent, Phone, Mountain, Footprints, Droplets
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Zambia Safaris - Walking Safaris & South Luangwa | Barabara Voyagers',
  description: 'Experience Zambia\'s authentic wilderness. South Luangwa walking safaris, Lower Zambezi canoeing, and Victoria Falls from the Zambian side.',
};

export default function ZambiaPage() {
  const whyZambiaData = [
    { 
      title: 'Walking Safari Pioneer', 
      desc: 'The birthplace of the walking safari. South Luangwa remains the premier destination.', 
      icon: Footprints, 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Leopard Capital', 
      desc: 'South Luangwa has the highest leopard density in Africa.', 
      icon: Camera, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'River-Based Safaris', 
      desc: 'Unique canoeing and boating past elephants, hippos, and crocodiles.', 
      icon: Waves, 
      img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Authentic Wilderness', 
      desc: 'One of the least crowded destinations with high-quality, low-impact tourism.', 
      icon: Globe, 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Legendary Guiding', 
      desc: 'Zambian guides lead the industry in walking safari safety and knowledge.', 
      icon: Compass, 
      img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Great Value Luxury', 
      desc: 'High-end, intimate bush camps offering incredible value.', 
      icon: BadgeDollarSign, 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80' 
    },
  ];

  const safariPackagesData = [
    {
      id: '1',
      title: 'South Luangwa Walking Safari',
      slug: 'south-luangwa-walking',
      duration: '8 Days / 7 Nights',
      basePrice: 4500,
      description: 'Step into the birthplace of the walking safari. Traverse the pristine Luangwa Valley on foot with Africa\'s finest guides, tracking leopards in an immersive, wild experience.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Guided walking safaris', 'Leopard capital of Africa', 'Night game drives', 'Remote bush camps'],
      category: 'Signature',
      exclusivity: 'Elite Walking Guides',
      groupSize: 'Max 6 Guests'
    },
    {
      id: '2',
      title: 'Lower Zambezi Canoe Safari',
      slug: 'lower-zambezi-canoe', 
      duration: '7 Days / 6 Nights',
      basePrice: 5200,
      description: 'A unique water-based adventure. Drift silently past bathing elephants and pods of hippos in the Lower Zambezi, combining luxury riverside lodging with thrilling canoe excursions.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Canoe river safaris', 'Tiger fishing opportunities', 'Elephant river crossings', 'Sunset boat cruises'],
      category: 'Adventure',
      exclusivity: 'Private Canoe Guide',
      groupSize: 'Max 8 Guests'
    },
    {
      id: '3',
      title: 'Zambia Grand Explorer',
      slug: 'zambia-grand-explorer',
      duration: '12 Days / 11 Nights',
      basePrice: 6800,
      description: 'The ultimate Zambian circuit. From the thunder of Victoria Falls to the walking trails of South Luangwa and the water-wilderness of the Lower Zambezi.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Victoria Falls (Livingstone)', 'South Luangwa & Lower Zambezi', 'Internal bush flights', 'Elite guiding throughout'],
      category: 'Ultimate',
      exclusivity: 'Fully Bespoke',
      groupSize: 'Private Journey'
    },
  ];

  const destinations = [
    {
      name: 'South Luangwa',
      description: 'One of Africa\'s greatest wildlife sanctuaries. Famous for its walking safaris and incredible sightings of leopard, lion, and hippo.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Lower Zambezi',
      description: 'A spectacular park where the Zambezi river meets the escarpment. Best known for water-based game viewing and canoe safaris.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Livingstone (Vic Falls)',
      description: 'Home to the Zambian side of Victoria Falls. Offers incredible views, the famous Devil\'s Pool, and high-adrenaline river activities.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Kafue National Park',
      description: 'Zambia\'s oldest and largest park. Remote, diverse, and home to the unique Busanga Plains and rare red lechwe antelope.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80',
    },
  ];

  const essentials = [
    { label: 'Visa Requirements', text: 'Zambia has recently waived visa requirements for many nationalities including UK, USA, EU, and Australia. Check current status before travel.' },
    { label: 'Health & Safety', text: 'Malaria prophylaxis is highly recommended. Yellow fever certificate required if traveling from an endemic zone.' },
    { label: 'Getting There', text: 'Lusaka (LUN) is the main hub. Most safaris require domestic bush flights to Mfuwe (South Luangwa) or Jeki (Lower Zambezi).' },
    { label: 'Currency', text: 'Zambian Kwacha (ZMW). US Dollars are widely used in the tourism industry for tips and park fees.' },
    { label: 'Language', text: 'English is the official language and is widely spoken, along with many local languages like Bemba and Nyanja.' },
    { label: 'Connectivity', text: 'Bush camps are meant for disconnect. Wi-Fi is often limited to the main lodge area and can be intermittent.' }
  ];

  return (
    <main className="bg-white">
      <WhyChooseSection
        title="Why Zambia"
        subtitle="The Real Africa"
        tagline="Birthplace of the walking safari"
        // description="Zambia offers a raw, unfiltered safari experience. It is the destination of choice for those seeking authenticity, elite guiding, and the thrill of the bush on foot."
        items={whyZambiaData}
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
          <div className="max-w-7xl mb-16">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent" />
              <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-light">
                Iconic Destinations
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-6 leading-[0.9]">
              Zambia's Top<br />Destinations
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
              From the thunder of Mosi-oa-Tunya to the silent channels of the Zambezi.
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
        title="Walking & Water Expeditions"
        subtitle="Curated Journeys"
        description="Expertly designed itineraries focusing on immersive bush experiences and river-based adventures in Zambia's pristine wilderness."
        safaris={safariPackagesData}
      />

      {/* Walking Safari Feature */}
      <section className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-transparent" />
                <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-light">
                  The Original Safari
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl title text-white mb-8 leading-tight">
                The Walking Safari<br />Experience
              </h2>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                In Zambia, a safari isn't just about watching animals from a vehicle; it's about being part of the landscape. South Luangwa is the birthplace of the modern walking safari, where every step reveals a new secret of the bush.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-500" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Intimate Encounters</p>
                    <p className="text-gray-400 text-sm font-light">Senses are heightened as you track big game on foot with armed scouts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-500" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-white font-medium">The Small Things</p>
                    <p className="text-gray-400 text-sm font-light">Discover the complex world of insects, birds, and flora often missed from a car.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-amber-500" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Remote Fly-Camps</p>
                    <p className="text-gray-400 text-sm font-light">Experience the true romance of the bush in remote, temporary camps.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Heart className="text-red-500 h-4 w-4" /> 
                  <span className="font-light">Truly Authentic</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Compass className="text-amber-500 h-4 w-4" /> 
                  <span className="font-light">Expertly Guided</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] overflow-hidden border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80"
                alt="Walking safari in Zambia"
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
                When to Visit<br />Zambia
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                Zambia is highly seasonal. Many bush camps close during the wet season, making timing crucial for the best experience.
              </p>
              <div className="bg-blue-50 border border-blue-100 p-6">
                <h4 className="font-bold text-blue-900 mb-2 text-sm uppercase tracking-wider">Canoe Safaris</h4>
                <p className="text-sm text-blue-800 font-light">The best water levels for canoeing the Lower Zambezi are between June and October.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-amber-600 pl-8 py-4 group hover:border-amber-700 transition-colors">
                <h4 className="text-2xl title text-gray-900 mb-3 flex items-center gap-3">
                  <Binoculars className="text-amber-600" size={24} />
                  Dry Season
                </h4>
                <p className="text-gray-600 font-light mb-3">June to October. Peak safari season. Vegetation thins, wildlife congregates at water. Best for walking safaris.</p>
                <div className="flex gap-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-light">Optimal Wildlife</span>
                  <span className="text-xs uppercase tracking-wider text-green-600 font-light">Leopard Sightings</span>
                </div>
              </div>
              <div className="border-l-2 border-emerald-600 pl-8 py-4 group hover:border-emerald-700 transition-colors">
                <h4 className="text-2xl title text-gray-900 mb-3 flex items-center gap-3">
                  <Sun className="text-emerald-600" size={24} />
                  Emerald Season
                </h4>
                <p className="text-gray-600 font-light mb-3">November to May. Lush green landscapes, birding paradise, and newborns. Some camps close, but boating is scenic.</p>
                <span className="text-xs uppercase tracking-wider text-emerald-600 font-light">Birding Paradise</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

{/* Travel Essentials - ZAMBIA FIX */}
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
        Everything you need for a seamless and extraordinary Zambian adventure
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
              Waived for many nationalities (UK, USA, EU, Australia)
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Check current status before travel
            </li>
          </ul>
        </div>

        <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
        </div>
      </div>

      {/* Health */}
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
              Malaria prophylaxis highly recommended
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Yellow Fever certificate required from endemic zones
            </li>
          </ul>
        </div>

        <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
        </div>
      </div>

      {/* Getting There */}
      <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <Plane className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          Getting There
        </h3>
        
        <div className="pt-6 border-t border-gray-200/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Lusaka (LUN) is the main international hub
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Domestic bush flights to Mfuwe (South Luangwa)
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Jeki airstrip serves Lower Zambezi
            </li>
          </ul>
        </div>

        <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {/* Currency */}
      <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <CreditCard className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          Currency
        </h3>
        
        <div className="pt-6 border-t border-gray-200/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Zambian Kwacha (ZMW) is local currency
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              US Dollars widely accepted for tips and park fees
            </li>
          </ul>
        </div>

        <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
        </div>
      </div>

      {/* Language */}
      <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <Globe className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          Language
        </h3>
        
        <div className="pt-6 border-t border-gray-200/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              English is the official language
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Widely spoken in tourism and cities
            </li>
          </ul>
        </div>

        <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
        </div>
      </div>

      {/* Connectivity */}
      <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30">
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <Info className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
          Connectivity
        </h3>
        
        <div className="pt-6 border-t border-gray-200/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Bush camps designed for disconnect
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Wi-Fi limited to main lodge areas
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
              Service can be intermittent
            </li>
          </ul>
        </div>

        <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
          Zambia Travel Guide
        </h4>
        <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
          All clients receive our exclusive digital travel guide with detailed walking safari preparation, 
          canoe safety tips, and emergency contact information.
        </p>
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:text-foreground hover:bg-gray-50 h-12 px-8 font-light tracking-wider group/download"
          asChild
        >
          <a href="/downloads/zambia-travel-guide.pdf" download>
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


      <DestinationSwitcher currentDestination="zambia" />

      <PremiumCTASection
        title="Ready for the Ultimate Walking Safari?"
        subtitle="Begin Your Journey"
        description="Contact our Zambia specialists to design your journey into the heart of the Luangwa Valley or the waterways of the Lower Zambezi."
        primaryButton={{
          text: "Request a Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Call Expert Team",
          href: "+260211123456",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920"
        brightness={50}
      />
    </main>
  );
}

