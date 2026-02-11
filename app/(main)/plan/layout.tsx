"use client";
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Compass, Calendar, Package, DollarSign, HelpCircle, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';

const planHeroData: Record<string, any> = {
  'how-to-plan': {
    title: "How to Plan Your Safari",
    badge: "Expert Roadmap",
    badgeColor: "bg-blue-600",
    icon: <Compass className="h-4 w-4" />,
    description: "Planning a safari is a marathon, not a sprint. Follow our expert countdown to ensure you don't miss a single sunset.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600",
  },
  'when-to-go': {
    title: "When to Go on Safari",
    badge: "Seasonal Guide",
    badgeColor: "bg-emerald-600",
    icon: <Calendar className="h-4 w-4" />,
    description: "Understand the rhythm of the wild. From the Great Migration to the emerald season, we help you find the perfect time to visit.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600",
  },
  'what-to-pack': {
    title: "What to Pack",
    badge: "Bush Essentials",
    badgeColor: "bg-amber-600",
    icon: <Package className="h-4 w-4" />,
    description: "The definitive packing list for the modern explorer. From technical gear to essential health items, we've got you covered.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600",
  },
  'safari-costs': {
    title: "Costs & Budgeting",
    badge: "Investment Guide",
    badgeColor: "bg-purple-600",
    icon: <DollarSign className="h-4 w-4" />,
    description: "Clear, transparent advice on safari pricing. Understand what goes into the cost of your journey and how to maximize value.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1600",
  },
  'faq': {
    title: "FAQs",
    badge: "Common Questions",
    badgeColor: "bg-rose-600",
    icon: <HelpCircle className="h-4 w-4" />,
    description: "Everything you need to know before you touch down in the bush. Can't find what you're looking for? Our experts are a call away.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600",
  },
  'first-time-safari': {
    title: "First-Time Safari?",
    badge: "The Definitive Handbook",
    badgeColor: "bg-cyan-600",
    icon: <Sparkles className="h-4 w-4" />,
    description: "From the 5:00 AM coffee calls to the magic of the Sundowner, here is exactly what to expect when you step into the wild.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1600",
  }
};

export default function PlanningLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  // Default data for the main /plan hub
  const content = segment ? planHeroData[segment] : {
    title: "Plan Your Masterpiece",
    badge: "Planning Hub",
    badgeColor: "bg-stone-900",
    icon: <Compass className="h-4 w-4" />,
    description: "An African safari is a journey of a lifetime. Use our expert-led guides to ensure your adventure is as seamless as it is spectacular.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920"
  };

  if (!content) return <>{children}</>;

  return (
    <>
      <section className="relative h-[55vh] md:h-[50vh] lg:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="absolute z-10 p-6 md:p-8 lg:p-12 max-w-3xl bottom-6 left-6 right-6 md:right-auto md:bottom-6 md:left-8 lg:bottom-0 lg:left-8">
          <div className={`inline-flex items-center gap-2 ${content.badgeColor} px-4 py-2 rounded-full mb-4 text-white shadow-md`}>
            {content.icon}
            <span className="font-medium text-xs uppercase tracking-wider">{content.badge}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-[1.1]">
            {content.title}
          </h1>
          <p className="text-base md:text-lg mb-4 leading-relaxed text-gray-200 font-sans max-w-2xl">
            {content.description}
          </p>
        </div>
      </section>


      {children}
    </>
  );
}

