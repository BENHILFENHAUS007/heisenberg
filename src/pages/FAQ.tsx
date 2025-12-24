import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FireParticlesBackground } from '../components/effects/FireParticlesBackground';
import faqData from '../data/faq.json';

interface FAQProps {
  theme: any;
  activeMood?: { bg: string };
}

export const FAQ: React.FC<FAQProps> = ({ theme, activeMood }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen pb-20 relative bg-gradient-to-br ${activeMood?.bg || 'from-gray-900 via-black to-gray-900'} transition-colors duration-700`}>
      {/* Fire Particles Background - ENABLED */}
      <FireParticlesBackground enabled={true} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12 relative z-10"
      >
        <h1 className="text-5xl font-black mb-4 glow-text">Frequently Asked Questions</h1>
        <p className="text-gray-400 mb-12">Find answers to common questions about our products and services</p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-effect rounded-xl overflow-hidden border"
              style={{ borderColor: openIndex === index ? theme.primaryColor : 'rgba(255,255,255,0.1)' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} style={{ color: theme.primaryColor }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
