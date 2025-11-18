import { motion } from 'framer-motion'
import { Waves, Sun, Bath, Wifi, Car, ShieldCheck, Sparkles, Leaf } from 'lucide-react'

const items = [
  { icon: Waves, title: 'Aegean Access', desc: 'Moments from Palio’s turquoise bays and secluded beaches.' },
  { icon: Sun, title: 'Golden Hour Terraces', desc: 'Expansive decks to soak in Kavala’s legendary sunsets.' },
  { icon: Bath, title: 'Private Wellness', desc: 'Heated pools, outdoor showers, and jacuzzi options.' },
  { icon: Wifi, title: 'Fast Wi‑Fi', desc: 'Remote-work ready with reliable, fast connectivity.' },
  { icon: Car, title: 'Private Parking', desc: 'On-site, secure parking for carefree arrivals.' },
  { icon: ShieldCheck, title: 'Concierge', desc: 'Local tips, reservations, and seamless experiences.' },
  { icon: Sparkles, title: 'Daily Housekeeping', desc: 'Hotel-grade cleaning, fresh linens, and towels.' },
  { icon: Leaf, title: 'Eco Smart', desc: 'Energy-efficient systems and native landscaping.' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-white text-center"
        >
          Signature Amenities
        </motion.h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">
          Designed to delight — thoughtful comforts woven into every stay.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur-xl text-white hover:bg-white/10 transition"
            >
              <i.icon className="w-6 h-6 text-amber-300" />
              <h3 className="mt-4 text-xl font-semibold">{i.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
