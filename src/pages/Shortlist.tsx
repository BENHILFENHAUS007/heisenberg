import { motion } from 'framer-motion';
import { Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import productsData from '../data/products.json';
import configData from '../data/config.json';

interface ShortlistProps {
  theme: any;
}

interface Product {
  id: string;
  name: string;
  categoryId: string;
  thumbnail3D: string;
  descriptionShort: string;
  descriptionLong: string;
  effectType: string;
  noiseLevel: string;
  durationSeconds: number;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  hasVideo?: boolean;
  displayOrder: number;
}

export const Shortlist: React.FC<ShortlistProps> = ({ theme }) => {
  const navigate = useNavigate();
  const favorites = useFavorites();
  const primaryColor = theme?.primaryColor || '#ff6b00';

  const favoriteProducts = ((productsData as any).products as Product[]).filter((p) =>
    favorites.favorites.includes(p.id)
  );

  const handleShareViaWhatsApp = () => {
    const productList = favoriteProducts
      .map((p) => `• ${p.name} (${p.id})`)
      .join('\n');
    const message = `Hi, I'm interested in these TK Fireworks products:\n\n${productList}\n\nPlease provide more details and pricing.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${configData.whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <h1 className="text-5xl font-black mb-2 glow-text">Your Shortlist</h1>
        <p className="text-gray-400 mb-8">
          {favoriteProducts.length} product{favoriteProducts.length !== 1 ? 's' : ''} saved
        </p>

        {favoriteProducts.length > 0 ? (
          <div className="space-y-6">
            {/* Shortlist Items */}
            <div className="space-y-4">
              {favoriteProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-effect p-4 rounded-lg flex items-center gap-4 hover:shadow-lg transition-all duration-300"
                  style={{
                    borderColor: primaryColor,
                    borderWidth: '1px',
                  }}
                >
                  <img
                    src={product.thumbnail3D}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-400">{product.id}</p>
                    <p className="text-sm text-gray-300 mt-1">{product.descriptionShort}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                    style={{
                      backgroundColor: primaryColor,
                      color: '#000',
                    }}
                  >
                    View <ArrowRight size={16} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleShareViaWhatsApp}
                className="flex-1 py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={20} /> Share via WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => favorites.clearFavorites()}
                className="flex-1 py-3 rounded-lg font-bold border-2 transition-all"
                style={{
                  borderColor: primaryColor,
                  color: primaryColor,
                }}
              >
                Clear Shortlist
              </motion.button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Heart size={64} className="mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-bold mb-4">Your shortlist is empty</h2>
            <p className="text-gray-400 mb-8">Add products to your shortlist to see them here</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/catalog')}
              className="px-6 py-3 rounded-lg font-bold text-white transition-all"
              style={{ backgroundColor: primaryColor }}
            >
              Browse Catalog
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};