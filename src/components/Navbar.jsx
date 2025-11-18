import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 text-white/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 shadow-lg shadow-orange-500/30 ring-1 ring-white/20 grid place-items-center">
            <span className="text-white font-black">M</span>
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-wide">Mango Residence</div>
            <div className="text-white/60 text-xs">Palio, Kavala</div>
          </div>
        </a>

        <div className="hidden md:flex items-center">
          <NavLink href="#villas">Villas</NavLink>
          <NavLink href="#amenities">Amenities</NavLink>
          <NavLink href="#location">Location</NavLink>
          <NavLink href="#testimonials">Reviews</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a href="#contact" className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors">
            <Phone className="w-4 h-4" /> Book now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-slate-900/90 backdrop-blur-xl border-b border-white/10">
          <NavLink href="#villas" onClick={close}>Villas</NavLink>
          <NavLink href="#amenities" onClick={close}>Amenities</NavLink>
          <NavLink href="#location" onClick={close}>Location</NavLink>
          <NavLink href="#testimonials" onClick={close}>Reviews</NavLink>
          <a href="#contact" onClick={close} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      )}
    </header>
  )
}
