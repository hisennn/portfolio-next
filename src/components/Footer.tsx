'use client';

import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';

const texts = {
  pt: {
    copyright: '© 2025 Gabriel Lemes'
  },
  en: {
    copyright: '© 2025 Gabriel Lemes'
  }
} as const;

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[var(--text-primary)] font-medium">Gabriel Lemes</span>
            <div className="flex flex-col gap-1.5 text-sm text-[var(--text-muted)]">
              <a
                href="mailto:gabrielsilvarz@outlook.com"
                className="hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2"
              >
                <Icon icon="mingcute:mail-line" width={14} />
                gabrielsilvarz@outlook.com
              </a>
              <span className="flex items-center gap-2">
                <Icon icon="mingcute:phone-line" width={14} />
                +55 16 9 9390-9231
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/gabrieldslemes/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:border-[var(--accent-hover)] transition-all"
              aria-label="LinkedIn"
            >
              <Icon icon="mingcute:linkedin-line" width={18} />
            </a>
            <a
              href="https://github.com/Hisennn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-hover)] hover:border-[var(--accent-hover)] transition-all"
              aria-label="GitHub"
            >
              <Icon icon="mingcute:github-line" width={18} />
            </a>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-center">
          <span className="text-xs text-[var(--text-muted)]">{texts[lang].copyright}</span>
        </div>
      </div>
    </footer>
  );
}
