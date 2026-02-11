import Image from 'next/image';
import Link from 'next/link';
import {
  Zap, Globe, Plane, Users,
  Palmtree, Sunrise, FileText, Shield, CreditCard, Download, ExternalLink
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import DestinationCTA from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Kenya Safaris - Masai Mara, Amboseli & Coastal Escapes | Barabara Voyagers',
  description: 'Experience the magic of Kenya with our luxury safari packages.',
};

export default function KenyaPage() {
  const whyKenyaData = [
    { title: 'The Great Migration', desc: 'The world\'s greatest wildlife spectacle.', icon: Zap, img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800' },
    { title: 'Diverse Ecosystems', desc: 'From savannahs to snow-capped peaks.', icon: Globe, img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800' },
    { title: 'Easy Accessibility', desc: 'Sophisticated bush flight networks.', icon: Plane, img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800' },
    { title: 'Maasai Culture', desc: 'Authentic heritage and traditions.', icon: Users, img: 'https://images.unsplash.com/photo-1519659528534-7fd733a82ad1?w=800' },
    { title: 'Coastal Escapes', desc: 'Pristine white sand beach finishes.', icon: Palmtree, img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800' },
    { title: 'Year-Round Action', desc: 'Consistent, elite game viewing.', icon: Sunrise, img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
  ];

  const safariPackagesData = [
    {
      id: '1',
      title: 'Classic Kenya Safari - Masai Mara & Amboseli',
      slug: 'classic-kenya-safari',
      duration: '8 Days / 7 Nights',
      basePrice: 4800,
      description: 'Journey through the heart of the Great Rift Valley. This expedition combines the elephant-rich plains of Amboseli with the predator-dense savannahs of the Masai Mara for the ultimate introduction to East African wildlife.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
      highlights: ['Masai Mara National Reserve', 'Amboseli National Park', 'Lake Nakuru', 'Big Five Safari'],
    },
    {
      id: '2',
      title: 'Kenya & Zanzibar Beach Escape',
      slug: 'kenya-zanzibar-beach',
      duration: '12 Days / 11 Nights',
      basePrice: 6500,
      description: 'The perfect blend of adventure and relaxation. Start with heart-pounding game drives in Kenyas premier reserves before flying to the spice island of Zanzibar for white sands and turquoise waters.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      highlights: ['Masai Mara Wildlife', 'Great Migration Viewing', 'Zanzibar Beach Resort', 'Cultural Experiences'],
    },
    {
      id: '3',
      title: 'Luxury Kenya Private Safari',
      slug: 'luxury-kenya-private',
      duration: '10 Days / 9 Nights',
      basePrice: 7800,
      description: 'An exclusive, tailor-made journey featuring Kenyas most prestigious boutique lodges. Enjoy private 4x4 vehicles, personal guides, and secluded conservancies away from the main tourist tracks.',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200',
      highlights: ['Private Game Drives', 'Exclusive Lodges', 'Hot Air Balloon Safari', 'Personalized Itinerary'],
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. WHY CHOOSE */}
      <WhyChooseSection
        title="Why Travel to Kenya"
        subtitle="The Cradle of Humanity"
        items={whyKenyaData}
      />

      {/* 2. SAFARI PACKAGES  */}
      <SafariPackagesSection
        title="Curated Expeditions"
        description="Masterfully designed itineraries showcasing the raw beauty and refined elegance of East Africa."
        safaris={safariPackagesData}
      />

      {/* 3. WHEN TO VISIT  */}
      <section className="py-20 bg-gray-950 text-white relative">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold block mb-6">Seasonal Wisdom</span>
              <h2 className="text-4xl title mb-8 leading-tight">Timing Your Expedition</h2>
              <p className="text-gray-400 text-base font-light leading-relaxed mb-10">
                Whether you seek the drama of the Great Migration or the emerald serenity of the birthing season.
              </p>
              <Button className="bg-white text-gray-950 hover:bg-gray-200 h-12 px-8 text-sm" asChild>
                <Link href="/contact">Inquire for Advice</Link>
              </Button>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-gray-900/50 border-l-4 border-amber-600 p-8">
                <h4 className="text-2xl title mb-2 uppercase tracking-wide">The Great Migration</h4>
                <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4 block">July — October</span>
                <p className="text-gray-400 text-sm font-light leading-relaxed">High drama on the Mara River and peak predator activity.</p>
              </div>
              <div className="bg-gray-900/50 border-l-4 border-gray-600 p-8">
                <h4 className="text-2xl title mb-2 uppercase tracking-wide">The Emerald Season</h4>
                <span className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4 block">November — June</span>
                <p className="text-gray-400 text-sm font-light leading-relaxed">Lush landscapes, newborn wildlife, and intimate perspectives.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* 4. TRAVEL ESSENTIALS - UNIFIED PREMIUM VERSION */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Decorative background elements - unified with amber only */}
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-light">
                Journey Preparedness
              </span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>

            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-3 leading-tight">
              Travel Essentials
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Everything you need for a seamless and extraordinary adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Visa */}
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <FileText className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                Visa Requirements
              </h3>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                E-visa ($50 USD) required online. Processing typically takes 48-72 hours.
              </p>

              {/* Details list */}
              <div className="pt-6 border-t border-gray-100">
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
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                Health & Wellness
              </h3>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Malaria prophylaxis advised. Yellow Fever certificate required for some arrivals.
              </p>

              {/* Details list */}
              <div className="pt-6 border-t border-gray-100">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Travel insurance mandatory
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Vaccinations recommended
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    24/7 medical support
                  </li>
                </ul>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-6 right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-600/30" />
              </div>
            </div>

            {/* Card 3 - Currency */}
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 hover:border-amber-500/30 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                Currency & Payments
              </h3>

              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                US Dollars (post-2006) and local currency are widely accepted.
              </p>

              {/* Details list */}
              <div className="pt-6 border-t border-gray-100">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    Credit cards widely accepted
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-600" />
                    ATMs in major cities
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

          {/* Premium Downloadable Guide - unified with amber */}
          <div className="mt-20 pt-16 border-t border-gray-200/50">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-amber-50 px-6 py-3 rounded-full mb-6">
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
                <span className="text-sm text-amber-700 font-light tracking-wider uppercase">
                  Complimentary Service
                </span>
              </div>

              <h4 className="text-3xl title text-gray-950 mb-4">
                Comprehensive Travel Guide
              </h4>

              <p className="text-gray-600 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                All clients receive our exclusive digital travel guide with detailed packing lists,
                cultural etiquette tips, and 24/7 emergency contact information.
              </p>

              <Button
                variant="outline"
                className="border-amber-600/30 text-amber-700 hover:bg-amber-50 hover:border-amber-600 hover:text-foreground h-10 px-8 font-light tracking-wider group/download transition-all duration-300"
                asChild
              >
                <a href="/downloads/travel-guide.pdf" download>
                  <span className="flex items-center gap-3">
                    <Download className="w-4 h-4 transition-transform" />
                    Download Guide
                  </span>
                </a>
              </Button>

              {/* Trust indicator */}
              <p className="text-xs text-gray-400 font-light mt-6 tracking-wider">
                PDF format • Instant download • Updated for 2026
              </p>
            </div>
          </div>
        </Container>
      </section>

      <DestinationSwitcher currentDestination="kenya" />

      {/* 5. CTA SECTION */}
      <DestinationCTA
        title="Ready for Your Expedition?"
        subtitle="Begin Your Journey"
        description="Consult with our specialists to curate a bespoke journey that transcends the ordinary."
        primaryButton={{
          text: "Get a Quote",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Speak to Expert",
          href: "+254123456789",
          isPhone: true
        }}
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920"
        brightness={50}
      />
    </main>
  );
}

