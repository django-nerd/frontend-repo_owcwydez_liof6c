import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, CalendarDays } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Simulate send for now
    setTimeout(() => setStatus('Thanks! We will get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-black">Plan your stay</h2>
          <p className="mt-4 text-white/80">Tell us your dates and preferences — we’ll tailor the experience.</p>
          <div className="mt-6 space-y-3 text-white/80">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +30 210 000 0000</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> bookings@mangoresidence.com</p>
            <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /> Flexible check-in/out</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-white/70 text-sm">First name</label>
              <input required className="mt-1 w-full rounded-xl bg-white/10 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div>
              <label className="text-white/70 text-sm">Last name</label>
              <input required className="mt-1 w-full rounded-xl bg-white/10 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-white/70 text-sm">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl bg-white/10 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-white/70 text-sm">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-xl bg-white/10 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold">Send inquiry</button>
          {status && <p className="mt-3 text-white/80">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}
