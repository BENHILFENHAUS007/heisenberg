import React, { useState, ImgHTMLAttributes } from 'react';
import { getAssetPath } from '@/utils/getAssetPath';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * Enhanced Image component with automatic fallback support and proper asset path handling
 * 
 * Features:
 * - Automatic asset path resolution using getAssetPath
 * - Fallback image support
 * - Loading state with placeholder
 * - Error handling with retry mechanism
 * - Proper TypeScript typing
 * 
 * @example
 * <ImageWithFallback 
 *   src="/images/product.png"
 *   fallbackSrc="/images/placeholder.png"
 *   alt="Product image"
 *   className="w-full h-auto"
 * />
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  onError,
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(getAssetPath(src));
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsError(true);
    setIsLoading(false);

    // Try fallback if provided and not already used
    if (fallbackSrc && imgSrc !== getAssetPath(fallbackSrc)) {
      setImgSrc(getAssetPath(fallbackSrc));
      setIsError(false);
    }

    // Call custom error handler if provided
    if (onError) {
      onError(e);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setIsError(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 rounded">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
        </div>
      )}
      
      {isError && !fallbackSrc ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 rounded">
          <div className="text-center p-4">
            <p className="text-gray-400 text-sm">Image not available</p>
          </div>
        </div>
      ) : (
        <img
          {...props}
          src={imgSrc}
          alt={alt}
          className={className}
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

export default ImageWithFallback;
