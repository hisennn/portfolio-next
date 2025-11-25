'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    title: 'Sobre',
    about: 'Sou estudante de frontend e desenvolvimento web. Curso Análise e Desenvolvimento de Sistemas e estou aprendendo a criar e organizar sites e aplicações. Tenho alguns conhecimentos em UI/UX e pretendo me aprofundar em Node.js no futuro para fazer projetos mais completos.'
  },
  en: {
    title: 'About',
    about: "I'm a frontend and web development student. Studying Systems Analysis and Development and learning how to build and organize websites and applications. I have some knowledge of UI/UX and plan to deepen my skills in Node.js in the future to work on more complete projects."
  }
} as const;

type Lang = keyof typeof texts;

export default function About() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <section className="mb-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">
        {texts[lang].title}
      </h2>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        {texts[lang].about}
      </p>
    </section>
  );
} 