'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users, Mail, Phone, MapPin, DollarSign, CreditCard, FileText, Download, Send, Edit, CheckCircle, XCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';

// Mock data - in production this would come from the database
const getMockBooking = (id: string) => ({
  id,
  bookingReference: 'BV-KL8X9Q2M-A7B3',
  status: 'CONFIRMED',
  paymentStatus: 'DEPOSIT_PAID',
  createdAt: '2025-01-15T10:30:00Z',
  safari: {
    title: 'Classic Kenya & Tanzania Explorer',
    slug: 'classic-kenya-tanzania',
    duration: '12 Days / 11 Nights',
    basePrice: 4800,
  },
  dates: {
    startDate: '2025-08-15',
    endDate: '2025-08-27',
  },
  travelers: [
    {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@email.com',
      phone: '+1 555-0123',
      dateOfBirth: '1985-03-15',
      passportNumber: 'AB123456',
      passportExpiry: '2028-03-15',
      passportCountry: 'USA',
      nationality: 'American',
      dietaryRequirements: 'None',
      medicalInfo: 'No medical conditions',
      roomPreference: 'King bed',
      isPrimary: true,
      emergencyName: 'Jane Smith',
      emergencyPhone: '+1 555-0124',
      emergencyRelation: 'Spouse',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      phone: '+1 555-0124',
      dateOfBirth: '1987-07-22',
      passportNumber: 'AB123457',
      passportExpiry: '2027-07-22',
      passportCountry: 'USA',
      nationality: 'American',
      dietaryRequirements: 'Vegetarian',
      medicalInfo: 'None',
      roomPreference: 'King bed',
      isPrimary: false,
    },
  ],
  numberOfTravelers: 2,
  pricing: {
    basePrice: 4800,
    subtotal: 9600,
    taxes: 960,
    fees: 100,
    total: 10660,
    depositAmount: 3198,
    depositPaid: true,
    depositPaidDate: '2025-01-15T14:22:00Z',
    balanceDue: 7462,
    balanceDueDate: '2025-07-15',
  },
  payments: [
    {
      id: '1',
      amount: 3198,
      method: 'Credit Card',
      status: 'COMPLETED',
      type: 'DEPOSIT',
      date: '2025-01-15T14:22:00Z',
      cardLast4: '4242',
      transactionId: 'ch_3abc123def456',
    },
  ],
  specialRequests: 'Window seats for all game drives. Celebrating anniversary - please arrange special dinner if possible.',
  notes: 'VIP clients - previous safari with us in 2023. Excellent feedback.',
  communication: [
    {
      id: '1',
      type: 'EMAIL',
      subject: 'Booking Confirmation',
      date: '2025-01-15T10:35:00Z',
      status: 'SENT',
    },
    {
      id: '2',
      type: 'EMAIL',
      subject: 'Payment Received - Deposit',
      date: '2025-01-15T14:25:00Z',
      status: 'SENT',
    },
  ],
});

