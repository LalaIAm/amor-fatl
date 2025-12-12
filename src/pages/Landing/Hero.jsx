import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-void">
      <div className="absolute inset-0 z-0 pointer-events-none ">
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-crimson/5 rounded-full blur-[180px]"></div>
        <img
          src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2781&auto=format&fit=crop"
          alt="Cosmic Texture"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-radial-gradient-void"></div>
        <div className="absolute inset-0 bg-linear-to-b from-void/50 via-transparent to-void"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center h-full justify-center pt-20">
        <div className="mb-8 opacity-60 animate-float">
          <i className="fa-solid fa-eye text-xl text-gold/60"></i>
        </div>
        <h1 className="font-display mdfont-display text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.8] text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-800 tracking-tighter animate-fade-in-up py-4 relative">
          DO THE STARS
          <br />
          <span
            className="block mt-2 md:-mt-8 text-gold font-script text-[5rem] md:text-[8rem] lg:text-[11rem] tracking-normal text-glow opacity-90 -rotate-3 transform origin-center script-load"
            style={{ textShadow: "0 0 40px rgba(212, 175, 55, 0.2)" }}
          >
            Bleed for You?
          </span>
        </h1>
        <p
          className="font-serif text-xl md:text-2xl text-gray-400 max-w-2xl italic leading-relaxed mt-10 mb-16 opacity-80 animate-fade-in-up md:px-0 px-4"
          style={{ animationDelay: "0.2s" }}
        >
          The algorithm of fate. A digital sanctuary for the lovelorn, the
          seekers, and the cursed.
        </p>
        <div
          className="flex flex-col md:flex-row gap-8 items-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button className="group relative px-12 py-5 bg-white text-black font-bold tracking-widest overflow-hidden rounded-sm hover:scale-105 transition-transform duration-500">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              DRAW YOUR CARDS
            </span>

            <div className="absolute inset-0 bg-crimson transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </button>

          <div className="h-px w-12 bg-white/20 hidden md:block"></div>

          <button className="text-xs tracking-[0.3em] text-gray-400 hover:text-gold transition-colors uppercase border-b border-transparent hover:border-gold pb-1 font-sans">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute bottom-12 w-full flex justify-center animate-bounce opacity-30">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-widest uppercase text-white/50 font-sans">
            Scroll to Divining
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero