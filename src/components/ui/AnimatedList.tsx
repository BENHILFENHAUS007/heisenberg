import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './animated-list.css';

export interface AnimatedListItem {
  id: string | number;
  title: string;
  content: string | React.ReactNode;
}

interface AnimatedListProps {
  items: AnimatedListItem[];
  className?: string;
  defaultOpen?: string | number;
}

const AccordionItem: React.FC<{
  item: AnimatedListItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}> = ({ item, isOpen, onToggle, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="animated-list-item"
      custom={index}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <button
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${item.id}`}
      >
        <span className="accordion-title">{item.title}</span>
        <motion.span
          className="accordion-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content-wrapper"
            id={`panel-${item.id}`}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="accordion-content">{item.content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const AnimatedList: React.FC<AnimatedListProps> = ({
  items,
  className = '',
  defaultOpen,
}) => {
  const [openId, setOpenId] = useState<string | number | null>(defaultOpen || null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      className={`animated-list-container ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          index={index}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedList;
