import { motion } from 'framer-motion';
import safetyData from '../data/safety.json';

interface SafetyProps {
  theme: any;
}

export const Safety: React.FC<SafetyProps> = ({ theme }) => {
  return (
    <div className="min-h-screen pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <h1 className="text-5xl font-black mb-4 glow-text">Safety Guidelines</h1>
        <p className="text-xl text-gray-400 mb-12">
          Always prioritize safety when using fireworks. Follow these guidelines for a safe
          and enjoyable experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-effect p-6 rounded-xl border"
              style={{ borderColor: theme.primaryColor }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
