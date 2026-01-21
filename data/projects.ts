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
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website to showcase projects, skills, and testimonials. Built with Next.js and Tailwind CSS.',
    techStack: ['Next.js', 'React', 'Tailwind CSS, AI'],
    tags: ['web', 'ai'],
    image: '/portifolioimage.png',
    demo: 'https://tsegaye-tadele.com/',

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
