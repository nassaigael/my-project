import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SocialIcon } from '../ui/SocialIcon';
import { personalInfo } from '../../data/personalInfo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/gaelramahandrisoa', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/gael-ramahandrisoa', icon: 'Linkedin' },
    { name: 'Email', url: 'mailto:gael.ramahandrisoa@gmail.com', icon: 'Mail' },
  ];

  return (
    <footer className="mt-20 py-8 neumorph-sm rounded-t-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SocialIcon
                  name={link.name}
                  url={link.url}
                  icon={link.icon}
                  size="md"
                  variant="circle"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} {personalInfo.name}. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
              Fait avec <Heart size={12} className="text-red-500 fill-red-500" /> à Madagascar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};