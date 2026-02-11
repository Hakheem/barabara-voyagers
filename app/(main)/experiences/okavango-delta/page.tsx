import Image from 'next/image';
import Link from 'next/link';
import { 
  Waves, 
  Check, 
  Calendar, 
  Navigation, 
  Bird, 
  Anchor, 
  Wind, 
  Sparkles, 
  ShieldCheck, 
  Binoculars, 
  Briefcase, 
  MapPin,
  Compass
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: "Okavango Delta Safari - Botswana's Water Wilderness | Barabara Voyagers",
  description: "Experience the Okavango Delta - Africa's largest inland delta. Mokoro canoe safaris, water-based game viewing, and luxury remote camps in Botswana.",
};

export default function OkavangoDeltaPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920" 
            alt="Okavango Delta Aerial View" 
            fill 
            className="object-cover brightness-[0.45] scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />
        </div>
        <Container className="absolute bottom-16 left-8 z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-teal-400/30">
              <Waves className="h-4 w-4" />
              <span className="text-xs  tracking-widest uppercase text-teal-50">The Liquid Heart of the Kalahari</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight italic ">
              Okavango{' '}
              <span className="text-teal-300 italic">Delta</span>
            </h1>
            <p className="text-xl  mb-8 text-teal-50/90 leading-relaxed  max-w-2xl">
              A blue-green miracle in the desert. Explore 15,000 square kilometers of pristine waterways by traditional mokoro.
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white border-none " asChild>
              <Link href="#details">Explore the Wilderness</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-10 border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-3xl group">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Navigation size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mokoro Safaris</h3>
              <p className="text-gray-500 text-sm leading-relaxed ">Glide silently in traditional dugout canoes. The ultimate intimate wildlife encounter.</p>
            </Card>

            <Card className="p-10 border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-3xl group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Bird size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Rare Species</h3>
              <p className="text-gray-500 text-sm leading-relaxed ">Track the elusive Sitatunga antelope and see Red Lechwe splashing through floodplains.</p>
            </Card>

            <Card className="p-10 border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-3xl group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Luxury Unplugged</h3>
              <p className="text-gray-500 text-sm leading-relaxed ">Small, world-class camps on private islands offering total exclusivity and peace.</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- EXPERIENCE DETAIL: THE WATERWAYS --- */}
      <section id="details" className="py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">The Delta Experience</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Safari in the Okavango is defined by the flow of water. Choose your adventure based on the terrain.</p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  title: "Mokoro & Island Walks", 
                  desc: "The quintessential experience. Use the silence of the dugout canoe to approach wildlife at eye level, then step onto palm islands to track big game on foot.",
                  icon: Anchor 
                },
                { 
                  title: "4x4 Land Safaris", 
                  desc: "Ideal for the dry islands and concessions. This is where you'll find the Delta's famous predators: lions, leopards, and the endangered African wild dog.",
                  icon: Compass 
                },
                { 
                  title: "Aerial Transfers", 
                  desc: "The scale of the Delta is best seen from above. Your transfer between camps in a light aircraft is a scenic safari in its own right.",
                  icon: Wind 
                }
              ].map((exp, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-center p-8 border border-gray-100 rounded-[2.5rem] hover:bg-gray-50/50 transition-colors">
                  <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <exp.icon className="text-teal-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>
                    <p className="text-gray-600  leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- SEASONAL GUIDE: THE FLOOD --- */}
      <section className="py-24 bg-teal-950 text-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">When the Water Arrives</h2>
              <p className="text-teal-200/70 ">The Okavango is counter-intuitive. Rains in Angola take months to reach the Delta, meaning the flood peaks during Botswana's dry season.</p>
            </div>
            <div className="hidden md:block">
              <Waves className="text-teal-500 opacity-20" size={120} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-teal-900/50 border-teal-800 p-8 text-white">
              <div className="flex items-center gap-3 text-teal-400 mb-4">
                <Calendar size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">May - Sept</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">The High Water</h3>
              <p className="text-sm text-teal-100/60  leading-relaxed mb-6">
                The peak Delta experience. Water is at its highest, allowing mokoro access to remote lagoons. Lush, green, and visually stunning.
              </p>
              <div className="bg-teal-800/50 p-4 rounded-xl text-xs  text-teal-200 border border-teal-700">
                <strong>Best For:</strong> Mokoro safaris, photography, and birding.
              </div>
            </Card>

            <Card className="bg-teal-900/50 border-teal-800 p-8 text-white border-t-4 border-t-teal-400">
              <div className="flex items-center gap-3 text-teal-400 mb-4">
                <Calendar size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">July - Oct</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Peak Game Viewing</h3>
              <p className="text-sm text-teal-100/60  leading-relaxed mb-6">
                The surrounding Kalahari is parched. Animals flock to the Delta's permanent water. Massive herds and intense predator action.
              </p>
              <div className="bg-teal-800/50 p-4 rounded-xl text-xs  text-teal-200 border border-teal-700">
                <strong>Best For:</strong> Big cats, elephants, and walking safaris.
              </div>
            </Card>

            <Card className="bg-teal-900/50 border-teal-800 p-8 text-white">
              <div className="flex items-center gap-3 text-teal-400 mb-4">
                <Calendar size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">Nov - April</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">The Green Season</h3>
              <p className="text-sm text-teal-100/60  leading-relaxed mb-6">
                Local rains transform the landscape. Lower prices and newborn animals make this a favorite for seasoned safari-goers.
              </p>
              <div className="bg-teal-800/50 p-4 rounded-xl text-xs  text-teal-200 border border-teal-700">
                <strong>Best For:</strong> Value, birding, and newborn wildlife.
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- TIPS SECTION --- */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Delta Field Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'The 12-Month Rule', text: 'Okavango camps are small (some only 6 tents). Book a year ahead for peak flood months.', icon: ShieldCheck },
                { title: 'Luggage Limits', text: 'Light aircraft have a strict 20kg limit in soft-sided bags. Laundry is included at most camps.', icon: Briefcase },
                { title: 'Glass & Optics', text: 'Bring the best binoculars you can afford. The Delta is about the small details and far-off banks.', icon: Binoculars },
                { title: 'Mix Your Terrain', text: 'Combine a "Water Camp" with a "Land Camp" to get the full spectrum of Botswana wildlife.', icon: MapPin },
              ].map((tip, i) => (
                <Card key={i} className="p-6 border-gray-100 shadow-sm flex gap-4">
                  <tip.icon className="text-teal-600 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-sm mb-1">{tip.title}</h4>
                    <p className="text-xs text-gray-500  leading-relaxed">{tip.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <Waves size={800} />
        </div>
        <Container className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 italic font-">Deep in the Delta...</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto  text-teal-50">
            Let our specialists find the perfect camp for your season and style. Whether it's a romantic mokoro cruise or a high-octane predator trek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 border-none px-12">
              Plan My Delta Safari
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              View Botswana Itineraries
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

