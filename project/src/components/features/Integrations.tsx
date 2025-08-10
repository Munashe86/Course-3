import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'Clio', logo: 'path-to-clio-logo' },
  { name: 'Google', logo: 'path-to-google-logo' },
  { name: 'Facebook Messenger', logo: 'path-to-messenger-logo' },
  { name: 'Zapier', logo: 'path-to-zapier-logo' },
  { name: 'QuickBooks', logo: 'path-to-quickbooks-logo' }
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Easily <span className="text-blue-400">Integrates</span> With Leading Apps
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-40 h-20 bg-white/10 rounded-lg flex items-center justify-center"
            >
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                className="max-w-[120px] max-h-[40px] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};