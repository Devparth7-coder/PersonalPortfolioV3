import { useState, useEffect } from 'react';

export type ThemeMode = 'apple-dark' | 'openai-light' | 'cyberpunk' | 'aurora';

const THEME_KEY = 'devparth_portfolio_theme';

export function useThemeStore() {
  const [theme, setThemeState] = useState<ThemeMode>('apple-dark');

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY) as ThemeMode;
    if (saved && ['apple-dark', 'openai-light', 'cyberpunk', 'aurora'].includes(saved)) {
      setThemeState(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'apple-dark');
    }
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return { theme, setTheme };
}
