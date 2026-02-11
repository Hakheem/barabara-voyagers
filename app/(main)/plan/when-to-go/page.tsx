import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Sun, 
  Cloud, 
  Droplets, 
  Thermometer, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Safari Seasons Guide 2026 - Best Time to Visit Africa | Barabara Voyagers',
  description: 'A masterclass in safari timing. From the Great Migration river crossings to the Emerald Season newborns, find your perfect window for Africa.',
};

export default function WhenToGoPage() {
  return (
    <div className="bg-white">
    

      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 italic">Choose Your Landscape</h2>
            <p className="text-gray-500 max-w-2xl mx-auto ">There is no "bad" time to visit Africa—only different experiences. Here is the fundamental trade-off.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Dry Season */}
            <div className="bg-stone-100 p-10 md:p-16 relative">
              <Sun className="absolute top-10 right-10 text-amber-600/20 w-32 h-32" />
              <div className="relative z-10">
                <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Peak Season</span>
                <h3 className="text-3xl font-bold mt-2 mb-6">The Golden Dry Season</h3>
                <p className="text-gray-600 mb-8  text-lg">June – October</p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 items-start ">
                    <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Pinpoint Visibility:</strong> Thinning bush and dry grass mean animals have nowhere to hide.</span>
                  </li>
                  <li className="flex gap-3 items-start ">
                    <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Waterhole Action:</strong> Wildlife converges on permanent water sources, creating high-density viewing.</span>
                  </li>
                  <li className="flex gap-3 items-start ">
                    <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Cool Skies:</strong> Clear blue days and chilly nights. Perfect for photography and open-vehicle drives.</span>
                  </li>
                </ul>
                <div className="p-4 bg-amber-600/10 border-l-4 border-amber-600 text-sm italic">
                  <strong>The Expert Verdict:</strong> Best for first-timers and those wanting to see the Big Five in a single morning.
                </div>
              </div>
            </div>

            {/* Wet Season */}
            <div className="bg-emerald-900 text-white p-10 md:p-16 relative">
              <Droplets className="absolute top-10 right-10 text-emerald-400/10 w-32 h-32" />
              <div className="relative z-10">
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Emerald Season</span>
                <h3 className="text-3xl font-bold mt-2 mb-6">The Vibrant Green Season</h3>
                <p className="text-emerald-200 mb-8  text-lg">November – May</p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 items-start ">
                    <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                    <span><strong>The Birthing Season:</strong> Witness the "baby boom" as thousands of newborns take their first steps.</span>
                  </li>
                  <li className="flex gap-3 items-start ">
                    <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Photographer’s Dream:</strong> Dramatic storm clouds, dust-free air, and lush, saturated green backgrounds.</span>
                  </li>
                  <li className="flex gap-3 items-start ">
                    <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Exclusive Value:</strong> 20-40% lower rates and virtually no other vehicles at sightings.</span>
                  </li>
                </ul>
                <div className="p-4 bg-white/10 border-l-4 border-emerald-400 text-sm italic">
                  <strong>The Expert Verdict:</strong> Best for repeat travelers, bird watchers, and those seeking solitude.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- MIGRATION JOURNEY TIMELINE --- */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">The Great Migration Roadmap</h2>
              <p className="text-gray-500 ">The 1.5 million wildebeest are always moving. Here is where to catch them.</p>
            </div>
            <div className="flex gap-2 text-sm font-bold uppercase tracking-tighter">
                <span className="text-amber-600">Serengeti</span>
                <ArrowRight size={16} />
                <span className="text-amber-600">Masai Mara</span>
            </div>
          </div>

          <div className="relative border-l-2 border-stone-200 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-8">
            {[
              { months: 'Jan - Mar', loc: 'Southern Serengeti', desc: 'Calving Season. The herds settle on the short-grass plains to give birth. High predator action.', icon: <CheckCircle2 className="text-amber-600"/> },
              { months: 'Apr - Jun', loc: 'Central & Western', desc: 'The herds move North. Crossing the Grumeti River. Dramatic but rainy.', icon: <Cloud className="text-blue-500"/> },
              { months: 'Jul - Oct', loc: 'Northern / Masai Mara', desc: 'The Crossing. Dramatic Mara River crossings. This is peak migration viewing.', icon: <MapPin className="text-red-600"/> },
              { months: 'Nov - Dec', loc: 'The Return', desc: 'The short rains trigger a move back south to the Serengeti plains.', icon: <Clock className="text-stone-400"/> },
            ].map((item, i) => (
              <div key={i} className="mb-12 md:mb-0 relative pl-10 md:pl-0">
                <div className="hidden md:block absolute -top-4 left-0 w-full h-1 bg-stone-200" />
                <div className="absolute top-0 left-[-9px] md:left-0 md:relative w-4 h-4 rounded-full bg-amber-600 mb-4" />
                <span className="block text-xl font-bold mb-1">{item.months}</span>
                <span className="block text-amber-600 font-bold text-sm mb-3 uppercase">{item.loc}</span>
                <p className="text-gray-600 text-sm  leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <h2 className="text-4xl font-bold mb-16 text-center">Regional Forecasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Uganda/Rwanda */}
            <div className="group cursor-default">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <Image src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800" alt="Gorilla" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">Primate Trekking</h3>
              </div>
              <div className="space-y-4 ">
                <p className="text-sm"><strong className="text-amber-600">Peak:</strong> Jun - Sep & Dec - Feb. Dry trails make steep forest climbs much easier.</p>
                <p className="text-sm"><strong className="text-emerald-600">Rainy:</strong> Mar - May. Harder trekking, but Gorillas often descend to lower altitudes for bamboo shoots.</p>
              </div>
            </div>

            {/* Botswana */}
            <div className="group cursor-default">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800" alt="Okavango" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">Okavango Delta</h3>
              </div>
              <div className="space-y-4 ">
                <p className="text-sm"><strong className="text-amber-600">Peak:</strong> May - Aug. Counter-intuitively, the Delta floods during the dry season, creating the best water-safari conditions.</p>
                <p className="text-sm"><strong className="text-emerald-600">Summer:</strong> Nov - Mar. Incredible birding and the Zebra migration in the Makgadikgadi.</p>
              </div>
            </div>

            {/* Victoria Falls */}
            <div className="group cursor-default">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <Image src="https://images.unsplash.com/photo-1603204006132-73602f37e19d?w=800" alt="Vic Falls" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">Victoria Falls</h3>
              </div>
              <div className="space-y-4 ">
                <p className="text-sm"><strong className="text-amber-600">Peak Flow:</strong> Mar - May. The "Smoke that Thunders" is at its most powerful after the rains.</p>
                <p className="text-sm"><strong className="text-emerald-600">Devil's Pool:</strong> Aug - Jan. Low water levels allow for swimming at the edge of the falls.</p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section className="py-20 bg-stone-900 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Climate Cheat Sheet</h2>
              <p className="text-stone-400  mb-8">Safari weather is surprisingly diverse. From freezing dawn drives in the Ngorongoro Crater to humid afternoons in the Selous.</p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-amber-500 mb-2">
                    <Thermometer size={20} />
                    <span className="font-bold">Avg. Highs</span>
                  </div>
                  <p className="text-2xl font-bold">25°C - 32°C</p>
                  <p className="text-stone-500 text-sm italic">(77°F - 90°F)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Thermometer size={20} />
                    <span className="font-bold">Avg. Lows</span>
                  </div>
                  <p className="text-2xl font-bold">10°C - 15°C</p>
                  <p className="text-stone-500 text-sm italic">(50°F - 59°F)</p>
                </div>
              </div>
            </div>
            <Card className="bg-stone-800 border-none p-8 text-stone-300 ">
              <h4 className="text-white font-bold mb-4">Packer's Note:</h4>
              <p className="mb-4">"Regardless of the month, early morning game drives are cold. You will be in an open vehicle moving at speed before the sun is up. <strong>Always pack a warm windbreaker and a scarf</strong>, even if your midday forecast is 30°C."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold italic">B</div>
                <div>
                    <p className="text-white text-sm font-bold">Barabara Expert Team</p>
                    <p className="text-xs">On-the-ground since 2012</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-amber-600 text-white text-center">
        <Container>
            <h2 className="text-5xl font-bold mb-6">Have a specific date in mind?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto  opacity-90">
              Tell us when you can travel, and we'll tell you exactly where the wildlife is peaking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-stone-100 font-bold px-12">Plan My Dates</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-12">View Itineraries</Button>
            </div>
        </Container>
      </section>
    </div>
  );
}

