import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NavLink } from '../ui/NavLink';
import { cn } from '../../utils/cn';

interface HeaderProps {
    transparent?: boolean;
}

const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { isDark } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Détecter la section active
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const headerClasses = cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || !transparent
            ? 'py-3 neumorph-sm rounded-none'
            : 'py-5 bg-transparent'
    );

    return (
        <>
            <header className={headerClasses}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo avec effet premium */}
                        <motion.a
                            href="#home"
                            onClick={(e) => handleLinkClick(e, '#home')}
                            className="relative group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="neumorph-sm px-4 py-2 transition-all duration-300 hover:shadow-neumorph-hover relative overflow-hidden">
                                {/* Effet de brillance sur le logo */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10">
                                    GR
                                </span>
                            </div>
                        </motion.a>

                        {/* Desktop Navigation avec nouveaux navlinks */}
                        <nav className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={link.name}
                                    name={link.name}
                                    href={link.href}
                                    isActive={activeSection === link.href.substring(1)}
                                    onClick={handleLinkClick}
                                    index={index}
                                />
                            ))}
                        </nav>

                        {/* Theme Toggle & Mobile Menu Button */}
                        <div className="flex items-center gap-3">
                            {/* Theme Toggle Button avec effet premium */}
                            <ThemeToggle variant="glowing" />

                            {/* Menu Button avec effet premium */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden neumorph-sm p-2 rounded-xl transition-all duration-300 hover:shadow-neumorph-hover relative overflow-hidden group"
                                aria-label="Menu"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                {isMobileMenuOpen ? (
                                    <X size={20} className="relative z-10" />
                                ) : (
                                    <Menu size={20} className="relative z-10" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu Mobile avec design premium */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-80 z-50 lg:hidden neumorph-sm rounded-l-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Menu Header */}
                                <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
                                    <motion.span
                                        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        Menu
                                    </motion.span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="neumorph-sm p-2 rounded-xl hover:shadow-neumorph-hover transition-all duration-300"
                                    >
                                        <X size={20} />
                                    </motion.button>
                                </div>

                                {/* Menu Links */}
                                <nav className="flex-1 p-5 space-y-3">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className={cn(
                                                'block px-5 py-3 rounded-xl transition-all duration-300 font-medium cursor-pointer text-center relative overflow-hidden group',
                                                activeSection === link.href.substring(1)
                                                    ? 'neumorph-inset text-blue-600 dark:text-blue-400'
                                                    : 'neumorph-sm text-gray-700 dark:text-gray-300 hover:shadow-neumorph-hover'
                                            )}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                            <span className="relative z-10">{link.name}</span>
                                        </motion.a>
                                    ))}
                                </nav>

                                {/* Theme Toggle Mobile */}
                                <div className="p-5 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Thème actuel: {isDark ? 'Sombre' : 'Clair'}
                                        </span>
                                        <ThemeToggle variant="glowing" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};