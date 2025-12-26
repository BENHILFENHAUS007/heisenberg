import { motion } from 'framer-motion';
import { MessageCircle, TrendingUp } from 'lucide-react';
import configData from '../data/config.json';

interface BulkOrdersProps {
  theme: any;
}

export const BulkOrders: React.FC<BulkOrdersProps> = ({ theme }) => {
  const primaryColor = theme?.primaryColor || '#ff6b00';
  const accentColor = theme?.accentColor || '#ffd700';

  const handleBulkEnquiry = () => {
    const message = encodeURIComponent('Hi, I\'m interested in bulk orders for TK Fireworks products. Please provide pricing and MOQ details.');
    window.open(`https://wa.me/${configData.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleDealerEnquiry = () => {
    const message = encodeURIComponent('Hi, I\'m interested in becoming a dealer for TK Fireworks. Please share details about dealer tie-up.');
    window.open(`https://wa.me/${configData.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <h1 className="text-5xl font-black mb-4 glow-text">Bulk Orders & Wholesale</h1>
        <p className="text-xl text-gray-400 mb-12">
          Special pricing for bulk purchases and dealer partnerships
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Bulk Orders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-xl border-2"
            style={{ borderColor: primaryColor }}
          >
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-3xl font-bold mb-4">Bulk Orders</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Order in bulk for events, celebrations, and corporate needs. Get competitive pricing for large quantities.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300">
              <li className="flex items-center gap-2">
                <span style={{ color: primaryColor }}>✓</span> Custom MOQ
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: primaryColor }}>✓</span> Special Pricing
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: primaryColor }}>✓</span> Fast Delivery
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: primaryColor }}>✓</span> Dedicated Support
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleBulkEnquiry}
              className="w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={20} /> Bulk Enquiry
            </motion.button>
          </motion.div>

          {/* Dealer Program */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-xl border-2"
            style={{ borderColor: accentColor }}
          >
            <div className="text-5xl mb-4">🤝</div>
            <h2 className="text-3xl font-bold mb-4">Dealer Partnership</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Become a TK Fireworks dealer and grow your business with exclusive offerings.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300">
              <li className="flex items-center gap-2">
                <span style={{ color: accentColor }}>✓</span> Wholesale Rates
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: accentColor }}>✓</span> Marketing Support
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: accentColor }}>✓</span> Territory Rights
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: accentColor }}>✓</span> Training & Resources
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleDealerEnquiry}
              className="w-full py-3 rounded-lg font-bold text-black flex items-center justify-center gap-2 transition-all"
              style={{ backgroundColor: accentColor }}
            >
              <TrendingUp size={20} /> Dealer Enquiry
            </motion.button>
          </motion.div>
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Process</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              >
                1
              </div>
              <div>
                <h4 className="font-bold mb-1">Send Enquiry</h4>
                <p className="text-gray-400">Use WhatsApp to send your bulk or dealer enquiry</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              >
                2
              </div>
              <div>
                <h4 className="font-bold mb-1">Consultation</h4>
                <p className="text-gray-400">Our team will contact you to discuss details</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              >
                3
              </div>
              <div>
                <h4 className="font-bold mb-1">Quotation</h4>
                <p className="text-gray-400">Receive customized quotation with pricing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              >
                4
              </div>
              <div>
                <h4 className="font-bold mb-1">Finalize</h4>
                <p className="text-gray-400">Confirm order and arrange delivery</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};