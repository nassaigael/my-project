import { 
    FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt,
    FaFigma
} from 'react-icons/fa';
import { 
    SiTypescript, SiTailwindcss, SiFramer, SiFastapi, SiPostgresql,
    SiNextdotjs, SiDjango, SiMysql, SiRedis
} from 'react-icons/si';
import { TbApi, TbCloudStar } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';

export interface Skill {
    id: number;
    name: string;
    percentage: number;
    icon: React.ReactNode;
    color: string;
    glowColor: string;
    category: 'frontend' | 'backend' | 'database' | 'tools';
}

export const skillsData: Skill[] = [
    // Frontend
    { 
        id: 1, name: 'React', percentage: 85, 
        icon: <FaReact size={32} />, 
        color: 'from-cyan-500 to-blue-500', 
        glowColor: 'rgba(6, 182, 212, 0.5)',
        category: 'frontend'
    },
    { 
        id: 2, name: 'TypeScript', percentage: 80, 
        icon: <SiTypescript size={32} />, 
        color: 'from-blue-500 to-indigo-500', 
        glowColor: 'rgba(59, 130, 246, 0.5)',
        category: 'frontend'
    },
    { 
        id: 3, name: 'TailwindCSS', percentage: 90, 
        icon: <SiTailwindcss size={32} />, 
        color: 'from-teal-500 to-cyan-500', 
        glowColor: 'rgba(20, 184, 166, 0.5)',
        category: 'frontend'
    },
    { 
        id: 4, name: 'Framer Motion', percentage: 77, 
        icon: <SiFramer size={32} />, 
        color: 'from-purple-500 to-pink-500', 
        glowColor: 'rgba(168, 85, 247, 0.5)',
        category: 'frontend'
    },
    { 
        id: 5, name: 'HTML5', percentage: 94, 
        icon: <FaHtml5 size={32} />, 
        color: 'from-orange-500 to-red-500', 
        glowColor: 'rgba(249, 115, 22, 0.5)',
        category: 'frontend'
    },
    { 
        id: 6, name: 'CSS3', percentage: 88, 
        icon: <FaCss3Alt size={32} />, 
        color: 'from-blue-400 to-cyan-400', 
        glowColor: 'rgba(34, 211, 238, 0.5)',
        category: 'frontend'
    },
    { 
        id: 7, name: 'Next.js', percentage: 75, 
        icon: <SiNextdotjs size={32} />, 
        color: 'from-gray-700 to-gray-900', 
        glowColor: 'rgba(107, 114, 128, 0.5)',
        category: 'frontend'
    },
    
    // Backend
    { 
        id: 8, name: 'Python', percentage: 85, 
        icon: <FaPython size={32} />, 
        color: 'from-green-500 to-emerald-500', 
        glowColor: 'rgba(34, 197, 94, 0.5)',
        category: 'backend'
    },
    { 
        id: 9, name: 'Node.js', percentage: 75, 
        icon: <FaNodeJs size={32} />, 
        color: 'from-green-600 to-lime-500', 
        glowColor: 'rgba(132, 204, 22, 0.5)',
        category: 'backend'
    },
    { 
        id: 10, name: 'FastAPI', percentage: 80, 
        icon: <SiFastapi size={32} />, 
        color: 'from-emerald-500 to-teal-500', 
        glowColor: 'rgba(16, 185, 129, 0.5)',
        category: 'backend'
    },
    { 
        id: 11, name: 'Django', percentage: 70, 
        icon: <SiDjango size={32} />, 
        color: 'from-green-700 to-emerald-600', 
        glowColor: 'rgba(21, 128, 61, 0.5)',
        category: 'backend'
    },
    { 
        id: 12, name: 'REST API', percentage: 85, 
        icon: <TbApi size={32} />, 
        color: 'from-blue-500 to-purple-500', 
        glowColor: 'rgba(59, 130, 246, 0.5)',
        category: 'backend'
    },
    
    // Database
    { 
        id: 13, name: 'PostgreSQL', percentage: 80, 
        icon: <SiPostgresql size={32} />, 
        color: 'from-blue-600 to-indigo-600', 
        glowColor: 'rgba(37, 99, 235, 0.5)',
        category: 'database'
    },
    { 
        id: 14, name: 'MongoDB', percentage: 70, 
        icon: <DiMongodb size={32} />, 
        color: 'from-green-600 to-emerald-600', 
        glowColor: 'rgba(34, 197, 94, 0.5)',
        category: 'database'
    },
    { 
        id: 15, name: 'MySQL', percentage: 75, 
        icon: <SiMysql size={32} />, 
        color: 'from-blue-500 to-cyan-500', 
        glowColor: 'rgba(0, 123, 255, 0.5)',
        category: 'database'
    },
    { 
        id: 16, name: 'Redis', percentage: 65, 
        icon: <SiRedis size={32} />, 
        color: 'from-red-500 to-rose-500', 
        glowColor: 'rgba(239, 68, 68, 0.5)',
        category: 'database'
    },
    
    // Tools
    { 
        id: 17, name: 'Git', percentage: 88, 
        icon: <FaGitAlt size={32} />, 
        color: 'from-orange-600 to-red-600', 
        glowColor: 'rgba(234, 88, 12, 0.5)',
        category: 'tools'
    },
    { 
        id: 18, name: 'Docker', percentage: 74, 
        icon: <FaDocker size={32} />, 
        color: 'from-sky-500 to-blue-500', 
        glowColor: 'rgba(14, 165, 233, 0.5)',
        category: 'tools'
    },
    { 
        id: 19, name: 'Figma', percentage: 85, 
        icon: <FaFigma size={32} />, 
        color: 'from-pink-500 to-rose-500', 
        glowColor: 'rgba(236, 72, 153, 0.5)',
        category: 'tools'
    },
    { 
        id: 20, name: 'Web Scraping', percentage: 85, 
        icon: <TbCloudStar size={32} />, 
        color: 'from-purple-500 to-fuchsia-500', 
        glowColor: 'rgba(168, 85, 247, 0.5)',
        category: 'tools'
    },
];

export const categoryConfig = {
    frontend: {
        label: 'Frontend Development',
        icon: '🎨',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Création d\'interfaces utilisateur modernes et réactives'
    },
    backend: {
        label: 'Backend Development',
        icon: '⚙️',
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        gradient: 'from-green-500 to-emerald-500',
        description: 'APIs performantes et logique métier'
    },
    database: {
        label: 'Base de données',
        icon: '🗄️',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        gradient: 'from-purple-500 to-fuchsia-500',
        description: 'Gestion et optimisation des données'
    },
    tools: {
        label: 'Outils & DevOps',
        icon: '🛠️',
        color: 'text-orange-500',
        bg: 'bg-orange-500/10',
        gradient: 'from-orange-500 to-red-500',
        description: 'Automatisation et déploiement'
    }
};

export const categories = ['all', ...new Set(skillsData.map(s => s.category))];