"use client";

import { createContext, useContext, ReactNode } from 'react';
import { useMediaQuery } from '@/hook/useMediaQuery';

interface MediaQueryContextType {
  isMobile: boolean;
}

const MediaQueryContext = createContext<MediaQueryContextType | undefined>(undefined);

export function MediaQueryProvider({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <MediaQueryContext.Provider value={{ isMobile }}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export function useMediaQueryContext() {
  const context = useContext(MediaQueryContext);
  if (context === undefined) {
    throw new Error('useMediaQueryContext must be used within a MediaQueryProvider');
  }
  return context;
}
