
import React from 'react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="mt-8 mb-12">
      <div className="bg-primary dark:bg-primary/90 rounded-2xl p-8 text-center text-white">
        <span className="material-symbols-outlined text-5xl mb-4 block">mail</span>
        <h3 className="text-2xl font-bold mb-3">Ready to discuss your legal needs?</h3>
        <p className="text-white/80 mb-6 text-[14px] max-w-2xl mx-auto">
          Experienced representation for complex corporate, M&A, and compliance matters in Vietnam. Get in touch for a confidential consultation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-3">
            <span className="material-symbols-outlined">mail</span>
            <span className="text-[14px] font-medium">tantanle@gmail.com</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-3">
            <span className="material-symbols-outlined">phone</span>
            <span className="text-[14px] font-medium">(+84) 123-456-889</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:tantanle@gmail.com" className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-sm">Send Email</a>
          <button className="bg-transparent border border-white/40 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors text-sm">Download Full CV</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
