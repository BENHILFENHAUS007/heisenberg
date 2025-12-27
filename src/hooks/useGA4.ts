import { useEffect } from 'react';
import configData from '../data/config.json';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const useGA4 = () => {
  useEffect(() => {
    // Initialize GA4
    // Support both root-level and nested property access
    const measurementId = (configData as any).ga4MeasurementId || (configData as any).analytics?.ga4MeasurementId;
    
    if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer?.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', measurementId);
    }
  }, []);

  const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventData);
    }
  };

  return { trackEvent };
};