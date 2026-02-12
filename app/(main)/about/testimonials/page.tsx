import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/layout/SectionHeader';
import Link from 'next/link';
import { getTestimonials } from '@/lib/sanity-queries';

export const metadata = {
  title: 'Guest Testimonials - Safari Reviews | Barabara Voyagers',
  description: 'Read reviews from our satisfied safari guests. Real experiences from Tanzania, Kenya, Uganda, Botswana, and more.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials().catch(() => []);

  return (
    <>
      <SectionHeader
        title=""
        image="/leoleo.jpg"
        height="h-[70vh]"
        overlayOpacity="bg-black/40"
      />

      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl font-title font-semibold text-gray-900 mb-4 italic">
                Guest Chronicles
              </h1>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8" />
              <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                The greatest reward of our quarter-century in the bush is the letters we receive from our returning voyagers.
              </p>
            </div>

            {/* Testimonials List */}
            <div className="flex flex-col">
              {testimonials && testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="py-16 border-t border-gray-300 first:border-t-0 flex flex-col md:flex-row gap-12 items-start"
                  >
                    {/* Content */}
                    <div className="flex-1 space-y-6 text-center md:text-left">
                      <p className="text-2xl md:text-3xl font-title text-gray-800 leading-snug italic font-light">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      
                      <div className="pt-2">
                        <p className="text-lg font-bold text-gray-900 tracking-tight">
                          {testimonial.clientName}
                        </p>
                        <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mt-1">
                          {testimonial.packageName} <span className="mx-2 text-gray-300">•</span> {testimonial.clientLocation} <span className="mx-2 text-gray-300">•</span> {testimonial.tripDate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>No testimonials available yet. Check back soon!</p>
                </div>
              )}
            </div>

            {/* Bottom Accent */}
          <div className="border-t border-gray-100 pt-16 text-center">
  <p className="font-title text-gray-500 italic text-xl mb-6">
    Your own story is waiting to be written.
  </p>
  
  <Link 
    href="/about/our-team" 
    className=" items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-700 hover:text-amber-600 transition-colors group flex flex-col"
  >
    Meet the Experts Behind the Journeys
    <span className="block w-0 h-px bg-amber-600 transition-all group-hover:w-48 hover:mx-auto " />
  </Link>
</div>
          </div>
        </Container>
      </section>
    </>
  );
}

