export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    repoUrl: string;
    demoUrl?: string;
  };
  
  export type Skill = {
    name: string;
    level: number; // 1-10
    icon?: string;
  };