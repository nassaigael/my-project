import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface NeumorphCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  inset?: boolean;
  onClick?: () => void;
}

export const NeumorphCard: React.FC<NeumorphCardProps> = ({
  children,
  className,
  hover = true,
  inset = false,
  onClick
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'p-6',
        inset ? 'neumorph-inset' : 'neumorph',
        hover && 'neumorph-hover',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};