import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCategory } from './ServiceCategory';
import { serviceCategories } from '../../data/services/index';

export const ServiceCatalog: React.FC = () => {
  return (
    <div className="space-y-16">
      {serviceCategories.map((category) => (
        <ServiceCategory key={category.id} category={category} />
      ))}
    </div>
  );
};