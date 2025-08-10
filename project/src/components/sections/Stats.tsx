import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'AI Support' },
  { value: '500+', label: 'Active Users' },
  { value: '50x', label: 'Faster Processing' }
];

export const Stats: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};