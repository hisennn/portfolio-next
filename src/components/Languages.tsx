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
    <section className="py-12">
      <h2 className="text-base font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6 flex items-center gap-2">
        <Icon icon="mingcute:translate-2-line" width={18} />
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
