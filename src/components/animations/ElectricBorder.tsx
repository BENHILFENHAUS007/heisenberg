import React from 'react';
import './ElectricBorder.css';

interface ElectricBorderProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: 'cyan' | 'purple' | 'blue' | 'green';
}

const borderColors = {
  cyan: '#00d4ff',
  purple: '#a855f7',
  blue: '#3b82f6',
  green: '#10b981',
};

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  className = '',
  borderColor = 'cyan',
}) => {
  return (
    <div
      className={`electric-border-container ${className}`}
      style={{
        '--electric-color': borderColors[borderColor],
      } as React.CSSProperties}
    >
      <div className="electric-border-glow" />
      <div className="electric-border-content">{children}</div>
    </div>
  );
};

export default ElectricBorder;
