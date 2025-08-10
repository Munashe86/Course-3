import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCategory as ServiceCategoryType } from '../../types/services';
import { ServiceCard } from './ServiceCard';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
}

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{category.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </motion.div>
  );
};