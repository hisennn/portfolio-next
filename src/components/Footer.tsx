'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    copyright: '© alguns direitos reservados',
    linkedin: 'linkedin',
    github: 'github',
    phone: '+55 16 9 9390-9231',
    email: 'gabrielsilvarz@outlook.com',
    name: 'gabriel lemes'
  },
  en: {
    copyright: '© some rights reserved',
    linkedin: 'linkedin',
    github: 'github',
    phone: '+55 16 9 9390-9231',
    email: 'gabrielsilvarz@outlook.com',
    name: 'gabriel lemes'
  }
} as const;

type Lang = keyof typeof texts;

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <footer className="max-w-7xl mx-auto px-4 py-4 lg:py-6 lg:px-4 border bg-[var(--bg-primary)] border-[color:var(--border-color-extra)] rounded-sm mt-6 mb-4">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-2xl lg:text-3xl font-bold text-[color:var(--text-title)] mb-1 pb-2 border-b border-[color:var(--border-color)] font-title">
          {texts[lang].name}
        </h2>
        <div className="flex flex-col gap-0.5 text-lg text-[color:var(--text-primary)]">
          <div>{texts[lang].phone}</div>
          <div>{texts[lang].email}</div>
          <div>
            <a 
              href="https://www.linkedin.com/in/gabrieldslemes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[color:var(--accent-blue)] underline font-medium transition-all duration-200 hover:brightness-120"
            >
              {texts[lang].linkedin}
            </a>
          </div>
          <div>
            <a 
              href="https://github.com/Hisennn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[color:var(--accent-blue)] underline font-medium transition-all duration-200 hover:brightness-120"
            >
              {texts[lang].github}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <span className="text-[color:var(--border-color)] text-sm lg:text-base">
          {texts[lang].copyright}
        </span>
      </div>
    </footer>
  );
} 
