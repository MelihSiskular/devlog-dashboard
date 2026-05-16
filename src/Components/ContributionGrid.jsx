function ContributionGrid({ contributionCount, totalUpdates, resetCount }) {
  const totalCells = 35
  const days = Array.from({ length: totalCells })

  return (
    <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 shadow-xl shadow-black/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            Contribution Activity
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Keep your project progress consistent.
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-400">
            {totalUpdates} total updates
          </p>
          <p className="text-xs text-green-400 mt-1">
            {resetCount} completed cycles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map((_, index) => {
          const isActive = index < contributionCount

          return (
            <div
              key={index}
              className={`h-5 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-green-500 shadow-lg shadow-green-500/30 scale-105"
                  : "bg-[#1b2330]"
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ContributionGrid