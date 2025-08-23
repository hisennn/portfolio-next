'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    title: 'Sobre',
    about: `Sou estudante de <strong>frontend</strong> e <strong>desenvolvimento web</strong>. Curso <strong>Análise e Desenvolvimento de Sistemas</strong> e estou aprendendo a criar e organizar sites e aplicações.<br />Tenho alguns conhecimentos em <strong>UI/UX</strong> e pretendo me aprofundar em <strong>Node.js</strong no futuro para fazer projetos mais completos.`
  },
  en: {
    title: 'About',
    about: `I'm a <strong>frontend</strong> and <strong>web development</strong> student. Studying <strong>Systems Analysis and Development</strong> and learning how to build and organize websites and applications.<br />I have some knowledge of <strong>UI/UX</strong> and plan to deepen my skills in <strong>Node.js</strong> in the future to work on more complete projects.`
  }
}as const;

type Lang = keyof typeof texts;

export default function About() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;
  return (
    <div className="flex flex-col gap-2.5 pb-5 border-b border-[color:var(--border-color-extra)] mb-5">
      <div className="flex gap-2 items-center mb-2">
        <h2 className="text-2xl xl:text-3xl font-semibold text-[color:var(--text-title)] font-title">{texts[lang].title}</h2>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#7d8590" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </div>
      <p 
        className="text-base lg:text-lg leading-snug text-[color:var(--text-primary)]" 
        dangerouslySetInnerHTML={{ __html: texts[lang].about }} 
      />
    </div>
  );
} 