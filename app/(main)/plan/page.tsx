import Link from 'next/link';
import { 
  ArrowRight, 
  Compass, 
  Calendar, 
  Package, 
  DollarSign, 
  HelpCircle, 
  Sparkles,
  CheckCircle2,
  Clock,
  Map,
  Camera
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function PlanningHubPage() {
  const guides = [
    {
      title: 'How to Plan Your Safari',
      slug: 'how-to-plan',
      icon: Compass,
      accent: 'text-blue-600',
      bg: 'bg-blue-50',
      description: 'A complete timeline from 12 months out to departure. Key decisions and step-by-step guidance.',
      topics: ['Planning timeline', 'Booking process', 'Expert tips'],
    },
    {
      title: 'When to Go on Safari',
      slug: 'when-to-go',
      icon: Calendar,
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      description: 'Dry vs wet season, best time by destination, and the Great Migration calendar.',
      topics: ['Migration timing', 'Best time by country', 'Weather patterns'],
    },
    {
      title: 'What to Pack for Safari',
      slug: 'what-to-pack',
      icon: Package,
      accent: 'text-amber-600',
      bg: 'bg-amber-50',
      description: 'Comprehensive lists, baggage restrictions, camera gear, and bush essentials.',
      topics: ['Clothing lists', 'Camera equipment', 'Baggage limits'],
    },
    {
      title: 'Safari Costs & Budgeting',
      slug: 'safari-costs',
      icon: DollarSign,
      accent: 'text-purple-600',
      bg: 'bg-purple-50',
      description: 'Budget categories, what\'s included, money-saving tips, and permit costs.',
      topics: ['Budget tiers', 'Cost breakdown', 'What\'s included'],
    },
    {
      title: 'Safari FAQ',
      slug: 'faq',
      icon: HelpCircle,
      accent: 'text-rose-600',
      bg: 'bg-rose-50',
      description: '30+ frequently asked questions covering health, wildlife, and logistics.',
      topics: ['Safety & Health', 'Wildlife viewing', 'Booking Qs'],
    },
    {
      title: 'First-Time Safari Guide',
      slug: 'first-time-safari',
      icon: Sparkles,
      accent: 'text-cyan-600',
      bg: 'bg-cyan-50',
      description: 'Everything first-timers need to know. Daily routines and common worries debunked.',
      topics: ['What to expect', 'Daily routine', 'Top tips'],
    },
  ];

  return (
    <>
      {/* Intro Stats */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-stone-900">
                <Map className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-900">Expert Roadmaps</h3>
              <p className="text-stone-500 font-sans text-sm">Step-by-step guidance from dream to departure.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-stone-900">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-900">Vetted Advice</h3>
              <p className="text-stone-500 font-sans text-sm">Practically-tested tips from 25+ years in the bush.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-stone-900">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-900">Specialist Focus</h3>
              <p className="text-stone-500 font-sans text-sm">Niche advice for photographers, families, and solo travelers.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="flex flex-col h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group bg-white overflow-hidden">
                <div className="p-8 flex-1">
                  <div className={`w-14 h-14 rounded-xl ${guide.bg} ${guide.accent} flex items-center justify-center mb-6`}>
                    <guide.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-stone-900">{guide.title}</h3>
                  <p className="text-stone-600 font-sans text-sm mb-6 leading-relaxed">{guide.description}</p>
                  
                  <div className="space-y-2 mb-8 border-t border-stone-100 pt-6">
                    {guide.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-500">
                        <div className={`w-1 h-1 rounded-full ${guide.accent.replace('text-', 'bg-')}`} />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-stone-50 border-t border-stone-100">
                  <Button variant="ghost" className="w-full justify-between hover:bg-white hover:text-amber-700" asChild>
                    <Link href={`/plan/${guide.slug}`}>
                      Read Guide <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Your Planning Timeline</h2>
            <div className="space-y-12">
              {[
                { time: "6-12 Months Before", items: ["Research destinations", "Set budget and dates", "Book gorilla permits", "Reserve popular lodges"] },
                { time: "3-6 Months Before", items: ["Finalize itinerary", "Book flights", "Consult travel clinic", "Purchase insurance"] },
                { time: "1-3 Months Before", items: ["Complete visas", "Get gear and binoculars", "Review packing list", "Final payments"] }
              ].map((step, idx) => (
                <div key={idx} className="relative pl-12 border-l-2 border-stone-100">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-4 border-amber-600 shadow-sm" />
                  <div className="flex items-center gap-4 mb-6 text-stone-900">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <h3 className="text-2xl font-bold">{step.time}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl border border-stone-100">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-sans text-stone-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Help Section */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        <Container>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Need Personalized Advice?</h2>
            <p className="text-xl text-stone-300 mb-10 font-sans leading-relaxed">
              Our safari experts are ready to help you craft an itinerary that fits your specific dreams and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/plan/faq">Read FAQs</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

