import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { GradientButton } from '../ui/GradientButton';

const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Invalid email address'),
  phone: z.string()
    .optional()
    .refine(val => !val || /^\+?[\d\s-]+$/.test(val), {
      message: 'Invalid phone number format'
    }),
  company: z.string()
    .optional(),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', data);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone (optional)
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="+1 (234) 567-8900"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company (optional)
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                           text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-center">
                <GradientButton
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="min-w-[200px]"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </GradientButton>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};