function StatsCard({ title, value }) {
  return (
    <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6">
      <p className="text-gray-400 text-sm mb-2">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white">
        {value}
      </h2>
    </div>
  )
}

export default StatsCard