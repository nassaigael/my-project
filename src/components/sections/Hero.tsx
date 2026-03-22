import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/NeumorphButton';
import { personalInfo } from '../../data';

export const Hero: React.FC = () => {
    const fullText = "Protégez vos données avec des solutions de traitement et d'analyse sur mesure.";

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
        <section id="home" className="py-20 md:py-32 relative matrix-bg min-h-screen flex items-center">
            <div className="absolute inset-0 matrix-animation opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection delay={0.1}>
                        <div className="inline-block px-3 py-1 bg-hacker-dark/50 border border-hacker-green rounded-lg mb-6">
                            <span className="text-sm text-hacker-green">$ ./data_specialist.sh</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="text-hacker-green-bright">GAËL RAMAHANDRISOA</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <h2 className="text-xl md:text-2xl text-hacker-cyan mb-6">
                            {personalInfo.title}
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <p className="text-lg md:text-xl mb-8 text-hacker-green/80 leading-relaxed max-w-4xl mx-auto">
                            {fullText}
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.5} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            onClick={(e) => handleSmoothScroll(e, '#contact')}
                            className="py-3 px-6 bg-hacker-green text-hacker-dark font-bold rounded hover:bg-hacker-cyan transition-colors duration-300 uppercase tracking-widest text-sm inline-flex items-center gap-2"
                        >
                            <Terminal size={16} />
                            $ Initier le contact
                        </a>
                        <a
                            href="#services"
                            onClick={(e) => handleSmoothScroll(e, '#services')}
                            className="py-3 px-6 border border-hacker-green text-hacker-green bg-hacker-dark/80 font-bold rounded hover:border-hacker-cyan hover:text-hacker-cyan transition-colors duration-300 uppercase tracking-widest text-sm inline-flex items-center gap-2"
                        >
                            $ Mes services
                            <ArrowRight size={14} />
                        </a>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};