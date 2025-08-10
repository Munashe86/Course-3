import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    content: 'The AI automation tools have transformed our customer service. We\'ve seen a 50% increase in response rates and significant time savings.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    content: 'Implementing this AI solution was the best decision we made. Our team is more productive, and our customers are happier than ever.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    content: 'The analytics and insights provided have helped us make data-driven decisions that significantly improved our ROI.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
  },
];

export const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="feature-section py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-100">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};