'use client';

import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';

const texts = {
  pt: {
    greeting: 'Olá, sou',
    name: 'Gabriel Lemes',
    role: 'Desenvolvedor Web',
    location: 'Batatais, SP, Brasil',
    downloadResume: 'Currículo',
  },
  en: {
    greeting: "Hi, I'm",
    name: 'Gabriel Lemes',
    role: 'Web Developer',
    location: 'Batatais, SP, Brazil',
    downloadResume: 'Resume',
  }
} as const;

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="pb-12 border-b border-[var(--border-subtle)]">
      <p className="text-[var(--text-muted)] text-sm mb-2">{texts[lang].greeting}</p>
      <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-2 tracking-tight">
        {texts[lang].name}
      </h1>
      <p className="text-lg text-[var(--text-secondary)] mb-1">{texts[lang].role}</p>
      <p className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] mb-6">
        <Icon icon="mingcute:location-line" width={14} />
        {texts[lang].location}
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex gap-5 items-center">
          <a
            href="https://www.linkedin.com/in/gabrieldslemes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors"
            aria-label="LinkedIn"
          >
            <Icon icon="mingcute:linkedin-line" width={22} />
          </a>
          <a
            href="https://github.com/Hisennn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors"
            aria-label="GitHub"
          >
            <Icon icon="mingcute:github-line" width={22} />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="mailto:gabrielsilvarz@outlook.com"
            className="text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2 text-sm"
          >
            <Icon icon="mingcute:mail-line" width={14} />
            gabrielsilvarz@outlook.com
          </a>
          <a
            href="/gabriel_curriculo.pdf"
            download="Gabriel Lemes Currículo.pdf"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <Icon icon="mingcute:download-line" width={14} />
            {texts[lang].downloadResume}
          </a>
        </div>
      </div>
    </section>
  );
}
