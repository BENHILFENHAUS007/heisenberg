import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Shield, Zap, Heart } from 'lucide-react';
import { useEffect } from 'react';

interface SafetyProps {
  theme?: any;
}

const safetyGuidelines = [
  {
    icon: AlertCircle,
    title: 'Read Instructions',
    description: 'Always follow the instructions printed on the packaging before use.',
  },
  {
    icon: Shield,
    title: 'Protective Equipment',
    description: 'Wear safety glasses and keep a safe distance while lighting fireworks.',
  },
  {
    icon: Zap,
    title: 'Proper Storage',
    description: 'Store fireworks in a cool, dry place away from heat, children, and pets.',
  },
  {
    icon: CheckCircle,
    title: 'Safe Environment',
    description: 'Use fireworks only in open outdoor spaces. Never aim at people, animals, or property.',
  },
];

const warnings = [
  'Do not relight failed fireworks',
  'Never hold a lit firework',
  'Do not use under alcohol or drug influence',
  'Avoid use in strong wind conditions',
];

export const Safety: React.FC<SafetyProps> = ({ theme }) => {
  // Dim cursor on Safety page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .safety-page * {
        cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="%23666666" opacity="0.5"/></svg>') 12 12, auto;
      }
      .safety-page {
        cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="%23666666" opacity="0.5"/></svg>') 12 12, auto;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="safety-page min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-20">
      {/* FULL PAGE LIGHTNING EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Moving lightning elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            opacity: [0.1, 0.3, 0.1, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            opacity: [0.1, 0.25, 0.1, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 100, 0],
            y: [0, 50, -100, 0],
            opacity: [0.05, 0.15, 0.05, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content - relative positioning to appear above effects */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Safety First. Always First.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            At TK Fireworks, safety is built into every spark.
          </p>
        </motion.div>

        {/* SAFETY PROMISE - Premium Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/30 via-blue-500/20 to-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl p-12 rounded-2xl border border-green-400/40 group-hover:border-green-400/70 transition-all duration-300">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg"
                >
                  <Heart size={32} className="text-white" fill="white" />
                </motion.div>
              </div>

              {/* Main Message */}
              <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                <p className="text-xl font-semibold text-white">
                  Our products are carefully engineered, thoroughly tested, and responsibly manufactured to deliver joyful celebrations with complete peace of mind.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mt-2 flex-shrink-0"></div>
                    <p>
                      We design each product with the same care a parent has for their child.
                    </p>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 mt-2 flex-shrink-0"></div>
                    <p>
                      Every single batch is checked, tested, and perfected to make sure it's safe to hold, safe to light, and safe to enjoy.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-l-4 border-green-400 p-6 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Because at TK Fireworks, safety isn't a rule — it's our only priority. 💚
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SAFETY GUIDELINES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Safety Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyGuidelines.map((guideline, idx) => {
              const Icon = guideline.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                  <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 h-full">
                    <Icon className="w-12 h-12 text-yellow-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">🔔 {guideline.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{guideline.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* IMPORTANT WARNINGS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-950/30 border-2 border-red-500/50 rounded-2xl p-8 mb-16 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8" />
            Important Warnings
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warnings.map((warning, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="text-red-500 font-bold mt-1">●</span>
                <span>{warning}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* AGE AND HEALTH ADVISORY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <div className="bg-blue-950/30 border-2 border-blue-500/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Age Requirement</h3>
            <p className="text-gray-300">
              Fireworks are for ages 18 and above. Those with medical conditions should avoid handling fireworks.
            </p>
          </div>
          <div className="bg-amber-950/30 border-2 border-amber-500/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Emergency Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Fire and Rescue Services:</strong> 101</p>
              <p><strong>All Emergency Services:</strong> 112</p>
            </div>
          </div>
        </motion.div>

        {/* FINAL MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-white mb-2">
            Celebrate responsibly. Celebrate safely.
          </p>
          <p className="text-xl text-orange-400 font-semibold">
            TK Fireworks.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
