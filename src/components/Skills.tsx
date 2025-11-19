'use client';

import { useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { TerminalWindow } from '@phosphor-icons/react';

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

export default function Skills() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;
    if (!skillsContainer) return;

    const allSkillsLists = skillsContainer.querySelectorAll('.skills-items');
    const allSkillItems = skillsContainer.querySelectorAll('.skills-items li');

    function getDistance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    allSkillsLists.forEach(skillsList => {
      skillsList.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        skillsContainer.classList.add('spotlight-active');

        const mouseX = mouseEvent.clientX;
        const mouseY = mouseEvent.clientY;
        
        allSkillItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const itemCenterX = rect.left + rect.width / 2;
          const itemCenterY = rect.top + rect.height / 2;

          const distance = getDistance(mouseX, mouseY, itemCenterX, itemCenterY);
          const maxDistance = 150;

          const brightness = Math.max(0.6, 1 - (distance / maxDistance * 0.4));
          const saturation = Math.max(0.7, 1 - (distance / maxDistance * 0.3));

          const icon = item.querySelector('i') as HTMLElement;
          if (icon) {
            icon.style.filter = `brightness(${brightness}) saturate(${saturation})`;
          }
        });
      });

      skillsList.addEventListener('mouseleave', () => {
        skillsContainer.classList.remove('spotlight-active');

        allSkillItems.forEach((item) => {
          const icon = item.querySelector('i') as HTMLElement;
          if (icon) {
            icon.style.transition = 'filter 0.4s ease-out';
            icon.style.filter = 'brightness(1) saturate(1)';

            setTimeout(() => {
              icon.style.transition = 'filter 0.2s ease';
            }, 400);
          }
        });
      });
    });

    return () => {

    };
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6 bg-[color:var(--bg-secondary)] rounded-lg mb-4" ref={skillsContainerRef}>
      <div className="flex gap-2 items-center mb-2">
        <h2 className="text-2xl xl:text-3xl font-semibold text-[color:var(--text-title)] font-title">{texts[lang].title}</h2>
        <TerminalWindow size={24} weight="light" className="text-[color:var(--accent-highlight)] mt-[2px]" />
      </div>
      
      <div className="flex flex-col gap-1 mt-1.5 ml-1">
        <div className="text-[color:var(--text-dest)] text-sm font-medium pb-0.5 border-b border-[color:var(--border-color-extra)]">{texts[lang].intermediate}</div>
        <ul className="skills-items flex gap-3 flex-wrap text-4xl lg:text-5xl list-none py-2.5 mt-1.5 justify-start">
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="HTML5" className="devicon-html5-plain-wordmark block transition-filter duration-200 ease-in-out"></i>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="CSS3" className="devicon-css3-plain-wordmark block transition-filter duration-200 ease-in-out"></i>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="TailwindCss" className="devicon-tailwindcss-original block transition-filter duration-200 ease-in-out"></i>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="Github" className="devicon-github-original-wordmark block transition-filter duration-200 ease-in-out"></i>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="Figma" className="devicon-figma-plain block transition-filter duration-200 ease-in-out"></i>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-1 mt-1.5 ml-1">
        <div className="text-[color:var(--text-dest)] text-sm font-medium pb-0.5 border-b border-[color:var(--border-color-extra)]">{texts[lang].basic}</div>
        <ul className="skills-items flex gap-3 flex-wrap text-4xl lg:text-5xl list-none py-2.5 mt-1.5 justify-start">
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="JavaScript" className="devicon-javascript-plain block transition-filter duration-200 ease-in-out"></i>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="React" className="devicon-react-original-wordmark block transition-filter duration-200 ease-in-out"></i>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="Next" className="devicon-nextjs-plain block transition-filter duration-200 ease-in-out"></i>
          </li>
          <li className="transition-transform duration-300 ease-in-out hover:scale-125 px-1 first:pl-0">
            <i title="Git" className="devicon-git-plain-wordmark block transition-filter duration-200 ease-in-out"></i>
          </li>
        </ul>
      </div>
    </div>
  );
} 