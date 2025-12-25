import React from 'react';
import './LightningBackground.css';

interface LightningBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const LightningBackground: React.FC<LightningBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium',
}) => {
  // Generate random lightning bolts
  const bolts = Array.from({ length: 3 }, (_, i) => i);

  return (
    <div
      className={`lightning-background-container ${intensity} ${className}`}
      style={{
        '--lightning-intensity': intensity === 'high' ? '0.8' : intensity === 'medium' ? '0.5' : '0.3',
      } as React.CSSProperties}
    >
      {/* Static background */}
      <div className="lightning-bg-base" />

      {/* Lightning bolts */}
      {bolts.map((i) => (
        <div key={i} className="lightning-bolt" style={{
          left: `${20 + i * 30}%`,
          animation: `lightning-strike ${3 + i * 0.5}s infinite`,
          animationDelay: `${i * 0.8}s`,
        }} >
          <div className="lightning-line" />
          <div className="lightning-glow" />
        </div>
      ))}

      {/* Content overlay */}
      {children && <div className="lightning-content">{children}</div>}
    </div>
  );
};

export default LightningBackground;
