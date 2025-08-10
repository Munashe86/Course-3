import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart2, CreditCard, Phone, Users, Globe } from 'lucide-react';

const tools = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Online Reviews',
    description: 'Automate your online reviews with a few simple clicks & respond to reviews in 1 place'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Messaging',
    description: 'Manage your messages with a single inbox for text, Facebook messages, Google messages, and more.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Webchat',
    description: 'Convert more website visitors into leads & sales conversations with Webchat.'
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Payments',
    description: 'Easy text 2 pay client invoicing. Simplify your client invoicing & get paid faster.'
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Missed Call Text Back',
    description: "When you're away, have AI Solutions follow up via text so you never lose another customer"
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: 'CRM',
    description: 'Grow your audience & know where new leads are coming from'
  }
];

export const ToolsGrid: React.FC = () => {
  return (
    <section className="py-20 bg-deep-space">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          All the tools you need to grow in one place.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {tool.title}
              </h3>
              <p className="text-gray-300">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};