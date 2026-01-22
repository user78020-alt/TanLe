
import React from 'react';

interface CompetenciesProps {
  id: string;
}

const Competencies: React.FC<CompetenciesProps> = ({ id }) => {
  const skills = [
    {
      title: 'Corporate Governance',
      icon: 'corporate_fare',
      desc: 'Experienced in overseeing governance frameworks for the company, its branches, and subsidiaries, ensuring effective management across diverse business operations.'
    },
    {
      title: 'Compliance',
      icon: 'policy',
      desc: 'Develop and implement internal policies and controls to maintain full compliance with regulatory requirements and global corporate standards.'
    },
    {
      title: 'Dispute Resolution',
      icon: 'balance',
      desc: 'Proactively assess legal risks and lead dispute-resolution strategies through negotiation, pre-litigation measures, and the management of litigation and arbitration matters.'
    },
    {
      title: 'Government & Stakeholder Relations',
      icon: 'handshake',
      desc: 'Cultivate and maintain relationships with Government and key external stakeholders to support business operations and regulatory compliance.'
    }
  ];

  return (
    <section id={id} className="mt-8">
      <div className="flex items-center gap-2 border-b border-[#f0f2f4] dark:border-gray-800 pb-3 mb-6">
        <span className="material-symbols-outlined text-primary">verified</span>
        <h2 className="text-[#111318] dark:text-white text-xl font-bold">Key Competencies</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.title} className="bg-white dark:bg-[#1c222d] p-5 rounded-xl border border-[#f0f2f4] dark:border-gray-800 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">{skill.icon}</span>
              <div>
                <h3 className="text-[#111318] dark:text-white text-base font-bold mb-2">{skill.title}</h3>
                <p className="text-[#616f89] dark:text-gray-400 text-[14px] leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
