import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2024 Q3',
    title: 'Company Launch',
    description: 'AI Solutions founded with initial suite of automation tools and AI services'
  },
  {
    year: '2024 Q4',
    title: 'Service Expansion',
    description: 'Added 18 new services to AI Solutions catalog'
  },
  {
    year: '2025 Q1',
    title: 'Enterprise Solutions',
    description: 'Launch of enterprise-grade AI platform and advanced ML models for large businesses'
  },
  {
    year: '2025 Q2',
    title: 'Global Partnership Program',
    description: 'Establishment of strategic partnerships and certified solution provider network'
  },
  {
    year: '2025 Q3',
    title: 'AI Innovation Hub',
    description: 'Opening of AI research center and developer ecosystem platform'
  },
  {
    year: '2025 Q4',
    title: 'Industry Expansion',
    description: 'Launch of specialized AI solutions for healthcare, finance, and manufacturing sectors'
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Journey & Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From groundbreaking launches to future innovations
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-500/20" />
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
              >
                <div className={`w-1/2 glass-card relative ${
                  milestone.year.startsWith('2025') ? 'border-2 border-blue-500/30' : ''
                }`}>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full 
                                 shadow-glow z-10 bg-blue-500"
                       style={{ [index % 2 === 0 ? 'right' : 'left']: '-2rem' }} />
                  <div className="text-2xl font-bold mb-2 text-blue-400">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};