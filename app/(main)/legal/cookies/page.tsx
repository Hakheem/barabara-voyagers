import Container from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Cookie Policy | Barabara Voyagers',
  description: 'Information about how we use cookies on our website.',
};

export default function CookiesPage() {
  return (
    <section className="pb-20 pt-[15vh] lg:pt-[24vh] bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: December 2025</p>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 font-lato">
              Cookies are small text files stored on your device when you visit our website. They help us improve your browsing experience by remembering your preferences and analyzing how you use our site.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Essential Cookies</h3>
                <p className="text-gray-700 font-lato">
                  Required for the website to function properly. These enable core functionality like security, network management, and accessibility.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 font-lato">
                  Help us understand how visitors interact with our website, which pages are most popular, and where we can improve.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Marketing Cookies</h3>
                <p className="text-gray-700 font-lato">
                  Track your browsing to show you relevant advertisements and measure the effectiveness of our marketing campaigns.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Preference Cookies</h3>
                <p className="text-gray-700 font-lato">
                  Remember your settings and preferences (like language, currency, or login details) to provide a personalized experience.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="text-gray-700 font-lato mb-4">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 font-lato">
              <li>View and delete cookies</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-700 font-lato mt-4">
              Note: Blocking all cookies may affect your experience on our website and prevent certain features from working.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 font-lato">
              If you have questions about our use of cookies, please contact us at:
              <br />
              <strong>Email:</strong> privacy@barabaravoyagers.com
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
