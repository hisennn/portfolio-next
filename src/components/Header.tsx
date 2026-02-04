'use client';

import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';

export default function Header() {
  const { language, setLanguage, isDarkTheme, toggleTheme } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg-header)] border-b border-[var(--border-subtle)]">
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center py-3">
        <Link href="/" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors">
          Gabriel Lemes
        </Link>
        <div className="flex gap-1 items-center">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-lg text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all"
            aria-label={language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
          >
            {language === 'pt' ? 'PT' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all"
            aria-label={isDarkTheme ? 'Mudar para tema claro' : 'Switch to dark theme'}
          >
            <Icon icon={isDarkTheme ? 'mingcute:moon-line' : 'mingcute:sun-line'} width={18} />
          </button>
        </div>
      </div>
    </header>
  );
}