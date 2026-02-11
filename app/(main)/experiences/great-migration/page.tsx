import Image from 'next/image';
import Link from 'next/link';
import { 
  Waves, 
  Check, 
  Calendar, 
  MapPin, 
  Camera, 
  Globe, 
  Tally5, 
  Timer, 
  Zap, 
  Tent, 
  Compass, 
  ArrowRight,
  Info
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: "Great Migration Safari - Witness Nature's Greatest Spectacle | Barabara Voyagers",
  description: "Experience the Great Migration in Tanzania and Kenya. 1.5 million wildebeest river crossings, calving season, predator action. Expert timing and positioning.",
};

export default function GreatMigrationPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* --- HERO SECTION: CINEMATIC --- */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920" 
            alt="Great Migration Wildebeest" 
            fill 
            className="object-cover brightness-50 scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
        </div>
        <Container className="absolute bottom-16 left-8 z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-amber-400/30">
              <Waves className="h-4 w-4" />
              <span className="text-xs tracking-widest uppercase">The Greatest Show on Earth</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              The Great{' '}
              <span className="text-amber-400">Migration</span>
            </h1>
            <p className="text-xl mb-6 text-gray-200 leading-relaxed ">
              1.5 million wildebeest. 500 miles of survival. One epic cycle of life and death across the Serengeti and Masai Mara.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white border-none " asChild>
              <Link href="#calendar">View Migration Calendar</Link>
            </Button>
          </div> 
        </Container>
      </section>

      {/* --- QUICK STATS: BENTO STYLE --- */}
      <section className="relative z-20 -mt-6">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white p-8 border-none shadow-2xl flex items-start gap-5">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                <Tally5 size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">1.5 Million+</h3>
                <p className="text-sm text-gray-500 ">The sheer scale of the herds is visible from space.</p>
              </div>
            </Card>
            <Card className="bg-white p-8 border-none shadow-2xl flex items-start gap-5">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Cross-Border</h3>
                <p className="text-sm text-gray-500 ">A seamless ecosystem between Tanzania and Kenya.</p>
              </div>
            </Card>
            <Card className="bg-white p-8 border-none shadow-2xl flex items-start gap-5">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <Camera size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Action-Packed</h3>
                <p className="text-sm text-gray-500 ">Predator hunts and dramatic river crossings daily.</p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- MIGRATION CALENDAR: TIMELINE LAYOUT --- */}
      <section id="calendar" className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">The Migration Cycle</h2>
            <p className="text-gray-500">The herds are always moving. Here is where to find them and what to expect throughout the year.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { 
                months: "January - March", 
                title: "The Calving Season", 
                loc: "Southern Serengeti (Ndutu)", 
                desc: "8,000 calves born daily. Predators are at their most active. Expect short-grass plains carpeted in animals.",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              },
              { 
                months: "April - June", 
                title: "The Trek North", 
                loc: "Central & Western Corridor", 
                desc: "The 'rut' (mating) begins. Herds move in long columns toward the Grumeti River as the plains dry out.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              { 
                months: "July - October", 
                title: "River Crossings (Peak)", 
                loc: "Northern Serengeti & Masai Mara", 
                desc: "The main event. Massive herds plunge across the Mara River, braving crocodiles and steep banks.",
                color: "text-amber-600",
                bg: "bg-amber-50",
                isPeak: true
              },
              { 
                months: "November - December", 
                title: "The Return South", 
                loc: "Eastern Serengeti", 
                desc: "Short rains trigger the return to the southern plains. Lush landscapes and dramatic storm photography.",
                color: "text-gray-600",
                bg: "bg-gray-200/50"
              }
            ].map((phase, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 p-8 rounded-[2rem] border transition-all hover:shadow-lg ${phase.isPeak ? 'bg-white border-amber-200 shadow-md ring-1 ring-amber-100' : 'bg-transparent border-gray-200'}`}>
                <div className="md:w-1/3">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${phase.bg} ${phase.color}`}>
                    <Calendar size={14} />
                    <span className="text-xs font-bold uppercase tracking-widest">{phase.months}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={14} className="text-amber-500" />
                    {phase.loc}
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                  <p className="text-gray-600 leading-relaxed  mb-6">
                    {phase.desc}
                  </p>
                  <div className="flex gap-4">
                    {phase.isPeak && (
                      <span className="flex items-center gap-2 text-xs font-bold text-amber-600">
                        <Timer size={14} /> HIGH DEMAND: BOOK 12 MO AHEAD
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- EXPERT TIPS GRID --- */}
      <section className="py-24">
        <Container>
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold underline decoration-amber-500 underline-offset-8">Migration Field Notes</h2>
            <div className="hidden md:flex gap-2 text-amber-600">
              <Compass size={24} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The 5-Day Rule", text: "River crossings are unpredictable. Budget at least 4-5 nights in the North to increase your odds of a 'Mega-Crossing'.", icon: Timer },
              { title: "Mobile vs. Fixed", text: "Stay in mobile camps. They move with the herds, ensuring you aren't driving 4 hours to find the action.", icon: Tent },
              { title: "Underrated Calving", text: "February is arguably better than July. Fewer tourists, more predator action, and adorable newborns.", icon: Zap },
              { title: "Dust & Gear", text: "The Mara is dusty. Bring sealed camera bags and a telephoto lens (at least 400mm) for the best action shots.", icon: Camera },
              { title: "Beyond the Herd", text: "While 1.5M wildebeest are amazing, don't forget the 'Big Five' which are present in the ecosystem year-round.", icon: Check },
              { title: "Expert Guides", text: "A great guide knows the river crossing points and herd behavior. Don't settle for less on a migration safari.", icon: Info },
            ].map((tip, idx) => (
              <Card key={idx} className="p-8 border-gray-100 shadow-sm hover:border-amber-200 transition-colors">
                <tip.icon className="text-amber-600 mb-4" size={28} />
                <h4 className="font-bold text-lg mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed ">{tip.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <Waves size={400} />
        </div>
        <Container className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Don't Just Watch It on Screen.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto ">
            Our specialists have spent decades tracking the herds. We'll put you in the right camp, at the right time, with the best guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white border-none px-12">
              Customize My Migration Safari
            </Button>
            <Button size="lg" variant="outline" className=" text-gray-400 border-white/20 hover:bg-white/10">
              View Sample Itineraries
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

