import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqItems: FAQItem[];
}

export default function FAQSection({ faqItems }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Open first by default

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            Butuh Bantuan?
          </span>
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
            Tanya Jawab (FAQ)
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Berikut adalah jawaban dari beberapa pertanyaan umum mengenai kehidupan asrama, biaya, dan kebijakan belajar santri.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-gray-100 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-900/30 overflow-hidden"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/80"
                >
                  <span className="font-sans text-sm font-bold text-gray-900 dark:text-white pr-4">
                    {item.pertanyaan}
                  </span>
                  <span className="shrink-0 rounded-full bg-emerald-50 p-1 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.jawaban}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
