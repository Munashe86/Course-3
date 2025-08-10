import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceGridItemProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
  };
  index: number;
}

export const ServiceGridItem: React.FC<ServiceGridItemProps> = ({ service, index }) => {
  const handleLearnMore = () => {
    window.open('https://api.aisolutions.ky/widget/form/Efsmtukp6bmk4WosuSNa', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "50px", once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card group cursor-pointer overflow-hidden will-change-transform"
      onClick={handleLearnMore}
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} in action`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-blue-400">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">
            {service.title}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-4">
          {service.description}
        </p>
        
        <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
          Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};