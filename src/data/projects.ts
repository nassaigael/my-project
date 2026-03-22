import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ÉCRIVIA',
    description: 'Application de génération automatique d\'e-mails multilingues',
    longDescription: 'Application web permettant de générer des e-mails professionnels en plusieurs langues avec des templates personnalisables et une IA de suggestion de contenu.',
    technologies: ['React', 'Python', 'NLP', 'TailwindCSS'],
    link: 'https://ecrivia.onrender.com/',
    featured: true
  },
  {
    id: '2',
    title: 'Fizanakara Cotisation',
    description: 'Système de gestion automatisée des cotisations et paiements',
    longDescription: 'Backend complet pour la gestion des membres, des cotisations et des paiements avec tableau de bord analytique et génération de rapports.',
    technologies: ['Python', 'PostgreSQL', 'FastAPI', 'Docker'],
    featured: true
  },
  {
    id: '3',
    title: 'Planifieo',
    description: 'Application de suivi financier avec système d\'alertes',
    longDescription: 'Outil de gestion budgétaire permettant de catégoriser automatiquement les dépenses et recevoir des alertes personnalisées.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    featured: false
  }
];