'use client';

import { useState, use } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { User, ChevronRight, ChevronLeft, Plus, Trash2, AlertCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import type { TravelerInfo } from '@/types/booking';

interface Params {
  slug: string;
}

export default function TravelersPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();

  const numberOfTravelers = parseInt(searchParams.get('travelers') || '2');
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';

  // Initialize travelers array
  const [travelers, setTravelers] = useState<TravelerInfo[]>(
    Array.from({ length: numberOfTravelers }, (_, index) => ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      passportNumber: '',
      passportExpiry: '',
      passportCountry: '',
      nationality: '',
      dietaryRequirements: '',
      medicalInfo: '',
      roomPreference: 'Double',
      isPrimary: index === 0,
      emergencyName: '',
      emergencyPhone: '',
      emergencyRelation: '',
    }))
  );

  const [errors, setErrors] = useState<string[]>([]);

  // Mock safari data
  const safari = {
    id: '1',
    title: 'Tanzania Safari Adventure',
    slug: resolvedParams.slug,
    destination: 'Tanzania',
    duration: 10,
    basePrice: 5500,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
  };

  const updateTraveler = (index: number, field: keyof TravelerInfo, value: any) => {
    const newTravelers = [...travelers];
    newTravelers[index] = { ...newTravelers[index], [field]: value };
    setTravelers(newTravelers);
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];

    travelers.forEach((traveler, index) => {
      if (!traveler.firstName) newErrors.push(`Traveler ${index + 1}: First name required`);
      if (!traveler.lastName) newErrors.push(`Traveler ${index + 1}: Last name required`);
      if (!traveler.email) newErrors.push(`Traveler ${index + 1}: Email required`);
      if (!traveler.email.includes('@')) newErrors.push(`Traveler ${index + 1}: Valid email required`);
      if (traveler.isPrimary && !traveler.phone) newErrors.push(`Primary traveler: Phone number required`);
    });

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed to payment
      const queryParams = new URLSearchParams({
        startDate,
        endDate,
        travelers: numberOfTravelers.toString(),
        travelersData: JSON.stringify(travelers),
      });
      window.location.href = `/book/${safari.slug}/payment?${queryParams}`;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalPrice = safari.basePrice * numberOfTravelers;

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
                      index + 1 === 2
                        ? 'bg-amber-900 text-white'
                        : index + 1 < 2
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm mt-2 font-lato">{label}</span>
                </div>
                {index < 3 && (
                  <div
                    className={`w-24 h-1 mx-4 ${index < 1 ? 'bg-green-600' : 'bg-gray-300'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <Card className="p-4 mb-6 bg-red-50 border-red-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-900 mb-2">Please fix the following errors:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-800 font-lato">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Traveler Forms */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {travelers.map((traveler, index) => (
                <Card key={index} className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <User className="h-6 w-6 text-amber-900" />
                      Traveler {index + 1}
                      {traveler.isPrimary && (
                        <span className="text-sm bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-lato">
                          Primary Contact
                        </span>
                      )}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {/* Personal Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={traveler.firstName}
                          onChange={(e) => updateTraveler(index, 'firstName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={traveler.lastName}
                          onChange={(e) => updateTraveler(index, 'lastName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={traveler.email}
                          onChange={(e) => updateTraveler(index, 'email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number {traveler.isPrimary && '*'}
                        </label>
                        <input
                          type="tel"
                          required={traveler.isPrimary}
                          value={traveler.phone}
                          onChange={(e) => updateTraveler(index, 'phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          value={traveler.dateOfBirth}
                          onChange={(e) => updateTraveler(index, 'dateOfBirth', e.target.value)}
                          max={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nationality
                        </label>
                        <input
                          type="text"
                          value={traveler.nationality}
                          onChange={(e) => updateTraveler(index, 'nationality', e.target.value)}
                          placeholder="e.g., American"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        />
                      </div>
                    </div>

                    {/* Passport Information */}
                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-3">Passport Information</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Passport Number
                          </label>
                          <input
                            type="text"
                            value={traveler.passportNumber}
                            onChange={(e) => updateTraveler(index, 'passportNumber', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="date"
                            value={traveler.passportExpiry}
                            onChange={(e) => updateTraveler(index, 'passportExpiry', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Issuing Country
                          </label>
                          <input
                            type="text"
                            value={traveler.passportCountry}
                            onChange={(e) => updateTraveler(index, 'passportCountry', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Room Preference
                        </label>
                        <select
                          value={traveler.roomPreference}
                          onChange={(e) => updateTraveler(index, 'roomPreference', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        >
                          <option value="Single">Single Room</option>
                          <option value="Double">Double Room</option>
                          <option value="Twin">Twin Beds</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Dietary Requirements
                        </label>
                        <input
                          type="text"
                          value={traveler.dietaryRequirements}
                          onChange={(e) => updateTraveler(index, 'dietaryRequirements', e.target.value)}
                          placeholder="e.g., Vegetarian, Gluten-free"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Medical Information / Allergies
                      </label>
                      <textarea
                        value={traveler.medicalInfo}
                        onChange={(e) => updateTraveler(index, 'medicalInfo', e.target.value)}
                        rows={2}
                        placeholder="Any medical conditions or allergies we should be aware of"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                      />
                    </div>

                    {/* Emergency Contact */}
                    {traveler.isPrimary && (
                      <div className="pt-4 border-t">
                        <h3 className="font-semibold mb-3">Emergency Contact</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Contact Name
                            </label>
                            <input
                              type="text"
                              value={traveler.emergencyName}
                              onChange={(e) => updateTraveler(index, 'emergencyName', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Contact Phone
                            </label>
                            <input
                              type="tel"
                              value={traveler.emergencyPhone}
                              onChange={(e) => updateTraveler(index, 'emergencyPhone', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Relationship
                            </label>
                            <input
                              type="text"
                              value={traveler.emergencyRelation}
                              onChange={(e) => updateTraveler(index, 'emergencyRelation', e.target.value)}
                              placeholder="e.g., Spouse, Parent"
                              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}

              <div className="flex items-center justify-between pt-6">
                <Link
                  href={`/book/${safari.slug}?${searchParams.toString()}`}
                  className="flex items-center gap-2 text-amber-900 hover:underline font-lato"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Back to details
                </Link>
                <Button type="submit" size="lg">
                  Continue to Payment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="p-6 sticky lg:top-32 top-24">
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

              <div className="border-t border-b py-4 space-y-2 font-lato text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Travel Dates</span>
                  <span className="font-medium">
                    {startDate && new Date(startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    {' - '}
                    {endDate && new Date(endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travelers</span>
                  <span className="font-medium">{numberOfTravelers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per person</span>
                  {/* <span className="font-medium">{formatPrice(safari.basePrice.toString(), 'USD')}</span> */}
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold">Estimated Total</span>
                <span className="text-2xl font-bold text-amber-900">
                  {/* {formatPrice(totalPrice.toString(), 'USD')} */}
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-2 font-lato">
                * Includes taxes & fees. Final price on next step.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
