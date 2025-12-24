import { motion } from 'framer-motion';
import { Heart, Play, MessageCircle } from 'lucide-react';
import { Product } from '../../types';
import { useNavigate } from 'react-router-dom';
import configData from '../../data/config.json';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  theme: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onFavoriteToggle,
  theme,
}) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(
    product.id === 'TKF-006' 
      ? '/heisenberg/images/coming soon.png'
      : product.thumbnail3D
  );

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.name} (${product.id}). Please share details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${configData.whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  const handleImageError = () => {
    // Fallback to coming soon image
    setImgSrc('/heisenberg/images/coming soon.png');
  };

  // Check if this is Mystic Wonder Pack for UPCOMING tag
  const isUpcoming = product.id === 'TKF-006';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
      style={{
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(to bottom right, #1f2937, #111827), linear-gradient(135deg, #f97316, #ec4899)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* UPCOMING TAG - Only for Mystic Wonder Pack */}
      {isUpcoming && (
        <span className="absolute top-3 right-3 z-20 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse shadow-lg">
          UPCOMING
        </span>
      )}

      {/* Image Container with ELECTRIC BORDER effect */}
      <div className="relative overflow-hidden bg-black h-56">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-orange-500/20 animate-pulse" />
        
        <img
          src={imgSrc}
          alt={product.name}
          className="relative z-10 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={handleImageError}
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 flex gap-2 z-20">
          {product.isNew && (
            <span
              className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
              style={{ backgroundColor: theme.primaryColor }}
            >
              NEW
            </span>
          )}
          {product.isFeatured && (
            <span
              className="px-3 py-1 rounded-full text-xs font-bold text-black shadow-md"
              style={{ backgroundColor: theme.accentColor }}
            >
              FEATURED
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onFavoriteToggle}
          className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/70 hover:bg-black/90 transition-colors backdrop-blur-sm z-20"
        >
          <Heart
            size={18}
            fill={isFavorite ? theme.primaryColor : 'none'}
            stroke={isFavorite ? theme.primaryColor : '#fff'}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-orange-400 font-semibold mb-1">
          {product.categoryId.replace(/-/g, ' ').toUpperCase()}
        </p>
        <h3 className="text-xl font-bold mb-2 text-white truncate">{product.name}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {product.descriptionShort}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-white/10 text-gray-300 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
          <div className="bg-white/5 p-2 rounded-lg">
            <p className="text-gray-400 mb-1">Effect</p>
            <p className="font-semibold text-white capitalize">{product.effectType}</p>
          </div>
          <div className="bg-white/5 p-2 rounded-lg">
            <p className="text-gray-400 mb-1">Noise</p>
            <p className="font-semibold text-white capitalize">{product.noiseLevel}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex-1 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/20"
          >
            <Play size={16} /> Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleWhatsApp}
            className="flex-1 py-2.5 rounded-lg font-semibold text-white flex items-center justify-center gap-2 text-sm transition-all shadow-lg"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageCircle size={16} /> Ask
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
