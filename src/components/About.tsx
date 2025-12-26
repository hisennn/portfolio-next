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
    <section className="py-12 border-b border-[var(--border-subtle)]">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6 flex items-center gap-2">
        <Icon icon="mingcute:user-3-line" width={16} />
        {texts[lang].title}
      </h2>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        {texts[lang].about}
      </p>
    </section>
  );
}