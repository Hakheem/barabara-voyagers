import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Users, ArrowRight, Check, MapPin, Clock, 
  ShieldCheck, Wallet, Compass, Tent, HeartHandshake, 
  XCircle, HelpCircle
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: 'Classic Safari Tours - Small Group Adventures | Barabara Voyagers',
  description: 'Join our classic small group safaris across East and Southern Africa. Experience the best wildlife destinations with expert guides, guaranteed departures, and exceptional value.',
};

export default function ClassicSafarisPage() {
  const currentYear = new Date().getFullYear();

  const classicSafaris = [
    {
      id: '1', 
      title: 'Classic Kenya & Tanzania Explorer',
      slug: 'classic-kenya-tanzania',
      duration: '12 Days / 11 Nights',
      maxGroupSize: 12,
      basePrice: 4800,
      destinations: ['Masai Mara', 'Serengeti', 'Ngorongoro', 'Amboseli'],
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      departures: ['May 15', 'Jun 10', 'Jul 20', 'Aug 15', 'Sep 12', 'Oct 8'],
      highlights: [
        'Great Migration viewing (seasonal)',
        'Big Five game viewing',
        'Professional safari guide',
        'Comfortable lodges & tented camps',
        'All park fees included',
        'Airport transfers',
      ],
    },
    {
      id: '2',
      title: 'Gorilla & Wildlife Classic Safari',
      slug: 'classic-gorilla-wildlife',
      duration: '10 Days / 9 Nights',
      maxGroupSize: 8,
      basePrice: 6200,
      destinations: ['Bwindi', 'Queen Elizabeth NP', 'Masai Mara'],
      image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1200',
      departures: ['Jun 5', 'Jul 3', 'Aug 7', 'Sep 4', 'Oct 2', 'Nov 6'],
      highlights: [
        'Mountain gorilla trekking permit',
        'Chimpanzee tracking',
        'Kazinga Channel boat safari',
        'Classic game drives',
        'Cultural village visits',
        'Expert tracker guides',
      ],
    },
    {
      id: '3',
      title: 'Botswana Okavango Classic',
      slug: 'classic-botswana-okavango',
      duration: '8 Days / 7 Nights',
      maxGroupSize: 10,
      basePrice: 5400,
      destinations: ['Okavango Delta', 'Moremi', 'Chobe'],
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
      departures: ['May 20', 'Jun 15', 'Jul 18', 'Aug 22', 'Sep 19', 'Oct 17'],
      highlights: [
        'Mokoro excursions',
        'Chobe elephant herds',
        'Boat safaris',
        'Game drives in open vehicles',
        'Tented camp accommodation',
        'Internal flights included',
      ],
    },
    {
      id: '4',
      title: 'Southern Africa Grand Tour',
      slug: 'classic-southern-africa',
      duration: '15 Days / 14 Nights',
      maxGroupSize: 12,
      basePrice: 6800,
      destinations: ['Kruger', 'Victoria Falls', 'Okavango', 'Chobe'],
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200',
      departures: ['May 10', 'Jun 7', 'Jul 12', 'Aug 9', 'Sep 13', 'Oct 11'],
      highlights: [
        'Four countries in one trip',
        'Victoria Falls sunset cruise',
        'Big Five in Kruger',
        'Okavango Delta experience',
        'Most comprehensive tour',
        'Expert overland guides',
      ],
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Small Groups',
      description: 'Maximum 12 guests ensures personalized attention and better wildlife viewing opportunities.',
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: 'Great Value',
      description: 'Share costs for guides, vehicles, and park fees while maintaining high-quality experiences.',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Guaranteed Departures',
      description: 'Fixed departure dates with minimum guaranteed departures. Book with confidence.',
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Expert Guides',
      description: 'Professional safari guides with years of experience and excellent wildlife knowledge.',
    },
    {
      icon: <Tent className="w-6 h-6" />,
      title: 'Curated Itineraries',
      description: 'Carefully planned routes hitting the best destinations at optimal times.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Meet Fellow Travelers',
      description: 'Share incredible experiences with like-minded safari enthusiasts from around the world.',
    },
  ];

  return (
    <>
      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">The Barabara Group Experience</h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              Experience Africa’s most iconic landscapes through a lens of authenticity and shared discovery. 
              Our small group journeys are designed for those who seek deep immersion without compromising on comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-10 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6 text-amber-600">
                  {benefit.icon}
                </div>
                <h3 className="text-sm font-bold mb-3 uppercase tracking-widest">{benefit.title}</h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Classic Safari Tours */}
      <section id="tours" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Classic Safari Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lato">
              Small group adventures with guaranteed departures throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {classicSafaris.map((safari) => (
              <Card key={safari.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={safari.image}
                    alt={safari.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-md font-semibold">
                    From ${safari.basePrice}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-amber-900" />
                      <span className="font-semibold">Max {safari.maxGroupSize} guests</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{safari.title}</h3>

                  <div className="flex items-center gap-4 text-gray-600 mb-4 font-lato">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{safari.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{safari.destinations.length} destinations</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Destinations:</p>
                    <div className="flex flex-wrap gap-2">
                      {safari.destinations.map((dest, idx) => (
                        <span key={idx} className="px-3 py-1 bg-amber-50 text-amber-900 text-xs rounded-full font-lato">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {safari.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-lato">
                        <Check className="h-5 w-5 text-amber-600 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-700" />
                      {currentYear} Departure Dates
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {safari.departures.map((date, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white text-xs rounded font-lato">
                          {date}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/destinations/${safari.slug}`}>View Itinerary</Link>
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link href={`/book/${safari.slug}`}>Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Included/Not Included Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">What's Included in Classic Safaris</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-green-700">
                  <ShieldCheck className="w-5 h-5" /> Included
                </h3>
                <ul className="space-y-4">
                  {[
                    "Professional English-speaking safari guide",
                    "Shared safari vehicle with window seats for all",
                    "Accommodation as per itinerary (lodges/tented camps)",
                    "All meals during safari (breakfast, lunch, dinner)",
                    "All park entrance and conservation fees",
                    "Game drives and activities as specified",
                    "Airport/hotel transfers on start and end dates",
                    "Bottled water during game drives",
                    "Pre-safari briefing and documentation",
                    "Emergency evacuation insurance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-sans">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-amber-700">
                  <XCircle className="w-5 h-5" /> Not Included
                </h3>
                <ul className="space-y-4">
                  {[
                    "International flights to/from Africa",
                    "Visa fees (varies by nationality)",
                    "Travel insurance (strongly recommended)",
                    "Gorilla/chimp permits (added separately)",
                    "Alcoholic and premium beverages at lodges",
                    "Optional activities not in itinerary",
                    "Gratuities for guides and lodge staff",
                    "Personal items (souvenirs, laundry, etc.)",
                    "Pre/post safari accommodation",
                    "COVID-19 testing if required"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-sans">
                      <span className="text-amber-600 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">Common Questions</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white border px-6 rounded-lg">
                <AccordionTrigger className="cursor-pointer text-lg font-bold hover:no-underline">What is the typical group size?</AccordionTrigger>
                <AccordionContent className="text-gray-700 font-sans leading-relaxed">
                  Our classic safaris have a maximum of 8-12 guests depending on the tour. Smaller groups ensure
                  everyone gets a window seat, better wildlife viewing, and more personalized attention from guides.
                  We guarantee departures with a minimum of 4 guests.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border px-6 rounded-lg">
                <AccordionTrigger className="cursor-pointer text-lg font-bold hover:no-underline">Can I join as a solo traveler?</AccordionTrigger>
                <AccordionContent className="text-gray-700 font-sans leading-relaxed">
                  Absolutely! Classic safaris are perfect for solo travelers. You'll share experiences with
                  like-minded people from around the world. Single supplements apply for private room accommodations,
                  or you can share with another same-gender traveler to avoid the supplement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border px-6 rounded-lg">
                <AccordionTrigger className="cursor-pointer text-lg font-bold hover:no-underline">What type of vehicles are used?</AccordionTrigger>
                <AccordionContent className="text-gray-700 font-sans leading-relaxed">
                  We use custom-built 4x4 safari vehicles with pop-up roofs, guaranteed window seats for all
                  passengers, power outlets for charging, and excellent visibility. In East Africa, we use extended
                  Land Cruisers seating 6-7 guests. In Southern Africa, we use larger overland trucks for longer tours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border px-6 rounded-lg">
                <AccordionTrigger className="cursor-pointer text-lg font-bold hover:no-underline">How experienced are the guides?</AccordionTrigger>
                <AccordionContent className="text-gray-700 font-sans leading-relaxed">
                  All our guides are professionally licensed, with years of safari experience. They undergo
                  continuous training in wildlife knowledge, first aid, and customer service. Many hold advanced
                  qualifications like Bronze/Silver Leopard (FGASA) or equivalent certifications.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border px-6 rounded-lg">
                <AccordionTrigger className="cursor-pointer text-lg font-bold hover:no-underline">What if I need to cancel?</AccordionTrigger>
                <AccordionContent className="text-gray-700 font-sans leading-relaxed">
                  Cancellation policies vary by tour. Generally, deposits are non-refundable after 90 days before
                  departure. We strongly recommend comprehensive travel insurance that covers trip cancellation,
                  interruption, and medical emergencies. We can help arrange suitable coverage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border px-6 rounded-lg">
                <AccordionTrigger className="cursor-pointer text-lg font-bold hover:no-underline">Are classic safaris suitable for families?</AccordionTrigger>
                <AccordionContent className="text-gray-700 font-sans leading-relaxed">
                  Most classic safaris welcome families with children 12+ years old. For younger children or more
                  flexible family travel, we recommend our <Link href="/safaris/private" className="text-amber-900 underline font-semibold">private
                  safaris</Link> or specialized <Link href="/safaris/family" className="text-amber-900 underline font-semibold">family
                  safari tours</Link> designed specifically for families with children.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join a Classic Safari?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-lato">
            Contact our safari specialists to find the perfect small group adventure for your dates and interests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 border-white hover:border-transparent hover:text-gray-600" asChild>
              <Link href="/contact">Get Expert Advice</Link>
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 hover:border-white/20 " asChild>
              <Link href="/safaris/private">Explore Private Safaris</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

