import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Shield, Truck, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import configData from '../data/config.json';
import contactData from '../data/contact.json';
import { ProductCard } from '../components/ui/ProductCard';
import { useGA4 } from '../hooks/useGA4';
import { useFavorites } from '../hooks/useFavorites';

interface HomeProps {
  theme: any;
}

export const Home: React.FC<HomeProps> = ({ theme }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useGA4();

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch('/heisenberg/data/products.json');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data.slice(0, 4));
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (p) => p.categoryId.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.descriptionShort.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered.slice(0, 4));
  }, [selectedCategory, searchQuery, products]);

  return (
    <div className="relative min-h-screen bg-black">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-7xl font-black mb-4 text-white">
              {contactData.tagline}
            </h1>
            <p className="text-xl text-gray-400 mb-8">{contactData.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/catalog')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
            >
              Explore Products
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                desc: 'Hand-selected fireworks from certified manufacturers',
              },
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'All products meet international safety standards',
              },
              {
                icon: Zap,
                title: 'Wide Selection',
                desc: '500+ varieties for every occasion and budget',
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                desc: 'Quick dispatch and reliable delivery across India',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Featured Products</h2>

          {/* Search Bar */}
          <div className="mb-8 flex items-center">
            <Search className="absolute ml-4 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onFavoriteToggle={() => toggleFavorite(product.id)}
                  theme={theme}
                />
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12">
            <button
              onClick={() => navigate('/catalog')}
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              View All Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER - ONLY ON HOME PAGE */}
      <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
          >
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{contactData.company}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Soft sparks. Peaceful vibes. Perfect for home & family celebrations
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-bold">📞</span>
                  <a href={`tel:${contactData.contact.phoneFormatted}`} className="text-gray-400 hover:text-orange-400 transition">
                    {contactData.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-bold">✉️</span>
                  <a href={`mailto:${contactData.contact.email}`} className="text-gray-400 hover:text-orange-400 transition">
                    {contactData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-1">Corporate Address</h4>
                <p className="text-gray-400 text-sm">{contactData.corporate.address}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Registered Address</h4>
                <p className="text-gray-400 text-sm">{contactData.registered.address}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Communications Address</h4>
                <p className="text-gray-400 text-sm">{contactData.communications.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8" />

          {/* Bottom */}
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {contactData.company}. All rights reserved. | Designed & Developed with ♥</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
