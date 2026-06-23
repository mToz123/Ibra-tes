'use client'

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-white/60 text-center mb-16 text-lg">Get to know me better</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all hover:scale-105">
              <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent-light rounded-full mx-auto mb-6 flex items-center justify-center text-6xl font-bold animate-float">
                AK
              </div>
              <h3 className="text-2xl font-display font-bold text-center mb-4">Anton Kariskau</h3>
              <p className="text-accent-light text-center mb-2">@Kariskau</p>
              <p className="text-white/60 text-center">Jakarta, Indonesia</p>
            </div>

            <div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Hello! I'm <span className="text-accent-light font-semibold">Anton</span>, a passionate developer and designer 
                based in Jakarta. I love creating elegant solutions to complex problems.
              </p>
              
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                With expertise in modern web technologies, I focus on building 
                intuitive, performant, and beautiful digital experiences that make a difference.
              </p>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the community.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Kariskau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass hover:bg-white/10 rounded-full font-medium transition-all flex items-center gap-2 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://t.me/Kariskau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass hover:bg-white/10 rounded-full font-medium transition-all flex items-center gap-2 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
