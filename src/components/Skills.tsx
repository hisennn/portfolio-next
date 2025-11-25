'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    title: 'Skills',
    intermediate: 'Intermediário',
    basic: 'Básico',
  },
  en: {
    title: 'Skills',
    intermediate: 'Intermediate',
    basic: 'Basic',
  }
} as const;

type Lang = keyof typeof texts;

const skills = [
  { name: 'HTML', icon: 'devicon-html5-plain' },
  { name: 'CSS', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Figma', icon: 'devicon-figma-plain' }
];

export default function Skills() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <section className="mb-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">
        {texts[lang].title}
      </h2>
      
      <div className="flex flex-wrap gap-5">
        {skills.map((skill) => (
          <div key={skill.name} className="group relative flex flex-col items-center">
            <i 
              className={`${skill.icon} text-3xl text-[var(--text-muted)] transition-all duration-300 group-hover:text-[var(--text-primary)] group-hover:-translate-y-1`}
              title={skill.name}
            ></i>
            <span className="opacity-0 group-hover:opacity-100 absolute -bottom-5 text-[10px] font-medium text-[var(--text-muted)] transition-all duration-300 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
} 