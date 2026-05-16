function ProjectCard({
  project,
  deleteProject,
  startEditProject,
}) {
  const statusColors = {
    Planning: "bg-blue-500/10 text-blue-400",
    "In Progress": "bg-yellow-500/10 text-yellow-400",
    Completed: "bg-green-500/10 text-green-400",
    Paused: "bg-red-500/10 text-red-400",
  }

  return (
    <div className="group relative overflow-hidden bg-[#161b22] border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
        <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mt-2 leading-6">
            {project.description}
          </p>

          <span
            className={`inline-block mt-4 text-xs px-3 py-1 rounded-full ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => startEditProject(project)}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-semibold transition"
          >
            Edit
          </button>

          <button
            onClick={() => deleteProject(project.id)}
            className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard