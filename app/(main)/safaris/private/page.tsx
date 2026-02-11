import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  ArrowRight, 
  Check, 
  Calendar, 
  Users, 
  Sparkles, 
  MapPin, 
  Clock, 
  Target, 
  Award, 
  Gift,
  ShieldCheck,
  Compass
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Private Safari Tours - Tailored Luxury Adventures | Barabara Voyagers',
  description: 'Experience Africa your way with our private safaris. Fully customized itineraries, private guides and vehicles, flexible schedules, and exclusive accommodations.',
};

export default function PrivateSafarisPage() {
  const currentYear = new Date().getFullYear();

  const sampleItineraries = [
    {
      id: '1',
      title: 'Luxury Tanzania Private Safari',
      duration: '10 Days / 9 Nights',
      groupSize: 'Your party only',
      basePrice: 12500,
      priceNote: 'per person (2 travelers)',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      highlights: [
        'Private 4x4 Land Cruiser with expert guide',
        'Luxury lodges and tented camps',
        'Serengeti, Ngorongoro, Tarangire',
        'Completely flexible itinerary',
        'Hot air balloon safari option',
        'Champagne sundowners',
      ],
    },
    {
      id: '2',
      title: 'Gorilla & Big Five Private Adventure',
      duration: '12 Days / 11 Nights',
      groupSize: 'Your party only',
      basePrice: 14800,
      priceNote: 'per person (2 travelers)',
      image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1200',
      highlights: [
        'Private gorilla trekking permits',
        'Exclusive safari guide throughout',
        'Rwanda & Uganda combination',
        'Luxury boutique accommodations',
        'Private transfers and flights',
        'Personalized pace and activities',
      ],
    },
    {
      id: '3',
      title: 'Ultimate Botswana Private Explorer',
      duration: '9 Days / 8 Nights',
      groupSize: 'Your party only',
      basePrice: 16200,
      priceNote: 'per person (2 travelers)',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200',
      highlights: [
        'Private concession access',
        'Ultra-luxury tented camps',
        'Okavango Delta by helicopter',
        'Private mokoro and boat safaris',
        'Night drives and walking safaris',
        'Completely exclusive experience',
      ],
    },
  ];

  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-amber-600" />,
      title: 'Complete Customization',
      description: 'Every detail designed around your interests, pace, and preferences. Your safari, your way.',
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: 'Total Flexibility',
      description: 'Start any date you choose. Adjust activities and timing daily based on wildlife sightings.',
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: 'Just Your Group',
      description: 'Travel with only your family or friends. Private guide, vehicle, and exclusive experiences.',
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: 'Expert Private Guide',
      description: 'A dedicated safari professional exclusively for your group throughout your entire journey.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-amber-600" />,
      title: 'Exclusive Access',
      description: 'Stay in private villas, luxury tented camps, and lodges closed to the general public.',
    },
    {
      icon: <Gift className="h-8 w-8 text-amber-600" />,
      title: 'Special Occasions',
      description: 'Perfect for honeymoons or milestone birthdays with personalized surprises at every turn.',
    },
  ];

  const customizationOptions = [
    {
      category: 'Accommodations',
      options: [
        'Ultra-luxury lodges and camps',
        'Private villas with personal chefs',
        'Exclusive mobile tented camps',
        'Boutique safari houses',
        'Private island camps',
        'Historic manor houses',
      ],
    },
    {
      category: 'Activities',
      options: [
        'Hot air balloon safaris',
        'Helicopter flights over wildlife',
        'Private walking safaris',
        'Night game drives',
        'Fishing expeditions',
        'Cultural immersion experiences',
      ],
    },
    {
      category: 'Experiences',
      options: [
        'Private sundowner locations',
        'Bush dining and picnics',
        'Photography masterclasses',
        'Conservation activities',
        'Spa treatments in the wild',
        'Special celebration setups',
      ],
    },
    {
      category: 'Transportation',
      options: [
        'Private 4x4 safari vehicles',
        'Chartered flights between camps',
        'Helicopter transfers',
        'Private boats and mokoros',
        'Luxury train journeys',
        'Private aircraft charters',
      ],
    },
  ];

  return (
    <>
      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">The Art of the Bespoke Safari</h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              For those who demand total independence and uncompromising luxury. A Barabara private safari 
              is more than a trip—it is a meticulously crafted masterpiece where the timing and the 
              wildlife encounters are dictated solely by your curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-10 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-sm font-bold mb-3 uppercase tracking-widest text-amber-900">{benefit.title}</h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sample Itineraries */}
      <section id="examples" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Signature Concepts for {currentYear}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Every private safari is a blank canvas. Use these proven routes as your starting point.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {sampleItineraries.map((safari) => (
              <Card key={safari.id} className="overflow-hidden hover:shadow-xl transition-shadow border-none shadow-sm">
                <div className="relative h-64">
                  <Image
                    src={safari.image}
                    alt={safari.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-md">
                    <div className="font-semibold">From ${safari.basePrice}</div>
                    <div className="text-xs">{safari.priceNote}</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-amber-900">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span className="font-bold">{safari.groupSize}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{safari.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{safari.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {safari.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-sans">
                        <Check className="h-5 w-5 text-amber-600 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/contact?safari=${safari.id}`}>Customize</Link>
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link href={`/contact?safari=${safari.id}&action=book`}>Inquire</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Customization Options */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">Your Personal Toolkit</h2>
            <p className="text-center text-lg text-gray-700 mb-16 font-sans">
              Every element of your journey can be curated to your specific tastes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customizationOptions.map((section, index) => (
                <Card key={index} className="p-8 border-gray-100 shadow-sm bg-gray-50/50">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-amber-900 uppercase tracking-wider">
                    <Compass className="h-5 w-5 text-amber-600" />
                    {section.category}
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {section.options.map((option, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-sans">
                        <Check className="h-4 w-4 text-amber-500/50" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Information */}
      <section className="py-24 bg-stone-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Private Investment Guide</h2>
            <p className="text-stone-400 text-center mb-12 font-sans">
              Investment for {currentYear} varies based on exclusivity. Below are baseline ranges per person, per day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-8 border border-stone-800 rounded-xl bg-stone-800/50">
                <div className="text-2xl font-bold text-amber-500 mb-2">$500-800</div>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Premier Comfort</p>
              </div>
              <div className="text-center p-8 border-2 border-amber-600 rounded-xl bg-amber-600/10 transform scale-105">
                <div className="text-2xl font-bold text-amber-500 mb-2">$800-1,200</div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-200">Bespoke Luxury</p>
              </div>
              <div className="text-center p-8 border border-stone-800 rounded-xl bg-stone-800/50">
                <div className="text-2xl font-bold text-amber-500 mb-2">$1,200+</div>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Ultra-Exclusivity</p>
              </div>
            </div>

            <Card className="p-8 bg-stone-800 border-none">
              <h3 className="font-bold mb-6 text-white flex items-center gap-2">
                <ShieldCheck className="text-amber-500 h-5 w-5" />
                The Barabara Inclusion Standard
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Private guide & 4x4 vehicle",
                  "Boutique accommodations",
                  "All park and conservation fees",
                  "Tailored daily schedules",
                  "Airport VIP transfers",
                  "24/7 dedicated concierge"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-stone-300 font-sans">
                    <Check className="h-4 w-4 text-amber-500" />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-4">Your Private Adventure Awaits</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-sans opacity-90">
            Our designers are ready to translate your dreams into a bespoke {currentYear} itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-stone-100 border-white" asChild>
              <Link href="/contact">Start Planning Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" asChild>
              <Link href="/safaris/classic">Compare Group Safaris</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

