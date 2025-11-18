import { motion } from 'framer-motion'

const villas = [
  {
    name: 'Villa Aura',
    tagline: 'Hillside serenity with cinematic sunsets',
    image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2000&auto=format&fit=crop',
    badges: ['3 Bedrooms', 'Private Pool', 'Sea View']
  },
  {
    name: 'Villa Sol',
    tagline: 'Minimal glass house above the Aegean',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
    badges: ['4 Bedrooms', 'Infinity Pool', 'Smart Home']
  },
  {
    name: 'Villa Lapis',
    tagline: 'Coastal elegance steps from the sand',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop',
    badges: ['2 Bedrooms', 'Jacuzzi', 'Garden']
  },
]

export default function Villas() {
  return (
    <section id="villas" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(251,191,36,.08),transparent_40%),radial-gradient(600px_circle_at_80%_10%,rgba(244,114,182,.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-white text-center"
        >
          Our Villas
        </motion.h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">
          Architectural statements crafted for slow mornings and golden hour memories.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {villas.map((v, idx) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden relative bg-white/5 ring-1 ring-white/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{v.name}</h3>
                <p className="text-white/80">{v.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {v.badges.map(b => (
                    <span key={b} className="px-3 py-1 text-xs rounded-full bg-white/10 ring-1 ring-white/20">{b}</span>
                  ))}
                </div>
                <a href="#contact" className="mt-4 inline-block px-4 py-2 rounded-full bg-white text-slate-900 font-semibold">Request availability</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
