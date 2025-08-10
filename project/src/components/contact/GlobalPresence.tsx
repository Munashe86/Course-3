import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export const GlobalPresence: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Global Reach</h2>
              </div>
              <p className="text-xl text-gray-300">
                With our cloud-based infrastructure and AI-powered solutions, we deliver 
                enterprise-grade services to businesses worldwide. Our technology transcends 
                geographical boundaries, ensuring seamless operations across time zones.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
                alt="Global Network"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};