'use client';

import { useLanguage } from '../hooks/useLanguage';
import BoxIcon from './BoxIcon';

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
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-[0.2em]">
          {texts[lang].greeting}
        </p>
        <h1 className="font-heading text-6xl md:text-8xl tracking-tight text-[var(--text-primary)] leading-[0.9]">
          {texts[lang].name}
        </h1>
        <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] mt-3">
          {texts[lang].role}
        </p>
      </div>

      <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6">
        <div className="flex flex-col gap-1.5">
          <a
            href="mailto:gabrielsilvarz@outlook.com"
            className="flex items-center gap-2.5 text-[15px] font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors w-fit"
          >
            <BoxIcon name="bx-envelope" size={16} />
            gabrielsilvarz@outlook.com
          </a>
          <p className="flex items-center gap-2.5 text-[15px] font-mono text-[var(--text-secondary)]">
            <BoxIcon name="bx-phone" size={16} />
            +55 16 9 9390-9231
          </p>
        </div>

        <p className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
          <BoxIcon name="bx-map" size={14} />
          {texts[lang].location}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/gabrieldslemes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <BoxIcon name="bxl-linkedin" size={17} />
            LinkedIn
          </a>
          <span className="text-[var(--text-muted)] select-none">·</span>
          <a
            href="https://github.com/Hisennn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <BoxIcon name="bxl-github" size={17} />
            GitHub
          </a>
          <span className="text-[var(--text-muted)] select-none">·</span>
          <a
            href="/gabriel_curriculo.pdf"
            download="Gabriel Lemes Currículo.pdf"
            className="flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <BoxIcon name="bx-download" size={17} />
            {texts[lang].downloadResume}
          </a>
        </div>
      </div>
    </section>
  );
}