export default function AdminBookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const booking = getMockBooking(id);

  const getStatusBadge = (status: string) => {
    const styles = {
      PENDING: 'bg-yellow-100 text-yellow-800',
      CONFIRMED: 'bg-green-100 text-green-800',
      COMPLETED: 'bg-blue-100 text-blue-800',
      CANCELLED: 'bg-red-100 text-red-800',
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  const getPaymentBadge = (status: string) => {
    const styles = {
      PENDING: 'bg-red-100 text-red-800',
      DEPOSIT_PAID: 'bg-yellow-100 text-yellow-800',
      PAID_IN_FULL: 'bg-green-100 text-green-800',
      REFUNDED: 'bg-gray-100 text-gray-800',
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/bookings"
            className="inline-flex items-center gap-2 text-amber-900 hover:text-amber-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Bookings
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{booking.bookingReference}</h1>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusBadge(booking.status)}`}>
                  {booking.status}
                </span>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getPaymentBadge(booking.paymentStatus)}`}>
                  {booking.paymentStatus.replace('_', ' ')}
                </span>
                <span className="text-sm text-gray-600">
                  Created {formatDate(booking.createdAt)}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm">
                <Send className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Booking
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Safari Details */}
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Safari Details</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{booking.safari.title}</h3>
                    <p className="text-gray-600">{booking.safari.duration}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Start Date</p>
                        <p className="font-medium">{formatDate(booking.dates.startDate)}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">End Date</p>
                        <p className="font-medium">{formatDate(booking.dates.endDate)}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Number of Travelers</p>
                        <p className="font-medium">{booking.numberOfTravelers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Travelers */}
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Travelers Information</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {booking.travelers.map((traveler, index) => (
                    <div key={index} className="pb-6 border-b last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-semibold">
                          {traveler.firstName} {traveler.lastName}
                        </h3>
                        {traveler.isPrimary && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                            Primary Contact
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <Mail className="h-4 w-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-600">Email</p>
                            <p className="font-medium">{traveler.email}</p>
                          </div>
                        </div>
                        {traveler.phone && (
                          <div className="flex items-start gap-2">
                            <Phone className="h-4 w-4 text-gray-400 mt-0.5" />
                            <div>
                              <p className="text-gray-600">Phone</p>
                              <p className="font-medium">{traveler.phone}</p>
                            </div>
                          </div>
                        )}
                        <div>
                          <p className="text-gray-600">Date of Birth</p>
                          <p className="font-medium">{traveler.dateOfBirth ? formatDate(traveler.dateOfBirth) : 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Nationality</p>
                          <p className="font-medium">{traveler.nationality || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Passport Number</p>
                          <p className="font-medium">{traveler.passportNumber || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Passport Expiry</p>
                          <p className="font-medium">{traveler.passportExpiry ? formatDate(traveler.passportExpiry) : 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Dietary Requirements</p>
                          <p className="font-medium">{traveler.dietaryRequirements || 'None'}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Room Preference</p>
                          <p className="font-medium">{traveler.roomPreference || 'N/A'}</p>
                        </div>
                      </div>

                      {traveler.isPrimary && traveler.emergencyName && (
                        <div className="mt-4 p-4 bg-red-50 rounded-lg">
                          <p className="text-sm font-semibold text-red-900 mb-2">Emergency Contact</p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">Name</p>
                              <p className="font-medium">{traveler.emergencyName}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Phone</p>
                              <p className="font-medium">{traveler.emergencyPhone}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Relation</p>
                              <p className="font-medium">{traveler.emergencyRelation}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Requests & Notes */}
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Additional Information</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {booking.specialRequests && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Special Requests</h3>
                      <p className="text-gray-700 text-sm bg-amber-50 p-3 rounded">
                        {booking.specialRequests}
                      </p>
                    </div>
                  )}
                  {booking.notes && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Internal Notes</h3>
                      <p className="text-gray-700 text-sm bg-blue-50 p-3 rounded">
                        {booking.notes}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Payment Summary */}
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Payment Summary</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-medium">${booking.pricing.basePrice.toLocaleString()} × {booking.numberOfTravelers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${booking.pricing.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxes (10%)</span>
                    <span className="font-medium">${booking.pricing.taxes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Fees</span>
                    <span className="font-medium">${booking.pricing.fees.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 border-t flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-lg">${booking.pricing.total.toLocaleString()}</span>
                  </div>

                  <div className="pt-3 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Deposit (30%)</span>
                      <div className="text-right">
                        <p className="font-medium">${booking.pricing.depositAmount.toLocaleString()}</p>
                        {booking.pricing.depositPaid && (
                          <div className="flex items-center gap-1 text-green-600 text-xs">
                            <CheckCircle className="h-3 w-3" />
                            Paid {formatDate(booking.pricing.depositPaidDate!)}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Balance Due</span>
                      <div className="text-right">
                        <p className="font-medium text-red-600">${booking.pricing.balanceDue.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">Due by {formatDate(booking.pricing.balanceDueDate)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Payment History</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {booking.payments.map((payment) => (
                    <div key={payment.id} className="flex items-start gap-3 pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <p className="font-semibold">${payment.amount.toLocaleString()}</p>
                          <span className="text-xs text-green-600 font-semibold">{payment.status}</span>
                        </div>
                        <p className="text-xs text-gray-600">{payment.type}</p>
                        <p className="text-xs text-gray-500">{formatDate(payment.date)}</p>
                        <p className="text-xs text-gray-500">
                          {payment.method} •••• {payment.cardLast4}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Communication Log */}
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Communication</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {booking.communication.map((comm) => (
                    <div key={comm.id} className="flex items-start gap-3 text-sm">
                      <Mail className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium">{comm.subject}</p>
                        <p className="text-xs text-gray-500">{formatDate(comm.date)}</p>
                        <span className="text-xs text-green-600">✓ {comm.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Quick Actions</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <Button className="w-full" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Confirmation Email
                  </Button>
                  <Button className="w-full" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Invoice
                  </Button>
                  <Button className="w-full" variant="outline">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Process Payment
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Voucher
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
