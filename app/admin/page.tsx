import Link from 'next/link';
import { Package, FileText, Image, MessageSquare, Calendar, DollarSign, Users, TrendingUp, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Admin Dashboard | Barabara Voyagers',
  description: 'Manage bookings, payments, and safari operations.',
};

// This would be replaced with real data from database
async function getDashboardStats() {
  return {
    totalBookings: 247,
    pendingPayments: 12,
    activeTrips: 8,
    totalRevenue: 1847500,
    thisMonthBookings: 18,
    thisMonthRevenue: 142800,
    pendingInquiries: 24,
    upcomingDepartures: 5,
    totalPackages: 12,
    blogPosts: 24,
    galleryAlbums: 8,
    testimonials: 36,
  };
}

async function getRecentBookings() {
  return [
    {
      id: 'BV-20241-2847',
      travelerName: 'Sarah & John Mitchell',
      safari: 'Tanzania Classic Safari - 10 Days',
      departureDate: '2025-07-15',
      status: 'confirmed',
      balanceDue: 12950,
    },
    {
      id: 'BV-20241-2846',
      travelerName: 'David Chen',
      safari: 'Uganda Gorilla Trekking - 5 Days',
      departureDate: '2025-06-08',
      status: 'pending_payment',
      balanceDue: 7200,
    },
    {
      id: 'BV-20241-2845',
      travelerName: 'Emily & Mark Johnson',
      safari: 'Kenya & Tanzania Migration - 12 Days',
      departureDate: '2025-08-20',
      status: 'confirmed',
      balanceDue: 0,
    },
  ];
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();
  const recentBookings = await getRecentBookings();

  const bookingStats = [
    {
      name: 'Total Bookings',
      value: stats.totalBookings,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      change: `+${stats.thisMonthBookings} this month`,
    },
    {
      name: 'Total Revenue',
      value: `$${(stats.totalRevenue / 1000).toFixed(0)}K`,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      change: `+$${(stats.thisMonthRevenue / 1000).toFixed(0)}K this month`,
    },
    {
      name: 'Active Trips',
      value: stats.activeTrips,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      change: `${stats.upcomingDepartures} departing soon`,
    },
    {
      name: 'Pending Payments',
      value: stats.pendingPayments,
      icon: AlertCircle,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      change: `${stats.pendingInquiries} new inquiries`,
    },
  ];

  const contentStats = [
    {
      name: 'Safari Packages',
      value: stats.totalPackages,
      icon: Package,
      href: '/admin/packages',
    },
    {
      name: 'Blog Posts',
      value: stats.blogPosts,
      icon: FileText,
      href: '/admin/posts',
    },
    {
      name: 'Gallery Albums',
      value: stats.galleryAlbums,
      icon: Image,
      href: '/admin/gallery',
    },
    {
      name: 'Testimonials',
      value: stats.testimonials,
      icon: MessageSquare,
      href: '/admin/testimonials',
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      confirmed: 'bg-green-100 text-green-700',
      pending_payment: 'bg-red-100 text-red-700',
      deposit_paid: 'bg-amber-100 text-amber-700',
    };
    return badges[status as keyof typeof badges] || badges.pending_payment;
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      confirmed: 'Confirmed',
      pending_payment: 'Pending Payment',
      deposit_paid: 'Deposit Paid',
    };
    return labels[status as keyof typeof labels] || 'Unknown';
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2 ">
            Welcome back! Here's what's happening with your safaris.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link href="/admin/bookings">View All Bookings</Link>
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Booking Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookingStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm font-medium text-gray-600 ">{stat.name}</p>
                      <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 ">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Bookings</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin/bookings">View All<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th className="pb-3 text-sm font-bold text-gray-600">ID</th>
                      <th className="pb-3 text-sm font-bold text-gray-600">Traveler</th>
                      <th className="pb-3 text-sm font-bold text-gray-600">Safari</th>
                      <th className="pb-3 text-sm font-bold text-gray-600">Status</th>
                      <th className="pb-3 text-sm font-bold text-gray-600 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b last:border-0 hover:bg-gray-50">
                        <td className="py-4">
                          <Link href={`/admin/bookings/${booking.id}`} className="text-amber-600 hover:text-amber-700 font-mono text-sm font-semibold">
                            {booking.id}
                          </Link>
                        </td>
                        <td className="py-4 text-sm ">{booking.travelerName}</td>
                        <td className="py-4 text-sm  max-w-xs truncate">{booking.safari}</td>
                        <td className="py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(booking.status)}`}>
                            {getStatusLabel(booking.status)}
                          </span>
                        </td>
                        <td className="py-4 text-sm font-semibold text-right">
                          {booking.balanceDue > 0 ? `$${booking.balanceDue.toLocaleString()}` : <span className="text-green-600">Paid</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/admin/bookings"><Calendar className="mr-2 h-4 w-4" />View Bookings</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/admin/payments"><DollarSign className="mr-2 h-4 w-4" />Payments</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/admin/inquiries"><Users className="mr-2 h-4 w-4" />Inquiries</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/admin/reports"><TrendingUp className="mr-2 h-4 w-4" />Reports</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm mb-1">Action Required</h3>
                  <p className="text-xs text-gray-700 ">
                    {stats.pendingPayments} bookings have pending balance payments.
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full" asChild>
                <Link href="/admin/payments?filter=pending">Review Payments</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Content Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link key={stat.name} href={stat.href}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 ">{stat.name}</p>
                        <p className="text-3xl font-bold mt-2">{stat.value}</p>
                      </div>
                      <div className="bg-gray-100 text-gray-600 p-3 rounded-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 ">WordPress Connection</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                  Connected
                </span>
              </div>
              <p className="text-xs text-gray-500 ">
                {process.env.NEXT_PUBLIC_WORDPRESS_URL || 'Not configured'}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 ">API Status</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                  Active
                </span>
              </div>
              <p className="text-xs text-gray-500 ">WordPress REST API v2</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 ">Cache Status</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                  Enabled
                </span>
              </div>
              <p className="text-xs text-gray-500 ">Revalidation: 1 hour</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
