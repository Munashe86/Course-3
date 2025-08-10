import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: "Capture Leads",
    description: "Capture leads through landing pages, surveys, forms, calendars, and inbound phone systems.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&h=600",
  },
  {
    title: "Nurture Relationships",
    description: "Automatically engage leads via voicemail, calls, SMS, emails, and Facebook Messenger.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=600",
  },
  {
    title: "Website & Funnel Builder",
    description: "Create full-featured websites and high-converting funnels with our intuitive builder.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600",
  },
  {
    title: "All-in-One Platform",
    description: "Everything you need in one place - no more piecing together multiple platforms.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=600",
  }
];

export const FeatureShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-12 mb-32`}
          >
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {feature.title}
              </h2>
              <p className="text-xl text-gray-300">
                {feature.description}
              </p>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg shadow-2xl hover:shadow-glow transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};