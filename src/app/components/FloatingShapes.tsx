import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 60, top: '10%', left: '5%', duration: 15, delay: 0 },
    { type: 'square', size: 40, top: '20%', right: '10%', duration: 12, delay: 2 },
    { type: 'triangle', size: 50, bottom: '15%', left: '8%', duration: 18, delay: 1 },
    { type: 'circle', size: 70, top: '60%', right: '5%', duration: 20, delay: 3 },
    { type: 'square', size: 45, bottom: '25%', right: '15%', duration: 14, delay: 1.5 },
    { type: 'circle', size: 35, top: '45%', left: '12%', duration: 16, delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${
            shape.type === 'circle' ? 'rounded-full' : shape.type === 'square' ? 'rounded-lg' : ''
          } bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            bottom: shape.bottom,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'triangle' && (
            <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[43px] border-b-blue-500/20" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
