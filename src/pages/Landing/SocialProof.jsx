import React from 'react'

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-32 bg-black relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <i className="fa-solid fa-quote-left text-4xl text-white/10 mb-6"></i>
        <h2 className="font-serif text-5xl md:text-6xl text-white italic">
          "The cards knew before I dared to admit it."
        </h2>
        <div
          className="w-px h-20 bg-linear-to-b from-gold to-transparent mx-auto mt-8"
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/*}  <!-- Review 1 --> */}
        <div
          className="glass p-10 rounded-sm border-t border-gold/30 group hover:bg-white/5 transition-colors"
        >
          <div className="flex text-gold text-xs mb-6">
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i
            ><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i
            ><i className="fa-solid fa-star"></i>
          </div>
          <p className="text-gray-400 font-light mb-8 leading-relaxed">
            "I downloaded this as a joke. Three readings later, I broke up
            with my toxicity and found peace. The aesthetic is hauntingly
            beautiful."
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden ring-2 ring-offset-2 ring-offset-black ring-gray-800"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <p className="text-white font-display text-sm tracking-widest">
                Elena R.
              </p>
              <p className="font-script text-gold text-2xl -mt-1 opacity-80">
                The Empress
              </p>
            </div>
          </div>
        </div>

                  {/*}  <!-- Review 2 --> */}
        <div
          className="glass p-10 rounded-sm border-t border-crimson/50 shadow-[0px_-10px_40px_rgba(102,15,24,0.1)] transform md:-translate-y-12"
        >
          <div className="flex text-gold text-xs mb-6">
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i
            ><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i
            ><i className="fa-solid fa-star"></i>
          </div>
          <p className="text-gray-400 font-light mb-8 leading-relaxed">
            "Dark, moody, and startlingly accurate. It feels like holding a
            piece of the void in your pocket. Highly addictive."
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden ring-2 ring-offset-2 ring-offset-black ring-crimson/40"
            >
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
                className="object-cover w-full h-full grayscale"
              />
            </div>
            <div>
              <p className="text-white font-display text-sm tracking-widest">
                Marcus V.
              </p>
              <p className="font-script text-gold text-2xl -mt-1 opacity-80">
                The Tower
              </p>
            </div>
          </div>
        </div>

                  {/*}   <!-- Review 3 --> */}
        <div
          className="glass p-10 rounded-sm border-t border-gold/30 group hover:bg-white/5 transition-colors"
        >
          <div className="flex text-gold text-xs mb-6">
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i
            ><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i
            ><i className="fa-solid fa-star"></i>
          </div>
          <p className="text-gray-400 font-light mb-8 leading-relaxed">
            "Finally an astrology app that doesn't look like a cartoon. It
            treats fate with the seriousness it deserves."
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden ring-2 ring-offset-2 ring-offset-black ring-gray-800"
            >
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2864&auto=format&fit=crop"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <p className="text-white font-display text-sm tracking-widest">
                Sarah J.
              </p>
              <p className="font-script text-gold text-2xl -mt-1 opacity-80">
                High Priestess
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SocialProof