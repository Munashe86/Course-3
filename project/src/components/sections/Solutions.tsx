import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart2, Users, Globe } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';

const solutions = [
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: 'AI Chat Automation',
    description: 'Intelligent chatbots that handle customer inquiries 24/7'
  },
  {
    icon: <BarChart2 className="w-12 h-12" />,
    title: 'Smart Analytics',
    description: 'Real-time insights and predictive analysis for better decisions'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Team Collaboration',
    description: 'Unified platform for seamless team communication'
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Global Reach',
    description: 'Multi-language support and international scalability'
  }
];

export const Solutions: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Complete Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-300">
              Our comprehensive suite of AI-powered tools helps you streamline operations,
              boost efficiency, and drive growth.
            </p>
            <GradientButton size="lg">
              Explore Solutions
            </GradientButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-300">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};