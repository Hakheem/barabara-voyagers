import { FileText, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Reports | Barabara Voyagers Admin',
  description: 'Generate and download safari business reports.',
};

export default function ReportsPage() {
  const reports = [
    { name: 'Monthly Sales Report', desc: 'Bookings and revenue summary', type: 'Financial' },
    { name: 'Customer Analytics', desc: 'Demographics and behavior', type: 'Marketing' },
    { name: 'Destination Performance', desc: 'Popular destinations and trends', type: 'Operations' },
    { name: 'Payment Status', desc: 'Outstanding balances and payments', type: 'Financial' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-gray-600 mt-2 font-lato">Generate business reports and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-1">{report.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 font-lato">{report.desc}</p>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{report.type}</span>
                </div>
                <Button size="sm" variant="outline"><Download className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
