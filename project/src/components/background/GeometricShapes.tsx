import React from 'react';
import { motion } from 'framer-motion';

const shapes = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  size: Math.random() * 200 + 100,
  initialPosition: {
    x: Math.random() * 100,
    y: Math.random() * 100,
  },
}));

export const GeometricShapes: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-br from-primary-500/10 to-accent-500/10"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.initialPosition.x}%`,
            top: `${shape.initialPosition.y}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + shape.id * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};