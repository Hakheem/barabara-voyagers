import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, MapPin, Clock, Sparkles, Shield, Heart, Users, Compass, Award, ArrowRight, Mail, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Careers - Join Our Team | Barabara Voyagers',
  description: 'Join the Barabara Voyagers team. Work in African travel, help plan amazing safaris, and be part of our mission.',
}; 

export default function CareersPage() {
  const openings = [
    {
      title: 'Safari Consultant',
      location: 'Arusha, Tanzania',
      type: 'Full-time',
      description: 'Plan custom safaris for international clients. Requires Africa travel experience and excellent communication skills.',
    },
    {
      title: 'Operations Manager',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description: 'Coordinate safari logistics, manage supplier relationships, and ensure seamless guest experiences.',
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Remote', 
      type: 'Full-time',
      description: 'Manage our digital presence, create content, and attract safari enthusiasts to our brand.',
    },
  ];

  const benefits = [
    {
      title: 'Passionate Team',
      desc: 'Work with Africa enthusiasts who live and breathe safari travel.',
      icon: Heart
    },
    {
      title: 'Make an Impact',
      desc: 'Create unforgettable experiences and support conservation.',
      icon: Shield
    },
    {
      title: 'Travel Benefits',
      desc: 'FAM trips to lodges, parks, and destinations across Africa.',
      icon: Compass
    },
    {
      title: 'Growth Opportunities',
      desc: 'Develop your skills in a growing, dynamic company.',
      icon: Award
    }
  ];

  return (
    <>
      {/* PREMIUM HERO HEADER */}
      <section className="relative h-[70vh] md:h-[65vh] lg:h-[85vh] 2xl:h-[75vh]  w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&auto=format&fit=crop&q=80"
            alt="African safari career"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative left-6 md:left-16 bottom-16 md:bottom-20 z-10">
          <div className="w-full max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="text-amber-400 uppercase tracking-[0.3em] text-xs font-light">
                Join Our Mission
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl title text-white mb-4 leading-[1.1]">
              Shape the Future of<br /> African Travel
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl leading-relaxed mb-6">
              Work with purpose. Help create life-changing experiences and connect people with Africa's magic.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-10 font-light tracking-wider border-none rounded-none group" asChild>
                <Link href="#openings" className="flex items-center gap-3">
                  View Openings
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 h-14 px-10 font-light tracking-wider rounded-none backdrop-blur-sm" asChild>
                <Link href="/contact">Send Your Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US  */}
      <section className="py-28 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
              <Sparkles className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl title text-gray-950 mb-6 leading-[0.9]">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 font-light">
              More than a job. A calling to share Africa's wonders with the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((item, index) => (
              <div key={index} className="group relative p-8 bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-md hover:shadow-amber-500/5">
                <div className="w-14 h-14 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-6 transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl title text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="absolute top-6 right-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-2xl title text-amber-200/50">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CURRENT OPENINGS */}
      <section id="openings" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <Container className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
                <Briefcase className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                <div className="w-12 h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent" />
              </div>
              
              <h2 className="text-4xl md:text-5xl title text-gray-950 mb-6 leading-[0.9]">
                Current Openings
              </h2>
              <p className="text-lg text-gray-600 font-light">
                Join our growing team and help shape extraordinary safari experiences.
              </p>
            </div>

            <div className="space-y-6">
              {openings.map((job, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10 p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-10 h-10 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors duration-500">
                          <span className="text-lg title text-amber-700">0{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl title text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-1.5 text-gray-600">
                              <MapPin className="h-3.5 w-3.5 text-amber-600" strokeWidth={1.5} />
                              <span className="font-light">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-600">
                              <Clock className="h-3.5 w-3.5 text-amber-600" strokeWidth={1.5} />
                              <span className="font-light">{job.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm font-light leading-relaxed ml-14">
                        {job.description}
                      </p>
                    </div>
                    
                    <div className="md:ml-auto">
                      <Button 
                        className="bg-amber-600 hover:bg-amber-700 text-white h-12 px-8 font-light tracking-wider rounded-none group/btn w-full md:w-auto"
                        asChild
                      >
                        <Link href={`/contact?subject=Application: ${job.title}`} className="flex items-center justify-center gap-2">
                          Apply Now
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
              
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* OPEN APPLICATION - PREMIUM */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/50 p-12 md:p-16 text-center">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-600/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 mb-8">
                  <Heart className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-[0.2em] text-amber-700 font-light">
                    Don't See Your Role?
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl title text-gray-950 mb-6 leading-tight">
                  We're Always Looking for<br />Exceptional Talent
                </h3>
                
                <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                  Tell us how you can contribute to Barabara Voyagers. Send your resume and a brief note about your passion for Africa.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-12 font-light tracking-wider rounded-none group"
                    asChild
                  >
                    <Link href="/contact?subject=General Application" className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      Send Your Resume
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-amber-600/30 text-amber-700 hover:text-foreground hover:bg-amber-50 h-14 px-12 font-light tracking-wider rounded-none"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact Recruiting
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

