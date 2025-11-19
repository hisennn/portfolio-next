'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Translate } from '@phosphor-icons/react';

const texts = {
  pt: {
    title: 'Idiomas',
    portuguese: 'Português',
    english: 'Inglês',
    native: 'Nativo',
    advanced: 'Avançado',
    efset: ''
  },
  en: {
    title: 'Languages',
    portuguese: 'Portuguese',
    english: 'English',
    native: 'Native',
    advanced: 'C1 Advanced',
    efset: ' | EF SET'
  }
} as const;

type Lang = keyof typeof texts;

export default function Languages() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <div className="flex flex-col gap-2.5 p-6 bg-[color:var(--bg-secondary)] rounded-lg mb-4">
      <div className="flex gap-2 items-center mb-2">
        <h2 className="text-2xl xl:text-3xl font-semibold text-[color:var(--text-title)] font-title">{texts[lang].title}</h2>
        <Translate size={24} weight="light" className="text-[color:var(--accent-highlight)] mt-[2px]" />
      </div>
      <ul className="flex flex-col leading-tight leading- gap-0.5 lg:gap-2 text-base lg:text-lg">
        <li>
          <span className="text-[color:var(--text-primary)]">{texts[lang].portuguese} </span>
          <span className="text-[color:var(--text-secondary)] text-sm lg:text-base">- {texts[lang].native}</span>
        </li>
      </ul>
      <ul className="flex flex-col leading-tight gap-0.5 lg:gap-2 text-base lg:text-lg">
        <li>
          <span className="text-[color:var(--text-primary)]">{texts[lang].english} </span>
          <span className="text-[color:var(--text-secondary)] text-sm lg:text-base">- {texts[lang].advanced}</span>
          <span className="text-[color:var(--text-primary)] font-light text-sm lg:text-base"> | </span>
          <a 
            href="https://cert.efset.org/en/8P1jdm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[color:var(--accent-blue)] font-medium transition-all duration-200 ease-in-out hover:underline hover:brightness-120 text-sm lg:text-base"
          >
            EF SET
          </a>
        </li>
      </ul>
    </div>
  );
} 