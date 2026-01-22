
import React from 'react';

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section id={id} className="mt-8">
      <div className="flex items-center gap-2 border-b border-[#f0f2f4] dark:border-gray-800 pb-3 mb-6">
        <span className="material-symbols-outlined text-primary">work</span>
        <h2 className="text-[#111318] dark:text-white text-xl font-bold">Practical Experience</h2>
      </div>
      <p className="text-[#616f89] dark:text-gray-400 text-[14px] italic mb-6">12+ years of professional experience</p>

      {/* Experience 1 */}
      <div className="bg-white dark:bg-[#1c222d] p-6 rounded-xl border border-[#f0f2f4] dark:border-gray-800 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-[#111318] dark:text-white text-xl font-bold">AIR CONDITIONER CORPORATION</h3>
            <p className="text-primary font-semibold text-base mt-1">Head of Legal Department cum DPO</p>
            <p className="text-[#616f89] dark:text-gray-400 text-[14px] mt-1">2022 - Present (3 years) • HCMC, Vietnam</p>
          </div>
          <span className="bg-green-100 text-green-700 text-[11px] font-black px-3 py-1 rounded-full uppercase">Current</span>
        </div>
        
        <div className="bg-background-light dark:bg-gray-800/50 p-4 rounded-lg mb-4">
          <p className="text-[#616f89] dark:text-gray-400 text-[14px] leading-relaxed">
            Leading multinational specializing in advanced air-conditioning solutions across 140+ countries. In Vietnam, operations include a large-scale plant, 7 branches, and 16 service stations. Consistently ranked among Top 500 largest enterprises in Vietnam.
          </p>
          <p className="text-[#111318] dark:text-white text-[14px] font-semibold mt-2">Team size: 4 members</p>
        </div>

        <h4 className="text-[#111318] dark:text-white font-bold mb-3">Key Responsibilities:</h4>
        <div className="space-y-3">
          {[
            { 
              cat: 'Legal Advisory', 
              points: [
                'Comprehensive support across manufacturing, trading, and after-sales service operations.',
                'Daily legal counsel on regulatory compliance and internal governance.',
                'Risk identification and mitigation across cross-functional departments.'
              ] 
            },
            {
              cat: 'Contract Management',
              points: [
                'End-to-end lifecycle management for domestic and international commercial contracts.',
                'Negotiation of dealer, distribution, and project-based agreements.',
                'Standardization of legal templates and compliance forms.'
              ]
            }
          ].map((resp, i) => (
            <div key={i} className="bg-primary/5 p-4 rounded-lg">
              <h5 className="text-[#111318] dark:text-white font-bold text-[14px] mb-2">{resp.cat}</h5>
              <ul className="space-y-2">
                {resp.points.map((pt, j) => (
                  <li key={j} className="text-[#616f89] dark:text-gray-400 text-[13px] leading-relaxed flex gap-2">
                    <span className="text-primary font-bold">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience 2 */}
      <div className="bg-white dark:bg-[#1c222d] p-6 rounded-xl border border-[#f0f2f4] dark:border-gray-800 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-[#111318] dark:text-white text-xl font-bold">INTERNATIONAL LAW FIRM</h3>
            <p className="text-primary font-semibold text-base mt-1">Senior Associate / Associate</p>
            <p className="text-[#616f89] dark:text-gray-400 text-[14px] mt-1">2015 - 2022 (7 years) • HCMC, Vietnam</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            'Provided comprehensive advice on corporate structures and business models.',
            'End-to-end legal support for M&A lifecycles, due diligence, and deal structuring.',
            'Drafted commercial agreements including SPAs, APAs, SHAs, and JVAs.',
            'Represented clients in arbitration proceedings before VIAC.'
          ].map((pt, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-primary font-bold text-[14px]">•</span>
              <p className="text-[#616f89] dark:text-gray-400 text-[14px] leading-relaxed">{pt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience 3 */}
      <div className="bg-white dark:bg-[#1c222d] p-6 rounded-xl border border-[#f0f2f4] dark:border-gray-800">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-[#111318] dark:text-white text-xl font-bold">LOCAL LEGAL FIRM</h3>
            <p className="text-primary font-semibold text-base mt-1">Associate / Paralegal</p>
            <p className="text-[#616f89] dark:text-gray-400 text-[14px] mt-1">2013 - 2015 (2 years) • HCMC, Vietnam</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            'Legal memoranda on corporate and foreign investment matters.',
            'Regulatory procedures for IRC and ERC issuance.',
            'Compliance support for foreign workforce residence and labor permits.'
          ].map((pt, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-primary font-bold text-[14px]">•</span>
              <p className="text-[#616f89] dark:text-gray-400 text-[14px] leading-relaxed">{pt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
