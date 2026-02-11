import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Check, 
  Heart, 
  Handshake, 
  BookOpen, 
  Globe, 
  CameraOff, 
  Shirt, 
  ShoppingBag, 
  Earphones,
  Ban,
  ArrowRight,
  MapPin
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Cultural Safaris - Meet African Tribes & Communities | Barabara Voyagers',
  description: 'Combine wildlife safaris with authentic cultural experiences. Meet Maasai, visit local villages, learn traditions, and support African communities responsibly.',
};

export default function CulturalSafarisPage() {
  return (
    <>
      {/* Content Starts Here - Hero is handled by Layout */}

      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 tracking-tight text-stone-900">Beyond the Wilderness</h2>
              <div className="prose prose-lg max-w-none font-sans text-gray-700 leading-relaxed">
                <p>
                  Africa isn&apos;t just about wildlife—it&apos;s about the people, traditions, and ancient wisdom that have coexisted with nature for millennia. Cultural safaris add depth to your journey, connecting you with the heart of the communities who call this continent home.
                </p>
                <p>
                  We believe cultural tourism should be respectful, authentic, and mutually beneficial. Our experiences are led by community members, support local heritage projects, and provide genuine interaction—far removed from staged tourist performances.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-none bg-orange-50/50 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Handshake className="h-10 w-10 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-stone-900">Authentic Connection</h3>
                <p className="text-gray-600 font-sans text-sm">Experience real daily life through meaningful dialogue and shared stories with local hosts.</p>
              </Card>

              <Card className="p-8 text-center border-none bg-orange-50/50 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Heart className="h-10 w-10 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-stone-900">Community Benefit</h3>
                <p className="text-gray-600 font-sans text-sm">Your visit directly funds local schools, water projects, and healthcare initiatives.</p>
              </Card>

              <Card className="p-8 text-center border-none bg-orange-50/50 shadow-sm">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-10 w-10 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-stone-900">Heritage Preservation</h3>
                <p className="text-gray-600 font-sans text-sm">Support the preservation of ancient languages, crafts, and traditional land-use practices.</p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section id="experiences" className="py-24 bg-stone-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Cultural Experiences by Region</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg">
              Explore the diverse heritage of the African continent through our specialized community partners.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            {/* Maasai Section */}
            <Card className="p-8 md:p-12 overflow-hidden border-none shadow-md bg-white">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-orange-700" />
                    <h3 className="text-2xl font-bold text-stone-900">Maasai Guardians (Kenya & Tanzania)</h3>
                  </div>
                  <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                    The Maasai are semi-nomadic pastoralists whose identity is inextricably linked to the savannah. Visit authentic bomas (villages) to understand their cattle-based economy and their modern role as wildlife guardians.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500">Highlights</h4>
                      <ul className="space-y-2 text-sm font-sans">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-600" /> Traditional ceremonies & jumping</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-600" /> Beadwork & craft workshops</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-600" /> Livestock & land management</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500">Impact</h4>
                      <p className="text-sm text-stone-600 font-sans italic">
                        Visit fees support local clinics and the &quot;Predator Compensation Fund&quot; which helps promote human-wildlife coexistence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* San Section */}
            <Card className="p-8 md:p-12 overflow-hidden border-none shadow-md bg-white">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-6 w-6 text-orange-700" />
                    <h3 className="text-2xl font-bold text-stone-900">San Bushmen Traditions (Botswana & Namibia)</h3>
                  </div>
                  <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                    Join the world&apos;s most skilled trackers. The San people share their deep desert knowledge, from identifying life-saving tubers to interpreting the stories written in the Kalahari sands.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-orange-800 bg-orange-50 px-4 py-2 rounded-full w-fit">
                    <MapPin className="h-4 w-4" />
                    <span>Best for: Okavango Delta & Central Kalahari</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Batwa Section */}
            <Card className="p-8 md:p-12 overflow-hidden border-none shadow-md bg-white">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-orange-700" />
                    <h3 className="text-2xl font-bold text-stone-900">Batwa Forest Heritage (Uganda & Rwanda)</h3>
                  </div>
                  <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                    Known as the &quot;Keepers of the Forest,&quot; the Batwa provide a rare perspective on the ancient relationship between humans and the rainforest. Learn about traditional hunting, honey gathering, and herbal medicine.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans">
                    <li className="flex items-center gap-2 text-stone-600"><Check className="h-4 w-4 text-orange-600" /> Guided ancient forest walks</li>
                    <li className="flex items-center gap-2 text-stone-600"><Check className="h-4 w-4 text-orange-600" /> Fire-making demonstrations</li>
                    <li className="flex items-center gap-2 text-stone-600"><Check className="h-4 w-4 text-orange-600" /> Storytelling around the hearth</li>
                    <li className="flex items-center gap-2 text-stone-600"><Check className="h-4 w-4 text-orange-600" /> Cultural preservation support</li>
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
            <h2 className="text-3xl font-bold mb-12 text-center text-stone-900">Respectful Travel Guidelines</h2>

            <div className="space-y-4">
              <Card className="p-6 flex gap-5 items-start border-gray-100 hover:border-orange-200 transition-colors">
                <div className="bg-stone-100 p-3 rounded-lg flex-shrink-0">
                  <CameraOff className="h-6 w-6 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Dignified Photography</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    Always request permission before taking photos of individuals. Treat every interaction as a meeting between equals, not a photo opportunity.
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-5 items-start border-gray-100 hover:border-orange-200 transition-colors">
                <div className="bg-stone-100 p-3 rounded-lg flex-shrink-0">
                  <Shirt className="h-6 w-6 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Cultural Etiquette</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    Dress modestly when visiting villages. Showing respect through your attire is a universal sign of courtesy across African cultures.
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-5 items-start border-gray-100 hover:border-orange-200 transition-colors">
                <div className="bg-stone-100 p-3 rounded-lg flex-shrink-0">
                  <ShoppingBag className="h-6 w-6 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Fair Trade Support</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    Purchase crafts directly from the artisans. Bargain with kindness, remembering that a small amount to you can make a significant difference to a family.
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-5 items-start border-gray-100 hover:border-orange-200 transition-colors">
                <div className="bg-stone-100 p-3 rounded-lg flex-shrink-0">
                  <Ban className="h-6 w-6 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Responsible Giving</h3>
                  <p className="text-gray-600 font-sans text-sm">
                    Avoid giving sweets or money to children, as this can encourage truancy. We can help you donate to local schools or community funds instead.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-orange-700 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full -ml-48 -mb-48 opacity-20"></div>
        <Container className="text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Connect with the Heart of Africa</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-sans opacity-90">
            Enrich your safari with authentic cultural exchanges that empower communities and preserve heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-700 hover:bg-stone-100 px-8" asChild>
              <Link href="/contact">Plan My Cultural Journey</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
              <Link href="/safaris">
                Explore All Types
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

