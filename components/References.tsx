
import React from 'react';

interface ReferencesProps {
  id: string;
}

const References: React.FC<ReferencesProps> = ({ id }) => {
  return (
    <section id={id} className="mt-8">
      <div className="flex items-center gap-2 border-b border-[#f0f2f4] dark:border-gray-800 pb-3 mb-6">
        <span className="material-symbols-outlined text-primary">person_check</span>
        <h2 className="text-[#111318] dark:text-white text-xl font-bold">Professional References</h2>
      </div>
      <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-3 block">lock</span>
        <h3 className="text-[#111318] dark:text-white text-lg font-bold mb-2">References Available Upon Request</h3>
        <p className="text-[#616f89] dark:text-gray-400 text-[14px] leading-relaxed max-w-2xl mx-auto">
          Professional references from senior executives, clients, and industry partners are available and will be provided during the interview process or upon request. References include testimonials from Fortune 500 companies, international law firms, and government agencies.
        </p>
      </div>
    </section>
  );
};

export default References;
