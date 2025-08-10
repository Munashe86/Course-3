import React from 'react';
import { 
  BarChart2, Users, Globe, Zap, MessageSquare, Layout, BookOpen, Mail,
  Settings, FileDown, Activity, Users2, Database, Workflow, QrCode,
  PenTool, Share2, Target, MousePointer2, FormInput, Calendar, CreditCard
} from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    icon: <Database className="w-8 h-8" />,
    title: 'CRM',
    description: 'All-in-one platform to manage your customer relationships without multiple tools.',
    features: [
      'Unified contact management',
      'Lead tracking and scoring',
      'Customer interaction history',
      'Pipeline management',
      'Custom fields and tags'
    ]
  },
  {
    id: 2,
    icon: <Workflow className="w-8 h-8" />,
    title: 'Marketing Automation',
    description: 'Automate your marketing workflows and nurture leads effectively.',
    features: [
      'Multi-channel automation',
      'Behavior-based triggers',
      'Lead nurturing sequences',
      'A/B testing capabilities',
      'Performance analytics'
    ]
  },
  {
    id: 3,
    icon: <QrCode className="w-8 h-8" />,
    title: 'QR Code Generation & Tracking',
    description: 'Create and track dynamic QR codes for your marketing campaigns.',
    features: [
      'Dynamic QR code generation',
      'Real-time scan analytics',
      'Custom design options',
      'Campaign tracking',
      'Location-based analytics'
    ]
  },
  {
    id: 4,
    icon: <PenTool className="w-8 h-8" />,
    title: 'Email Builder',
    description: 'Create stunning emails with our drag-and-drop builder.',
    features: [
      'Drag-and-drop interface',
      'Mobile-responsive templates',
      'Dynamic content blocks',
      'A/B testing',
      'Analytics dashboard'
    ]
  },
  {
    id: 5,
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social Media Integration',
    description: 'Manage all your social media presence from one dashboard.',
    features: [
      'Multi-platform management',
      'Content scheduling',
      'Analytics tracking',
      'Engagement monitoring',
      'Automated posting'
    ]
  },
  {
    id: 6,
    icon: <Target className="w-8 h-8" />,
    title: 'Digital Marketing Engine',
    description: 'Comprehensive digital marketing tools in one platform.',
    features: [
      'Campaign management',
      'ROI tracking',
      'Multi-channel marketing',
      'Performance analytics',
      'Automated reporting'
    ]
  },
  {
    id: 7,
    icon: <MousePointer2 className="w-8 h-8" />,
    title: 'Website & Funnel Builder',
    description: 'Create stunning websites and high-converting funnels.',
    features: [
      'Drag-and-drop builder',
      'Custom menus',
      'Free website hosting',
      'Mobile responsive',
      'SEO optimization',
      'Conversion tracking'
    ]
  },
  {
    id: 8,
    icon: <FormInput className="w-8 h-8" />,
    title: 'Forms & Surveys',
    description: 'Build interactive forms and surveys to capture leads.',
    features: [
      'Drag-and-drop form builder',
      'Custom survey templates',
      'Conditional logic',
      'Response analytics',
      'Integration capabilities'
    ]
  },
  {
    id: 9,
    icon: <Calendar className="w-8 h-8" />,
    title: 'Appointment Scheduling',
    description: 'Streamline your appointment booking process.',
    features: [
      'Online booking system',
      'Calendar integration',
      'Automated reminders',
      'Custom availability',
      'Group scheduling'
    ]
  },
  {
    id: 10,
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Payment Processing',
    description: 'Collect payments seamlessly within the platform.',
    features: [
      'Secure payment processing',
      'Multiple payment methods',
      'Recurring billing',
      'Invoice generation',
      'Payment analytics'
    ]
  }
];