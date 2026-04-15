'use client';

import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';

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

export default function About() {
  const { lang } = useLanguage();

  return (
    <section>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-heading tracking-tight text-[var(--text-primary)]">
          {texts[lang].title}
        </h2>
        <p className="text-[var(--text-secondary)] text-[16px] md:text-[17px] font-body font-light leading-relaxed max-w-[90%]">
          {texts[lang].about}
        </p>
      </div>
    </section>
  );
}