'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: '', 
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', package: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Shared input class for consistency
  const inputClasses = "w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg outline-none transition-all focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white placeholder:text-stone-400";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920"
          alt="Contact Us"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <Container className="relative z-10 text-center text-white">
          <span className="inline-block lg:mt-[30vh] px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-amber-600 rounded-full">
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Get in <span className="text-amber-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200 font-light">
            Have questions about our expeditions? Our safari specialists are ready to help you craft the perfect itinerary.
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">Send Us a Message</h2>
                <p className="text-stone-500">Fields marked with an asterisk (*) are required.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-stone-700 ml-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-stone-700 ml-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-stone-700 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+255..."
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="package" className="text-sm font-semibold text-stone-700 ml-1">Interested Package</label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select a package</option>
                      <option value="tanzania-safari">Tanzania Safari Adventure</option>
                      <option value="kenya-luxury">Kenya Luxury Safari</option>
                      <option value="uganda-gorilla">Uganda Gorilla Trekking</option>
                      <option value="custom">Custom Safari</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-stone-700 ml-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your dream safari..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <p className="text-sm font-medium">Thank you! Our team will reach out within 24 hours.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-lg text-red-800 animate-in fade-in">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-sm font-medium">Something went wrong. Please try again later.</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={status === 'loading'} 
                  className="w-full md:w-auto px-12 py-6 bg-amber-600 hover:bg-amber-700 text-white transition-all active:scale-[0.98]"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Inquiry <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-8 lg:pl-10 lg:border-l border-stone-100">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-stone-900 mb-6">Contact Information</h2>
                
                <div className="grid gap-4">
                  {[
                    { icon: Phone, title: 'Phone', lines: ['+255 123 456 789', '+255 987 654 321'], color: 'text-blue-600' },
                    { icon: Mail, title: 'Email', lines: ['info@barabaravoyagers.com', 'bookings@barabaravoyagers.com'], color: 'text-rose-600' },
                    { icon: MapPin, title: 'Office', lines: ['Arusha, Tanzania', 'East Africa'], color: 'text-emerald-600' }
                  ].map((item, idx) => (
                    <Card key={idx} className="p-5 border-none bg-stone-50 hover:bg-white hover:shadow-md hover:shadow-stone-200/50 transition-all duration-300 group">
                      <div className="flex items-start gap-5">
                        <div className={`p-3 rounded-xl bg-white shadow-sm transition-colors group-hover:bg-stone-900 group-hover:text-white`}>
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-stone-900 text-lg mb-1">{item.title}</h3>
                          {item.lines.map((line, i) => (
                            <p key={i} className="text-stone-600 font-medium">{line}</p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-stone-900 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Clock className="h-24 w-24" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 text-amber-400">
                    <Clock className="h-5 w-5" />
                    <h3 className="font-bold uppercase tracking-wider text-sm">Office Hours</h3>
                  </div>
                  <div className="space-y-3 border-b border-white/10 pb-6 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-400">Mon - Fri</span>
                      <span className="font-semibold text-stone-100 text-sm font-mono">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-400">Saturday</span>
                      <span className="font-semibold text-stone-100 text-sm font-mono">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-400">Sunday</span>
                      <span className="font-semibold text-amber-400 text-xs px-2 py-0.5 border border-amber-400/30 rounded">CLOSED</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-400 italic">
                    <span className="text-amber-400 font-bold mr-1">Note:</span>
                    Emergency support available 24/7 for travelers currently on safari.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

