import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`glow-button ${className}`}
    >
      {children}
    </motion.button>
  );
};