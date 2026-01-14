import React from 'react'

function ProjectCard({ project }) {
  return (
    <div className="bg-black/20 p-4 rounded-2xl shadow-xl flex flex-col h-auto font-mono ">
      <img src={project.image} className="rounded-lg h-40 object-cover mb-3" />

      <h2 className="text-yellow-400 font-bold text-lg sm:text-xl">{project.title}</h2>
      <h3 className="text-yellow-300 font-bold text-sm sm:text-md mb-1">{project.subtitle}</h3>

      <h4 className="underline mb-1 text-sm sm:text-lg font-mono">Key Features</h4>
      <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 font-mono">
        {project.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <h4 className="underline mb-1 text-sm sm:text-lg font-mono">Tech Stack</h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((t, i) => (
          <div key={i} className="flex flex-col items-center text-[10px] sm:text-xs font-mono">
            <img src={t.icon} className="w-4 h-4" />
            {t.name}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-auto font-mono">
        <a href={project.liveLink} target="_blank">
          <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-md text-xs sm:text-sm hover:bg-yellow-300">
            Live →
          </button>
        </a>
        <a href={project.codeLink} target="_blank">
          <button className="border border-yellow-400 text-yellow-300 px-4 py-1.5 rounded-md text-xs sm:text-sm hover:bg-yellow-400 hover:text-black">
            Code →
          </button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard