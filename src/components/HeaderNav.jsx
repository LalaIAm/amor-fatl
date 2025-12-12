import React from "react";
import { useNavigate } from "react-router";

const HeaderNav = () => {
  const navigate = useNavigate()


  return (
    <nav className="fixed w-full z-40 top-0 left-0 px-6 py-8 transition-all duration-300 bg-linear-to-b fron-void/90 to-transparent backdrop-blur-sm">
      <div className="max-w-360 mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-widest text-gold text-glow">
          AMOR FATI.
        </div>
        <div className="hidden md:flex gap-16 text-xs font-bold tracking-[0.2em] text-white/40 uppercase mix-blend-difference items-center">
          <a
            href="#prophecy"
            className="hover:text-gold transition-colors duration-300"
          >
            Prophecy
          </a>
          <a
            href="#arcana"
            className="hover:text-gold transition-colors duration-300"
          >
            The Arcana
          </a>
          <a
            href="#testimonials"
            className="hover:text-gold transition-colors duration-300"
          >
            Whispers
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hidden md:block text-xs font-bold tracking-widest text-white/70 hover:text-white transition-colors uppercase"
          >
            Log In
          </a>
          <button className="bg-white text-black border border-white px-6 py-2 rounded-sm text-[10px] font-bold tracking-widest hover:bg-gold hover:border-gold transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          onClick={() => navigate('/register')}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
