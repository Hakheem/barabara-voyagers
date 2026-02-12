// export * from './wordpress';

// export interface Destination {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   image: string;
//   country: string;
//   region: string;
//   featured: boolean;
// }

// export interface Package {
//   id: string;
//   title: string;
//   slug: string;
//   description: string;
//   excerpt: string;
//   destination: string;
//   duration: string;
//   price: string;
//   currency: string;
//   image: string;
//   gallery: string[];
//   highlights: string[];
//   itinerary: ItineraryDay[];
//   includes: string[];
//   excludes: string[];
//   bestTimeToVisit: string;
//   difficultyLevel: string;
//   groupSize: string;
// }

// export interface ItineraryDay {
//   day: number;
//   title: string;
//   description: string;
//   accommodation?: string;
//   meals?: string;
// }

// export interface BlogPost {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   author: string;
//   date: string;
//   image: string;
//   categories: string[];
//   tags: string[];
// }

// export interface Testimonial {
//   id: string;
//   clientName: string;
//   clientLocation: string;
//   content: string;
//   rating: number;
//   packageName: string;
//   tripDate: string;
//   featured: boolean;
// }

// export interface GalleryAlbum {
//   id: string;
//   title: string;
//   slug: string;
//   description: string;
//   destination: string;
//   coverImage: string;
//   images: GalleryImage[];
// }

// export interface GalleryImage {
//   id: string;
//   url: string;
//   alt: string;
//   caption?: string;
//   width: number;
//   height: number;
// }

export * from "./wordpress";

// ============================================================================
// ENUMS (matching Prisma schema exactly)
// ============================================================================

export enum UserRole {
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN",
  STAFF = "STAFF",
  SUPERADMIN = "SUPERADMIN",
}

export enum SafariStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DRAFT = "DRAFT",
  ARCHIVED = "ARCHIVED",
}

export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  DEPOSIT_PAID = "DEPOSIT_PAID",
  PAID = "PAID",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  REFUNDED = "REFUNDED",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PARTIAL = "PARTIAL",
  PAID = "PAID",
  REFUNDED = "REFUNDED",
  FAILED = "FAILED",
}

export enum PaymentType {
  DEPOSIT = "DEPOSIT",
  BALANCE = "BALANCE",
  FULL = "FULL",
  REFUND = "REFUND",
  ADDON = "ADDON",
}

export enum InquiryStatus {
  NEW = "NEW",
  CONTACTED = "CONTACTED",
  QUOTED = "QUOTED",
  FOLLOWING_UP = "FOLLOWING_UP",
  CONVERTED = "CONVERTED",
  LOST = "LOST",
  SPAM = "SPAM",
}

export enum CommunicationType {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
  MEETING = "MEETING",
  NOTE = "NOTE",
  SMS = "SMS",
}

export enum DocumentType {
  INVOICE = "INVOICE",
  RECEIPT = "RECEIPT",
  ITINERARY = "ITINERARY",
  VOUCHER = "VOUCHER",
  VISA_LETTER = "VISA_LETTER",
  INSURANCE = "INSURANCE",
  PACKING_LIST = "PACKING_LIST",
  CONTRACT = "CONTRACT",
}

export enum NotificationType {
  BOOKING_CONFIRMED = "BOOKING_CONFIRMED",
  PAYMENT_RECEIVED = "PAYMENT_RECEIVED",
  PAYMENT_REMINDER = "PAYMENT_REMINDER",
  TRIP_REMINDER = "TRIP_REMINDER",
  INQUIRY_RESPONSE = "INQUIRY_RESPONSE",
  SYSTEM = "SYSTEM",
}

// ============================================================================
// USER & AUTHENTICATION (from Prisma)
// ============================================================================

export interface User {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role: UserRole;
  emailVerified: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  bookings?: Booking[];
  inquiries?: Inquiry[];
  sessions?: Session[];
}

export interface Session {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date | string;
  createdAt: Date | string;
  user?: User;
}

// ============================================================================
// SAFARI PACKAGES (Prisma - for database operations)
// ============================================================================

