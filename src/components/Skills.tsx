'use client';

import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';
import { useRef } from 'react';

const texts = {
  pt: {
    title: 'Skills',
    soft: [
      'Organização',
      'Trabalho em equipe',
      'Proatividade',
      'Resolução de problemas',
      'Aprendizado contínuo',
      'Conhecimentos em informática',
      'Office 365',
      'Google Docs'
    ]
  },
  en: {
    title: 'Skills',
    soft: [
      'Organization',
      'Teamwork',
      'Proactivity',
      'Problem solving',
      'Continuous learning',
      'IT knowledge',
      'Office 365',
      'Google Docs'
    ]
  }
} as const;

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

const SkillItem = ({ skill }: { skill: typeof skills[0] }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tooltipRef.current) return;
    tooltipRef.current.style.left = `${e.clientX + 18}px`;
    tooltipRef.current.style.top = `${e.clientY + 16}px`;
  };

  return (
    <div 
      className="group relative flex flex-col items-center justify-center p-2"
      onMouseMove={handleMouseMove}
    >
      <i
        className={`${skill.icon} text-3xl text-[var(--text-muted)] transition-all duration-300 group-hover:text-[var(--text-primary)] group-hover:scale-110`}
      ></i>
      <span 
        ref={tooltipRef}
        className="opacity-0 group-hover:opacity-100 fixed z-50 text-[11px] font-medium text-[var(--text-primary)] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)] shadow-lg pointer-events-none transition-opacity duration-200 whitespace-nowrap"
        style={{ left: 0, top: 0 }}
      >
        {skill.name}
      </span>
    </div>
  );
};

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <section className="py-12 border-b border-[var(--border-subtle)]">
      <h2 className="text-base font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6 flex items-center gap-2">
        <Icon icon="mingcute:code-line" width={18} />
        {texts[lang].title}
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2.5 items-center">
        {texts[lang].soft.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:scale-105 transition-all duration-300 cursor-default inline-block origin-center"
            >
              {item}
            </span>
            {index < texts[lang].soft.length - 1 && (
              <span className="text-[var(--border)] text-[10px]">●</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
