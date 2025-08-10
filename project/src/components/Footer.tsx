import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface/50 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link to="/">
              <motion.img 
                src="https://imgur.com/9o9t0A3.png" 
                alt="AI Solutions Logo" 
                className="h-16 w-auto transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
              Services
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
              Terms
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.facebook.com/share/p/1BEDFFdx67/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/aisolutions_ky/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};