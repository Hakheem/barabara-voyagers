import Container from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Privacy Policy | Barabara Voyagers',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pb-20 pt-[15vh] lg:pt-[24vh] bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: December 2025</p>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 font-lato mb-4">
              Barabara Voyagers ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-700 font-lato">
              <div>
                <h3 className="font-bold mb-2">Personal Information</h3>
                <p>We collect information you provide directly, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Name, email address, phone number</li>
                  <li>Passport information for travel bookings</li>
                  <li>Payment information</li>
                  <li>Travel preferences and special requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-lato">
              <li>Process and fulfill your safari bookings</li>
              <li>Communicate about your trips and send confirmations</li>
              <li>Provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <div className="space-y-4 text-gray-700 font-lato">
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Safari lodges, hotels, and activity providers for your bookings</li>
                <li>Airlines and ground transportation services</li>
                <li>Payment processors</li>
                <li>Government authorities when required by law</li>
              </ul>
              <p className="font-bold mt-4">We never sell your personal information to third parties.</p>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-700 font-lato mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-lato">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 font-lato">
              For privacy-related questions or to exercise your rights, contact us at:
              <br />
              <strong>Email:</strong> privacy@barabaravoyagers.com
              <br />
              <strong>Mail:</strong> Barabara Voyagers, Arusha, Tanzania
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
