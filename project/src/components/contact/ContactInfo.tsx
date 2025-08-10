import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const contactCards = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Phone',
    info: '+1 (345) 323-6037',
    description: 'Support Available',
    action: 'tel:+13453236037'
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email',
    info: 'info@aisolutions.ky',
    description: 'Quick Response Guaranteed',
    action: 'mailto:info@aisolutions.ky'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Business Hours',
    info: 'Monday - Friday',
    description: '9:00 AM - 6:00 PM EST'
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Global Operations',
    info: 'Worldwide Service',
    description: 'AI Solutions at Your Location'
  }
];

export const ContactInfo: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4 p-3 bg-blue-500/10 rounded-lg inline-block">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              {card.action ? (
                <a 
                  href={card.action}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium block mb-2"
                >
                  {card.info}
                </a>
              ) : (
                <div className="text-blue-400 font-medium mb-2">
                  {card.info}
                </div>
              )}
              <p className="text-gray-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};