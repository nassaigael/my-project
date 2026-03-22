import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { skillsData, categoryConfig, categories } from '../../data/skills';
import { SkillCard } from './SkillCard';

export const Skills: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const filteredSkills = activeCategory === 'all' 
        ? skillsData 
        : skillsData.filter(s => s.category === activeCategory);

    // Grouper par catégorie pour la vue "all"
    const skillsByCategory = filteredSkills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skillsData>);

    return (
        <section id="skills" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl">
                {/* Titre de section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 neumorph-sm px-5 py-2.5 rounded-full mb-6">
                        <span className="text-xl">💻</span>
                        <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                            Stack technique
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Compétences
                        </span>
                        <span className="text-gray-800 dark:text-gray-200"> techniques</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Les technologies que je maîtrise, catégorisées par domaine d'expertise
                    </p>
                </motion.div>

                {/* Filtres par catégorie */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => {
                        const config = categoryConfig[cat as keyof typeof categoryConfig];
                        return (
                            <motion.button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    'px-5 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2',
                                    activeCategory === cat
                                        ? 'neumorph-inset text-blue-600 dark:text-blue-400'
                                        : 'neumorph-sm text-gray-600 dark:text-gray-400 hover:shadow-neumorph-hover'
                                )}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{cat === 'all' ? '📊' : config?.icon}</span>
                                <span>{cat === 'all' ? 'Toutes' : config?.label}</span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Affichage des compétences */}
                {activeCategory === 'all' ? (
                    <div className="space-y-16">
                        {Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => {
                            const config = categoryConfig[category as keyof typeof categoryConfig];
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                >
                                    {/* En-tête de catégorie */}
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className={cn("text-3xl")}>
                                            {config.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                            {config.label}
                                        </h3>
                                        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700" />
                                        <p className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">
                                            {config.description}
                                        </p>
                                    </div>

                                    {/* Grille des compétences */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {categorySkills.map((skill, index) => (
                                            <SkillCard
                                                key={skill.id}
                                                skill={skill}
                                                index={index}
                                                hoveredId={hoveredId}
                                                setHoveredId={setHoveredId}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredSkills.map((skill, index) => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                index={index}
                                hoveredId={hoveredId}
                                setHoveredId={setHoveredId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};