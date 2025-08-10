import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { GradientButton } from '../components/ui/GradientButton';
import { AutomationServices } from '../components/services/AutomationServices';

export const Services: React.FC = () => {
  const handleAppointmentClick = () => {
    window.open('https://api.aisolutions.ky/widget/form/Efsmtukp6bmk4WosuSNa', '_blank');
  };

  return (
    <div className="relative pt-24 pb-12">
      <div className="absolute inset-0 bg-deep-space/90 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
            For more information or schedule an appointment, click on the button below
          </p>
          <div className="flex justify-center">
            <GradientButton size="lg" onClick={handleAppointmentClick}>
              Schedule Appointment <ArrowRight className="w-5 h-5 ml-2" />
            </GradientButton>
          </div>
        </motion.div>

        <AutomationServices />
        <ServiceGrid />
      </div>
    </div>
  );
};