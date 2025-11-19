import { Link, NavLink } from 'react-router-dom'
import { Globe2, Menu } from 'lucide-react'

export default function Navbar({ locale, setLocale, t }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-slate-900/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-semibold tracking-tight text-lg">Futura Developments</Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({isActive}) => `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'} transition`}>{t.nav.home}</NavLink>
            <NavLink to="/projects" className={({isActive}) => `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'} transition`}>{t.nav.projects}</NavLink>
            <NavLink to="/about" className={({isActive}) => `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'} transition`}>{t.nav.about}</NavLink>
            <NavLink to="/contact" className={({isActive}) => `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'} transition`}>{t.nav.contact}</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setLocale(locale === 'en' ? 'fr' : 'en')} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition">
              <Globe2 size={16} /> {t.nav.language}
            </button>
            <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
