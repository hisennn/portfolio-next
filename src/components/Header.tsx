'use client';

import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';
import BoxIcon from './BoxIcon';

export default function Header() {
  const { language, setLanguage, isDarkTheme, toggleTheme } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-xl">
      <div className="max-w-2xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Link href="/" className="font-heading text-lg tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
          GL.
        </Link>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label={language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
          >
            {language === 'pt' ? 'PT_BR' : 'EN_US'}
          </button>
          <button
            onClick={toggleTheme}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label={isDarkTheme ? 'Mudar para tema claro' : 'Switch to dark theme'}
          >
            <BoxIcon name={isDarkTheme ? 'bx-moon' : 'bx-sun'} size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
