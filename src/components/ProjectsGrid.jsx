import { useEffect, useState } from 'react'

export default function ProjectsGrid({ t }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/projects`)
        if (!res.ok) throw new Error('Failed to load projects')
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (loading) return <div className="text-slate-300">Loading…</div>
  if (error) return <div className="text-red-400">{error}</div>

  return (
    <section id="projects" className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-semibold text-white">{t.projects.heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.id} href={`/projects/${p.id}`} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${p.thumbnail})` }} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-600 text-white">{p.status}</span>
                </div>
                <p className="mt-2 text-slate-300 text-sm">{p.location}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                  <span>{t.projects.available}: {p.available_units}</span>
                  <span className="text-blue-400 group-hover:translate-x-0.5 transition">{t.projects.viewDetails} →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
