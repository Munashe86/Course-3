import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  withGlow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withGlow = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-full font-semibold transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-gradient-primary text-white',
    secondary: 'bg-accent-500 text-white',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const glowStyles = withGlow ? 'hover:shadow-glow' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${glowStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};