// Booking System Types

export interface BookingFormData {
  safariId: string;
  startDate: string;
  endDate: string;
  numberOfTravelers: number;
  travelers: TravelerInfo[];
  specialRequests?: string;
}

export interface TravelerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  passportNumber?: string;
  passportExpiry?: string;
  passportCountry?: string;
  nationality?: string;
  dietaryRequirements?: string;
  medicalInfo?: string;
  roomPreference?: string;
  isPrimary: boolean;
  emergencyName?: string;
  emergencyPhone?: string;
  emergencyRelation?: string;
}

export interface BookingCalculation {
  basePrice: number;
  numberOfTravelers: number;
  subtotal: number;
  taxes: number;
  fees: number;
  total: number;
  depositAmount: number;
  balanceDue: number;
}

export interface BookingDetails {
  id: string;
  bookingReference: string;
  status: string;
  safari: {
    id: string;
    title: string;
    destination: string;
    duration: number;
  };
  startDate: string;
  endDate: string;
  numberOfTravelers: number;
  totalPrice: number;
  depositAmount: number;
  depositPaid: boolean;
  balanceDue: number;
  balancePaid: boolean;
  paymentStatus: string;
  travelers: TravelerInfo[];
  specialRequests?: string;
  createdAt: string;
  confirmedAt?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone?: string;
  safariId?: string;
  destination?: string;
  travelDates?: string;
  flexibleDates: boolean;
  groupSize?: number;
  budget?: string;
  message: string;
}

export interface PaymentIntent {
  clientSecret: string;
  amount: number;
  currency: string;
}

export type BookingStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'DEPOSIT_PAID'
  | 'PAID'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'REFUNDED';

export type PaymentStatus = 'PENDING' | 'PARTIAL' | 'PAID' | 'REFUNDED' | 'FAILED';

export type InquiryStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUOTED'
  | 'FOLLOWING_UP'
  | 'CONVERTED'
  | 'LOST'
  | 'SPAM';
