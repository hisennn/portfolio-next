'use client';

import { useLanguage } from '../hooks/useLanguage';

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
    <section>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl md:text-3xl font-heading tracking-tight text-[var(--text-primary)]">
          {texts[lang].title}
        </h2>

        <div className="flex flex-col border-t border-[var(--border)] pt-8">
          <p className="text-[var(--text-secondary)] font-body text-lg font-light leading-relaxed max-w-xl mb-12">
            {texts[lang].text}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-baseline mb-8">
            <span className="col-span-1 text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--text-muted)]">
              {texts[lang].formal}
            </span>
            <div className="col-span-3 flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-heading tracking-tight text-[var(--text-primary)]">
                {texts[lang].uniCourse}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-mono text-[13px] text-[var(--text-muted)]">
                <span>{texts[lang].uni}</span>
                <span className="hidden sm:inline text-[var(--text-muted)]">/</span>
                <span>{texts[lang].uniType}</span>
                <span className="hidden sm:inline text-[var(--text-muted)]">/</span>
                <span>{texts[lang].uniDate}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-baseline opacity-70 mt-8 md:mt-4">
            <span className="col-span-1 text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--text-muted)]">
              {texts[lang].online}
            </span>
            <div className="col-span-3 flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-heading tracking-tight text-[var(--text-primary)]">
                {texts[lang].course}
              </h3>
              <p className="font-mono text-[13px] text-[var(--text-muted)]">
                {texts[lang].courseProvider}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
