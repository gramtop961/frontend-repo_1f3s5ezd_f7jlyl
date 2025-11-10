import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.currentTarget))
    console.log('Contact form submitted:', formData)
    setStatus('Thanks — we\'ll be in touch.')
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Contact</h1>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">Name</label>
              <input name="name" required className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-white/40" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">Email</label>
              <input type="email" name="email" required className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-white/40" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">Message</label>
              <textarea name="message" rows="5" required className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-white/40"></textarea>
            </div>
            <button className="justify-self-start px-6 py-3 bg-white text-black hover:bg-white/90 transition uppercase text-xs tracking-widest">Send</button>
          </form>

          {status && <p className="mt-6 text-white/80">{status}</p>}

          <div className="mt-12 flex items-center gap-6 text-sm uppercase tracking-wider text-white/70">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </section>
    </div>
  )
}
