export interface Product {
  id: string;
  name: string;
  categoryId: string;
  thumbnail3D: string;
  videoUrl: string;
  tags: string[];
  descriptionShort: string;
  descriptionLong: string;
  effectType: string;
  noiseLevel: string;
  durationSeconds: number;
  hasVideo: boolean;
  isNew: boolean;
  isFeatured: boolean;
  displayOrder: number;
  comingSoon: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Theme {
  id: string;
  name: string;
  background: string;
  primaryColor: string;
  accentColor: string;
  secondaryColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface Config {
  siteName: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  branches: Branch[];
  ga4MeasurementId: string;
  pwa: PWAConfig;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  landmark: string;
  phone: string;
  mapUrl: string;
}

export interface PWAConfig {
  enabled: boolean;
  appName: string;
  shortName: string;
  themeColor: string;
  backgroundColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SafetyTip {
  icon: string;
  title: string;
  text: string;
}