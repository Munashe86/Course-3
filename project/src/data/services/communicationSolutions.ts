import { ServiceCategory } from '../../types/services';

export const communicationSolutions: ServiceCategory = {
  id: 'communication-solutions',
  title: 'Communication Solutions',
  description: 'Advanced tools for seamless client communication',
  services: [
    {
      id: 'ai-voice-inbound',
      title: 'AI Voice Inbound',
      description: 'Advanced virtual receptionist handling incoming calls with natural language processing',
      features: [
        {
          title: 'Natural Language Processing',
          description: 'Advanced AI understanding of caller intent'
        },
        {
          title: 'Custom Responses',
          description: 'Tailored responses based on business rules'
        },
        {
          title: 'Call Routing',
          description: 'Intelligent routing to appropriate departments'
        }
      ],
      benefits: [
        '24/7 call handling',
        'Reduced operational costs',
        'Improved customer experience'
      ],
      implementation: [
        'Voice model training',
        'Business rule setup',
        'Integration with phone system'
      ]
    },
    {
      id: 'ai-voice-outbound',
      title: 'AI Voice Outbound',
      description: 'Automated outreach calls using conversational AI',
      isComingSoon: true,
      features: [
        {
          title: 'Conversational AI',
          description: 'Natural dialogue flow with customers'
        },
        {
          title: 'Campaign Management',
          description: 'Scheduled outreach campaigns'
        },
        {
          title: 'Response Analysis',
          description: 'AI-powered call outcome analysis'
        }
      ],
      benefits: [
        'Scalable outreach',
        'Consistent messaging',
        'Detailed analytics'
      ],
      implementation: [
        'AI voice training',
        'Campaign setup',
        'Performance monitoring'
      ]
    }
  ]
};