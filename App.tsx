
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Summary from './components/Summary';
import Background from './components/Background';
import Competencies from './components/Competencies';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import References from './components/References';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'background', 'competencies', 'achievements', 'experience', 'references'];
    
    const handleScroll = () => {
      let current = 'home';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      <Header activeSection={activeSection} />
      
      <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 flex flex-col md:flex-row gap-8">
        <Sidebar />
        
        <div className="flex-1 flex flex-col gap-6">
          <Summary id="home" />
          <Background id="background" />
          <Competencies id="competencies" />
          <Achievements id="achievements" />
          <Experience id="experience" />
          <References id="references" />
          <Contact id="contact" />
        </div>
      </main>

      <footer className="w-full bg-white dark:bg-background-dark border-t border-[#f0f2f4] dark:border-gray-800 py-8 text-center">
        <p className="text-[#616f89] dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Tan Tan Le - Attorney-at-law Portfolio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
