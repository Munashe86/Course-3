import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

export const ReputationManagement: React.FC = () => {
  return (
    <section className="feature-section py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-100">
                Reputation Management
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Streamline the process of getting more reviews from your clients. Five-star reviews boost confidence and attract more new clients!
            </p>
            <ul className="space-y-4">
              {[
                'Automatic Review Requests',
                'SMS, Email, & WhatsApp Enabled',
                'Smart Review Collection',
                'Review Monitoring & Analytics',
                'Response Templates & Management'
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <Star className="w-5 h-5 text-yellow-400" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="glass-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/50" />
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300">5.0 average rating</span>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Outstanding service! The team was professional and efficient. Highly recommend!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};