import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryProps {
  theme: any;
}

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery1.png',
    alt: 'Fireworks Display 1',
    title: 'Spectacular Show',
  },
  {
    id: 2,
    src: '/images/gallery2.jpeg',
    alt: 'Fireworks Display 2',
    title: 'Night Sky Magic',
  },
  {
    id: 3,
    src: '/images/gallery3.jpeg',
    alt: 'Fireworks Display 3',
    title: 'Festival Celebration',
  },
];

export const Gallery: React.FC<GalleryProps> = ({ theme }) => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="min-h-screen pb-20 relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <h1 className="text-5xl font-black mb-4 glow-text">Gallery</h1>
        <p className="text-gray-400 mb-12">Explore our stunning fireworks displays and celebrations</p>

        {/* Gallery Grid - LIGHTNING BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                {/* Lightning Border Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(255,215,0,0.3), transparent)',
                    padding: '2px',
                    animation: 'lightning-rotate 3s linear infinite',
                  }}
                >
                  <div className="w-full h-full bg-gray-900 rounded-2xl" />
                </div>
                
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = '/images/coming soon.png';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-300">Click to view full size</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
            className="absolute top-4 right-4 p-2 text-white hover:text-orange-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* CSS Animation for Lightning */}
      <style>{`
        @keyframes lightning-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
