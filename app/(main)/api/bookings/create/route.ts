import { NextRequest, NextResponse } from 'next/server';
import { generateBookingReference, validateBookingForm, calculateBookingPrice } from '@/lib/booking';
import type { BookingFormData } from '@/types/booking';

// Mock booking creation (replace with actual database logic)
export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json();

    // Validate booking data
    const validation = validateBookingForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    // Generate booking reference
    const bookingReference = generateBookingReference();

    // Calculate pricing (get base price from safari)
    const basePrice = 5500; // This should come from the safari data
    const pricing = calculateBookingPrice(basePrice, body.numberOfTravelers);

    // Create booking in database
    // TODO: Replace with actual Prisma database call
    const booking = {
      id: Math.random().toString(36).substring(7),
      bookingReference,
      safariId: body.safariId,
      startDate: body.startDate,
      endDate: body.endDate,
      numberOfTravelers: body.numberOfTravelers,
      totalPrice: pricing.total,
      depositAmount: pricing.depositAmount,
      balanceDue: pricing.balanceDue,
      depositPaid: false,
      balancePaid: false,
      status: 'PENDING',
      paymentStatus: 'PENDING',
      travelers: body.travelers,
      specialRequests: body.specialRequests,
      createdAt: new Date().toISOString(),
    };

    // TODO: Send confirmation email

    return NextResponse.json({
      success: true,
      booking,
      message: 'Booking created successfully',
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
