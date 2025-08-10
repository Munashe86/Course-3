import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../types/services';

interface ServicePreviewProps {
  service: Service;
  index: number;
}

export const ServicePreview: React.FC<ServicePreviewProps> = ({ service, index }) => {
  const handleLearnMore = () => {
    window.open('https://api.aisolutions.ky/widget/form/Efsmtukp6bmk4WosuSNa', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "50px", once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card group cursor-pointer h-full will-change-transform"
      onClick={handleLearnMore}
    >
      <h3 className="text-xl font-semibold text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-300 mb-4">
        {service.description}
      </p>
      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};