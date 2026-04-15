'use client';

import { useLanguage } from '../hooks/useLanguage';
import { Icon } from '@iconify/react';

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

const projects = [
  {
    name: 'Baltimore Re-Construction',
    url: 'https://baltimorereconstruction.com/',
    tech: 'Squarespace',
    descKey: 'baltre' as const
  },
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
  }
];

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl md:text-3xl font-heading tracking-tight text-[var(--text-primary)]">
          {texts[lang].title}
        </h2>

        <div className="flex flex-col border-t border-[var(--border)] pt-8">
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <div key={project.name} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg md:text-xl font-heading text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {project.name}
                    <Icon icon="bx:link-external" width={14} className="shrink-0 opacity-50" />
                  </a>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest shrink-0">
                    {project.tech}
                  </span>
                </div>
                <p className="text-[15px] font-body font-light text-[var(--text-secondary)] leading-relaxed max-w-xl">
                  {texts[lang][project.descKey]}
                </p>
                <div className="h-px bg-[var(--border-subtle)] mt-8 w-full block md:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
