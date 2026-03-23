import React from 'react';
import { motion } from 'framer-motion';
import { 
    Award, 
    Heart,
    Users,
    Rocket,
    Code2,
    Sparkles,
    CheckCircle,
    Target,
    Lightbulb,
    Brain
} from 'lucide-react';
import { cn } from '../../utils/cn';
import profile from '../../assets/profile.png';

interface AboutProps {
    className?: string;
}

const qualities = [
    { icon: Rocket, title: 'Innovant', description: 'Toujours à la recherche de nouvelles solutions', color: 'text-blue-500', delay: 0 },
    { icon: Users, title: 'Collaboratif', description: 'Excellent travail d\'équipe et communication', color: 'text-purple-500', delay: 0.1 },
    { icon: Heart, title: 'Passionné', description: 'Amour du code et des nouvelles technologies', color: 'text-red-500', delay: 0.2 },
    { icon: Award, title: 'Rigoureux', description: 'Attention aux détails et qualité du code', color: 'text-green-500', delay: 0.3 },
];

const stats = [
    { value: '2+', label: "Années d'expérience", icon: Award, color: 'from-blue-500 to-cyan-500' },
    { value: '15+', label: 'Projets réalisés', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { value: '10+', label: 'Technologies maîtrisées', icon: Code2, color: 'from-purple-500 to-pink-500' },
    { value: '100%', label: 'Passion et dévouement', icon: Heart, color: 'from-red-500 to-rose-500' },
];

const floatingBadges = [
    { icon: Target, label: 'Rigueur', color: 'text-blue-500', bg: 'bg-blue-500/10', position: 'top-0 -left-4', delay: 0 },
    { icon: Lightbulb, label: 'Créativité', color: 'text-yellow-500', bg: 'bg-yellow-500/10', position: 'top-1/4 -right-6', delay: 0.2 },
    { icon: Brain, label: 'Problem Solving', color: 'text-purple-500', bg: 'bg-purple-500/10', position: 'bottom-1/3 -left-6', delay: 0.4 },
    { icon: Rocket, label: 'Proactif', color: 'text-green-500', bg: 'bg-green-500/10', position: 'bottom-0 -right-4', delay: 0.6 },
];

export const About: React.FC<AboutProps> = ({ className }) => {
    return (
        <section
            id="about"
            className={cn(
                'relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden',
                className
            )}
        >
            {/* Éléments décoratifs d'arrière-plan - style Hero */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Cercles flous */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                
                {/* Grille technique */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                
                {/* Points lumineux */}
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-2/3 left-1/2 w-0.5 h-0.5 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
                {/* Titre de section - style Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 neumorph-sm px-5 py-2.5 rounded-full mb-6 group hover:shadow-neumorph-hover transition-all duration-300">
                        <Sparkles size={14} className="text-blue-500 group-hover:rotate-12 transition-transform" />
                        <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                            Qui suis-je ?
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            À propos
                        </span>
                        <span className="text-gray-800 dark:text-gray-200"> de moi</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                </motion.div>

                {/* Contenu principal - 2 colonnes comme Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Colonne gauche - Texte */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Badge de bienvenue */}
                        <div className="inline-flex items-center gap-2 neumorph-sm px-4 py-2 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                                Gaël RAMAHANDRISOA
                            </span>
                        </div>

                        {/* Titre */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                            Développeur Web <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">& IA</span>
                        </h3>

                        {/* Description */}
                        <div className="space-y-4">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Je suis un développeur web passionné par le traitement de données et l'intelligence artificielle. 
                                Actuellement étudiant en informatique, je combine mes compétences techniques avec une forte 
                                rigueur et une capacité d'apprentissage rapide.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Mon parcours m'a permis de développer une expertise en web scraping, nettoyage de données 
                                et création de datasets pour l'IA. Je suis constamment à la recherche de nouveaux défis 
                                et d'opportunités pour innover.
                            </p>
                        </div>

                        {/* Qualités */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            {qualities.map((quality) => (
                                <motion.div
                                    key={quality.title}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-center gap-2 neumorph-sm p-2.5 rounded-xl"
                                >
                                    <quality.icon size={16} className={quality.color} />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {quality.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Statistiques */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="neumorph-sm p-3 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <div className={cn(
                                        "text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                                        stat.color
                                    )}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Colonne droite - Image avec badges flottants */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center items-center relative"
                    >
                        <div className="relative">
                            {/* Effet de glow autour de l'image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />

                            {/* Conteneur de l'image avec effet neumorphism */}
                            <div className="relative neumorph-lg p-3 rounded-full bg-neumorph-bg dark:bg-gray-900">
                                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                    <img
                                        src={profile}
                                        alt="Gaël RAMAHANDRISOA"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Badges techniques flottants */}
                            {floatingBadges.map((badge) => (
                                <motion.div
                                    key={badge.label}
                                    className={cn(
                                        "absolute neumorph-sm px-3 py-2 rounded-full flex items-center gap-2",
                                        badge.position
                                    )}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ 
                                        opacity: 1, 
                                        scale: 1,
                                        y: [0, -5, 0],
                                    }}
                                    transition={{ 
                                        delay: 0.8 + badge.delay, 
                                        duration: 0.3,
                                        y: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: badge.delay
                                        }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <badge.icon size={14} className={badge.color} />
                                    <span className={cn("text-xs font-medium", badge.color)}>
                                        {badge.label}
                                    </span>
                                </motion.div>
                            ))}

                            {/* Badge central flottant */}
                            <motion.div
                                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 neumorph-sm px-4 py-2 rounded-full flex items-center gap-2"
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Sparkles size={12} className="text-yellow-500" />
                                <span className="text-xs font-mono text-yellow-600 dark:text-yellow-400 font-semibold">
                                    Full Stack
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};