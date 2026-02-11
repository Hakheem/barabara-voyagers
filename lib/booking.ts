import { BookingCalculation, BookingFormData } from '@/types/booking';

/**
 * Generate a unique booking reference
 */
export function generateBookingReference(): string {
  const prefix = 'BV';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

/**
 * Calculate booking pricing
 */
export function calculateBookingPrice(
  basePrice: number,
  numberOfTravelers: number,
  startDate?: Date
): BookingCalculation {
  const subtotal = basePrice * numberOfTravelers;

  // Calculate taxes (example: 10%)
  const taxRate = 0.10;
  const taxes = subtotal * taxRate;

  // Calculate fees (example: $50 per person)
  const feePerPerson = 50;
  const fees = feePerPerson * numberOfTravelers;

  const total = subtotal + taxes + fees;

  // Deposit is typically 30% of total
  const depositRate = 0.30;
  const depositAmount = Math.round(total * depositRate);
  const balanceDue = total - depositAmount;

  return {
    basePrice,
    numberOfTravelers,
    subtotal,
    taxes,
    fees,
    total,
    depositAmount,
    balanceDue,
  };
}

/**
 * Validate booking dates
 */
export function validateBookingDates(startDate: string, endDate: string): {
  valid: boolean;
  error?: string;
} {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (start < today) {
    return { valid: false, error: 'Start date cannot be in the past' };
  }

  if (end <= start) {
    return { valid: false, error: 'End date must be after start date' };
  }

  // Minimum advance booking (e.g., 30 days)
  const minAdvanceDays = 30;
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + minAdvanceDays);
  minDate.setHours(0, 0, 0, 0);

  if (start < minDate) {
    return {
      valid: false,
      error: `Bookings must be made at least ${minAdvanceDays} days in advance`,
    };
  }

  return { valid: true };
}

/**
 * Validate booking form data
 */
export function validateBookingForm(data: BookingFormData): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Validate safari ID
  if (!data.safariId) {
    errors.push('Safari selection is required');
  }

  // Validate dates
  const dateValidation = validateBookingDates(data.startDate, data.endDate);
  if (!dateValidation.valid && dateValidation.error) {
    errors.push(dateValidation.error);
  }

  // Validate number of travelers
  if (!data.numberOfTravelers || data.numberOfTravelers < 1) {
    errors.push('At least one traveler is required');
  }

  if (data.numberOfTravelers > 20) {
    errors.push('Maximum group size is 20 travelers');
  }

  // Validate travelers
  if (!data.travelers || data.travelers.length === 0) {
    errors.push('Traveler information is required');
  }

  if (data.travelers && data.travelers.length !== data.numberOfTravelers) {
    errors.push('Number of travelers does not match traveler information provided');
  }

  // Validate each traveler
  data.travelers?.forEach((traveler, index) => {
    if (!traveler.firstName) {
      errors.push(`Traveler ${index + 1}: First name is required`);
    }
    if (!traveler.lastName) {
      errors.push(`Traveler ${index + 1}: Last name is required`);
    }
    if (!traveler.email) {
      errors.push(`Traveler ${index + 1}: Email is required`);
    } else if (!isValidEmail(traveler.email)) {
      errors.push(`Traveler ${index + 1}: Invalid email format`);
    }
  });

  // Check for primary traveler
  const hasPrimary = data.travelers?.some((t) => t.isPrimary);
  if (data.travelers && data.travelers.length > 0 && !hasPrimary) {
    errors.push('At least one traveler must be marked as primary');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Format booking dates for display
 */
export function formatBookingDates(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startFormatted = start.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const endFormatted = end.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${startFormatted} - ${endFormatted}`;
}

/**
 * Calculate number of nights
 */
export function calculateNights(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

/**
 * Get booking status color
 */
export function getBookingStatusColor(status: string): string {
  const colors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    CONFIRMED: 'bg-blue-100 text-blue-800',
    DEPOSIT_PAID: 'bg-purple-100 text-purple-800',
    PAID: 'bg-green-100 text-green-800',
    IN_PROGRESS: 'bg-indigo-100 text-indigo-800',
    COMPLETED: 'bg-gray-100 text-gray-800',
    CANCELLED: 'bg-red-100 text-red-800',
    REFUNDED: 'bg-orange-100 text-orange-800',
  };

  return colors[status] || 'bg-gray-100 text-gray-800';
}

/**
 * Get payment status color
 */
export function getPaymentStatusColor(status: string): string {
  const colors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    PARTIAL: 'bg-orange-100 text-orange-800',
    PAID: 'bg-green-100 text-green-800',
    REFUNDED: 'bg-purple-100 text-purple-800',
    FAILED: 'bg-red-100 text-red-800',
  };

  return colors[status] || 'bg-gray-100 text-gray-800';
}
