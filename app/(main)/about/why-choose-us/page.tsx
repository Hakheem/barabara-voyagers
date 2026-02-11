import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Shield, Users, Star, TrendingUp, ArrowRight, Check, X, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/layout/SectionHeader';

export default function WhyChooseUsPage() {
  const differences = [
    { title: "25+ Years of Excellence", icon: <Award className="w-6 h-6" />, desc: "Since 1998, we've been perfecting the art of African safaris. We've sent over 15,000 travelers on life-changing journeys.", impact: "Quarter-century of expertise mastered for your trip." },
    { title: "Truly Personal Service", icon: <Users className="w-6 h-6" />, desc: "You'll work with a dedicated safari planner - not a call center. Real people who know the African dust and sunrise intimately.", impact: "A partner who knows your rhythm from inquiry to flight home." },
    { title: "Safety & Quality First", icon: <Shield className="w-6 h-6" />, desc: "We personally inspect every lodge and vet every guide. If we wouldn't send our families, we won't send you.", impact: "Zero surprises. Every property meets our rigorous luxury standards." },
    { title: "Conservation Committed", icon: <Heart className="w-6 h-6" />, desc: "2% of every booking supports wildlife conservation. We partner exclusively with eco-lodges and community-owned camps.", impact: "Your safari directly protects endangered species and communities." },
    { title: "Expert Guides", icon: <Star className="w-6 h-6" />, desc: "Our guides are conservationists and storytellers with decades of bush experience, not just drivers.", impact: "Deep insights into behavior and expert wildlife tracking." },
    { title: "Transparent Pricing", icon: <TrendingUp className="w-6 h-6" />, desc: "No hidden fees, no surprises. Our quotes clearly state what's included. We never upsell what you don't need.", impact: "Honest advice always, keeping your budget and dreams in balance." }
  ];

  return (
    <>
      <SectionHeader
        title=""
        image="/zebrass.jpg"
        height="h-[75vh]"
        overlayOpacity="bg-black/30"
      />

      <section className="relative pt-20  pb-12 flex text-center items-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-title font-bold mb-6">Why Choose Barabara Voyagers</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-600 font-light">
              25+ years crafting life-changing safari experiences. Here's why discerning travelers trust us with their African dreams.
            </p>
          </div>
        </Container> 
      </section>

      {/* THE BARABARA DIFFERENCE */}
      <section className="py-20 overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm uppercase tracking-[0.4em] text-amber-700 font-bold mb-4">The Distinction</h2>
              <h3 className="text-4xl md:text-5xl font-title leading-tight">What sets a Barabara journey apart</h3>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gray-200 mx-12 mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {differences.map((item, idx) => (
              <div key={idx} className="group flex flex-col">
                {/* Title and Icon Next to Each Other */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-amber-600 shrink-0 p-2 bg-amber-50 rounded-sm transition-colors group-hover:bg-amber-100">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-title text-gray-900 leading-tight">{item.title}</h4>
                </div>

                <p className="text-gray-600 font-sans leading-relaxed mb-6 grow">
                  {item.desc}
                </p>
                <div className="bg-gray-50 p-5 border-l-2 border-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">What this means for you</p>
                  <p className="text-sm text-gray-800 italic">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LUXURY OF CHOICE */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-title mb-4">The Luxury of Choice</h2>
            <p className="text-gray-400 font-light italic">"Quality is never an accident; it is always the result of high intention."</p>
          </div>

          <div className="max-w-6xl mx-auto overflow-hidden border border-white/10 rounded-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-xs uppercase tracking-[0.2em] font-bold">Standard</th>
                  <th className="p-6 text-xs uppercase tracking-[0.2em] font-bold text-amber-500 bg-amber-950/20">Barabara Voyagers</th>
                  <th className="p-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Online Aggregators</th>
                  <th className="p-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Big Tour Companies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {[
                  { label: "Personal Service", b: "Dedicated Planner", a: "Automated System", c: "Call Center" },
                  { label: "Customization", b: "Fully Bespoke", a: "Limited Options", c: "Fixed Departures" },
                  { label: "On-Ground Support", b: "24/7 Local Team", a: "No Presence", c: "Limited Hours" },
                  { label: "Conservation", b: "2% to Wildlife", a: "Profit-Driven", c: "Varies" },
                  { label: "Pricing", b: "Transparent & Fair", a: "Hidden Fees", c: "Premium Markup" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold text-gray-300">{row.label}</td>
                    <td className="p-6 text-amber-500 font-medium bg-amber-950/10">
                      <span className="flex items-center gap-2 font-bold uppercase text-[11px] tracking-wider">
                        <Check className="w-4 h-4" /> {row.b}
                      </span>
                    </td>
                    <td className="p-6 text-gray-500 italic">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 opacity-50" /> {row.a}
                      </span>
                    </td>
                    <td className="p-6 text-gray-500 italic">
                      <span className="flex items-center gap-2">
                        <Minus className="w-4 h-4 opacity-50" /> {row.c}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 ">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-4xl font-title text-gray-900">Traveler Chronicles</h2>
            <Link href="/about/testimonials" className="group flex items-center gap-2 text-amber-700 font-bold uppercase tracking-widest text-sm border-b-2 border-amber-800 pb-1 mt-4 md:mt-0 transition-all hover:text-amber-600 hover:border-amber-600">
              Read All Stories <ArrowRight className="w-4 h-4 transition-transform group-hover:trangray-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "Our planner Sarah knew exactly what we needed. The itinerary was perfect - not too rushed.", author: "Jennifer & Mark, USA" },
              { text: "As first-timers, we had so many questions. Barabara was patient and made us feel prepared.", author: "David & Lisa, UK" },
              { text: "Gorilla trekking was magical. Our guide tracked for 3 hours - worth every penny.", author: "Maria, Australia" }
            ].map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, s) => <Star key={s} className="h-3 w-3 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-xl text-gray-600 italic font-sans leading-relaxed mb-8 grow">"{t.text}"</p>
                <p className="font-bold text-gray-900 tracking-tight">— {t.author}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/zebras.jpg"
            alt="Safari Background"
            fill
            className="object-cover bg-fixed"
          />
          <div className="absolute inset-0 bg-amber-900/50 backdrop-brightness-[0.8]" />
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-title text-white leading-tight drop-shadow-lg">
              Ready to Experience <br /> the Difference?
            </h2>
            <p className="text-xl text-white/90 font-light max-w-xl mx-auto font-sans drop-shadow-sm">
              Join 15,000+ travelers who've trusted us with their African safari dreams. Let's plan yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-white text-amber-700 hover:bg-gray-100 px-6 h-10 text-sm shadow-md border-none rounded-none"
                asChild
              >
                <Link href="/contact">Start Planning Your Safari</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 h-10 text-sm rounded-none"
                asChild
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
