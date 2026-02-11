'use client';

import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, Image as ImageIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AdminGalleryPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery Albums</h1>
          <p className="text-gray-600 mt-2">Manage your photo galleries</p>
        </div>
        <Button asChild>
          <Link href="/admin/gallery/new">
            <Plus className="h-4 w-4 mr-2" />
            New Album
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <ImageIcon className="h-12 w-12 text-gray-400" />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">Serengeti Wildlife</h3>
            <p className="text-sm text-gray-600 mb-4">Tanzania • 24 photos</p>
            <div className="flex items-center gap-2">
              <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                <Eye className="h-4 w-4 inline mr-1" />
                View
              </button>
              <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                <Edit className="h-4 w-4 inline mr-1" />
                Edit
              </button>
              <button className="px-3 py-2 text-sm border border-red-300 text-red-600 rounded-md hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">WordPress Integration</h3>
        <p className="text-sm text-blue-800">
          Gallery albums are managed through WordPress. Use the WordPress admin panel to create albums and upload photos.
        </p>
      </div>
    </div>
  );
}
