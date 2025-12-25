import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  variant?: 'fade' | 'slide' | 'scale';
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  children,
  className = '',
  stagger = 0.1,
  variant = 'slide'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

interface AnimatedListItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide' | 'scale';
}

export const AnimatedListItem: React.FC<AnimatedListItemProps> = ({
  children,
  className = '',
  variant = 'slide'
}) => {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    },
    slide: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
        },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 20,
        },
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedList;