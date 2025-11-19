import { useState } from 'react'
import Navbar from '../components/Navbar'
import LeadForm from '../components/LeadForm'
import { translations, Locale } from '../i18n'

export default function Contact() {
  const [locale, setLocale] = useState(Locale.EN)
  const t = translations[locale]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar locale={locale} setLocale={setLocale} t={t} />
      <main className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <LeadForm t={t} />
      </main>
    </div>
  )
}
