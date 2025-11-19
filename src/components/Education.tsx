'use client';

import { useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { GraduationCap, Briefcase, MonitorPlay } from '@phosphor-icons/react';

const texts = {
  pt: {
    title: 'Formação',
    text: 'Estou no quarto semestre de Análise e Desenvolvimento de Sistemas. Também continuo aprendendo através de cursos online para melhorar minhas habilidades e me manter atualizado.',
    formal: 'Formal',
    online: 'Cursos Online',
    course: 'Front End & UX/UI Design',
    uni: 'Claretiano',
    uniDate: 'jan 2024 - jul 2026',
    uniCourse: 'Análise e Desenvolvimento de Sistemas',
    uniType: 'Tecnólogo',
    onlineType: 'Origamid'
  },
  en: {
    title: 'Education',
    text: `I'm in the fourth semester of Systems Analysis and Development. I also keep learning through online courses to improve my skills and stay updated.`,
    formal: 'Formal',
    online: 'Online Courses',
    course: 'Front End & UX/UI Design',
    uni: 'Claretiano',
    uniDate: 'jan 2024 - jul 2026',
    uniCourse: 'Systems Analysis and Development',
    uniType: 'Associate Degree',
    onlineType: 'Origamid'
  }
} as const;

type Lang = keyof typeof texts;

export default function Education() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;
  const onlineTooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onlineType = document.querySelector('.online-type');
    const onlineTooltip = onlineTooltipRef.current;
    if (!onlineType || !onlineTooltip) return;
    function getBorderColor() {
      return getComputedStyle(document.documentElement).getPropertyValue('--border-color-extra').trim();
    }
    onlineType.addEventListener('mouseenter', () => {
      const target = onlineType as HTMLElement;
      target.style.cursor = 'none';
      onlineTooltip.style.opacity = '1';
      onlineTooltip.style.borderColor = getBorderColor();
      onlineTooltip.style.backgroundColor = '#222';
    });
    onlineType.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      onlineTooltip.style.left = (mouseEvent.clientX + 10) + 'px';
      onlineTooltip.style.top = (mouseEvent.clientY + 10) + 'px';
    });
    onlineType.addEventListener('mouseleave', () => {
      const target = onlineType as HTMLElement;
      target.style.cursor = 'pointer';
      onlineTooltip.style.opacity = '0';
    });
    return () => {};
  }, []);

  return (
        <>
      <div className="flex flex-col gap-6 p-6 bg-[color:var(--bg-secondary)] rounded-lg mb-4">
        <div className="flex gap-2 items-center mb-2">
          <h2 className="text-2xl xl:text-3xl font-semibold text-[color:var(--text-title)] font-title">{texts[lang].title}</h2>
          <GraduationCap size={24} weight="light" className="text-[color:var(--accent-highlight)] mt-[2px]" />
        </div>
        <p 
          className="text-base lg:text-lg leading-snug text-[color:var(--text-dest)] mb-2" 
          dangerouslySetInnerHTML={{ __html: texts[lang].text }} 
        />
        
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex gap-1 w-fit items-center px-2 py-1 bg-[color:var(--bg-primary)] border border-[color:var(--border-color-extra)] rounded-md mb-3 text-sm">
              <Briefcase size={16} weight="light" className="text-[color:var(--text-secondary)]" />
              <span className="font-medium text-[color:var(--text-secondary)]">{texts[lang].formal}</span>
            </div>
            <div className="grid leading-snug gap-3 grid-cols-[auto_1fr] items-center">
              <div className="w-1 h-10 bg-[#F7D794] rounded-md mt-0.5"></div>
              <div className="flex flex-col gap-0.5 leading-tight">
                <span className="uppercase font-normal flex items-center gap-3 text-[color:var(--text-extra)]">
                  {texts[lang].uni} 
                  <span className="text-xs text-[color:var(--text-secondary)] font-normal lowercase">{texts[lang].uniDate}</span>
                </span>
                <span className="text-base lg:text-lg text-[color:var(--text-primary)] font-medium">{texts[lang].uniCourse}</span>
                <span className="text-[color:var(--text-secondary)] font-light text-sm">{texts[lang].uniType}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-1 w-fit items-center px-2 py-1 bg-[color:var(--bg-primary)] border border-[color:var(--border-color-extra)] rounded-md mb-3 text-sm">
              <MonitorPlay size={16} weight="light" className="text-[color:var(--text-secondary)]" />
              <span className="font-medium text-[color:var(--text-secondary)]">{texts[lang].online}</span>
            </div>
            <div className="grid gap-3 grid-cols-[auto_1fr] items-center">
              <div className="w-1 h-5 bg-[color:var(--border-color)] rounded-md mt-0.5"></div>
              <div className="flex flex-col gap-0.5 leading-tight">
                <span className="text-sm lg:text-base text-[color:var(--text-extra)] font-medium">{texts[lang].course}</span>
                <span className="online-type cursor-pointer text-[color:var(--text-secondary)] font-light text-sm">{texts[lang].onlineType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        ref={onlineTooltipRef} 
        className="tooltip" 
        style={{ 
          backgroundImage: 'url("/images/fe-uxui.jpg")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          border: '1px solid var(--border-color)', 
          borderRadius: '0.375rem', 
          pointerEvents: 'none', 
          zIndex: 1000, 
          opacity: 0, 
          transition: 'opacity 0.2s ease' 
        }} 
      />
    </>
  );
} 