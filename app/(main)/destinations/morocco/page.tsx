import Image from 'next/image';
import Link from 'next/link';
import { 
  Check, Clock, Camera, Compass, MapPin, 
  Sun, Tent, Coffee, Users, Shield, Heart,
  FileText, CreditCard, Download, ExternalLink,
  Sparkles, Star, Moon, Mountain, Landmark,
  Globe, Plane, BadgeDollarSign
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import PremiumCTASection from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Morocco Safaris & Tours - Sahara Desert Adventures | Barabara Voyagers',
  description: 'Explore Morocco\'s Sahara Desert, ancient cities, and Atlas Mountains. Luxury riads, camel treks, and cultural experiences.',
};

export default function MoroccoPage() {
  const whyMoroccoData = [
    { 
      title: 'Luxury Riads', 
      desc: 'Stay in restored traditional palaces hidden within the city walls.', 
      icon: Heart, 
      img: 'https://images.unsplash.com/photo-1539020290231-9584e27c28b2?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Desert Glamping', 
      desc: 'Private tented suites with en-suite bathrooms in the heart of the dunes.', 
      icon: Tent, 
      img: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Ancient Souks', 
      desc: 'Expert-led shopping tours to find the finest carpets, leathers, and spices.', 
      icon: Coffee, 
      img: 'https://images.unsplash.com/photo-1505188194166-04f58f48cd53?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Berber Culture', 
      desc: 'Immersive experiences with the indigenous people of the Atlas Mountains.', 
      icon: Users, 
      img: 'https://images.unsplash.com/photo-1539020290231-9584e27c28b2?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Hidden Gems', 
      desc: 'Access to private gardens and historic sites closed to the general public.', 
      icon: Compass, 
      img: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=80' 
    },
    { 
      title: 'Expert Logistics', 
      desc: 'Private 4x4 transport with professional driver-guides across the country.', 
      icon: Shield, 
      img: 'https://images.unsplash.com/photo-1505188194166-04f58f48cd53?w=800&auto=format&fit=crop&q=80' 
    },
  ];

  const safariPackagesData = [
    {
      id: '1',
      title: 'Imperial Cities & Sahara Adventure',
      slug: 'morocco-imperial-cities-sahara',
      duration: '10 Days / 9 Nights',
      basePrice: 4800,
      description: 'From the medinas of Marrakech and Fes to the golden dunes of Erg Chebbi. Stay in restored palaces and luxury desert camps, with private guides and 4x4 transport throughout.',
      image: 'https://images.unsplash.com/photo-1539020290231-9584e27c28b2?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Marrakech & Fes Riads', 'Camel trek at sunset', 'Erg Chebbi luxury camp', 'Atlas Mountains crossing'],
      category: 'Signature',
      exclusivity: 'Private Driver-Guide',
      groupSize: 'Max 8 Guests'
    },
    {
      id: '2',
      title: 'Grand Morocco: Coast to Desert',
      slug: 'morocco-grand-tour',
      duration: '14 Days / 13 Nights',
      basePrice: 7200,
      description: 'A complete Moroccan odyssey. Begin in cosmopolitan Casablanca, wander the blue streets of Chefchaouen, and end under the stars of the Sahara with Berber musicians and gourmet dining.',
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Chefchaouen "Blue City"', 'Sahara star-gazing', 'Essaouira coast', 'Traditional hammam'],
      category: 'Ultimate',
      exclusivity: 'Fully Bespoke',
      groupSize: 'Private Journey'
    },
    {
      id: '3',
      title: 'Atlas Mountains & Berber Villages',
      slug: 'morocco-atlas-berber',
      duration: '7 Days / 6 Nights',
      basePrice: 3400,
      description: 'Trek through terraced valleys and ancient Berber villages. Stay in eco-lodges, learn traditional cooking, and experience the warm hospitality of the High Atlas.',
      image: 'https://images.unsplash.com/photo-1505188194166-04f58f48cd53?w=1200&auto=format&fit=crop&q=80',
      highlights: ['Guided mountain trekking', 'Berber homestay', 'Traditional cooking class', 'Valley of the Roses'],
      category: 'Adventure',
      exclusivity: 'Local Berber Guides',
      groupSize: 'Max 10 Guests'
    },
  ];

  const regions = [
    {
      name: 'The Sahara Desert',
      desc: 'Sleep under the stars in luxury tented camps. Experience sunset camel treks across the Erg Chebbi dunes and the silent majesty of the world\'s most famous desert.',
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=80'
    },
    {
      name: 'Marrakech & Fes',
      desc: 'Ancient Medinas where time stands still. Stay in historic Riads, navigate bustling souks, and witness the intricate craftsmanship of Moroccan zellige tilework.',
      image: 'https://images.unsplash.com/photo-1539020290231-9584e27c28b2?w=800&auto=format&fit=crop&q=80'
    },
    { 
      name: 'Atlas Mountains',
      desc: 'Hike through Berber villages and terraced valleys. The High Atlas offer a cool retreat with stunning vistas and authentic mountain hospitality.',
      image: 'https://images.unsplash.com/photo-1505188194166-04f58f48cd53?w=800&auto=format&fit=crop&q=80'
    }
  ];

  const essentials = [
    {
      label: 'Visa Requirements',
      bullets: [
        'Many nationalities (USA, UK, EU, Canada) do not require a visa for stays up to 90 days',
        'Passport valid for at least 6 months beyond travel dates',
        'We provide guidance for all bookings'
      ]
    },
    {
      label: 'Health & Safety',
      bullets: [
        'No mandatory vaccinations, but Hepatitis A and Typhoid recommended',
        'Tap water not recommended; stick to bottled water',
        'Very safe for tourists; standard precautions apply in medinas'
      ]
    },
    {
      label: 'Getting There',
      bullets: [
        'Marrakech (RAK) and Casablanca (CMN) are main international gateways',
        'Direct flights from major European and Middle Eastern hubs',
        'Private 4x4 transport is the premium way to explore'
      ]
    },
    {
      label: 'Currency',
      bullets: [
        'Moroccan Dirham (MAD)',
        'Credit cards accepted at hotels and riads',
        'Cash preferred in souks and small towns'
      ]
    },
    {
      label: 'Language',
      bullets: [
        'Arabic and Berber are official languages',
        'French widely spoken in tourism',
        'English increasingly common at luxury properties'
      ]
    },
    {
      label: 'Best Time',
      bullets: [
        'Spring (March-May) and Autumn (September-November) are ideal',
        'Mild temperatures, blooming landscapes',
        'Sahara best from October to April'
      ]
    }
  ];

  return (
    <main className="bg-white">
      <WhyChooseSection
        title="Why Morocco"
        subtitle="North African Magic"
        tagline="A sensory explosion of color, spice, and silence"
        description="Morocco is a sensory explosion—the scent of spices, the vibrant blue of Chefchaouen, and the golden silence of the Sahara."
        items={whyMoroccoData}
      />

      {/* Iconic Regions - Premium Card Grid */}
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
                Iconic Landscapes
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-6 leading-[0.9]">
              Morocco's Iconic<br />Regions
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
              From the "Blue City" to the "Red City," Morocco is a kaleidoscope of regional identities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="group relative bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-md hover:shadow-amber-500/10 overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={region.image} 
                    alt={region.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl title text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                      {region.name}
                    </h3>
                    <span className="text-5xl title text-gray-100 group-hover:text-amber-50 transition-colors duration-500">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-sm">
                    {region.desc}
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
        title="Moroccan Journeys"
        subtitle="Curated Expeditions"
        description="From the labyrinthine souks of Marrakech to the star-filled skies of the Sahara, each itinerary is crafted for the discerning traveler."
        safaris={safariPackagesData}
      />

      {/* Sahara Feature - Premium Split Layout */}
      <section className="py-32 bg-gradient-to-b from-[#1a1410] to-[#0f0b08] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] overflow-hidden border border-white/10 order-2 lg:order-1">
              <Image 
                src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=80" 
                alt="Sahara Desert Camp" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-transparent" />
                <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-light">
                  The Desert Awaits
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl title text-white mb-8 leading-tight">
                Night Under the<br />Sahara Stars
              </h2>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                The highlight of any Moroccan journey is the trek into the Erg Chebbi or Erg Chigaga dunes. Our private camps offer a level of luxury that contrasts beautifully with the raw, wild desert landscape.
              </p>
              
              <div className="space-y-5 mb-10">
                {[
                  'Traditional Berber fire-side music',
                  'Private 4-course desert dinners',
                  'Sandboarding on golden dunes',
                  'Sunrise camel treks'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-amber-500/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-amber-500" strokeWidth={3} />
                    </div>
                    <span className="text-gray-200 font-light">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-10 font-light tracking-wider border-none"
                asChild
              >
                <Link href="/contact">View Desert Itineraries</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Travel Essentials - MOROCCO */}
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
              Everything you need for a seamless and extraordinary Moroccan adventure
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
                  {i === 2 && <Sun className="w-8 h-8 text-amber-600" strokeWidth={1.5} />}
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
                Morocco Travel Guide
              </h4>
              <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                All clients receive our exclusive digital travel guide with riad recommendations, 
                souk navigation tips, and emergency contact information.
              </p>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:text-foreground hover:bg-gray-50 h-12 px-8 font-light tracking-wider group/download"
                asChild
              >
                <a href="/downloads/morocco-travel-guide.pdf" download>
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

      <DestinationSwitcher currentDestination="morocco" />

      <PremiumCTASection
        title="Marhaba! (Welcome)"
        subtitle="Begin Your Moroccan Journey"
        description="Ready to experience the colors of the Maghreb? Let our North Africa specialists craft your private Morocco tour, from the medinas to the dunes."
        primaryButton={{
          text: "Start Planning My Morocco Trip",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Call Specialist",
          href: "+212123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1539020290231-9584e27c28b2?w=1920"
        brightness={50}
      />
    </main>
  );
}

