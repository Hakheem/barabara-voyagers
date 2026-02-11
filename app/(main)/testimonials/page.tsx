import Link from 'next/link';
import { Star, Quote, ArrowRight, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Image from 'next/image';

// Mock Data
const MOCK_TESTIMONIALS = [
  {
    id: '1',
    clientName: 'Jennifer & Mark Thompson',
    clientLocation: 'New York, USA',
    packageName: 'Tanzania Beyond the Plains',
    tripDate: '2024-07-15',
    headline: 'ORCHESTRATED WITH SURGICAL PRECISION.',
    content: 'Sarah planned our Tanzania safari and it was PERFECT. She listened to what we wanted, made expert recommendations, and the timing/lodges were spot-on. When we had a flight delay, she rebooked everything seamlessly. Best travel planner we\'ve ever worked with.',
    rating: 5, 
  },
  {
    id: '2',
    clientName: 'David & Lisa Chen',
    clientLocation: 'London, UK',
    packageName: 'The Gorillas of Uganda',
    tripDate: '2024-06-10',
    headline: 'A LIFE-CHANGING TRANSFORMATION.',
    content: 'Grace’s expertise was invaluable—she secured permits when we thought it was impossible. Her tips prepared us perfectly. Trekking with gorillas was life-changing. Thank you, Grace! The lodge recommendations were the highlight of our trip.',
    rating: 5,
  },
  {
    id: '3',
    clientName: 'Robert Johnson',
    clientLocation: 'Sydney, Australia',
    packageName: 'Botswana & Victoria Falls',
    tripDate: '2024-09-20',
    headline: 'WE FELT LIKE VIPS THROUGHOUT.',
    content: 'Michael designed an incredible combination for us. The Okavango camps were exquisite, timing was perfect, and his insider knowledge showed everywhere. Already planning our return trip with him! Every logistical detail was handled with absolute care.',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920"
            alt="African Landscape"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <Container className="relative z-10 text-center lg:pt-24 text-white">
          <span className="block text-amber-500 font-bold tracking-[0.3em] text-[10px] md:text-xs mb-4 uppercase">
            The Barabara Experience
          </span>
          <h1 className="text-5xl font-bold mb-4 tracking-tighter uppercase">
            CHRONICLES
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.15em] font-light text-gray-400 max-w-2xl mx-auto">
            Letters from our global community of voyagers
          </p>
        </Container>
      </section>

      {/* Testimonials List */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto divide-y divide-gray-100">
            {MOCK_TESTIMONIALS.map((t) => (
              <div key={t.id} className="py-20 first:pt-0 last:pb-0 group">
                <div className="space-y-8">
                  {/* Rating & Trip Type */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                      Journey: {t.packageName}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-[1.1] uppercase">
                    "{t.headline}"
                  </h2>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed italic pr-4 md:pr-12">
                    {t.content}
                  </p>

                  {/* Signature */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between pt-8">
                    <div className="space-y-1">
                      <h4 className="text-lg font-black text-gray-900 tracking-tight uppercase">
                        {t.clientName}
                      </h4>
                      <div className="flex items-center gap-2 text-amber-700 font-bold text-[10px] tracking-[0.2em] uppercase">
                        <MapPin className="w-3 h-3" />
                        {t.clientLocation}
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Traveled {new Date(t.tripDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Modern Minimal CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="text-center space-y-10">
            <Quote className="w-12 h-12 text-gray-200 mx-auto" />
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight  text-gray-900 uppercase">
              Your story starts <br className="hidden md:block" /> with a conversation.
            </h3>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-6">
              <Button size="lg" className="bg-gray-900 text-white hover:bg-amber-700 rounded-none px-12 py-4  h-auto uppercase tracking-widest font-black text-xs transition-all">
                Plan Your Journey
              </Button>
              <Link href="/about/our-team" className="group flex flex-col items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 group-hover:text-amber-700 transition-colors">
                  Meet Our Experts
                </span>
                <span className="block w-8 h-px bg-amber-600 group-hover:w-24 transition-all" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

