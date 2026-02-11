'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const destinations = [
  { name: 'Tanzania', href: '/destinations/tanzania', desc: 'Serengeti & Ngorongoro' },
  { name: 'Kenya', href: '/destinations/kenya', desc: 'Masai Mara & Samburu' },
  { name: 'Uganda', href: '/destinations/uganda', desc: 'Gorilla Trekking' },
  { name: 'Rwanda', href: '/destinations/rwanda', desc: 'Mountain Gorillas' },
  { name: 'Botswana', href: '/destinations/botswana', desc: 'Okavango Delta' },
  { name: 'South Africa', href: '/destinations/south-africa', desc: 'Kruger & Cape Town' },
  { name: 'Namibia', href: '/destinations/namibia', desc: 'Desert & Wildlife' },
  { name: 'Zimbabwe', href: '/destinations/zimbabwe', desc: 'Victoria Falls' },
  { name: 'Zambia', href: '/destinations/zambia', desc: 'South Luangwa' },
  { name: 'Morocco', href: '/destinations/morocco', desc: 'Sahara & Cities' },
]; 

const safariTypes = [
  { name: 'Classic Safari', href: '/safaris/classic', desc: 'Traditional game drives' },
  { name: 'Private Safari', href: '/safaris/private', desc: 'Exclusive experiences' },
  { name: 'Family Safari', href: '/safaris/family', desc: 'Kid-friendly adventures' },
  { name: 'Honeymoon Safari', href: '/safaris/honeymoon', desc: 'Romantic getaways' },
  { name: 'Photography Safari', href: '/safaris/photography', desc: 'For photographers' },
  { name: 'Walking Safari', href: '/safaris/walking', desc: 'On-foot experiences' },
  { name: 'Cultural Safari', href: '/safaris/cultural', desc: 'Meet local communities' },
  { name: 'Conservation Safari', href: '/safaris/conservation', desc: 'Wildlife protection' },
  { name: 'Multi-Country', href: '/destinations/multi-country', desc: 'Combine destinations' },
];

const experiences = [
  { name: 'Gorilla Trekking', href: '/experiences/gorilla-trekking', desc: 'Uganda & Rwanda' },
  { name: 'Great Migration', href: '/experiences/great-migration', desc: 'Wildebeest migration' },
  { name: 'Victoria Falls', href: '/experiences/victoria-falls', desc: 'Natural wonder' },
  { name: 'Okavango Delta', href: '/experiences/okavango-delta', desc: 'Mokoro safaris' },
  { name: 'Serengeti & Ngorongoro', href: '/experiences/serengeti-ngorongoro', desc: 'Classic Tanzania' },
  { name: 'Kilimanjaro', href: '/experiences/kilimanjaro', desc: 'Mountain climbing' },
  { name: 'Zanzibar', href: '/experiences/zanzibar', desc: 'Beach paradise' },
  { name: 'Cape Town', href: '/experiences/cape-town', desc: 'City & wine country' },
];

const planning = [
  { name: 'How to Plan', href: '/plan/how-to-plan', desc: 'Step-by-step guide' },
  { name: 'When to Go', href: '/plan/when-to-go', desc: 'Best times to visit' },
  { name: 'What to Pack', href: '/plan/what-to-pack', desc: 'Packing lists' },
  { name: 'Safari Costs', href: '/plan/safari-costs', desc: 'Budget planning' },
  { name: 'Safari FAQ', href: '/plan/faq', desc: '30+ common questions' },
  { name: 'First-Time Safari', href: '/plan/first-time-safari', desc: 'First-timer tips' },
];

const about = [
  { name: 'Our Story', href: '/about', desc: '25+ years in Africa' },
  { name: 'Why Choose Us', href: '/about/why-choose-us', desc: 'What makes us different' },
  { name: 'Our Team', href: '/about/our-team', desc: 'Meet the experts' },
  { name: 'Sustainability', href: '/about/sustainability', desc: 'Our commitments' },
  { name: 'Testimonials', href: '/about/testimonials', desc: 'Guest reviews' },
  { name: 'Careers', href: '/about/careers', desc: 'Join our team' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-5">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-amber-700">
              Barabara Voyagers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="ml-10 hidden lg:flex lg:items-center lg:space-x-6">
            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('destinations')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">
                Destinations
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'destinations' && (
                <div className="absolute left-0 mt-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.name}
                        href={dest.href}
                        className="group block"
                      >
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-600">
                          {dest.name}
                        </p>
                        <p className="text-xs text-gray-500">{dest.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Safari Types Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('safaris')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">
                Safari Types
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'safaris' && (
                <div className="absolute left-0 mt-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {safariTypes.map((safari) => (
                      <Link
                        key={safari.name}
                        href={safari.href}
                        className="group block"
                      >
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-600">
                          {safari.name}
                        </p>
                        <p className="text-xs text-gray-500">{safari.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Experiences Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('experiences')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">
                Experiences
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'experiences' && (
                <div className="absolute left-0 mt-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                  <div className="space-y-3">
                    {experiences.map((exp) => (
                      <Link
                        key={exp.name}
                        href={exp.href}
                        className="group block"
                      >
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-600">
                          {exp.name}
                        </p>
                        <p className="text-xs text-gray-500">{exp.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Planning Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('planning')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">
                Plan Your Safari
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'planning' && (
                <div className="absolute left-0 mt-4 w-72 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                  <div className="space-y-3">
                    {planning.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group block"
                      >
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-600">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute left-0 mt-4 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                  <div className="space-y-3">
                    {about.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group block"
                      >
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-600">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/journal"
              className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              Journal
            </Link>

            <Link
              href="/gallery"
              className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              Gallery
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="ml-auto hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/account"
              className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors flex items-center"
            >
              <User className="h-4 w-4 mr-1" />
              My Account
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-md border border-transparent bg-amber-600 px-5 py-2 text-sm font-medium text-white hover:bg-amber-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold text-amber-700">
                Barabara Voyagers
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/destinations"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Destinations
                  </Link>
                  <Link
                    href="/safaris"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Safari Types
                  </Link>
                  <Link
                    href="/plan"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Plan Your Safari
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/journal"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Journal
                  </Link>
                  <Link
                    href="/gallery"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/account"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Account
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="block rounded-md bg-amber-600 px-6 py-2.5 text-center text-base font-medium text-white hover:bg-amber-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
