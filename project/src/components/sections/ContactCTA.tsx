import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '../ui/GradientButton';
import { MessageSquare } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const handleScheduleClick = () => {
    window.open('https://api.aisolutions.ky/widget/form/Efsmtukp6bmk4WosuSNa', '_blank');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card text-center py-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already leveraging our AI solutions for growth.
          </p>
          <GradientButton size="lg" onClick={handleScheduleClick}>
            <MessageSquare className="w-5 h-5" />
            Schedule a Demo
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
};