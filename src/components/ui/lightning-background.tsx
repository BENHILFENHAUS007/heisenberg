import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LightningBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const LightningBackground: React.FC<LightningBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const [flashes, setFlashes] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    const flashCount = intensity === 'low' ? 3 : intensity === 'medium' ? 5 : 8;
    const newFlashes = Array.from({ length: flashCount }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
    }));
    setFlashes(newFlashes);
  }, [intensity]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black" />
      
      {/* Lightning flashes */}
      {flashes.map((flash) => (
        <React.Fragment key={flash.id}>
          {/* Vertical lightning bolt */}
          <motion.div
            className="absolute w-1 bg-gradient-to-b from-blue-400 via-white to-transparent"
            style={{
              left: `${10 + flash.id * 15}%`,
              top: '-10%',
              height: '120%',
              filter: 'blur(2px)',
            }}
            animate={{
              opacity: [0, 1, 0.8, 1, 0],
              scaleY: [0.5, 1, 0.9, 1, 0.5],
            }}
            transition={{
              duration: 0.3,
              delay: flash.delay,
              repeat: Infinity,
              repeatDelay: 8,
              ease: 'easeInOut',
            }}
          />
          
          {/* Lightning glow effect */}
          <motion.div
            className="absolute rounded-full"
            style={{
              left: `${10 + flash.id * 15}%`,
              top: '40%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 0.3,
              delay: flash.delay,
              repeat: Infinity,
              repeatDelay: 8,
              ease: 'easeInOut',
            }}
          />
          
          {/* Branching effect */}
          <motion.div
            className="absolute bg-white"
            style={{
              left: `${10 + flash.id * 15}%`,
              top: '50%',
              width: '80px',
              height: '1px',
              transformOrigin: 'left center',
              rotate: Math.random() * 60 - 30,
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 0.15,
              delay: flash.delay + 0.1,
              repeat: Infinity,
              repeatDelay: 8,
              ease: 'easeOut',
            }}
          />
        </React.Fragment>
      ))}
      
      {/* Ambient electrical particles */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Reduced cursor brightness area */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 0, 0, 0.5) 0%, transparent 300px)',
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LightningBackground;