export interface Safari {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  destination: string;
  destinationId?: string;
  duration: number; // days
  durationNights: number; // nights
  basePrice: number;
  currency: string;
  maxGroupSize: number;
  minGroupSize: number;
  difficultyLevel?: string;
  category?: string;
  featured: boolean;
  status: SafariStatus;

  // JSON Fields (arrays stored as JSON in Prisma)
  itinerary?: ItineraryDay[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  accommodations?: Accommodation[];
  images?: string[];

  // SEO
  metaTitle?: string;
  metaDescription?: string;

  createdAt: Date | string;
  updatedAt: Date | string;

  // Relations
  bookings?: Booking[];
  inquiries?: Inquiry[];
  availability?: Availability[];
}

// ============================================================================
// PACKAGE (Sanity CMS - for content and UI display)
// This is your existing Package type, kept exactly as is
// ============================================================================

export interface Package {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  destination: string;
  duration: string; // e.g., "8 Days / 7 Nights"
  price: string; // string for display purposes
  currency: string;
  image: string;
  gallery: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  bestTimeToVisit?: string;
  difficultyLevel?: string;
  groupSize?: string;
}

// ============================================================================
// SHARED TYPES (used by both Prisma Safari and Sanity Package)
// ============================================================================

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  meals?: string;
}

export interface Accommodation {
  name: string;
  type: string; // Lodge, Camp, Hotel, etc.
  description?: string;
  rating?: number;
  location?: string;
  amenities?: string[];
}

// ============================================================================
// DESTINATIONS (kept as your original)
// ============================================================================

export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  country: string;
  region: string;
  featured: boolean;
  tagline?: string;
}

// ============================================================================
// BOOKINGS (from Prisma)
// ============================================================================

export interface Booking {
  id: string;
  bookingReference: string;

  // Relationships
  userId: string;
  safariId: string;

  // Booking Details
  status: BookingStatus;
  startDate: Date | string;
  endDate: Date | string;
  numberOfTravelers: number;

  // Pricing
  basePrice: number;
  totalPrice: number;
  depositAmount: number;
  depositPaid: boolean;
  depositPaidAt?: Date | string;
  balanceDue: number;
  balancePaid: boolean;
  balancePaidAt?: Date | string;

  // Additional Information
  specialRequests?: string;
  internalNotes?: string;

  // Payment
  paymentStatus: PaymentStatus;
  paymentMethod?: string;

  createdAt: Date | string;
  updatedAt: Date | string;
  confirmedAt?: Date | string;
  cancelledAt?: Date | string;

  // Relations
  user?: User;
  safari?: Safari;
  travelers?: Traveler[];
  payments?: Payment[];
  communications?: Communication[];
  documents?: Document[];
}

export interface CreateBookingInput {
  safariId: string;
  startDate: string;
  numberOfTravelers: number;
  specialRequests?: string;
  travelers: CreateTravelerInput[];
}

// ============================================================================
// TRAVELERS (from Prisma)
// ============================================================================

export interface Traveler {
  id: string;
  bookingId: string;

  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: Date | string;

  // Travel Documents
  passportNumber?: string;
  passportExpiry?: Date | string;
  passportCountry?: string;
  nationality?: string;

  // Preferences & Requirements
  dietaryRequirements?: string;
  medicalInfo?: string;
  roomPreference?: string;
  isPrimary: boolean;

  // Emergency Contact
  emergencyName?: string;
  emergencyPhone?: string;
  emergencyRelation?: string;

  createdAt: Date | string;
  updatedAt: Date | string;

  booking?: Booking;
}

export interface CreateTravelerInput {
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
  isPrimary?: boolean;
  emergencyName?: string;
  emergencyPhone?: string;
  emergencyRelation?: string;
}

// ============================================================================
// PAYMENTS (from Prisma)
// ============================================================================

export interface Payment {
  id: string;
  bookingId: string;

  amount: number;
  currency: string;
  paymentType: PaymentType;
  paymentMethod: string;
  status: string;

  // External References
  stripePaymentId?: string;
  transactionId?: string;

  // Details
  description?: string;
  receiptUrl?: string;

  paymentDate?: Date | string;
  createdAt: Date | string;

