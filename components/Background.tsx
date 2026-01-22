
import React from 'react';

interface BackgroundProps {
  id: string;
}

const Background: React.FC<BackgroundProps> = ({ id }) => {
  return (
    <section id={id} className="mt-8">
      <div className="flex items-center gap-2 border-b border-[#f0f2f4] dark:border-gray-800 pb-3 mb-6">
        <span className="material-symbols-outlined text-primary">school</span>
        <h2 className="text-[#111318] dark:text-white text-xl font-bold">Professional & Education Background</h2>
      </div>
      <div className="space-y-4">
        <div className="bg-white dark:bg-[#1c222d] p-5 rounded-xl border border-[#f0f2f4] dark:border-gray-800 flex gap-4 group hover:border-primary/50 transition-all">
          <div className="h-12 w-12 rounded bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-gray-400">gavel</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-[#111318] dark:text-white text-base font-bold">Ho Chi Minh City Bar Association</h3>
              <span className="text-primary text-sm font-bold">Since 2020</span>
            </div>
            <p className="text-primary font-medium text-sm mt-1 uppercase tracking-wide">Member</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span className="text-[#616f89] dark:text-gray-400 text-[13px]">Active Status</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1c222d] p-5 rounded-xl border border-[#f0f2f4] dark:border-gray-800 flex gap-4 group hover:border-primary/50 transition-all">
          <div className="h-12 w-12 rounded bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-gray-400">account_balance</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-[#111318] dark:text-white text-base font-bold">University of Economics and Laws, VNU</h3>
              <span className="text-primary text-sm font-bold">2005 — 2009</span>
            </div>
            <p className="text-primary font-medium text-sm mt-1 uppercase tracking-wide">Bachelor of Laws (LL.B.)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
