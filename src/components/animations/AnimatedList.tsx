import React, { useState } from 'react';
import './AnimatedList.css';

interface AnimatedListItem {
  id: string | number;
  title: string;
  content: string;
}

interface AnimatedListProps {
  items: AnimatedListItem[];
  className?: string;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  items,
  className = '',
}) => {
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  const toggleExpand = (id: string | number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={`animated-list-container ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className="animated-list-item"
          style={{
            animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
          }}
        >
          <button
            className={`animated-list-header ${
              expandedId === item.id ? 'expanded' : ''
            }`}
            onClick={() => toggleExpand(item.id)}
            aria-expanded={expandedId === item.id}
          >
            <span className="animated-list-title">{item.title}</span>
            <span className="animated-list-icon">▸</span>
          </button>
          <div
            className={`animated-list-content ${
              expandedId === item.id ? 'expanded' : ''
            }`}
            style={{
              maxHeight:
                expandedId === item.id ? '500px' : '0',
              opacity: expandedId === item.id ? 1 : 0,
              visibility: expandedId === item.id ? 'visible' : 'hidden',
            }}
          >
            <div className="animated-list-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedList;
