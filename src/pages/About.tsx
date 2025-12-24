import { motion } from 'framer-motion';
import { Award, Users, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FireParticlesBackground } from '../components/effects/FireParticlesBackground';

interface AboutProps {
  theme: any;
  activeMood?: { bg: string };
}

export const About: React.FC<AboutProps> = ({ theme, activeMood }) => {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only the finest fireworks from certified manufacturers'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction and safety are our top priorities'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love bringing joy and excitement to every celebration'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Trusted by thousands of customers for their special moments'
    }
  ];

  return (
    <div className={`min-h-screen pb-20 relative bg-gradient-to-br ${activeMood?.bg || 'from-gray-900 via-black to-gray-900'} transition-colors duration-700`}>
      {/* Fire Particles Background - ENABLED */}
      <FireParticlesBackground enabled={true} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 py-12 relative z-10"
      >
        <h1 className="text-5xl font-black mb-8 glow-text">About TK Fireworks</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold" style={{ color: theme.primaryColor }}>Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              TK Fireworks has been lighting up celebrations across India for years. What started as a small family business has grown into one of the most trusted names in the fireworks industry.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We specialize in providing high-quality, safe, and spectacular fireworks for all occasions - from intimate family gatherings to grand festivals and corporate events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold" style={{ color: theme.primaryColor }}>Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To make every celebration memorable by providing premium quality fireworks, exceptional customer service, and competitive pricing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are committed to safety, quality, and customer satisfaction in everything we do.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.primaryColor }}>Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center border hover:border-primary transition-all"
              >
                <value.icon size={48} className="mx-auto mb-4" style={{ color: theme.primaryColor }} />
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-effect p-8 rounded-xl border text-center"
          style={{ borderColor: theme.primaryColor }}
        >
          <h2 className="text-2xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-gray-300 mb-6">
            Experience our wide selection of fireworks in person. Our knowledgeable staff is ready to help you find the perfect products for your celebration.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
            style={{ backgroundColor: theme.primaryColor }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
