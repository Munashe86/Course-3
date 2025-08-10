import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Bot, BarChart2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Chat Automation',
    description: 'Get potential customers quickly and turn them into sales.',
    path: '/services/chat-automation'
  },
  {
    id: 2,
    icon: <Bot className="w-8 h-8" />,
    title: '24/7 AI Assistant',
    description: 'Automate client communications to help you schedule appointments.',
    path: '/services/ai-assistant'
  },
  {
    id: 3,
    icon: <BarChart2 className="w-8 h-8" />,
    title: 'Real-Time Analytics',
    description: 'Track ROI and monitor campaign performance in real-time.',
    path: '/services/analytics'
  },
  {
    id: 4,
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Solutions',
    description: 'Connect with customers worldwide through automated translations.',
    path: '/services/global-solutions'
  }
];

export const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-feature relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your business with our cutting-edge AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link key={feature.id} to={feature.path}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card hover:shadow-xl transition-all duration-300 transform
                         hover:-translate-y-1"
              >
                <div className="text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};