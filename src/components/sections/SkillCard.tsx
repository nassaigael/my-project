import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../utils/cn';
import type { Skill } from '../../data/skills';

// Composant de progression circulaire
const CircularProgress: React.FC<{ percentage: number; color: string; delay: number; skillId: number }> = ({ percentage, color, delay, skillId }) => {
    const [progress, setProgress] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setProgress(percentage);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [isInView, percentage, delay]);

    const gradientId = `gradient-${skillId}`;

    return (
        <div ref={ref} className="relative">
            <svg className="w-28 h-28 transform -rotate-90">
                <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-gray-200 dark:text-gray-800"
                />
                <motion.circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke={`url(#${gradientId})`}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        strokeDasharray: circumference,
                    }}
                />
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={color.split(' ')[0].replace('from-', '').replace(/-/g, '-')} />
                        <stop offset="100%" stopColor={color.split(' ')[1].replace('to-', '').replace(/-/g, '-')} />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent" style={{
                    backgroundImage: `linear-gradient(135deg, ${color.split(' ')[0].replace('from-', '').replace(/-/g, '-')}, ${color.split(' ')[1].replace('to-', '').replace(/-/g, '-')})`
                }}>
                    {progress}%
                </span>
            </div>
        </div>
    );
};

interface SkillCardProps {
    skill: Skill;
    index: number;
    hoveredId: number | null;
    setHoveredId: (id: number | null) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index, hoveredId, setHoveredId }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
            onMouseEnter={() => setHoveredId(skill.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative group"
        >
            {/* Effet de glow au hover */}
            <div 
                className={cn(
                    "absolute -inset-0.5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    hoveredId === skill.id && "opacity-100"
                )}
                style={{
                    background: `radial-gradient(circle at center, ${skill.glowColor} 0%, transparent 70%)`
                }}
            />
            
            {/* Carte capsule */}
            <div className={cn(
                "relative neumorph-sm rounded-3xl p-6 text-center transition-all duration-300",
                "bg-neumorph-bg dark:bg-gray-900",
                hoveredId === skill.id && "shadow-neumorph-hover scale-[1.02]"
            )}>
                {/* Cercle de progression autour de l'icône */}
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <CircularProgress 
                            percentage={skill.percentage} 
                            color={skill.color}
                            delay={index * 100}
                            skillId={skill.id}
                        />
                        {/* Icône au centre du cercle */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className={cn(
                                "p-2 rounded-xl transition-all duration-300",
                                hoveredId === skill.id && "scale-110"
                            )}>
                                <div className={cn(
                                    "transition-colors",
                                    hoveredId === skill.id ? `text-${skill.color.split(' ')[0].replace('from-', '')}` : "text-gray-600 dark:text-gray-400"
                                )}>
                                    {skill.icon}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Nom de la technologie */}
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-2">
                    {skill.name}
                </h3>
                
                {/* Pourcentage en bas */}
                <p className={cn(
                    "text-sm font-medium mt-1 transition-colors",
                    hoveredId === skill.id ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
                )}>
                    {skill.percentage}% maîtrise
                </p>
                
                {/* Effet de bordure lumineuse au hover */}
                {hoveredId === skill.id && (
                    <div 
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                            boxShadow: `0 0 20px ${skill.glowColor}`,
                            border: `1px solid ${skill.glowColor.replace('0.5', '0.3')}`
                        }}
                    />
                )}
            </div>
        </motion.div>
    );
};