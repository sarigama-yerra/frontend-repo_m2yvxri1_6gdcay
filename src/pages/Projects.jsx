import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { translations, Locale } from '../i18n'

export default function Projects() {
  const [locale, setLocale] = useState(Locale.EN)
  const t = translations[locale]
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/projects`)
      const data = await res.json()
      setProjects(data)
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar locale={locale} setLocale={setLocale} t={t} />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-semibold mb-8">{t.projects.heading}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.id} href={`/projects/${p.id}`} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
              <div className="h-52 bg-cover bg-center" style={{ backgroundImage: `url(${p.thumbnail})` }} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-600 text-white">{p.status}</span>
                </div>
                <p className="mt-2 text-slate-300 text-sm">{p.location}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
