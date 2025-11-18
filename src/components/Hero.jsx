import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Now renting luxury villas in Palio, Kavala
          </div>
          <h1 className="text-5xl sm:text-6xl font-black leading-tight">
            Mango Residence
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500">Mediterranean Luxury Retreats</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Wake up to the Aegean, embrace glassy modern design, and enjoy resort-level amenities. Interactive, immersive, unforgettable.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#villas" className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-shadow">Explore villas</a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20">Book your stay</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {["Seafront views","Private pools","Smart home","Concierge"].map((item, i) => (
            <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-xl text-white p-4 ring-1 ring-white/20">
              <p className="text-sm opacity-80">{item}</p>
              <p className="text-2xl font-bold mt-2">{['180°','Infinity','IoT','24/7'][i]}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        Scroll
      </div>
    </section>
  )
}
