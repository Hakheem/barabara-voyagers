'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone, Mail, Menu, X, Search, ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Constants ---
const destinations = [
  { name: 'All Destinations', href: '/destinations', description: 'East Africa & Beyond' },
  { name: 'Kenya', href: '/destinations/kenya', description: 'The Legendary Masai Mara' },
  { name: 'Tanzania', href: '/destinations/tanzania', description: 'Beasts of Serengeti' },
  { name: 'Uganda', href: '/destinations/uganda', description: 'Primate Encounters' },
  { name: 'Rwanda', href: '/destinations/rwanda', description: 'Land of a Thousand Hills' },
];

const experienceCategories = [
  { 
    id: 'signature',
    name: 'Signature Experiences', 
    href: '/experiences',
    items: [
      { name: 'The Great Migration', href: '/experiences/great-migration', description: 'Witness the greatest wildlife spectacle' },
      { name: 'Gorilla Trekking', href: '/experiences/gorilla-trekking', description: 'Encounter mountain gorillas' },
      { name: 'Kilimanjaro', href: '/experiences/kilimanjaro', description: 'Climb Africa\'s highest peak' },
      { name: 'Serengeti & Ngorongoro', href: '/experiences/serengeti-ngorongoro', description: 'Endless plains & ancient craters' },
    ]
  },
  { 
    id: 'classic',
    name: 'Classic Destinations', 
    href: '/experiences/destinations',
    items: [
      { name: 'Cape Town', href: '/experiences/cape-town', description: 'Where two oceans meet' },
      { name: 'Okavango Delta', href: '/experiences/okavango-delta', description: 'Africa\'s last Eden' },
      { name: 'Victoria Falls', href: '/experiences/victoria-falls', description: 'The smoke that thunders' },
      { name: 'Zanzibar', href: '/experiences/zanzibar', description: 'Spice Island paradise' },
    ]
  },
  { 
    id: 'safaris',
    name: 'Safari Types', 
    href: '/safaris',
    items: [
      { name: 'Classic Safaris', href: '/safaris/classic', description: 'Timeless wildlife adventures' },
      { name: 'Conservation Safaris', href: '/safaris/conservation', description: 'Travel with purpose' },
      { name: 'Cultural Encounters', href: '/safaris/cultural', description: 'Connect with local communities' },
      { name: 'Family Safaris', href: '/safaris/family', description: 'Adventures for all ages' },
      { name: 'Honeymoon Safaris', href: '/safaris/honeymoon', description: 'Romantic getaways' },
      { name: 'Photography Safaris', href: '/safaris/photography', description: 'Capture the moment' },
      { name: 'Private Safaris', href: '/safaris/private', description: 'Exclusively yours' },
      { name: 'Walking Safaris', href: '/safaris/walking', description: 'On foot in the wild' },
    ]
  },
  { 
    id: 'plan',
    name: 'Plan Your Safari', 
    href: '/plan',
    items: [
      { name: 'First-Time Safari', href: '/plan/first-time-safari', description: 'Everything you need to know' },
      { name: 'How to Plan', href: '/plan/how-to-plan', description: 'Step-by-step guide' },
      { name: 'Safari Costs', href: '/plan/safari-costs', description: 'Budgeting your adventure' },
      { name: 'What to Pack', href: '/plan/what-to-pack', description: 'Essential gear checklist' },
      { name: 'When to Go', href: '/plan/when-to-go', description: 'Seasonal guide' },
      { name: 'FAQ', href: '/plan/faq', description: 'Common questions answered' },
    ]
  },
  { 
    id: 'account',
    name: 'Your Account', 
    href: '/account',
    items: [
      { name: 'My Account', href: '/account', description: 'Manage your profile' },
      { name: 'My Trips', href: '/account/trips', description: 'View your safari bookings' },
      { name: 'Documents', href: '/account/documents', description: 'Travel documents & vouchers' },
      { name: 'Profile', href: '/account/profile', description: 'Personal information' },
    ]
  }
];

