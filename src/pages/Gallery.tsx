import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Heart, Play } from 'lucide-react';

interface GalleryProps {
  theme: any;
}

// TASK 8: UPDATED - Removed gallery1.png and gallery3.png
const galleryImages = [
  {
    id: 2,
    src: '/heisenberg/images/gallery2.png',
    fallback: 'https://raw.githubusercontent.com/BENHILFENHAUS007/heisenberg/main/public/images/gallery2.png',
    alt: 'Night Sky Magic',
    title: 'Night Sky Magic',
  },
];

// TASK 8: NEW - YouTube Trailers
const videoTrailers = [
  {
    id: 'trailer-eng',
    title: 'TK Fireworks Trailer - English Version',
    youtubeId: 'irqv2ZtRNOw',
    embedUrl: 'https://www.youtube.com/embed/irqv2ZtRNOw',
    language: 'English',
  },
  {
    id: 'trailer-tamil',
    title: 'TK Fireworks Trailer - Tamil Version',
    youtubeId: 'idr2ZQKiyl0',
    embedUrl: 'https://www.youtube.com/embed/idr2ZQKiyl0',
    language: 'Tamil',
  },
];

export const Gallery: React.FC<GalleryProps> = ({ theme }) => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: string }>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleImageError = (id: number, fallbackUrl: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: fallbackUrl }));
  };

  return (
    <div className="min-h-screen pb-20 relative bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our stunning fireworks displays, trailers, and celebrations
          </p>
        </motion.div>

        {/* TASK 8: NEW - YouTube Video Trailers Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 flex items-center gap-3">
              <Play className="text-orange-400" size={32} />
              Product Trailers
            </h2>
            <p className="text-gray-400">Watch our latest fireworks in action</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {videoTrailers.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                  {/* Video Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{video.title}</h3>
                    <p className="text-sm text-orange-400 font-medium">Language: {video.language}</p>
                  </div>

                  {/* YouTube Embed - Same size as product demo videos */}
                  <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                      style={{
                        border: 'none',
                        width: '100%',
                        height: '100%',
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Accent */}
                  <div className="h-1 w-0 bg-gradient-to-r from-orange-400 to-pink-500 mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Grid with STACK ANIMATION + Optimized Images */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Photo Gallery
            </h2>
            <p className="text-gray-400">Captured moments from our celebrations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onHoverStart={() => setHoveredCard(image.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                  {/* Image Container with Stack Background */}
                  <div className="relative w-full h-full">
                    {/* Stack layer effect */}
                    {hoveredCard === image.id && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/30 to-pink-500/30 -translate-y-2 -translate-x-2"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 -translate-y-1 -translate-x-1"
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        />
                      </>
                    )}
                    
                    {/* Main Image */}
                    <img
                      src={loadedImages[image.id] || image.src}
                      alt={image.alt}
                      className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={450}
                      style={{
                        width: '100%',
                        height: '100%',
                        aspectRatio: '16 / 9',
                        display: 'block'
                      }}
                      onError={() => handleImageError(image.id, image.fallback)}
                    />
                  </div>
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-2xl z-20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-300">Click to view full size</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GALLERY - THE CELEBRATION NEVER ENDS - Premium Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl p-12 rounded-2xl border border-purple-400/40 group-hover:border-purple-400/70 transition-all duration-300">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg"
                >
                  <Heart size={32} className="text-white" fill="white" />
                </motion.div>
              </div>

              {/* Main Message */}
              <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Gallery – The Celebration Never Ends
                </h2>
                
                <div className="space-y-4">
                  <p className="text-xl text-white leading-relaxed">
                    Welcome to the TK Fireworks gallery where lights dance and laughter echoes.
                    Every photo here is a glimpse of joy, captured mid-celebration.
                  </p>
                  
                  <div className="space-y-3 mt-6">
                    <p className="text-lg text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text font-semibold">
                      Bursts of color.
                    </p>
                    <p className="text-lg text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text font-semibold">
                      Smiles in slow motion.
                    </p>
                    <p className="text-lg text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text font-semibold">
                      Magic in every spark.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-4 border-purple-400 p-6 rounded-lg mt-8">
                  <p className="text-xl font-bold text-white">
                    Because no matter how many festivals come and go, the best moments always glow a little brighter with TK Fireworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal - OPTIMIZED */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-orange-400 transition-colors bg-black/50 rounded-full z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            src={loadedImages[selectedImage.id] || selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            onError={() => handleImageError(selectedImage.id, selectedImage.fallback)}
            loading="eager"
            decoding="async"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block'
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
          />
        </motion.div>
      )}

      {/* CSS for Stack Animation */}
      <style>{`
        @keyframes stack-lift {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};