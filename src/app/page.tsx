"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Header />
      <main className="max-w-2xl mx-auto px-6 pt-16 md:pt-32 pb-24 md:pb-32 flex flex-col gap-24 md:gap-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}
