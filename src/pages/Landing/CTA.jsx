import React from 'react'

const CTA = () => {
  return (
    <section
    className="py-40 relative bg-[#0a0a0a] overflow-hidden flex items-center justify-center"
  >
          { /* <!-- Glow effect --> */}
    <div
      className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black via-black to-crimson/10 opacity-80 pointer-events-none"
    ></div>

    <div className="relative z-10 text-center max-w-4xl px-6">
      <h2
        className="font-display text-6xl md:text-9xl text-white mb-2 tracking-tighter"
      >
        TEMPT FATE
      </h2>
      <p
        className="font-script text-4xl md:text-5xl text-gray-400 mb-16 transform -rotate-2"
      >
        Your destiny is waiting to be read.
      </p>
      <div className="flex flex-col gap-4 items-center">
        <button
          className="px-12 py-5 bg-white text-black font-bold tracking-widest text-lg hover:bg-gold hover:scale-105 transition-all duration-300 rounded-sm w-full md:w-auto min-w-[300px] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
        >
          CREATE FREE ACCOUNT
        </button>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-gray-500 text-sm">Already initiated?</span>
          <a
            href="#"
            className="text-white font-bold border-b border-gold pb-0.5 hover:text-gold transition-colors text-sm tracking-widest uppercase"
            >Login Here</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CTA