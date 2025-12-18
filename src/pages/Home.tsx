import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import configData from '../data/config.json';
import productsData from '../data/products.json';

interface HomeProps {
  theme: any;
}

export const Home: React.FC<HomeProps> = ({ theme }) => {
  const featuredProducts = (productsData as any[]).filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
        style={{ background: theme.background }}
      >
        {/* Animated Background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-10"
        >
          <div
            className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: theme.primaryColor }}
          />
          <div
            className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: theme.accentColor }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl md:text-8xl mb-6 inline-block"
          >
            🔥
          </motion.div>

          <h1
            className="text-5xl md:text-7xl font-black mb-4 glow-text"
            style={{
              backgroundImage: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.accentColor} 100%)`,
            }}
          >
            {configData.siteName}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">{configData.tagline}</p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our premium collection of 3D fireworks. Display-only. Enquire via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/catalog"
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                Explore Catalog <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <button
                onClick={() => {
                  const message = encodeURIComponent(configData.whatsappDefaultMessage);
                  window.open(`https://wa.me/${configData.whatsappNumber}?text=${message}`, '_blank');
                }}
                className="btn-secondary inline-flex items-center gap-2 text-lg"
              >
                <span>💬</span> WhatsApp Us
              </button>
            </motion.div>
          </div>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-gray-500"
          >
            ✨ Scroll to see featured products
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center glow-text">
            Featured Collection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-dark-surface rounded-xl p-6 glass-effect hover:shadow-2xl transition-all duration-300"
                style={{
                  borderColor: theme.primaryColor,
                  borderWidth: '1px',
                }}
              >
                <div className="mb-4 h-40 bg-dark-bg rounded-lg overflow-hidden">
                  <img
                    src={product.thumbnail3D}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.descriptionShort}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                  style={{
                    backgroundColor: theme.primaryColor,
                    color: '#000',
                  }}
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section
        className="max-w-7xl mx-auto px-4 py-20 rounded-xl glass-effect p-12 text-center"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}22 0%, ${theme.accentColor}22 100%)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Explore?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our complete collection, use our filters, save favorites, and enquire via WhatsApp.
          </p>
          <Link
            to="/catalog"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <Sparkles size={20} /> Go to Catalog
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
