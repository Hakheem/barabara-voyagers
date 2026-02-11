import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  ArrowRight, 
  Check, 
  Baby, 
  Users, 
  Star, 
  Shield, 
  BookOpen, 
  Globe, 
  Smartphone, 
  Camera, 
  Trees,
  Waves,
  Calendar,
  Sparkles
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Family Safari Tours - Adventures for All Ages | Barabara Voyagers',
  description: 'Create unforgettable family memories on safari in Africa. Child-friendly accommodations, educational experiences, flexible schedules, and adventures designed for families with children of all ages.',
};

export default function FamilySafarisPage() {
  const currentYear = new Date().getFullYear();

  const familySafaris = [
    {
      id: '1',
      title: 'Family Kenya Safari Adventure',
      slug: 'family-kenya-safari',
      duration: '8 Days / 7 Nights',
      ageRange: 'All ages welcome',
      basePrice: 3800,
      priceNote: 'per adult, children discounts available',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200',
      highlights: [
        'Child-friendly lodges with pools',
        'Junior ranger programs',
        'Shorter game drives (2-3 hours)',
        'Cultural village experiences',
        'Beach extension option',
        'Family tents/interconnecting rooms',
      ],
    },
    {
      id: '2',
      title: 'Tanzania Family Explorer',
      slug: 'family-tanzania-explorer',
      duration: '10 Days / 9 Nights',
      ageRange: 'Best for ages 6+',
      basePrice: 4200,
      priceNote: 'per adult, kids 50% discount',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      highlights: [
        'Serengeti & Ngorongoro Crater',
        'Wildlife tracking activities',
        'Educational nature walks',
        'Hot air balloon family rides',
        'Kid-friendly meal options',
        'Flexible daily schedules',
      ],
    },
    {
      id: '3',
      title: 'South Africa Family Discovery',
      slug: 'family-south-africa',
      duration: '9 Days / 8 Nights',
      ageRange: 'Perfect for all ages',
      basePrice: 3500,
      priceNote: 'per adult, children from $1,200',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200',
      highlights: [
        'Malaria-free game reserves',
        'Cape Town & Table Mountain',
        'Penguin colony visits',
        'Family-friendly safari lodges',
        'Swimming pools and playgrounds',
        'Excellent medical facilities nearby',
      ],
    },
  ];

  const whyFamilySafari = [
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: 'Bonding Experience',
      description: 'Safari creates unique shared experiences and memories that bring families closer together.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-amber-600" />,
      title: 'Educational',
      description: 'Children learn about wildlife, conservation, ecosystems, and different cultures first-hand.',
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      title: 'Broadens Horizons',
      description: 'Exposure to new cultures, environments, and experiences builds confidence and worldview.',
    },
    {
      icon: <Smartphone className="h-8 w-8 text-amber-600" />,
      title: 'Digital Detox',
      description: 'Disconnect from screens and reconnect with nature and family in meaningful ways.',
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600" />,
      title: 'Lifetime Memories',
      description: 'Safari moments become cherished family stories told for generations.',
    },
    {
      icon: <Trees className="h-8 w-8 text-amber-600" />,
      title: 'Wildlife Wonder',
      description: 'Seeing animals in the wild creates awe and inspires conservation values in children.',
    },
  ];

  const ageGroups = [
    {
      age: '0-3 years',
      title: 'Infants & Toddlers',
      considerations: [
        'Choose malaria-free areas (South Africa, Namibia highlands)',
        'Shorter game drives (1-2 hours)',
        'Lodges with babysitting services',
        'Flexible schedule for nap times',
        'Pool and play areas essential',
      ],
      recommendations: 'Private safaris work best for flexibility. Consider South Africa or Namibia.',
    },
    {
      age: '4-7 years',
      title: 'Young Children',
      considerations: [
        'Engaging activities like tracking, crafts',
        'Junior ranger programs',
        'Animal-themed educational games',
        'Shorter morning drives only',
        'Child-friendly meals and snacks',
      ],
      recommendations: 'Kenya Masai Mara, Tanzania Northern Circuit, or South Africa reserves ideal.',
    },
    {
      age: '8-12 years',
      title: 'Pre-teens',
      considerations: [
        'Full game drives with enthusiasm',
        'Junior safari guide training',
        'Photography workshops',
        'Nature walks and tracking',
        'Cultural interactions',
      ],
      recommendations: 'Most destinations suitable. Uganda gorilla trekking possible from age 15.',
    },
    {
      age: '13+ years',
      title: 'Teenagers',
      considerations: [
        'Full safari program participation',
        'Adventure activities (rafting, hiking)',
        'Photography focus safaris',
        'Conservation volunteer programs',
        'More challenging activities',
      ],
      recommendations: 'All destinations open. Consider adding adventure elements or conservation focus.',
    },
  ];

  return (
    <>
      {/* Why Family Safari */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Why Take Your Family on Safari?</h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              A family safari is more than a vacation—it is an investment in your children's development,
              your family bonds, and memories that will last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            {whyFamilySafari.map((benefit, index) => (
              <div key={index} className="bg-white p-10 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-sm font-bold mb-3 uppercase tracking-widest text-amber-900">{benefit.title}</h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Family Safari Tours */}
      <section id="tours" className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Signature Family Itineraries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Carefully designed routes with child-friendly accommodations and activities for {currentYear}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familySafaris.map((safari) => (
              <Card key={safari.id} className="overflow-hidden hover:shadow-xl transition-shadow border-none shadow-sm">
                <div className="relative h-72">
                  <Image
                    src={safari.image}
                    alt={safari.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-md">
                    <div className="font-semibold">From ${safari.basePrice}</div>
                    <div className="text-xs">{safari.priceNote}</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-amber-900">
                    <div className="flex items-center gap-2 text-xs">
                      <Baby className="h-3 w-3" />
                      <span className="font-bold">{safari.ageRange}</span>
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
                      <Link href={`/destinations/${safari.slug}`}>Details</Link>
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

      {/* Age-Appropriate Guide */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">Safari by Age Group</h2>
            <p className="text-center text-lg text-gray-700 mb-16 font-sans">
              Different ages have different needs. Our guide to planning the perfect family journey.
            </p>

            <div className="space-y-6">
              {ageGroups.map((group, index) => (
                <Card key={index} className="p-8 border-gray-100 shadow-sm bg-gray-50/50">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-amber-900" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-1">{group.age}</div>
                      <h3 className="text-2xl font-bold text-stone-900">{group.title}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-stone-500">Key Considerations</h4>
                      <ul className="space-y-3 text-sm font-sans">
                        {group.considerations.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100">
                      <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-amber-900 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Recommendations
                      </h4>
                      <p className="text-sm text-gray-600 font-sans leading-relaxed">{group.recommendations}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Family-Friendly Features */}
      <section className="py-24 bg-stone-900 text-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">The Barabara Family Standard</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-stone-800 border-none shadow-none">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-amber-500" />
                  <h3 className="text-xl font-bold">Safety & Expertise</h3>
                </div>
                <ul className="space-y-3 text-sm font-sans text-stone-300">
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Experienced guides trained in family travel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Child-safety features in private vehicles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>24/7 dedicated family emergency support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Malaria-free regional options available</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-stone-800 border-none shadow-none">
                <div className="flex items-center gap-3 mb-6">
                  <Camera className="h-6 w-6 text-amber-500" />
                  <h3 className="text-xl font-bold">Child-Centric Activities</h3>
                </div>
                <ul className="space-y-3 text-sm font-sans text-stone-300">
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Junior ranger programs and certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Wildlife tracking and footprint identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Nature crafts and bush survival skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span>Cultural visits tailored for younger ages</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-4">Create Magical Family Memories</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-sans opacity-90">
            Let our family safari specialists design the perfect African adventure for your party.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-stone-100 border-white" asChild>
              <Link href="/contact">Request a Custom Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" asChild>
              <Link href="/plan/first-time">First-Time Guide</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

