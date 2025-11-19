import { useState } from 'react'
import Navbar from '../components/Navbar'
import { translations, Locale } from '../i18n'

export default function About() {
  const [locale, setLocale] = useState(Locale.EN)
  const t = translations[locale]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar locale={locale} setLocale={setLocale} t={t} />
      <main className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-semibold mb-6">{t.about.heading}</h1>
        <p className="text-slate-300 text-lg leading-8">{t.about.body}</p>
      </main>
    </div>
  )
}
