import Container from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Terms & Conditions | Barabara Voyagers',
  description: 'Terms and conditions for booking safaris with Barabara Voyagers.',
};

export default function TermsPage() {
  return (
    <section className="pb-20 pt-[15vh] lg:pt-[24vh] bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: December 2025</p>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Booking & Payment</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-lato">
              <li>30% deposit required to confirm booking</li>
              <li>Full payment due 60 days before departure</li>
              <li>Accepted payment methods: Bank transfer, credit card, PayPal</li>
              <li>Prices subject to change until deposit received</li>
            </ul>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
            <div className="space-y-4 text-gray-700 font-lato">
              <p>Cancellation fees apply as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>90+ days before: 10% of total cost</li>
                <li>60-89 days: 30% of total cost</li>
                <li>30-59 days: 50% of total cost</li>
                <li>Less than 30 days: 100% of total cost</li>
              </ul>
              <p className="font-bold mt-4">Gorilla permits are non-refundable once purchased.</p>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Travel Insurance</h2>
            <p className="text-gray-700 font-lato">
              Comprehensive travel insurance is mandatory for all safaris. Insurance must cover medical expenses, evacuation, trip cancellation, and personal liability. We can recommend providers.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Responsibilities</h2>
            <p className="text-gray-700 font-lato mb-4">
              While we arrange all safari components with reputable suppliers, we act as an agent and cannot be held liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-lato">
              <li>Weather-related disruptions</li>
              <li>Wildlife sightings (not guaranteed)</li>
              <li>Flight delays or cancellations</li>
              <li>Political unrest or force majeure events</li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
