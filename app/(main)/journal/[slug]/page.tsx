import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Share2, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default async function BlogPostPage() {
  // Mock entry
  const post = {
    title: 'The 2026 Safari Hot List: Where to Wander Now',
    category: 'Travel Trends',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600',
    author: 'Barabara Editorial',
    date: 'Jan 12, 2026'
  };

  return (
    <main className=" mx-auto">
      {/* Image Header */}
     <header className="relative h-[65vh] flex items-end pb-20">
        <Container className=" text-gray-800 text-center">
          <div className="max-w-4xl">
            <span className="block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-6xl title font-bold leading-[1.1]">
              {post.title}
            </h1>
          </div>
        </Container>
      </header>



      {/* Article Body */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content (Micato Style) */}
            <div className="lg:col-span-8">
             
              <div className="flex items-center gap-6 border-b border-gray-200 pb-8 mb-12 text-gray-400 text-sm">
                 <Link href="/journal" className="flex items-center text-[11px]  uppercase tracking-[0.2em]  hover:text-amber-600 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> 
            </Link>
                <span>By {post.author}</span>
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 Min Read</span>
              </div>

              <article className="prose prose-lg prose-gray max-w-none 
                prose-headings: prose-headings:font-bold prose-headings:tracking-tight
                prose-p:font-light prose-p:leading-[1.8] prose-p:text-gray-600">
                
                <p className="text-xl  italic text-gray-800 mb-12 leading-relaxed">
                  "As we look toward 2026, the definition of a safari is evolving. It is no longer just about the Big Five; it’s about the silence, the space, and the soul of the land."
                </p>

                {/* Section Example 1 */}
                <div className="my-16 space-y-6">
                  <span className="text-5xl  text-amber-600/30 block">01</span>
                  <h2 className="text-4xl mt-0">The Remote Luangwa Valley, Zambia</h2>
                  <p>
                    Known as the birthplace of the walking safari, South Luangwa remains one of the greatest wildlife sanctuaries in the world. In 2026, we are seeing a shift toward ultra-remote fly camps that offer an unfiltered connection to the bush.
                  </p>
                  <div className="relative aspect-video w-full rounded-md overflow-hidden my-4">
                    <Image src="https://images.unsplash.com/photo-1547234935-80c7145ec969?w=1000" alt="Zambia" fill className="object-cover" />
                  </div>
                </div>

                {/* Section Example 2 */}
                <div className="my-16 space-y-6">
                  <span className="text-5xl  text-amber-600/30 block">02</span>
                  <h2 className="text-4xl mt-0">Conservation-First in Rwanda</h2>
                  <p>
                    Rwanda continues to lead the way in sustainable tourism. Beyond the gorillas of Volcanoes National Park, the savannahs of Akagera are making a major comeback, proving that conservation and luxury can walk hand-in-hand.
                  </p>
                </div>
              </article>
            </div>

            {/* Sticky Editorial Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div className="p-8 bg-gray-50 rounded-md border border-gray-100">
                  <h4 className=" font-bold text-xl mb-4">Plan Your Journey</h4>
                  <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">
                    Inspired by this story? Our travel specialists can craft a bespoke itinerary based on these featured destinations.
                  </p>
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded py-6 uppercase tracking-widest text-xs font-bold">
                    Start Planning
                  </Button>
                </div>

                <div className="space-y-6">
                  <h4 className="uppercase tracking-widest text-xs font-bold text-gray-400 border-b pb-2">Related Packages</h4>
                  {[1, 2].map((i) => (
                    <div key={i} className="group cursor-pointer flex gap-4">
                      <div className="relative h-20 w-20 shrink-0 rounded-md overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200" alt="Safari" fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className=" font-bold text-sm group-hover:text-amber-700">10-Day Luxury Sky Safari</h5>
                        <p className="text-xs text-gray-500 mt-1">$12,450 /pp</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}

