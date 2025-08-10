import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, LineChart, Zap } from 'lucide-react';

const features = [
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Unified Contact Management',
    description: 'Centralize all your customer data in one powerful platform'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Lead Tracking',
    description: 'Track and score leads through your entire sales pipeline'
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Analytics Dashboard',
    description: 'Get real-time insights into your customer relationships'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Automation Tools',
    description: 'Automate repetitive tasks and focus on growing your business'
  }
];

export const CRMFeatures: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            All-in-One CRM Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Manage your customer relationships efficiently with our powerful CRM tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};