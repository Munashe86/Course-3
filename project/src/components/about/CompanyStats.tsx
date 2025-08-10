import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations'
  },
  {
    value: '24/7',
    label: 'Global Support',
    description: 'Always-on assistance worldwide'
  },
  {
    value: '15+',
    label: 'Countries Served',
    description: 'Global reach and impact'
  },
  {
    value: '100+',
    label: 'AI Models Deployed',
    description: 'Cutting-edge solutions'
  }
];

export const CompanyStats: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-card relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <div className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent 
                              bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};