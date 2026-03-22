import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

interface ThemeToggleProps {
    className?: string;
    showLabel?: boolean;
    variant?: 'default' | 'minimal' | 'glowing';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
    className,
    showLabel = false,
    variant = 'default'
}) => {
    const { isDark, toggleTheme } = useTheme();

    const variants = {
        default: {
            track: isDark ? 'bg-gray-700' : 'bg-gray-200',
            thumb: isDark ? 'neumorph-inset' : 'neumorph-sm',
            icon: isDark ? 'text-blue-400' : 'text-yellow-500'
        },
        minimal: {
            track: 'bg-transparent',
            thumb: isDark ? 'neumorph-inset' : 'neumorph-sm',
            icon: isDark ? 'text-blue-400' : 'text-yellow-500'
        },
        glowing: {
            track: isDark ? 'bg-gray-700 ' : 'bg-gray-200 ',
            thumb: isDark ? 'neumorph-inset' : 'neumorph-sm',
            icon: isDark ? 'text-blue-400' : 'text-yellow-500'
        }
    };

    const currentVariant = variants[variant];

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={cn(
                'relative group transition-all duration-300',
                variant === 'default' && 'neumorph-sm p-1 rounded-xl hover:shadow-neumorph-hover',
                variant === 'minimal' && 'p-1',
                variant === 'glowing' && 'neumorph-sm p-1 rounded-xl',
                className
            )}
            aria-label="Changer le thème"
        >
            <div className="relative w-16 h-8">
                {/* Background Track */}
                <div className={cn(
                    "absolute inset-0 rounded-lg transition-all duration-300",
                    currentVariant.track
                )} />
                
                {/* Toggle Thumb with Icons */}
                <motion.div
                    className={cn(
                        "absolute top-0.5 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300",
                        currentVariant.thumb
                    )}
                    animate={{
                        x: isDark ? 32 : 2,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    {isDark ? (
                        <Moon size={16} className={cn("transition-all", currentVariant.icon)} />
                    ) : (
                        <Sun size={16} className={cn("transition-all", currentVariant.icon)} />
                    )}
                </motion.div>
            </div>
            
            {showLabel && (
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isDark ? 'Mode sombre' : 'Mode clair'}
                </span>
            )}
        </motion.button>
    );
};