import { motion } from 'framer-motion';
import configData from '../data/config.json';

interface AboutProps {
  theme: any;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <div className="min-h-screen pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <h1 className="text-5xl font-black mb-8 glow-text">About {configData.siteName}</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none space-y-6"
        >
          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Premium Fireworks Display</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {configData.siteName} is a showcase of premium fireworks products designed
              for celebrations, festivals, and special events. Our collection features the
              finest display-only products sourced from trusted manufacturers.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Display-Only Catalog</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              This website is a display and information platform. To inquire about products,
              pricing, and orders, please contact us directly via WhatsApp. Our team is
              available to assist with:
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Product Information
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Pricing & Availability
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Bulk Orders & Wholesale
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Delivery & Logistics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Event Planning
              </li>
            </ul>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Our Branches</h2>
            <div className="space-y-4">
              {configData.branches.map((branch) => (
                <div key={branch.id} className="border-l-4 pl-4 py-2" style={{ borderColor: theme.primaryColor }}>
                  <h3 className="font-bold text-lg">{branch.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{branch.address}</p>
                  <p className="text-sm text-gray-400">📍 {branch.landmark}</p>
                  <p className="text-sm text-gray-400">📞 {branch.phone}</p>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark text-sm mt-2 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
