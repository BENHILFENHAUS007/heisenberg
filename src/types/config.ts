/**
 * TK Fireworks Configuration Type Definitions
 * Provides complete type safety for config.json access throughout the application
 */

export interface BrandConfig {
  name: string;
  tagline: string;
  website: string;
  description: string;
}

export interface ContactConfig {
  primaryPhone: string;
  secondaryPhone: string;
  email: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
}

export interface EmergencyConfig {
  fire: string;
  ambulance: string;
  police: string;
  generalEmergency: string;
}

export interface AddressDetail {
  label: string;
  address: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
}

export interface BranchAddress {
  id: string;
  name: string;
  address: string;
  landmark: string;
  phone: string;
  mapUrl: string;
}

export interface AddressesConfig {
  corporate: AddressDetail;
  registered: AddressDetail;
  communications: AddressDetail;
  branches: BranchAddress[];
}

export interface SocialConfig {
  facebook: string;
  instagram: string;
  youtube: string;
  whatsapp: string;
  twitter: string;
  threads: string;
  linkedin: string;
}

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

export interface LogoSizeConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

export interface ImagesConfig {
  basePath: string;
  productPath: string;
  logoSize: LogoSizeConfig;
}

export interface FeaturesConfig {
  enableNotifications: boolean;
  enableWishlist: boolean;
  enableBulkOrders: boolean;
  enableGallery: boolean;
  enableFAQ: boolean;
}

export interface PWAConfig {
  enabled: boolean;
  appName: string;
  shortName: string;
  themeColor: string;
  backgroundColor: string;
}

export interface AnalyticsConfig {
  ga4MeasurementId: string;
  enableAnalytics: boolean;
}

/**
 * Main Config Interface
 * Includes both nested structure (for organization) and flattened root-level properties (for easy access)
 */
export interface AppConfig {
  // Nested structures (organized by domain)
  brand: BrandConfig;
  contact: ContactConfig;
  emergency: EmergencyConfig;
  addresses: AddressesConfig;
  social: SocialConfig;
  api: ApiConfig;
  images: ImagesConfig;
  features: FeaturesConfig;
  pwa: PWAConfig;
  analytics: AnalyticsConfig;

  // Metadata
  siteName: string;
  primaryLanguage: string;

  // Flattened root-level properties for easy direct access
  // These duplicate values from nested structure for backward compatibility
  whatsappNumber: string;
  email: string;
  ga4MeasurementId: string;
  primaryPhone: string;
  whatsappDefaultMessage: string;
  getMessagesFromId?: string; // Optional - for future message integration

  // Internal marker for flattened properties
  __FLATTENED_ROOT_PROPERTIES__?: string;
}

/**
 * Config getter utility with type safety
 * Usage: const config = getConfig(); config.whatsappNumber
 */
export const getConfig = (): AppConfig => {
  // This is imported in components, TypeScript will catch access errors
  const config = require('../data/config.json') as AppConfig;
  return config;
};

/**
 * Utility function to safely access config with fallback
 * @param key - Config property key
 * @param fallback - Default value if not found
 * @returns Config value or fallback
 */
export const getConfigValue = <T = any>(
  key: keyof AppConfig,
  fallback?: T
): T => {
  const config = getConfig();
  const value = config[key];
  return (value as T) || fallback;
};

/**
 * Contact info getter with type safety
 */
export const getContactInfo = () => {
  const config = getConfig();
  return {
    whatsapp: config.whatsappNumber || config.contact.whatsappNumber,
    email: config.email || config.contact.email,
    phone: config.primaryPhone || config.contact.primaryPhone,
    message: config.whatsappDefaultMessage || config.contact.whatsappDefaultMessage,
  };
};

/**
 * Analytics getter with type safety
 */
export const getAnalyticsConfig = () => {
  const config = getConfig();
  return {
    ga4MeasurementId: config.ga4MeasurementId || config.analytics.ga4MeasurementId,
    enableAnalytics: config.analytics.enableAnalytics,
  };
};
