
import React from 'react';

interface AchievementsProps {
  id: string;
}

const Achievements: React.FC<AchievementsProps> = ({ id }) => {
  const items = [
    {
      year: '2025',
      title: 'M&A Transaction',
      icon: 'workspace_premium',
      desc: 'Managed the full M&A lifecycle for the acquisition of an SI company, including legal due diligence and the drafting and negotiation of key transactional documents (LOI, Term Sheet, SPA, Service Agreement, NDA, NCA, and related transactional documents), and managed all regulatory procedures, such as merger filing and license amendments arising from the capital transfer through to successful deal closing.',
      featured: true
    },
    {
      year: '2024 — 2025',
      title: 'Real Estate Development',
      icon: 'apartment',
      desc: 'Drafted and reviewed all construction and ancillary contracts for a real estate development project, supporting legal work from project commencement through completion and official operation. Developed standardized templates and reviewed agreements for brokerage services, building operation and management, office lease contracts, and building operation documents.'
    },
    {
      year: '2024',
      title: 'Competition Law Investigation',
      icon: 'fact_check',
      desc: 'Successfully advised and handled a regulatory investigation initiated by the Vietnam National Competition Commission concerning allegations of unfair competitive advertising.'
    },
    {
      year: '2023',
      title: 'Corporate Governance',
      icon: 'account_balance',
      desc: 'Oversaw and completed all regulatory filings and corporate governance procedures for a capital increase through additional share issuance to existing shareholders, ensuring full compliance with statutory requirements and alignment with internal governance processes.'
    },
    {
      year: '2020',
      title: 'M&A - Renewable Energy',
      icon: 'energy_program_saving',
      desc: 'Advised on and completed all legal and transactional procedures for the acquisition of an operating wind farm in Ninh Thuan Province, ensuring full compliance with sector-specific regulatory requirements and successful deal closing.'
    }
  ];

  return (
    <section id={id} className="mt-8">
      <div className="flex items-center gap-2 border-b border-[#f0f2f4] dark:border-gray-800 pb-3 mb-6">
        <span className="material-symbols-outlined text-primary">military_tech</span>
        <h2 className="text-[#111318] dark:text-white text-xl font-bold">Recent Remarkable Achievements</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`${item.featured ? 'bg-primary/5 border-primary/20' : 'bg-white dark:bg-[#1c222d] border-[#f0f2f4] dark:border-gray-800'} p-5 rounded-xl border transition-all hover:border-primary/50`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined ${item.featured ? 'text-primary' : 'text-[#616f89]'} text-3xl`}>{item.icon}</span>
                <div>
                  <span className={`${item.featured ? 'bg-primary/20 text-primary font-black' : 'text-[#616f89] font-medium'} text-[11px] px-2 py-1 rounded uppercase`}>
                    {item.year}
                  </span>
                  <h4 className="text-[#111318] dark:text-white text-base font-bold mt-1">{item.title}</h4>
                </div>
              </div>
            </div>
            <p className="text-[#616f89] dark:text-gray-400 text-[14px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
