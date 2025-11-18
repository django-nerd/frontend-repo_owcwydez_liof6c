import { motion } from 'framer-motion'

const quotes = [
  {
    text: 'Waking up to the sea every morning felt like a dream. The design, the silence, the sunset—pure magic.',
    author: 'Elena • Munich'
  },
  {
    text: 'Every detail is intentional. The concierge helped us book hidden gems we would have never found.',
    author: 'George • London'
  },
  {
    text: 'The pool, the terraces, the smart home touches—effortless luxury. We extended our stay twice.',
    author: 'Sofia • Athens'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-white"
        >
          Guests are saying
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 text-white backdrop-blur-xl"
            >
              <p className="text-white/90">“{q.text}”</p>
              <footer className="mt-4 text-white/60 text-sm">{q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
