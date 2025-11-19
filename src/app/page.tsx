"use client";
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import Footer from '@/components/Footer';
// IridescenceBackground removed for a cleaner, minimal design

export default function Home() {
  // background animation and theme-based opacity removed

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)]" style={{ color: 'var(--text-primary)' }}>
      {/* animated background removed */}
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <Profile />
          </div>
          
          <section className="flex flex-col gap-16">
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
