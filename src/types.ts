export type CategoryType = 'sports' | 'movies' | 'series' | 'morocco' | 'france' | 'uk' | 'usa';

export interface PosterItem {
  id: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  rating: number;
  year?: string;
  resolution: '4K ULTRA HD' | 'FULL HD 1080P' | 'HD 720P';
  posterUrl: string;
  badge?: string;
  description: string;
  genre?: string[];
  channelCount?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: {
    USD: number;
    EUR: number;
    GBP: number;
  };
  originalPrice?: {
    USD: number;
    EUR: number;
    GBP: number;
  };
  popular?: boolean;
  savings?: string;
  /** One-line pitch shown under the plan name. */
  tagline?: string;
  features: string[];
  whatsappText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'setup' | 'technical' | 'payment';
}

export interface DeviceInfo {
  name: string;
  iconName: string;
  description: string;
  apps: string[];
}

/** A subscription tier. Prices are held per duration pack, per device count. */
export interface PackageTier {
  id: 'basic' | 'vip';
  name: string;
  headline: string;
  features: string[];
}

/** One subscription length. `prices[tier][devices - 1]` gives the EUR price. */
export interface DurationPack {
  id: string;
  label: string;
  months: number;
  savePercent: number;
  bestDeal?: boolean;
  prices: {
    basic: number[];
    vip: number[];
  };
}

/** One channel shown in the live line-up rail. */
export interface ChannelItem {
  id: string;
  name: string;
  category: string;
  quality: string;
  flag: string;
  /** Short text mark used when no logo image is available. */
  logoText: string;
  logo?: string;
}
