/**
 * TK Fireworks Configuration Type Definitions
 * Provides complete type safety for config.json access throughout the application
 * FINAL VERSION - All properties defined, type-safe, production-ready
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

export interface LinksConfig {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  whatsapp: string;
  threads: string;
  linkedin: string;
}

export interface YouTubeConfig {
  channelUrl: string;
  videoUrl: string;
}

export interface MediaConfig {
  youtube: YouTubeConfig;
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
 * Complete type definition for entire config.json structure
 */
export interface AppConfig {
  // Nested structures (organized by domain)
  brand: BrandConfig;
  contact: ContactConfig;
  emergency: EmergencyConfig;
  addresses: AddressesConfig;
  social: SocialConfig;
  links: LinksConfig;
  media: MediaConfig;
  api: ApiConfig;
  images: ImagesConfig;
  features: FeaturesConfig;
  pwa: PWAConfig;
  analytics: AnalyticsConfig;

  // Metadata
  siteName: string;
  primaryLanguage: string;

  // Flattened root-level properties for easy direct access
  whatsappNumber: string;
  email: string;
  ga4MeasurementId: string;
  primaryPhone: string;
  whatsappDefaultMessage: string;
  getMessagesFromId?: string;
  __FLATTENED_ROOT_PROPERTIES__?: string;
}

/**
 * Config getter utility - Direct and simple
 */
export const getConfig = (): AppConfig => {
  return require('../data/config.json') as AppConfig;
};

/**
 * Utility function to safely access config with fallback
 * SIMPLIFIED: Direct value access without generic type issues
 */
export const getConfigValue = (key: keyof AppConfig, fallback?: any): any => {
  try {
    const config = getConfig();
    const value = config[key];
    return value !== undefined ? value : fallback;
  } catch (error) {
    console.error('Error accessing config value:', error);
    return fallback;
  }
};

/**
 * SAFE: Contact info getter with type safety AND fallbacks
 * Handles missing config, undefined values, and async loading
 * Perfect for Contact page and footer components
 * GUARANTEED to never crash
 */
export const getSafeContactInfo = () => {
  try {
    const config = getConfig();
    
    return {
      // Primary phone with fallback
      phone: config?.primaryPhone || config?.contact?.primaryPhone || '+91-XXXX-XXXX',
      
      // Email with fallback
      email: config?.email || config?.contact?.email || 'info@tkfireworks.com',
      
      // WhatsApp with fallback
      whatsapp: config?.whatsappNumber || config?.contact?.whatsappNumber || '',
      
      // WhatsApp message with fallback
      whatsappMessage: config?.whatsappDefaultMessage || config?.contact?.whatsappDefaultMessage || 'Hi, I\'m interested in TK Fireworks products. Please assist.',
      
      // Addresses with safe fallbacks
      addresses: {
        corporate: config?.addresses?.corporate || { 
          label: 'Corporate Address',
          address: 'TK Fireworks Corporate Office, Celebration City, State 560001'
        },
        registered: config?.addresses?.registered || {
          label: 'Registered Address',
          address: 'TK Fireworks Registered Office, Celebration City, State 560001'
        },
        communications: config?.addresses?.communications || {
          label: 'Communications Address',
          address: 'TK Fireworks Communications, Celebration City, State 560001'
        },
      },
    };
  } catch (error) {
    console.error('Error loading contact info from config:', error);
    
    // Return safe defaults if config loading fails
    return {
      phone: '+91-XXXX-XXXX',
      email: 'info@tkfireworks.com',
      whatsapp: '',
      whatsappMessage: 'Hi, I\'m interested in TK Fireworks products. Please assist.',
      addresses: {
        corporate: {
          label: 'Corporate Address',
          address: 'TK Fireworks Corporate Office, Celebration City, State 560001'
        },
        registered: {
          label: 'Registered Address',
          address: 'TK Fireworks Registered Office, Celebration City, State 560001'
        },
        communications: {
          label: 'Communications Address',
          address: 'TK Fireworks Communications, Celebration City, State 560001'
        },
      },
    };
  }
};

/**
 * Analytics getter with type safety and fallbacks
 */
export const getAnalyticsConfig = () => {
  try {
    const config = getConfig();
    return {
      ga4MeasurementId: config?.ga4MeasurementId || config?.analytics?.ga4MeasurementId || 'G-XXXXXXXXXX',
      enableAnalytics: config?.analytics?.enableAnalytics || false,
    };
  } catch (error) {
    console.error('Error loading analytics config:', error);
    return {
      ga4MeasurementId: 'G-XXXXXXXXXX',
      enableAnalytics: false,
    };
  }
};

/**
 * SAFE: Get social links with fallbacks
 * Returns links config or falls back to social config
 */
export const getSafeSocialLinks = () => {
  try {
    const config = getConfig();
    // Try links first (preferred), then fall back to social
    return (config?.links && Object.keys(config.links).length > 0) 
      ? config.links 
      : (config?.social && Object.keys(config.social).length > 0)
        ? config.social
        : {};
  } catch (error) {
    console.error('Error loading social links:', error);
    return {};
  }
};

/**
 * SAFE: Get YouTube links with fallbacks
 * Returns media.youtube or default values
 */
export const getSafeYoutubeLinks = () => {
  try {
    const config = getConfig();
    return config?.media?.youtube || {
      channelUrl: 'https://www.youtube.com/tkfireworks',
      videoUrl: ''
    };
  } catch (error) {
    console.error('Error loading YouTube links:', error);
    return {
      channelUrl: 'https://www.youtube.com/tkfireworks',
      videoUrl: ''
    };
  }
};

/**
 * SAFE: Get all config with fallbacks
 * Returns full config or defaults
 */
export const getSafeFullConfig = (): AppConfig | null => {
  try {
    return getConfig();
  } catch (error) {
    console.error('Error loading full config:', error);
    return null;
  }
};
