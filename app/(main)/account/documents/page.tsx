import Link from 'next/link';
import { Download, FileText, Calendar, Plane, Info } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Travel Documents | Barabara Voyagers',
  description: 'Download your safari itineraries, vouchers, and travel documents.',
};

const getDocuments = () => {
  return [
    {
      tripId: 'BV-20241-2847',
      tripName: 'Tanzania Classic Safari',
      dates: 'July 15-25, 2025',
      documents: [
        { name: 'Complete Itinerary', type: 'PDF', size: '2.4 MB', icon: FileText },
        { name: 'Hotel Vouchers', type: 'PDF', size: '890 KB', icon: FileText },
        { name: 'Flight Confirmations', type: 'PDF', size: '450 KB', icon: Plane },
        { name: 'Park Permits', type: 'PDF', size: '320 KB', icon: FileText },
        { name: 'Packing List', type: 'PDF', size: '180 KB', icon: Info },
        { name: 'Emergency Contacts', type: 'PDF', size: '120 KB', icon: Info },
      ],
    },
    {
      tripId: 'BV-20241-2901',
      tripName: 'Uganda Gorilla Trekking',
      dates: 'September 5-12, 2025',
      documents: [
        { name: 'Complete Itinerary', type: 'PDF', size: '1.8 MB', icon: FileText },
        { name: 'Gorilla Permits', type: 'PDF', size: '650 KB', icon: FileText },
        { name: 'Hotel Vouchers', type: 'PDF', size: '720 KB', icon: FileText },
        { name: 'Travel Insurance', type: 'PDF', size: '540 KB', icon: Info },
        { name: 'Packing List (Gorilla Trekking)', type: 'PDF', size: '210 KB', icon: Info },
      ],
    },
  ];
};

export default function DocumentsPage() {
  const trips = getDocuments();

  return (
    <section className="pb-12 pt-[16vh] lg:pt-[8rem] bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Travel Documents</h1>
            <p className="text-gray-600 ">
              Download itineraries, vouchers, and important travel information
            </p>
          </div>

          {/* Info Card */}
          <Card className="p-6 mb-8 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold mb-2">Important Information</h3>
                <ul className="text-sm text-gray-700  space-y-1">
                  <li>• Print all vouchers and keep them with you during travel</li>
                  <li>• Save digital copies to your phone for backup</li>
                  <li>• Final documents are sent 14 days before departure</li>
                  <li>• Contact us immediately if you notice any errors</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Documents by Trip */}
          <div className="space-y-8">
            {trips.map((trip) => (
              <Card key={trip.tripId} className="p-8">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h2 className="text-2xl font-bold">{trip.tripName}</h2>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm ">{trip.dates}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download All
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">Booking Reference: {trip.tripId}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trip.documents.map((doc, index) => {
                    const Icon = doc.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                            <Icon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{doc.name}</p>
                            <p className="text-xs text-gray-500">
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <button className="text-amber-600 hover:text-amber-700 transition-colors">
                          <Download className="h-5 w-5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Resources */}
          <Card className="mt-8 p-8">
            <h3 className="text-xl font-bold mb-6">Additional Resources</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/plan/what-to-pack"
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FileText className="h-8 w-8 text-amber-600 mb-3" />
                <h4 className="font-bold mb-2">Packing Guide</h4>
                <p className="text-sm text-gray-600 ">
                  Complete safari packing lists
                </p>
              </Link>

              <Link
                href="/plan/faq"
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Info className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-bold mb-2">Travel FAQ</h4>
                <p className="text-sm text-gray-600 ">
                  Answers to common questions
                </p>
              </Link>

              <Link
                href="/contact"
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Plane className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-bold mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 ">
                  Contact our travel experts
                </p>
              </Link>
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className="mt-8 p-6 bg-red-50 border-red-200">
            <h3 className="font-bold mb-3">24/7 Emergency Support</h3>
            <p className="text-sm text-gray-700  mb-4">
              If you need assistance while on safari, our emergency line is available 24/7:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm ">
              <div>
                <p className="font-bold">Tanzania:</p>
                <p>+255 754 123 4567</p>
              </div>
              <div>
                <p className="font-bold">International:</p>
                <p>+1 (555) SAFARI-911</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
