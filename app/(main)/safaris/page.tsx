import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Heart, Camera, Footprints, Globe, Leaf, Wallet, Zap, Users2, Sparkles, Compass } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import SectionHeader from '@/components/layout/SectionHeader';

export const metadata = {
  title: 'African Safari Types - Find Your Perfect Adventure | Barabara Voyagers',
  description: 'Explore different types of African safaris: Classic group tours, private luxury, family adventures, honeymoons, photography safaris, walking expeditions, and more.',
};
 
export default function SafarisOverviewPage() {
  const safariTypes = [
    { 
      title: 'Classic Safari', 
      slug: 'classic',
      color: 'amber',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      description: 'Small group safaris (8-12 guests) with guaranteed departures. Great value, social experience, expertly planned itineraries.',
      priceRange: '$400-600/day',
      bestFor: 'First-timers, solo travelers, budget-conscious adventurers',
    },
    {
      title: 'Private Safari',
      slug: 'private',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      description: 'Fully customized safaris for your group only. Total flexibility, private vehicles, personalized service from start to finish.',
      priceRange: '$700-1,500+/day',
      bestFor: 'Couples, families, groups seeking exclusivity',
    },
    {
      title: 'Family Safari',
      slug: 'family',
      color: 'green',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
      description: 'Child-friendly safaris with age-appropriate activities, flexible schedules, and family-focused lodges. Education meets adventure.',
      priceRange: '$500-900/day',
      bestFor: 'Families with children of all ages',
    },
    {
      title: 'Honeymoon Safari',
      slug: 'honeymoon',
      color: 'rose',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      description: 'Romantic safaris with luxury lodges, private dinners under the stars, couples spa treatments, and unforgettable moments.',
      priceRange: '$800-1,500+/day',
      bestFor: 'Honeymooners, anniversaries, romantic getaways',
    },
    {
      title: 'Photography Safari',
      slug: 'photography',
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      description: 'Specialized safaris for photographers. Small groups (4-6), expert photo guides, best light times, professional tips.',
      priceRange: '$700-1,200/day',
      bestFor: 'Serious photographers, wildlife enthusiasts',
    },
    {
      title: 'Walking Safari',
      slug: 'walking',
      color: 'emerald',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      description: 'Experience Africa on foot with expert armed guides. Intimate wildlife encounters, tracking skills, authentic bush experience.',
      priceRange: '$600-1,000/day',
      bestFor: 'Active travelers, adventure seekers, nature lovers',
    }, 
  ];

  return (
    <>
      <SectionHeader
        image="/safari_types.jpg"
        height="h-[65vh]"
        overlayOpacity="bg-black/50"
        contentPositionClassName="bottom-16 left-8"
        textAlignClassName="text-left"
        textStyleClassName="text-5xl md:text-6xl lg:text-7xl"
        maxWidth="max-w-3xl"
      />

      <section className="pb-12 pt-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <Sparkles className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl title text-gray-950 mb-4 leading-[0.9]">
              Find Your Perfect Safari Style
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Not all safaris are created equal. Whether you're seeking budget-friendly group adventures, exclusive private experiences, family fun, or romantic escapes, we offer safari styles to match every traveler's dream.
            </p>
          </div>
        </Container>
      </section>

      <section id="types" className="py-16 bg-gray-50">
        <Container>
          <div className="space-y-12">
            {safariTypes.map((type, index) => (
              <div 
                key={index} 
                className={`group flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2">
                  <div className="relative h-[450px] w-full overflow-hidden border border-gray-200/50 group-hover:border-amber-500/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-amber-500/10">
                    <Image 
                      src={type.image} 
                      alt={type.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent" />
                  
                    <div className="absolute bottom-4 right-4">
                      <span className="text-7xl title text-white/20 group-hover:text-white/30 transition-colors duration-500">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 font-light text-lg leading-relaxed">
                      {type.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors duration-500">
                        <Wallet className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Price Range</p>
                        <p className="text-base text-gray-900 font-light">{type.priceRange}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors duration-500">
                        <Users className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Best For</p>
                        <p className="text-base text-gray-700 font-light">{type.bestFor}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-10 font-light tracking-wider rounded-none group/btn"
                      asChild
                    >
                      <Link href={`/safaris/${type.slug}`} className="flex items-center gap-3">
                        Explore {type.title}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <Container className="relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
                <Compass className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
              </div>
              <h2 className="text-4xl md:text-5xl title text-gray-950 mb-6 leading-[1.1]">
                Choosing Your Perfect<br />Safari Style
              </h2>
              <p className="text-gray-600 font-light max-w-4xl mx-auto">
                Every journey is unique. Use these four pillars to determine which safari experience aligns best with your vision for Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group p-8 bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg">
                <div className="w-14 h-14 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-6 transition-colors duration-500">
                  <Wallet className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  Consider Your Budget
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Classic group safaris <span className="text-gray-900 font-medium">($400–$600/day)</span> offer exceptional value through shared costs. Private safaris <span className="text-gray-900 font-medium">($700–$1,500+/day)</span> provide total exclusivity and luxury accommodations.
                </p>
              </div>

              <div className="group p-8 bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-6 transition-colors duration-500">
                  <Users className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  Travel Style Matters
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Solo travelers thrive in group settings to share the experience. Couples and families often gravitate toward private journeys for intimacy, while specialists like photographers require dedicated, slow-paced itineraries.
                </p>
              </div>

              <div className="group p-8 bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl">
                <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mb-6 transition-colors duration-500">
                  <Zap className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  Flexibility vs. Structure
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Fixed itineraries are perfect for those who want a proven, seamless plan. If you prefer to chase a specific wildlife sighting for hours or change pace based on your energy, a private bespoke safari is the better fit.
                </p>
              </div>

              <div className="group p-8 bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl">
                <div className="w-14 h-14 bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center mb-6 transition-colors duration-500">
                  <Users2 className="w-6 h-6 text-rose-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl title text-gray-900 mb-4 group-hover:text-rose-700 transition-colors duration-300">
                  Group Dynamics
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Are you looking to make friends from around the world? Our classic tours foster great camaraderie. Prefer the silence of the bush with just your loved ones? Private safaris ensure no strangers in your vehicle.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop&q=80" 
            alt="African sunset" 
            fill 
            className="object-cover brightness-[0.4]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/60 to-gray-950/80" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              <span className="text-amber-400 uppercase tracking-[0.3em] text-xs font-light">
                Need Guidance?
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-amber-500/50 to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl title text-white mb-6 leading-[1.1] tracking-tight">
              Not Sure Which Safari<br />Type is Right for You?
            </h2>
            
            <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Our safari experts will help you choose the perfect style based on your interests, budget, and travel goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white h-16 px-12 font-light tracking-wider border-none rounded-none group"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 h-16 px-12 font-light tracking-wider rounded-none backdrop-blur-sm group"
                asChild
              >
                <Link href="/plan/how-to-plan" className="flex items-center gap-2">
                  <Compass className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Planning Guide
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

