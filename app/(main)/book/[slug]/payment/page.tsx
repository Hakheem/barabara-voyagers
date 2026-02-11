'use client';

import { useState, use } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CreditCard, Lock, ChevronLeft, Check, AlertCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface Params {
  slug: string;
}

export default function PaymentPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();

  const [paymentType, setPaymentType] = useState<'deposit' | 'full'>('deposit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [billingZip, setBillingZip] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const numberOfTravelers = parseInt(searchParams.get('travelers') || '2');
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';

  // Mock safari and pricing data
  const safari = {
    id: '1',
    title: 'Tanzania Safari Adventure',
    slug: resolvedParams.slug,
    destination: 'Tanzania',
    duration: 10,
    basePrice: 5500,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
  };

  const subtotal = safari.basePrice * numberOfTravelers;
  const taxes = subtotal * 0.10; // 10% tax
  const fees = numberOfTravelers * 50; // $50 per person fee
  const total = subtotal + taxes + fees;
  const depositAmount = Math.round(total * 0.30); // 30% deposit
  const balanceDue = total - depositAmount;

  const amountToPay = paymentType === 'deposit' ? depositAmount : total;

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(formatExpiry(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!agreeTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setProcessing(true);

    try {
      // Mock payment processing
      // TODO: Integrate with Stripe
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate booking reference
      const bookingReference = 'BV-' + Date.now().toString(36).toUpperCase();

      // Redirect to confirmation
      window.location.href = `/book/${safari.slug}/confirmation?reference=${bookingReference}&type=${paymentType}`;
    } catch (err) {
      setError('Payment failed. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-[15vh] lg:pt-[24vh]">
      <Container>
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {['Details', 'Travelers', 'Payment', 'Confirmation'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      index + 1 === 3
                        ? 'bg-amber-900 text-white'
                        : index + 1 < 3
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm mt-2 font-lato">{label}</span>
                </div>
                {index < 3 && (
                  <div
                    className={`w-24 h-1 mx-4 ${index < 2 ? 'bg-green-600' : 'bg-gray-300'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lock className="h-8 w-8 text-green-600" />
                Secure Payment
              </h1>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 font-lato">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Payment Option
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentType('deposit')}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        paymentType === 'deposit'
                          ? 'border-amber-900 bg-amber-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-semibold">Pay Deposit</div>
                          <div className="text-2xl font-bold text-amber-900 mt-1">
                            {/* {formatPrice(depositAmount.toString(), 'USD')} */}
                          </div>
                          <div className="text-sm text-gray-600 mt-1 font-lato">
                            30% to secure booking
                          </div>
                        </div>
                        {paymentType === 'deposit' && (
                          <Check className="h-6 w-6 text-amber-900" />
                        )}
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentType('full')}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        paymentType === 'full'
                          ? 'border-amber-900 bg-amber-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-semibold">Pay in Full</div>
                          <div className="text-2xl font-bold text-amber-900 mt-1">
                            {/* {formatPrice(total.toString(), 'USD')} */}
                          </div>
                          <div className="text-sm text-gray-600 mt-1 font-lato">
                            Complete payment
                          </div>
                        </div>
                        {paymentType === 'full' && (
                          <Check className="h-6 w-6 text-amber-900" />
                        )}
                      </div>
                    </button>
                  </div>

                  {paymentType === 'deposit' && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-900 font-lato">
                        <strong>Balance of 
                           {/* {formatPrice(balanceDue.toString(), 'USD')} */}
                           </strong> due 60 days before departure
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Details */}
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Card Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-mono text-lg"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry *
                        </label>
                        <input
                          type="text"
                          required
                          value={expiryDate}
                          onChange={handleExpiryChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-mono"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          required
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-mono"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Zip Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={billingZip}
                          onChange={(e) => setBillingZip(e.target.value)}
                          placeholder="12345"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent font-lato"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="pt-6 border-t">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-1 w-5 h-5 text-amber-900 rounded"
                    />
                    <span className="text-sm text-gray-700 font-lato">
                      I agree to the{' '}
                      <Link href="/terms" className="text-amber-900 underline" target="_blank">
                        Terms & Conditions
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-amber-900 underline" target="_blank">
                        Privacy Policy
                      </Link>
                      . I understand the cancellation policy and payment schedule.
                    </span>
                  </label>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-green-900 font-lato">
                      <p className="font-semibold mb-1">Your payment is secure</p>
                      <p>We use industry-standard SSL encryption to protect your payment information. Your card details are never stored on our servers.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <Link
                    href={`/book/${safari.slug}/travelers?${searchParams.toString()}`}
                    className="flex items-center gap-2 text-amber-900 hover:underline font-lato"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    Back to travelers
                  </Link>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={processing}
                    className="min-w-[200px]"
                  >
                    {processing ? (
                      'Processing...'
                    ) : (
                      <>
                        Pay
                         {/* {formatPrice(amountToPay.toString(), 'USD')} */}
                        <Lock className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Payment Summary */}
          <div>
            <Card className="p-6 sticky lg:top-32 top-24">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={safari.image}
                  alt={safari.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{safari.title}</h3>
              <p className="text-gray-600 mb-4 font-lato">{safari.destination} • {safari.duration} Days</p>

              <div className="border-t border-b py-4 space-y-3 font-lato">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Base Price ({numberOfTravelers} travelers)</span>
                  {/* <span className="font-medium">{formatPrice(subtotal.toString(), 'USD')}</span> */}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes (10%)</span>
                  {/* <span className="font-medium">{formatPrice(taxes.toString(), 'USD')}</span> */}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Fees</span>
                  {/* <span className="font-medium">{formatPrice(fees.toString(), 'USD')}</span> */}
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center pb-4 border-b">
                <span className="font-semibold">Total Trip Cost</span>
                <span className="text-xl font-bold">
                  {/* {formatPrice(total.toString(), 'USD')} */}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 font-lato">
                    {paymentType === 'deposit' ? 'Deposit (30%)' : 'Paying Today'}
                  </span>
                  <span className="text-2xl font-bold text-amber-900">
                    {/* {formatPrice(amountToPay.toString(), 'USD')} */}
                  </span>
                </div>
                {paymentType === 'deposit' && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-lato">Balance Due</span>
                    {/* <span className="font-semibold">{formatPrice(balanceDue.toString(), 'USD')}</span> */}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
