import Image from 'next/image';
import Link from 'next/link';
import { 
  Camera, 
  ArrowRight, 
  Check, 
  Aperture, 
  Sun, 
  Moon, 
  Users, 
  Clock, 
  Monitor, 
  ShieldCheck, 
  Layers, 
  Focus 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
// import { formatPrice } from '@/lib/utils';

export const metadata = {
  title: 'Photography Safari Tours - Capture African Wildlife | Barabara Voyagers',
  description: 'Join expert wildlife photographers on specialized photo safaris across Africa. Perfect lighting, optimal positioning, and professional guidance.',
};

export default function PhotographySafarisPage() {
  const photoSafaris = [
    {
      id: '1',
      title: 'Kenya Great Migration Photo Safari',
      slug: 'kenya-migration-photo-safari',
      duration: '10 Days / 9 Nights',
      maxGroupSize: 6,
      basePrice: 7200,
      priceNote: 'per person',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      highlights: [
        'Maximum 3 guests per vehicle',
        'Golden hour & blue hour focus',
        'River crossing photography spots',
        'Photo editing masterclass',
        'Beanbag supports & mounts provided',
      ],
      destinations: ['Masai Mara', 'Samburu'],
      bestTime: 'July – October',
    },
    {
      id: '2',
      title: 'Tanzania Serengeti Workshop',
      slug: 'tanzania-photo-workshop',
      duration: '12 Days / 11 Nights',
      maxGroupSize: 6,
      basePrice: 8500,
      priceNote: 'per person',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
      highlights: [
        'Professional instructor lead',
        'Extended game drives (8+ hours)',
        'Ngorongoro Crater at first light',
        'Evening technical critiques',
        'Specialized photo-tier vehicles',
      ],
      destinations: ['Serengeti', 'Ngorongoro'],
      bestTime: 'June – October',
    },
  ];

  return (
    <>
    

      {/* Why Photography Safari */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-stone-900 mb-4">The Professional Advantage</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-sans">
              Unlike standard tours, our photo safaris prioritize the specific needs of wildlife photographers—from lighting angles to vehicle stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Small Group Guarantee</h3>
              <p className="text-gray-600 font-sans text-sm">Maximum 3 photographers per vehicle ensures every guest has a window seat and room for long-lens maneuverability.</p>
            </Card>

            <Card className="p-8 border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <Clock className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Optimal Light Timing</h3>
              <p className="text-gray-600 font-sans text-sm">We are the first out and the last back. Our schedules are built around golden hour activity, not camp meal times.</p>
            </Card>

            <Card className="p-8 border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <Monitor className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Workflow Sessions</h3>
              <p className="text-gray-600 font-sans text-sm">Beyond the field, join daily workshops on Lightroom editing, file management, and constructive portfolio reviews.</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Photography Safaris List */}
      <section id="safaris" className="py-24 bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {photoSafaris.map((safari) => (
              <Card key={safari.id} className="overflow-hidden border-none shadow-lg group">
                <div className="relative h-80">
                  <Image
                    src={safari.image}
                    alt={safari.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="text-white">
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Expedition</p>
                      <h3 className="text-2xl font-bold leading-tight">{safari.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                    {/* {formatPrice(safari.basePrice)}+ */}
                  </div>
                </div>

                <CardContent className="p-8 bg-white">
                  <div className="grid grid-cols-2 gap-6 mb-8 border-b border-stone-100 pb-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-stone-400" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-stone-400 tracking-tighter">Max Group</p>
                        <p className="text-sm font-bold">{safari.maxGroupSize} People</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Focus className="h-5 w-5 text-stone-400" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-stone-400 tracking-tighter">Season</p>
                        <p className="text-sm font-bold">{safari.bestTime}</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {safari.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-stone-600 font-sans">
                        <ShieldCheck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-stone-900 hover:bg-black" asChild>
                    <Link href={`/destinations/${safari.slug}`}>View Technical Itinerary</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Guide Section */}
      <section className="py-24">
        <Container>
          <div className="bg-stone-900 rounded-3xl p-8 md:p-16 text-white">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Technical Gear Requirements</h2>
              <p className="text-stone-400 font-sans">Our guides recommend the following kit for optimal results in the field.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <Layers className="h-8 w-8 text-blue-400 mb-6" />
                <h4 className="font-bold text-lg mb-4">Lenses</h4>
                <ul className="space-y-2 text-sm text-stone-400 font-sans">
                  <li>• Primary: 400mm - 600mm f/4</li>
                  <li>• Secondary: 70-200mm f/2.8</li>
                  <li>• Wide: 16-35mm for landscapes</li>
                </ul>
              </div>
              <div>
                <Aperture className="h-8 w-8 text-blue-400 mb-6" />
                <h4 className="font-bold text-lg mb-4">Settings</h4>
                <ul className="space-y-2 text-sm text-stone-400 font-sans">
                  <li>• Format: Always shoot in RAW</li>
                  <li>• AF: AI-Servo / Continuous Mode</li>
                  <li>• Shutter: 1/1600s+ for predators</li>
                </ul>
              </div>
              <div>
                <ShieldCheck className="h-8 w-8 text-blue-400 mb-6" />
                <h4 className="font-bold text-lg mb-4">Accessories</h4>
                <ul className="space-y-2 text-sm text-stone-400 font-sans">
                  <li>• Ground beanbags (Provided)</li>
                  <li>• Circular Polarizer filters</li>
                  <li>• High-speed CFExpress cards</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white border-t border-stone-100">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6 tracking-tight">Ready to Frame the Wild?</h2>
          <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto font-sans leading-relaxed">
            Spaces are limited to ensure personalized instruction. Secure your spot in our next small-group expedition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10" asChild>
              <Link href="/contact">Check Availability</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-stone-200" asChild>
              <Link href="/contact?type=private">Request Private Tutor</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

