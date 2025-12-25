import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './gooey-nav.css';

interface GooeyNavProps {
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
}

export const GooeyNav: React.FC<GooeyNavProps> = ({ isOpen = false, onToggle }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    const newState = !isNavOpen;
    setIsNavOpen(newState);
    onToggle?.(newState);
  };

  // Calculate morphing effect based on scroll
  const scrollFactor = Math.min(scrollY / 300, 1);
  const morphFactor = scrollFactor * 0.3;

  const bubbleVariants = {
    initial: {
      scale: 1,
      borderRadius: '50%',
    },
    scrolling: {
      scale: 1 + morphFactor * 0.2,
      borderRadius: `${50 - morphFactor * 20}%`,
      y: scrollY * 0.3,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 40 },
    },
  };

  return (
    <motion.div
      className="gooey-nav-wrapper"
      variants={bubbleVariants}
      initial="initial"
      animate="scrolling"
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 25,
      }}
    >
      <button
        className="gooey-nav-bubble"
        onClick={handleToggle}
        aria-label="Toggle navigation"
        aria-expanded={isNavOpen}
      >
        <motion.div
          animate={{
            rotate: isNavOpen ? 45 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </motion.div>
      </button>

      <motion.nav
        className="gooey-nav-menu"
        variants={contentVariants}
        initial="hidden"
        animate={isNavOpen ? 'visible' : 'hidden'}
      >
        <motion.a
          href="#/"
          className="gooey-nav-item"
          variants={itemVariants}
        >
          Home
        </motion.a>
        <motion.a
          href="#/catalog"
          className="gooey-nav-item"
          variants={itemVariants}
        >
          Products
        </motion.a>
        <motion.a
          href="#/gallery"
          className="gooey-nav-item"
          variants={itemVariants}
        >
          Gallery
        </motion.a>
        <motion.a
          href="#/safety"
          className="gooey-nav-item"
          variants={itemVariants}
        >
          Safety
        </motion.a>
        <motion.a
          href="#/faq"
          className="gooey-nav-item"
          variants={itemVariants}
        >
          FAQ
        </motion.a>
        <motion.a
          href="#/contact"
          className="gooey-nav-item"
          variants={itemVariants}
        >
          Contact
        </motion.a>
      </motion.nav>
    </motion.div>
  );
};

export default GooeyNav;
