import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DiwaliOffersProps {
  theme: any;
}

export const DiwaliOffers: React.FC<DiwaliOffersProps> = ({ theme }) => {
  const primaryColor = theme?.primaryColor || '#ff6b00';
  const accentColor = theme?.accentColor || '#ffd700';

  return (
    <div className="min-h-screen pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <div className="text-5xl mb-4 inline-block">📔</div>
        <h1 className="text-5xl font-black mb-4 glow-text">Diwali Celebration 2025</h1>
        <p className="text-xl text-gray-400 mb-12">
          Celebrate the Festival of Lights with our exclusive Diwali collection
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Special Offers */}
          <div className="glass-effect p-8 rounded-xl border-2" style={{ borderColor: primaryColor }}>
            <h2 className="text-3xl font-bold mb-6">🎯 Special Offers</h2>
            <ul className="space-y-3 mb-8 text-lg">
              <li className="flex items-center gap-3">
                <span style={{ color: primaryColor }}>★</span> Bulk discounts on festival collections
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: primaryColor }}>★</span> Free delivery on orders above minimum
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: primaryColor }}>★</span> Customized gift packages available
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: primaryColor }}>★</span> Extended support for events
              </li>
            </ul>
            <Link to="/catalog" className="btn-primary inline-block">
              Explore Diwali Collection
            </Link>
          </div>

          {/* Why Choose Us */}
          <div className="glass-effect p-8 rounded-xl border-2" style={{ borderColor: accentColor }}>
            <h2 className="text-3xl font-bold mb-6">✨ Why TK Fireworks</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <span style={{ color: accentColor }}>✓</span> Premium quality products
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: accentColor }}>✓</span> Safe & certified items
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: accentColor }}>✓</span> Expert recommendations
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: accentColor }}>✓</span> Fast WhatsApp support
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <Sparkles size={48} className="mx-auto mb-4" style={{ color: primaryColor }} />
          <h2 className="text-3xl font-bold mb-4">Make This Diwali Unforgettable</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Contact us today to plan your perfect Diwali celebration
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};