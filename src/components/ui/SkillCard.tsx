import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import type { Skill } from '../../data/skills';

interface SkillCardProps {
    skill: Skill;
    index: number;
    hoveredId: number | null;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index, hoveredId }) => {
    const isHovered = hoveredId === skill.id;

    const getColorValue = (colorClass: string) => {
        const colorMap: Record<string, string> = {
            'text-cyan-500': '#06b6d4',
            'text-blue-500': '#3b82f6',
            'text-blue-400': '#60a5fa',
            'text-blue-600': '#2563eb',
            'text-teal-500': '#14b8a6',
            'text-purple-500': '#a855f7',
            'text-orange-500': '#f97316',
            'text-orange-600': '#ea580c',
            'text-green-500': '#22c55e',
            'text-green-600': '#16a34a',
            'text-green-700': '#15803d',
            'text-emerald-500': '#10b981',
            'text-red-500': '#ef4444',
            'text-pink-500': '#ec4899',
            'text-sky-500': '#0ea5e9',
            'text-gray-900': '#111827',
            'text-white': '#ffffff',
        };
        return colorMap[colorClass] || '#3b82f6';
    };

    const colorHex = getColorValue(skill.iconColor);
    const glowColor = `${colorHex}40`;
    const borderColor = `${colorHex}30`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="relative group"
        >
            {/* Icône de fond décorative */}
            <div 
                className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none text-6xl font-bold select-none"
            >
                {skill.bgIcon}
            </div>

            {/* Carte principale */}
            <motion.div 
                className={cn(
                    "relative neumorph-sm rounded-2xl p-4 text-center transition-all duration-300 overflow-hidden",
                    "bg-neumorph-bg cursor-pointer",
                    isHovered && "shadow-neumorph-hover"
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Icône colorée avec animation */}
                <motion.div 
                    className={cn(
                        "flex justify-center mb-2 transition-all duration-300",
                        isHovered && "scale-110"
                    )}
                    animate={isHovered ? { y: -2 } : { y: 0 }}
                >
                    <div className={cn(
                        "p-2 rounded-xl transition-all duration-300",
                        isHovered ? "bg-white/10" : ""
                    )}>
                        <div className={cn(skill.iconColor, "transition-colors")}>
                            {skill.icon}
                        </div>
                    </div>
                </motion.div>
                
                {/* Nom de la technologie */}
                <motion.h3 
                    className="text-sm font-semibold text-gray-200 transition-colors duration-300"
                    animate={isHovered ? { color: colorHex } : { color: '#e5e7eb' }}
                >
                    {skill.name}
                </motion.h3>
                
                {/* Effet de bordure lumineuse au hover */}
                {isHovered && (
                    <motion.div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            boxShadow: `0 0 20px ${glowColor}`,
                            border: `1px solid ${borderColor}`
                        }}
                    />
                )}
            </motion.div>
        </motion.div>
    );
};