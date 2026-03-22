import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  Code2,
  Briefcase,
  User
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'rounded' | 'circle';
  className?: string;
  showLabel?: boolean;
  animated?: boolean;
}

const iconComponents: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
  Globe,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Code2,
  Briefcase,
  User
};

const sizeClasses = {
  sm: {
    container: 'p-2',
    icon: 18,
    text: 'text-sm'
  },
  md: {
    container: 'p-3',
    icon: 24,
    text: 'text-base'
  },
  lg: {
    container: 'p-4',
    icon: 32,
    text: 'text-lg'
  }
};

const variantClasses = {
  default: 'neumorph-sm',
  rounded: 'neumorph-sm rounded-2xl',
  circle: 'neumorph-sm rounded-full'
};

export const SocialIcon: React.FC<SocialIconProps> = ({
  name,
  url,
  icon,
  size = 'md',
  variant = 'default',
  className,
  showLabel = false,
  animated = true
}) => {
  const IconComponent = iconComponents[icon] || Mail;
  const sizes = sizeClasses[size];
  
  const content = (
    <>
      <IconComponent 
        size={sizes.icon} 
        className="text-gray-700 transition-colors duration-300 group-hover:text-gray-900"
      />
      {showLabel && (
        <span className={cn(
          'text-gray-700 font-medium transition-colors duration-300 group-hover:text-gray-900',
          sizes.text
        )}>
          {name}
        </span>
      )}
    </>
  );
  
  if (!animated) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-2 transition-all duration-300 hover:shadow-neumorph-hover group',
          variantClasses[variant],
          sizes.container,
          className
        )}
        aria-label={name}
      >
        {content}
      </a>
    );
  }
  
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'inline-flex items-center gap-2 transition-all duration-300 hover:shadow-neumorph-hover group',
        variantClasses[variant],
        sizes.container,
        className
      )}
      aria-label={name}
    >
      {content}
    </motion.a>
  );
};