import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Heart } from 'lucide-react';
import productsData from '../data/products.json';
import { Product } from '../types';
import configData from '../data/config.json';
import { useFavorites } from '../hooks/useFavorites';

interface ProductDetailProps {
  theme: any;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ theme }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showVideo, setShowVideo] = useState(false);

  const product = (productsData.products as Product[]).find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/catalog')}
            className="btn-primary"
          >
            Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.name} (${product.id}). Please share details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${configData.whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image & Video */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="bg-dark-surface rounded-xl overflow-hidden h-96">
            <img
              src={product.thumbnail3D}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {product.hasVideo && (
            <div className="bg-dark-surface rounded-xl overflow-hidden h-96 relative">
              {!showVideo ? (
                <div
                  className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: theme.primaryColor }}
                  onClick={() => setShowVideo(true)}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-lg font-bold text-black">Watch Video</p>
                  </div>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${product.videoUrl}?autoplay=1&mute=0`}
                  title={product.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          )}
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <p className="text-sm text-primary mb-2">{product.categoryId.toUpperCase()}</p>
            <h1 className="text-4xl font-black mb-2">{product.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.isNew && (
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  NEW
                </span>
              )}
              {product.isFeatured && (
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: theme.accentColor, color: '#000' }}
                >
                  FEATURED
                </span>
              )}
            </div>
          </div>

          <div className="glass-effect p-6 rounded-lg space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">{product.descriptionLong}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Effect Type</p>
                <p className="font-bold capitalize">{product.effectType}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Noise Level</p>
                <p className="font-bold capitalize">{product.noiseLevel}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="font-bold">{product.durationSeconds}s</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Status</p>
                <p className="font-bold">{product.hasVideo ? '✓ With Video' : 'Image Only'}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-dark-surface rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleWhatsApp}
              className="flex-1 py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 text-lg transition-all"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={20} /> WhatsApp Enquiry
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleFavorite(product.id)}
              className="px-6 py-3 rounded-lg font-bold border-2 flex items-center justify-center gap-2 transition-all"
              style={{
                borderColor: theme.primaryColor,
                backgroundColor: isFavorite(product.id) ? theme.primaryColor : 'transparent',
              }}
            >
              <Heart
                size={20}
                fill={isFavorite(product.id) ? 'currentColor' : 'none'}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};