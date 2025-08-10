import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../../types/services';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="glass-card cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {service.title}
            {service.isComingSoon && (
              <span className="ml-2 text-sm bg-blue-500 text-white px-2 py-1 rounded-full">
                Coming Soon
              </span>
            )}
          </h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-300" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-300" />
        )}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4"
          >
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Features</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-gray-300">
                    <span className="font-medium">{feature.title}:</span>{' '}
                    {feature.description}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
              <ul className="list-disc list-inside space-y-1">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-300">{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Implementation Process
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                {service.implementation.map((step, index) => (
                  <li key={index} className="text-gray-300">{step}</li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};