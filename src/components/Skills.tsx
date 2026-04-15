'use client';

import { useLanguage } from '../hooks/useLanguage';
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
    <section>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl md:text-3xl font-heading tracking-tight text-[var(--text-primary)]">
          {texts[lang].title}
        </h2>

        <div className="flex flex-col gap-12 border-t border-[var(--border)] pt-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mt-1">Tech Stack</h3>
            <div className="col-span-3 flex flex-wrap gap-x-6 gap-y-3">
              {skills.map((skill) => (
                 <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--text-muted)] mt-1">Soft Skills</h3>
            <div className="col-span-3 flex flex-wrap gap-x-6 gap-y-3">
              {texts[lang].soft.map((item, index) => (
                <span key={index} className="text-sm md:text-base font-body text-[var(--text-secondary)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
