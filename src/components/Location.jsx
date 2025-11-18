import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section id="location" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-black">Palio, Kavala</h2>
          <p className="mt-4 text-white/80">
            A serene seaside village nestled along the Aegean coast, just minutes from historic Kavala. Crystal waters, pine-lined coves, and a relaxed Mediterranean rhythm.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• 10 min to Kavala city</li>
            <li>• 35 min to Kavala International Airport</li>
            <li>• Ferry connections to Thassos Island</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl"
        >
          <iframe
            title="Palio Kavala Map"
            src="https://www.google.com/maps?q=Palio%20Kavala&z=12&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
