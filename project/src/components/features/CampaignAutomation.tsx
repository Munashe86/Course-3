import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Bot, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const automationFeatures = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Multi-Channel Campaigns",
    description: "Connect with leads through Phone, Voicemail, SMS/MMS, Emails, and Facebook Messenger."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Automated Booking",
    description: "Book leads and prospects automatically without any manual intervention."
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI-Powered Conversations",
    description: "Leverage AI and Machine Learning to manage conversations intelligently."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Custom Campaign Builder",
    description: "Full customization of messaging and campaign flows."
  }
];

export const CampaignAutomation: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Customize Your Follow-up Campaigns
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our Multi-channel follow-up campaigns allow you to automate engaging follow-ups 
            and capture responses from your leads.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card hover:transform hover:-translate-y-1"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};