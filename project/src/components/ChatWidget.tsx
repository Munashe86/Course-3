import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg
                   hover:bg-blue-700 transition-colors duration-300"
        style={{ zIndex: 1000 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
            style={{ zIndex: 1000 }}
          >
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900 dark:text-white">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 
                         dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 p-4 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg max-w-[80%]">
                  <p className="text-gray-800 dark:text-gray-200">
                    Hi there! How can we help you today?
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2
                           focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600
                           dark:text-white"
                />
                <button
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
                           transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};