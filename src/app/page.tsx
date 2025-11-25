"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}
