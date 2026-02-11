import Image from 'next/image';
import Link from 'next/link';
import { 
  Mountain, 
  Check, 
  ArrowUpRight, 
  Wind, 
  ThermometerSnowflake, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Backpack, 
  Map, 
  Award,
  Footprints
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: "Mount Kilimanjaro Climbing - Africa's Highest Peak | Barabara Voyagers",
  description: "Climb Mount Kilimanjaro via Lemosho or Machame routes. Expert guides, high success rates, and proper acclimatization for Africa's highest summit.",
};

export default function KilimanjaroPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1609198092357-8e7a652517c9?w=1920" 
            alt="Mount Kilimanjaro Summit" 
            fill 
            className="object-cover brightness-[0.4] scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900" />
        </div>
        
        <Container className="absolute md:bottom-16 md:left-8 z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-blue-400/30">
              <Award className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">The Roof of Africa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Summit{' '} 
              <span className="text-blue-400">Kilimanjaro</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200  max-w-2xl leading-relaxed">
              5,895 meters. No technical climbing. Just the grit to reach the highest free-standing mountain in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none " asChild>
                <Link href="/contact">Plan Your Expedition</Link>
              </Button>
              <Button variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm h-12">
                Compare Routes
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* --- STATS GRID --- */}
      <section className="relative z-20 -mt-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "Elevation", value: "5,895m", icon: ArrowUpRight, sub: "19,341 Feet" },
              { label: "Success Rate", value: "95%+", icon: ShieldCheck, sub: "On 8-Day Routes" },
              { label: "Climates", value: "5 Zones", icon: ThermometerSnowflake, sub: "Rainforest to Arctic" },
              { label: "Avg. Duration", value: "7-8 Days", icon: Clock, sub: "Optimal Acclimatization" },
            ].map((stat, i) => (
              <Card key={i} className="bg-white p-8 border-none shadow-xl text-center md:text-left">
                <stat.icon className="text-blue-600 mb-4 mx-auto md:mx-0" size={24} />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-500 ">{stat.sub}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* --- THE VERTICAL JOURNEY --- */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">One Mountain, <br/>Five Worlds.</h2>
              <p className="text-lg text-gray-600  leading-relaxed mb-8">
                Climbing Kilimanjaro is like hiking from the Equator to the North Pole in a week. You'll pass through lush rainforests, heathlands, alpine deserts, and finally, the glacial arctic zone at the summit.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Expert Lead Guides", desc: "WFR-certified guides with 100+ summits each.", icon: Award },
                  { title: "Oxygen & Safety", desc: "Pulse oximeters and emergency oxygen on every trek.", icon: ShieldCheck },
                  { title: "Gourmet Trekking", desc: "Fresh, high-energy meals prepared daily in camp.", icon: Backpack },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 text-blue-600"><item.icon size={20} /></div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-gray-500 text-sm ">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1589182397057-b82b7691bb74?w=800" 
                alt="Climbers on Kilimanjaro" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-3 text-blue-600 mb-1">
                  <TrendingUp size={18} />
                  <span className="font-bold text-sm">PRO TIP</span>
                </div>
                <p className="text-gray-700 text-sm ">
                  "Pole Pole" (Slowly, Slowly). The secret to the summit isn't speed, but consistent, slow movement to allow your body to adapt.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- ROUTE SELECTOR --- */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We specialize in the longer, more scenic routes that offer the best success rates.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 p-8 text-white">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Lemosho Route</h3>
                <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tighter">Recommended</span>
              </div>
              <p className="text-gray-400 text-sm mb-8  leading-relaxed">
                The most beautiful route. Approaches from the west, crossing the Shira Plateau. Excellent for acclimatization and solitude.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm"><Clock size={16} className="text-blue-400" /> 7 or 8 Days</div>
                <div className="flex items-center gap-3 text-sm"><Map size={16} className="text-blue-400" /> High Scenic Value</div>
                <div className="flex items-center gap-3 text-sm"><Footprints size={16} className="text-blue-400" /> 95% Success Rate</div>
              </div>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-200">View Itinerary</Button>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Machame Route</h3>
              <p className="text-gray-400 text-sm mb-8  leading-relaxed">
                Known as the "Whiskey Route." Steeper and more challenging than Lemosho, but incredibly rewarding with iconic views.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm"><Clock size={16} className="text-blue-400" /> 6 or 7 Days</div>
                <div className="flex items-center gap-3 text-sm"><Map size={16} className="text-blue-400" /> High Challenge</div>
                <div className="flex items-center gap-3 text-sm"><Footprints size={16} className="text-blue-400" /> 85% Success Rate</div>
              </div>
              <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">View Itinerary</Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-blue-600 text-white">
        <Container className="text-center">
          <Wind className="mx-auto mb-6 opacity-40" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Conquer the Roof?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto  opacity-90">
            Spaces for our 2026/27 expeditions are filling fast. Join our expert team for the climb of a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 border-none px-12">
              Get Expert Advice
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10">
              Download Gear Guide
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

