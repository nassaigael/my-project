import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { AnimatedSection } from '../ui/NeumorphButton';
import { personalInfo } from '../../data';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-hacker-gray">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-hacker-cyan"># </span>
                            <span className="text-hacker-green-bright">CONTACT</span>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p className="text-hacker-green/80 max-w-2xl mx-auto">
                            Intéressé par mes services ? Contactez-moi pour discuter de votre projet.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <AnimatedSection delay={0.3} direction="left">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors group">
                                <div className="h-12 w-12 rounded-lg bg-hacker-green/10 border border-hacker-green/30 flex items-center justify-center group-hover:border-hacker-cyan group-hover:bg-hacker-cyan/10 transition-colors">
                                    <Mail className="text-hacker-green group-hover:text-hacker-cyan" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-hacker-green/60">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="hover:text-hacker-cyan transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors group">
                                <div className="h-12 w-12 rounded-lg bg-hacker-green/10 border border-hacker-green/30 flex items-center justify-center group-hover:border-hacker-cyan group-hover:bg-hacker-cyan/10 transition-colors">
                                    <Phone className="text-hacker-green group-hover:text-hacker-cyan" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-hacker-green/60">Téléphone</p>
                                    <a href={`tel:${personalInfo.phone}`} className="hover:text-hacker-cyan transition-colors">
                                        {personalInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 border border-hacker-green/30 rounded-lg hover:border-hacker-cyan transition-colors group">
                                <div className="h-12 w-12 rounded-lg bg-hacker-green/10 border border-hacker-green/30 flex items-center justify-center group-hover:border-hacker-cyan group-hover:bg-hacker-cyan/10 transition-colors">
                                    <MapPin className="text-hacker-green group-hover:text-hacker-cyan" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-hacker-green/60">Adresse</p>
                                    <p className="hover:text-hacker-cyan transition-colors">{personalInfo.address}</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Contact Form */}
                    <AnimatedSection delay={0.4} direction="right">
                        <form onSubmit={handleSubmit} className="bg-hacker-dark/50 border border-hacker-green/30 rounded-lg p-6 hover:border-hacker-cyan transition-colors">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-bold mb-2 text-hacker-green">
                                    &gt; Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-hacker-gray border border-hacker-green/30 rounded p-3 text-hacker-green focus:outline-none focus:border-hacker-cyan transition-colors"
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-bold mb-2 text-hacker-green">
                                    &gt; Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-hacker-gray border border-hacker-green/30 rounded p-3 text-hacker-green focus:outline-none focus:border-hacker-cyan transition-colors"
                                    placeholder="votre@email.com"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-bold mb-2 text-hacker-green">
                                    &gt; Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full bg-hacker-gray border border-hacker-green/30 rounded p-3 text-hacker-green focus:outline-none focus:border-hacker-cyan transition-colors"
                                    placeholder="Décrivez votre projet ou vos besoins"
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={!formData.name || !formData.email || !formData.message}
                                    className="py-3 px-6 bg-hacker-green text-hacker-dark font-bold rounded hover:bg-hacker-cyan transition-colors duration-300 uppercase tracking-widest text-sm inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} />
                                    $ Envoyer
                                </button>
                            </div>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};