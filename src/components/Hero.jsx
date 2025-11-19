import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight drop-shadow-xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg text-slate-200/90">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition">
              {t.actions.exploreProjects}
            </a>
            <a href="/contact" className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition">
              {t.actions.contactUs}
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900" />
    </section>
  )
}
