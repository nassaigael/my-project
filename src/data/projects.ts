export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    status: 'completed' | 'in-progress' | 'planned';
    demoUrl?: string;
    githubUrl?: string;
    date?: string;
    featured?: boolean;
}

import project1 from "../assets/projects/1.jpeg";
import project2 from "../assets/projects/2.jpeg";
import project3 from "../assets/projects/3.jpeg";
import project4 from "../assets/projects/4.png";
import project5 from "../assets/projects/5.jpeg";
import project6 from "../assets/projects/6.jpeg";


export const projects: Project[] = [
    {
        id: 1,
        title: 'ÉCRIVIA',
        description: 'Application de génération automatique d\'e-mails multilingues avec IA pour la rédaction de contenus professionnels.',
        image: project1,
        technologies: ['React', 'Python', 'NLP', 'TailwindCSS'],
        status: 'completed',
        demoUrl: 'https://ecrivia.onrender.com/',
        githubUrl: 'https://github.com/gaelramahandrisoa/ecrivia',
        date: '2025',
        featured: true
    },
    {
        id: 2,
        title: 'Fizanakara Cotisation',
        description: 'Système de gestion automatisée des cotisations et paiements avec tableau de bord analytique.',
        image: project2,
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
        status: 'completed',
        demoUrl: '#',
        githubUrl: 'https://github.com/gaelramahandrisoa/fizanakara',
        date: '2025',
        featured: true
    },
    {
        id: 3,
        title: 'Planifieo',
        description: 'Application de suivi financier avec catégorisation automatique des dépenses et alertes personnalisées.',
        image: project3,
        technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        status: 'completed',
        demoUrl: '#',
        githubUrl: 'https://github.com/gaelramahandrisoa/planifieo',
        date: '2025'
    },
    {
        id: 4,
        title: 'Portfolio Neumorphism',
        description: 'Portfolio personnel avec design neumorphism, dark mode et animations fluides.',
        image: project4,
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        status: 'in-progress',
        githubUrl: 'https://github.com/gaelramahandrisoa/portfolio',
        date: '2026'
    },
    {
        id: 5,
        title: 'Data Scraper Pro',
        description: 'Outil de web scraping avancé pour l\'extraction et le nettoyage de données structurées.',
        image: project5,
        technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
        status: 'planned',
        date: '2026'
    },
    {
        id: 6,
        title: 'AI Dataset Creator',
        description: 'Plateforme de création et d\'annotation de datasets pour l\'entraînement de modèles IA.',
        image: project6,
        technologies: ['Python', 'FastAPI', 'React', 'TensorFlow'],
        status: 'planned',
        date: '2026'
    }
];

export const statusConfig = {
    completed: {
        label: 'Terminé',
        icon: 'Play',
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30'
    },
    'in-progress': {
        label: 'En cours',
        icon: 'Clock',
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30'
    },
    planned: {
        label: 'Prévu',
        icon: 'Star',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30'
    }
};

export const filters = [
    { value: 'all', label: 'Tous' },
    { value: 'featured', label: 'En vedette' },
    { value: 'completed', label: 'Terminés' },
    { value: 'in-progress', label: 'En cours' },
    { value: 'planned', label: 'Prévus' }
];