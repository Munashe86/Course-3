import React from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from '../../hooks/useWindowSize';

const generateShapes = (width: number, height: number) => {
  const shapes = [];
  const count = Math.floor((width * height) / 60000); // More shapes for denser background

  for (let i = 0; i < count; i++) {
    const type = Math.random() > 0.6 ? 'circle' : Math.random() > 0.3 ? 'square' : 'triangle';
    shapes.push({
      id: i,
      type,
      size: Math.random() * 400 + 200, // Larger shapes
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      duration: Math.random() * 20 + 25, // Slower animations
      delay: i * 0.2,
      opacity: Math.random() * 0.15 + 0.05, // More subtle opacity
    });
  }
  return shapes;
};

export const BackgroundShapes: React.FC = () => {
  const { width, height } = useWindowSize();
  const shapes = React.useMemo(() => generateShapes(width, height), [width, height]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            shape.type === 'circle' 
              ? 'rounded-full' 
              : shape.type === 'square' 
                ? 'rounded-lg' 
                : 'clip-triangle'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            background: `linear-gradient(${shape.rotation}deg, 
              rgba(0, 147, 255, ${shape.opacity}) 0%, 
              rgba(0, 201, 255, ${shape.opacity}) 50%, 
              rgba(138, 43, 226, ${shape.opacity}) 100%
            )`,
            filter: 'blur(50px)', // Increased blur for softer shapes
            transform: shape.type === 'triangle' ? 'rotate(30deg)' : 'none',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            rotate: [0, 180, -180, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};