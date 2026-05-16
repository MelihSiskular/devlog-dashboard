function Sidebar() {
  return (
    <div className="w-[260px] bg-[#111827] border-r border-white/10 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-white mb-10">
        DevLog 🚀
      </h1>

      <div className="space-y-3">
        <button className="w-full text-left bg-[#1f2937] text-white px-4 py-3 rounded-xl">
          Dashboard
        </button>

        <button className="w-full text-left text-gray-400 hover:text-white px-4 py-3 rounded-xl hover:bg-[#1f2937] transition">
          Projects
        </button>

        <button className="w-full text-left text-gray-400 hover:text-white px-4 py-3 rounded-xl hover:bg-[#1f2937] transition">
          Daily Logs
        </button>

        <button className="w-full text-left text-gray-400 hover:text-white px-4 py-3 rounded-xl hover:bg-[#1f2937] transition">
          Goals
        </button>
      </div>
    </div>
  )
}

export default Sidebar