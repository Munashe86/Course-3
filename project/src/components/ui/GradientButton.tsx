import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'from-blue-600 via-blue-700 to-purple-600',
    secondary: 'from-purple-600 via-purple-700 to-blue-600'
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 30px rgba(0, 147, 255, 0.5)'
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden rounded-full font-semibold text-white
        bg-gradient-to-r ${variantClasses[variant]} ${sizeClasses[size]}
        transition-all duration-300 transform
        shadow-lg hover:shadow-xl
        flex items-center justify-center gap-2
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-white/0 before:via-white/20 before:to-white/0
        before:translate-x-[-200%] hover:before:translate-x-[200%]
        before:transition-transform before:duration-1000
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};