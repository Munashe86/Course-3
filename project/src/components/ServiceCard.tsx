import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';
import { GradientButton } from './ui/GradientButton';

interface ServiceCardProps {
  service: Service;
  index: number;
  inView: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, inView }) => {
  const handleScheduleClick = () => {
    window.open('https://api.aisolutions.ky/widget/form/Efsmtukp6bmk4WosuSNa', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card hover:shadow-xl transition-all duration-300"
    >
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {service.description}
      </p>
      <GradientButton size="sm" onClick={handleScheduleClick}>
        Schedule Demo <ArrowRight className="w-4 h-4 ml-2" />
      </GradientButton>
    </motion.div>
  );
};