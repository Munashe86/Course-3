import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { contactFormSchema } from '../utils/validation';
import { GradientButton } from './ui/GradientButton';

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                {...register('name')}
                type="text"
                className="mt-1 block w-full rounded-lg bg-surface border-gray-700 text-white
                         focus:border-primary-500 focus:ring-primary-500"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="mt-1 block w-full rounded-lg bg-surface border-gray-700 text-white
                         focus:border-primary-500 focus:ring-primary-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone (optional)
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="mt-1 block w-full rounded-lg bg-surface border-gray-700 text-white
                         focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="mt-1 block w-full rounded-lg bg-surface border-gray-700 text-white
                         focus:border-primary-500 focus:ring-primary-500"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            <GradientButton
              type="submit"
              size="lg"
              className="w-full"
            >
              <Send className="w-5 h-5" />
              Send Message
            </GradientButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
};