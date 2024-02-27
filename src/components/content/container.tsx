'use client';

import { useStore } from '@/lib/hooks';
import { themeStore } from '@/lib/store';
import React from 'react';

export const HomeContainer = ({ children }: { children: React.ReactNode }) => {
  const theme = useStore(themeStore, (state) => state.theme);
  return (
    <div
      className={`md:px-32 px-8 space-y-8 md:py-40 py-48 ${
        theme === 'light' ? 'lightHeroBg' : 'darkHeroBg'
      } bg-center bg-cover bg-fixed`}
    >
      {children}
    </div>
  );
};
