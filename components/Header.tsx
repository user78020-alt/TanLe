
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'background', label: 'Background' },
    { id: 'competencies', label: 'Competencies' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'experience', label: 'Experience' },
    { id: 'references', label: 'References' },
  ];

  return (
    <div className="w-full bg-white dark:bg-background-dark border-b border-solid border-[#f0f2f4] dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
            </svg>
          </div>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Legal Portfolio</h2>
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm py-1 transition-colors border-b-2 ${
                  activeSection === item.id 
                  ? 'text-primary font-bold border-primary' 
                  : 'text-[#111318] dark:text-gray-300 font-medium border-transparent hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="bg-primary text-white text-sm font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
