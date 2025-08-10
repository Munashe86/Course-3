import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, Shield, Zap, Globe } from 'lucide-react';

const values = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Innovation First',
    description: 'Pushing the boundaries of what\'s possible with AI technology'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Results Driven',
    description: 'Focused on delivering measurable business outcomes'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Client Success',
    description: 'Your success is our success - we\'re invested in your growth'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Ethical AI',
    description: 'Committed to responsible AI development and deployment'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Rapid Innovation',
    description: 'Continuously evolving our solutions to stay ahead'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Impact',
    description: 'Creating positive change across industries worldwide'
  }
];

export const Values: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The principles that drive our innovation and shape our future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4 p-3 bg-blue-500/10 rounded-lg inline-block">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};