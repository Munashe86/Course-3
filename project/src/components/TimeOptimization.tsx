import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Bell } from 'lucide-react';

export const TimeOptimization: React.FC = () => {
  return (
    <section className="feature-section py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Time-Saving Optimizations
          </h2>
          <p className="text-xl text-gray-300">
            Elevate your team's performance to new heights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Calendar className="w-8 h-8" />,
              title: 'Online Scheduling',
              description: 'Enable clients to instantly request appointments online, enhancing conversion rates.'
            },
            {
              icon: <Bell className="w-8 h-8" />,
              title: 'Appointment Reminders',
              description: 'Automatically send text messages to reduce no-shows and cancellations.'
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: 'Smart Calendar',
              description: 'Optimize your schedule with AI-powered time management.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
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