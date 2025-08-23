'use client';

import { useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    title: 'Educação',
    text: 'Estou no quarto semestre de <strong>Análise e Desenvolvimento de Sistemas</strong>. Também continuo aprendendo através de cursos online para melhorar minhas habilidades e me manter atualizado.',
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
    text: `I'm in the fourth semester of <strong>Systems Analysis and Development</strong>. I also keep learning through online courses to improve my skills and stay updated.`,
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
      <div className="flex flex-col gap-2.5 pb-5 border-b border-[color:var(--border-color-extra)] mb-5">
        <div className="flex gap-2 items-center mb-2">
          <h2 className="text-2xl xl:text-3xl font-semibold text-[color:var(--text-title)] font-title">{texts[lang].title}</h2>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 mt-[2px]"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M2 16V4a2 2 0 0 1 2-2h11" />
            <path d="M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12" />
            <path d="M5 14H4a2 2 0 1 0 0 4h1" />
          </svg>
        </div>
        <p 
          className="text-base lg:text-lg leading-snug text-[color:var(--text-dest)] mb-2" 
          dangerouslySetInnerHTML={{ __html: texts[lang].text }} 
        />
        <div className="flex gap-1 w-fit items-center px-1.5 py-1 border border-[color:var(--border-color)] rounded-md mt-2.5 mb-1.5 text-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="max-w-4"
          >
            <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
            <path d="M18 12h.01" />
            <path d="M18 16h.01" />
            <path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
            <path d="M6 12h.01" />
            <path d="M6 16h.01" />
            <circle cx="12" cy="10" r="2" />
          </svg>
          <span className="font-light text-[color:var(--text-secondary)]">{texts[lang].formal}</span>
        </div>
        <div className="grid leading-snug gap-2.5 grid-cols-[auto_1fr] items-center mb-2.5">
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
        <div className="flex gap-1 w-fit items-center px-1.5 py-1 border border-[color:var(--border-color)] rounded-md mt-2.5 mb-1.5 text-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="max-w-4"
          >
            <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
            <path d="M20.054 15.987H3.946" />
          </svg>
          <span className="font-light text-[color:var(--text-secondary)]">{texts[lang].online}</span>
        </div>
        <div className="grid gap-2.5 grid-cols-[auto_1fr] items-center mb-2.5">
          <div className="w-1 h-5 bg-[color:var(--border-color)] rounded-md mt-0.5"></div>
          <div className="flex flex-col gap-0.5 leading-tight">
            <span className="text-sm lg:text-base text-[color:var(--text-extra)] font-medium">{texts[lang].course}</span>
            <span className="online-type cursor-pointer text-[color:var(--text-secondary)] font-light text-sm">{texts[lang].onlineType}</span>
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