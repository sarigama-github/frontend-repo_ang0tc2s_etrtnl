export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A fast, responsive personal site to showcase work and writing.',
      tags: ['React', 'Tailwind', 'Vite'],
      link: '#',
    },
    {
      title: 'API Integrations',
      description: 'Built integrations connecting third-party services with clean APIs.',
      tags: ['Node.js', 'FastAPI', 'REST'],
      link: '#',
    },
    {
      title: 'UI Components',
      description: 'Reusable component library with modern design and accessibility.',
      tags: ['React', 'TypeScript', 'Storybook'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
            <p className="mt-3 text-gray-600">A few things I've worked on recently.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700">Work With Me</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-gray-50/50">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-200 to-purple-200 mb-4"/>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">{p.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
