import { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [isSectionExpanded, setIsSectionExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F5EFEB] border-t border-[#363D28]/10 relative transition-all duration-300">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Compact Header / Toggle Block */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4 text-[#A18347]" />
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#A18347] font-semibold">
              PREGUNTAS FRECUENTES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] leading-tight mb-3">
            Claridad sobre el proceso
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#363D28]/75 font-light mb-6">
            Respuestas a las dudas más comunes sobre el acompañamiento, las herramientas y el Método RAÍZ.
          </p>

          {/* Toggle Button */}
          <button
            type="button"
            onClick={() => setIsSectionExpanded(!isSectionExpanded)}
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full border-2 border-[#222918] text-[#222918] hover:bg-[#222918] hover:text-[#FAF7F2] font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222918]"
            aria-expanded={isSectionExpanded}
            aria-controls="faq-accordion-list"
          >
            <span>{isSectionExpanded ? 'OCULTAR PREGUNTAS FRECUENTES' : 'DESPLEGAR PREGUNTAS FRECUENTES'}</span>
            {isSectionExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Expandable Accordion List */}
        {isSectionExpanded && (
          <div
            id="faq-accordion-list"
            className="mt-10 sm:mt-12 pt-8 border-t border-[#363D28]/12 divide-y divide-[#363D28]/12 animate-fadeIn"
          >
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
                      className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#363D28] rounded-xs cursor-pointer"
                    >
                      <span className="text-base sm:text-lg md:text-xl font-serif font-medium text-[#363D28] group-hover:text-[#A18347] transition-colors">
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
                      <p className="text-sm sm:text-base font-sans text-[#363D28]/85 leading-relaxed font-light pr-6 sm:pr-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Collapse Button */}
            <div className="pt-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSectionExpanded(false);
                  window.scrollTo({
                    top: Math.max(0, window.scrollY - 300),
                    behavior: 'smooth',
                  });
                }}
                className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider text-[#363D28]/70 hover:text-[#363D28] uppercase transition-colors py-2 px-4 rounded-full hover:bg-[#363D28]/5 cursor-pointer"
              >
                <span>CERRAR PREGUNTAS FRECUENTES</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
