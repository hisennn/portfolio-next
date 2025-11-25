'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    copyright: 'Gabriel Lemes'
  },
  en: {
    copyright: 'Gabriel Lemes'
  }
} as const;

type Lang = keyof typeof texts;

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-[var(--border-subtle)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-[var(--text-muted)]">
        <div className="flex flex-col gap-2">
          <span className="font-medium">{texts[lang].copyright}</span>
          <div className="flex flex-col gap-1 text-sm">
            <span>gabrielsilvarz@outlook.com</span>
            <span>+55 16 9 9390-9231</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/gabrieldslemes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Hisennn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
