import React from "react";

/* Mystery Box */
const ValueProp = () => {
  return (
    <section id="prophecy" class="py-32 md:py-48 relative">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
        {/* <!-- Left: Image Composition --> */}
        <div class="md:col-span-7 relative">
          <div class="relative z-10 aspect-3/4 overflow-hidden rounded-sm crimson-glow group">
            <img
              src="https://images.unsplash.com/photo-1627764574958-fb54cd7d7448?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFyb3QlMjByZWFkaW5nfGVufDB8fDB8fHww"
              class="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              alt="Tarot Spread"
            />
            <div class="absolute inset-0 bg-linear-to-t from-void via-transparent to-transparent"></div>

            {/*  <!-- Floating Card Element --> */}
            <div class="absolute bottom-12 -right-8 w-48 h-72 bg-[#0a0a0a] border border-gold/30 rounded-lg shadow-2xl hidden md:flex items-center justify-center glass animate-float z-20">
              <div class="text-center p-4">
                <i class="fa-solid fa-heart-crack text-4xl text-crimson mb-2 opacity-80"></i>
                <p class="font-display text-gold text-xs tracking-widest uppercase mb-1">
                  The Lovers
                </p>
                <span class="font-script text-4xl text-white transform -rotate-12 block mt-2">
                  Reversed
                </span>
              </div>
            </div>
          </div>
          {/*   <!-- Decorative backdrop --> */}
          <div class="absolute -top-10 -left-10 w-full h-full border border-white/5 z-0 pointer-events-none"></div>
        </div>

        {/*   <!-- Right: Copy --> */}
        <div class="md:col-span-5">
          <span class="block text-crimson tracking-[0.4em] text-xs font-bold uppercase mb-6 animate-pulse">
            The Methodology
          </span>
          <h2 class="font-serif text-5xl md:text-7xl text-white leading-none mb-10">
            Ancient Wisdom,
            <br />
            {/*   <!-- Corinthia Accent --> */}
            <span class="font-script text-purple-400 text-7xl md:text-8xl block mt-2 ml-2 opacity-90 transform -rotate-2 origin-left">
              Modern Heartbreak.
            </span>
          </h2>
          <p class="text-gray-400 text-lg leading-relaxed mb-12 font-light border-l-2 border-gold/20 pl-6">
            Forget generic horoscopes. Amor Fati uses archaic symbolism fused
            with adaptive learning to interpret the intricate web of your
            romantic life. We don't just predict; we reveal the shadow work
            required to find union.
          </p>

          <div class="space-y-10">
            <div class="group cursor-pointer">
              <div class="flex items-baseline justify-between border-b border-white/10 pb-4 mb-2">
                <h3 class="text-xl font-display text-white group-hover:text-gold transition-colors">
                  Daily Romance Pull
                </h3>
                <span class="font-script text-4xl text-gray-600 group-hover:text-gold">
                  i.
                </span>
              </div>
              <p class="text-sm text-gray-500 h-0 overflow-hidden group-hover:h-auto group-hover:py-2 transition-all duration-300">
                One card to define your heart's trajectory for the next 24
                hours.
              </p>
            </div>
            <div class="group cursor-pointer">
              <div class="flex items-baseline justify-between border-b border-white/10 pb-4 mb-2">
                <h3 class="text-xl font-display text-white group-hover:text-gold transition-colors">
                  Twin Flame Tracking
                </h3>
                <span class="font-script text-4xl text-gray-600 group-hover:text-gold">
                  ii.
                </span>
              </div>
              <p class="text-sm text-gray-500 h-0 overflow-hidden group-hover:h-auto group-hover:py-2 transition-all duration-300">
                Synastry charts generated from the ether.
              </p>
            </div>
            <div class="group cursor-pointer">
              <div class="flex items-baseline justify-between border-b border-white/10 pb-4 mb-2">
                <h3 class="text-xl font-display text-white group-hover:text-gold transition-colors">
                  Midnight Confessions
                </h3>
                <span class="font-script text-4xl text-gray-600 group-hover:text-gold">
                  iii.
                </span>
              </div>
              <p class="text-sm text-gray-500 h-0 overflow-hidden group-hover:h-auto group-hover:py-2 transition-all duration-300">
                Anonymous spiritual advice from the coven.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
