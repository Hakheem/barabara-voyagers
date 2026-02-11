import Image from 'next/image';
import Link from 'next/link';
import { 
  Leaf, 
  Check, 
  ShieldCheck, 
  Microscope, 
  GraduationCap, 
  MapPin, 
  Target, 
  MessageSquare, 
  Users, 
  CalendarClock, 
  Globe2,
  ArrowRight
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Conservation Safaris - Support African Wildlife Protection | Barabara Voyagers',
  description: 'Conservation-focused safaris supporting wildlife protection. Visit conservation projects, meet researchers, participate in anti-poaching efforts, and make a difference.',
};

export default function ConservationSafarisPage() {
  return (
    <>
      {/* Content Starts Here - Hero is handled by Layout */}
      
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 tracking-tight text-stone-900">The Purpose Behind the Journey</h2>
              <div className="prose prose-lg max-w-none font-sans text-gray-700 leading-relaxed">
                <p>
                  Conservation safaris go beyond wildlife viewing—they let you contribute directly to protecting Africa&apos;s endangered species. Visit conservation projects, meet researchers and anti-poaching teams, participate in wildlife monitoring, and learn about the challenges and successes of conservation work.
                </p>
                <p>
                  Your safari supports conservation through intentional accommodation choices, activity fees that fund tracking collars, and community-led monitoring programs. You&apos;ll leave with a deeper understanding of the wild and the satisfaction of having made a tangible difference.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-none bg-stone-50 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Target className="h-10 w-10 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Direct Impact</h3>
                <p className="text-gray-600 font-sans text-sm">Your visit funds anti-poaching patrols, veterinary care, and wildlife protection programs.</p>
              </Card>

              <Card className="p-8 text-center border-none bg-stone-50 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Microscope className="h-10 w-10 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Access</h3>
                <p className="text-gray-600 font-sans text-sm">Interact with the researchers, veterinarians, and rangers on the front lines of protection.</p>
              </Card>

              <Card className="p-8 text-center border-none bg-stone-50 shadow-sm">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-10 w-10 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Deep Learning</h3>
                <p className="text-gray-600 font-sans text-sm">Gain a realistic understanding of conservation challenges and how you can help long-term.</p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="py-24 bg-stone-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Active Conservation Experiences</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg">
              Engage with specific species protection programs across our partner reserves.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            {/* Rhino Section */}
            <Card className="p-8 md:p-12 overflow-hidden border-none shadow-md bg-white">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="h-6 w-6 text-emerald-700" />
                    <h3 className="text-2xl font-bold">Rhino Protection & Rewilding</h3>
                  </div>
                  <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                    Rhinos face unprecedented threats. Visit specialized projects to learn about dehorning programs, participate in telemetry monitoring, and support sanctuaries breeding rhinos for eventual rewilding in South Africa, Namibia, and Kenya.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="space-y-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500">Activities</h4>
                      <ul className="space-y-1 text-sm font-sans">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Track using GPS collars</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Meet K9 anti-poaching units</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Visit breeding sanctuaries</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500">Locations</h4>
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <MapPin className="h-4 w-4" />
                        <span>Phinda, Lewa, Desert Rhino Camp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Gorilla Section */}
            <Card className="p-8 md:p-12 overflow-hidden border-none shadow-md bg-white">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="h-6 w-6 text-emerald-700" />
                    <h3 className="text-2xl font-bold">Mountain Gorilla Habitat Stability</h3>
                  </div>
                  <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                    Gorilla populations have increased significantly thanks to tourism revenue. Permit fees directly fund ranger salaries and community human-wildlife conflict mitigation in Uganda and Rwanda.
                  </p>
                  
                  <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100 mb-6">
                    <h4 className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-2">
                      <Globe2 className="h-4 w-4" />
                      Conservation Success
                    </h4>
                    <p className="text-sm text-emerald-800 font-sans">
                      Permit fees ($700 - $1,500) provide the economic incentive for habitat protection, making mountain gorillas one of the few conservation success stories of the century.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Predator Section */}
            <Card className="p-8 md:p-12 overflow-hidden border-none shadow-md bg-white">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-emerald-700" />
                    <h3 className="text-2xl font-bold">Big Cat & Wild Dog Monitoring</h3>
                  </div>
                  <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                    Predators require massive ranges. Join researchers in tracking packs and prides through the Okavango, Serengeti, and Laikipia to understand movement patterns and reduce human-carnivore conflict.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans">
                    <li className="flex items-center gap-2 text-stone-600 italic"><Check className="h-4 w-4 text-emerald-600 not-italic" /> Assistance with population surveys</li>
                    <li className="flex items-center gap-2 text-stone-600 italic"><Check className="h-4 w-4 text-emerald-600 not-italic" /> Understanding pack dynamics</li>
                    <li className="flex items-center gap-2 text-stone-600 italic"><Check className="h-4 w-4 text-emerald-600 not-italic" /> Human-wildlife conflict education</li>
                    <li className="flex items-center gap-2 text-stone-600 italic"><Check className="h-4 w-4 text-emerald-600 not-italic" /> Supporting livestock protection</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Responsible Traveler Tips</h2>

            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6 flex gap-5 items-start border-gray-100">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <Globe2 className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Choose Conservation-Focused Lodges</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    Stay at properties that fund protection. Many eco-lodges donate a percentage of profits to wildlife guards and community schools.
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-5 items-start border-gray-100">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Engage with the Experts</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    Don&apos;t be afraid to ask rangers about their daily challenges. They are passionate about sharing the reality of field work with interested guests.
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-5 items-start border-gray-100">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Empower Local Communities</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    Wildlife conservation only succeeds when local people benefit. Support community-owned ventures and authentic local craft markets.
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-5 items-start border-gray-100">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <CalendarClock className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Commit to the Long Term</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    Stay connected after your trip. Donate to the projects you visited or follow their progress through their social updates.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700 rounded-full -mr-32 -mt-32 opacity-20"></div>
        <Container className="text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Make Your Next Journey Matter</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-sans opacity-90">
            Design a safari that supports the researchers and rangers protecting Africa&apos;s most vulnerable species.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-emerald-800 hover:bg-stone-100 border-white px-8" asChild>
              <Link href="/contact">Plan My Impact Safari</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
              <Link href="/safaris">
                View All Safaris
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

