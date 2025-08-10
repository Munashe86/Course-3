import React from 'react';
import { motion } from 'framer-motion';
import { TermsContent } from '../components/terms/TermsContent';

export const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
        <div className="prose max-w-none text-gray-800">
          <TermsContent />
        </div>
      </motion.div>
    </div>
  );
};