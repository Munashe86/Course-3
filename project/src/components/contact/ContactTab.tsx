import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Mail, X } from 'lucide-react';

export const ContactTab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 glass-card"
          >
            <div className="flex flex-col gap-4">
              <a 
                href="tel:+13453236037"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 (345) 323-6037
              </a>
              <a 
                href="mailto:info@aisolutions.ky"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@aisolutions.ky
              </a>
              <Link 
                to="/contact"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg
                   flex items-center gap-2 hover:from-blue-700 hover:to-purple-700
                   transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            Close
          </>
        ) : (
          <>
            <MessageSquare className="w-5 h-5" />
            Contact Us
          </>
        )}
      </motion.button>
    </div>
  );
};