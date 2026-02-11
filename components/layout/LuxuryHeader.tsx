'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone, Mail, Menu, X, Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

// --- Data Constants ---
const destinations = [
  { name: 'All Destinations', href: '/destinations', description: 'East Africa & Beyond' },
  { name: 'Tanzania', href: '/destinations/tanzania', description: 'Beasts of Serengeti' },
  { name: 'Kenya', href: '/destinations/kenya', description: 'The Legendary Masai Mara' },
  { name: 'Uganda', href: '/destinations/uganda', description: 'Primate Encounters' },
  { name: 'Rwanda', href: '/destinations/rwanda', description: 'Land of a Thousand Hills' },
];

const experiences = [
  { name: 'Tour Categories', href: '/safaris', description: 'All curated adventures' },
  { name: 'Luxury Safaris', href: '/destinations?type=luxury', description: 'Ultimate comfort in the wild' },
  { name: 'Family Safaris', href: '/destinations?type=family', description: 'Adventures for all ages' },
  { name: 'Honeymoon Safaris', href: '/destinations?type=honeymoon', description: 'Romantic getaways' },
  { name: 'Photography Safaris', href: '/destinations?type=photography', description: 'Capture the moment' },
];

const whyBarabara = [
  { name: 'About Us', href: '/about', description: 'The story of Barabara Voyagers' },
  { name: 'The Guardians', href: '/about/our-team', description: 'Meet our expert guides' },
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

function FlyoutMenu({ title, items }: { title: string; items: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] font-bold transition-colors py-6 hover:text-primary">
        {title}
        <ChevronDown className={cn('h-3 w-3 transition-transform duration-300', isOpen && 'rotate-180')} />
      </button>
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2 w-72 bg-card shadow-2xl transition-all duration-300 origin-top z-[60]",
        isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      )}>
        <div className="py-6 border-t-[3px] border-primary text-left">
          {items.map((item) => (
            <Link key={item.name} href={item.href} className="block px-8 py-3 hover:bg-muted transition-colors cursor-pointer group/item">
              <div className="text-sm font-serif text-gray-900 group-hover/item:text-primary">{item.name}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
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
                : "border-input text-foreground hover:bg-[#111827] hover:text-white "
        )}
      >
       Brochures
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card shadow-lg z-60 animate-in fade-in slide-in-from-top-2 duration-200 border-t-[3px] border-primary">
          <div className="py-4">
            {brochures.map((brochure) => (
              <button
                key={brochure.name}
                onClick={() => handleBrochureClick(brochure.href)}
                className="w-full px-4 py-3 hover:bg-muted transition-colors text-left cursor-pointer group/item"
              >
                <div className="text-sm font-serif text-gray-900 group-hover/item:text-primary">{brochure.name}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ title, items, closeMenu }: { title: string; items: any[]; closeMenu: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">{title}</span>
        <ChevronDown className={cn("h-5 w-5 text-primary transition-transform", isOpen && "rotate-180")} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-4" : "max-h-0")}>
        {items.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className="block py-3 pl-4 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- Main Component ---
export default function LuxuryHeader() {
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
      // Base styles for Transparent vs Scrolled
      isScrolled 
        ? "shadow-md pb-1 bg-background text-foreground" 
        : "py-2 bg-transparent text-white"
    )}>
      <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center h-20 md:h-24 relative">
          
          {/* 1. Logo */}
          <Link href="/" className="relative z-50 lg:mr-6 xl:mr-24 shrink-0">
            <div className="relative h-12 w-28 md:h-16 md:w-44 lg:h-20 lg:w-52 transition-all duration-500">
               <Image src="/logos/logo.svg" alt="Barabara Voyagers" fill className="object-contain" priority />
            </div>
          </Link>

          {/* 2. Main Right Container */}
          <div className="grow flex flex-col justify-center h-full">
            
            {/* Top Row */}
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
                  )} >
                  <Mail className="h-3 w-3" /> <span>INFO@BARABARAVOYAGERS.COM</span>
                </a>
              </div>
            )}

            {/* Bottom Row: Navigation */}
            <div className="flex items-center justify-between">
              <nav className={cn(
                "hidden lg:flex items-center gap-8 grow justify-start transition-opacity duration-300",
                isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              )}>
                <FlyoutMenu title="Destinations" items={destinations} />
                <FlyoutMenu title="Experiences" items={experiences} />
                {/* <FlyoutMenu title="Why Barabara Voyagers" items={whyBarabara} /> */}
                <FlyoutMenu title="Why Choose Us" items={whyBarabara} />

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
                  {/* UPDATED: Search Icon Color Logic */}
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
                   {/* UPDATED: Menu Icon Color Logic */}
                  <Menu className={cn(
                    "h-7 w-7 transition-colors duration-300",
                    !isScrolled ? "text-white" : "text-foreground"
                  )} />
                </Button>
              </div>
            </div>
          </div>

          {/* 3. Search Bar Overlay */}
          {isSearchOpen && (
            <div className="absolute inset-0 bg-background z-60 flex items-center px-4 md:px-12 animate-in fade-in slide-in-from-top duration-300 shadow-xl">
              <div className="flex items-center w-full max-w-5xl mx-auto gap-2 md:gap-4">
                <Search className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search adventures..." 
                  className="grow bg-transparent border-none outline-none text-base md:text-xl font-serif text-foreground placeholder:text-muted-foreground/50 min-w-0"
                  autoFocus
                />
                <Button variant="primary" size="sm" className="hidden sm:block uppercase text-[10px] tracking-[0.2em]">
                  Search
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)} className="p-2 h-auto">
                  <X className="h-6 w-6 text-foreground" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-background z-[100] transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Mobile Menu Content always uses standard colors (dark text on white) for readability */}
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
            <MobileAccordion title="Experiences" items={experiences} closeMenu={() => setMobileMenuOpen(false)} />
            <MobileAccordion title="Why Barabara" items={whyBarabara} closeMenu={() => setMobileMenuOpen(false)} />
            
            <div className="border-b border-border">
              <div className="py-6 text-xl font-serif text-foreground border-b-0">
               Our Brochures
              </div>
              <div className="pb-4 pl-4">
                {brochures.map((brochure) => (
                  <button
                    key={brochure.name}
                    onClick={() => window.open(brochure.href, '_blank')}
                    className="w-full py-2 text-sm text-muted-foreground hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    {brochure.name}
                  </button>
                ))}
              </div>
            </div>
            
            <Link href="/contact" className="py-6 text-xl font-serif text-foreground border-b border-border hover:text-primary transition-colors cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
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
      </div>
    </header>
  );
}
