import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  image,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "50px", once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card overflow-hidden will-change-transform"
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={`${title} in action`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};