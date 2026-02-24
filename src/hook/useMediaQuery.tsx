import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  // Initialize with false (or a check if window is defined for SSR)
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window is available (important for Next.js/SSR)
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Set initial value
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      
      // Modern browser support for change events
      media.addEventListener('change', listener);
      
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
}