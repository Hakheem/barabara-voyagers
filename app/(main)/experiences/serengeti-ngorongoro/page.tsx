import Image from 'next/image';
import Link from 'next/link';
import { 
  Mountain, 
  Check, 
  Calendar, 
  Award, 
  Map, 
  Binoculars, 
  Sun, 
  Compass, 
  PawPrint, 
  Camera, 
  Clock,
  Tent
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Serengeti & Ngorongoro Safari - The Northern Circuit | Barabara Voyagers',
  description: 'Experience Tanzania\'s legendary Northern Circuit. Witness the Great Migration in the Serengeti and the Big Five in the Ngorongoro Crater.',
};

export default function SerengetiNgorongoroPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920" 
            alt="Lions in the Serengeti" 
            fill 
            className="object-cover brightness-[0.6]" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-gray-900/90" />
        </div>
        
        <Container className="absolute bottom-16 left-8 z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-600/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-amber-500/30">
              <Award className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">The Ultimate African Safari</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight ">
              Serengeti &{' '}
              <span className="text-amber-400">Ngorongoro</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200  max-w-2xl leading-relaxed">
              The stage for the greatest wildlife show on Earth. Endless plains, a volcanic Eden, and the drama of the Great Migration.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button  className="bg-amber-600 hover:bg-amber-700 text-white border-none " asChild>
                <Link href="#itinerary">See the Itinerary</Link>
              </Button>
              <Button  variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm ">
              <Link href='/plan/when-to-go'>  When to Go?</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* --- QUICK STATS BAR --- */}
      <section className="relative z-20 -mt-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "Wildlife Density", value: "World's Highest", icon: PawPrint, sub: "In the Crater" },
              { label: "Key Event", value: "The Migration", icon: Compass, sub: "1.5 Million Animals" },
              { label: "Landscape", value: "Savannah & Caldera", icon: Mountain, sub: "UNESCO Heritage" },
              { label: "Best For", value: "Big Five", icon: Binoculars, sub: "Lions, Leopards, Rhinos" },
            ].map((stat, i) => (
              <Card key={i} className="bg-white p-6 border-none shadow-xl text-center md:text-left flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                <div className="p-3 bg-amber-50 rounded-full text-amber-600 md:mb-4">
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-sm text-gray-500 ">{stat.sub}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* --- THE TALE OF TWO GIANTS --- */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 ">The Northern Circuit Giants</h2>
            <p className="text-lg text-gray-600 ">
              While often visited together, these two destinations offer completely different experiences. The vast, open drama of the Serengeti contrasts with the enclosed, intense density of the Crater.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* SERENGETI CARD */}
            <div className="group">
              <div className="relative h-64 rounded-t-3xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800" 
                  alt="Serengeti Plains" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <h3 className="text-3xl font-bold text-white">The Serengeti</h3>
                </div>
              </div>
              <div className="bg-white p-8 rounded-b-3xl shadow-sm border border-gray-100">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Siringet" means "Endless Plains." It is vast, wild, and dominated by the rhythm of the rains. It is the stage for the Great Migration.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-amber-500" size={18} /> 
                    <span>Home to 3,000+ lions (Africa's largest population)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-amber-500" size={18} /> 
                    <span>The Great Migration moves through here year-round</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-amber-500" size={18} /> 
                    <span>Cheetahs hunting on the open plains</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* NGORONGORO CARD */}
            <div className="group">
              <div className="relative h-64 rounded-t-3xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1518552684462-8e1008d5162a?w=800" 
                  alt="Ngorongoro Crater" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <h3 className="text-3xl font-bold text-white">Ngorongoro Crater</h3>
                </div>
              </div>
              <div className="bg-white p-8 rounded-b-3xl shadow-sm border border-gray-100">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A geological marvel. The world's largest inactive volcanic caldera forms a natural "fishbowl" for wildlife.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-amber-500" size={18} /> 
                    <span>Highest density of predators in Africa</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-amber-500" size={18} /> 
                    <span>Best place to see the endangered Black Rhino</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-amber-500" size={18} /> 
                    <span>See the entire Big Five in a single day</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- MIGRATION CALENDAR --- */}
      <section className="py-24 bg-gray-900 text-gray-200">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block p-3 bg-amber-500/10 rounded-full text-amber-500 mb-4">
                <Map size={24} />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Chasing the Migration</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                The herds are constantly moving in a clockwise loop. To see the migration, you must be in the right place at the right time.
              </p>
              
              

              <div className="space-y-6 mt-8">
                <div className="flex gap-4 p-4 border border-gray-800 rounded-xl hover:bg-gray-800 transition-colors">
                  <div className="text-amber-500 font-bold w-24 flex-shrink-0">Jan - Mar</div>
                  <div>
                    <h4 className="font-bold text-white">Calving Season (South)</h4>
                    <p className="text-sm text-gray-400">8,000 calves born daily. Intense predator action on the southern grassy plains (Ndutu).</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-gray-800 rounded-xl hover:bg-gray-800 transition-colors">
                  <div className="text-amber-500 font-bold w-24 flex-shrink-0">Apr - Jun</div>
                  <div>
                    <h4 className="font-bold text-white">The Trek (West/Central)</h4>
                    <p className="text-sm text-gray-400">The herds move west towards the Grumeti River. Known as "The Rut" (mating season).</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-gray-800 rounded-xl bg-gray-800/50 border-amber-500/50">
                  <div className="text-amber-500 font-bold w-24 flex-shrink-0">Jul - Oct</div>
                  <div>
                    <h4 className="font-bold text-white">River Crossings (North)</h4>
                    <p className="text-sm text-gray-400">The dramatic Mara River crossings. The most famous and sought-after spectacle.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-gray-800 rounded-xl hover:bg-gray-800 transition-colors">
                  <div className="text-amber-500 font-bold w-24 flex-shrink-0">Nov - Dec</div>
                  <div>
                    <h4 className="font-bold text-white">The Return (East)</h4>
                    <p className="text-sm text-gray-400">Herds move south again through Lobo to the sweet grasses for the rains.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                  src="https://images.unsplash.com/photo-1523393660502-d7b4195b0586?w=800" 
                  alt="Wildebeest Migration" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3 text-amber-400 mb-2">
                    <Camera size={20} />
                    <span className="font-bold text-sm uppercase">Pro Tip</span>
                  </div>
                  <p className="text-white text-sm">
                    Book 12 months in advance for July-September if you want a front-row seat to the river crossings.
                  </p>
                </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- ITINERARY --- */}
      <section id="itinerary" className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Classic 7-Day Route</h2>
            <p className="text-gray-500">The perfect balance of adventure and relaxation.</p>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-12 space-y-12 max-w-4xl mx-auto">
            
            {/* Day 1 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 w-full">
                  <span className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-2 block">Day 1</span>
                  <h3 className="text-xl font-bold mb-2">Arrival in Arusha</h3>
                  <p className="text-gray-600 text-sm">Land at Kilimanjaro Airport. Transfer to a coffee lodge in Arusha. Relax and prepare for the adventure.</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 w-full">
                  <span className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-2 block">Day 2</span>
                  <h3 className="text-xl font-bold mb-2">Tarangire National Park</h3>
                  <p className="text-gray-600 text-sm">Famous for its massive baobab trees and large herds of elephants. A perfect introduction to the bush.</p>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 w-full">
                  <span className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-2 block">Day 3</span>
                  <h3 className="text-xl font-bold mb-2">Ngorongoro Crater Descent</h3>
                  <p className="text-gray-600 text-sm">Descend 600m into the crater floor. Picnic lunch by the hippo pool. Hunt for the Big Five.</p>
                </div>
              </div>
            </div>

             {/* Day 4-6 */}
             <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 w-full border-l-4 border-l-amber-500">
                  <span className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-2 block">Day 4 - 6</span>
                  <h3 className="text-xl font-bold mb-2">The Serengeti</h3>
                  <p className="text-gray-600 text-sm mb-4">Three full days following the migration. We choose the location of your camp based on where the herds are (South, Central, or North).</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500 flex items-center gap-1"><Tent size={12}/> Luxury Tented Camp</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500 flex items-center gap-1"><Sun size={12}/> Dawn Game Drives</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 7 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm" />
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 w-full">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-2 block">Day 7</span>
                  <h3 className="text-xl font-bold mb-2">Fly Out</h3>
                  <p className="text-gray-600 text-sm">Scenic flight from Serengeti airstrip back to Arusha/Kilimanjaro, or connect directly to Zanzibar.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-amber-600 text-white">
        <Container className="text-center">
          <Sun className="mx-auto mb-6 text-amber-200" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">Witness the Legend</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto  text-amber-50">
            Whether you want to see the calving in February or the river crossings in August, we know exactly where to take you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 border-none px-12">
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
              Combine with Zanzibar
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

