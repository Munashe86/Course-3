import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { GradientButton } from '../components/ui/GradientButton';
import { services } from '../components/services/ServiceGrid';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Service not found</h2>
          <Link 
            to="/services" 
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    'Automated workflow integration',
    'Real-time analytics dashboard',
    'Custom reporting tools',
    'Team collaboration features',
    'API access for custom integration',
    'Enterprise-grade security'
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve customer satisfaction scores',
    'Increase team productivity',
    'Scale operations efficiently',
    'Make data-driven decisions'
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link 
          to="/services" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card"
        >
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-400">
                  {service.icon}
                </div>
                <h1 className="text-3xl font-bold text-white">
                  {service.title}
                </h1>
              </div>

              <p className="text-xl text-gray-300 mb-8">
                {service.description}
              </p>

              <GradientButton size="lg">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </GradientButton>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <div className="mt-1">
                        <Check className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Benefits
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <div className="mt-1">
                        <Check className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card bg-blue-500/10">
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to transform your business?
                </h3>
                <p className="text-gray-300 mb-4">
                  Schedule a demo to see how {service.title} can help your business grow.
                </p>
                <GradientButton variant="secondary">
                  Schedule Demo <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};