import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-commerce Revolution',
    description: '300% increase in sales through AI-powered personalization',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&h=400'
  },
  {
    title: 'Customer Service Transformation',
    description: 'Response time reduced by 80% with AI automation',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&h=400'
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Success Stories
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};