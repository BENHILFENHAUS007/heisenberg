import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import galleryData from '../data/gallery.json';

interface GalleryProps {
  theme: any;
}

export const Gallery: React.FC<GalleryProps> = ({ theme }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = galleryData.itemsPerPage || 10;
  const totalPages = Math.ceil(galleryData.images.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const currentItems = galleryData.images.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="min-h-screen pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <h1 className="text-5xl font-black mb-2 glow-text">Gallery</h1>
        <p className="text-gray-400 mb-12">{galleryData.description}</p>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {currentItems.map((item: any, idx: number) => (
            <motion.div
              key={`${currentPage}-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-lg h-64 group cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-lg bg-dark-surface hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-10 h-10 rounded-lg transition-all ${
                    currentPage === idx
                      ? 'font-bold text-black'
                      : 'bg-dark-surface hover:bg-opacity-80'
                  }`}
                  style={{
                    backgroundColor: currentPage === idx ? theme.primaryColor : undefined,
                  }}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-lg bg-dark-surface hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
