import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="glass-card text-center"
    >
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50" />
        <img
          src={image}
          alt={name}
          className="relative w-full h-full object-cover rounded-full"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-1">
        {name}
      </h3>
      <div className="text-blue-400 mb-2">{role}</div>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex justify-center gap-4">
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};