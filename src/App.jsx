import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Villas from './components/Villas'
import Amenities from './components/Amenities'
import Location from './components/Location'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Villas />
      <Amenities />
      <Location />
      <Testimonials />
      <Contact />
      <footer className="py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Mango Residence • Palio, Kavala
      </footer>
    </div>
  )
}

export default App
