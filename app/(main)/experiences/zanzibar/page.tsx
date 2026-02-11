import Image from 'next/image';
import Link from 'next/link';
import { 
  Palmtree, 
  Sun, 
  Wind, 
  Anchor, 
  Compass, 
  Utensils, 
  Waves, 
  Plane,
  MapPin,
  History
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Zanzibar Beach Extension - The Spice Island | Barabara Voyagers',
  description: 'The perfect safari finale. Compare Nungwi vs Paje, understand the tides, and explore Stone Town.',
};

export default function ZanzibarPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1583886266666-cd5a87a6cc7f?w=1920" 
            alt="Zanzibar Traditional Dhow" 
            fill 
            className="object-cover brightness-[0.75]" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-transparent" />
        </div>
        
        <Container className="absolute bottom-16 left-8 z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-teal-400/30">
              <Sun className="h-4 w-4 text-teal-50" />
              <span className="text-xs font-bold tracking-widest uppercase text-white">The Ultimate Safari Finale</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight ">
              Zanzibar
            </h1>
            <p className="text-xl mb-8 text-gray-100  max-w-2xl leading-relaxed">
              Wash off the safari dust in the warm Indian Ocean. From the winding alleys of gray Town to the white sands of Nungwi.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white border-none " asChild>
                <Link href="#regions">Find Your Beach</Link>
              </Button>
              <Button variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm ">
                Understand the Tides
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* --- BUSH TO BEACH INTRO --- */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-50/50 -z-10 hidden lg:block" />
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4  text-teal-950">Why "Bush to Beach"?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Tanzania safari is an exhilarating, early-morning adventure. Zanzibar is the exhale. 
                Just a short flight from the Serengeti, it offers the perfect contrast: from the golden savannah to the turquoise ocean.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-white rounded-md shadow-sm border border-gray-100">
                  <Plane className="text-teal-600" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Easy Access</p>
                    <p className="text-xs text-gray-500">Direct flights from Serengeti/Arusha</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <History className="text-orange-600" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">Rich Culture</p>
                    <p className="text-xs text-gray-500">Arab, Indian, & African fusion</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
               <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl rotate-2">
                 <Image 
                   src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800" 
                   alt="gray Town Door" 
                   fill 
                   className="object-cover" 
                 />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-teal-500">
                 <p className="text-gray-600 italic  text-sm">
                   "The air smells of cloves and vanilla. The water is the temperature of a bath."
                 </p>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- REGIONAL GUIDE (CRITICAL INFO) --- */}
      <section id="regions" className="py-24 bg-teal-900 text-gray-100">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6  text-white">Where to Stay: A Regional Guide</h2>
            <p className="text-lg text-teal-100/80">
              Zanzibar is a large island. Choosing the right coast changes your entire experience. 
              We'll help you navigate the geography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* NORTH */}
            <Card className="bg-teal-800/50 border-teal-700/50 text-gray-100 p-8 hover:bg-teal-800 transition-colors">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                <Compass className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">The North</h3>
              <p className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-4">Nungwi & Kendwa</p>
              <p className="text-sm text-teal-100/70 mb-6 leading-relaxed">
                The most popular area. Famous for minimal tidal variation, meaning you can swim all day. Vibrant nightlife and larger resorts.
              </p>
              <div className="space-y-3 pt-6 border-t border-teal-700/50">
                <div className="flex gap-2 text-sm items-center">
                  <Waves size={16} className="text-teal-400" />
                  <span>Best for swimming (all day)</span>
                </div>
                <div className="flex gap-2 text-sm items-center">
                  <Utensils size={16} className="text-teal-400" />
                  <span>Many restaurants & bars</span>
                </div>
              </div>
            </Card>

            {/* EAST */}
            <Card className="bg-teal-800/50 border-teal-700/50 text-gray-100 p-8 hover:bg-teal-800 transition-colors">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                <Wind className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">The East</h3>
              <p className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-4">Matemwe, Paje, Jambiani</p>
              <p className="text-sm text-teal-100/70 mb-6 leading-relaxed">
                Laid-back, boutique vibes. The tide recedes significantly here (up to 1km), revealing stunning turquoise lagoons and seaweed farms.
              </p>
              <div className="space-y-3 pt-6 border-t border-teal-700/50">
                <div className="flex gap-2 text-sm items-center">
                  <Wind size={16} className="text-teal-400" />
                  <span>World-class kitesurfing (Paje)</span>
                </div>
                <div className="flex gap-2 text-sm items-center">
                  <Palmtree size={16} className="text-teal-400" />
                  <span>Boutique & honeymoon hotels</span>
                </div>
              </div>
            </Card>

            {/* WEST */}
            <Card className="bg-teal-800/50 border-teal-700/50 text-gray-100 p-8 hover:bg-teal-800 transition-colors">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                <History className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Gray Town</h3>
              <p className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-4">The Historic Capital</p>
              <p className="text-sm text-teal-100/70 mb-6 leading-relaxed">
                A UNESCO World Heritage site. A maze of alleyways, ancient doors, and night markets. A sensory overload of history and culture.
              </p>
              <div className="space-y-3 pt-6 border-t border-teal-700/50">
                <div className="flex gap-2 text-sm items-center">
                  <MapPin size={16} className="text-teal-400" />
                  <span>Cultural heart of the island</span>
                </div>
                <div className="flex gap-2 text-sm items-center">
                  <Utensils size={16} className="text-teal-400" />
                  <span>Forodhani Night Market</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-teal-950/50 rounded-2xl border border-teal-800 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0 bg-orange-500/20 p-3 rounded-full text-orange-400">
               <Waves size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">The Truth About Tides</h4>
              <p className="text-sm text-teal-200 mt-1">
                Transparency matters. On the East Coast, the ocean retreats far out at low tide. You cannot swim off the beach during these hours, but it creates beautiful landscapes for walking. If 24/7 swimming is a priority, choose the North (Nungwi).
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- EXPERIENCES --- */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
               <h2 className="text-4xl font-bold  mb-4 text-gray-900">Beyond the Sunbed</h2>
               <p className="text-gray-600">Zanzibar is more than just a beach destination.</p>
             </div>
             <Button variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50 mt-4 md:mt-0">
               View All Activities
             </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Spice Farm Tour", 
                desc: "Smell and taste fresh cinnamon, vanilla, and nutmeg right from the source.",
                img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800"
              },
              { 
                title: "Blue Lagoon Snorkel", 
                desc: "Crystal clear waters teeming with starfish and tropical fish on the southeast coast.",
                img: "https://images.unsplash.com/photo-1544551763-46a8723ba3f9?w=800"
              },
              { 
                title: "The Rock Restaurant", 
                desc: "Dining on a coral rock in the middle of the ocean. A bucket-list experience.",
                img: "https://images.unsplash.com/photo-1586500036706-5805860a2903?w=800"
              },
              { 
                title: "Jozani Forest", 
                desc: "Walk through mangroves and spot the rare Red Colobus monkeys native only to Zanzibar.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800"
              }
            ].map((item, i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                   <Image 
                     src={item.img} 
                     alt={item.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                 </div>
                 <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                 <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
               </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto bg-teal-50 rounded-[3rem] p-12 text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-teal-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6  text-teal-900">Ready for Paradise?</h2>
              <p className="text-xl mb-8  text-teal-800/70 max-w-xl mx-auto">
                We suggest 3-4 nights in a beach resort combined with 1 night in gray Town for the full experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700 border-none px-8">
                  Plan My Extension
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-teal-200 text-teal-800 hover:bg-white">
                  See Tanzania Safaris
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

