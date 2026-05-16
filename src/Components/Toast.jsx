function Toast({ message }) {
  if (!message) return null

  return (
    <div className="fixed top-6 right-6 z-50 bg-green-500 text-black px-5 py-3 rounded-2xl font-bold shadow-lg shadow-green-500/30 animate-bounce">
      {message}
    </div>
  )
}

export default Toast