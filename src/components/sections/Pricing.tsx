import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/NeumorphButton';
import { pricingPlans, faqs } from '../../data';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Pricing: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <section id="pricing" className="relative py-20 bg-hacker-dark border-y border-hacker-green/30">
            <div className="absolute inset-0 bg-particle opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="text-center mb-12">
                    <AnimatedSection delay={0.1}>
                        <div className="inline-block px-3 py-1 bg-hacker-green/10 border border-hacker-green rounded-lg mb-4">
                            <span className="text-sm text-hacker-green">Tarifs</span>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-hacker-cyan"># </span>
                            <span className="text-hacker-green-bright">PLANS TARIFAIRES</span>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <p className="text-hacker-green/80 max-w-2xl mx-auto">
                            Des solutions adaptées à vos besoins, des projets ponctuels aux collaborations long terme.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {pricingPlans.map((plan, idx) => (
                        <AnimatedSection key={plan.id} delay={0.4 + idx * 0.1}>
                            <div className={`bg-hacker-gray border ${plan.popular ? 'border-hacker-cyan' : 'border-hacker-green/30'} rounded-lg p-6 hover:border-hacker-cyan transition-colors duration-300 relative h-full flex flex-col`}>
                                {plan.popular && (
                                    <div className="absolute top-4 right-4 bg-hacker-cyan/10 border border-hacker-cyan text-hacker-dark px-3 py-1 rounded-md text-xs">
                                        <span className="text-hacker-cyan">POPULAIRE</span>
                                    </div>
                                )}
                                <div className="h-14 w-14 rounded-lg bg-hacker-green/10 border border-hacker-green/30 flex items-center justify-center mb-6">
                                    <span className="text-2xl font-bold text-hacker-cyan">
                                        {plan.id === 1 ? '📊' : plan.id === 2 ? '💻' : '🤖'}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-hacker-cyan">{plan.name}</h3>
                                <p className="text-hacker-green/80 mb-4 text-sm">{plan.description}</p>
                                <h4 className="text-2xl font-bold text-hacker-green-bright mb-6">
                                    {plan.price}
                                </h4>
                                <ul className="text-sm text-hacker-green/80 space-y-2 mb-6 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="mr-2 text-hacker-cyan">&gt;</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 mt-auto">
                                    <a
                                        href="#contact"
                                        onClick={(e) => handleSmoothScroll(e, '#contact')}
                                        className={`py-2 px-4 block text-center border ${plan.popular ? 'bg-hacker-cyan text-hacker-dark hover:bg-hacker-green' : 'border-hacker-green text-hacker-green bg-hacker-dark/80 hover:border-hacker-cyan hover:text-hacker-cyan'} font-bold rounded transition-colors duration-300 uppercase tracking-widest text-sm`}
                                    >
                                        {plan.buttonText}
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="text-center mb-12">
                    <AnimatedSection delay={0.5}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-hacker-cyan"># </span>
                            <span className="text-hacker-green-bright">QUESTIONS FRÉQUENTES</span>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection delay={0.6}>
                        <p className="text-hacker-green/80 max-w-2xl mx-auto">
                            Réponses aux questions courantes sur mes services et méthodes de travail.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                    {faqs.map((faq, idx) => (
                        <AnimatedSection key={faq.id} delay={0.7 + idx * 0.1}>
                            <div className="bg-hacker-dark/50 border border-hacker-green/30 rounded-lg p-4 hover:border-hacker-cyan transition-colors">
                                <button
                                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="text-lg font-bold text-hacker-cyan">{faq.question}</span>
                                    {openFaq === faq.id ? (
                                        <ChevronUp className="text-hacker-cyan" size={20} />
                                    ) : (
                                        <ChevronDown className="text-hacker-cyan" size={20} />
                                    )}
                                </button>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: openFaq === faq.id ? 'auto' : 0, opacity: openFaq === faq.id ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-4 text-hacker-green/80 pt-2 border-t border-hacker-green/30">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};