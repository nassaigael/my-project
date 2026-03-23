import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { skillsData, categoryConfig, categories } from '../../data/skills';
import { SkillCard } from '../ui/SkillCard';
import { useLanguage } from '../../contexts/LanguageContext';

export const Skills: React.FC = () => {
    const { t } = useLanguage();
    const [hoveredId] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const filteredSkills = activeCategory === 'all' 
        ? skillsData 
        : skillsData.filter(s => s.category === activeCategory);

    const categoryLabels: Record<string, string> = {
        frontend: t('skills.category_frontend'),
        backend: t('skills.category_backend'),
        database: t('skills.category_database'),
        tools: t('skills.category_tools'),
        ai: t('skills.category_ai'),
    };

    return (
        <section id="skills" className="relative py-12 md:py-12 overflow-hidden px-4 sm:px-6 lg:px-16">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        <span className={"bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"}>
                            {t('skills.title')}
                        </span>
                        <span className="text-gray-200"> {t('skills.technical')}</span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    <motion.button
                        onClick={() => setActiveCategory('all')}
                        className={cn(
                            'px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-1.5',
                            activeCategory === 'all'
                                ? 'neumorph-inset text-blue-600'
                                : 'neumorph-sm text-gray-400'
                        )}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>{t('skills.all')}</span>
                    </motion.button>
                    {categories.filter(c => c !== 'all').map((cat) => {
                        const config = categoryConfig[cat as keyof typeof categoryConfig];
                        return (
                            <motion.button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    'px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-1.5',
                                    activeCategory === cat
                                        ? 'neumorph-inset text-blue-600'
                                        : 'neumorph-sm text-gray-400'
                                )}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>{categoryLabels[cat] || config?.label}</span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {filteredSkills.map((skill, index) => (
                        <SkillCard
                            key={skill.id}
                            skill={skill}
                            index={index}
                            hoveredId={hoveredId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};