export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Skills</h2>
        <p className="mt-3 text-gray-600">A snapshot of my core toolkit.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-gray-800 font-semibold">{s.name}</p>
              <p className="text-sm text-gray-500">{s.level}</p>
              <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full bg-blue-600`} style={{ width: `${s.level === 'Advanced' ? 90 : s.level === 'Intermediate' ? 70 : 50}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
