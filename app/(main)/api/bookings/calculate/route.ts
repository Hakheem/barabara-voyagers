import { NextRequest, NextResponse } from 'next/server';
import { calculateBookingPrice } from '@/lib/booking';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { safariId, basePrice, numberOfTravelers, startDate } = body;

    if (!basePrice || !numberOfTravelers) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const calculation = calculateBookingPrice(
      parseFloat(basePrice),
      parseInt(numberOfTravelers),
      startDate ? new Date(startDate) : undefined
    );

    return NextResponse.json(calculation);
  } catch (error) {
    console.error('Error calculating booking price:', error);
    return NextResponse.json(
      { error: 'Failed to calculate price' },
      { status: 500 }
    );
  }
}
