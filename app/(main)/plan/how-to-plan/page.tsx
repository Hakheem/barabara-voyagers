import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  Plane, 
  Backpack,
  Compass
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'How to Plan Your Safari - The Step-by-Step Roadmap | Barabara Voyagers',
  description: 'From choosing the right country to securing gorilla permits. A comprehensive timeline and budgeting guide for your African adventure.',
};

export default function HowToPlanPage() {
  return (
    <div className="bg-white">
     

      {/* --- PLANNING TIMELINE --- */}
      <section className="py-24 overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">The Safari Countdown</h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-stone-200" />

              <div className="space-y-16">
                {/* 12 Months Out */}
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 md:text-right ml-10 md:ml-0">
                    <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Phase 01</span>
                    <h3 className="text-2xl font-bold mb-4">6-12 Months: The Foundation</h3>
                    <ul className="space-y-3 text-stone-600 text-sm ">
                      <li className="flex items-start gap-2 md:justify-end"><span><strong>Lock in Gorilla Permits:</strong> Essential for Uganda/Rwanda.</span> <Check className="w-4 h-4 text-amber-600 mt-1 shrink-0" /></li>
                      <li className="flex items-start gap-2 md:justify-end"><span><strong>Pick Your Migration:</strong> Align dates with the herds.</span> <Check className="w-4 h-4 text-amber-600 mt-1 shrink-0" /></li>
                      <li className="flex items-start gap-2 md:justify-end"><span><strong>Premium Lodges:</strong> The best camps sell out a year in advance.</span> <Check className="w-4 h-4 text-amber-600 mt-1 shrink-0" /></li>
                    </ul>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white">
                    <div className="w-3 h-3 rounded-full bg-amber-600" />
                  </div>
                </div>

                {/* 6 Months Out */}
                <div className="relative flex flex-col md:flex-row">
                  <div className="hidden md:block md:w-1/2" />
                  <div className="md:w-1/2 md:pl-12 ml-10 md:ml-0">
                    <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Phase 02</span>
                    <h3 className="text-2xl font-bold mb-4">3-6 Months: Logistics</h3>
                    <ul className="space-y-3 text-stone-600 text-sm ">
                      <li className="flex items-start gap-2"> <Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> <span><strong>International Flights:</strong> Book your long-haul legs.</span></li>
                      <li className="flex items-start gap-2"> <Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> <span><strong>Travel Clinic:</strong> Start your Yellow Fever/Malaria consults.</span></li>
                      <li className="flex items-start gap-2"> <Check className="w-4 h-4 text-blue-600 mt-1 shrink-0" /> <span><strong>Finalize Itinerary:</strong> Deposit and confirm all transfers.</span></li>
                    </ul>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                  </div>
                </div>

                {/* 1 Month Out */}
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 md:text-right ml-10 md:ml-0">
                    <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase">Phase 03</span>
                    <h3 className="text-2xl font-bold mb-4">1-2 Months: Gear Up</h3>
                    <ul className="space-y-3 text-stone-600 text-sm ">
                      <li className="flex items-start gap-2 md:justify-end"><span><strong>Visas:</strong> Most East African visas are e-visas now.</span> <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /></li>
                      <li className="flex items-start gap-2 md:justify-end"><span><strong>Packing:</strong> Neutral colors and soft-sided bags only.</span> <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /></li>
                      <li className="flex items-start gap-2 md:justify-end"><span><strong>Insurance:</strong> Ensure your policy includes medical evacuation.</span> <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" /></li>
                    </ul>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center bg-white">
                    <div className="w-3 h-3 rounded-full bg-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- BUDGETING TABLE --- */}
      <section className="py-24 bg-stone-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Investment Tiers</h2>
              <p className="text-stone-500 ">Safari costs are usually "all-inclusive" (food, drives, park fees).</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead className="bg-stone-900 text-white">
                  <tr>
                    <th className="p-6">Tier</th>
                    <th className="p-6">Price (Per Person/Day)</th>
                    <th className="p-6">What to Expect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 ">
                  <tr>
                    <td className="p-6 font-bold">Adventurer</td>
                    <td className="p-6">$350 - $500</td>
                    <td className="p-6 text-sm text-stone-600">Comfortable lodges or permanent tented camps. Shared vehicle drives. Great for first-timers on a budget.</td>
                  </tr>
                  <tr className="bg-amber-50/30">
                    <td className="p-6 font-bold text-amber-700">Signature</td>
                    <td className="p-6 text-amber-700">$600 - $900</td>
                    <td className="p-6 text-sm text-stone-700 font-medium">Small luxury camps (10-12 tents). Private vehicle options. Excellent food and expert-level guides.</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold">Ultra-Luxe</td>
                    <td className="p-6">$1,200+</td>
                    <td className="p-6 text-sm text-stone-600">Exclusive concessions. Private plunge pools. Scenic helicopter transfers and world-class fine dining.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* --- DECISION GRID --- */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 border-none bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <MapPin className="text-amber-600 mb-6" size={32} />
              <h4 className="font-bold text-xl mb-4">Where?</h4>
              <p className="text-sm text-stone-500  leading-relaxed">
                Tanzania/Kenya for the herds, Uganda for primates, or South Africa for family-friendly luxury.
              </p>
            </Card>

            <Card className="p-8 border-none bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <Calendar className="text-amber-600 mb-6" size={32} />
              <h4 className="font-bold text-xl mb-4">When?</h4>
              <p className="text-sm text-stone-500  leading-relaxed">
                June-Oct is dry and best for sightings. Nov-May is the "Green Season" for birding and lower rates.
              </p>
            </Card>

            <Card className="p-8 border-none bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <Users className="text-amber-600 mb-6" size={32} />
              <h4 className="font-bold text-xl mb-4">Who?</h4>
              <p className="text-sm text-stone-500  leading-relaxed">
                Private safaris offer total freedom, while group safaris are a social and cost-effective alternative.
              </p>
            </Card>

            <Card className="p-8 border-none bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <Compass className="text-amber-600 mb-6" size={32} />
              <h4 className="font-bold text-xl mb-4">How?</h4>
              <p className="text-sm text-stone-500  leading-relaxed">
                Fly-in safaris maximize time, while driving safaris let you see the "real" Africa between parks.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image src="/patterns/safari-dots.svg" alt="" fill className="object-cover" />
        </div>
        <Container className="text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Stop Researching. <br/>Start Planning.</h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto ">
            Our experts save you 40+ hours of research. We handle the permits, the transfers, and the timing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-none px-10">
              Request a Custom Itinerary
            </Button>
            <Button size="lg" variant="outline" className="border-stone-700 text-white hover:bg-stone-800 px-10">
              View Sample Trips
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

