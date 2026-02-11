import Image from 'next/image';
import Link from 'next/link';
import { 
  HelpCircle, 
  Check, 
  Search, 
  ChevronDown, 
  ShieldCheck, 
  Plane, 
  Camera, 
  Wallet,
  Stethoscope,
  Map 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'; 
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Safari FAQ - Expert Answers to Your African Travel Questions',
  description: 'Everything you need to know about safety, health, costs, and wildlife. The definitive guide to preparing for your first or fifth safari.',
};

export default function SafariFAQPage() {
  const faqCategories = [
    {
      id: 'planning',
      category: 'Planning & Booking',
      icon: <Map className="w-5 h-5" />,
      questions: [
        {
          q: 'How far in advance should I book my safari?',
          a: 'For peak season (July–October) or Gorilla trekking, we recommend booking 9–12 months in advance. Luxury lodges and specific permits sell out quickly. For green season travel, 4–6 months is usually sufficient.',
        },
        {
          q: 'How long should my safari be?',
          a: 'The "sweet spot" is 7–10 days. This allows you to visit 2–3 distinct ecosystems (e.g., Serengeti and Ngorongoro) without feeling "safari fatigue." If you wish to include a beach extension in Zanzibar or Gorilla trekking, plan for 12–14 days.',
        },
        {
          q: 'Should I book a group or private safari?',
          a: 'Private safaris offer total control over your schedule—essential for photographers and families. Group safaris are excellent for solo travelers looking to reduce costs. At Barabara Voyagers, we specialize in private, tailor-made journeys.',
        },
      ],
    },
    {
      id: 'health',
      category: 'Health & Safety',
      icon: <Stethoscope className="w-5 h-5" />,
      questions: [
        {
          q: 'Is safari dangerous?',
          a: 'Statistically, you are safer on safari than driving in a major city. Our guides are experts in animal behavior and safety protocols. As long as you remain in the vehicle and follow instructions, wildlife encounters are peaceful and awe-inspiring.',
        },
        {
          q: 'Do I need malaria prophylaxis?',
          a: 'Yes, most major safari hubs are in malaria zones. We strongly advise consulting a travel clinic for medication like Malarone. If you prefer a malaria-free experience, we recommend the Eastern Cape or Madikwe in South Africa.',
        },
        {
          q: 'What about drinking water?',
          a: 'Never drink tap water. All our partnered lodges provide unlimited purified or bottled water in rooms, at meals, and inside safari vehicles.',
        },
      ],
    },
    {
      id: 'money',
      category: 'Money & Costs',
      icon: <Wallet className="w-5 h-5" />,
      questions: [
        {
          q: 'How much does a safari cost?',
          a: 'Think of safari pricing in tiers per person, per day: Mid-range ($450–$700), Luxury ($750–$1,200), and Ultra-Luxury ($1,500+). This usually includes all meals, game drives, and regional flights.',
        },
        {
          q: 'How much should I tip?',
          a: 'Tipping is a vital part of the safari economy. We suggest $20 per day for your lead guide and $15 per day (per guest) for the general lodge staff pool. Tips are best given in USD cash at the end of your stay.',
        },
      ],
    },
    {
      id: 'gear',
      category: 'Packing & Gear',
      icon: <Camera className="w-5 h-5" />,
      questions: [
        {
          q: 'What should I wear on safari?',
          a: 'Layers are key. Early mornings are freezing; middays are hot. Stick to neutral tones (khaki, olive, tan). Avoid bright blue and black, as they attract tsetse flies, and leave camouflage at home—it is reserved for the military in many African nations.',
        },
        {
          q: 'Are there luggage restrictions?',
          a: 'Yes. Most bush planes have a strict limit of 15kg (33lbs) in soft-sided duffel bags. Hard-shell suitcases literally will not fit into the small cargo pods of these aircraft.',
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
  
      <section className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* --- STICKY SIDEBAR NAV --- */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 px-4">Categories</p>
                {faqCategories.map((cat) => (
                  <a 
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-100 transition-colors text-stone-600 font-bold group"
                  >
                    <span className="text-amber-600 group-hover:scale-110 transition-transform">{cat.icon}</span>
                    {cat.category}
                  </a>
                ))}
                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100">
                   <p className="text-sm font-bold text-amber-900 mb-2">Need a PDF guide?</p>
                   <p className="text-xs text-amber-800 mb-4">Download our comprehensive 40-page safari prep book.</p>
                   <Button size="sm" className="w-full bg-amber-600">Download Guide</Button>
                </div>
              </div>
            </aside>

            {/* --- FAQ CONTENT --- */}
            <div className="lg:w-3/4 space-y-20">
              {faqCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-grow bg-stone-200" />
                    <h2 className="text-2xl font-bold text-stone-800 whitespace-nowrap">{category.category}</h2>
                    <div className="h-px flex-grow bg-stone-200" />
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 bg-white shadow-sm border-stone-100 overflow-hidden">
                        <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-amber-700 cursor-pointer">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-stone-600  text-base leading-relaxed pb-6">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- QUICK FACTS GRID --- */}
      <section className="py-24 bg-stone-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Snapshot Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 border-none shadow-sm bg-white">
              <ShieldCheck className="text-amber-600 mb-4" size={32} />
              <h3 className="font-bold mb-2">Safety Record</h3>
              <p className="text-sm text-stone-500 ">99.9% of safaris are completed without a single security or wildlife incident.</p>
            </Card>
            <Card className="p-8 border-none shadow-sm bg-white">
              <Plane className="text-amber-600 mb-4" size={32} />
              <h3 className="font-bold mb-2">Visa Needs</h3>
              <p className="text-sm text-stone-500 ">Kenya and Tanzania now offer seamless E-Visas for most Western travelers.</p>
            </Card>
            <Card className="p-8 border-none shadow-sm bg-white">
              <Camera className="text-amber-600 mb-4" size={32} />
              <h3 className="font-bold mb-2">Gear Rental</h3>
              <p className="text-sm text-stone-500 ">No 500mm lens? Many lodges offer high-end camera rental on-site.</p>
            </Card>
            <Card className="p-8 border-none shadow-sm bg-white">
              <HelpCircle className="text-amber-600 mb-4" size={32} />
              <h3 className="font-bold mb-2">Support</h3>
              <p className="text-sm text-stone-500 ">Barabara clients have a 24/7 ground-support hotline in every country.</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24">
        <Container>
          <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
             <Image 
               src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200" 
               alt="Footer Background" 
               fill 
               className="object-cover opacity-10"
             />
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Didn't find your answer?</h2>
                <p className="text-xl text-emerald-100 mb-10 max-w-xl mx-auto ">
                  Safari planning is complex. Let us simplify it for you with a 15-minute discovery call.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-none px-10">Talk to a Consultant</Button>
                   <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10">Email Us</Button>
                </div>
             </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

