import Image from 'next/image';    
import Link from 'next/link';
import { Mail, MapPin, Award, Users, Sparkles, Star, Shield, Phone, Heart, ArrowRight, Compass, Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import SectionHeader from '@/components/layout/SectionHeader';

// TEAM DATA
const teamMembers = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & Safari Director',
    location: 'Arusha, Tanzania',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    bio: "Sarah founded Barabara Voyagers in 1998 after falling in love with East Africa during a backpacking trip. 25+ years later, she's still designing custom safaris and leading our team with the same passion that started it all.",
    specialty: 'Tanzania Northern Circuit, Luxury Safaris, Multi-Country Itineraries',
  },
  {
    name: 'David Kamau',
    role: 'Lead Safari Planner - East Africa',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: "Born and raised in Kenya, David brings insider knowledge of East Africa that only comes from a lifetime in the bush. He's personally explored every park, lodge, and trail we recommend.",
    specialty: 'Kenya Safaris, Great Migration Timing, Family Safaris',
  },
  {
    name: 'Grace Nkunda',
    role: 'Gorilla Trekking Specialist',
    location: 'Kigali, Rwanda',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: "Grace has trekked with gorillas over 200 times and knows the permits, lodges, and logistics better than anyone. She's your go-to expert for Uganda and Rwanda gorilla safaris.",
    specialty: 'Gorilla Trekking, Uganda & Rwanda, Conservation Safaris',
  },
  {
    name: 'Michael Botha',
    role: 'Southern Africa Specialist',
    location: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    bio: 'Michael specializes in South Africa, Botswana, Namibia, and Zimbabwe. His deep relationships with lodge owners and guides ensure you get the best service and positioning.',
    specialty: 'Botswana Okavango, South Africa, Victoria Falls, Self-Drive Safaris',
  },
  {
    name: 'Emily Chen',
    role: 'Honeymoon & Luxury Safari Planner',
    location: 'Zanzibar, Tanzania',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Emily creates unforgettable romantic safaris and luxury experiences. She knows every luxury lodge personally and curates itineraries that exceed expectations.',
    specialty: 'Honeymoons, Luxury Lodges, Beach Extensions, Private Safaris',
  },
  {
    name: 'Joseph Loibon',
    role: 'Head Safari Guide',
    location: 'Serengeti, Tanzania',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Joseph is a certified professional guide with 20+ years experience. His wildlife knowledge is encyclopedic, and his tracking skills are legendary among our guests.',
    specialty: 'Wildlife Tracking, Serengeti, Photography Safaris, Walking Safaris',
  },
];

// WHY OUR TEAM DATA
const teamBenefits = [
  {
    title: 'Personal Service',
    desc: "You'll work with a dedicated safari planner from first inquiry to post-trip follow-up. No call centers, no automated systems. Real people who genuinely care."
  },
  {
    title: 'On-the-Ground Expertise',
    desc: 'Our team lives in Africa. We personally visit every lodge we recommend, maintain relationships with guides, and stay current on conditions.'
  },
  {
    title: 'Honest Advice',
    desc: "We'll tell you if a park is overcrowded, if timing is wrong, or if there's a better option. Your satisfaction matters more than a quick sale."
  },
  {
    title: '24/7 Support',
    desc: "When you're on safari, our local team is available 24/7. Flight delays? Lodge issues? We handle it immediately. You're never alone."
  },
  {
    title: 'Specialized Knowledge',
    desc: 'Each planner has deep expertise in specific regions. Whether it\'s Gorilla trekking or a luxury honeymoon, you get matched with the right expert.'
  },
  {
    title: 'Passion for Africa',
    desc: 'We chose this career because we love Africa. That passion shows in every detail—from lodge selection to those little touches that make safaris magical.'
  }
];

// TESTIMONIALS DATA
const testimonials = [
  {
    quote: "Sarah planned our Tanzania safari and it was PERFECT. She listened to what we wanted, made expert recommendations, and the timing/lodges were spot-on. When we had a flight delay, she rebooked everything seamlessly. Best travel planner we've ever worked with.",
    author: 'Jennifer & Mark Thompson',
    location: 'Tanzania, July 2024'
  },
  {
    quote: "Grace's gorilla trekking expertise was invaluable. She secured permits when we thought it was impossible, recommended the perfect lodge, and her tips prepared us perfectly. Trekking with gorillas was life-changing. Thank you, Grace!",
    author: 'David & Lisa Chen',
    location: 'Uganda & Rwanda, June 2024'
  },
  {
    quote: 'Michael designed an incredible Botswana-Victoria Falls combination for us. The Okavango camps were exquisite, timing was perfect, and his insider knowledge showed everywhere. We felt like VIPs throughout. Already planning our return trip with him!',
    author: 'Robert Johnson',
    location: 'Botswana & Zimbabwe, September 2024'
  }
];

