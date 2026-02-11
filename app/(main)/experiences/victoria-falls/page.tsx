import Image from 'next/image';
import Link from 'next/link';
import { 
  Droplets, 
  Check, 
  Calendar, 
  Info, 
  Map, 
  Camera, 
  Anchor, 
  Wind, 
  Sun,
  Navigation,
  Waves
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Victoria Falls Safari - Mosi-oa-Tunya | Barabara Voyagers',
  description: 'The Smoke That Thunders. Compare Zimbabwe vs Zambia sides, check water levels, and book the ultimate adrenaline safari.',
};

export default function VictoriaFallsPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920" 
            alt="Victoria Falls Aerial View" 
            fill 
            className="object-cover brightness-[0.65]" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/40" />
        </div>
        
        <Container className="absolute bottom-16 left-8 z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/80 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-blue-400/30">
              <Droplets className="h-4 w-4 text-blue-100" />
              <span className="text-xs font-medium tracking-wide uppercase text-blue-50">Natural Wonder of the World</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight ">
              The Smoke{' '}
              <span className="text-blue-300">That Thunders</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-lato max-w-2xl leading-relaxed">
              Mosi-oa-Tunya. The world's largest sheet of falling water. A place where the earth opens up and the Zambezi River creates magic.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none " asChild>
                <Link href="#zim-vs-zam">Zimbabwe or Zambia?</Link>
              </Button>
              <Button variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm">
                Check Water Levels
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* --- STATS & INTRO --- */}
      <section className="relative z-20 -mt-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/95 backdrop-blur-sm p-8 border-none shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  <Waves size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Width</p>
                  <h3 className="text-2xl font-bold text-gray-900">1,708 Meters</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm">A mile of water curtain. At peak flow, 500 million liters drop every minute.</p>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm p-8 border-none shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  <Anchor size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Height</p>
                  <h3 className="text-2xl font-bold text-gray-900">108 Meters</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Twice the height of Niagara Falls. The spray column can be seen from 30km away.</p>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm p-8 border-none shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  <Map size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
                  <h3 className="text-2xl font-bold text-gray-900">Two Countries</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Straddles the border of Zimbabwe and Zambia. One visa (KAZA) covers both.</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- ZIMBABWE VS ZAMBIA --- */}
      <section id="zim-vs-zam" className="py-24">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6  text-gray-900">Which Side Should You Choose?</h2>
            <p className="text-lg text-gray-600">
              The river creates the border. Zimbabwe offers the classic panoramic views, while Zambia offers intimate, heart-pounding proximity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center font-black text-gray-300 shadow-lg z-10 hidden lg:flex">
              VS
            </div>

            {/* ZIMBABWE CARD */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" 
                  alt="Zimbabwe View" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900">
                  The Classic View
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-3xl font-bold text-white">Zimbabwe Side</h3>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 italic">"I want to see the full curtain of falling water and have the classic postcard photo."</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-green-500 flex-shrink-0" size={18} /> 
                    <span>**75% of the Falls** are viewed from this side</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-green-500 flex-shrink-0" size={18} /> 
                    <span>Flows year-round (even in dry season)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-green-500 flex-shrink-0" size={18} /> 
                    <span>Historic Victoria Falls Hotel & town center</span>
                  </li>
                </ul>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <span className="text-xs font-bold text-gray-400 uppercase">Best For</span>
                  <p className="font-semibold text-gray-700">Photography, Walking Tours, Year-round reliability</p>
                </div>
              </div>
            </div>

            {/* ZAMBIA CARD */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1526402978125-f7d6a5e18a22?w=800" 
                  alt="Zambia View" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900">
                  The Wild Side
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-3xl font-bold text-white">Zambia Side</h3>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 italic">"I want to get terrifyingly close to the water and swim on the edge."</p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-green-500 flex-shrink-0" size={18} /> 
                    <span>**Devil's Pool** access (Seasonal)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-green-500 flex-shrink-0" size={18} /> 
                    <span>Knife Edge Bridge - completely soaked experience</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <Check className="text-green-500 flex-shrink-0" size={18} /> 
                    <span>Closer to the water level (Boiling Pot hike)</span>
                  </li>
                </ul>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <span className="text-xs font-bold text-gray-400 uppercase">Best For</span>
                  <p className="font-semibold text-gray-700">Adrenaline junkies, Devil's Pool, Unique angles</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <div className="inline-block bg-blue-50 border border-blue-100 px-6 py-3 rounded-full text-sm text-blue-800 font-medium">
               💡 <span className="font-bold">Pro Tip:</span> Get the KAZA Uni-Visa ($50) and visit both sides in one day.
             </div>
          </div>
        </Container>
      </section>

      {/* --- WATER LEVELS GUIDE --- */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
           <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6 ">The Water Level Dictates The Experience</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Unlike a theme park, this is a natural system. The Zambezi rises and falls dramatically. Knowing when to go is crucial.
              </p>
            </div>
            <div className="flex-1 flex gap-4">
               <div className="flex-1 p-4 bg-blue-900/40 rounded-xl border border-blue-500/30 text-center">
                 <div className="text-3xl font-bold text-blue-400 mb-1">High</div>
                 <div className="text-xs text-blue-200 uppercase">Feb - May</div>
               </div>
               <div className="flex-1 p-4 bg-orange-900/40 rounded-xl border border-orange-500/30 text-center">
                 <div className="text-3xl font-bold text-orange-400 mb-1">Low</div>
                 <div className="text-xs text-orange-200 uppercase">Aug - Dec</div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* HIGH WATER */}
             <div className="bg-blue-950/50 p-8 rounded-3xl border border-blue-900 relative overflow-hidden group hover:border-blue-500 transition-colors">
               <div className="absolute top-0 right-0 p-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-4">
                   <Droplets className="text-blue-400" />
                   <h3 className="text-2xl font-bold text-white">High Water (Feb - Jul)</h3>
                 </div>
                 <p className="text-gray-300 mb-6">
                   The "Smoke that Thunders" lives up to its name. The spray is so intense it can obscure views, but the power is humbling. You will get soaked to the skin.
                 </p>
                 <div className="space-y-3">
                   <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                     <span className="text-gray-400">View Quality</span>
                     <span className="text-white font-medium">Dramatic but misty</span>
                   </div>
                   <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                     <span className="text-gray-400">Rafting</span>
                     <span className="text-red-400 font-medium">Often Closed (Too dangerous)</span>
                   </div>
                   <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                     <span className="text-gray-400">Devil's Pool</span>
                     <span className="text-red-400 font-medium">Closed</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* LOW WATER */}
             <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 relative overflow-hidden group hover:border-orange-500 transition-colors">
               <div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-4">
                   <Sun className="text-orange-400" />
                   <h3 className="text-2xl font-bold text-white">Low Water (Aug - Jan)</h3>
                 </div>
                 <p className="text-gray-300 mb-6">
                   The curtain breaks into separate rivulets. The geological rock formations are visible. The Zambian side may dry up almost completely.
                 </p>
                 <div className="space-y-3">
                   <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                     <span className="text-gray-400">View Quality</span>
                     <span className="text-white font-medium">Clear visibility of rock face</span>
                   </div>
                   <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                     <span className="text-gray-400">Rafting</span>
                     <span className="text-green-400 font-medium">World Class (Open)</span>
                   </div>
                   <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                     <span className="text-gray-400">Devil's Pool</span>
                     <span className="text-green-400 font-medium">Open (Aug - Dec)</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </Container>
      </section>

      {/* --- ACTIVITIES GRID --- */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 ">Beyond the Viewpoints</h2>
            <p className="text-gray-500">Victoria Falls is the "Adrenaline Capital of Africa."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Navigation, 
                title: "Rafting", 
                desc: "Grade 5 rapids in the Batoka Gorge. Wildest one-day rafting in the world.", 
                tag: "Adrenaline" 
              },
              { 
                icon: Wind, 
                title: "Helicopter", 
                desc: "The 'Flight of Angels'. The only way to see the sheer scale of the fissure.", 
                tag: "Essential" 
              },
              { 
                icon: Anchor, 
                title: "Sunset Cruise", 
                desc: "Sip gin & tonics on the upper Zambezi while watching elephants cross the river.", 
                tag: "Relaxing" 
              },
              { 
                icon: Camera, 
                title: "Bungee", 
                desc: "111 meters of freefall off the historic bridge. Not for the faint of heart.", 
                tag: "Adrenaline" 
              },
            ].map((activity, i) => (
              <Card key={i} className="p-6 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-50 rounded-lg text-gray-800">
                    <activity.icon size={20} />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide ${
                    activity.tag === 'Adrenaline' ? 'bg-red-50 text-red-600' : 
                    activity.tag === 'Relaxing' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {activity.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        {/* Abstract wave patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="wave-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q10 10 20 20 T40 20" fill="none" stroke="currentColor" strokeWidth="2"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>

        <Container className="text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">Add the Falls to Your Safari</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-lato text-blue-100">
            Victoria Falls is the perfect ending to a Botswana or Zimbabwe safari. We handle the transfers, the visas, and the bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 border-none px-12">
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
              View Zimbabwe Safaris
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

