'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    title: 'Idiomas',
    portuguese: 'Português',
    english: 'Inglês',
    native: 'Nativo',
    advanced: 'Avançado'
  },
  en: {
    title: 'Languages',
    portuguese: 'Portuguese',
    english: 'English',
    native: 'Native',
    advanced: 'C1 Advanced'
  }
} as const;

type Lang = keyof typeof texts;

export default function Languages() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <section className="mb-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">
        {texts[lang].title}
      </h2>
      
      <div className="flex gap-8">
        <div>
          <p className="text-[var(--text-primary)]">{texts[lang].portuguese}</p>
          <p className="text-sm text-[var(--text-muted)]">{texts[lang].native}</p>
        </div>
        <div>
          <p className="text-[var(--text-primary)]">{texts[lang].english}</p>
          <p className="text-sm text-[var(--text-muted)]">
            {texts[lang].advanced}
            <span className="mx-1">·</span>
            <a
              href="https://cert.efset.org/en/8P1jdm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              EF SET
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
