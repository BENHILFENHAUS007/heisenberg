import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Heart,
  Share2,
  MessageCircle,
  Play,
  Shield,
  Zap,
  Clock,
  Volume2,
  Star,
  AlertCircle,
  Bell,
} from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';
import productsData from '../data/products.json';
import configData from '../data/config.json';
import { getAssetPath } from '../utils/getAssetPath';

interface ProductDetailProps {
  theme: any;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ theme }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [imgSrc, setImgSrc] = useState<string>('');

  useEffect(() => {
    const foundProduct = productsData.products.find((p: any) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      const imagePath = getAssetPath(foundProduct.thumbnail3D);
      setSelectedImage(imagePath);
      setImgSrc(imagePath);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0050] to-black pt-24 flex items-center justify-center">
        <p className="text-white text-xl">Product not found</p>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.name} (${product.id}). Please share pricing and availability details.`;
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
    setImgSrc(getAssetPath('/images/comingsoon.png'));
  };

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0050] to-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
          Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image - OPTIMIZED for product page hero */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 aspect-square">
              <img
                src={imgSrc}
                alt={product.name}
                className="w-full h-full object-contain"
                loading="eager"              // Eager loading - hero image
                decoding="async"             // Non-blocking decode
                width={600}                  // Explicit dimensions
                height={600}
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: '1 / 1',     // Square aspect ratio
                  display: 'block'
                }}
                onError={handleImageError}
              />
              
              {product.comingSoon && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <img
                    src={getAssetPath('/images/comingsoon.png')}
                    alt="Coming Soon"
                    className="w-48 h-48 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleFavorite(product.id)}
                className={`flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  isFavorite
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Heart size={20} fill={isFavorite ? 'white' : 'none'} />
                {isFavorite ? 'Saved' : 'Save'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Share2 size={20} />
                Share
              </motion.button>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.isFeatured && (
                <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                  FEATURED
                </span>
              )}
              {product.isNew && (
                <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                  NEW
                </span>
              )}
              {product.comingSoon && (
                <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full animate-pulse">
                  COMING SOON
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <p className="text-orange-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                {product.categoryId.replace(/-/g, ' ')}
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                {product.name}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.descriptionLong || product.descriptionShort}
              </p>
            </div>

            {/* Specs */}
            {!product.comingSoon && (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Zap size={20} />
                    <p className="text-sm font-semibold">EFFECT TYPE</p>
                  </div>
                  <p className="text-white font-bold capitalize">{product.effectType}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Volume2 size={20} />
                    <p className="text-sm font-semibold">NOISE LEVEL</p>
                  </div>
                  <p className="text-white font-bold capitalize">{product.noiseLevel}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Clock size={20} />
                    <p className="text-sm font-semibold">DURATION</p>
                  </div>
                  <p className="text-white font-bold">{product.duration}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Shield size={20} />
                    <p className="text-sm font-semibold">STATUS</p>
                  </div>
                  <p className="text-white font-bold capitalize">{product.status}</p>
                </div>
              </div>
            )}

            {/* Safety Notice */}
            {!product.comingSoon && (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-blue-400 mt-1" size={20} />
                  <div>
                    <p className="text-blue-400 font-semibold mb-1">Safety First</p>
                    <p className="text-gray-300 text-sm">
                      Always follow safety guidelines. Keep a safe distance and supervise children.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {!product.comingSoon ? (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWhatsApp}
                  className="flex-1 py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 text-lg transition-all shadow-lg"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle size={20} />
                  WhatsApp Enquiry
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNotifyMe}
                  className="flex-1 py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 text-lg transition-all shadow-lg"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <Bell size={20} />
                  Notify Me When Available
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Product Demo Video */}
        {product.videoDemo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-black text-white mb-8">Product Demo</h2>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-6 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
                >
                  <Play size={32} className="text-white" fill="white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
