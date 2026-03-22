import React from 'react';
import * as Icons from 'lucide-react';
import { AnimatedSection } from '../ui/NeumorphButton';
import { services } from '../../data';

const iconMap: Record<string, React.ElementType> = {
    Database: Icons.Database,
    Code2: Icons.Code2,
    Globe: Icons.Globe,
    BarChart3: Icons.BarChart3,
    Shield: Icons.Shield,
    Search: Icons.Search,
    Bug: Icons.Bug,
    Users: Icons.Users
};

export const Services: React.FC = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const yOffset = -40;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="py-20 bg-dots">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-hacker-cyan"># </span>
                            <span className="text-hacker-green-bright">MES SERVICES</span>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p className="text-hacker-green/80 max-w-2xl mx-auto">
                            Solutions complètes de traitement de données, automatisation et développement web sur mesure.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => {
                        const IconComponent = iconMap[service.icon] || Icons.Settings;
                        return (
                            <AnimatedSection key={service.id} delay={0.3 + idx * 0.1}>
                                <div className="bg-hacker-gray border border-hacker-green/30 rounded-lg p-6 hover:border-hacker-cyan transition-colors duration-300 h-full flex flex-col group">
                                    <div className="h-14 w-14 rounded-lg bg-hacker-green/10 border border-hacker-green/30 flex items-center justify-center mb-6 group-hover:border-hacker-cyan group-hover:bg-hacker-cyan/10 transition-colors">
                                        <IconComponent className="text-2xl text-hacker-green group-hover:text-hacker-cyan" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-hacker-cyan">{service.title}</h3>
                                    <p className="text-hacker-green/80 mb-4 text-sm">
                                        {service.description}
                                    </p>
                                    <ul className="text-sm text-hacker-green/80 space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <span className="mr-2 text-hacker-cyan">&gt;</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <a
                                            href="#contact"
                                            onClick={(e) => handleSmoothScroll(e, '#contact')}
                                            className="text-hacker-green hover:text-hacker-cyan transition-colors duration-300 text-sm flex items-center"
                                        >
                                            <span>DEMANDER UN DEVIS</span>
                                            <Icons.ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};