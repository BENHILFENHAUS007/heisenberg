import { motion } from 'framer-motion';

interface ComingSoonPlaceholderProps {
  imageUrl?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const ComingSoonPlaceholder: React.FC<ComingSoonPlaceholderProps> = ({
  imageUrl = '/images/coming-soon.jpg',
  className = '',
  title = 'Coming Soon',
  subtitle = 'We are currently making some improvements!',
}) => {
  return (
    <motion.div
      className={`relative w-full rounded-2xl overflow-hidden shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {title}
            </h3>
            <p className="text-lg text-gray-300 max-w-md">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
