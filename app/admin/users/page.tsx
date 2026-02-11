import { Users, UserPlus } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'User Management | Barabara Voyagers Admin',
  description: 'Manage staff users and permissions.',
};

export default function UsersPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-gray-600 mt-2 font-lato">Manage team members and access</p>
        </div>
        <Button><UserPlus className="mr-2 h-4 w-4" />Add User</Button>
      </div>

      <Card>
        <CardHeader><CardTitle>Team Members</CardTitle></CardHeader>
        <CardContent><p className="text-gray-600 font-lato">User list with roles and permissions management.</p></CardContent>
      </Card>
    </div>
  );
}
