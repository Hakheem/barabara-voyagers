import Image from 'next/image';
import Link from 'next/link';
import {
  Zap, Globe, Plane, Users,
  Palmtree, Sunrise, FileText, Shield, CreditCard, Download
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DestinationSwitcher from '@/components/general/DestinationSwitcher';
import WhyChooseSection from '@/components/sections/WhyChooseComponent';
import SafariPackagesSection from '@/components/sections/SafariPackages';
import DestinationCTA from '@/components/sections/DestinationsCTA';
import { getSafarisByDestination } from '@/lib/sanity-queries';

export const metadata = {
  title: 'Kenya Safaris - Masai Mara, Amboseli & Coastal Escapes | Barabara Voyagers',
  description: 'Experience the magic of Kenya with our luxury safari packages.',
};

export default async function KenyaPage() {
  const whyKenyaData = [
    { title: 'The Great Migration', desc: "The world's greatest wildlife spectacle.", icon: Zap, img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800' },
    { title: 'Diverse Ecosystems', desc: 'From savannahs to snow-capped peaks.', icon: Globe, img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800' },
    { title: 'Easy Accessibility', desc: 'Sophisticated bush flight networks.', icon: Plane, img: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800' },
    { title: 'Maasai Culture', desc: 'Authentic heritage and traditions.', icon: Users, img: 'https://images.unsplash.com/photo-1519659528534-7fd733a82ad1?w=800' },
    { title: 'Coastal Escapes', desc: 'Pristine white sand beach finishes.', icon: Palmtree, img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800' },
    { title: 'Year-Round Action', desc: 'Consistent, elite game viewing.', icon: Sunrise, img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
  ];

  // Fetch from Sanity
  const sanityData = await getSafarisByDestination('Kenya').catch(() => []);

  // Map Sanity data or use the Fallback array
  const safariPackagesData = sanityData.length > 0 
    ? sanityData.map(safari => ({
        id: safari.id,
        title: safari.title,
        slug: safari.slug,
        duration: `${safari.duration} Days / ${safari.durationNights} Nights`,
        basePrice: safari.basePrice,
        description: safari.shortDescription || safari.description,
        image: safari.images?.[0] || 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
        highlights: safari.highlights || [],
      })) 
    : [
        {
          id: 'fallback-1',
          title: 'Classic Kenya Safari - Masai Mara & Amboseli',
          slug: 'classic-kenya-safari',
          duration: '8 Days / 7 Nights',
          basePrice: 4800,
          description: 'Journey through the heart of the Great Rift Valley. This expedition combines the elephant-rich plains of Amboseli with the predator-dense savannahs of the Masai Mara.',
          image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
          highlights: ['Masai Mara National Reserve', 'Amboseli National Park', 'Lake Nakuru', 'Big Five Safari'],
        },
        {
          id: 'fallback-2',
          title: 'Kenya & Zanzibar Beach Escape',
          slug: 'kenya-zanzibar-beach',
          duration: '12 Days / 11 Nights',
          basePrice: 6500,
          description: 'The perfect blend of adventure and relaxation. Start with heart-pounding game drives before flying to the spice island of Zanzibar.',
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
          highlights: ['Masai Mara Wildlife', 'Great Migration Viewing', 'Zanzibar Beach Resort', 'Cultural Experiences'],
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

      {/* 2. SAFARI PACKAGES */}
      <SafariPackagesSection
        title="Curated Expeditions"
        description="Masterfully designed itineraries showcasing the raw beauty and refined elegance of East Africa."
        safaris={safariPackagesData}
      />

      {/* 3. WHEN TO VISIT */}
      <section className="py-20 bg-gray-950 text-white relative">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold block mb-6">Seasonal Wisdom</span>
              <h2 className="text-4xl title mb-8 leading-tight">Timing Your Expedition</h2>
              <p className="text-gray-400 text-base font-light leading-relaxed mb-10">
                Whether you seek the drama of the Great Migration or the emerald serenity of the birthing season.
              </p>
              <Button className="bg-white text-gray-950 hover:bg-gray-200 h-12 px-8 text-sm rounded-none" asChild>
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

      {/* 4. TRAVEL ESSENTIALS */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-light">Journey Preparedness</span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-3 leading-tight">Travel Essentials</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">Everything you need for a seamless and extraordinary adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card: Visa */}
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 shadow-lg hover:shadow-amber-500/10">
              <FileText className="w-12 h-12 text-amber-600 mb-8" strokeWidth={1} />
              <h3 className="text-xl title text-gray-900 mb-4">Visa Requirements</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">ETA required online. Processing typically takes 48-72 hours.</p>
              <ul className="space-y-2 text-sm text-gray-500 font-light border-t pt-4">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Apply via official eCitizen portal</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Valid for 90 days</li>
              </ul>
            </div>

            {/* Card: Health */}
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 shadow-lg hover:shadow-amber-500/10">
              <Shield className="w-12 h-12 text-amber-600 mb-8" strokeWidth={1} />
              <h3 className="text-xl title text-gray-900 mb-4">Health & Wellness</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">Malaria prophylaxis advised. Yellow Fever required if arriving from endemic zones.</p>
              <ul className="space-y-2 text-sm text-gray-500 font-light border-t pt-4">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Drink bottled water only</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Comprehensive insurance required</li>
              </ul>
            </div>

            {/* Card: Currency */}
            <div className="relative p-8 transition-all duration-500 hover:scale-[1.02] group bg-white border border-gray-200/50 shadow-lg hover:shadow-amber-500/10">
              <CreditCard className="w-12 h-12 text-amber-600 mb-8" strokeWidth={1} />
              <h3 className="text-xl title text-gray-900 mb-4">Currency & Payments</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">Kenya Shillings (KES) for local. USD (post-2013) widely accepted in lodges.</p>
              <ul className="space-y-2 text-sm text-gray-500 font-light border-t pt-4">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> M-Pesa is used everywhere</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Cards accepted at major hotels</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-gray-200/50 text-center">
            <h4 className="text-3xl title text-gray-950 mb-4">Comprehensive Travel Guide</h4>
            <p className="text-gray-600 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              All clients receive our exclusive digital travel guide with detailed packing lists and cultural etiquette.
            </p>
            <Button variant="outline" className="border-amber-600/30 text-amber-700 hover:bg-amber-50 rounded-none h-12 px-8" asChild>
              <a href="/downloads/travel-guide.pdf" download>
                <span className="flex items-center gap-3"><Download className="w-4 h-4" /> Download Guide</span>
              </a>
            </Button>
            <p className="text-xs text-gray-400 font-light mt-6 tracking-wider">PDF format • Instant download • Updated for 2026</p>
          </div>
        </Container>
      </section>

      <DestinationSwitcher currentDestination="kenya" />

      {/* 5. CTA SECTION */}
      <DestinationCTA
        title="Ready for Your Expedition?"
        subtitle="Begin Your Journey"
        description="Consult with our specialists to curate a bespoke journey that transcends the ordinary."
        primaryButton={{ text: "Get a Quote", href: "/contact" }}
        secondaryButton={{ text: "Speak to Expert", href: "tel:+254123456789", isPhone: true }}
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920"
        brightness={50}
      />
    </main>
  );
}

