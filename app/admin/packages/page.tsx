'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AdminPackagesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Packages</h1>
          <p className="text-gray-600 mt-2">Manage your safari packages</p>
        </div>
        <Button asChild>
          <Link href="/admin/packages/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Package
          </Link>
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Package Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">Tanzania Safari Adventure</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">Tanzania</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">10 Days</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-semibold">
                  $5,500
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-gray-600 hover:text-amber-600">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">Kenya Luxury Safari</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">Kenya</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">8 Days</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-semibold">
                  $4,800
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-gray-600 hover:text-amber-600">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">WordPress Integration</h3>
        <p className="text-sm text-blue-800">
          Packages are managed through WordPress. Use the WordPress admin panel to create and edit packages,
          or configure the WordPress REST API credentials in your environment variables to enable direct management.
        </p>
      </div>
    </div>
  );
}
