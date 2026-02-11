import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Wine, 
  Camera, 
  Utensils, 
  BedDouble, 
  Palmtree, 
  Calendar,
  Gift,
  Compass,
  Star
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
// import { formatPrice } from '@/lib/utils';

export const metadata = {
  title: 'Honeymoon Safari Tours - Romantic African Getaways | Barabara Voyagers',
  description: 'Celebrate your love with an unforgettable honeymoon safari in Africa. Luxury accommodations, private experiences, and memories to cherish forever.',
};

export default function HoneymoonSafarisPage() { 
  const honeymoonPackages = [
    {
      id: '1',
      title: 'Serengeti & Zanzibar Honeymoon',
      slug: 'serengeti-zanzibar-honeymoon',
      duration: '12 Days / 11 Nights',
      basePrice: 8500,
      priceNote: 'per person',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
      highlights: [
        'Luxury private safari in Serengeti',
        'Beach paradise in Zanzibar',
        'Private bush dinners under stars',
        'Champagne sundowners daily',
        'Couples spa treatments',
      ],
      destinations: ['Serengeti', 'Ngorongoro', 'Zanzibar'],
    },
    {
      id: '2',
      title: 'Botswana Delta Romance',
      slug: 'botswana-delta-romance',
      duration: '10 Days / 9 Nights',
      basePrice: 12800,
      priceNote: 'per person',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      highlights: [
        'Exclusive Okavango Delta camps',
        'Private mokoro excursions',
        'Sleep-out under African stars',
        'Helicopter delta flight for two',
        'Romantic island picnics',
      ],
      destinations: ['Okavango Delta', 'Moremi', 'Chobe'],
    },
  ];

  return (
    <>
      {/* Hero section is handled by the shared layout; beginning page content below */}

      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-stone-900">Love in the Wild</h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              A safari honeymoon is a profound beginning to a life together. We curate intimate journeys that balance the thrill of the African wilderness with the absolute pinnacle of luxury and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-none bg-rose-50/50 shadow-sm">
              <div className="flex justify-center mb-4">
                <Wine className="h-10 w-10 text-rose-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Champagne Moments</h3>
              <p className="text-gray-600 font-sans text-sm">Daily sundowners at exclusive viewpoints and vintage bubbles waiting in your suite.</p>
            </Card>

            <Card className="p-8 text-center border-none bg-rose-50/50 shadow-sm">
              <div className="flex justify-center mb-4">
                <Utensils className="h-10 w-10 text-rose-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Intimate Dining</h3>
              <p className="text-gray-600 font-sans text-sm">Lantern-lit bush dinners and private island picnics prepared by your personal chef.</p>
            </Card>

            <Card className="p-8 text-center border-none bg-rose-50/50 shadow-sm">
              <div className="flex justify-center mb-4">
                <BedDouble className="h-10 w-10 text-rose-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-900">Luxury Retreats</h3>
              <p className="text-gray-600 font-sans text-sm">Secluded suites featuring private plunge pools and outdoor star-beds for the ultimate connection.</p>
            </Card>
          </div>
        </Container>
      </section>

      <section id="packages" className="py-24 bg-stone-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Curated Honeymoon Collections</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg">
              Hand-picked itineraries that define African romance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {honeymoonPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-rose-700 text-white px-4 py-2 rounded-md shadow-lg">
                    {/* <div className="font-bold text-lg leading-none">{formatPrice(pkg.basePrice)}</div> */}
                    <div className="text-[10px] uppercase tracking-wider opacity-80">{pkg.priceNote}</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-rose-800">
                      <Sparkles className="h-3 w-3" />
                      <span>Signature Honeymoon</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-1">{pkg.title}</h3>
                      <p className="text-stone-500 font-sans text-sm flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {pkg.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.destinations.map((dest, idx) => (
                      <span key={idx} className="px-3 py-1 bg-stone-100 text-stone-600 text-[11px] uppercase tracking-wider rounded-md font-bold">
                        {dest}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-sans text-gray-700">
                        <Check className="h-5 w-5 text-rose-600 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 border-stone-200" asChild>
                      <Link href={`/destinations/${pkg.slug}`}>View Itinerary</Link>
                    </Button>
                    <Button className="flex-1 bg-rose-700 hover:bg-rose-800" asChild>
                      <Link href={`/contact?package=${pkg.id}`}>Inquire Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-stone-900">Expert Honeymoon Planning</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-stone-100">
                <div className="flex items-center gap-3 mb-3 text-rose-700">
                  <Palmtree className="h-5 w-5" />
                  <h3 className="font-bold">The Beach Extension</h3>
                </div>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  Most of our couples choose to follow the dust of the savannah with the salt of the Indian Ocean. We recommend Zanzibar, the Seychelles, or Diani Beach for seamless post-safari relaxation.
                </p>
              </Card>

              <Card className="p-6 border-stone-100">
                <div className="flex items-center gap-3 mb-3 text-rose-700">
                  <Compass className="h-5 w-5" />
                  <h3 className="font-bold">Private Vehicle Guarantees</h3>
                </div>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  Your honeymoon is about your rhythm. We prioritize private vehicles and guides so you can linger longer at a sighting or return to camp early for a spa session.
                </p>
              </Card>

              <Card className="p-6 border-stone-100">
                <div className="flex items-center gap-3 mb-3 text-rose-700">
                  <Gift className="h-5 w-5" />
                  <h3 className="font-bold">Honeymoon Registry</h3>
                </div>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  Ask us about our custom contribution links. Allow your wedding guests to gift you specific experiences like a hot air balloon flight or a conservation donation.
                </p>
              </Card>

              <Card className="p-6 border-stone-100">
                <div className="flex items-center gap-3 mb-3 text-rose-700">
                  <Star className="h-5 w-5" />
                  <h3 className="font-bold">Seasonality Matters</h3>
                </div>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  We align your wedding date with Africa&apos;s weather patterns. Whether it&apos;s the calving season in Tanzania or the floodwaters of the Delta, we ensure the timing is perfect.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-rose-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-800 rounded-full -mr-48 -mt-48 opacity-20"></div>
        <Container className="text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Your Adventure Begins Together</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-sans opacity-90">
            Let our specialists design a romantic escape that reflects your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-rose-900 hover:bg-stone-100 px-8" asChild>
              <Link href="/contact">Plan Our Honeymoon</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
              <Link href="/safaris">
                Explore All Safaris
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

