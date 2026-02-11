'use client';

import Link from 'next/link';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AdminTestimonialsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
          <p className="text-gray-600 mt-2">Manage client reviews</p>
        </div>
        <Button asChild>
          <Link href="/admin/testimonials/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Testimonial
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <h3 className="font-semibold text-lg">John & Sarah Smith</h3>
              <p className="text-sm text-gray-600">New York, USA</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                <Edit className="h-4 w-4 inline mr-1" />
                Edit
              </button>
              <button className="px-3 py-2 text-sm border border-red-300 text-red-600 rounded-md hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="text-gray-700 mb-3">
            Our safari with Barabara Voyagers was absolutely incredible! The attention to detail and
            personalized service exceeded our expectations.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Package: Tanzania Safari Adventure</span>
            <span>•</span>
            <span>Trip Date: Aug 2024</span>
            <span>•</span>
            <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">WordPress Integration</h3>
        <p className="text-sm text-blue-800">
          Testimonials are managed through WordPress. Use the WordPress admin panel to add and edit testimonials.
        </p>
      </div>
    </div>
  );
}
