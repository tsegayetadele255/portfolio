"use client";
import { useState } from "react";
import { projects } from '../../../data/projects';

const FILTERS = [
  { label: "All", tag: null },
  { label: "Website", tag: "web" },
  { label: "Mobile", tag: "mobile" },
  { label: "AI Integration", tag: "ai" },
];
const allTags = Array.from(new Set(projects.flatMap(p => p.tags ?? [])));

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);

  const filtered = selectedTag === null ? projects : projects.filter(p => p.tags?.map(t => t.toLowerCase()).includes(selectedTag));
  const featured = filtered.filter(p => p.featured);
  const others = filtered.filter(p => !p.featured);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#18181b] to-[#232326]">
      <main className="max-w-5xl mx-auto py-8 px-4 bg-transparent">

        <h1 className="text-3xl font-extrabold mb-6 text-green-500 drop-shadow-lg">Projects</h1>
        <div className="mb-4 flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button
              key={f.label}
              onClick={() => setSelectedTag(f.tag)}
              className={`px-3 py-1 rounded font-semibold transition-colors duration-200 border border-[#353a3f] shadow-sm 
              ${selectedTag === f.tag
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-[#232326]/80 text-gray-200 hover:bg-green-700 hover:text-white'}
            `}
              suppressHydrationWarning
            >
              {f.label}
            </button>
          ))}
          {/* Show all unique tags as additional filter buttons, but skip those already in FILTERS */}
          {allTags.filter(tag => !FILTERS.some(f => f.tag === tag.toLowerCase())).map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag.toLowerCase())}
              className={`px-3 py-1 rounded font-semibold transition-colors duration-200 border border-[#353a3f] shadow-sm 
              ${selectedTag === tag.toLowerCase()
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-[#232326]/80 text-gray-200 hover:bg-blue-900 hover:text-white'}
            `}
              suppressHydrationWarning
            >
              {tag}
            </button>
          ))}
        </div>
        {featured.length > 0 && <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map(project => (
              <ProjectCard key={project.title} project={project} onClick={() => setModalProject(project)} featured />
            ))}
          </div>
        </div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map(project => (
            <ProjectCard key={project.title} project={project} onClick={() => setModalProject(project)} />
          ))}
        </div>
        {modalProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setModalProject(null)}>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-2xl" onClick={() => setModalProject(null)} suppressHydrationWarning>&times;</button>
              {modalProject.image && <img src={modalProject.image} alt={modalProject.title} className="mb-4 rounded w-full h-48 object-cover" />}
              <h2 className="text-2xl font-bold mb-2">{modalProject.title}</h2>
              <div className="flex flex-wrap gap-2 mb-2">
                {modalProject.techStack.map(tech => (
                  <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              <div className="mb-2 text-gray-600 dark:text-gray-300">{modalProject.description}</div>
              <div className="flex gap-4 mb-2">
                {modalProject.github && <a href={modalProject.github} target="_blank" rel="noopener" className="text-blue-500 hover:underline">GitHub</a>}
                {modalProject.demo && <a href={modalProject.demo} target="_blank" rel="noopener" className="text-green-500 hover:underline">Live Demo</a>}
              </div>
              {modalProject.tags && <div className="flex flex-wrap gap-2 mt-2">
                {modalProject.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 dark:bg-blue-800 text-xs px-2 py-1 rounded">{tag}</span>
                ))}
              </div>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function ProjectCard({ project, onClick, featured }: { project: typeof projects[0], onClick: () => void, featured?: boolean }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg shadow-xl p-6 hover:shadow-2xl transition border-2 
        ${featured ? 'border-blue-500' : 'border-[#353a3f]'} 
        bg-[#232326]/80 backdrop-blur-sm 
        hover:bg-[#232326]/90 
        text-gray-100
      `}
    >
      {featured && <div className="mb-2 text-xs uppercase tracking-wider text-blue-400 font-bold">Featured</div>}
      {project.image && <img src={project.image} alt={project.title} className="mb-3 rounded w-full h-48 object-cover border border-[#353a3f]" />}
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.techStack.map(tech => (
          <span key={tech} className="bg-[#232326]/70 text-gray-100 text-xs px-2 py-1 rounded border border-[#353a3f]">{tech}</span>
        ))}
      </div>
      <p className="mb-2 text-gray-100 line-clamp-3">{project.description}</p>
      <div className="flex gap-4">
        {project.github && <a href={project.github} target="_blank" rel="noopener" className="text-blue-500 hover:underline">GitHub</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener" className="text-green-500 hover:underline">Live Demo</a>}
      </div>
      {project.tags && <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-[#232326]/70 text-gray-100 text-xs px-2 py-1 rounded border border-[#353a3f]">{tag}</span>
        ))}
      </div>}
    </div>
  );
}
