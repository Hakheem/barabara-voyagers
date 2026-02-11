import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, Download } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'My Trips | Barabara Voyagers',
  description: 'View and manage your safari bookings.',
};

const getTrips = () => {
  return {
    upcoming: [
      {
        id: 'BV-20241-2847',
        destination: 'Tanzania Classic Safari',
        location: 'Serengeti & Ngorongoro',
        dates: 'July 15-25, 2025',
        travelers: 2,
        status: 'Confirmed',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600',
        details: '10 days, 4 luxury lodges',
      },
      {
        id: 'BV-20241-2901',
        destination: 'Uganda Gorilla Trekking',
        location: 'Bwindi Forest',
        dates: 'September 5-12, 2025',
        travelers: 2,
        status: 'Balance Due',
        image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600',
        details: '7 days, gorilla permits included',
      },
    ],
    past: [
      {
        id: 'BV-20231-1456',
        destination: 'Kenya Safari & Beach',
        location: 'Masai Mara & Diani Beach',
        dates: 'August 10-22, 2024',
        travelers: 2,
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600',
        details: '12 days, migration viewing',
      },
      {
        id: 'BV-20221-0892',
        destination: 'Botswana Luxury Safari',
        location: 'Okavango Delta',
        dates: 'June 5-12, 2023',
        travelers: 2,
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',
        details: '7 days, luxury camps',
      },
      {
        id: 'BV-20211-0234',
        destination: 'South Africa Explorer',
        location: 'Kruger & Cape Town',
        dates: 'November 15-28, 2022',
        travelers: 4,
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=600',
        details: '13 days, family safari',
      },
    ],
  };
};

export default function MyTripsPage() {
  const trips = getTrips();

  const getStatusBadge = (status: string) => {
    const badges = {
      Confirmed: 'bg-green-100 text-green-700',
      'Balance Due': 'bg-amber-100 text-amber-700',
      Completed: 'bg-gray-100 text-gray-700',
    };
    return badges[status as keyof typeof badges] || badges.Confirmed;
  };

  return (
    <section className="pb-12 pt-[16vh] lg:pt-[8rem] bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">My Trips</h1>
            <p className="text-gray-600 ">
              View and manage your safari bookings
            </p>
          </div>

          {/* Upcoming Trips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Upcoming Adventures</h2>
            <div className="grid grid-cols-1 gap-6">
              {trips.upcoming.map((trip) => (
                <Card key={trip.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={trip.image}
                        alt={trip.destination}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(
                            trip.status
                          )}`}
                        >
                          {trip.status}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 p-6">
                      <h3 className="text-2xl font-bold mb-2">{trip.destination}</h3>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm ">{trip.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm ">{trip.dates}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="h-4 w-4" />
                          <span className="text-sm ">
                            {trip.travelers} traveler{trip.travelers > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600  mb-6">{trip.details}</p>

                      <p className="text-xs text-gray-500 mb-4">
                        Booking Reference: {trip.id}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <Button asChild>
                          <Link href={`/account/trips/${trip.id}`}>View Full Itinerary</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={`/account/documents?trip=${trip.id}`}>
                            <Download className="mr-2 h-4 w-4" />
                            Documents
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Trips */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Past Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trips.past.map((trip) => (
                <Card key={trip.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={trip.image}
                      alt={trip.destination}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{trip.destination}</h3>

                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span className="">{trip.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="h-3 w-3" />
                        <span className="">{trip.dates}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 mb-4">{trip.id}</p>

                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <Link href={`/account/trips/${trip.id}`}>View Details</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Plan Another Trip CTA */}
          <Card className="mt-12 p-8 bg-amber-50 border-amber-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Ready for Your Next Adventure?</h3>
              <p className="text-gray-700  mb-6">
                Let our experts help you plan another unforgettable African safari.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/book">Start Planning</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Speak to an Expert</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
