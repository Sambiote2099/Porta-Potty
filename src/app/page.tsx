import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import TechnicalProficiency from '@/components/sections/TechnicalProficiency';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Education />
      <Projects />
      <TechnicalProficiency />
      <Contact />
    </main>
  );
}
