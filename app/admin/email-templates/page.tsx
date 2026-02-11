import { Mail, Plus, Edit } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Email Templates | Barabara Voyagers Admin',
  description: 'Manage email templates for customer communications.',
};

export default function EmailTemplatesPage() {
  const templates = [
    { name: 'Booking Confirmation', desc: 'Sent when booking is confirmed', usage: 247 },
    { name: 'Payment Reminder', desc: 'Balance due reminder email', usage: 89 },
    { name: 'Trip Documents Ready', desc: 'Notifies when documents are available', usage: 156 },
    { name: 'Welcome Email', desc: 'Sent to new subscribers', usage: 1240 },
    { name: 'Inquiry Follow-up', desc: 'Follow up on safari inquiries', usage: 324 },
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Email Templates</h1>
          <p className="text-gray-600 mt-2 ">Manage automated email communications</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" />New Template</Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {templates.map((template, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">{template.name}</h3>
                    <p className="text-sm text-gray-600 ">{template.desc}</p>
                    <p className="text-xs text-gray-500 mt-1">Sent {template.usage} times</p>
                  </div>
                </div>
                <Button size="sm" variant="outline"><Edit className="mr-2 h-4 w-4" />Edit</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
