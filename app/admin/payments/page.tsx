import Link from 'next/link';
import { DollarSign, Download, Filter } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Payments Management | Barabara Voyagers Admin',
  description: 'Manage safari payments, deposits, and balances.',
};

export default function PaymentsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Payments</h1>
          <p className="text-gray-600 mt-2 ">Manage safari payments and transactions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline"><Filter className="mr-2 h-4 w-4" />Filter</Button>
          <Button variant="outline"><Download className="mr-2 h-4 w-4" />Export</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card><CardContent className="p-6"><p className="text-sm text-gray-600">Total Revenue</p><p className="text-3xl font-bold">$1.8M</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-gray-600">Pending Payments</p><p className="text-3xl font-bold">$142K</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-gray-600">This Month</p><p className="text-3xl font-bold">$143K</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-gray-600">Overdue</p><p className="text-3xl font-bold text-red-600">3</p></CardContent></Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Recent Payments</CardTitle></CardHeader>
        <CardContent><p className="text-gray-600 ">Payment transaction list would appear here with filters and search.</p></CardContent>
      </Card>
    </div>
  );
}
