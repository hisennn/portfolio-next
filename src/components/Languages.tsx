'use client';

import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';

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

export default function Languages() {
  const { lang } = useLanguage();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl md:text-3xl font-heading tracking-tight text-[var(--text-primary)]">
          {texts[lang].title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--border)] pt-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-2xl font-heading text-[var(--text-primary)]">{texts[lang].portuguese}</p>
            <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mt-1">{texts[lang].native}</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-2xl font-heading text-[var(--text-primary)]">{texts[lang].english}</p>
            <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mt-1 flex flex-wrap items-center gap-2">
              {texts[lang].advanced}
              <span className="text-[var(--text-muted)]">/</span>
              <a
                href="https://cert.efset.org/en/8P1jdm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              >
                EF SET
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
