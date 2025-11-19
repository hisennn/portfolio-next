'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Info } from '@phosphor-icons/react';

const texts = {
  pt: {
    title: 'Sobre',
    about: `Sou estudante de frontend e desenvolvimento web. Curso Análise e Desenvolvimento de Sistemas e estou aprendendo a criar e organizar sites e aplicações.<br />Tenho alguns conhecimentos em UI/UX e pretendo me aprofundar em Node.js no futuro para fazer projetos mais completos.`
  },
  en: {
    title: 'About',
    about: `I'm a frontend and web development student. Studying Systems Analysis and Development and learning how to build and organize websites and applications.<br />I have some knowledge of UI/UX and plan to deepen my skills in Node.js in the future to work on more complete projects.`
  }
}as const;

type Lang = keyof typeof texts;

export default function About() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;
  return (
    <div className="flex flex-col gap-2.5 p-6 bg-[color:var(--bg-secondary)] rounded-lg mb-4">
      <div className="flex gap-2 items-center mb-2">
        <h2 className="text-2xl xl:text-3xl font-semibold text-[color:var(--text-title)] font-title">{texts[lang].title}</h2>
        <Info size={24} weight="light" className="text-[color:var(--accent-highlight)]" />
      </div>
      <p 
        className="text-base lg:text-lg leading-snug text-[color:var(--text-dest)]" 
        dangerouslySetInnerHTML={{ __html: texts[lang].about }} 
      />
    </div>
  );
} 