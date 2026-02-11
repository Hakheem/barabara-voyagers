'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Download, Eye, Edit, Trash2, CheckCircle, XCircle, Clock, DollarSign } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { formatDate, formatPrice } from '@/lib/utils';

// Mock data - in production this would come from the database
const mockBookings = [
  {
    id: '1',
    bookingReference: 'BV-KL8X9Q2M-A7B3',
    safariTitle: 'Classic Kenya & Tanzania Explorer',
    customerName: 'John Smith',
    customerEmail: 'john.smith@email.com',
    startDate: '2025-08-15',
    endDate: '2025-08-27',
    numberOfTravelers: 2,
    totalPrice: 9600,
    depositAmount: 2880,
    depositPaid: true,
    balanceDue: 6720,
    status: 'CONFIRMED',
    paymentStatus: 'DEPOSIT_PAID',
    createdAt: '2025-01-15T10:30:00Z',
  },
  {
    id: '2',
    bookingReference: 'BV-PM3N7R4K-C9D1',
    safariTitle: 'Serengeti & Zanzibar Honeymoon',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@email.com',
    startDate: '2025-07-20',
    endDate: '2025-08-01',
    numberOfTravelers: 2,
    totalPrice: 17000,
    depositAmount: 5100,
    depositPaid: true,
    balanceDue: 11900,
    status: 'PENDING',
    paymentStatus: 'DEPOSIT_PAID',
    createdAt: '2025-01-20T14:22:00Z',
  },
  {
    id: '3',
    bookingReference: 'BV-QR5T8W2N-E6F4',
    safariTitle: 'Uganda Gorilla Trekking Adventure',
    customerName: 'Michael Chen',
    customerEmail: 'mchen@email.com',
    startDate: '2025-09-10',
    endDate: '2025-09-20',
    numberOfTravelers: 4,
    totalPrice: 24800,
    depositAmount: 7440,
    depositPaid: false,
    balanceDue: 24800,
    status: 'PENDING',
    paymentStatus: 'PENDING',
    createdAt: '2025-01-22T09:15:00Z',
  },
  {
    id: '4',
    bookingReference: 'BV-ST7U9V3P-G8H2',
    safariTitle: 'Botswana Delta Romance',
    customerName: 'Emily Rodriguez',
    customerEmail: 'emily.r@email.com',
    startDate: '2025-06-05',
    endDate: '2025-06-15',
    numberOfTravelers: 2,
    totalPrice: 25600,
    depositAmount: 7680,
    depositPaid: true,
    balanceDue: 0,
    status: 'CONFIRMED',
    paymentStatus: 'PAID_IN_FULL',
    createdAt: '2024-12-10T16:45:00Z',
  },
  {
    id: '5',
    bookingReference: 'BV-WX1Y4Z6A-I5J7',
    safariTitle: 'Family Kenya Safari Adventure',
    customerName: 'David Williams',
    customerEmail: 'dwilliams@email.com',
    startDate: '2025-12-20',
    endDate: '2025-12-28',
    numberOfTravelers: 4,
    totalPrice: 15200,
    depositAmount: 4560,
    depositPaid: false,
    balanceDue: 15200,
    status: 'CANCELLED',
    paymentStatus: 'REFUNDED',
    createdAt: '2024-11-15T11:30:00Z',
  },
];

type BookingStatus = 'ALL' | 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
type PaymentStatus = 'ALL' | 'PENDING' | 'DEPOSIT_PAID' | 'PAID_IN_FULL' | 'REFUNDED';

export default function AdminBookingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<BookingStatus>('ALL');
  const [paymentFilter, setPaymentFilter] = useState<PaymentStatus>('ALL');

  const filteredBookings = mockBookings.filter((booking) => {
    const matchesSearch =
      booking.bookingReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.safariTitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || booking.status === statusFilter;
    const matchesPayment = paymentFilter === 'ALL' || booking.paymentStatus === paymentFilter;

    return matchesSearch && matchesStatus && matchesPayment;
  });

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

  const getPaymentIcon = (status: string) => {
    switch (status) {
      case 'PAID_IN_FULL':
        return <CheckCircle className="h-4 w-4" />;
      case 'DEPOSIT_PAID':
        return <Clock className="h-4 w-4" />;
      case 'PENDING':
        return <XCircle className="h-4 w-4" />;
      default:
        return <DollarSign className="h-4 w-4" />;
    }
  };

  const stats = {
    total: mockBookings.length,
    pending: mockBookings.filter((b) => b.status === 'PENDING').length,
    confirmed: mockBookings.filter((b) => b.status === 'CONFIRMED').length,
    totalRevenue: mockBookings
      .filter((b) => b.status !== 'CANCELLED')
      .reduce((sum, b) => sum + b.totalPrice, 0),
    pendingPayments: mockBookings
      .filter((b) => b.paymentStatus === 'PENDING' || b.paymentStatus === 'DEPOSIT_PAID')
      .reduce((sum, b) => sum + b.balanceDue, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bookings Management</h1>
          <p className="text-gray-600">View and manage all safari bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
                <p className="text-3xl font-bold">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-3xl font-bold">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Confirmed</p>
                <p className="text-3xl font-bold">{stats.confirmed}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                <p className="text-3xl font-bold">${(stats.totalRevenue / 1000).toFixed(0)}k</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by reference, name, email, or safari..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as BookingStatus)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="ALL">All Status</option>
                <option value="PENDING">Pending</option>
                <option value="CONFIRMED">Confirmed</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>

            {/* Payment Filter */}
            <div>
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value as PaymentStatus)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="ALL">All Payments</option>
                <option value="PENDING">Pending</option>
                <option value="DEPOSIT_PAID">Deposit Paid</option>
                <option value="PAID_IN_FULL">Paid in Full</option>
                <option value="REFUNDED">Refunded</option>
              </select>
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export to CSV
            </Button>
          </div>
        </Card>

        {/* Bookings Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking Reference
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Safari
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Travel Dates
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Travelers
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{booking.bookingReference}</div>
                      <div className="text-xs text-gray-500">{formatDate(booking.createdAt)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{booking.customerName}</div>
                      <div className="text-xs text-gray-500">{booking.customerEmail}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">{booking.safariTitle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatDate(booking.startDate)}</div>
                      <div className="text-xs text-gray-500">to {formatDate(booking.endDate)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.numberOfTravelers}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${booking.totalPrice.toLocaleString()}
                      </div>
                      {booking.balanceDue > 0 && (
                        <div className="text-xs text-red-600">
                          Due: ${booking.balanceDue.toLocaleString()}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full ${getPaymentBadge(
                          booking.paymentStatus
                        )}`}
                      >
                        {getPaymentIcon(booking.paymentStatus)}
                        {booking.paymentStatus.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/bookings/${booking.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <button className="text-amber-600 hover:text-amber-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredBookings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No bookings found matching your filters.</p>
              </div>
            )}
          </div>
        </Card>

        {/* Pagination */}
        {filteredBookings.length > 0 && (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{filteredBookings.length}</span> of{' '}
              <span className="font-medium">{filteredBookings.length}</span> results
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
