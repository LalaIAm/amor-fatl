import React from 'react'

const FloatingCards = () => {
  return (
    <section id="arcana" className="py-32 bg-mist/20 relative overflow-hidden">
      {/* <!-- Decorative Ring --> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] border border-white/5 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <span className="text-gold tracking-[0.5em] text-xs font-bold uppercase block mb-6">
          Select Your Path
        </span>
        <h2 className="font-display text-5xl md:text-7xl text-white">
          The Major Arcana
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center gap-12 perspective-1000">
        {/*}   <!-- Card 1 --> */}
        <div className="card-hover w-full md:w-96 aspect-2/3 bg-linear-to-br from-[#111] to-black border border-white/10 rounded-xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-80 transition-opacity duration-700">
            <img
              src="https://images.unsplash.com/photo-1560080507-13222a338978?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2236&auto=format&fit=crop"
              className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all"
            />
          </div>
          <div className="absolute inset-0 border border-white/5 m-3 flex flex-col justify-between p-8 z-10 bg-linear-to-t from-black/80 via-transparent to-transparent">
            <div className="flex justify-between text-gold/50 font-display text-lg">
              <span>VI</span>
              <i className="fa-solid fa-venus"></i>
            </div>
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-display text-3xl text-white mb-2 tracking-widest">
                The Lovers
              </h3>
              <p className="font-script text-3xl text-gold/80 transform -rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Harmony & Choice
              </p>
            </div>
            <div className="text-center text-gold/30 text-[10px] tracking-[0.3em] uppercase">
              Amor Fati
            </div>
          </div>
        </div>

        {/*}   <!-- Card 2 --> */}
        <div className="card-hover w-full md:w-96 aspect-2/3 bg-linear-to-br from-[#111] to-black border border-white/10 rounded-xl relative overflow-hidden group cursor-pointer md:-mt-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-80 transition-opacity duration-700">
            <img
              src="https://images.unsplash.com/photo-1739373284885-2434cc777001?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2912&auto=format&fit=crop"
              className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all"
            />
          </div>
          <div className="absolute inset-0 border border-white/5 m-3 flex flex-col justify-between p-8 z-10 bg-linear-to-t from-black/80 via-transparent to-transparent">
            <div className="flex justify-between text-gold/50 font-display text-lg">
              <span>XIII</span>
              <i className="fa-solid fa-skull"></i>
            </div>
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-display text-3xl text-white mb-2 tracking-widest">
                Death
              </h3>
              <p className="font-script text-3xl text-gold/80 transform -rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Rebirth
              </p>
            </div>
            <div className="text-center text-gold/30 text-[10px] tracking-[0.3em] uppercase">
              Amor Fati
            </div>
          </div>
        </div>

        {/*}  <!-- Card 3 --> */}
        <div className="card-hover w-full md:w-96 aspect-2/3 bg-linear-to-br from-[#111] to-black border border-white/10 rounded-xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-80 transition-opacity duration-700">
            <img
              src="https://images.unsplash.com/photo-1621324910955-7a0be9fbead4?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2938&auto=format&fit=crop"
              className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all"
            />
          </div>
          <div className="absolute inset-0 border border-white/5 m-3 flex flex-col justify-between p-8 z-10 bg-linear-to-t from-black/80 via-transparent to-transparent">
            <div className="flex justify-between text-gold/50 font-display text-lg">
              <span>II</span>
              <i className="fa-solid fa-moon"></i>
            </div>
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-display text-3xl text-white mb-2 tracking-widest">
                Priestess
              </h3>
              <p className="font-script text-3xl text-gold/80 transform -rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Intuition
              </p>
            </div>
            <div className="text-center text-gold/30 text-[10px] tracking-[0.3em] uppercase">
              Amor Fati
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FloatingCards