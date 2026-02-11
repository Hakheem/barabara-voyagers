import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const GrandCTA = () => {
  return (
    <section className="relative h-[750px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.webp" 
        alt="African Sunset"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <Container className="relative z-10 text-center">
        <div className=" mx-auto text-white">
          <span className="label-luxury text-amber-400 mb-4 block">Begin Your Legacy</span>
          <h2 className="title text-4xl md:text-5xl font-bold mb-6">
          Let's Start Your Great Adventure?
          </h2>
          <p className="text-baase text-gray-100 mb-6 font-normal leading-relaxed max-w-xl mx-auto">
          Indulge into the mystical experiences Africa has to offer. The wild, the culture, and the beautiful beaches will make you redefine magical. At Barabara Voyagers, we make this encounter one for the books by providing you with passionate guides who will make you love your safaris even more.

          </p>
          <p className="text-base text-gray-100 mb-10 font-normal leading-relaxed max-w-xl mx-auto">
        We know how hard it is to find the perfect vacation—we've been there! That's why we focus on making sure that every trip is worthwhile. We do this by curating our trips around a specific experience or theme: from wildlife safaris in Kenya to beach vacations. We also offer customized travel itineraries to suit your budget.
          </p>
          <div className="flex items-center justify-center ">
         
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black" asChild>
              <Link href="/destinations">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GrandCTA;

