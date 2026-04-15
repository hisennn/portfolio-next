'use client';

import { useLanguage } from '../hooks/useLanguage';
import BoxIcon from './BoxIcon';

const texts = {
  pt: {
    copyright: '© 2026 Gabriel Lemes'
  },
  en: {
    copyright: '© 2026 Gabriel Lemes'
  }
} as const;

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] pt-12 pb-24 mt-12 bg-[var(--bg-primary)]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="flex flex-col gap-6">
            <span className="text-xl md:text-2xl font-heading tracking-tight text-[var(--text-primary)]">
              Gabriel Lemes
            </span>
            <div className="flex flex-col gap-2 font-mono text-sm text-[var(--text-muted)]">
              <a
                href="mailto:gabrielsilvarz@outlook.com"
                className="hover:text-[var(--accent)] transition-colors flex items-center gap-2"
              >
                <BoxIcon name="bx-envelope" size={18} />
                gabrielsilvarz@outlook.com
              </a>
              <span className="flex items-center gap-2">
                <BoxIcon name="bx-phone" size={18} />
                +55 16 9 9390-9231
              </span>
            </div>
          </div>
          
          <div className="flex gap-6 font-mono text-sm">
            <a
              href="https://www.linkedin.com/in/gabrieldslemes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <BoxIcon name="bxl-linkedin" size={26} />
            </a>
            <a
              href="https://github.com/Hisennn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <BoxIcon name="bxl-github" size={26} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-[11px] font-mono tracking-[0.1em] uppercase text-[var(--text-muted)] opacity-60">
            {texts[lang].copyright}
          </span>
          <span className="text-[11px] font-mono tracking-[0.1em] uppercase text-[var(--text-muted)] opacity-40">
            v1.0.0
          </span>
        </div>
      </div>
    </footer>
  );
}
