import Image from 'next/image';
import Link from 'next/link';
import { 
  DollarSign, 
  TrendingUp, 
  Info, 
  Check, 
  X, 
  Plane, 
  Wallet, 
  Calendar, 
  Map, 
  Camera, 
  ShieldCheck,
  Navigation
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Safari Costs & Budget Guide - Africa Safari Prices | Barabara Voyagers',
  description: 'Complete guide to safari costs and budgeting. Understand pricing tiers, what\'s included, hidden costs, and how to get the best value for your African safari.',
};

export default function SafariCostsPage() {
  const budgetBreakdown = [
    { label: 'Safari Package (10 days)', amount: 5500, color: 'bg-amber-600', width: '70.5%' },
    { label: 'International Flights', amount: 1400, color: 'bg-blue-600', width: '18%' },
    { label: 'Tips & Gratuities', amount: 300, color: 'bg-green-600', width: '3.8%' },
    { label: 'Visas, Meds & Insurance', amount: 400, color: 'bg-gray-400', width: '5.1%' },
    { label: 'Souvenirs & Extras', amount: 200, color: 'bg-gray-300', width: '2.6%' },
  ];

  return (
    <div className="">
   
      <section className="py-20 relative z-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Budget', price: '250-400', color: 'border-green-600', text: 'text-green-600' },
              { title: 'Mid-Range', price: '400-700', color: 'border-blue-600', text: 'text-blue-600', popular: true },
              { title: 'Luxury', price: '700-1,200', color: 'border-amber-600', text: 'text-amber-600' },
              { title: 'Ultra-Luxury', price: '1,200+', color: 'border-purple-600', text: 'text-purple-600' },
            ].map((tier, i) => (
              <Card key={i} className={`p-8 text-center border-t-8 transition-all hover:shadow-md hover:-translate-y-1 shadow-lg bg-white ${tier.color} relative`}>
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Best Value
                  </span>
                )}
                <h3 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-4">{tier.title}</h3>
                <div className={`${tier.text} mb-2`}>
                  <span className="text-4xl font-bold">${tier.price}</span>
                </div>
                <p className="text-xs text-gray-500  italic">per person / day</p>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-blue-50 border-none shadow-inner max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">What does "Per Person Per Day" mean?</h4>
              <p className="text-sm  text-blue-800/80 leading-relaxed">
                This is the standard industry way to quote. It includes your lodging, all meals, shared game drives, and park fees. 
                <strong> International flights are always extra.</strong>
              </p>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Typical 10-Day Investment</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                {budgetBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm">{item.label}</span>
                      <span className="font-mono text-sm">${item.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
                <div className="pt-6 mt-6 border-t border-gray-300 flex justify-between items-center">
                  <span className="text-2xl font-bold">Total Per Person</span>
                  <span className="text-3xl font-black text-amber-600">$7,800</span>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Card className="p-8 bg-white shadow-xl border-none rotate-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Wallet className="text-amber-600" /> Planner's Note
                  </h3>
                  <p className="text-gray-600  text-sm leading-relaxed mb-4">
                    For a couple, this totals <strong>$15,600</strong>. We recommend adding a 15% "buffer" to your budget for high-end souvenirs, premium drinks, or that spontaneous hot-air balloon ride you'll definitely want once you see the sunrise!
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest">
                    <Calendar className="h-4 w-4" /> 2026 Season Pricing
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-900 text-gray-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Fine Print</h2>
            <p className="text-gray-400">Knowing what’s included helps you avoid "bill shock" at checkout.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-500 flex items-center gap-3">
                <Check className="h-7 w-7" /> Usually Included
              </h3>
              <ul className="space-y-4">
                {[
                  'Boutique Lodging & Luxury Tents',
                  'Three Full Meals Daily',
                  'Game Drives with Expert Guides',
                  'All National Park Entrance Fees',
                  'Internal Bush Flights (if specified)',
                  'Filtered Drinking Water'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300  p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-green-500 font-bold">0{i+1}</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400 flex items-center gap-3">
                <X className="h-7 w-7" /> Usually Extra
              </h3>
              <ul className="space-y-4">
                {[
                  'International Airfare to Africa',
                  'Tourist Visas ($50-$100)',
                  'Comprehensive Travel Insurance',
                  'Tips for Guides & Camp Staff',
                  'Hot Air Balloon Safaris',
                  'Premium Spirits & Champagne'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400  p-3 bg-white/5 rounded-lg border border-white/10 italic">
                    <span className="text-red-400 font-bold">--</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <h2 className="text-4xl font-bold mb-16 text-center">How to Save Without Sacrificing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Calendar className="text-amber-600" />, title: 'Green Season Travel', desc: 'Visit in May or November for 30% off rates while the landscape is lush.' },
              { icon: <Navigation className="text-amber-600" />, title: 'Join a Group', desc: 'Share the vehicle cost by joining a scheduled departure instead of booking private.' },
              { icon: <Camera className="text-amber-600" />, title: 'Book 9+ Months Out', desc: 'Early bird rates are real. Lock in current prices before yearly increases.' },
              { icon: <Map className="text-amber-600" />, title: 'Stay Longer', desc: 'Many lodges offer "Stay 4, Pay 3" deals that drastically drop the nightly average.' },
              { icon: <ShieldCheck className="text-amber-600" />, title: 'Self-Drive Namibia', desc: 'If you are adventurous, Namibia is the safest and cheapest place for a self-drive safari.' },
              { icon: <Plane className="text-amber-600" />, title: 'Regional Hubs', desc: 'Flying into Nairobi or Johannesburg is usually $300 cheaper than smaller airports.' },
            ].map((tip, i) => (
              <div key={i} className="group p-8 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:bg-amber-600 group-hover:text-gray-100 transition-colors">
                  {tip.icon}
                </div>
                <h4 className="font-bold text-xl mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-600  leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- GORILLA PERMITS --- */}
      <section className="py-20 bg-stone-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Gorilla Permit Benchmarks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { country: 'Uganda', price: '$700', color: 'text-green-600' },
                { country: 'Rwanda', price: '$1,500', color: 'text-blue-600' },
                { country: 'Congo (DRC)', price: '$400', color: 'text-amber-600' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-amber-500">
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-2">{item.country}</p>
                  <p className={`text-5xl font-black mb-0 ${item.color}`}>{item.price}</p>
                  <p className="text-[10px] text-gray-400 mt-4 uppercase">Per Permit / Per Trek</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-xs text-gray-400 italic ">
              Permits are strictly limited and often sell out 12 months in advance. Prices are set by national parks and are non-negotiable.
            </p>
          </div>
        </Container>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-amber-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to build your itinerary?</h2>
          <p className="text-white/90 text-xl mb-10 max-w-xl mx-auto ">
            Our experts specialize in maximizing your budget to get the best wildlife sightings in Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button  className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-5 text-md shadow-lg" asChild>
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
            <Button  variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 text-md" asChild>
              <Link href="/safaris">Browse All Packages</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
