'use client';

import { useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const texts = {
  pt: {
    title: 'Projetos',
    coord: 'Coordinates Saver para Minecraft – uma ferramenta para gerenciar coordenadas, similar a uma lista de tarefas.',
    ascii: 'Conversor de texto e imagem para ASCII.',
    baltre: 'Criei o site institucional da empresa americana Baltimore Re-Construction com Squarespace, mantendo o design funcional mesmo com as limitações da plataforma.'
  },
  en: {
    title: 'Projects',
    coord: 'Coordinates Saver for Minecraft – a tool to manage coordinates, similar to a TODO list.',
    ascii: 'Text and image converter to ASCII.',
    baltre: 'I built the institutional website for the American company Baltimore Re-Construction using Squarespace, keeping the design functional despite the platform’s limitations.'
  }
} as const;

type Lang = keyof typeof texts;

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;
  const previewTooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previewLinks = document.querySelectorAll('.project-preview');
    const previewTooltip = previewTooltipRef.current;
    
    if (!previewTooltip) return;

    const tooltipTarget = { x: 0, y: 0 };
    const tooltipCurrent = { x: 0, y: 0 };
    let tooltipAnimating = false;

    function getBorderColor() {
      return getComputedStyle(document.documentElement).getPropertyValue('--border-color-extra').trim();
    }

    function animateTooltip() {
      if (!tooltipAnimating) return;
      tooltipCurrent.x += (tooltipTarget.x - tooltipCurrent.x) * 0.10;
      tooltipCurrent.y += (tooltipTarget.y - tooltipCurrent.y) * 0.10;
      if (previewTooltip) {
        previewTooltip.style.left = tooltipCurrent.x + 'px';
        previewTooltip.style.top = tooltipCurrent.y + 'px';
      }
      if (previewTooltip?.style.opacity === '1') {
        requestAnimationFrame(animateTooltip);
      }
    }

    previewLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const target = link as HTMLElement;
        target.style.cursor = 'pointer';
        const tooltipImg = target.dataset.tooltipImg;
        if (previewTooltip && tooltipImg) {
          previewTooltip.style.backgroundImage = `url("${tooltipImg}")`;
          previewTooltip.style.opacity = '1';
          previewTooltip.style.borderColor = getBorderColor();
          previewTooltip.style.backgroundColor = '#222';
        }
      });

      link.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const height = 220;
        let top = mouseEvent.clientY - height - 10;
        if (top < 0) top = 0;
        tooltipTarget.x = mouseEvent.clientX + 80;
        tooltipTarget.y = top;
        if (!tooltipAnimating) {
          tooltipAnimating = true;
          animateTooltip();
        }
      });

      link.addEventListener('mouseleave', () => {
        if (previewTooltip) {
          previewTooltip.style.opacity = '0';
        }
        tooltipAnimating = false;
      });
    });

    return () => {

    };
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
            <path d="M10 10.5 8 13l2 2.5" />
            <path d="m14 10.5 2 2.5-2 2.5" />
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
          </svg>
        </div>
        
        <div className="flex flex-col gap-1.5 p-2.5 border border-[color:var(--bg-secondary)] rounded-md">
          <a 
            href="https://mc-coordinate-saver.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-preview text-lg lg:text-xl leading-tight text-[color:var(--accent-blue)] underline w-fit hover:brightness-140 transition-all"
            data-tooltip-img="/images/coord-sv.jpg"
          >
            Coordinates Saver
          </a>
          <div className="flex flex-col gap-1.5 text-sm text-[color:var(--text-secondary)] leading-tight">
            <span>{texts[lang].coord}</span>
            <span className="font-bold">HTML, CSS, JS</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5 p-2.5 border border-[color:var(--bg-secondary)] rounded-md">
          <a 
            href="https://ascii-converter.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-preview text-lg lg:text-xl leading-tight text-[color:var(--accent-blue)] underline w-fit hover:brightness-140 transition-all"
            data-tooltip-img="/images/ascii.jpg"
          >
            ASCII converter
          </a>
          <div className="flex flex-col gap-1.5 text-sm text-[color:var(--text-secondary)] leading-tight">
            <span>{texts[lang].ascii}</span>
            <span className="font-bold">HTML, CSS, JS</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 p-2.5 border border-[color:var(--bg-secondary)] rounded-md">
          <a 
            href="https://baltimorereconstruction.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-preview text-lg lg:text-xl leading-tight text-[color:var(--accent-blue)] underline w-fit hover:brightness-140 transition-all"
            data-tooltip-img="/images/baltre.jpg"
          >
            Baltimore Re-Construction
          </a>
          <div className="flex flex-col gap-1.5 text-sm text-[color:var(--text-secondary)] leading-tight">
            <span>{texts[lang].baltre}</span>
            <span className="font-bold">Squarespace, HTML, CSS</span>
          </div>
        </div>
      </div>

      {/* Tooltip para preview dos projetos */}
      <div 
        ref={previewTooltipRef}
        className="tooltip"
        style={{
          position: 'fixed',
          width: '365px',
          height: '280px',
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