const whyBarabara = [
  { name: 'About Us', href: '/about', description: 'The story of Barabara Voyagers' },
  { name: 'The Guardians', href: '/about/our-team', description: 'Meet our expert guides' },
  { name: 'Sustainability', href: '/about/sustainability', description: 'Responsible travel' },
  { name: 'Voyager\'s Journal', href: '/journal', description: 'Stories from the Savannah' },
  { name: 'Guest Testimonials', href: '/testimonials', description: 'Tales from our travelers' },
];

const brochures = [
  { name: 'Our Profile', href: '/pdfs/Our-Profile.pdf' },
  { name: 'Packages', href: '/pdfs/Packages.pdf' },
  { name: 'Booklet', href: '/pdfs/Booklet.pdf' },
  { name: 'Artworks', href: '/pdfs/Artworks.pdf' },
];

// --- Sub-Components ---

function DestinationFlyout({ title, items }: { title: string; items: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] font-bold transition-colors py-6 hover:text-primary">
        {title}
        <ChevronDown className={cn('h-3 w-3 transition-transform duration-300', isOpen && 'rotate-180')} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 w-72 bg-card shadow-2xl z-[60] border-t-[3px] border-primary"
          >
            <div className="py-6">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-3 hover:bg-muted/50 transition-colors group/link"
                >
                  <div className="font-medium title text-gray-900 group-hover/link:text-primary">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                    {item.description}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WhyUsFlyout({ title, items }: { title: string; items: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] font-bold transition-colors py-6 hover:text-primary">
        {title}
        <ChevronDown className={cn('h-3 w-3 transition-transform duration-300', isOpen && 'rotate-180')} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 w-72 bg-card shadow-2xl z-[60] border-t-[3px] border-primary"
          >
            <div className="py-6">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-3 hover:bg-muted/50 transition-colors group/link"
                >
                  <div className="font-medium title text-gray-900 group-hover/link:text-primary">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                    {item.description}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExperienceFlyout({ title, categories }: { title: string; categories: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Reset active category when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setActiveCategory(null);
    }
  }, [isOpen]);
  
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };
  
  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] font-bold transition-colors py-6 hover:text-primary">
        {title}
        <ChevronDown className={cn('h-3 w-3 transition-transform duration-300', isOpen && 'rotate-180')} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, width: 300 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              width: activeCategory ? 600 : 300 
            }}
            exit={{ opacity: 0, y: -10, width: 300 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 bg-card shadow-2xl z-[60] border-t-[3px] border-primary flex overflow-hidden"
          >
            {/* Left Column - Main Categories */}
            <div className="w-[300px] border-r border-border py-6 flex-shrink-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-6 py-3 transition-colors text-left cursor-pointer ",
                    activeCategory === category.id 
                      ? "bg-muted/50 text-primary" 
                      : "hover:bg-muted/30 text-gray-900"
                  )}
                >
                  <span className="font-medium title">{category.name}</span>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-all",
                    activeCategory === category.id ? "opacity-100 translate-x-0" : "opacity-40"
                  )} />
                </button>
              ))}
            </div>

            {/* Right Column - Sub-items  */}
            <AnimatePresence>
              {activeCategory && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-[300px] py-6 px-6 overflow-hidden shrink-0"
                >
                  {categories.map((category) => (
                    category.id === activeCategory && (
                      <div key={category.id} className="space-y-4">
                        {/* View All link - */}
                        <Link
                          href={category.href}
                          className="block group/link"
                        >
                          <div className="font-medium title text-gray-900 group-hover/link:text-primary transition-colors">
                             All {category.name}
                          </div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5 leading-tight">
                            Explore all {category.name.toLowerCase()}
                          </div>
                        </Link>
                        
                        {/* Child Links */}
                        {category.items.map((item: any) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block group/link"
                          >
                            <div className="font-medium title text-gray-900 group-hover/link:text-primary transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5 leading-tight">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BrochureDropdown({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleBrochureClick = (href: string) => {
    window.open(href, '_blank');
    setIsOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="outline"
        size="md"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] font-bold cursor-pointer transition-all duration-200",
          !isScrolled 
            ? "border-white text-white hover:bg-white hover:text-black hover:border-white" 
            : "border-input text-foreground hover:bg-[#111827] hover:text-white"
        )}
      >
        Brochures
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-card shadow-lg z-60 border-t-[3px] border-primary"
          >
            <div className="py-4">
              {brochures.map((brochure) => (
                <button
                  key={brochure.name}
                  onClick={() => handleBrochureClick(brochure.href)}
                  className="w-full px-4 py-3 hover:bg-muted transition-colors text-left cursor-pointer group/item"
                >
                  <div className="font-medium title text-gray-900 group-hover/item:text-primary">
                    {brochure.name}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({ title, items, closeMenu, isExperience = false }: { title: string; items: any[]; closeMenu: () => void; isExperience?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-xl title text-foreground group-hover:text-primary transition-colors">
          {title}
        </span>
        <ChevronDown className={cn("h-5 w-5 text-primary transition-transform", isOpen && "rotate-180")} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              {isExperience ? (
                // Mobile: Click to show sub-items
                <div className="space-y-4">
                  {items.map((category) => (
                    <div key={category.id} className="border-l-2 border-primary/30 pl-4">
                      <button
                        onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span className="text-base title text-primary">{category.name}</span>
                        <ChevronDown className={cn(
                          "h-4 w-4 text-primary transition-transform",
                          activeCategory === category.id && "rotate-180"
                        )} />
                      </button>
                      
                      <AnimatePresence>
                        {activeCategory === category.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-3">
                              <Link
                                href={category.href}
                                className="block group/link"
                                onClick={closeMenu}
                              >
                                <div className="text-sm title text-gray-900 group-hover/link:text-primary transition-colors">
                                  View All {category.name}
                                </div>
                                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                                  Explore all {category.name.toLowerCase()}
                                </div>
                              </Link>
                              {category.items.map((item: any) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block group/link"
                                  onClick={closeMenu}
                                >
                                  <div className="text-sm title text-gray-900 group-hover/link:text-primary transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                                    {item.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              ) : (
                // Destinations and Why Us
                <div className="space-y-1 px-4">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      <span className="title">{item.name}</span>
                      <span className="block text-[10px] uppercase tracking-widest text-muted-foreground/70 mt-0.5">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main Component ---
const LuxuryHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled 
        ? "shadow-md pb-1 bg-background text-foreground" 
        : "py-2 bg-transparent text-white"
    )}>
      <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center h-20 md:h-24 relative">
          
          {/* Logo */}
          <Link href="/" className="relative z-50 lg:mr-6 xl:mr-24 shrink-0">
            <div className="relative h-12 w-28 md:h-16 md:w-44 lg:h-20 lg:w-52 transition-all duration-500">
              <Image src="/logos/logo.svg" alt="Barabara Voyagers" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Main Right Container */}
          <div className="grow flex flex-col justify-center h-full">
            
            {/* Top Row - Contact Info */}
            {!isSearchOpen && (
              <div className={cn(
                "hidden lg:flex items-center justify-end gap-8 text-[10px] tracking-[0.2em] font-medium transition-all duration-500 pt-4 pb-2 border-b",
                isScrolled 
                  ? "text-muted-foreground border-border" 
                  : "text-white/80 border-white/20"
              )}>
                <a href="tel:+255123456789" className={cn(
                  "flex items-center gap-2 hover:text-primary transition-colors duration-300",
                  !isScrolled ? "text-white" : "text-foreground"
                )}>
                  <Phone className="h-3 w-3" /> <span>+255 123 456 789</span>
                </a>
                <a href="mailto:info@barabaravoyagers.com" className={cn(
                  "flex items-center gap-2 hover:text-primary transition-colors duration-300",
                  !isScrolled ? "text-white" : "text-foreground"
                )}>
                  <Mail className="h-3 w-3" /> <span>INFO@BARABARAVOYAGERS.COM</span>
                </a>
              </div>
            )}

            {/* Bottom Row: Navigation - ONLY 3 DROPDOWNS */}
            <div className="flex items-center justify-between">
              <nav className={cn(
                "hidden lg:flex items-center gap-8 grow justify-start transition-opacity duration-300",
                isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              )}>
                <DestinationFlyout title="Destinations" items={destinations} />
                <ExperienceFlyout title="Experiences" categories={experienceCategories} />
                <WhyUsFlyout title="Why Choose Us" items={whyBarabara} />
              </nav>

              <div className="flex items-center gap-4 md:gap-6 ml-auto">
                {/* Search Toggle */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className={cn(
                    "p-2 h-auto hover:bg-white/10", 
                    isSearchOpen && "hidden"
                  )}
                >
                  <Search className={cn(
                    "h-5 w-5 stroke-[1.5] transition-colors duration-300",
                    !isScrolled ? "text-white" : "text-foreground"
                  )} />
                </Button>

                <div className="flex items-center gap-2">
                  {/* Primary CTA */}
                  <Link href="/contact" className="hidden sm:block">
                    <Button size="md" className="uppercase text-[10px] tracking-[0.25em]">
                      Plan Your Safari
                    </Button>
                  </Link>

                  {/* Free Brochures Dropdown */}
                  <div className="hidden lg:block">
                    <BrochureDropdown isScrolled={isScrolled} />
                  </div>
                </div>

                {/* Mobile Menu Toggle */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="lg:hidden p-2 h-auto"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className={cn(
                    "h-7 w-7 transition-colors duration-300",
                    !isScrolled ? "text-white" : "text-foreground"
                  )} />
                </Button>
              </div>
            </div>
          </div>

          {/* Search Bar Overlay */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-background z-60 flex items-center px-4 md:px-12 shadow-xl"
              >
                <div className="flex items-center w-full max-w-5xl mx-auto gap-2 md:gap-4">
                  <Search className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Search adventures..." 
                    className="grow bg-transparent border-none outline-none text-base md:text-xl title text-foreground placeholder:text-muted-foreground/50 min-w-0"
                    autoFocus
                  />
                  <Button variant="primary" size="sm" className="hidden sm:block uppercase text-[10px] tracking-[0.2em]">
                    Search
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)} className="p-2 h-auto">
                    <X className="h-6 w-6 text-foreground" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-background z-[100] lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full p-6 text-foreground">
              <div className="flex justify-between items-center mb-10">
                <div className="h-10 w-28 relative">
                  <Image src="/logos/logo.svg" alt="Logo" fill className="object-contain" />
                </div>
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-8 w-8 text-foreground" />
                </Button>
              </div>

              <nav className="flex flex-col">
                <MobileAccordion title="Destinations" items={destinations} closeMenu={() => setMobileMenuOpen(false)} />
                <MobileAccordion title="Experiences" items={experienceCategories} closeMenu={() => setMobileMenuOpen(false)} isExperience />
                <MobileAccordion title="Why Choose Us" items={whyBarabara} closeMenu={() => setMobileMenuOpen(false)} />
                
                <div className="border-b border-border">
                  <div className="py-6 text-xl title text-foreground border-b-0">
                    Our Brochures
                  </div>
                  <div className="pb-6 grid grid-cols-2 gap-2">
                    {brochures.map((brochure) => (
                      <button
                        key={brochure.name}
                        onClick={() => {
                          window.open(brochure.href, '_blank');
                          setMobileMenuOpen(false);
                        }}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors text-left cursor-pointer"
                      >
                        {brochure.name}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>

              <div className="mt-auto pt-6 pb-6 border-t border-border">
                <div className="flex flex-col gap-4 mb-6">
                  <a 
                    href="tel:+255123456789" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Call Us</div>
                      <div className="text-sm font-medium">+255 123 456 789</div>
                    </div>
                  </a>
                  <a 
                    href="mailto:info@barabaravoyagers.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="h-5 w-5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Email Us</div>
                      <div className="text-sm font-medium">INFO@BARABARAVOYAGERS.COM</div>
                    </div>
                  </a>
                </div>

                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full justify-between uppercase tracking-[0.2em] text-[10px]">
                    Inquire Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default LuxuryHeader;

