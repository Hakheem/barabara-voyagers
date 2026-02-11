'use client';

import { use } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Download, Mail, Printer, Calendar, MapPin, Users, CreditCard, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
// import { formatPrice } from '@/lib/utils';

interface Params {
  slug: string;
}

export default function ConfirmationPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();

  const bookingReference = searchParams.get('reference') || 'BV-XXXXXXX';
  const paymentType = searchParams.get('type') || 'deposit';

  // Mock booking data - in real app, fetch from API using booking reference
  const booking = {
    reference: bookingReference,
    safari: {
      title: 'Tanzania Safari Adventure',
      destination: 'Tanzania',
      duration: '10 Days / 9 Nights',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    },
    dates: {
      start: '2025-08-15',
      end: '2025-08-25',
    },
    travelers: 2,
    pricing: {
      total: 12100,
      depositPaid: paymentType === 'deposit' ? 3630 : 12100,
      balanceDue: paymentType === 'deposit' ? 8470 : 0,
      balanceDueDate: '2025-06-16',
    },
    status: 'CONFIRMED',
    bookedAt: new Date().toISOString(),
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Mock PDF download
    alert('PDF download feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-[15vh] lg:pt-[24vh] ">
      <Container>
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Booking Confirmed.
          </h1>
          <p className="text-xl text-gray-600 ">
            Thank you for booking with Barabara Voyagers
          </p>
        </div>

        {/* Booking Reference */}
        <Card className="p-8 mb-8 text-center bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
          <p className="text-sm text-gray-600 mb-2 ">Your Booking Reference</p>
          <p className="text-4xl font-bold text-amber-900 tracking-wider font-mono">
            {booking.reference}
          </p>
          <p className="text-sm text-gray-600 mt-3 ">
            Please save this reference number for your records
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Next Steps */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Confirmation Email</h3>
                    <p className="text-gray-600 ">
                      You'll receive a confirmation email within the next few minutes with your complete itinerary and booking details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Safari Specialist Contact</h3>
                    <p className="text-gray-600 ">
                      Your personal safari specialist will contact you within 24 hours to finalize details and answer any questions.
                    </p>
                  </div>
                </div>

                {booking.pricing.balanceDue > 0 && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Balance Payment</h3>
                      <p className="text-gray-600 ">
                        Your balance of 999
                         {/* {formatPrice(booking.pricing.balanceDue.toString(), 'USD')} */}
                          is due by{' '}
                        {new Date(booking.pricing.balanceDueDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}. We'll send you a reminder 2 weeks before.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold">
                    {booking.pricing.balanceDue > 0 ? '4' : '3'}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Pre-Trip Information</h3>
                    <p className="text-gray-600 ">
                      We'll send you detailed pre-trip information including packing lists, visa requirements, and travel tips 60 days before departure.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Trip Summary */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Your Trip Summary</h2>

              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <Image
                  src={booking.safari.image}
                  alt={booking.safari.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{booking.safari.title}</h3>
                  <p className="text-gray-600 ">{booking.safari.duration}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-amber-900 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 ">Travel Dates</p>
                      <p className="font-semibold">
                        {new Date(booking.dates.start).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}{' '}
                        -{' '}
                        {new Date(booking.dates.end).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-amber-900 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 ">Destination</p>
                      <p className="font-semibold">{booking.safari.destination}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-amber-900 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 ">Travelers</p>
                      <p className="font-semibold">{booking.travelers} {booking.travelers === 1 ? 'Person' : 'People'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-amber-900 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 ">Payment Status</p>
                      <p className="font-semibold">
                        {booking.pricing.balanceDue > 0 ? 'Deposit Paid' : 'Paid in Full'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Payment Summary */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Payment Summary</h2>

              <div className="space-y-3 ">
                <div className="flex justify-between pb-3 border-b">
                  <span className="text-gray-600">Total Trip Cost</span>
                  {/* <span className="font-semibold">{formatPrice(booking.pricing.total.toString(), 'USD')}</span> */}
                </div>

                <div className="flex justify-between text-green-700">
                  <span>Paid Today</span>
                  <span className="font-semibold">
                    {/* {formatPrice(booking.pricing.depositPaid.toString(), 'USD')} */}
                  </span>
                </div>

                {booking.pricing.balanceDue > 0 && (
                  <div className="flex justify-between pt-3 border-t">
                    <div>
                      <span className="font-medium">Balance Due</span>
                      <p className="text-sm text-gray-600">
                        Due by {new Date(booking.pricing.balanceDueDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <span className="font-bold text-xl">
                      {/* {formatPrice(booking.pricing.balanceDue.toString(), 'USD')} */}
                    </span>
                  </div>
                )}
              </div>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handlePrint} variant="outline" className="flex-1">
                <Printer className="mr-2 h-5 w-5" />
                Print Confirmation
              </Button>
              <Button onClick={handleDownload} variant="outline" className="flex-1">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <a href={`mailto:?subject=Safari Booking Confirmation&body=Booking Reference: ${booking.reference}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Confirmation
                </a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Important Information */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Important Information</h3>
              <div className="space-y-3 text-sm ">
                <div>
                  <p className="font-semibold">Cancellation Policy</p>
                  <p className="text-gray-600">
                    Free cancellation up to 90 days before departure. See our{' '}
                    <Link href="/terms" className="text-amber-900 underline">
                      terms
                    </Link>{' '}
                    for details.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Travel Insurance</p>
                  <p className="text-gray-600">
                    We strongly recommend purchasing comprehensive travel insurance. We can help arrange this for you.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Passport & Visas</p>
                  <p className="text-gray-600">
                    Ensure your passport is valid for at least 6 months beyond your return date. We'll provide visa assistance.
                  </p>
                </div>
              </div>
            </Card>

            {/* Need Help */}
            <Card className="p-6 bg-amber-50 border-amber-200">
              <h3 className="font-bold mb-4">Need Help?</h3>
              <p className="text-sm text-gray-700 mb-4 ">
                Our safari specialists are here to assist you with any questions.
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:+255123456789" className="text-amber-900 hover:underline ">
                    +255 123 456 789
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <a href="mailto:bookings@barabaravoyagers.com" className="text-amber-900 hover:underline ">
                    bookings@barabaravoyagers.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-gray-600 ">Mon-Fri: 8AM - 6PM EAT</p>
                </div>
              </div>
            </Card>

            {/* Explore More */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Explore More Safaris</h3>
              <p className="text-sm text-gray-600 mb-4 ">
                Planning another adventure? Discover more incredible safari experiences.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/destinations">
                  View All Safaris
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>

        {/* Continue Browsing */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-900 hover:underline ">
            ← Return to Homepage
          </Link>
        </div>
      </Container>
    </div>
  );
}
