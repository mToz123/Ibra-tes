'use client'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fadeIn">
          <p className="text-accent-light text-lg mb-4 font-medium opacity-0 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Hi, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 opacity-0 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <span className="text-gradient">Anton Kariskau</span>
          </h1>

          <p className="text-2xl md:text-4xl text-white/80 mb-8 font-light opacity-0 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            Developer • Designer • Creator
          </p>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-slideUp" style={{ animationDelay: '0.5s' }}>
            Crafting beautiful digital experiences with modern technologies.
            Passionate about clean code, elegant design, and innovative solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-accent hover:bg-accent-light rounded-full font-medium transition-all glow hover:scale-105 hover:-translate-y-1"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 glass hover:bg-white/10 rounded-full font-medium transition-all hover:scale-105 hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse-slow">
            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  )
}
