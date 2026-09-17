function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          React + Tailwind CSS
        </h1>
        <p className="text-slate-400 mb-6">
          Vite boilerplate setup successfully completed!
        </p>
        <div className="inline-block px-4 py-2 bg-slate-700/50 rounded-lg text-sm text-cyan-300 font-mono border border-cyan-500/20">
          Edit <code className="text-pink-400">src/App.jsx</code> to start building
        </div>
      </div>
    </div>
  )
}

export default App
