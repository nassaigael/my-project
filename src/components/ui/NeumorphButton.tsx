import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

interface NeumorphButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'default' | 'rounded' | 'pill' | 'square';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  animated?: boolean;
  pressed?: boolean;
  loading?: boolean;
  loadingText?: string;
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const variantStyles = {
  default: {
    base: 'neumorph-sm',
    hover: 'hover:shadow-neumorph-hover',
    active: 'active:shadow-neumorph-inset',
    text: 'text-gray-700',
    glow: 'hover:shadow-neumorph-hover'
  },
  primary: {
    base: 'neumorph-sm',
    hover: 'hover:shadow-neumorph-hover',
    active: 'active:shadow-neumorph-inset',
    text: 'text-blue-600 font-semibold',
    glow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
  },
  secondary: {
    base: 'neumorph-sm',
    hover: 'hover:shadow-neumorph-hover',
    active: 'active:shadow-neumorph-inset',
    text: 'text-purple-600 font-semibold',
    glow: 'hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]'
  },
  danger: {
    base: 'neumorph-sm',
    hover: 'hover:shadow-neumorph-hover',
    active: 'active:shadow-neumorph-inset',
    text: 'text-red-600 font-semibold',
    glow: 'hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]'
  },
  success: {
    base: 'neumorph-sm',
    hover: 'hover:shadow-neumorph-hover',
    active: 'active:shadow-neumorph-inset',
    text: 'text-green-600 font-semibold',
    glow: 'hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]'
  },
  warning: {
    base: 'neumorph-sm',
    hover: 'hover:shadow-neumorph-hover',
    active: 'active:shadow-neumorph-inset',
    text: 'text-orange-600 font-semibold',
    glow: 'hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]'
  },
  ghost: {
    base: 'bg-transparent shadow-none',
    hover: 'hover:shadow-neumorph-sm',
    active: 'active:shadow-neumorph-inset',
    text: 'text-gray-600',
    glow: 'hover:shadow-neumorph-sm'
  }
};

const sizeStyles = {
  sm: {
    container: 'px-3 py-1.5',
    text: 'text-sm',
    gap: 'gap-1.5',
    iconSize: 'w-4 h-4'
  },
  md: {
    container: 'px-5 py-2.5',
    text: 'text-base',
    gap: 'gap-2',
    iconSize: 'w-5 h-5'
  },
  lg: {
    container: 'px-7 py-3.5',
    text: 'text-lg',
    gap: 'gap-2.5',
    iconSize: 'w-6 h-6'
  },
  xl: {
    container: 'px-9 py-4.5',
    text: 'text-xl',
    gap: 'gap-3',
    iconSize: 'w-7 h-7'
  }
};

const shapeStyles = {
  default: 'rounded-xl',
  rounded: 'rounded-2xl',
  pill: 'rounded-full',
  square: 'rounded-lg'
};

export const NeumorphButton: React.FC<NeumorphButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  shape = 'default',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  animated = true,
  pressed = false,
  loading = false,
  loadingText,
  glow = false,
  className,
  disabled = false,
  type = 'button',
  onClick,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const styles = variantStyles[variant];
  const sizes = sizeStyles[size];
  
  const isIconOnly = icon && !children;
  
  const getIconPositionClass = () => {
    if (isIconOnly) return 'justify-center';
    
    switch (iconPosition) {
      case 'left': return 'flex-row';
      case 'right': return 'flex-row-reverse';
      case 'top': return 'flex-col';
      case 'bottom': return 'flex-col-reverse';
      default: return 'flex-row';
    }
  };
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) return;
    
    if (!pressed) {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 200);
    }
    
    onClick?.(e);
  };
  
  const renderIcon = () => {
    if (!icon) return null;
    
    if (React.isValidElement(icon)) {
      const iconElement = icon as React.ReactElement<{ className?: string }>;
      const existingClassName = iconElement.props.className || '';
      
      return React.cloneElement(iconElement, {
        className: cn(
          sizes.iconSize,
          'transition-all',
          (isPressed || pressed) && 'scale-95',
          existingClassName
        )
      });
    }
    
    return icon;
  };
  
  const buttonContent = (
    <>
      {loading ? (
        <div className="flex items-center gap-2">
          <svg
            className={cn('animate-spin', sizes.iconSize)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {loadingText || children}
        </div>
      ) : (
        <>
          {icon && (
            <div className={cn('flex-shrink-0', (iconPosition === 'top' || iconPosition === 'bottom') && 'mb-1')}>
              {renderIcon()}
            </div>
          )}
          {children && <span>{children}</span>}
        </>
      )}
    </>
  );
  
  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-neumorph-bg',
    'disabled:cursor-not-allowed disabled:opacity-50',
    styles.base,
    styles.text,
    sizes.container,
    sizes.text,
    sizes.gap,
    getIconPositionClass(),
    shapeStyles[shape],
    fullWidth && 'w-full',
    !disabled && !loading && styles.hover,
    !disabled && !loading && styles.active,
    (isPressed || pressed) && 'shadow-neumorph-inset scale-98',
    glow && !disabled && !loading && styles.glow,
    isIconOnly && 'aspect-square p-0',
    className
  );
  
  const commonProps = {
    className: baseClasses,
    disabled: disabled || loading,
    onClick: handleClick,
    type,
  };
  
  if (!animated) {
    return (
      <button {...commonProps}>
        {buttonContent}
      </button>
    );
  }
  
  return (
    <motion.button
      {...commonProps}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={loading ? 'loading' : 'content'}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center gap-2"
        >
          {buttonContent}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};