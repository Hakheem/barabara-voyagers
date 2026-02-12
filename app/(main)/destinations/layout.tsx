"use client";
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const destinationHeroData: Record<string, any> = {
  kenya: {
    title: "Kenya",
    description: "The original safari destination. Experience the legendary Masai Mara, dramatic landscapes of Amboseli, and the rich cultural heritage of the Maasai people.",
    image: "/kenya_head_r.jpg"
  },  
  tanzania: {
    title: "Tanzania",
    description: "Home to the Ngorongoro Crater and the endless Serengeti, Tanzania offers a scale of wildlife viewing that is unmatched.",
    image: "/tz_hero.jpg"
  },
  uganda: {
    title: "Uganda",
    description: "The Pearl of Africa. Trek through the Bwindi Impenetrable Forest to sit among the Mountain Gorillas in their natural habitat.",
    image: "/ug_hero.jpg"
  },
  rwanda: {
    title: "Rwanda",
    description: "Land of a Thousand Hills. Experience world-class eco-lodges and the life-changing encounter with gorillas in Volcanoes National Park.",
    image: "/rwanda_hero.jpg"
  },
  botswana: {
    title: "Botswana",
    description: "The gold standard for low-impact, high-luxury safari. Navigate the crystalline waters of the Okavango Delta by mokoro.",
    image: "/botswana_hero.jpg"
  },
  namibia: {
    title: "Namibia",
    description: "Journey through Africa's most photogenic landscapes. Towering red dunes, dramatic coastlines, desert-adapted wildlife, and endless starry skies in one of the world's least densely populated countries.",
    image: "/namibia_hero.jpg"
  },
  "south-africa": {
    title: "South Africa",
    description: "Experience the Rainbow Nation's incredible diversity. World-class Big Five safaris, stunning Cape Town, award-winning wine country, and malaria-free options perfect for families. ",
    image: "/south_africa_hero.jpg"
  },
  zimbabwe: {
    title: "Zimbabwe",
    description: "Home to the thunderous Victoria Falls and the rugged Mana Pools. Experience the true pulse of the continent.",
    image: "/zimbabwe_hero.jpg"
  },
  zambia: {
    title: "Zambia",
    description: "The birthplace of the walking safari. Discover intimate wildlife encounters in the Luangwa Valley and Lower Zambezi.",
    image: "/zambia_hero.jpg"
  },
  malawi: {
    title: "Malawi",
    description: "The Warm Heart of Africa. Defined by the shimmering expanse of Lake Malawi and serene wildlife reserves.",
    image: "/malawi_hero.jpg"
  },
  morocco: {
    title: "Moroccan Journey",
    description: "From the snow-capped Atlas Mountains to the golden dunes of the Sahara, discover a land of vibrant spice markets and ancient history.",
    image: "/morocco_hero.jpg"
  },
  'multi-country': {
    title: "Multi-Country Adventures",
    description: "From the snow-capped Atlas Mountains to the golden dunes of the Namib. Migrate together with wildlife from Kenya to Tanzania, or combine the best of Southern Africa in one unforgettable trip.",
    image: "/multi_country.jpg"
  }
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment(); 
  const dest = segment ? destinationHeroData[segment] : null;
 
  if (!dest) return <>{children}</>;

  return (
    <>
      <section className="relative h-[55vh] md:h-[50vh] lg:h-[70vh] flex items-center overflow-hidden  ">
        <div className="absolute inset-0 z-0">
          <Image
            src={dest.image}
            alt={dest.title}
            fill
            className="object-cover brightness-50"
            priority
            />
        </div>
        
            <Container>
      
        <div className="absolute z-10 p-6 md:p-8 lg:p-12 max-w-3xl bottom-6 left-6 right-6 md:right-auto md:bottom-8 md:left-8 lg:bottom-3 lg:left-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4  text-white leading-tight">
            {dest.title}
          </h1>
          <p className="text-base md:text-lg mb-6  leading-relaxed text-gray-300 font-sans">
            {dest.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href={`/destinations/${segment}#safaris`}>
                Explore {dest.title}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 hover:border-white/10" asChild>
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
       </Container>

      </section>
      {children}
    </>
  );
}

