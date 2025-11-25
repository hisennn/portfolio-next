'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

import { MapPin, Linkedin, Github, Mail, FileText } from 'lucide-react';

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

type Lang = keyof typeof texts;

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <section className="pb-12 mb-12 border-b border-[var(--border-subtle)]">
      <p className="text-[var(--text-muted)] text-sm mb-2">{texts[lang].greeting}</p>
      <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-2 tracking-tight">
        {texts[lang].name}
      </h1>
      <p className="text-lg text-[var(--text-secondary)] mb-1">{texts[lang].role}</p>
      <p className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] mb-6">
        <MapPin size={14} />
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
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/Hisennn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
        </div>
        
        <div className="flex flex-col gap-2">
          <a
            href="mailto:gabrielsilvarz@outlook.com"
            className="text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-2 text-sm"
          >
            <Mail size={14} />
            gabrielsilvarz@outlook.com
          </a>
          <a
            href="/gabriel_curriculo.pdf"
            download="Gabriel Lemes Currículo.pdf"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <FileText size={14} />
            {texts[lang].downloadResume}
          </a>
        </div>
      </div>
    </section>
  );
}
