import { MapPin, Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Destination Management | Barabara Voyagers Admin',
  description: 'Manage destination content and information.',
};

export default function DestinationsMgmtPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Destinations</h1>
          <p className="text-gray-600 mt-2 ">Manage destination pages and content</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" />Add Destination</Button>
      </div>

      <Card>
        <CardHeader><CardTitle>Destination Content</CardTitle></CardHeader>
        <CardContent><p className="text-gray-600 ">Destination management with highlights, best times, and details.</p></CardContent>
      </Card>
    </div>
  );
}