  booking?: Booking;
}

export interface CreatePaymentInput {
  bookingId: string;
  amount: number;
  paymentType: PaymentType;
  paymentMethod: string;
}

// ============================================================================
// INQUIRIES (from Prisma)
// ============================================================================

export interface Inquiry {
  id: string;

  // Contact Information
  name: string;
  email: string;
  phone?: string;

  // Trip Details
  safariId?: string;
  destination?: string;
  travelDates?: string;
  flexibleDates: boolean;
  groupSize?: number;
  budget?: string;

  message: string;

  // Management
  status: InquiryStatus;
  assignedTo?: string;
  userId?: string;

  // Follow-up
  followUpDate?: Date | string;
  convertedToBooking: boolean;

  createdAt: Date | string;
  updatedAt: Date | string;

  // Relations
  user?: User;
  safari?: Safari;
  communications?: Communication[];
}

export interface CreateInquiryInput {
  name: string;
  email: string;
  phone?: string;
  safariId?: string;
  destination?: string;
  travelDates?: string;
  flexibleDates?: boolean;
  groupSize?: number;
  budget?: string;
  message: string;
}

// ============================================================================
// COMMUNICATIONS (from Prisma)
// ============================================================================

export interface Communication {
  id: string;
  bookingId?: string;
  inquiryId?: string;

  type: CommunicationType;
  subject?: string;
  message: string;
  sentBy: string; // User ID or "system"
  sentTo: string; // Email address

  // Email specific
  emailSent: boolean;
  emailStatus?: string;

  sentAt: Date | string;

  booking?: Booking;
  inquiry?: Inquiry;
}

// ============================================================================
// DOCUMENTS (from Prisma)
// ============================================================================

export interface Document {
  id: string;
  bookingId: string;

  name: string;
  type: DocumentType;
  url: string;
  fileSize?: number;

  generatedAt: Date | string;

  booking?: Booking;
}

// ============================================================================
// AVAILABILITY (from Prisma)
// ============================================================================

export interface Availability {
  id: string;
  safariId: string;
  date: Date | string;
  availableSpots: number;
  priceOverride?: number;
  blocked: boolean;
  reason?: string;

  createdAt: Date | string;
  updatedAt: Date | string;

  safari?: Safari;
}

// ============================================================================
// EMAIL TEMPLATES (from Prisma)
// ============================================================================

export interface EmailTemplate {
  id: string;
  name: string;
  slug: string;
  subject: string;
  body: string;
  variables?: Record<string, string>;

  createdAt: Date | string;
  updatedAt: Date | string;
}

// ============================================================================
// SETTINGS (from Prisma)
// ============================================================================

export interface Setting {
  id: string;
  key: string;
  value: string;
  type: "string" | "number" | "boolean" | "json";
  description?: string;

  updatedAt: Date | string;
}

// ============================================================================
// BLOG & CONTENT (kept as your original)
// ============================================================================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  categories: string[];
  tags: string[];
}

// ============================================================================
// TESTIMONIALS (kept as your original)
// ============================================================================

export interface Testimonial {
  id: string;
  clientName: string;
  clientLocation: string;
  content: string;
  rating: number;
  packageName: string;
  tripDate: string;
  featured: boolean;
}

// ============================================================================
// GALLERY (kept as your original)
// ============================================================================

export interface GalleryAlbum {
  id: string;
  title: string;
  slug: string;
  description: string;
  destination: string;
  coverImage: string;
  images: GalleryImage[];
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

// ============================================================================
// ADDITIONAL HELPFUL TYPES
// ============================================================================

export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  name?: string;
  subscribed: boolean;
  subscribedAt: Date | string;
  unsubscribedAt?: Date | string;
}

export interface SearchFilters {
  destination?: string;
  duration?: {
    min?: number;
    max?: number;
  };
  price?: {
    min?: number;
    max?: number;
  };
  category?: string;
  difficulty?: string;
  dates?: {
    start?: Date | string;
    end?: Date | string;
  };
  groupSize?: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: any;
  };
  meta?: {
    timestamp: string;
    requestId?: string;
  };
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: any;
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: Date | string;
}
