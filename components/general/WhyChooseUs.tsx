import Image from 'next/image';
import { 
  Shield, 
  Sparkles, 
  Compass, 
  Leaf, 
  Users, 
  Headphones ,UserCheck,Tent,ConciergeBell
} from 'lucide-react';
import Container from '@/components/ui/Container';

const features = [ 
  {
    title: 'Expert Guides',
    description: 'Our experienced guides bring the African wilderness to life with their deep local knowledge and tracking skills.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1534171472159-edb6d1e0b63c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Luxury Lodges',
    description: 'Stay in carefully curated camps that offer extraordinary comfort and design without compromising the immersion.',
    icon: Tent,
    image: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Tailored Journeys',
    description: 'Every safari is bespoke, customized specifically to your pace, preferences, and dreams.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Sustainable Impact',
    description: 'We prioritize responsible travel that actively supports long-term conservation and local communities.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Intimate Groups',
    description: 'True luxury is privacy. Small group sizes ensure personalized attention and exclusive wildlife viewing.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: '24/7 Private Concierge',
    description: 'From your first inquiry to your flight home, our dedicated team provides unwavering, seamless support.',
    icon: ConciergeBell,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-medium block mb-4">
            The Barabara Standard
          </span>
          <h2 className="title text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
           Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            We redefine the safari experience through a lens of prestige, heritage, and unparalleled service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative h-110 w-full group overflow-hidden border-r border-b border-gray-200"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-103"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Text Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <feature.icon className="text-amber-500 mb-4" strokeWidth={2} size={32} />
                  
                  <h3 className="text-2xl md:text-3xl font-semibold title text-white tracking-wide mb-2">
                    {feature.title}
                  </h3>
                  <div className="w-0 group-hover:w-16 h-px bg-amber-500 transition-all duration-500 ease-in-out mb-3"></div>
                  <p className="text-gray-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative Prestige Detail */}
              <div className="absolute top-6 right-6 border-t border-r border-white/20 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

