import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Heart, Bell } from 'lucide-react';
import productsData from '../data/products.json';
import configData from '../data/config.json';
import { useFavorites } from '../hooks/useFavorites';

interface ProductDetailProps {
  theme: any;
}

interface Product {
  id: string;
  name: string;
  categoryId: string;
  thumbnail3D: string;
  videoUrl?: string;
  tags: string[];
  descriptionShort: string;
  descriptionLong: string;
  effectType: string;
  noiseLevel: string;
  durationSeconds: number;
  hasVideo?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  displayOrder: number;
  comingSoon?: boolean;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ theme }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showVideo, setShowVideo] = useState(false);
  const primaryColor = theme?.primaryColor || '#ff6b00';
  const accentColor = theme?.accentColor || '#ffd700';

  const product = (productsData as any).products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Product Not Found</h1>
          <button
            onClick={() => navigate('/catalog')}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all"
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

  const handleNotifyMe = () => {
    const message = `Hey! Please notify me when ${product.name} launches!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${configData.whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors font-semibold"
        >
          <ArrowLeft size={20} /> Back
        </button>
      </motion.div>

      {/* Main Content - 40% Image / 60% Content Layout */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Left: Image (40% on desktop, 100% on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Main Product Image */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden w-full aspect-square flex items-center justify-center">
              <img
                src={product.thumbnail3D}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Coming Soon Badge on Image */}
            {product.comingSoon && (
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden w-full aspect-square flex items-center justify-center relative">
                <img
                  src={product.thumbnail3D}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="/images/coming-soon.png"
                    alt="Coming Soon"
                    className="w-40 h-40 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: Details (60% on desktop, 100% on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Title Section */}
            <div>
              <p className="text-sm text-orange-400 font-semibold mb-2 uppercase tracking-widest">
                {product.categoryId.replace(/-/g, ' ')}
              </p>
              <h1 className="text-5xl md:text-6xl font-black mb-4 text-white leading-tight">
                {product.name}
              </h1>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.isNew && !product.comingSoon && (
                  <span
                    className="px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg"
                    style={{ backgroundColor: primaryColor }}
                  >
                    NEW
                  </span>
                )}
                {product.isFeatured && (
                  <span
                    className="px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                    style={{ backgroundColor: accentColor, color: '#000' }}
                  >
                    FEATURED
                  </span>
                )}
                {product.comingSoon && (
                  <span className="px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg bg-purple-600">
                    COMING SOON
                  </span>
                )}
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                {product.descriptionLong}
              </p>
            </div>

            {/* Specifications */}
            {!product.comingSoon && (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 mb-2 uppercase font-semibold">Effect Type</p>
                  <p className="text-xl font-bold text-white capitalize">{product.effectType}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 mb-2 uppercase font-semibold">Noise Level</p>
                  <p className="text-xl font-bold text-white capitalize">{product.noiseLevel}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 mb-2 uppercase font-semibold">Duration</p>
                  <p className="text-xl font-bold text-white">{product.durationSeconds}s</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 mb-2 uppercase font-semibold">Status</p>
                  <p className="text-xl font-bold text-white">Ready</p>
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <p className="text-sm text-gray-500 mb-3 uppercase font-semibold">Tags</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm capitalize font-semibold text-gray-300 hover:bg-white/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {!product.comingSoon ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsApp}
                    className="flex-1 py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 text-lg transition-all shadow-xl"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle size={22} /> WhatsApp Enquiry
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFavorite(product.id)}
                    className="px-6 py-4 rounded-lg font-bold border-2 flex items-center justify-center gap-2 transition-all"
                    style={{
                      borderColor: primaryColor,
                      backgroundColor: isFavorite(product.id) ? primaryColor : 'transparent',
                    }}
                  >
                    <Heart
                      size={22}
                      fill={isFavorite(product.id) ? 'currentColor' : 'none'}
                    />
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNotifyMe}
                  className="w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 text-lg transition-all shadow-xl"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <Bell size={22} /> Notify Me When Launched
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>

        {/* YouTube Video Section - Full Width Below */}
        {product.hasVideo && product.videoUrl && !product.comingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-6">Product Demo</h2>
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl w-full border border-white/10">
              <div className="aspect-video w-full bg-gray-900 relative">
                {!showVideo ? (
                  <div
                    className="w-full h-full flex items-center justify-center cursor-pointer group relative bg-black"
                    onClick={() => setShowVideo(true)}
                  >
                    {/* YouTube Thumbnail with Play Overlay */}
                    <img
                      src={`https://img.youtube.com/vi/${product.videoUrl?.split('/embed/')[1] || product.videoUrl?.split('?')[0]}/maxresdefault.jpg`}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${product.videoUrl?.split('/embed/')[1] || product.videoUrl?.split('?')[0]}/hqdefault.jpg`;
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors"
                      >
                        <div className="w-0 h-0 border-l-8 border-l-transparent border-r-0 border-t-5 border-t-transparent border-b-5 border-b-transparent" 
                          style={{
                            borderLeft: '12px solid rgb(0, 0, 0)',
                            borderTop: '8px solid transparent',
                            borderBottom: '8px solid transparent',
                            marginLeft: '3px'
                          }}
                        />
                      </motion.div>
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
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};