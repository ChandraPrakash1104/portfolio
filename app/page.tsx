import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Projects from '@/components/Project/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-5 md:px-0'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
