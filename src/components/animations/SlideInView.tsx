import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInViewProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
}

export default function SlideInView({ children, direction = 'left', delay = 0 }: SlideInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
}