import React from 'react';

export const HeroText: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Transform Your Business
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        Elevate your business with our innovative AI solutions. 
        Streamline operations, boost engagement, and drive growth.
      </p>
    </>
  );
};