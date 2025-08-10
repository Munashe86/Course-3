import { ServiceCategory } from '../../types/services';

export const businessGrowthTools: ServiceCategory = {
  id: 'business-growth-tools',
  title: 'Business Growth Tools',
  description: 'Essential tools to scale your business operations',
  services: [
    {
      id: 'custom-automation',
      title: 'Custom Workflow Automation',
      description: 'Intelligent automation solutions tailored to your unique business needs',
      features: [
        {
          title: 'Seamless Integration',
          description: 'Connect your existing tools and platforms into a unified ecosystem'
        },
        {
          title: 'Task Automation',
          description: 'Streamline repetitive tasks from scheduling to invoicing'
        },
        {
          title: 'AI-Powered Workflows',
          description: 'Intelligent decision-making processes for optimized operations'
        }
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced manual workload',
        'Improved accuracy and consistency',
        'Real-time monitoring and alerts',
        'Scalable automation solutions'
      ],
      implementation: [
        'Business process analysis',
        'Custom workflow design',
        'Integration setup',
        'Testing and optimization',
        'Team training and support'
      ]
    },
    {
      id: 'crm',
      title: 'Customer Relationship Management',
      description: 'Comprehensive CRM solution to manage and grow your customer relationships',
      features: [
        {
          title: 'Contact Management',
          description: 'Centralized database for all customer interactions'
        },
        {
          title: 'Pipeline Management',
          description: 'Visual sales pipeline with drag-and-drop interface'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Detailed insights and customizable reports'
        }
      ],
      benefits: [
        'Improved customer retention',
        'Increased sales efficiency',
        'Better team collaboration',
        'Data-driven decisions'
      ],
      implementation: [
        'Initial setup and configuration',
        'Data import and organization',
        'Team training and onboarding',
        'Integration with existing tools'
      ]
    },
    {
      id: 'qr-code-system',
      title: 'QR Code Generation & Analytics',
      description: 'Create, manage, and track dynamic QR codes for marketing campaigns',
      features: [
        {
          title: 'Dynamic QR Codes',
          description: 'Create editable QR codes that can be updated without reprinting'
        },
        {
          title: 'Advanced Analytics',
          description: 'Track scans, locations, devices, and user behavior'
        },
        {
          title: 'Customization',
          description: 'Branded designs with custom colors and logos'
        }
      ],
      benefits: [
        'Real-time performance tracking',
        'Improved campaign ROI measurement',
        'Enhanced customer engagement data'
      ],
      implementation: [
        'QR code design setup',
        'Analytics dashboard configuration',
        'Campaign tracking integration'
      ]
    },
    {
      id: 'email-builder',
      title: 'Email Builder',
      description: 'Create stunning emails with our drag-and-drop builder',
      features: [
        {
          title: 'Drag-and-Drop Interface',
          description: 'Intuitive email design without coding'
        },
        {
          title: 'Template Library',
          description: 'Pre-built templates for quick starts'
        },
        {
          title: 'Analytics Integration',
          description: 'Track email performance and engagement'
        }
      ],
      benefits: [
        'Professional email designs',
        'Time-saving templates',
        'Mobile-responsive layouts'
      ],
      implementation: [
        'Template setup',
        'Brand asset integration',
        'Team training'
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media Integration',
      description: 'Manage all your social media presence from one dashboard',
      features: [
        {
          title: 'Unified Dashboard',
          description: 'Manage multiple platforms in one place'
        },
        {
          title: 'Content Scheduling',
          description: 'Plan and schedule posts ahead of time'
        },
        {
          title: 'Analytics',
          description: 'Track engagement across platforms'
        }
      ],
      benefits: [
        'Streamlined social management',
        'Consistent brand presence',
        'Time-saving automation'
      ],
      implementation: [
        'Platform connection setup',
        'Content calendar creation',
        'Analytics configuration'
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Engine',
      description: 'Comprehensive digital marketing tools in one platform',
      features: [
        {
          title: 'Campaign Management',
          description: 'Create and manage multi-channel campaigns'
        },
        {
          title: 'ROI Tracking',
          description: 'Monitor campaign performance and ROI'
        },
        {
          title: 'Automation',
          description: 'Automate marketing tasks and workflows'
        }
      ],
      benefits: [
        'Increased marketing efficiency',
        'Better campaign performance',
        'Data-driven optimization'
      ],
      implementation: [
        'Strategy development',
        'Campaign setup',
        'Performance monitoring'
      ]
    }
  ]
};