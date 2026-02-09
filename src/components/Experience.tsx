'use client';

import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';

const texts = {
  pt: {
    title: 'Experiência',
    present: 'presente',
    remote: 'Remoto',
    onsite: 'Presencial',
    brazil: 'Brasil'
  },
  en: {
    title: 'Experience',
    present: 'present',
    remote: 'Remote',
    onsite: 'On-site',
    brazil: 'Brazil'
  }
} as const;

const experiences = [
  {
    company: 'Baltimore Re-Construction',
    role: { pt: 'Assistente Criativo e Operacional', en: 'Creative & Operations Assistant' },
    date: { pt: 'out 2025 - presente', en: 'oct 2025 - present' },
    items: {
      pt: [
        'Criei o site da empresa usando Squarespace, com foco em SEO',
        'Ajudo com planilhas e organização interna',
        'Colaboro com ideias para otimizar processos e organizar o fluxo de trabalho',
        'Apoio em marketing e divulgação'
      ],
      en: [
        'Built the company website using Squarespace, with a focus on SEO',
        'Helping with spreadsheets and internal organization',
        'Collaborating with ideas to optimize processes and organize workflow',
        'Supporting marketing and outreach'
      ]
    },
    locationDetails: { pt: 'Baltimore, MD, EUA', en: 'Baltimore, MD, USA' },
    type: 'remote' as const
  },
  {
    company: 'Freelancer',
    role: { pt: 'Desenvolvedor Web', en: 'Web Developer' },
    date: { pt: 'abr 2025 - presente', en: 'apr 2025 - present' },
    items: {
      pt: [
        'Criação e manutenção de sites e pequenos sistemas web',
        'Layouts responsivos e ajustes usando HTML, CSS, JavaScript e React',
        'Atendimento a clientes de forma independente'
      ],
      en: [
        'Building and maintaining websites and small web systems',
        'Responsive layouts and adjustments using HTML, CSS, JavaScript and React',
        'Handling clients independently'
      ]
    },
    locationDetails: null
  },
  {
    company: 'Trail Dev',
    role: { pt: 'Estagiário', en: 'Intern' },
    date: { pt: 'mar 2025 - jul 2025', en: 'mar 2025 - jul 2025' },
    items: {
      pt: [
        'Acompanhei o dia a dia de um escritório de programação',
        'Converti um site de Ruby on Rails para Next.js (Pluralsign)',
        'Ajustes em site com Strapi para gestão de conteúdos (Inovaice)'
      ],
      en: [
        'Followed the daily routine of a software development office',
        'Converted a website from Ruby on Rails to Next.js (Pluralsign)',
        'Adjustments to a Strapi site for content management (Inovaice)'
      ]
    },
    locationDetails: { pt: 'Batatais, SP, BR', en: 'Batatais, SP, BR' },
    type: 'onsite' as const
  }
];

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section className="py-12 border-b border-[var(--border-subtle)]">
      <h2 className="text-base font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6 flex items-center gap-2">
        <Icon icon="mingcute:briefcase-line" width={18} />
        {texts[lang].title}
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.company}>
            <div className="flex flex-col gap-1 mb-3">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[var(--text-primary)] font-medium">{exp.company}</span>
                <span className="text-[var(--text-muted)]">·</span>
                <span className="text-sm text-[var(--text-secondary)]">{exp.role[lang]}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                {exp.date && <span>{exp.date[lang]}</span>}
                {exp.locationDetails && (
                  <>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Icon icon="mingcute:location-line" width={12} />
                      {exp.locationDetails[lang]}
                    </span>
                  </>
                )}
                {'type' in exp && exp.type && (
                  <>
                    <span>·</span>
                    <span className="lowercase first-letter:uppercase">{texts[lang][exp.type]}</span>
                  </>
                )}
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
              {exp.items[lang].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--text-muted)] shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {index < experiences.length - 1 && (
              <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
