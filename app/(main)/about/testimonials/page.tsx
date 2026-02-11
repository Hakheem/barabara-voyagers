import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/layout/SectionHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Guest Testimonials - Safari Reviews | Barabara Voyagers',
  description: 'Read reviews from our satisfied safari guests. Real experiences from Tanzania, Kenya, Uganda, Botswana, and more.',
};

export default function TestimonialsPage() {
  const testimonials = [ 
    {
      name: 'Jennifer & Mark Thompson',
      trip: 'Tanzania Safari',
      date: 'July 2024',
      text: 'Sarah planned our Tanzania safari and it was PERFECT. She listened to what we wanted, made expert recommendations, and the timing/lodges were spot-on. When we had a flight delay, she rebooked everything seamlessly. Best travel planner we\'ve ever worked with.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
    },
    {
      name: 'David & Lisa Chen',
      trip: 'Uganda Gorilla Trekking',
      date: 'June 2024',
      text: 'Grace\'s gorilla trekking expertise was invaluable. She secured permits when we thought it was impossible, recommended the perfect lodge, and her tips prepared us perfectly. Trekking with gorillas was life-changing. Thank you, Grace!',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
    }, 
    {
      name: 'Robert Johnson',
      trip: 'Botswana & Victoria Falls',
      date: 'September 2024',
      text: 'Michael designed an incredible Botswana-Victoria Falls combination for us. The Okavango camps were exquisite, timing was perfect, and his insider knowledge showed everywhere. We felt like VIPs throughout. Already planning our return trip with him!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
  ];

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
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="py-16 border-t border-gray-300 first:border-t-0 flex flex-col md:flex-row gap-12 items-start"
                >
                  {/* Portrait */}
                  <div className="shrink-0 mx-auto md:mx-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-title text-gray-800 leading-snug italic font-light">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    
                    <div className="pt-2">
                      <p className="text-lg font-bold text-gray-900 tracking-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-sm uppercase tracking-[0.2em] text-amber-700 font-semibold mt-1">
                        {testimonial.trip} <span className="mx-2 text-gray-300">•</span> {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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

