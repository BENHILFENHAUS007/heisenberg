import { motion } from 'framer-motion';
import { Heart, MessageCircle, Bell } from 'lucide-react';
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
  const [imgSrc, setImgSrc] = useState(product.thumbnail3D);
  const primaryColor = theme?.primaryColor || '#ff6b00';

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.name} (${product.id}). Please share details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${configData.whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  const handleNotifyMe = () => {
    const message = `Hey! Please notify me when ${product.name} launches!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${configData.whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  const handleImageError = () => {
    setImgSrc('/images/comingsoon.png');
  };

  // Determine tag based on product properties
  const getTag = () => {
    if (product.tags?.includes('TRENDING')) return { text: 'TRENDING', color: 'bg-orange-500' };
    if (product.tags?.includes('NEW')) return { text: 'NEW', color: 'bg-blue-500' };
    if (product.tags?.includes('upcoming')) return { text: 'COMING SOON', color: 'bg-purple-500' };
    return null;
  };

  const tag = getTag();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      {/* ELECTRIC BORDER WRAPPER */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: 'inset 0 0 30px rgba(249, 115, 22, 0.3), 0 0 30px rgba(249, 115, 22, 0.2)',
        }}
      />

      {/* Card */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
        {/* Tag */}
        {tag && (
          <span className={`absolute top-3 right-3 z-20 ${tag.color} text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse shadow-lg`}>
            {tag.text}
          </span>
        )}

        {/* Image Container */}
        <div className="relative overflow-hidden bg-black h-56 w-full">
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <img
            src={imgSrc}
            alt={product.name}
            className="relative z-10 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={handleImageError}
          />

          {/* Coming Soon Badge Overlay - Responsive */}
          {product.comingSoon && (
            <div className="absolute inset-0 z-15 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/comingsoon.png"
                  alt="Coming Soon"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2 z-20">
            {product.isNew && !product.comingSoon && (
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md bg-orange-500">
                NEW
              </span>
            )}
            {product.isFeatured && (
              <span className="px-3 py-1 rounded-full text-xs font-bold text-black shadow-md bg-yellow-400">
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
              fill={isFavorite ? primaryColor : 'none'}
              stroke={isFavorite ? primaryColor : '#fff'}
            />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs text-orange-400 font-semibold mb-1 uppercase tracking-wider">
            {product.categoryId.replace(/-/g, ' ')}
          </p>
          <h3 className="text-lg font-bold mb-2 text-white truncate">{product.name}</h3>
          <p className="text-sm text-gray-300 mb-4 line-clamp-2">
            {product.descriptionShort}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 bg-white/10 text-gray-300 rounded-full backdrop-blur-sm capitalize"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Meta */}
          {!product.comingSoon && product.effectType && product.effectType.toLowerCase() !== 'mixed' && (
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
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            {!product.comingSoon ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="flex-1 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm font-semibold text-white border border-white/20"
                >
                  Details
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
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleNotifyMe}
                className="w-full py-2.5 rounded-lg font-semibold text-white flex items-center justify-center gap-2 text-sm transition-all shadow-lg"
                style={{ backgroundColor: '#25D366' }}
              >
                <Bell size={16} /> Notify Me
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
