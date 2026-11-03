export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'GHS';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  rate: number; // relative to USD (1.0)
  name: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  experience: string;
  coordinates: string;
  climate: string;
  image: string;
  description: string;
  highlights: string[];
  propertiesCount: number;
}

export interface Property {
  id: string;
  name: string;
  destinationId: string;
  location: string;
  type: string;
  typeCategory: 'beach' | 'mountain' | 'cultural' | 'villa';
  baseRateUSD: number;
  guests: number;
  bedrooms: number;
  image: string;
  gallery: string[];
  tagline: string;
  description: string;
  amenities: string[];
  suites: {
    name: string;
    upgradeUSD: number;
    description: string;
  }[];
}

export interface Experience {
  id: string;
  title: string;
  category: 'wellness' | 'dining' | 'culture' | 'adventure' | 'romance';
  destination: string;
  duration: string;
  priceUSD: number;
  image: string;
  description: string;
  included: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  destination: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
}

export interface AddonOption {
  id: string;
  title: string;
  description: string;
  priceUSD: number;
  category: 'aviation' | 'dining' | 'wellness' | 'safari';
}

export interface BookingState {
  propertyId: string;
  propertyName: string;
  location: string;
  baseRateUSD: number;
  suiteName: string;
  suiteUpgradeUSD: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  selectedAddons: string[]; // addon ids
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  whatsappPreferred: boolean;
  step: number;
  bookingRef?: string;
}

export interface WishlistItem {
  id: string;
  type: 'property' | 'destination' | 'experience';
  title: string;
  subtitle: string;
  image: string;
  rateUSD?: number;
}

