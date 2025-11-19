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
    <footer className="max-w-7xl mx-auto px-4 py-8 lg:py-12 lg:px-4 mt-12 border-t border-[color:var(--border-color-extra)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-[color:var(--text-title)] font-title">
            {texts[lang].name}
          </h2>
          <span className="text-[color:var(--text-secondary)] text-sm">
            {texts[lang].copyright}
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-[color:var(--text-primary)]">
          <div className="flex flex-col gap-1">
            <span className="text-[color:var(--text-secondary)] text-xs uppercase tracking-wider">Contact</span>
            <div>{texts[lang].phone}</div>
            <div>{texts[lang].email}</div>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-[color:var(--text-secondary)] text-xs uppercase tracking-wider">Social</span>
            <a 
              href="https://www.linkedin.com/in/gabrieldslemes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[color:var(--text-title)] transition-colors"
            >
              {texts[lang].linkedin}
            </a>
            <a 
              href="https://github.com/Hisennn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[color:var(--text-title)] transition-colors"
            >
              {texts[lang].github}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 
