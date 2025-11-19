'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';
import { Globe, Sun, Moon } from '@phosphor-icons/react';

export default function Header() {
  const { language, setLanguage, isDarkTheme, toggleTheme } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-[color:var(--bg-header)] border-b border-[color:var(--border-color-extra)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-2.5 sm:gap-0 justify-between items-center px-4 py-4 font-nav">
        <span className="text-base font-medium">
          <Link href="/" className="hover:text-[color:var(--text-title)] transition-colors">
            Gabriel Lemes
          </Link>
        </span>
        <nav className="flex flex-wrap gap-4 items-center">
          <ul className="flex gap-2.5 text-sm items-center">
            {/* Menu items */}
          </ul>
          <div className="flex gap-1 items-center">
            <Globe size={16} weight="light" className="text-[color:var(--text-secondary)]" />
            <button
              id="language-btn"
              onClick={toggleLanguage}
              className="mr-2.5 flex justify-center px-2 py-1 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors text-sm"
            >
              {language === 'pt' ? 'PT' : 'EN'}
            </button>
            {isDarkTheme ? (
              <Moon size={16} weight="light" className="text-[color:var(--text-secondary)]" />
            ) : (
              <Sun size={16} weight="light" className="text-[color:var(--text-secondary)]" />
            )}
            <button
              id="theme-btn"
              onClick={toggleTheme}
              className="flex justify-center px-2 py-1 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors text-sm"
            >
              {isDarkTheme ? 'Dark' : 'Light'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
} 