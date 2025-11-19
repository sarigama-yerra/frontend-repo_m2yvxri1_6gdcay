import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import LeadForm from '../components/LeadForm'
import { translations, Locale } from '../i18n'

export default function ProjectDetail() {
  const { id } = useParams()
  const [locale, setLocale] = useState(Locale.EN)
  const t = translations[locale]
  const [project, setProject] = useState(null)

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/projects/${id}`)
      const data = await res.json()
      setProject(data)
    }
    load()
  }, [id])

  if (!project) return <div className="min-h-screen bg-slate-900 text-white" />

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar locale={locale} setLocale={setLocale} t={t} />
      <main className="pt-24">
        <div className="relative aspect-[16/7] max-w-7xl mx-auto w-full rounded-2xl overflow-hidden border border-white/10">
          {project.hero_video ? (
            <video src={project.hero_video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
          ) : (
            <div className="w-full h-full bg-white/5" />
          )}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-semibold">{project.title}</h1>
            <p className="mt-3 text-slate-300">{project.description}</p>
            {project.virtual_tour_url && (
              <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-white/10">
                <iframe className="w-full h-full" src={project.virtual_tour_url} title="Virtual Tour" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            )}
          </div>
          <div>
            <LeadForm t={t} projectId={project.id} />
          </div>
        </div>
      </main>
    </div>
  )
}
