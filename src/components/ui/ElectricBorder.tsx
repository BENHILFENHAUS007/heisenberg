import React, { CSSProperties } from 'react';
import './electric-border.css';

type BorderColor = 'gold' | 'cyan' | 'purple';

interface ElectricBorderProps {
  children: React.ReactNode;
  color?: BorderColor;
  continuous?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const colorMap: Record<BorderColor, { primary: string; glow: string }> = {
  gold: {
    primary: 'rgb(255, 215, 0)',
    glow: 'rgba(255, 215, 0, 0.6)',
  },
  cyan: {
    primary: 'rgb(0, 212, 255)',
    glow: 'rgba(0, 212, 255, 0.6)',
  },
  purple: {
    primary: 'rgb(168, 85, 247)',
    glow: 'rgba(168, 85, 247, 0.6)',
  },
};

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = 'gold',
  continuous = true,
  intensity = 'medium',
  className = '',
}) => {
  const colors = colorMap[color];
  const animationDuration = intensity === 'low' ? 4 : intensity === 'high' ? 2 : 3;

  const borderStyle: CSSProperties = {
    '--border-color': colors.primary,
    '--glow-color': colors.glow,
    '--animation-duration': `${animationDuration}s`,
  } as CSSProperties & { [key: string]: string };

  return (
    <div
      className={`electric-border-container ${continuous ? 'continuous' : ''} ${className}`}
      style={borderStyle}
    >
      <div className="electric-border-content">{children}</div>
      <div className="electric-border-line"></div>
    </div>
  );
};

export default ElectricBorder;
