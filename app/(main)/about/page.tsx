import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/layout/SectionHeader';
import { Heart, Users, Globe, Shield, Leaf, Award } from 'lucide-react';

export default function AboutPage() {
  const differences = [
    { title: "Passion-Driven", icon: <Heart />, desc: "We're not just in the business of safaris - we're safari fanatics. Our team lives and breathes Africa. This passion shows in every detail of your journey.", img: "https://images.unsplash.com/photo-1534177714502-dcd3d60369f3?w=800" },
    { title: "Personal Service", icon: <Users />, desc: "Small company, big hearts. You'll work with dedicated safari planners who get to know you and craft itineraries tailored exactly to your dreams.", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800" },
    { title: "Local Expertise", icon: <Globe />, desc: "Our guides aren't just professionals - they're conservationists, trackers, and storytellers with decades of experience.", img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800" },
    { title: "Safety First", icon: <Shield />, desc: "Your safety is paramount. We work only with licensed operators and maintain the highest vehicle standards.", img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800" },
    { title: "Conservation Committed", icon: <Leaf />, desc: "We partner with lodges that give back. A portion of every safari supports wildlife conservation and local communities.", img: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?w=800" },
    { title: "Quality Obsessed", icon: <Award />, desc: "We personally vet every lodge, camp, and guide. If it's not good enough for our own families, it's not good enough for you.", img: "https://images.unsplash.com/photo-1490131784822-b56a45664a9a?w=800" },
  ];

  return (
    <>
   

<SectionHeader
  title="About Barabara Voyagers"
  description="For over 25 years, we've been crafting authentic African safari experiences."
  image="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920"
  contentPositionClassName="bottom-16 left-8"
  textAlignClassName="text-left"
  textStyleClassName="text-4xl md:text-5xl lg:text-6xl"
  maxWidth="max-w-2xl"
/>


      {/* OUR STORY */}
      <section className="py-24 bg-white"> 
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-sm uppercase tracking-widest text-amber-700 font-bold">Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-title leading-tight text-gray-900">
                Crafting Stories Across the African Savannah.
              </h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Barabara Voyagers was founded in 1998 by safari enthusiasts who fell in love with East Africa and decided to share that passion with the world. What began as a small operation in Tanzania has grown into one of Africa's most respected luxury safari companies.
                </p>
                <p>
                  Today, we operate across 10 African countries, but we've never lost sight of what made us special: personal service, deep local knowledge, and an unwavering commitment to conservation and community.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="aspect-square relative overflow-hidden rounded-sm shadow-md">
                <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200" alt="Founder" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 hidden md:block max-w-xs shadow-xl border-t-4 border-amber-600">
                <p className="italic font-title text-xl text-gray-800">
                  "We don't show you Africa. We let you feel it."
                </p>
                <p className="mt-4 uppercase tracking-tighter text-xs font-bold text-gray-400">— Founder</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold mb-12 text-center font-title">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((item, idx) => (
              <div key={idx} className="group relative h-100 overflow-hidden rounded-md shadow-md bg-gray-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                />


                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 ease-in-out">

                    {/* Icon and Title */}
                    <div className="text-amber-500 mb-3 h-8 w-8 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-title text-white mb-0 group-hover:mb-4 transition-all duration-500">
                      {item.title}
                    </h4>


                    <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                      <p className="text-white/90 text-sm leading-relaxed font-sans pb-4">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Years in Business", val: "25+" },
              { label: "African Countries", val: "10" },
              { label: "Happy Travelers", val: "15,000+" },
              { label: "Would Recommend", val: "98%" },
            ].map((stat, i) => (
              <div key={i} className="text-center border-l border-white/10 first:border-0">
                <span className="block text-5xl  font-medium text-primary mb-2">{stat.val}</span>
                <span className="uppercase tracking-widest text-[10px] font-bold opacity-50">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PREMIUM CTA SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/leopard_hi.jpg" alt="CTA Background" fill className="object-cover grayscale" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center border-y border-gray-200 py-16">
            <h2 className="text-4xl md:text-6xl font-title mb-8 text-gray-900 leading-tight">
              Your Spot in the Wild <br /> is Waiting.
            </h2>
            <p className="text-xl text-gray-900 mb-12 font-light italic max-w-2xl mx-auto">
              "Let us craft a safari that exceeds your wildest dreams. Personalized service, expert guides, and life-changing moments await."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 rounded-none transition-all hover:tracking-widest" asChild>
                <Link href="/contact">Start Planning Your Safari</Link>
              </Button>
              <Link href="/about/why-choose-us" className="text-amber-800 font-bold uppercase tracking-widest text-sm border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
                The Barabara Philosophy
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

