import Image from 'next/image';
import Link from 'next/link';
import { 
  Compass, 
  Check, 
  AlertCircle, 
  Clock, 
  Camera, 
  Coffee, 
  Sun, 
  Moon, 
  Wind,
  Shirt
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'First-Time Safari Guide - Your Essential African Handbook | Barabara Voyagers',
  description: 'The ultimate guide for first-time safari travelers. From the 5 AM wake-up call to the "Big Five" reality check—know before you go.',
};

export default function FirstTimeSafariPage() {
  return (
    <div className="bg-white overflow-x-hidden"> {/* Added overflow-x-hidden here as a safety net */}
      
      {/* --- THE ROUTINE --- */}
      <section className="py-24 overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">The Safari Rhythm</h2>
            <p className="text-center text-stone-500 mb-16 font-lato">Wildlife doesn't follow a clock, but safari camps certainly do.</p>
            
            <div className="relative">
              {/* FIXED CENTER LINE: Stands alone so it doesn't push content */}
              <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-stone-100" />

              <div className="space-y-16">
                {/* Timeline Item 1 - Left on Desktop */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex w-full md:w-1/2 md:pr-12 md:justify-end">
                    <div className="ml-10 md:ml-0 md:text-right">
                      <div className="flex items-center gap-3 mb-2 md:justify-end">
                        <Clock className="w-5 h-5 text-amber-600" />
                        <span className="font-bold text-amber-600">05:30 — The Wake Up</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-stone-900">Tea & Toast</h3>
                      <p className="text-stone-600 font-lato text-sm leading-relaxed">The famous "knock-knock" at your tent. Coffee is delivered as the bush wakes up. It’s surprisingly chilly—grab your fleece.</p>
                    </div>
                  </div>
                  {/* The Dot */}
                  <div className="absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white shadow-sm" />
                  </div>
                  <div className="hidden md:block w-1/2" /> {/* Spacer */}
                </div>

                {/* Timeline Item 2 - Right on Desktop */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="hidden md:block w-1/2" /> {/* Spacer */}
                  {/* The Dot */}
                  <div className="absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white shadow-sm" />
                  </div>
                  <div className="flex w-full md:w-1/2 md:pl-12">
                    <div className="ml-10 md:ml-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Sun className="w-5 h-5 text-amber-600" />
                        <span className="font-bold text-amber-600">06:30 — Dawn Drive</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-stone-900">Golden Hour</h3>
                      <p className="text-stone-600 font-lato text-sm leading-relaxed">Predators are often finishing their night hunts. The light is a photographer’s dream. Mid-way, you’ll stop for "Bush Coffee" and biscuits.</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 - Left on Desktop */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex w-full md:w-1/2 md:pr-12 md:justify-end">
                    <div className="ml-10 md:ml-0 md:text-right">
                      <div className="flex items-center gap-3 mb-2 md:justify-end">
                        <Coffee className="w-5 h-5 text-amber-600" />
                        <span className="font-bold text-amber-600">11:00 — Siesta</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-stone-900">The Midday Lull</h3>
                      <p className="text-stone-600 font-lato text-sm leading-relaxed">A massive brunch followed by downtime. The animals are sleeping in the shade, and you should be too—or enjoy the pool.</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white shadow-sm" />
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>

                {/* Timeline Item 4 - Right on Desktop */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="hidden md:block w-1/2" />
                  <div className="absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white shadow-sm" />
                  </div>
                  <div className="flex w-full md:w-1/2 md:pl-12">
                    <div className="ml-10 md:ml-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Moon className="w-5 h-5 text-amber-600" />
                        <span className="font-bold text-amber-600">16:00 — Sundowners</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-stone-900">Evening Magic</h3>
                      <p className="text-stone-600 font-lato text-sm leading-relaxed">Afternoon tea, then back into the wild. As the sun sets, your guide will find a scenic spot for a G&T before a night drive back to camp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- REALITY CHECK --- */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What You'll Actually See</h2>
            <p className="text-stone-500 font-lato">Forget the "Zoo" mentality. This is raw nature.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
            <Card className="p-8 border-none shadow-sm overflow-hidden relative bg-white">
              <div className="absolute top-0 right-0 p-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest">High Certainty</div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Check className="text-emerald-600 w-5 h-5" /> The Regulars
              </h3>
              <ul className="space-y-4 font-lato text-sm">
                <li className="flex justify-between border-b border-stone-100 pb-2"><span>Elephants & Giraffes</span> <span className="font-bold text-stone-400">95%</span></li>
                <li className="flex justify-between border-b border-stone-100 pb-2"><span>Zebras & Wildebeest</span> <span className="font-bold text-stone-400">99%</span></li>
                <li className="flex justify-between border-b border-stone-100 pb-2"><span>Hippos & Crocs</span> <span className="font-bold text-stone-400">90%</span></li>
                <li className="flex justify-between border-b border-stone-100 pb-2"><span>Lions</span> <span className="font-bold text-stone-400">85%</span></li>
              </ul>
            </Card>

            <Card className="p-8 border-none shadow-sm overflow-hidden relative bg-white">
              <div className="absolute top-0 right-0 p-4 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest">The Chase</div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Compass className="text-amber-600 w-5 h-5" /> The Elusive Ones
              </h3>
              <ul className="space-y-4 font-lato text-sm">
                <li className="flex justify-between border-b border-stone-100 pb-2"><span>Leopard</span> <span className="font-bold text-stone-400">60%</span></li>
                <li className="flex justify-between border-b border-stone-100 pb-2"><span>Cheetah</span> <span className="font-bold text-stone-400">50%</span></li>
                <li className="flex justify-between border-b border-stone-100 pb-2"><span>Black Rhino</span> <span className="font-bold text-stone-400">30%*</span></li>
                <li className="flex justify-between border-b border-stone-100 pb-2"><span>African Wild Dog</span> <span className="font-bold text-stone-400">15%</span></li>
              </ul>
            </Card>
          </div>
          <p className="text-center mt-12 text-stone-400 italic text-xs font-lato">*Rhino sightings vary wildly by specific park location.</p>
        </Container>
      </section>

      {/* --- PRO TIPS --- */}
      <section className="py-24 overflow-hidden">
        <Container>
          <h2 className="text-3xl font-bold mb-16 text-center">First-Timer Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-amber-100 p-3 rounded-xl h-fit text-amber-700 shrink-0"><Shirt size={22} /></div>
                <div>
                  <h4 className="font-bold mb-2">Layering is Non-Negotiable</h4>
                  <p className="text-sm text-stone-600 font-lato leading-relaxed">It can be 40°F (4°C) at 6 AM and 90°F (32°C) by noon. Pack a light puffer jacket AND a t-shirt.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-amber-100 p-3 rounded-xl h-fit text-amber-700 shrink-0"><Wind size={22} /></div>
                <div>
                  <h4 className="font-bold mb-2">Embrace the Dust</h4>
                  <p className="text-sm text-stone-600 font-lato leading-relaxed">The "Safari Glow" is actually just fine orange dust. Keep your camera in a dry bag between sightings.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-stone-100 p-3 rounded-xl h-fit text-stone-700 shrink-0"><Camera size={22} /></div>
                <div>
                  <h4 className="font-bold mb-2">Look Up From the Lens</h4>
                  <p className="text-sm text-stone-600 font-lato leading-relaxed">Don't spend the whole trip behind a viewfinder. Some of the best moments are the sounds and smells of the bush.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-stone-100 p-3 rounded-xl h-fit text-stone-700 shrink-0"><Compass size={22} /></div>
                <div>
                  <h4 className="font-bold mb-2">Trust Your Guide</h4>
                  <p className="text-sm text-stone-600 font-lato leading-relaxed">They aren't just drivers; they are scientists. If they say "Wait 10 minutes," something incredible is likely about to happen.</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-900 rounded-[2rem] p-8 text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="text-amber-500 w-5 h-5" /> The Golden Rule
              </h4>
              <p className="text-stone-300 leading-relaxed font-lato text-sm">
                Stay inside the vehicle. To the animals, a safari car is just one large, non-threatening object. The moment you stand up or step out, you become a distinct (and potentially dangerous) shape. Safety is guaranteed as long as you remain seated.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-amber-600 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Get Your Boots on the Ground</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 font-lato">
            We handle the logistics. You handle the awe. Let's design your first African chapter together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-stone-100 font-bold px-8">Talk to an Expert</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8">View Itineraries</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

