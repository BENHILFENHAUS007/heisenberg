/**
 * Get the correct asset path based on the current environment
 * 
 * This function automatically adds the base URL (e.g., '/heisenberg/')
 * when building for production (GitHub Pages) while using '/' for dev.
 * 
 * @param path - The asset path relative to public folder (e.g., '/images/logo.png')
 * @returns The full asset path with base URL prepended
 * 
 * @example
 * ```tsx
 * import { getAssetPath } from '@/utils/getAssetPath';
 * 
 * // In dev: returns '/images/logo.png'
 * // In prod: returns '/heisenberg/images/logo.png'
 * <img src={getAssetPath('/images/logo.png')} />
 * ```
 */
export function getAssetPath(path: string): string {
  // Get the base URL from Vite environment
  // - Dev: '/'
  // - Production/Preview: '/heisenberg/'
  const base = import.meta.env.BASE_URL;
  
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Combine base and path, ensuring no double slashes
  return `${base}${cleanPath}`.replace(/\/\//g, '/');
}

/**
 * Legacy helper - for backward compatibility
 * Same as getAssetPath but with a more explicit name
 */
export function resolvePublicPath(path: string): string {
  return getAssetPath(path);
}
