'use client';

import { useLanguage } from '../hooks/useLanguage';

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
    role: { pt: 'Assistente Operacional', en: 'Operations Assistant' },
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
    <section>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl md:text-3xl font-heading tracking-tight text-[var(--text-primary)]">
          {texts[lang].title}
        </h2>

        <div className="flex flex-col divide-y divide-[var(--border)] border-t border-[var(--border)] pt-2">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="flex flex-col gap-3 py-8 group">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-xl font-heading text-[var(--text-primary)] tracking-tight">
                  {exp.role[lang]}
                </h3>

                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] font-mono text-[var(--accent)]">@ {exp.company}</span>
                  <span className="text-xs font-mono uppercase tracking-[0.05em] text-[var(--text-secondary)] shrink-0 whitespace-nowrap">
                    {exp.date ? exp.date[lang] : ''}
                  </span>
                </div>

                {(exp.locationDetails || ('type' in exp && exp.type)) && (
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                    {exp.locationDetails && <span>{exp.locationDetails[lang]}</span>}
                    {exp.locationDetails && 'type' in exp && exp.type && (
                      <span className="text-[var(--text-muted)]">/</span>
                    )}
                    {'type' in exp && exp.type && <span>{texts[lang][exp.type]}</span>}
                  </div>
                )}
              </div>

              <ul className="text-[15px] font-body font-light text-[var(--text-secondary)] leading-relaxed space-y-2 mt-2 list-disc list-outside ml-4 marker:text-[var(--text-muted)]">
                {exp.items[lang].map((item, i) => (
                  <li key={i} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
