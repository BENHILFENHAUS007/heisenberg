import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryProps {
  theme: any;
}

const galleryImages = [
  {
    id: 1,
    src: '/heisenberg/images/gallery1.png',
    fallback: 'https://raw.githubusercontent.com/BENHILFENHAUS007/heisenberg/main/public/images/gallery1.png',
    alt: 'Spectacular Fireworks Display',
    title: 'Spectacular Show',
  },
  {
    id: 2,
    src: '/heisenberg/images/gallery2.jpeg',
    fallback: 'https://raw.githubusercontent.com/BENHILFENHAUS007/heisenberg/main/public/images/gallery2.jpeg',
    alt: 'Night Sky Magic',
    title: 'Night Sky Magic',
  },
  {
    id: 3,
    src: '/heisenberg/images/gallery3.jpeg',
    fallback: 'https://raw.githubusercontent.com/BENHILFENHAUS007/heisenberg/main/public/images/gallery3.jpeg',
    alt: 'Festival Celebration',
    title: 'Festival Celebration',
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
            Explore our stunning fireworks displays and celebrations
          </p>
        </motion.div>

        {/* Gallery Grid with STACK ANIMATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }} // Stack effect - cards lift on hover
              className="group cursor-pointer"
              onHoverStart={() => setHoveredCard(image.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                {/* Image Container with Stack Background */}
                <div className="relative w-full h-full">
                  {/* Stack layer effect - creates depth */}
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

      {/* Lightbox Modal */}
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
