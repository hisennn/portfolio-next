'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Image from 'next/image';
import { MapPin, Envelope, DownloadSimple } from '@phosphor-icons/react';

const texts = {
  pt: {
    name: 'Gabriel Lemes',
    description: 'Web Dev\nAprendendo Next.js.',
    location: 'São Paulo, Brasil',
    phone: '+55 (16) 9 9390-9231',
    email: 'gabrielsilvarz@outlook.com',
    downloadResume: 'Baixar Currículo'
  },
  en: {
    name: 'Gabriel Lemes',
    description: 'Web Dev\nLearning Next.js.',
    location: 'São Paulo, Brazil',
    phone: '+55 (16) 9 9390-9231',
    email: 'gabrielsilvarz@outlook.com',
    downloadResume: 'Download Resume'
  }
} as const;

type Lang = keyof typeof texts;

export default function Profile() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <section className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-4">
        <Image
          src="/images/profile.jpg"
          alt="Gabriel Lemes"
          width={120}
          height={120}
          className="rounded-full object-cover border-2 border-[color:var(--bg-primary)] shadow-sm"
        />
        <div>
          <h1 className="text-2xl font-bold text-[color:var(--text-title)] font-title">{texts[lang].name}</h1>
          <p className="text-[color:var(--text-secondary)] mt-1 leading-relaxed">
            {texts[lang].description.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/gabrieldslemes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-title)] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a
          href="https://github.com/Hisennn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-title)] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
      </div>

      <ul className="flex flex-col gap-3 text-sm text-[color:var(--text-secondary)]">
        <li className="flex items-center gap-3">
          <MapPin size={16} weight="light" className="text-[color:var(--accent-highlight)]" />
          <span>{texts[lang].location}</span>
        </li>
        <li className="flex items-center gap-3">
          <Envelope size={16} weight="light" className="text-[color:var(--accent-highlight)]" />
          <a className="hover:text-[color:var(--text-title)] transition-colors"
            href="mailto:gabrielsilvarz@outlook.com"
            target="_blank"
          >
            {texts[lang].email}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <DownloadSimple size={16} weight="light" className="text-[color:var(--accent-highlight)]" />
          <a className="hover:text-[color:var(--text-title)] transition-colors"
            href="/gabriel_curriculo.pdf"
            download="Gabriel Lemes Currículo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {texts[lang].downloadResume}
          </a>
        </li>
      </ul>
    </section>
  );
} 