export default function OurTeamPage() {
  return ( 
    <>
   {/* PREMIUM HERO HEADER */}
<section className="relative h-[70vh] md:h-[65vh] lg:h-[85vh] 2xl:h-[75vh] w-full flex items-end overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
      alt="Barabara Voyagers team in Africa"
      fill
      className="object-cover brightness-[0.35]"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
    
    {/* Decorative elements */}
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
  </div>
  
  <div className="relative left-16 bottom-16 z-10">
    <div className="w-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-transparent" />
        <span className="text-amber-400 uppercase tracking-[0.3em] text-xs font-light">
          The Barabara Standard
        </span>
      </div>   
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl title text-white mb-3 leading-[1.1]">
        Meet the Guardians of Your<br />{" "}Safari Dream
      </h1>
      
      <p className="text-xl text-gray-200 font-light max-w-2xl leading-relaxed mb-6">
        Your safari is only as exceptional as the team behind it. Ours is comprised of Africa's finest specialists, each one a curator of once-in-a-lifetime moments.
      </p>
      
      <div className="flex flex-wrap gap-5">
        <Button className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-10 font-light tracking-wider border-none rounded-none group" asChild>
          <Link href="#team" className="flex items-center gap-3">
            Meet the Team
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 h-14 px-10 font-light tracking-wider rounded-none backdrop-blur-sm" asChild>
          <Link href="/contact">Speak to an Expert</Link>
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* TEAM SECTION */}
      <section id="team" className="pt-28 pb-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <span className="text-amber-700 uppercase tracking-[0.3em] text-xs label-luxury  ">
                The Architects of Adventure
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-8 leading-[0.9]">
              Passionate Africa Experts
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-5xl mx-auto leading-relaxed">
              We're not just safari planners, we're Africa fanatics who live and breathe this continent. 
              Every member of our team has spent years exploring Africa's parks, forging relationships, 
              and perfecting the art of the extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-md transition-all duration-500 border border-gray-100/80 hover:border-amber-500/30 bg-white rounded-none">
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5">
                    <span className="text-xs font-light tracking-wider text-gray-900">0{index + 1}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl title text-gray-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-amber-700 font-light text-sm tracking-wide">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-500 mb-5">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <p className="text-xs font-light tracking-wide">{member.location}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 border-l-2 border-amber-500/30 pl-4">
                    {member.bio}
                  </p>
                  
                  <div className="pt-5 border-t border-gray-100">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <p className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">Specialty</p>
                        <p className="text-xs text-gray-600 font-light leading-relaxed">{member.specialty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY OUR TEAM SECTION */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <Sparkles className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>
            
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-6 leading-[0.9]">
              Why Our Team<br />Makes the Difference
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Expertise without ego. Service without script. Welcome to the Barabara standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamBenefits.map((item, index) => (
              <div key={index} className="group relative p-8 bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-md hover:shadow-amber-500/10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-6xl title text-gray-100 group-hover:text-amber-100 transition-colors duration-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="w-12 h-12 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors duration-500">
                    {index === 0 && <Users className="w-5 h-5 text-amber-600" strokeWidth={1.5} />}
                    {index === 1 && <Compass className="w-5 h-5 text-amber-600" strokeWidth={1.5} />}
                    {index === 2 && <Heart className="w-5 h-5 text-amber-600" strokeWidth={1.5} />}
                    {index === 3 && <Phone className="w-5 h-5 text-amber-600" strokeWidth={1.5} />}
                    {index === 4 && <Award className="w-5 h-5 text-amber-600" strokeWidth={1.5} />}
                    {index === 5 && <Star className="w-5 h-5 text-amber-600" strokeWidth={1.5} />}
                  </div>
                </div>
                
                <h3 className="text-2xl title text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="absolute bottom-8 right-8 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-600/30" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/5 to-transparent blur-3xl" />
        
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <Quote className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>
            
            <h2 className="text-5xl md:text-6xl title text-gray-950 mb-6 leading-[0.9]">
              Voices of the Wild
            </h2>
            <p className="text-lg text-gray-600 font-light">
              What our guests say about their journeys with our team.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative p-10 bg-gradient-to-br from-white to-gray-50/50 border-l-4 border-amber-600/30 hover:border-amber-600 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5">
                <div className="flex gap-6">
                  <div className="hidden md:block">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xl md:text-2xl text-gray-800 font-light italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                      <p className="font-medium text-gray-900 text-lg">
                        {testimonial.author}
                      </p>
                      <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-light">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-6 right-6 text-7xl title text-gray-100/50 group-hover:text-amber-100/30 transition-colors duration-500">
                  ❝
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&auto=format&fit=crop&q=80" 
            alt="African sunset" 
            fill 
            className="object-cover brightness-[0.4]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/60 to-gray-950/80" />
          
          {/* Animated decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              <span className="text-amber-400 uppercase tracking-[0.3em] text-xs font-light">
                Join Our Journey
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-amber-500/50 to-transparent" />
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl title text-white mb-8 leading-[0.9] tracking-tight">
              Become Part of<br />Our Story
            </h2>
            
            <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed mb-12">
              Are you an Africa expert with a passion for excellence? We are always looking for dedicated individuals to join our growing family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white h-16 px-12 font-light tracking-wider border-none group relative overflow-hidden"
                asChild
              >
                <Link href="/about/careers" className="flex items-center gap-3">
                  <span className="relative z-10">View Career Opportunities</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 h-16 px-12 font-light tracking-wider backdrop-blur-sm group"
                asChild
              >
                <Link href="/about/why-choose-us" className="flex items-center gap-3">
                  Why Choose Us
                  <Compass className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center gap-2 text-white/60">
                  <Shield className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-light tracking-wider">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-light tracking-wider">Award-Winning Team</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Users className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-light tracking-wider">6,000+ Happy Travelers</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

