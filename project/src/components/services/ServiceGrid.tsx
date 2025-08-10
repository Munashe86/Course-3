import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, ListChecks, Phone, PhoneCall, MessageSquare, PhoneMissed,
  Inbox, LineChart, Star, CreditCard, Mail, Calendar, Bell,
  Workflow, Building, ArrowUpCircle, BarChart2, Search
} from 'lucide-react';
import { ServiceGridItem } from './ServiceGridItem';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Website + Hosting',
    description: 'Professional website hosting with 24/7 monitoring and support',
    icon: <Globe className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 2,
    title: 'List Building',
    description: 'Convert existing traffic into qualified leads',
    icon: <ListChecks className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 3,
    title: 'AI Voice Inbound',
    description: 'Intelligent virtual receptionist handling incoming calls',
    icon: <Phone className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 4,
    title: 'AI Voice Outbound',
    description: 'Automated outreach calls with conversational AI (Available in specific regions)',
    icon: <PhoneCall className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 5,
    title: 'AI Chat',
    description: 'Smart chatbot for instant customer support',
    icon: <MessageSquare className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 6,
    title: 'Missed Call Text-Back',
    description: 'Automatic follow-up texts for missed calls',
    icon: <PhoneMissed className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 7,
    title: 'Universal Inbox',
    description: 'Centralized messaging platform for all communications',
    icon: <Inbox className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 8,
    title: 'Call Tracking + Reporting',
    description: 'Comprehensive call analytics and performance metrics',
    icon: <LineChart className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 9,
    title: 'Review Generation',
    description: 'Automated system for collecting customer reviews',
    icon: <Star className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 10,
    title: 'Payment + Invoicing Systems',
    description: 'Streamlined payment processing and invoicing',
    icon: <CreditCard className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 11,
    title: 'SMS + Email',
    description: 'Integrated messaging across multiple channels',
    icon: <Mail className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 12,
    title: 'Hosted Calendar',
    description: 'Professional scheduling system',
    icon: <Calendar className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 13,
    title: 'Appointment Reminders',
    description: 'Automated appointment notifications',
    icon: <Bell className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 14,
    title: 'Lead Nurturing Campaigns',
    description: 'Automated follow-up sequences to convert prospects',
    icon: <Workflow className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 15,
    title: 'Funnels-as-a-Service',
    description: 'Custom-built conversion funnels',
    icon: <Building className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 16,
    title: 'Citation Update Services',
    description: 'Maintain accurate business listings across platforms',
    icon: <ArrowUpCircle className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 17,
    title: 'Reactivation + Resell Campaigns',
    description: 'Re-engage past customers with targeted campaigns',
    icon: <BarChart2 className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&h=500'
  },
  {
    id: 18,
    title: 'Search Engine Optimization',
    description: 'Improve your search engine visibility',
    icon: <Search className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&h=500'
  }
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceGridItem
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
};

export { ServiceGrid, services };