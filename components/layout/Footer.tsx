import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const navigation = {
  destinations: [
    { name: 'Tanzania', href: '/destinations?country=tanzania' },
    { name: 'Kenya', href: '/destinations?country=kenya' },
    { name: 'Uganda', href: '/destinations?country=uganda' },
    { name: 'Rwanda', href: '/destinations?country=rwanda' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about/our-team' }, 
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Travel Journal', href: '/journal' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Safari Guide', href: '/journal?category=safari-guide' },
    { name: 'FAQ', href: '/faq' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
  ],
}; 



export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="relative h-40 w-48">
              <Image 
                src="/logos/footer.svg" 
                alt="Barabara Voyagers"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Creating unforgettable African safari experiences with personalized service and attention to detail.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Destinations</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.destinations.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-amber-500 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 sm:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-amber-500 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FIXED SECTION: Resources & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-amber-500 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 sm:mt-0 min-w-0"> {/* Added min-w-0 to allow content to shrink/wrap */}
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                    <a 
                      href="tel:+255123456789" 
                      className="text-sm leading-6 text-gray-300 hover:text-amber-500 transition-colors duration-300"
                    >
                      +255 123 456 789
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                    <div className="min-w-0 flex-1"> {/* Wrapper to contain the wrapping text */}
                      <a 
                        href="mailto:info@barabaravoyagers.com" 
                        className="text-sm leading-6 text-gray-300 hover:text-amber-500 transition-colors duration-300 break-words lg:break-normal block"
                      >
                        info@barabaravoyagers.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                    <span className="text-sm leading-6 text-gray-300">
                      Arusha, Tanzania
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-white/10 pt-8 sm:mt-12 lg:mt-20">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Barabara Voyagers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

