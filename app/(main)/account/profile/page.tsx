'use client';

import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Save } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: 'Sarah',
    lastName: 'Mitchell',
    email: 'sarah.mitchell@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1985-06-15',
    nationality: 'United States',
    passportNumber: 'AB1234567',
    passportExpiry: '2028-12-31',
    address: '123 Safari Lane',
    city: 'San Francisco',
    state: 'California',
    zipCode: '94105',
    country: 'United States',
    emergencyContact: 'John Mitchell',
    emergencyPhone: '+1 (555) 987-6543',
    emergencyRelationship: 'Spouse',
  });

  const [preferences, setPreferences] = useState({
    newsletter: true,
    offers: true,
    smsNotifications: false,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePreferenceChange = (key: string) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key as keyof typeof preferences],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile update:', { profileData, preferences });
  };

  return (
    <section className="pb-12 pt-[16vh] lg:pt-[8rem] bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
            <p className="text-gray-600 ">
              Manage your personal information and preferences
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <Card className="p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-6 w-6 text-amber-600" />
                <h2 className="text-2xl font-bold">Personal Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profileData.dateOfBirth}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={profileData.nationality}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </Card>

            {/* Passport Information */}
            <Card className="p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Passport Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passport Number
                  </label>
                  <input
                    type="text"
                    name="passportNumber"
                    value={profileData.passportNumber}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passport Expiry Date
                  </label>
                  <input
                    type="date"
                    name="passportExpiry"
                    value={profileData.passportExpiry}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 ">
                  <strong>Important:</strong> Your passport must be valid for at least 6 months beyond your travel dates for most African countries.
                </p>
              </div>
            </Card>

            {/* Address */}
            <Card className="p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">Address</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={profileData.city}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State/Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={profileData.state}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP/Postal Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={profileData.zipCode}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={profileData.country}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold">Emergency Contact</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={profileData.emergencyContact}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={profileData.emergencyPhone}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship
                  </label>
                  <input
                    type="text"
                    name="emergencyRelationship"
                    value={profileData.emergencyRelationship}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </Card>

            {/* Communication Preferences */}
            <Card className="p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold">Communication Preferences</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={preferences.newsletter}
                    onChange={() => handlePreferenceChange('newsletter')}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="newsletter" className="ml-3">
                    <p className="font-semibold">Safari Inspiration Newsletter</p>
                    <p className="text-sm text-gray-600 ">
                      Monthly safari tips, travel inspiration, and destination guides
                    </p>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="offers"
                    checked={preferences.offers}
                    onChange={() => handlePreferenceChange('offers')}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="offers" className="ml-3">
                    <p className="font-semibold">Exclusive Offers & Deals</p>
                    <p className="text-sm text-gray-600 ">
                      Special promotions, last-minute deals, and VIP offers
                    </p>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="sms"
                    checked={preferences.smsNotifications}
                    onChange={() => handlePreferenceChange('smsNotifications')}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="sms" className="ml-3">
                    <p className="font-semibold">SMS Trip Updates</p>
                    <p className="text-sm text-gray-600 ">
                      Important travel notifications and booking reminders via text
                    </p>
                  </label>
                </div>
              </div>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" size="lg">
                <Save className="mr-2 h-5 w-5" />
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
