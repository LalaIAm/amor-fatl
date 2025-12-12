import React from 'react'

function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-void border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-sm">
          <div className="font-display font-bold text-3xl tracking-widest text-white mb-6">
            AMOR FATI.
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            A digital exploration of romance, occultism, and the inevitable.
            Crafted in the shadows for those who seek the light.
            <br />
            <br />
            <span className="text-gold/60 font-script text-2xl">
              Warning: Readings may cause irreversible self-reflection.
            </span>
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div className="flex flex-col gap-6">
            <span className="text-white font-bold uppercase tracking-widest text-[10px]">
              Company
            </span>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">
              Manifesto
            </a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">
              The Coven
            </a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white font-bold uppercase tracking-widest text-[10px]">
              Support
            </span>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">
              FAQ
            </a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">
              Reading Ethics
            </a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white font-bold uppercase tracking-widest text-[10px]">
              Social
            </span>
            <div className="flex gap-6 text-lg">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-700 tracking-wider uppercase">
        <p>
          &copy; 2023 Amor Fati Inc. All rights reserved in this realm and the
          next.
        </p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-500">
            Terms of Fate
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer