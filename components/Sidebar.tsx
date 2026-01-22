
import React from 'react';

const Sidebar: React.FC = () => {
  const practiceAreas = [
    'M&A', 'Corporate Law', 'Compliance', 'Foreign Investment', 
    'Real Estate', 'Litigation', 'Data Protection', 'Competition Law', 'Contract Law'
  ];

  const industries = [
    { name: 'Manufacturing', desc: 'Air-conditioning & Electronics', icon: 'ac_unit' },
    { name: 'Real Estate', desc: 'Property Development', icon: 'apartment' },
    { name: 'Renewable Energy', desc: 'Wind Farms & Clean Energy', icon: 'energy_program_saving' },
    { name: 'Technology', desc: 'Software & IT Services', icon: 'science' },
    { name: 'International Business', desc: 'Cross-border & FDI', icon: 'public' },
  ];

  return (
    <aside className="w-full md:w-1/4 lg:w-1/4">
      <div className="sticky top-24 bg-white dark:bg-[#1c222d] border border-solid border-[#f0f2f4] dark:border-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-3">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-2 border-primary/20" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80")' }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-[#111318] dark:text-white text-lg font-bold">Tan Tan Le</h1>
              <p className="text-[#616f89] dark:text-gray-400 text-sm">Attorney-at-law</p>
              <span className="text-primary text-xs font-bold uppercase mt-1">12+ Years Experience</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 px-3 py-3 text-[#111318] dark:text-gray-300">
              <span className="material-symbols-outlined text-lg">public</span>
              <p className="text-sm font-medium">HCMC, Vietnam</p>
            </div>
          </div>

          <div className="border-t border-[#f0f2f4] dark:border-gray-800 pt-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-lg">assignment</span>
              <h3 className="text-[#111318] dark:text-white text-sm font-bold">Practice Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {practiceAreas.map((area) => (
                <span key={area} className="text-[11px] bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#f0f2f4] dark:border-gray-800 pt-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-lg">factory</span>
              <h3 className="text-[#111318] dark:text-white text-sm font-bold">Industries</h3>
            </div>
            <div className="space-y-3">
              {industries.map((ind) => (
                <div key={ind.name} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">{ind.icon}</span>
                  <div>
                    <p className="text-[12px] font-semibold text-[#111318] dark:text-white">{ind.name}</p>
                    <p className="text-[11px] text-[#616f89] dark:text-gray-400">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className="w-full bg-primary text-white text-sm font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
            <span className="material-symbols-outlined text-lg">mail</span>
            Contact Me
          </a>
          <button className="w-full bg-white dark:bg-gray-800 border-2 border-primary text-primary text-sm font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-lg">download</span>
            Download CV
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
