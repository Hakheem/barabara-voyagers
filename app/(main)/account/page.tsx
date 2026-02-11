import Link from 'next/link';
import { Calendar, FileText, User, Settings, LogOut, Plane } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'My Account | Barabara Voyagers',
  description: 'Manage your safari bookings, profile, and travel documents.',
};

// This would come from authentication/session
const getUserData = () => {
  return {
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@example.com',
    memberSince: '2023',
    upcomingTrips: 2,
    pastTrips: 3,
  };
};

const getUpcomingTrips = () => {
  return [
    {
      id: 'BV-20241-2847',
      destination: 'Tanzania Classic Safari',
      dates: 'July 15-25, 2025',
      status: 'Confirmed',
      thumbnail: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400',
    },
    {
      id: 'BV-20241-2901',
      destination: 'Uganda Gorilla Trekking',
      dates: 'September 5-12, 2025',
      status: 'Balance Due',
      thumbnail: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400',
    },
  ];
};

export default function AccountPage() {
  const user = getUserData();
  const upcomingTrips = getUpcomingTrips();

  return (
    <>
      <section className="pb-12 pt-[16vh] lg:pt-[8rem] bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">My Account</h1>
              <p className="text-gray-600 ">Welcome back, {user.name}!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <div className="space-y-2">
                    <Link
                      href="/account"
                      className="flex items-center gap-3 p-3 bg-amber-50 text-amber-700 rounded-lg font-semibold"
                    >
                      <User className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      href="/account/trips"
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Calendar className="h-5 w-5" />
                      My Trips
                    </Link>
                    <Link
                      href="/account/documents"
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <FileText className="h-5 w-5" />
                      Travel Documents
                    </Link>
                    <Link
                      href="/account/profile"
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Settings className="h-5 w-5" />
                      Profile Settings
                    </Link>
                    <button
                      className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full"
                    >
                      <LogOut className="h-5 w-5" />
                      Log Out
                    </button>
                  </div>
                </Card>

                <Card className="p-6 mt-6 bg-blue-50 border-blue-200">
                  <div className="text-center">
                    <Plane className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Need Help?</h3>
                    <p className="text-sm text-gray-700  mb-4">
                      Our travel experts are here to assist you.
                    </p>
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600  mb-1">Upcoming Trips</p>
                        <p className="text-3xl font-bold">{user.upcomingTrips}</p>
                      </div>
                      <Calendar className="h-8 w-8 text-blue-600" />
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600  mb-1">Past Adventures</p>
                        <p className="text-3xl font-bold">{user.pastTrips}</p>
                      </div>
                      <Plane className="h-8 w-8 text-green-600" />
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600  mb-1">Member Since</p>
                        <p className="text-3xl font-bold">{user.memberSince}</p>
                      </div>
                      <User className="h-8 w-8 text-purple-600" />
                    </div>
                  </Card>
                </div>

                {/* Upcoming Trips */}
                <Card className="p-8 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Upcoming Trips</h2>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/trips">View All</Link>
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {upcomingTrips.map((trip) => (
                      <div
                        key={trip.id}
                        className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg"
                      >
                        <div
                          className="w-full md:w-48 h-32 bg-cover bg-center rounded-lg flex-shrink-0"
                          style={{ backgroundImage: `url(${trip.thumbnail})` }}
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{trip.destination}</h3>
                              <p className="text-sm text-gray-600 ">{trip.dates}</p>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                trip.status === 'Confirmed'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {trip.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600  mb-4">
                            Booking Reference: {trip.id}
                          </p>
                          <div className="flex gap-3">
                            <Button size="sm" asChild>
                              <Link href={`/account/trips/${trip.id}`}>View Details</Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/account/documents?trip=${trip.id}`}>
                                Documents
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/book"
                      className="p-6 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                    >
                      <h3 className="font-bold mb-2">Plan New Safari</h3>
                      <p className="text-sm text-gray-600 ">
                        Start planning your next African adventure
                      </p>
                    </Link>

                    <Link
                      href="/account/documents"
                      className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <h3 className="font-bold mb-2">Download Documents</h3>
                      <p className="text-sm text-gray-600 ">
                        Access itineraries, vouchers, and travel info
                      </p>
                    </Link>

                    <Link
                      href="/account/profile"
                      className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <h3 className="font-bold mb-2">Update Profile</h3>
                      <p className="text-sm text-gray-600 ">
                        Manage your personal information
                      </p>
                    </Link>

                    <Link
                      href="/contact"
                      className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                      <h3 className="font-bold mb-2">Contact Expert</h3>
                      <p className="text-sm text-gray-600 ">
                        Speak with a safari specialist
                      </p>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
