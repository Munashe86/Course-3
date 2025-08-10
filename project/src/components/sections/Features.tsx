import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Lock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI-Powered Automation',
    description: 'Streamline your operations with intelligent automation that learns and adapts.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Real-time Processing',
    description: 'Get instant insights and actions with our lightning-fast processing.'
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols protect your data.'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Smart Analytics',
    description: 'Make data-driven decisions with advanced AI analytics.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to transform your business with AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:border-blue-500/30 transition-all duration-300"
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