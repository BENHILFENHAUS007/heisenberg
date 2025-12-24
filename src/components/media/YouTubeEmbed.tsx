import { motion } from 'framer-motion';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube video player',
  className = '',
  autoplay = false,
}) => {
  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1${autoplay ? '&autoplay=1&mute=1' : ''}`;

  return (
    <motion.div
      className={`relative w-full overflow-hidden rounded-2xl shadow-2xl ${className}`}
      style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </motion.div>
  );
};
