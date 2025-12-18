import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import faqData from '../data/faq.json';

interface FAQProps {
  theme: any;
}

export const FAQ: React.FC<FAQProps> = ({ theme }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <h1 className="text-5xl font-black mb-8 glow-text">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-effect rounded-lg overflow-hidden border"
              style={{ borderColor: theme.primaryColor }}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-dark-surface/50 transition-colors"
              >
                <span className="font-bold text-lg text-left">{item.question}</span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openId === item.id ? 'auto' : 0,
                  opacity: openId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t"
                style={{ borderColor: theme.primaryColor }}
              >
                <div className="px-6 py-4 text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
