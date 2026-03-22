import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import type { Skill } from '../../data/skills';

interface SkillCardProps {
    skill: Skill;
    index: number;
    hoveredId: number | null;
    setHoveredId: (id: number | null) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index, hoveredId, setHoveredId }) => {
    const isHovered = hoveredId === skill.id;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            onMouseEnter={() => setHoveredId(skill.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative group"
        >
            {/* Icône de fond en arrière-plan */}
            <div 
                className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none text-6xl font-bold select-none"
            >
                {skill.bgIcon}
            </div>

            {/* Carte capsule */}
            <div className={cn(
                "relative neumorph-sm rounded-2xl p-4 text-center transition-all duration-300 overflow-hidden",
                "bg-neumorph-bg dark:bg-gray-900",
                isHovered && " scale-[1.02]"
            )}>
                {/* Icône colorée */}
                <div className={cn(
                    "flex justify-center mb-2 transition-all duration-300",
                    isHovered && "scale-110"
                )}>
                    <div className={cn(
                        "p-2 rounded-xl transition-all duration-300",
                        isHovered ? "bg-white/20 dark:bg-white/10" : ""
                    )}>
                        <div className={skill.iconColor}>
                            {skill.icon}
                        </div>
                    </div>
                </div>
                
                {/* Nom de la technologie */}
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                </h3>
                
                {/* Effet de bordure lumineuse au hover */}
                {isHovered && (
                    <div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                            boxShadow: `0 0 15px ${skill.iconColor.replace('text-', '').replace('-500', '')}40`,
                            border: `1px solid ${skill.iconColor.replace('text-', '').replace('-500', '')}30`
                        }}
                    />
                )}
            </div>
        </motion.div>
    );
};