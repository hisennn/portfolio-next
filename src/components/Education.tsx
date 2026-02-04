'use client';

import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';

const texts = {
  pt: {
    title: 'Formação',
    text: 'Estou no sexto e último semestre de Análise e Desenvolvimento de Sistemas. Também continuo aprendendo através de cursos online para melhorar minhas habilidades.',
    formal: 'Formal',
    online: 'Cursos online',
    uni: 'Claretiano',
    uniDate: 'jan 2024 - jul 2026',
    uniCourse: 'Análise e Desenvolvimento de Sistemas',
    uniType: 'Tecnólogo',
    course: 'Front End e UX/UI Design',
    courseProvider: 'Origamid'
  },
  en: {
    title: 'Education',
    text: 'Sixth and final semester of Systems Analysis and Development. Also learning through online courses to improve my skills.',
    formal: 'Formal',
    online: 'Online courses',
    uni: 'Claretiano',
    uniDate: 'jan 2024 - jul 2026',
    uniCourse: 'Systems Analysis and Development',
    uniType: 'Associate Degree',
    course: 'Front End and UX/UI Design',
    courseProvider: 'Origamid'
  }
} as const;

export default function Education() {
  const { lang } = useLanguage();

  return (
    <section className="py-12 border-b border-[var(--border-subtle)]">
      <h2 className="text-base font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6 flex items-center gap-2">
        <Icon icon="mingcute:mortarboard-line" width={18} />
        {texts[lang].title}
      </h2>

      <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
        {texts[lang].text}
      </p>

      <div className="space-y-6">
        <div className="relative group">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">{texts[lang].formal}</span>
            <p className="text-[var(--text-primary)] font-medium text-lg">{texts[lang].uniCourse}</p>
            <p className="text-sm text-[var(--text-secondary)]">
              {texts[lang].uni} · {texts[lang].uniType}
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">{texts[lang].uniDate}</p>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

        <div className="opacity-60">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1">{texts[lang].online}</span>
            <p className="text-sm text-[var(--text-secondary)] font-medium">{texts[lang].course}</p>
            <p className="text-xs text-[var(--text-muted)]">
              {texts[lang].courseProvider}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
