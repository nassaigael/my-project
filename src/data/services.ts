export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Traitement de données",
    description: "Extraction, nettoyage et structuration de données pour l'analyse et l'entraînement IA.",
    features: ["Web scraping", "Nettoyage de données", "Structuration", "Validation"],
    icon: "Database"
  },
  {
    id: 2,
    title: "Automatisation Python",
    description: "Création de scripts automatisés pour l'extraction et la validation de données.",
    features: ["Scripts Python", "API integration", "Traitement batch", "Validation automatique"],
    icon: "Code2"
  },
  {
    id: 3,
    title: "Développement Web",
    description: "Création d'applications web modernes avec React, TypeScript et Tailwind CSS.",
    features: ["Frontend React", "Backend API", "Base de données", "Déploiement"],
    icon: "Globe"
  },
  {
    id: 4,
    title: "Gestion de données",
    description: "Création de schémas de données cohérents avec contrôle qualité.",
    features: ["PostgreSQL", "Modélisation", "Optimisation", "Reporting"],
    icon: "BarChart3"
  }
];