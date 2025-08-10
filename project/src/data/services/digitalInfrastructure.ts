import { ServiceCategory } from '../../types/services';

export const digitalInfrastructure: ServiceCategory = {
  id: 'digital-infrastructure',
  title: 'Digital Infrastructure',
  description: 'Foundation tools for your digital presence',
  services: [
    {
      id: 'website-hosting',
      title: 'Website Hosting',
      description: 'Secure, reliable hosting solutions with 24/7 support and performance monitoring',
      features: [
        {
          title: '24/7 Monitoring',
          description: 'Real-time server health and performance monitoring'
        },
        {
          title: 'Security',
          description: 'Enterprise-grade firewall and SSL protection'
        },
        {
          title: 'Backup System',
          description: 'Automated daily backups with instant restoration'
        }
      ],
      benefits: [
        'Guaranteed 99.9% uptime',
        'Automatic scaling during traffic spikes',
        'Dedicated support team'
      ],
      implementation: [
        'Initial server configuration',
        'Domain and DNS setup',
        'Security certificate installation'
      ]
    },
    {
      id: 'universal-inbox',
      title: 'Universal Inbox',
      description: 'Centralized platform for managing all client communications',
      features: [
        {
          title: 'Unified Communications',
          description: 'All messages in one organized dashboard'
        },
        {
          title: 'Smart Filtering',
          description: 'AI-powered message categorization'
        },
        {
          title: 'Team Collaboration',
          description: 'Shared inbox with role-based access'
        }
      ],
      benefits: [
        'Reduced response time',
        'Improved team coordination',
        'Better client satisfaction'
      ],
      implementation: [
        'Account setup and configuration',
        'Team training session',
        'Integration with existing tools'
      ]
    },
    {
      id: 'hosted-calendar',
      title: 'Hosted Calendar',
      description: 'Professional scheduling system with automated booking capabilities',
      features: [
        {
          title: 'Smart Scheduling',
          description: 'AI-powered appointment optimization'
        },
        {
          title: 'Integration',
          description: 'Works with popular calendar platforms'
        },
        {
          title: 'Customization',
          description: 'Branded booking pages and notifications'
        }
      ],
      benefits: [
        'Reduced scheduling conflicts',
        'Automated reminder system',
        'Professional booking experience'
      ],
      implementation: [
        'Calendar setup and customization',
        'Integration with existing systems',
        'Staff training and onboarding'
      ]
    }
  ]
};