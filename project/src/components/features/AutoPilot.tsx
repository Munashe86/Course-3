import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';
import { GradientButton } from '../ui/GradientButton';

export const AutoPilot: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-white">
              ACQUIRE CUSTOMERS ON AUTO-PILOT
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get Reviews, Convert Leads, Message Customers, Get Paid - All In One Place!
            </p>
            <GradientButton size="lg">
              GET STARTED <ArrowRight className="w-5 h-5" />
            </GradientButton>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=600"
              alt="Team using AI software"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};