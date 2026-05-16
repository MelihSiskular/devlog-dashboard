import { projectStatuses } from "../Interfaces/Project"

function ProjectForm({
  newProject,
  setNewProject,
  addProject,
  editingId,
  cancelEdit,
}) {
  return (
   <div
  className={`relative overflow-hidden border rounded-2xl p-6 transition-all duration-300 ${
    editingId
      ? "bg-yellow-500/5 border-yellow-500/40 shadow-lg shadow-yellow-500/10"
      : "bg-[#161b22] border-white/10 shadow-xl shadow-black/20"
  }`}
>
  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 pointer-events-none" />

  <div className="relative z-10">
    
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-xl font-bold text-white">
        {editingId ? "Editing Project ✏️" : "Add New Project"}
      </h2>

      {editingId && (
        <span className="text-yellow-400 text-sm">
          Update mode active
        </span>
      )}
    </div>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Project name"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({
              ...newProject,
              title: e.target.value,
            })
          }
          className="bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500 transition"
        />

        <textarea
          placeholder="What did you work on?"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({
              ...newProject,
              description: e.target.value,
            })
          }
          className="bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 text-white outline-none resize-none h-28 focus:border-green-500 transition"
        />

        <select
          value={newProject.status}
          onChange={(e) =>
            setNewProject({
              ...newProject,
              status: e.target.value,
            })
          }
          className="bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500 transition"
        >
          {projectStatuses.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>

        <div className="flex gap-3">
          <button
            onClick={addProject}
            className={`flex-1 font-bold py-3 rounded-xl transition ${
              editingId
                ? "bg-yellow-500 hover:bg-yellow-400 text-black"
                : "bg-green-500 hover:bg-green-400 text-black"
            }`}
          >
            {editingId ? "Update Project" : "Add Project"}
          </button>

          {editingId && (
            <button
              onClick={cancelEdit}
              className="px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition"
            >
              Cancel
            </button>
          )}
          </div>
        </div>
      </div>
    </div>
  )
   

}

export default ProjectForm