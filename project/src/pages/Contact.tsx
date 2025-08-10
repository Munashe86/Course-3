import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ContactInfo } from '../components/contact/ContactInfo';
import { GlobalPresence } from '../components/contact/GlobalPresence';
import { GradientButton } from '../components/ui/GradientButton';

export const Contact: React.FC = () => {
  const handleContactClick = () => {
    window.open('https://api.aisolutions.ky/widget/form/Efsmtukp6bmk4WosuSNa', '_blank');
  };

  return (
    <div className="pt-32 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent 
                         bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
              Let's Transform Your Business Together
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with our team of AI experts to explore how we can help you achieve 
              your business goals
            </p>
            <GradientButton size="lg" onClick={handleContactClick}>
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <ContactInfo />

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Fill out our contact form and one of our AI experts will get back to you within 24 hours.
              </p>
              <GradientButton size="lg" onClick={handleContactClick}>
                Contact Us Now <ArrowRight className="w-5 h-5 ml-2" />
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <GlobalPresence />
    </div>
  );
};