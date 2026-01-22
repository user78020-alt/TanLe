
import React from 'react';

interface SummaryProps {
  id: string;
}

const Summary: React.FC<SummaryProps> = ({ id }) => {
  return (
    <section id={id}>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-tight">Professional Summary</h1>
        <p className="text-[#616f89] dark:text-gray-400 text-[14px] leading-relaxed max-w-3xl mt-2">
          A high-performing legal professional with proven success in top-tier law firms and senior in-house roles at multinational corporations, I bring deep expertise in investment, corporate governance, M&A, and compliance for large-scale commercial transactions. I consistently guide organizations through complex legal challenges with integrity, strategic insight, and sound judgment, earning the trust of executives and key stakeholders. Recognized for strong legal expertise, analytical thinking, and a reliable problem-solving approach, I am ready to take the next step in my career and deliver meaningful impact to a forward-looking organization.
        </p>
      </div>
    </section>
  );
};

export default Summary;
