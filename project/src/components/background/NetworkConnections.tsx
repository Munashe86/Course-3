import React from 'react';
import { motion } from 'framer-motion';

export const NetworkConnections: React.FC = () => {
  const paths = [
    "M0,50 Q50,0 100,50 T200,50",
    "M0,150 Q100,50 200,150",
    "M50,0 Q100,100 150,0",
  ];

  return (
    <svg className="absolute inset-0 w-full h-full">
      {paths.map((path, index) => (
        <motion.path
          key={index}
          d={path}
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ 
            pathLength: [0, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        />
      ))}
    </svg>
  );
};