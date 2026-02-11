import Image from 'next/image';
import Link from 'next/link';
import { 
  Footprints, 
  ArrowRight, 
  Check, 
  Shield, 
  Users, 
  Compass, 
  Mountain, 
  Wind, 
  MapPin, 
  Calendar,
  Zap
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
// import { formatPrice } from '@/lib/utils';

export const metadata = {
  title: 'Walking Safari Tours - On Foot with Wildlife | Barabara Voyagers',
  description: 'Experience Africa on foot. Walking safaris in South Luangwa, Mana Pools, and Selous. Expert guides, intimate wildlife encounters, and authentic bush experiences.',
};

export default function WalkingSafarisPage() {
  const walkingSafaris = [ 
    {
      id: '1',
      title: 'South Luangwa Walking Safari',
      slug: 'south-luangwa-walking',
      duration: '7 Days / 6 Nights',
      basePrice: 4800,
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200',
      highlights: ['Birthplace of walking safaris', 'Expert armed scout & guide', 'Remote fly-camping', 'Leopard tracking expertise'],
      location: 'Zambia',
    },
    {
      id: '2',
      title: 'Mana Pools Walking Expedition',
      slug: 'mana-pools-walking',
      duration: '6 Days / 5 Nights',
      basePrice: 5200,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      highlights: ['Unrivaled elephant encounters', 'Zambezi River canoe sessions', 'Focus on animal behavior', 'Wilderness immersion'],
      location: 'Zimbabwe',
    },
    {
      id: '3',
      title: 'Tanzania Wilderness Walk',
      slug: 'tanzania-walking-safari',
      duration: '8 Days / 7 Nights',
      basePrice: 5500,
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
      highlights: ['Nyerere (Selous) exploration', 'Multi-day mobile trekking', 'Sundowners by the river', 'Big Five tracking'],
      location: 'Tanzania',
    },
  ];

  return (
    <>
    
      {/* Why Choose Walking */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-stone-900">The Rawest Way to Explore</h2>
            <p className="text-lg text-stone-600 font-sans leading-relaxed">
              Every sense is heightened when you are on foot. You don&apos;t just see the wildlife; you smell the earth, hear the snap of a twig, and feel the pulse of the bush.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-stone-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <Wind className="h-10 w-10 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">All Senses Engaged</h3>
              <p className="text-stone-600 font-sans text-sm">Experience the subtle nuances of the bush that are often missed from the hum of a vehicle engine.</p>
            </Card>

            <Card className="p-8 border-stone-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <Compass className="h-10 w-10 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Expert Tracking</h3>
              <p className="text-stone-600 font-sans text-sm">Learn to read the &quot;morning newspaper&quot;—the tracks and signs left by wildlife during the night.</p>
            </Card>

            <Card className="p-8 border-stone-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <Mountain className="h-10 w-10 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Pristine Access</h3>
              <p className="text-stone-600 font-sans text-sm">Walk into remote areas where no roads exist, finding solitude and untouched wilderness.</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Walking Safari Tours */}
      <section id="safaris" className="py-24 bg-stone-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Premier Walking Trails</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-sans">
              From the riverbanks of the Zambezi to the plains of Luangwa, choose your challenge level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {walkingSafaris.map((safari) => (
              <Card key={safari.id} className="overflow-hidden border-none shadow-lg group">
                <div className="relative h-72">
                  <Image src={safari.image} alt={safari.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider text-stone-900">
                    <MapPin className="h-3 w-3 text-emerald-600" />
                    {safari.location}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold leading-tight">{safari.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-6 text-sm text-stone-500 font-sans border-b border-stone-100 pb-4">
                    <span className="flex items-center gap-1.5 font-bold text-stone-900">
                      <Calendar className="h-4 w-4 text-emerald-600" /> {safari.duration.split('/')[0]}
                    </span>
                    <span className="text-emerald-700 font-bold text-lg">
                      ${safari.basePrice.toLocaleString()}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {safari.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-stone-600 font-sans">
                        <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-stone-200" asChild>
                      <Link href={`/destinations/${safari.slug}`}>Itinerary</Link>
                    </Button>
                    <Button className="flex-1 bg-emerald-700 hover:bg-emerald-800" asChild>
                      <Link href={`/contact?safari=${safari.id}`}>Enquire</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience Details */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">What to Expect on the Trail</h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Uncompromising Safety</h4>
                    <p className="text-stone-600 text-sm font-sans leading-relaxed">
                      Every walk is led by a lead professional guide and accompanied by an armed wildlife scout. Your safety is governed by strict protocols and years of field experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Pace & Intensity</h4>
                    <p className="text-stone-600 text-sm font-sans leading-relaxed">
                      We focus on quality, not distance. Walks are generally 3-4 hours at a steady, manageable pace with frequent stops to examine tracks, flora, and wildlife behavior.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Intimate Group Sizes</h4>
                    <p className="text-stone-600 text-sm font-sans leading-relaxed">
                      To minimize our footprint and ensure a quiet approach, groups are capped at 6 guests, allowing for personal interaction with your guide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800" 
                alt="Safari guide pointing out animal tracks" 
                fill 
                className="object-cover" 
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-lg">
                <p className="italic text-stone-700 font-sans text-sm mb-2 text-center">
                  &quot;The only way to truly understand the bush is to walk it.&quot;
                </p>
                <p className="text-xs font-bold text-center uppercase tracking-widest text-emerald-700">— Norman Carr, Walking Safari Pioneer</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image Tag for instructive value */}
      

      {/* Final CTA */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl" />
           <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        <Container className="text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Frame the Wild Differently?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-sans text-emerald-100 leading-relaxed">
            Contact our walking specialists to start planning your bespoke on-foot adventure across Africa&apos;s wildest landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-stone-100 px-10" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-500/50 text-white hover:bg-white/10" asChild>
              <Link href="/safaris/private">Private Group Walks</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

