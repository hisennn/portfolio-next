"use client";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import Footer from '@/components/Footer';
import IridescenceBackground from '@/components/IridescenceBackground';

export default function Home() {
  const { isDarkTheme } = useContext(LanguageContext);

  const opacity = isDarkTheme ? 0.04 : 0.12;

  return (
    <div className="min-h-screen px-2 lg:px-4 min-w-[356px]" style={{ color: 'var(--text-primary)' }}>
      <IridescenceBackground
        opacity={opacity}
        speed={0.6}
        amplitude={0.3}
        color={[0.7, 0.7, 0.7]}
        mouseReact={false}
        className=""
      />
      <Header />
      
      <main className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_6fr] gap-12 lg:grid">
          <Profile />
          
          <section className="flex flex-col gap-2 p-5 lg:p-10 lg:pb-8  bg-[var(--bg-primary)] text-[color:var(--text-primary)] border border-[color:var(--border-color-extra)] rounded-md">
            <About />
            <Skills />
            <Projects />
            <Education />
            <Languages />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
