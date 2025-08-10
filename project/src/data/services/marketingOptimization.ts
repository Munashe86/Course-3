import { ServiceCategory } from '../../types/services';

export const marketingOptimization: ServiceCategory = {
  id: 'marketing-optimization',
  title: 'Marketing & Optimization',
  description: 'Advanced marketing tools to maximize your business potential',
  services: [
    {
      id: 'lead-nurturing',
      title: 'Lead Nurturing Campaigns',
      description: 'Automated follow-up sequences to convert prospects',
      features: [
        {
          title: 'Multi-channel Campaigns',
          description: 'Integrated email, SMS, and social campaigns'
        },
        {
          title: 'Behavior Tracking',
          description: 'Advanced lead behavior analysis'
        },
        {
          title: 'Dynamic Content',
          description: 'Personalized content delivery'
        }
      ],
      benefits: [
        'Higher conversion rates',
        'Improved lead quality',
        'Automated follow-up'
      ],
      implementation: [
        'Campaign strategy development',
        'Content creation',
        'Automation setup'
      ]
    },
    {
      id: 'funnels-service',
      title: 'Funnels As A Service',
      description: 'Custom-built conversion funnels for specific business goals',
      features: [
        {
          title: 'Custom Design',
          description: 'Professional funnel design and development'
        },
        {
          title: 'A/B Testing',
          description: 'Continuous optimization through testing'
        },
        {
          title: 'Analytics Integration',
          description: 'Comprehensive tracking and reporting'
        }
      ],
      benefits: [
        'Increased conversion rates',
        'Better user experience',
        'Data-driven optimization'
      ],
      implementation: [
        'Funnel strategy planning',
        'Design and development',
        'Testing and optimization'
      ]
    },
    {
      id: 'citation-updates',
      title: 'Citation Update Services',
      description: 'Maintain accurate business listings across platforms',
      features: [
        {
          title: 'Listing Management',
          description: 'Centralized business listing control'
        },
        {
          title: 'Accuracy Monitoring',
          description: 'Automated listing verification'
        },
        {
          title: 'Distribution Network',
          description: 'Wide platform coverage'
        }
      ],
      benefits: [
        'Improved local Search Engine Optimisation',
        'Better online presence',
        'Consistent brand information'
      ],
      implementation: [
        'Initial audit',
        'Citation cleanup',
        'Ongoing monitoring'
      ]
    },
    {
      id: 'reactivation-campaigns',
      title: 'Reactivation + Resell Campaigns',
      description: 'Strategic campaigns to re-engage past customers',
      features: [
        {
          title: 'Customer Analysis',
          description: 'Advanced customer segmentation'
        },
        {
          title: 'Personalized Offers',
          description: 'Targeted reactivation incentives'
        },
        {
          title: 'Multi-channel Outreach',
          description: 'Integrated communication strategy'
        }
      ],
      benefits: [
        'Recovered revenue',
        'Increased customer lifetime value',
        'Better retention rates'
      ],
      implementation: [
        'Customer analysis',
        'Campaign design',
        'Performance tracking'
      ]
    },
    {
      id: 'search-engine-optimization',
      title: 'Search Engine Optimization',
      description: 'Comprehensive search engine optimization services',
      features: [
        {
          title: 'Technical Optimization',
          description: 'Website optimization and performance'
        },
        {
          title: 'Content Strategy',
          description: 'Search engine optimized content planning'
        },
        {
          title: 'Link Building',
          description: 'Quality backlink acquisition'
        }
      ],
      benefits: [
        'Higher search rankings',
        'Increased organic traffic',
        'Better online visibility'
      ],
      implementation: [
        'Initial optimization audit',
        'Strategy development',
        'Ongoing optimization'
      ]
    }
  ]
};