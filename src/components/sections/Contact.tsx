import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { socialLinks, contactForm, contactMessages } from '../../data/contact';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } catch {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Informations de contact pour l'affichage en bas
    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'gael.ramahandrisoa@gmail.com', href: 'mailto:gael.ramahandrisoa@gmail.com', color: 'text-blue-500' },
        { icon: Phone, label: 'Téléphone', value: '+261 38 96 821 94', href: 'tel:+261389682194', color: 'text-green-500' },
        { icon: MapPin, label: 'Localisation', value: 'Antananarivo, Madagascar', href: '#', color: 'text-red-500' },
        { icon: Clock, label: 'Disponibilité', value: 'Lun - Ven, 9h - 18h', href: '#', color: 'text-purple-500' },
    ];

    return (
        <section id="contact" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
            {/* Éléments décoratifs premium */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-40 left-20 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
                
                {/* Points lumineux */}
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto max-w-4xl">
                {/* Titre de section amélioré */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 neumorph-sm px-5 py-2.5 rounded-full mb-6 group hover:shadow-neumorph-hover transition-all duration-300">
                        <Sparkles size={14} className="text-blue-500 group-hover:rotate-12 transition-transform" />
                        <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                            Commençons une conversation
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Parlons
                        </span>
                        <span className="text-gray-800 dark:text-gray-200"> de votre projet</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-5" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
                        Une idée, un projet ? N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !
                    </p>
                </motion.div>

                {/* Formulaire centré */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="neumorph-sm p-6 md:p-8 rounded-2xl">
                        {/* En-tête du formulaire */}
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                                <Send size={20} className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {contactMessages.formTitle}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Remplissez le formulaire ci-dessous
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type={contactForm.name.type}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required={contactForm.name.required}
                                        placeholder="Nom complet"
                                        className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>
                                <div>
                                    <input
                                        type={contactForm.email.type}
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required={contactForm.email.required}
                                        placeholder="Adresse email"
                                        className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type={contactForm.subject.type}
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required={contactForm.subject.required}
                                    placeholder="Sujet"
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required={contactForm.message.required}
                                    placeholder="Votre message..."
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 dark:text-gray-200 resize-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group",
                                    "neumorph-sm hover:shadow-neumorph-hover",
                                    "text-gray-700 dark:text-gray-300",
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                        {contactMessages.buttonSending}
                                    </>
                                ) : (
                                    <>
                                        <span>Envoyer le message</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </motion.button>

                            {/* Message de statut */}
                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-500"
                                    >
                                        <CheckCircle size={18} />
                                        <span className="text-sm">{contactMessages.successMessage}</span>
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-500"
                                    >
                                        <AlertCircle size={18} />
                                        <span className="text-sm">{contactMessages.errorMessage}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </motion.div>

                {/* Informations de contact en bas */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12"
                >
                    {/* Coordonnées */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {contactInfo.map((info, index) => (
                            <a
                                key={info.label}
                                href={info.href}
                                target={info.label === 'Localisation' ? '_blank' : undefined}
                                rel={info.label === 'Localisation' ? 'noopener noreferrer' : undefined}
                                className="neumorph-sm p-4 rounded-xl text-center hover:shadow-neumorph-hover transition-all duration-300 group"
                            >
                                <div className={cn("inline-flex p-2 rounded-lg mb-2", info.color, "bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform")}>
                                    <info.icon size={18} />
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {info.value}
                                </p>
                            </a>
                        ))}
                    </div>

                    {/* Réseaux sociaux et disponibilité */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 neumorph-sm rounded-2xl">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                <span className="text-xs font-medium">Disponible</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Prêt à collaborer
                            </span>
                        </div>

                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "neumorph-sm p-2.5 rounded-xl transition-all duration-300 hover:shadow-neumorph-hover hover:scale-110",
                                        social.color
                                    )}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Composant d'animation pour les messages
import { AnimatePresence } from 'framer-motion';