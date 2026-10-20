import { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#A18347] font-semibold block mb-2">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#363D28] leading-tight mb-4">
            Claridad sobre el proceso
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#363D28]/75 font-light">
            Respuestas a las dudas más comunes sobre el acompañamiento y el Mapa RAÍZ.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="divide-y divide-[#363D28]/12 border-y border-[#363D28]/12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#363D28] rounded-xs"
                  >
                    <span className="text-lg sm:text-xl font-serif font-medium text-[#363D28] group-hover:text-[#A18347] transition-colors">
                      {item.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#363D28]/5 flex items-center justify-center shrink-0 transition-transform duration-300 text-[#363D28] ${
                        isOpen ? 'rotate-180 bg-[#363D28]/10' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base font-sans text-[#363D28]/80 leading-relaxed font-light pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
