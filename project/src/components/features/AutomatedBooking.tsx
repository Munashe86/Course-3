import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, BellRing, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const bookingFeatures = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Smart Calendar Integration",
    description: "Automatically sync with your calendar to show real-time availability"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Booking",
    description: "Let clients book appointments around the clock without manual intervention"
  },
  {
    icon: <BellRing className="w-8 h-8" />,
    title: "Automated Reminders",
    description: "Reduce no-shows with automated SMS and email reminders"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Confirmation",
    description: "Automatic confirmation messages and calendar invites sent instantly"
  }
];

export const AutomatedBooking: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Fully Automated Booking System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your scheduling process with our intelligent booking system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bookingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card hover:transform hover:-translate-y-1"
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 glass-card"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-6">
                AI-Powered Scheduling Assistant
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Intelligent time slot suggestions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Automatic timezone detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Smart conflict resolution
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Multi-participant scheduling
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=600"
                alt="AI Scheduling Assistant"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};