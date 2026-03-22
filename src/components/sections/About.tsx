import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, UserCheck, Wrench, Languages } from 'lucide-react';
import { AnimatedSection } from '../ui/NeumorphButton';
import { personalInfo, experiences, education, skillCategories, languages } from '../../data';

export const About: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = personalInfo.summary;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[index]);
                setIndex(prev => prev + 1);
            }, 30);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section id="about" className="py-20 bg-hacker-gray border-y border-hacker-green/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Image Section */}
                    <AnimatedSection delay={0.1} direction="left" className="md:w-1/2">
                        <div className="relative">
                            <div className="rounded-lg overflow-hidden border-2 border-hacker-green p-1">
                                <div className="absolute -inset-1 bg-hacker-green/20 rounded-lg blur-lg"></div>
                                <img
                                    src="src/img/about2.jpg"
                                    alt="Gaël RAMAHANDRISOA"
                                    className="rounded opacity-80 mix-blend-screen w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-hacker-dark via-transparent to-transparent"></div>
                            </div>
                            <div className="absolute top-4 left-4 bg-hacker-dark/80 border border-hacker-green px-3 py-1 rounded-md text-xs">
                                <span className="text-hacker-cyan animate-pulse">[DATA SPECIALIST]</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Bio Section */}
                    <div className="md:w-1/2">
                        <AnimatedSection delay={0.2}>
                            <div className="inline-block mb-4 px-3 py-1 border border-hacker-green rounded">
                                <span className="text-sm text-hacker-green">&gt; whoami</span>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <h2 className="text-2xl md:text-4xl font-bold mb-6">
                                <span className="text-hacker-cyan">&lt;</span>
                                <span className="text-hacker-magenta">Gaël RAMAHANDRISOA</span>
                                <span className="text-hacker-cyan">/&gt;</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <div className="mb-8 text-hacker-green/90">
                                <div className="leading-relaxed">
                                    {displayText}
                                    <span className="inline-block w-0.5 h-4 bg-hacker-green ml-1 animate-pulse" />
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Quick Stats */}
                        <AnimatedSection delay={0.5} className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                                <GraduationCap className="text-hacker-cyan" size={24} />
                                <div>
                                    <p className="text-xs text-hacker-green/60">Formation</p>
                                    <p className="font-bold text-sm text-hacker-green-bright">Licence 2 Informatique</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                                <Briefcase className="text-hacker-cyan" size={24} />
                                <div>
                                    <p className="text-xs text-hacker-green/60">Expérience</p>
                                    <p className="font-bold text-sm text-hacker-green-bright">3 projets majeurs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                                <Award className="text-hacker-cyan" size={24} />
                                <div>
                                    <p className="text-xs text-hacker-green/60">Données traitées</p>
                                    <p className="font-bold text-sm text-hacker-green-bright">5000+ lignes</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                                <UserCheck className="text-hacker-cyan" size={24} />
                                <div>
                                    <p className="text-xs text-hacker-green/60">Certification</p>
                                    <p className="font-bold text-sm text-hacker-green-bright">PNM 2024</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                {/* Experiences & Education - reste identique */}
                <div className="mt-16">
                    <AnimatedSection delay={0.6}>
                        <h3 className="text-2xl font-bold mb-8 text-center">
                            <span className="text-hacker-cyan"># </span>
                            <span className="text-hacker-green-bright">EXPÉRIENCES & FORMATION</span>
                        </h3>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Experiences */}
                        <div>
                            <AnimatedSection delay={0.7}>
                                <div className="flex items-center gap-2 mb-6">
                                    <Briefcase className="text-hacker-cyan" />
                                    <h4 className="text-xl font-bold text-hacker-green-bright">Expériences professionnelles</h4>
                                </div>
                            </AnimatedSection>

                            {experiences.map((exp, idx) => (
                                <AnimatedSection key={exp.id} delay={0.8 + idx * 0.1}>
                                    <div className="mb-6 p-4 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                                        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                            <h5 className="text-lg font-bold text-hacker-cyan">{exp.title}</h5>
                                            <span className="text-xs text-hacker-green/60">{exp.period}</span>
                                        </div>
                                        <p className="text-hacker-green/80 mb-2">
                                            {exp.companyUrl ? (
                                                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-hacker-cyan">
                                                    {exp.company}
                                                </a>
                                            ) : (
                                                exp.company
                                            )}
                                        </p>
                                        <ul className="list-disc list-inside text-sm text-hacker-green/80 space-y-1">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* Education */}
                        <div>
                            <AnimatedSection delay={0.7}>
                                <div className="flex items-center gap-2 mb-6">
                                    <GraduationCap className="text-hacker-cyan" />
                                    <h4 className="text-xl font-bold text-hacker-green-bright">Formations</h4>
                                </div>
                            </AnimatedSection>

                            {education.map((edu, idx) => (
                                <AnimatedSection key={edu.id} delay={0.8 + idx * 0.1}>
                                    <div className="mb-6 p-4 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                                        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                            <h5 className="text-lg font-bold text-hacker-cyan">{edu.degree}</h5>
                                            <span className="text-xs text-hacker-green/60">{edu.period}</span>
                                        </div>
                                        <p className="text-hacker-green/80 mb-2">
                                            {edu.institution}, {edu.location}
                                        </p>
                                        <p className="text-sm text-hacker-green/70">
                                            {edu.courses.join(' • ')}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills & Languages - reste identique */}
                <div className="mt-16">
                    <AnimatedSection delay={1}>
                        <h3 className="text-2xl font-bold mb-8 text-center">
                            <span className="text-hacker-cyan"># </span>
                            <span className="text-hacker-green-bright">COMPÉTENCES</span>
                        </h3>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category, idx) => (
                            <AnimatedSection key={category.name} delay={1.1 + idx * 0.1}>
                                <div className="p-4 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Wrench className="text-hacker-cyan" size={20} />
                                        <h4 className="text-lg font-bold text-hacker-green-bright">{category.name}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm border border-hacker-green/50 rounded-full text-hacker-green/90 hover:border-hacker-cyan hover:text-hacker-cyan transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}

                        {/* Languages */}
                        <AnimatedSection delay={1.5}>
                            <div className="p-4 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                                <div className="flex items-center gap-2 mb-4">
                                    <Languages className="text-hacker-cyan" size={20} />
                                    <h4 className="text-lg font-bold text-hacker-green-bright">Langues</h4>
                                </div>
                                <div className="space-y-3">
                                    {languages.map((lang) => (
                                        <div key={lang.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-hacker-green/90">{lang.name}</span>
                                                <span className="text-sm text-hacker-cyan">{lang.level}</span>
                                            </div>
                                            <div className="w-full bg-hacker-dark/50 rounded-full h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: lang.level.includes('B2') ? '70%' : '50%' }}
                                                    transition={{ duration: 1, delay: 1.8 }}
                                                    className="bg-gradient-to-r from-hacker-green to-hacker-cyan h-2 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                {/* Qualities */}
                <AnimatedSection delay={1.6}>
                    <div className="mt-8 p-4 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors">
                        <div className="flex items-center gap-2 mb-4">
                            <UserCheck className="text-hacker-cyan" size={20} />
                            <h4 className="text-lg font-bold text-hacker-green-bright">Qualités professionnelles</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Rigueur", "Précision", "Patience", "Concentration",
                                "Autonomie", "Fiabilité", "Esprit d'analyse", "Capacité d'apprentissage"
                            ].map((quality) => (
                                <span
                                    key={quality}
                                    className="px-3 py-1 text-sm border border-hacker-green/50 rounded-full text-hacker-green/90 hover:border-hacker-cyan hover:text-hacker-cyan transition-colors"
                                >
                                    {quality}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};