import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200 blur-3xl"/>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-200 blur-3xl"/>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-medium">Personal Branding</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Hi, I'm Muhammed Ziyan
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A passionate developer crafting clean experiences on the web. I build modern interfaces, solve complex problems, and turn ideas into delightful products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">
              View Projects <ArrowRight className="ml-2 h-5 w-5"/>
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-1">
            <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center text-center p-10">
              <div>
                <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4"/>
                <p className="text-xl font-semibold text-gray-800">Muhammed Ziyan</p>
                <p className="text-gray-500">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
