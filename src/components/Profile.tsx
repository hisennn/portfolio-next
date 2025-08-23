'use client';

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Image from 'next/image';

const texts = {
  pt: {
    name: 'Gabriel Lemes',
    description: 'Estudante de Web Dev\nAprendendo Next.js.',
    location: 'São Paulo, Brasil',
    phone: '+55 (16) 9 9390-9231',
    email: 'gabrielsilvarz@outlook.com',
    downloadResume: 'Baixar Currículo'
  },
  en: {
    name: 'Gabriel Lemes',
    description: 'Web Dev Student\nLearning Next.js.',
    location: 'São Paulo, Brazil',
    phone: '+55 (16) 9 9390-9231',
    email: 'gabrielsilvarz@outlook.com',
    downloadResume: 'Download Resume'
  }
} as const;

type Lang = keyof typeof texts;

export default function Profile() {
  const { language } = useContext(LanguageContext);
  const lang = (['pt', 'en'].includes(language) ? language : 'pt') as Lang;

  return (
    <section className="flex flex-col gap-4 p-4 lg:p-6  bg-[var(--bg-primary)] h-fit rounded-lg border border-[color:var(--border-color-extra)] shadow-sm w-full lg:max-w-lg lg:mx-0 lg:text-left">
      <div className="flex flex-col gap-2">
        <Image
          src="/images/profile.jpg"
          alt="Gabriel Lemes"
          width={200}
          height={200}
          className="rounded-full self-center object-cover border border-[color:var(--border-color)] shadow-md max-w-[150px] md:max-w-[200px] lg:max-w-[200px] mx-auto lg:mx-0"
        />
        <h1 className="text-lg lg:text-xl font-bold text-center lg:text-left text-[color:var(--text-title)] mt-4 font-title">{texts[lang].name}</h1>
      </div>
      <div className="flex flex-col">
        <p className="text-sm lg:text-base text-[color:var(--text-primary)] text-center lg:text-left leading-tight">
          {texts[lang].description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      
      <div className="flex gap-2 mb-2 justify-center lg:justify-start">
        <a 
          href="https://www.linkedin.com/in/gabrieldslemes/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[color:var(--accent-blue)] font-medium flex items-center gap-1"
        >
          <Image
            src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn"
            width={96}
            height={12}
            className="inline-block hover:brightness-110 hover:scale-105 transition-all duration-300"
          />
        </a>
        <a 
          href="https://github.com/Hisennn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[color:var(--accent-blue)] font-medium flex items-center gap-1"
        >
          <Image
            src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
            width={96}
            height={12}
            className="inline-block hover:brightness-110 hover:scale-105 transition-all duration-300"
          />
        </a>
      </div>
      
      <ul className="flex flex-col border-t font-inter border-[color:var(--border-color-extra)] pt-4 gap-1 items-center lg:items-start">
        <li className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-base lg:text-lg">{texts[lang].location}</span>
        </li>
        <li className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          <span className="text-base lg:text-lg">{texts[lang].phone}</span>
        </li>
        <li className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <a className="text-[color:var(--accent-blue)] font-medium flex items-center gap-1 hover:underline underline-offset-2 text-base lg:text-lg" 
            href="mailto:gabrielsilvarz@outlook.com" 
            target="_blank" 
          >
            {texts[lang].email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#7d8590" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 15V3" />
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
          </svg>
          <a className="text-[color:var(--accent-blue)] font-medium flex items-center gap-1 hover:underline underline-offset-2 text-base lg:text-lg" 
            href="/gabriel_curriculo.pdf" 
            download="Gabriel Lemes Currículo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {texts[lang].downloadResume}
          </a>
        </li>
      </ul>
    </section>
  );
} 