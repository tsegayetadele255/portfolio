// Project data for Tsegaye's Portfolio
export type Project = {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  tags?: string[];
  image?: string;
};

export const projects: Project[] = [

  {
    title: 'I4s',
    description: 'A website project for I4s. Modern, responsive and built for performance.',
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
    tags: ['web'],
    image: '/I4S.png',
    demo: 'https://impactconsultet.com/',
  },
  {
    title: 'I4s AI',
    description: 'A website Application that generates tailored proposal and report based on their needs for I4s PLC with advanced intelligent features.',
    techStack: ['React', 'Next.js', 'AI', 'Tailwind CSS'],
    tags: ['web', 'ai'],
    image: '/I4sai.png',
    demo: 'https://proposalmaker.impactconsultet.com/',
  },
  {
    title: 'Gulit market place',
    description: 'An online marketplace platform connecting buyers and farmers. Features a user-friendly interface and secure transactions.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Express', 'POSTGRESQL', 'JWT', 'i18next', 'Node.js'],
    tags: ['web'],
    image: '/gulit.png',
    demo: 'https://gulit.impactconsultet.com/',
  },
  {
    title: 'CV Maker',
    description: 'A comprehensive tool for creating and visualizing professional resumes.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    tags: ['web'],
    image: '/cv-maker.png',
    demo: 'https://cv-maker-dusky.vercel.app/',
  },
];
