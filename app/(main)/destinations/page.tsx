import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/layout/SectionHeader';

export const metadata = {
  title: 'Safari Destinations - Explore Africa | Barabara Voyagers',
  description: 'From the endless plains of the Serengeti to the mist-covered peaks of Rwanda, discover our curated luxury destinations across Africa.',
};

export default function DestinationsPage() {
  const destinations = [
    // --- EAST AFRICA ---
    {
      name: "Kenya",
      tagline: "The Cradle of Safari",
      description: "Kenya is the land of the legendary Maasai Mara, where the Great Migration paints the plains with life. Beyond the savannah, discover the rugged beauty of Samburu, the shadows of Mount Kenya, and the sparkling white sands of the Swahili Coast. It is a destination that offers the quintessential African experience—vast, vibrant, and timeless.",
      image: "/d_kenya.jpg",
      slug: "kenya"
    },
    {
      name: "Tanzania",
      tagline: "A World of Natural Wonders",
      description: "Home to the Ngorongoro Crater and the endless Serengeti, Tanzania offers a scale of wildlife viewing that is unmatched. Experience the 'Big Five' against the backdrop of Africa's highest peak, Mount Kilimanjaro, then escape to the spice-scented islands of Zanzibar for a perfect barefoot luxury finish. Tanzania is raw, majestic, and infinitely soulful.",
      image: "/d_tz.jpg",
      slug: "tanzania"
    },
    {
      name: "Uganda",
      tagline: "The Pearl of Africa",
      description: "Winston Churchill called it the Pearl of Africa for a reason. Uganda is a lush, emerald paradise where the savannah meets the rainforest. Trek through the Bwindi Impenetrable Forest to sit among the Mountain Gorillas, or navigate the Kazinga Channel in Queen Elizabeth Park. It is Africa’s most diverse hidden gem.",
      image: "/d_ug.jpg",
      slug: "uganda"
    },
    {
      name: "Rwanda",
      tagline: "Land of a Thousand Hills",
      description: "Rwanda has emerged as one of the world's most exclusive luxury trekking destinations. Beyond the life-changing encounter with gorillas in the Volcanoes National Park, the country offers the primates of Nyungwe Forest and the classic big game of Akagera. It is a land of resilience, pristine beauty, and world-class eco-lodges.",
      image: "/d_rwanda.jpg",
      slug: "rwanda"
    },
    // --- SOUTHERN AFRICA ---
    {
      name: "Botswana",
      tagline: "The Last Eden",
      description: "Botswana is the gold standard for low-impact, high-luxury safari. Whether navigating the crystalline waters of the Okavango Delta by mokoro or witnessing the massive elephant herds of Chobe, Botswana offers a sense of exclusivity and wilderness that is becoming increasingly rare in the modern world.",
      image: "/d_botswana.jpg",
      slug: "botswana"
    },
    {
      name: "Namibia",
      tagline: "A Land of Infinite Spaces",
      description: "Namibia is a masterpiece of light and shadow. From the towering red dunes of Sossusvlei to the haunting Skeleton Coast where the desert meets the Atlantic, this is a landscape like no other. Discover the adapted wildlife of Etosha and the silence of the Namib—the world’s oldest desert.",
      image: "/d_namibia.jpg",
      slug: "namibia"
    },
    {
      name: "South Africa",
      tagline: "A World in One Country",
      description: "South Africa offers a sophisticated blend of wild adventure and urban elegance. Pair the world-class game viewing of the Kruger National Park with the fine wines of the Cape Winelands and the iconic silhouette of Table Mountain. It is a destination of culture, history, and unparalleled luxury.",
      image: "https://images.unsplash.com/photo-1575328630189-440449ed8cd1?w=1200",
      slug: "south-africa"
    },
    {
      name: "Zimbabwe",
      tagline: "The Home of the Walking Safari",
      description: "Zimbabwe is famous for having some of the most highly trained guides in Africa. Home to the thunderous Victoria Falls, the rugged Mana Pools, and the ancient ruins of Great Zimbabwe, it offers an authentic, deep-bush experience for those who want to feel the true pulse of the continent.",
      image: "https://images.unsplash.com/photo-1519010470956-6d877008eaa4?w=1200",
      slug: "zimbabwe"
    },
    {
      name: "Zambia",
      tagline: "Africa's Best Kept Secret",
      description: "Zambia is the birthplace of the walking safari and remains the frontier of untouched wilderness. In the Luangwa Valley and the Lower Zambezi, wildlife encounters are intimate and intense. Here, the rivers are the lifeblood of the landscape, offering boat safaris and canoeing alongside traditional game drives.",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200",
      slug: "zambia"
    },
    {
      name: "Malawi",
      tagline: "The Warm Heart of Africa",
      description: "Malawi is defined by the shimmering expanse of Lake Malawi—an inland sea with golden beaches and hidden islands. Beyond the water, the recently restored Majete and Liwonde reserves offer incredible wildlife recovery stories. It is a place of smiles, sunsets, and serene beauty.",
      image: "https://images.unsplash.com/photo-1534464539712-4268e646736a?w=1200",
      slug: "malawi"
    },
    // --- NORTH AFRICA ---
    {
      name: "Morocco",
      tagline: "A Tapestry of Senses",
      description: "Morocco is where the desert meets the sky and the mountains meet the sea. From the vibrant spice markets of Marrakech and the ancient medinas of Fes to the rolling dunes of the Sahara and the snow-capped Atlas Mountains, Morocco is a sensory feast of architecture, hospitality, and history.",
      image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200",
      slug: "morocco"
    },
    // --- SPECIALIZED ---
    {
      name: "Multi-Country",
      tagline: "The Ultimate African Odyssey",
      description: "For the traveler who wants to see it all. Our multi-country journeys seamlessly blend the different spirits of Africa. Pair the Great Migration of the East with the thundering falls of the South, or the mountain gorillas of the forest with the white sands of the coast.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200",
      slug: "multi-country"
    }
  ];

  return (
    <>
      <SectionHeader
        image="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920"
        height="h-[50vh]"
        overlayOpacity="bg-black/40"
      />

      <section className="py-24 ">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm uppercase tracking-[0.4em] text-amber-700 font-bold mb-6">The Voyager Map</h2>
            <p className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed">
              "To travel to Africa is to return home to a place you have never been, yet have always known."
            </p>
          </div>
        </Container>
      </section>

      {destinations.map((dest, index) => (
        <section key={dest.slug} className={`overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className={`flex h-fit flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

            {/* Image Side */}
            <div className="relative w-full md:w-1/2 h-72 md:h-auto">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 text-center md:text-left">
              <div className="max-w-md">
                <span className="text-amber-700 font-bold uppercase tracking-[0.3em] text-xs">Explore {dest.name}</span>
                <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{dest.name}</h3>
                <p className="text-gray-500 italic mb-8 text-lg">&ldquo;{dest.tagline}&rdquo;</p>
                <p className="text-gray-600 leading-relaxed mb-10 font-sans">
                  {dest.description}
                </p>
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-gray-900 group"
                >
                  Discover {dest.name}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-amber-600 text-white text-center">
        <Container>
          <h2 className="text-4xl font-bold mb-6">Your Personal Map Awaits</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Every Barabara journey is hand-crafted. Let us know where your heart is pulling you, and we will do the rest.
          </p>
          <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 rounded px-12" asChild>
            <Link href="/contact">Inquire Now</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
