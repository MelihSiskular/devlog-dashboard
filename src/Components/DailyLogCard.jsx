function DailyLogCard({ type, title, date, note }) {
  const typeStyles = {
    added: {
      icon: "✅",
      color: "bg-green-500/10 text-green-400",
    },
    updated: {
      icon: "✏️",
      color: "bg-yellow-500/10 text-yellow-400",
    },
    deleted: {
      icon: "🗑️",
      color: "bg-red-500/10 text-red-400",
    },
  }

  const currentType = typeStyles[type] || typeStyles.added

  return (
    <div className="group bg-[#161b22] border border-white/10 rounded-2xl p-5 hover:border-green-500/30 transition-all duration-300">
      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${currentType.color}`}
          >
            {currentType.icon}
          </div>

          <div>
            <h3 className="text-white font-bold">
              {title}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              {note}
            </p>
          </div>
        </div>

        <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
          {date}
        </span>
      </div>
    </div>
  )
}

export default DailyLogCard