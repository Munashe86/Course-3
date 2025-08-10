import React from 'react';
import { motion } from 'framer-motion';
import { AIBackground } from '../components/background/AIBackground';
import { Hero } from '../components/sections/Hero';
import { ServiceShowcase } from '../components/sections/ServiceShowcase';
import { CRMFeatures } from '../components/sections/CRMFeatures';
import { AIUseCases } from '../components/sections/AIUseCases';
import { CustomWorkflowAutomation } from '../components/sections/CustomWorkflowAutomation';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <AIBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Hero />
        <CustomWorkflowAutomation />
        <CRMFeatures />
        <AIUseCases />
        <ServiceShowcase />
      </motion.div>
    </div>
  );
};