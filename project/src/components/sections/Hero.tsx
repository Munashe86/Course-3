import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';

export const Hero: React.FC = () => {
  const handleScheduleClick = () => {
    window.open('https://api.aisolutions.ky/widget/form/Efsmtukp6bmk4WosuSNa', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8 pt-20"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
              Transform Your Business with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                AI Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Harness the power of artificial intelligence to automate, optimize, 
              and scale your business operations.
            </p>

            <div>
              <GradientButton size="lg" onClick={handleScheduleClick}>
                Schedule an Appointment <ArrowRight className="w-5 h-5 ml-2" />
              </GradientButton>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Brain className="w-5 h-5" />, label: 'Smart Automation', desc: 'Streamline your workflows' },
                { icon: <Zap className="w-5 h-5" />, label: 'Real-time Analytics', desc: 'Data-driven insights' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    {item.icon}
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600"
                alt="AI Dashboard"
                className="relative rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};