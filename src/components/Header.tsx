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
    <header className="max-w-7xl mx-auto mt-4 mb-4 bg-[color:var(--bg-primary)] border border-[color:var(--border-color-extra)] rounded-md text-[color:var(--text-primary)] flex flex-col sm:flex-row gap-2.5 sm:gap-0 justify-between items-center px-2 py-2.5 lg:px-4 lg:py-4 font-nav">
      <span className="text-base font-medium">
        <Link href="/" className="p-2.5 hover:bg-[color:var(--bg-secondary)] rounded-md transition-colors">
          Gabriel Lemes
        </Link>
      </span>
      <nav className="flex flex-wrap gap-4 items-center mr-2.5">
        <ul className="flex gap-2.5 text-sm items-center">
          {/* Menu items */}
        </ul>
        <div className="flex gap-1 items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="max-w-4"
          >
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
          </svg>
          <button
            id="language-btn"
            onClick={toggleLanguage}
            className="mr-2.5 flex justify-center px-1.5 py-1 border border-[color:var(--border-color)] rounded-md text-[color:var(--text-primary)] hover:bg-[color:var(--bg-secondary)] transition-colors text-sm"
          >
            {language === 'pt' ? '/português' : '/english'}
          </button>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="max-w-4"
          >
            <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.9 4.9 1.4 1.4" />
            <path d="m17.7 17.7 1.4 1.4" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.3 17.7-1.4 1.4" />
            <path d="m19.1 4.9-1.4 1.4" />
          </svg>
          <button
            id="theme-btn"
            onClick={toggleTheme}
            className="flex justify-center px-1.5 py-1 border border-[color:var(--border-color)] rounded-md text-[color:var(--text-primary)] hover:bg-[color:var(--bg-secondary)] transition-colors text-sm"
          >
            {isDarkTheme ? '/dark' : '/light'}
          </button>
        </div>
      </nav>
    </header>
  );
} 