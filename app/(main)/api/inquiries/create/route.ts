import { NextRequest, NextResponse } from 'next/server';
import type { InquiryFormData } from '@/types/booking';

export async function POST(request: NextRequest) {
  try {
    const body: InquiryFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create inquiry in database
    // TODO: Replace with actual Prisma database call
    const inquiry = {
      id: Math.random().toString(36).substring(7),
      name: body.name,
      email: body.email,
      phone: body.phone,
      safariId: body.safariId,
      destination: body.destination,
      travelDates: body.travelDates,
      flexibleDates: body.flexibleDates,
      groupSize: body.groupSize,
      budget: body.budget,
      message: body.message,
      status: 'NEW',
      createdAt: new Date().toISOString(),
    };

    // TODO: Send notification email to admin
    // TODO: Send thank you email to customer

    return NextResponse.json({
      success: true,
      inquiry,
      message: 'Thank you for your inquiry! We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}
