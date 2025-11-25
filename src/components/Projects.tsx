'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

import { ArrowUpRight } from 'lucide-react';

const texts = {
  pt: {
    title: 'Projetos',
    coord: 'Ferramenta para gerenciar coordenadas no Minecraft, similar a uma lista de tarefas.',
    ascii: 'Conversor de texto e imagem para ASCII.',
    baltre: 'Site institucional para a empresa americana Baltimore Re-Construction, feito com Squarespace.',
    ana: 'Portfólio para arquiteta.'
  },
  en: {
    title: 'Projects',
    coord: 'Tool to manage coordinates in Minecraft, similar to a TODO list.',
    ascii: 'Text and image converter to ASCII.',
    baltre: 'Institutional website for the American company Baltimore Re-Construction, built with Squarespace.',
    ana: 'Portfolio for an architect.'
  }
} as const;

type Lang = keyof typeof texts;

const projects = [
  {
    name: 'Ana Zabala Arquiteta',
    url: 'https://anazabala-arquiteta.vercel.app/',
    tech: 'Next.js, TypeScript, Tailwind',
    descKey: 'ana' as const
  },
  {
    name: 'Coordinates Saver',
    url: 'https://mc-coordinate-saver.vercel.app/',
    tech: 'HTML, CSS, JS',
    descKey: 'coord' as const
  },
  {
    name: 'ASCII Converter',
    url: 'https://ascii-converter.vercel.app/',
    tech: 'HTML, CSS, JS',
    descKey: 'ascii' as const
  },
  {
    name: 'Baltimore Re-Construction',
    url: 'https://baltimorereconstruction.com/',
    tech: 'Squarespace',
    descKey: 'baltre' as const
  }
];

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <section className="mb-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">
        {texts[lang].title}
      </h2>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={project.name}>
            <div className="group">
              <div className="flex items-baseline gap-2 mb-1">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] font-medium hover:text-[var(--accent-hover)] transition-colors flex items-center gap-1"
                >
                  {project.name}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
                <span className="text-xs text-[var(--text-muted)]">{project.tech}</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {texts[lang][project.descKey]}
              </p>
            </div>
            {index < projects.length - 1 && (
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
