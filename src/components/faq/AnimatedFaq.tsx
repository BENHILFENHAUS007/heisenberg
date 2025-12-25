import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface AnimatedFaqProps {
  items: FAQItem[];
}

export const AnimatedFaq: React.FC<AnimatedFaqProps> = ({ items }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        className="space-y-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            <div className="rounded-lg border border-orange-400/30 overflow-hidden bg-black/40 backdrop-blur-sm hover:border-orange-400/60 transition-all duration-200">
              {/* Question button */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-200 group"
                aria-expanded={expandedId === item.id}
              >
                <h3 className="text-lg font-semibold text-white text-left group-hover:text-orange-400 transition-colors">
                  {item.question}
                </h3>
                
                {/* Chevron icon */}
                <motion.div
                  animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} className="text-orange-400" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedId === item.id ? 'auto' : 0,
                  opacity: expandedId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 pt-0 border-t border-orange-400/20 text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
