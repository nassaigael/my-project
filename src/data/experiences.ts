import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Développeur Web',
    company: 'ÉCRIVIA',
    startDate: 'Octobre 2025',
    endDate: 'Présent',
    description: [
      'Développement d\'une application de génération automatique d\'e-mails multilingues',
      'Respect strict des règles de formatage et catégorisation',
      'Préparation de corpus textuels pour l\'entraînement IA',
      'Automatisation en Python : extraction et validation de données'
    ],
    technologies: ['React', 'Python', 'NLP', 'API'],
    link: 'https://ecrivia.onrender.com/'
  },
  {
    id: '2',
    title: 'Développeur Backend',
    company: 'FIZANAKARA COTISATION',
    startDate: 'Novembre 2025',
    endDate: 'Février 2026',
    description: [
      'Backend de gestion automatisée : membres, cotisations, paiements',
      'Création de schémas de données cohérents avec contrôle qualité',
      'Travail conforme aux standards et exigences métier'
    ],
    technologies: ['Python', 'PostgreSQL', 'REST API']
  },
  {
    id: '3',
    title: 'Développeur Full Stack',
    company: 'PLANIFIEO',
    startDate: 'Août 2025',
    endDate: 'Septembre 2025',
    description: [
      'Application web de suivi financier avec système d\'alertes',
      'Classement automatique des dépenses et revenus selon règles prédéfinies',
      'Mise en place de contrôles pour garantir la fiabilité des données'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'TailwindCSS']
  }
];