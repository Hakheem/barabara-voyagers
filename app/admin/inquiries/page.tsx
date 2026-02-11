import Link from 'next/link';
import { Mail, Clock, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Inquiries Management | Barabara Voyagers Admin',
  description: 'Manage customer inquiries and leads.',
};

export default function InquiriesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Inquiries & Leads</h1>
        <p className="text-gray-600 mt-2 ">Manage customer inquiries and follow-ups</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600">New Inquiries</p><p className="text-3xl font-bold">24</p></div><Mail className="h-8 w-8 text-blue-600" /></div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600">In Progress</p><p className="text-3xl font-bold">18</p></div><Clock className="h-8 w-8 text-amber-600" /></div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600">Converted</p><p className="text-3xl font-bold">42</p></div><CheckCircle className="h-8 w-8 text-green-600" /></div></CardContent></Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Recent Inquiries</CardTitle></CardHeader>
        <CardContent><p className="text-gray-600 ">Inquiry management interface with status tracking and assignment.</p></CardContent>
      </Card>
    </div>
  );
}
