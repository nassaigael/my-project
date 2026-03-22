import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface NavLinkProps {
    name: string;
    href: string;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
    index?: number;
    className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
    name,
    href,
    isActive,
    onClick,
    index = 0,
    className
}) => {
    return (
        <motion.a
            href={href}
            onClick={(e) => onClick(e, href)}
            className={cn(
                'relative px-4 py-2 rounded-xl transition-all duration-300 font-medium cursor-pointer overflow-hidden group',
                isActive
                    ? 'neumorph-inset text-blue-600 dark:text-blue-400'
                    : 'neumorph-sm text-gray-700 dark:text-gray-300',
                className
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Effet de brillance au hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            
            {/* Effet de soulignement premium */}
            <span className={cn(
                "absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300",
                isActive ? "w-6" : "group-hover:w-6"
            )} />
            
            <span className="relative z-10">
                {name}
            </span>
        </motion.a>
    );
};