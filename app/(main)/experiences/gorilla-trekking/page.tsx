import Image from 'next/image';
import Link from 'next/link';
import { 
  Mountain, 
  Check, 
  DollarSign, 
  Calendar, 
  Users, 
  Clock, 
  ShieldCheck, 
  Footprints, 
  Backpack, 
  Camera,
  ArrowRight
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Gorilla Trekking in Uganda & Rwanda - Mountain Gorilla Safaris | Barabara Voyagers',
  description: 'Experience mountain gorilla trekking in Uganda and Rwanda. Expert guides, gorilla permits, and unforgettable encounters with endangered mountain gorillas.',
};

export default function GorillaTrekkingPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1920" 
            alt="Silverback Gorilla" 
            fill 
            className="object-cover brightness-[0.45] scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-gray-900" />
        </div>
        
        <Container className="absolute bottom-20 left-8 z-10 text-white">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-2 bg-emerald-600/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-emerald-400/30">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-sm tracking-widest uppercase">Verified Conservation Partner</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              The Last{' '}
              <span className="text-emerald-400">Great Apes</span>
            </h1>
            <p className="text-xl mb-6 text-gray-200  max-w-3xl leading-relaxed">
              Venture into the ancient, mist-shrouded rainforests of East Africa for the world's most intimate wildlife encounter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white border-none px-10 h-12 ">
                Secure Your Permit
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm h-12">
                Download Trekking Guide
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* --- QUICK STATS GRID (THE BENTO BOX) --- */}
      <section className="relative z-20 -mt-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-white p-8 border-none shadow-xl flex flex-col items-center text-center">
              <Users className="text-emerald-600 mb-4" size={32} />
              <h4 className="font-bold text-lg">Small Groups</h4>
              <p className="text-sm text-gray-500 ">Max 8 people per group for minimal disturbance.</p>
            </Card>
            <Card className="bg-white p-8 border-none shadow-xl flex flex-col items-center text-center">
              <Clock className="text-emerald-600 mb-4" size={32} />
              <h4 className="font-bold text-lg">One Sacred Hour</h4>
              <p className="text-sm text-gray-500 ">Strictly limited time to protect gorilla health.</p>
            </Card>
            <Card className="bg-white p-8 border-none shadow-xl flex flex-col items-center text-center">
              <Mountain className="text-emerald-600 mb-4" size={32} />
              <h4 className="font-bold text-lg">High Altitude</h4>
              <p className="text-sm text-gray-500 ">Treks reach 2,000m – 3,500m above sea level.</p>
            </Card>
            <Card className="bg-white p-8 border-none shadow-xl flex flex-col items-center text-center">
              <Calendar className="text-emerald-600 mb-4" size={32} />
              <h4 className="font-bold text-lg">All Seasons</h4>
              <p className="text-sm text-gray-500 ">Available year-round, even in the "rainy" months.</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- THE EXPERIENCE --- */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">A Profound Connection <br/>With Our Closest Relatives</h2>
              <div className="space-y-6 text-lg text-gray-600  leading-relaxed">
                <p>
                  Deep within the Bwindi Impenetrable Forest or the volcanic slopes of the Virungas, time feels like it stops. There is no glass, no fences—just you and a family of mountain gorillas.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Check className="text-emerald-600" size={20} />
                    <span className="text-sm font-bold">Habituated Families</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-emerald-600" size={20} />
                    <span className="text-sm font-bold">Expert Rangers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-emerald-600" size={20} />
                    <span className="text-sm font-bold">Conservation Fees Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-emerald-600" size={20} />
                    <span className="text-sm font-bold">Optional Porter Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className=" relative rounded-xl h-full min-h-[500px] overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=800" 
                  alt="Gorilla Mother and Child" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-8 rounded-2xl hidden md:block max-w-xs">
                <p className="italic text-sm">"The moment you lock eyes with a Silverback, you realize you aren't just looking at an animal; you're looking at a soul."</p>
                <p className="mt-4 font-bold text-emerald-400">— David, Safari Expert</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- COMPARISON: THE TALE OF TWO JUNGLES --- */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Territory</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Both offer life-changing encounters, but the terrain and atmosphere differ significantly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-[3rem] overflow-hidden">
            {/* Uganda */}
            <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors">
              <div className="mb-6 flex justify-between items-start">
                <h3 className="text-3xl font-bold">Uganda</h3>
                <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold">$700 / Permit</span>
              </div>
              <p className="text-gray-400 mb-8 ">Bwindi Impenetrable Forest is ancient, dense, and feels like a true "Lost World" expedition.</p>
              <ul className="space-y-4 mb-10">
                {[
                  "More 'wild' and rugged terrain",
                  "Over 50% of world's gorilla population",
                  "Combine with Kibale Chimps",
                  "Authentic community encounters"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black">Explore Uganda Itineraries</Button>
            </div>

            {/* Rwanda */}
            <div className="p-12 hover:bg-white/[0.02] transition-colors">
              <div className="mb-6 flex justify-between items-start">
                <h3 className="text-3xl font-bold">Rwanda</h3>
                <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold">$1,500 / Permit</span>
              </div>
              <p className="text-gray-400 mb-8 ">Volcanoes National Park offers dramatic bamboo forests and high-end luxury lodges.</p>
              <ul className="space-y-4 mb-10">
                {[
                  "Easier, shorter treks on average",
                  "World-class luxury infrastructure",
                  "Only 2.5 hours from international airport",
                  "Visit Dian Fossey's final resting place"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black">Explore Rwanda Itineraries</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* --- THE TREK TIMELINE --- */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">The Anatomy of the Trek</h2>
            <div className="relative space-y-12">
              <div className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-gray-200 hidden md:block" />
              
              {[
                { time: "07:00 AM", title: "The Briefing", icon: Users, desc: "Sip tea at the park HQ while rangers explain the 'Gorilla Rules' and assign your group." },
                { time: "08:30 AM", title: "The Ascent", icon: Footprints, desc: "Enter the forest. You’ll be following trackers who moved into the bush at dawn." },
                { time: "Variable", title: "The Encounter", icon: Camera, desc: "Drop your bags, grab your camera. You have 60 minutes of pure, quiet observation." },
                { time: "02:00 PM", title: "The Return", icon: Backpack, desc: "A celebratory hike back to receive your trekking certificate and a well-earned lunch." }
              ].map((step, idx) => (
                <div key={idx} className="relative pl-0 md:pl-16 group">
                  <div className="absolute left-0 top-1 hidden md:flex h-12 w-12 rounded-full bg-gray-100 border-2 border-white shadow-sm items-center justify-center text-emerald-600 z-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    <step.icon size={20} />
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-emerald-600 font-bold text-sm tracking-widest">{step.time}</span>
                    <h4 className="text-xl font-bold mt-1 mb-2">{step.title}</h4>
                    <p className="text-gray-500  leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- PACKING LIST VISUAL --- */}
      <section className="py-24 bg-gray-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Trekking Essentials</h2>
            <p className="text-gray-500 mt-2">Don't leave without these in your bag.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Gaiters", icon: "👢" },
              { name: "Gardening Gloves", icon: "🧤" },
              { name: "Waterproofs", icon: "🧥" },
              { name: "Hiking Poles", icon: "🦯" },
              { name: "Long Sleeves", icon: "👕" },
              { name: "Ankle Support", icon: "🥾" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
           <Mountain size={600} />
        </div>
        <Container className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Permits are Limited.</h2>
          <p className="text-xl text-emerald-200/80 mb-10 max-w-2xl mx-auto ">
            Only 8 permits are issued per gorilla family per day. We recommend booking at least 6 months in advance to secure your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold border-none px-12">
              Talk to a Gorilla Expert
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              View Sample Itineraries
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

