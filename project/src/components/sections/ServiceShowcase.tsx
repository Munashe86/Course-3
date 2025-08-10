import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';
import { ServicePreview } from '../services/ServicePreview';
import { serviceCategories } from '../../data/services';

export const ServiceShowcase: React.FC = () => {
  const navigate = useNavigate();
  const featuredServices = serviceCategories
    .flatMap(category => category.services.slice(0, 2))
    .slice(0, 6);

  const handleViewAllServices = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions to transform every aspect of your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <ServicePreview 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        <div className="text-center">
          <GradientButton size="lg" onClick={handleViewAllServices}>
            View All Services <ArrowRight className="w-5 h-5 ml-2" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
};