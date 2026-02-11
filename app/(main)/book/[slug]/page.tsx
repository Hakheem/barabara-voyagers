'use client';

import { useState } from 'react';
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, ChevronRight, Info } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface Params {
  slug: string;
} 

export default function BookSafariPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = use(params);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    numberOfTravelers: 2,
    flexibleDates: false,
  });

  // Mock safari data - replace with actual API call
  const safari = {
    id: '1',
    title: 'Tanzania Safari Adventure',
    slug: resolvedParams.slug,
    destination: 'Tanzania',
    duration: 10,
    basePrice: 5500,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Proceed to traveler information
    window.location.href = `/book/${safari.slug}/travelers?${new URLSearchParams({
      startDate: formData.startDate,
      endDate: formData.endDate,
      travelers: formData.numberOfTravelers.toString(),
    })}`;
  };

  const totalPrice = safari.basePrice * formData.numberOfTravelers;

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-[15vh] lg:pt-[24vh] ">
      <Container>
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {['Details', 'Travelers', 'Payment', 'Confirmation'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      index + 1 === step
                        ? 'bg-amber-900 text-white'
                        : index + 1 < step
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm mt-2 font-lato">{label}</span>
                </div>
                {index < 3 && (
                  <div className="w-24 h-1 bg-gray-300 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h1 className="text-3xl font-bold mb-6">Book Your Safari</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Travel Dates */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Calendar className="inline h-5 w-5 mr-2" />
                    When would you like to travel?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Start Date</label>
                      <input
                        type="date"
                        required
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        min={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">End Date</label>
                      <input
                        type="date"
                        required
                        value={formData.endDate}
                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                        min={formData.startDate || new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                      />
                    </div>
                  </div>
                  <label className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      checked={formData.flexibleDates}
                      onChange={(e) => setFormData({ ...formData, flexibleDates: e.target.checked })}
                      className="w-4 h-4 text-amber-900 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600 font-lato">My dates are flexible</span>
                  </label>
                </div>

                {/* Number of Travelers */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Users className="inline h-5 w-5 mr-2" />
                    How many travelers?
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, numberOfTravelers: Math.max(1, formData.numberOfTravelers - 1) })}
                      className="w-12 h-12 rounded-full border-2 border-amber-900 text-amber-900 font-bold hover:bg-amber-900 hover:text-white transition-colors"
                    >
                      −
                    </button>
                    <span className="text-2xl font-bold w-16 text-center">{formData.numberOfTravelers}</span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, numberOfTravelers: Math.min(20, formData.numberOfTravelers + 1) })}
                      className="w-12 h-12 rounded-full border-2 border-amber-900 text-amber-900 font-bold hover:bg-amber-900 hover:text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 font-lato">Maximum 20 travelers per booking</p>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Any dietary requirements, room preferences, or special occasions we should know about?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900 font-lato">
                      <p className="font-semibold mb-1">Booking Policy</p>
                      <p>Bookings must be made at least 30 days in advance. A 30% deposit is required to confirm your reservation. Balance due 60 days before departure.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <Link href={`/destinations/${safari.slug}`} className="text-amber-900 hover:underline font-lato">
                    ← Back to safari details
                  </Link>
                  <Button type="submit" size="lg">
                    Continue to Traveler Info
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Safari Summary */}
          <div>
            <Card className="p-6 sticky top-24 lg:top-32">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={safari.image}
                  alt={safari.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{safari.title}</h3>
              <p className="text-gray-600 mb-4 font-lato">{safari.destination} • {safari.duration} Days</p>

              <div className="border-t border-b py-4 space-y-3 font-lato">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price (per person)</span>
                  {/* <span className="font-semibold">{formatPrice(safari.basePrice.toString(), 'USD')}</span> */}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of Travelers</span>
                  <span className="font-semibold">× {formData.numberOfTravelers}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold">Estimated Total</span>
                <span className="text-2xl font-bold text-amber-900">
                  {/* {formatPrice(totalPrice.toString(), 'USD')} */}
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-2 font-lato">
                * Final price calculated on next step (includes taxes & fees)
              </p>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-semibold mb-2">Need help?</p>
                <p className="text-sm text-gray-600 mb-3 font-lato">Speak with a safari specialist</p>
                <a href="tel:+255123456789" className="text-amber-900 hover:underline font-lato">
                  +255 123 456 789
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
