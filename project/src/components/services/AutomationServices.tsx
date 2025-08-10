import React from 'react';
import { motion } from 'framer-motion';
import { Construction as Connection, Database, Bell, Workflow, Zap, Scale, Globe, Shield, ArrowRight } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';

const automationServices = [
  {
    icon: <Connection className="w-8 h-8" />,
    title: 'Seamless Integration',
    description: 'Connect your existing tools, software, and platforms effortlessly to create a unified ecosystem. From CRM systems to social media platforms, we ensure that everything works together smoothly.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Automated Data Processing',
    description: 'Automate data entry, data analysis, and reporting tasks, ensuring that your team can make data-driven decisions faster with zero manual intervention.'
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: 'Custom Alerts & Notifications',
    description: 'Stay on top of important events with personalized notifications via email, text, or other messaging channels. Get notified in real-time when a key metric, process, or task needs attention.'
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Task Automation',
    description: 'Streamline repetitive tasks by automating workflows that manage everything from scheduling meetings to sending out invoices. We help you save time and reduce the chances of human error.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AI-Powered Decision Making',
    description: 'Leverage intelligent decision-making processes with AI-powered automations that improve customer experiences and optimize business strategies in real time.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Cross-Platform Functionality',
    description: 'We provide robust solutions that ensure your automations work across different systems and platforms, breaking down silos and improving collaboration.'
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: 'Scalable Solutions',
    description: 'As your business grows, our automations scale with you. Whether you\'re handling 10 or 10,000 transactions, we ensure your workflows can grow without missing a beat.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Workflow Optimization',
    description: 'Maximize productivity by designing automated workflows that support your business operations, from lead nurturing to customer support, marketing campaigns, and beyond.'
  }
];

export const AutomationServices: React.FC = () => {
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
            Our Automation Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive suite of automation services. 
            Each solution is tailored to meet your specific needs and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {automationServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <GradientButton size="lg" onClick={handleScheduleClick}>
            Start Automating Today <ArrowRight className="w-5 h-5 ml-2" />
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
};