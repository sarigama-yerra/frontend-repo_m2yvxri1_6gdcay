import { useState } from 'react'

export default function LeadForm({ t, projectId }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, project_id: projectId })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
      <h3 className="text-white text-lg font-semibold">{t.lead.heading}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">{t.lead.name}</label>
          <input required name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 bg-white/10 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">{t.lead.email}</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 bg-white/10 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">{t.lead.phone}</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 bg-white/10 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-slate-300 mb-1">{t.lead.message}</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 bg-white/10 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <button disabled={status==='loading'} className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">
        {status==='loading' ? '…' : t.lead.submit}
      </button>
      {status==='success' && <p className="text-green-400 text-sm mt-2">{t.lead.success}</p>}
      {status==='error' && <p className="text-red-400 text-sm mt-2">Something went wrong.</p>}
    </form>
  )
}
