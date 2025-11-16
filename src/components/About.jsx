export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm a self-driven engineer who loves building for the web. I specialize in JavaScript/TypeScript, React, and backend services. I value clean code, thoughtful UX, and rapid iteration. Outside of coding, I enjoy learning, reading, and exploring new technologies.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Remote / Open to relocate</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold text-gray-800">Experience</p>
                <p className="text-gray-600">2+ years</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold text-gray-800">Focus</p>
                <p className="text-gray-600">Front-end & APIs</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold text-gray-800">Interests</p>
                <p className="text-gray-600">UI/UX, AI, Open-source</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800">Highlights</h3>
            <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-5">
              <li>Built responsive, accessible UIs for multiple products</li>
              <li>Integrated REST APIs and optimized data fetching</li>
              <li>Led refactors that improved performance and maintainability</li>
              <li>Collaborated with designers and stakeholders for better UX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
