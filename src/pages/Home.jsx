import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectsGrid from '../components/ProjectsGrid'
import LeadForm from '../components/LeadForm'
import { translations, Locale } from '../i18n'

export default function Home() {
  const [locale, setLocale] = useState(Locale.EN)
  const t = translations[locale]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar locale={locale} setLocale={setLocale} t={t} />
      <main>
        <Hero t={t} />
        <div className="relative -mt-16">
          <ProjectsGrid t={t} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 pb-24">
            <LeadForm t={t} />
          </div>
        </div>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">© {new Date().getFullYear()} Futura Developments</footer>
    </div>
  )
}
