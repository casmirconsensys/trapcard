'use client';

import { useStore } from '@/lib/hooks';
import { themeStore } from '@/lib/store';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ThemeButton = () => {
  const theme = useStore(themeStore, (state) => state.theme);
  const { setTheme } = themeStore();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} disabled>
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className={'h-4 w-4 text-teal-500'} />
      ) : (
        <FontAwesomeIcon icon={faSun} className={'h-4 w-4 text-teal-500'} />
      )}
    </button>
  );
};
