import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, ListChecks, Phone, PhoneCall, MessageSquare, PhoneMissed,
  Inbox, LineChart, Star, CreditCard, Mail, Calendar, Bell,
  Workflow, Building, ArrowUpCircle, BarChart2, Search
} from 'lucide-react';
import { FeatureCard } from '../features/FeatureCard';

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Website + Hosting',
    description: 'Professional website hosting with 24/7 monitoring and support',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <ListChecks className="w-6 h-6" />,
    title: 'List Building',
    description: 'Convert existing traffic into qualified leads',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'AI Voice Inbound',
    description: 'Intelligent virtual receptionist handling incoming calls',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: 'AI Voice Outbound',
    description: 'Automated outreach calls with conversational AI (Available in specific regions)',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'AI Chat',
    description: 'Smart chatbot for instant customer support',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <PhoneMissed className="w-6 h-6" />,
    title: 'Missed Call Text-Back',
    description: 'Automatic follow-up texts for missed calls',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Inbox className="w-6 h-6" />,
    title: 'Universal Inbox',
    description: 'Centralized messaging platform for all communications',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Call Tracking + Reporting',
    description: 'Comprehensive call analytics and performance metrics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Review Generation',
    description: 'Automated system for collecting customer reviews',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Payment + Invoicing Systems',
    description: 'Streamlined payment processing and invoicing',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'SMS + Email',
    description: 'Integrated messaging across multiple channels',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Hosted Calendar',
    description: 'Professional scheduling system',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Appointment Reminders',
    description: 'Automated appointment notifications',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Lead Nurturing Campaigns',
    description: 'Automated follow-up sequences to convert prospects',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: 'Funnels-as-a-Service',
    description: 'Custom-built conversion funnels',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <ArrowUpCircle className="w-6 h-6" />,
    title: 'Citation Update Services',
    description: 'Maintain accurate business listings across platforms',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Reactivation + Resell Campaigns',
    description: 'Re-engage past customers with targeted campaigns',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&h=500'
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Search Engine Optimization',
    description: 'Improve your search engine visibility',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&h=500'
  }
];

export const AIUseCases: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "50px", once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive suite of solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};