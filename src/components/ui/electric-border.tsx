import React from 'react';
import { motion } from 'framer-motion';

interface ElectricBorderProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  className = '',
  borderColor = '#3b82f6'
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Corner sparks */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 rounded-full"
        style={{ backgroundColor: borderColor, filter: 'blur(2px)' }}
        animate={{
          x: [0, 0, '100%', '100%', 0],
          y: [0, '100%', '100%', 0, 0],
          opacity: [0.5, 1, 0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-50"
        style={{
          boxShadow: `inset 0 0 20px ${borderColor}`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 bg-black/90 backdrop-blur-sm rounded-lg">
        {children}
      </div>
    </motion.div>
  );
};

export default ElectricBorder;