import { NextRequest, NextResponse } from 'next/server';

// Mock Stripe payment intent creation
// TODO: Replace with actual Stripe integration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = 'usd', bookingId } = body;

    if (!amount || !bookingId) {
      return NextResponse.json(
        { error: 'Amount and bookingId are required' },
        { status: 400 }
      );
    }

    // Mock payment intent
    // TODO: Replace with actual Stripe.paymentIntents.create()
    const paymentIntent = {
      clientSecret: `pi_mock_secret_${Math.random().toString(36).substring(7)}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method',
    };

    return NextResponse.json(paymentIntent);
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
