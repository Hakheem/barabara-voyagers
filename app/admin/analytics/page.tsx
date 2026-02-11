import { TrendingUp, Users, Globe, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Analytics | Barabara Voyagers Admin',
  description: 'Website and booking analytics.',
};

export default function AnalyticsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-gray-600 mt-2 ">Website traffic, conversions, and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600">Website Visitors</p><p className="text-3xl font-bold">12.4K</p></div><Users className="h-8 w-8 text-purple-600" /></div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600">Conversion Rate</p><p className="text-3xl font-bold">3.2%</p></div><TrendingUp className="h-8 w-8 text-green-600" /></div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600">Top Country</p><p className="text-3xl font-bold">USA</p></div><Globe className="h-8 w-8 text-blue-600" /></div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600">Avg Booking</p><p className="text-3xl font-bold">$7.2K</p></div><DollarSign className="h-8 w-8 text-amber-600" /></div></CardContent></Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Traffic Overview</CardTitle></CardHeader>
        <CardContent><p className="text-gray-600 ">Analytics charts and graphs would display here.</p></CardContent>
      </Card>
    </div>
  );
}
