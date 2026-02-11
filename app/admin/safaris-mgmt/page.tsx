import { Compass, Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Safari Management | Barabara Voyagers Admin',
  description: 'Manage safari packages and itineraries.',
};

export default function SafarisMgmtPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Safari Packages</h1>
          <p className="text-gray-600 mt-2 font-lato">Manage safari types and itineraries</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" />Add Safari</Button>
      </div>

      <Card>
        <CardHeader><CardTitle>Safari Packages</CardTitle></CardHeader>
        <CardContent><p className="text-gray-600 font-lato">Safari package management with pricing and availability.</p></CardContent>
      </Card>
    </div>
  );
}
