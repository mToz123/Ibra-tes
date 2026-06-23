'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS/JS', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vercel / Netlify', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Docker', level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-center">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-white/60 text-center mb-16 text-lg">Technologies I work with</p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-accent-light">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/90 font-medium">{skill.name}</span>
                        <span className="text-white/60">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
