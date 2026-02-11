import Image from 'next/image';
import Link from 'next/link';
import { 
  Mountain, 
  Check, 
  Waves, 
  Wine, 
  Utensils, 
  Camera, 
  MapPin, 
  Calendar,
  Clock,
  Navigation
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Cape Town Experience - Table Mountain, Winelands & Coastal Magic | Barabara Voyagers',
  description: 'From the peaks of Table Mountain to the granite boulders of Penguin Beach. Discover why Cape Town is the ultimate safari bookend.',
};

export default function CapeTownPage() {
  return (
    <div className="bg-white"> 
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920" 
            alt="Cape Town Aerial View" 
            fill 
            className="object-cover brightness-[0.6]" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        </div>
        
        <Container className="bottom-16 left-8 absolute z-10 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-amber-500 font-bold tracking-widest uppercase text-sm">
              <Navigation size={18} />
              <span>South Africa's Crown Jewel</span>
            </div>
            <h1 className="text-3xl md:text-5xl  font-bold mb-4 tracking-tight">
              The Mother City
            </h1>
            <p className="text-xl  mb-6 text-gray-200  leading-relaxed">
              Where the rugged Atlantic meets the foot of Africa. Cape Town isn't just a city—it's a high-definition collision of mountains, oceans, and world-class vineyards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-none px-10">
                Plan Your Escape
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 backdrop-blur-sm">
                View Signature Packages
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* --- THE TRIFECTA (CORE PILLARS) --- */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="mb-6 inline-flex p-5 rounded-3xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Mountain size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Iconic Peaks</h3>
              <p className="text-gray-500  leading-relaxed text-sm">
                From the flat-topped majesty of Table Mountain to the sunrise hikes up Lion’s Head, the city is framed by ancient sandgray giants.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 inline-flex p-5 rounded-3xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                <Wine size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Epicurean Valleys</h3>
              <p className="text-gray-500  leading-relaxed text-sm">
                A 45-minute drive lands you in Stellenbosch or Franschhoek—the "Napa Valley of Africa," home to 300-year-old estates.
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 inline-flex p-5 rounded-3xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <Waves size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Wild Coastlines</h3>
              <p className="text-gray-500  leading-relaxed text-sm">
                Watch the African Penguin colony at Boulders Beach or stand at Cape Point, the southwesternmost tip of the continent.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- SIGNATURE EXPERIENCES (THE DATA) --- */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Signature Cape Experiences</h2>
              <p className="text-gray-500 ">The non-negotiables for your first Cape Town itinerary.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border border-gray-200">Recommended: 4-5 Days</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: "The Cableway", 
                desc: "A rotating 360° ascent to the top of Table Mountain.",
                img: "https://images.unsplash.com/photo-1576085834041-41e1164feb4a?w=800"
              },
              { 
                title: "Boulders Beach", 
                desc: "Walk among the world-famous colony of African Penguins.",
                img: "https://images.unsplash.com/photo-1590429103565-98547225c50c?w=800"
              },
              { 
                title: "Franschhoek Tram", 
                desc: "The vintage hop-on-hop-off wine experience.",
                img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800"
              },
              { 
                title: "Chapman's Peak", 
                desc: "One of the world's most dramatic coastal drives.",
                img: "https://images.unsplash.com/photo-1490604676484-416110187235?w=800"
              }
            ].map((item, idx) => (
              <Card key={idx} className="group relative h-96 overflow-hidden border-none cursor-pointer">
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-300  opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* --- ITINERARY PREVIEW --- */}
      <section className="py-24">
        <Container>
          <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">A Perfect Day in <br/>The Mother City</h2>
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold">1</div>
                  <h5 className="font-bold mb-1">08:00 AM — Atlantic Breakfast</h5>
                  <p className="text-sm text-gray-400 ">Flat whites and fresh pastries in Camps Bay overlooking the Twelve Apostles.</p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold">2</div>
                  <h5 className="font-bold mb-1">11:00 AM — High-Altitude Views</h5>
                  <p className="text-sm text-gray-400 ">Quick ascent via the cableway to explore the fynbos-rich summit of Table Mountain.</p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold">3</div>
                  <h5 className="font-bold mb-1">01:30 PM — Constantia Lunch</h5>
                  <p className="text-sm text-gray-400 ">Wine tasting and lunch at Groot Constantia, the oldest wine estate in South Africa.</p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold">4</div>
                  <h5 className="font-bold mb-1">06:30 PM — Signal Hill Sunset</h5>
                  <p className="text-sm text-gray-400 ">The classic Capetonian tradition: watching the sun dip into the Atlantic with a cold G&T.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1551854716-8b811be39e7e?w=800" 
                alt="Cape Town Lifestyle" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </Container>
      </section>

      {/* --- LOGISTICS SECTION --- */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="text-amber-600" /> When to Go
              </h3>
              <div className="space-y-4 ">
                <p className="text-sm leading-relaxed">
                  <strong>Nov – March (Summer):</strong> Best for beaches and outdoor living. Hot, windy, and dry.
                </p>
                <p className="text-sm leading-relaxed">
                  <strong>Sept – Oct:</strong> Peak Whale Watching season in nearby Hermanus.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Navigation className="text-amber-600" /> Pairing with Safari
              </h3>
              <p className="text-sm  leading-relaxed">
                Cape Town is perfectly served by direct 2-hour flights to the Kruger National Park or the Madikwe Game Reserve, making it the ideal "Coast & Cloud" combination.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-indigo-950 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Meet the Mother City?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-80 ">
            Let us design a seamless itinerary that takes you from the city's best tables to the wild's best sightings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-none px-12">
              Speak to a Consultant
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Explore Day Tours
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

