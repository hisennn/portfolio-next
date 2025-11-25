'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, isDarkTheme, toggleTheme } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--bg-header)] border-b border-[var(--border-subtle)]">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors">
          Gabriel Lemes
        </Link>
        <div className="flex gap-4 items-center text-sm text-[var(--text-muted)]">
          <button
            onClick={toggleLanguage}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {language === 'pt' ? 'PT' : 'EN'}
          </button>
          <span className="text-[var(--border)]">|</span>
          <button
            onClick={toggleTheme}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {isDarkTheme ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  );
} 