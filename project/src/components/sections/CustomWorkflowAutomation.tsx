import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Construction as Connection, Bell, Database, Zap, Scale, Laptop, CheckCircle } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';

const features = [
  {
    icon: <Connection className="w-8 h-8" />,
    title: 'Seamless Integration',
    description: 'Connect your existing tools and platforms effortlessly to create a unified ecosystem.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Automated Data Processing',
    description: 'Automate data entry, analysis, and reporting tasks for faster decision-making.'
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: 'Custom Alerts & Notifications',
    description: 'Stay informed with real-time notifications for important events and metrics.'
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Task Automation',
    description: 'Streamline repetitive tasks from scheduling to invoicing with smart automation.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AI-Powered Decision Making',
    description: 'Leverage intelligent automation for improved customer experiences and strategies.'
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: 'Scalable Solutions',
    description: 'Our automations grow with your business, from 10 to 10,000 transactions.'
  }
];

const benefits = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: 'Tailored Solutions',
    description: 'Custom-built automations that fit your unique business model and goals.'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Easy to Use',
    description: 'User-friendly interfaces that anyone on your team can manage without technical expertise.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Increase Efficiency',
    description: 'Focus on high-impact work while automation handles routine tasks.'
  }
];

export const CustomWorkflowAutomation: React.FC = () => {
  const handleScheduleClick = () => {
    window.open('https://api.aisolutions.ky/widget/form/Efsmtukp6bmk4WosuSNa', '_blank');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Custom Automations to Streamline Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of custom automations tailored to your unique business needs. Our team specializes in creating intelligent workflows that enhance efficiency, reduce manual tasks, and allow you to focus on what matters most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Us?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <GradientButton size="lg" onClick={handleScheduleClick}>
              Start Automating Today
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};