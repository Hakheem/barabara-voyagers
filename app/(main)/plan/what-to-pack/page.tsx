import Image from 'next/image';
import Link from 'next/link';
import { 
  Backpack, 
  Check, 
  X, 
  AlertTriangle, 
  Wind, 
  ThermometerSun, 
  Layers, 
  Camera, 
  Stethoscope, 
  FileText, 
  Coins, 
  Luggage 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Safari Packing Guide 2026 - Master the Art of Packing Light | Barabara Voyagers',
  description: 'The definitive guide to safari packing. Learn why soft bags are mandatory, how to layer for the bush, and the expert-level camera gear you actually need.',
};

export default function WhatToPackPage() {
  return (
    <div className="bg-white">
  
      {/* --- THE GOLDEN RULES --- */} 
      <section className="py-16  relative z-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-xl border-none bg-white">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                <Luggage size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">15kg Limit</h3>
              <p className="text-gray-500 text-sm ">
                This isn't a suggestion. Bush planes have strictly limited cargo holds. <strong>Soft-sided bags only.</strong>
              </p>
            </Card>

            <Card className="p-8 text-center shadow-xl border-none bg-white">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <ThermometerSun size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">The 3-Layer Rule</h3>
              <p className="text-gray-500 text-sm ">
                Freezing at 6:00 AM, scorching at noon. Pack for three seasons every single day.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-xl border-none bg-white">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Wind size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Dust & Earth</h3>
              <p className="text-gray-500 text-sm ">
                If it isn't khaki, olive, or beige, it will be by the end of the day. Embrace the neutrals.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* --- BAGGAGE ADVISORY --- */}
      <section className="py-20 bg-stone-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="text-red-600 h-10 w-10" />
              <h2 className="text-3xl font-bold">The Bush Plane Baggage Protocol</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6  text-gray-700">
                <p>
                  Most safari itineraries include internal flights in 12-seater Cessnas. These aircraft use small "pods" underneath for luggage. 
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="text-green-600 flex-shrink-0" />
                    <span><strong>Soft Duffels Only:</strong> Your bag must be squishable to fit. Hard shells will be left behind.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-green-600 flex-shrink-0" />
                    <span><strong>15kg Total:</strong> This includes your camera gear and carry-on.</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="text-green-600 flex-shrink-0" />
                    <span><strong>Laundry:</strong> Don't panic. Almost every lodge provides daily laundry service.</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-full bg-gray-200 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop" 
                  alt="Bush Plane Loading"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- CLOTHING: THE COLOR PALETTE --- */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bush Couture: Dos & Don'ts</h2>
            <p className="text-gray-500 max-w-xl mx-auto ">
              In the wild, your clothing is your first line of defense against the sun, insects, and being spotted by wildlife.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white uppercase text-xs tracking-widest">
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">The "Yes" List</th>
                  <th className="p-4 text-left">The "Hard No" List</th>
                </tr>
              </thead>
              <tbody className="text-sm ">
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-bold bg-gray-50">Colors</td>
                  <td className="p-6 text-green-700">Khaki, Sage, Tan, Stone, Olive.</td>
                  <td className="p-6 text-red-600"><strong>Dark Blue/Black</strong> (attracts tsetse flies) & <strong>Bright White</strong> (visible for miles).</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-bold bg-gray-50">Footwear</td>
                  <td className="p-6 text-green-700">Light hiking shoes or sturdy sneakers.</td>
                  <td className="p-6 text-red-600">Heavy, un-broken-in boots (excessive weight) or Flip-flops for drives.</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-bold bg-gray-50">Headwear</td>
                  <td className="p-6 text-green-700">Wide-brimmed hat with a chin strap.</td>
                  <td className="p-6 text-red-600">Baseball caps (they fly off in open vehicles).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* --- THE PACKING GRIDS --- */}
      <section className="py-20 bg-stone-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Camera & Tech */}
            <Card className="p-8 border-none shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Camera className="text-amber-600" />
                <h3 className="text-2xl font-bold">Tech & Optics</h3>
              </div>
              <ul className="space-y-4 ">
                <li className="flex justify-between border-b pb-2"><span>Binoculars (8x42 is best)</span> <span className="text-amber-600 font-bold">Essential</span></li>
                <li className="flex justify-between border-b pb-2"><span>Telephoto Lens (300mm+)</span> <span className="text-amber-600 font-bold">Pro-Tip</span></li>
                <li className="flex justify-between border-b pb-2"><span>Universal Travel Adapter</span> <span className="text-gray-400">Essential</span></li>
                <li className="flex justify-between border-b pb-2"><span>Extra Memory Cards (x3)</span> <span className="text-gray-400">Don't Skimp</span></li>
              </ul>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg text-xs italic">
                <strong>Expert Note:</strong> Dust is your camera’s worst enemy. Bring a dedicated blower brush and a dry-bag for your gear.
              </div>
            </Card>

            {/* Health & Meds */}
            <Card className="p-8 border-none shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="text-blue-600" />
                <h3 className="text-2xl font-bold">The Bush Pharmacy</h3>
              </div>
              <ul className="space-y-3 text-sm ">
                <li className="flex items-center gap-2"><Check size={16} className="text-blue-600"/> Malaria Prophylaxis (Check with your GP)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-blue-600"/> High-DEET Insect Repellent</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-blue-600"/> Broad-spectrum SPF 50 Sunscreen</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-blue-600"/> Rehydration Salts (Hydration is key)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-blue-600"/> Personal Prescription Meds (Carry-on only)</li>
              </ul>
            </Card>

            {/* Documents */}
            <Card className="p-8 border-none shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-green-600" />
                <h3 className="text-2xl font-bold">The Paper Trail</h3>
              </div>
              <ul className="space-y-3 text-sm ">
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600"/> Passport (6+ months validity)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600"/> Yellow Fever Certificate (If required)</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600"/> Digital & Physical Boarding Passes</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600"/> Proof of Travel Insurance</li>
              </ul>
            </Card>

            {/* Money */}
            <Card className="p-8 border-none shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Coins className="text-amber-700" />
                <h3 className="text-2xl font-bold">Cash & Tipping</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm  text-gray-600">
                  Bring US Dollars printed <strong>after 2013</strong>. Older bills are often rejected in East Africa.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-xs font-bold uppercase block mb-2">Daily Tipping Guide (USD)</span>
                  <div className="flex justify-between text-sm"><span>Driver/Guide:</span> <span>$15 - $25</span></div>
                  <div className="flex justify-between text-sm"><span>General Staff:</span> <span>$10 - $15</span></div>
                </div>
              </div>
            </Card>

          </div>
        </Container>
      </section>

      {/* --- GORILLA TREKKING UPGRADE --- */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Specialized Gear</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">Heading to see the Gorillas?</h2>
              <p className=" text-gray-400 mb-8 leading-relaxed">
                Rainforest trekking is a different beast. It’s humid, muddy, and steep. If your itinerary includes Rwanda or Uganda, you <strong>must</strong> add these:
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm ">
                <div className="flex items-center gap-2"><Check className="text-amber-400" /> Gardening Gloves</div>
                <div className="flex items-center gap-2"><Check className="text-amber-400" /> Ankle Gaiters</div>
                <div className="flex items-center gap-2"><Check className="text-amber-400" /> Waterproof Boots</div>
                <div className="flex items-center gap-2"><Check className="text-amber-400" /> Rain Poncho</div>
              </div>
            </div>
            <div className="flex-1 relative w-full h-80 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <Image 
                  src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2070&auto=format&fit=crop" 
                  alt="Gorilla in Forest"
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </Container>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Still not sure if you’re overpacking?</h2>
            <p className="text-gray-600 mb-10 ">
              Our safari consultants can review your specific itinerary and give you a tailored list based on the exact lodges you're visiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-10" asChild>
                <Link href="/contact">Message an Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-900" asChild>
                <Link href="/plan/how-to-plan">Back to Planning</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

