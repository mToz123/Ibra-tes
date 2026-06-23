'use client'

export default function Projects() {
  const projects = [
    {
      title: 'AI Task Manager',
      description: 'Smart task management with AI-powered prioritization, deadline prediction, and automated scheduling features.',
      tags: ['Next.js', 'OpenAI', 'PostgreSQL'],
      link: '#',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory, payment integration, and responsive design.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Real-time analytics dashboard with interactive charts, data visualization, and export features.',
      tags: ['React', 'Chart.js', 'Firebase'],
      link: '#',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Portfolio CMS',
      description: 'Headless CMS for portfolio websites with markdown support, media management, and API endpoints.',
      tags: ['TypeScript', 'Express', 'MongoDB'],
      link: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/60 text-center mb-16 text-lg">Some of my recent work</p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 hover:-translate-y-2 group cursor-pointer"
              >
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <div className="text-6xl font-bold opacity-20">
                    {project.title.substring(0, 2)}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-light hover:text-accent transition-colors font-medium group-hover:translate-x-2 transition-transform"
                >
                  View Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
