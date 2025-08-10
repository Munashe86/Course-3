import React from 'react';
import { motion } from 'framer-motion';

export const Mission: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                <p className="text-gray-300 text-lg">
                  Founded in 2024, AI Solutions is at the forefront of the AI revolution, 
                  empowering businesses to thrive in the digital age through intelligent, 
                  automated solutions that streamline operations, enhance customer experiences, 
                  and drive sustainable growth.
                </p>
                <p className="text-gray-300 text-lg">
                  Our team of world-class AI researchers and engineers is dedicated to pushing 
                  the boundaries of what's possible, developing cutting-edge solutions that 
                  solve real business challenges and create measurable value.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
                alt="Innovation visualization"
                className="relative rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};