import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-10 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Muhammed Ziyan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
