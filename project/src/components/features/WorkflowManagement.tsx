import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, CreditCard, BarChart2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const workflowFeatures = [
  {
    title: "Pipeline Management",
    description: "Track leads through every stage of your sales funnel with our built-in Pipeline Management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600",
    icon: <GitBranch className="w-12 h-12" />
  },
  {
    title: "Payment Collection",
    description: "Seamless Stripe integration for collecting payments on websites, funnels, and appointments.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600",
    icon: <CreditCard className="w-12 h-12" />
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive overview of lead status and revenue generation at each phase.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
    icon: <BarChart2 className="w-12 h-12" />
  }
];

export const WorkflowManagement: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Streamlined Workflow Management
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Close more deals with our comprehensive suite of workflow management tools.
          </p>
        </motion.div>

        {workflowFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
              <p className="text-xl text-gray-300">{feature.description}</p>
            </div>
            <div className="lg:w-1/2">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};