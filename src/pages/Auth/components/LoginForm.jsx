import React from "react";
import {useNavigate} from 'react-router'

const LoginForm = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full lg:w-1/2 relative bg-void flex flex-col justify-center items-center h-full px-6 sm:px-12 lg:px-24 border-r border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <a
        href="#"
        className="absolute top-8 left-8 text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2 group z-50"
      >
        <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>{" "}
        BACK TO HOME
      </a>

      <div
        className="max-w-md w-full animate-slide-up relative z-10"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="text-center mb-6 mt-12">
          <h1 className="font-display text-4xl text-white tracking-widest mb-1 text-glow">
            AMOR FATI.
          </h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase">
            Return to the Source
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-white text-2xl font-serif italic text-center">
            Welcome Back, Seeker
          </h2>
          <div className="flex items-center gap-4 mt-2 justify-center">
            <div className="h-px bg-white/10 w-16"></div>
            <p className="text-gray-500 text-[10px] tracking-widest uppercase">
              Resume Your Journey
            </p>
            <div className="h-px bg-white/10 w-16"></div>
          </div>
        </div>
        <form className="space-y-4">
          <div className="group relative">
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 ml-1 group-focus-within:text-gold transition-colors">
              Astral Contact
            </label>
            <div className="relative">
              <input
                type="email"
                className="mystic-input w-full p-3 rounded-sm text-white text-sm placeholder-gray-600 pl-10 bg-black/40"
                placeholder="email@universe.com"
              />
              <i className="fa-regular fa-envelope absolute left-3 top-3.5 text-gray-500"></i>
            </div>
          </div>

          <div className="group relative">
            <div className="flex justify-between items-center mb-1 ml-1">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 group-focus-within:text-gold transition-colors">
                Secret Cipher
              </label>
              <a
                href="#"
                className="text-[10px] text-gray-500 hover:text-gold transition-colors italic"
              >
                Forgot cipher?
              </a>
            </div>
            <div className="relative">
              <input
                type="password"
                className="mystic-input w-full p-3 rounded-sm text-white text-sm placeholder-gray-600 pl-10 bg-black/40"
                placeholder="••••••••"
              />
              <i className="fa-solid fa-key absolute left-3 top-3.5 text-gray-500 text-xs text-opacity-70"></i>
              <button
                type="button"
                className="absolute right-3 top-3.5 text-gray-500 hover:text-white transition-colors"
              >
                <i className="fa-regular fa-eye-slash text-xs"></i>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="text-gold border-gray-700 rounded-sm focus:ring-0 cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-xs text-gray-500 select-none cursor-pointer"
            >
              Keep me connected to the ether
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-bold tracking-widest py-3 rounded-sm hover:bg-gold transition-colors duration-500 relative overflow-hidden group mt-2"
          >
            <span className="relative z-10">ENTER THE VOID</span>
            <div className="absolute inset-0 bg-crimson transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </form>
        
        <div className="relative flex py-6 items-center">
          <div className="grow border-t border-white/5"></div>
          <span className="shrink-0 mx-4 text-gray-600 text-[10px] uppercase tracking-widest">
            Or Invoke via
          </span>
          <div className="grow border-t border-white/5"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-3 border border-white/10 rounded-sm hover:bg-white/5 hover:border-white/20 transition-all group">
            <i className="fa-brands fa-apple text-white group-hover:scale-110 transition-transform"></i>
            <span className="text-xs text-gray-400 group-hover:text-white font-bold">
              Apple
            </span>
          </button>
          <button className="flex items-center justify-center gap-3 py-3 border border-white/10 rounded-sm hover:bg-white/5 hover:border-white/20 transition-all group">
            <i className="fa-brands fa-google text-white group-hover:scale-110 transition-transform"></i>
            <span className="text-xs text-gray-400 group-hover:text-white font-bold">
              Google
            </span>
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Not yet initiated?
            <a
              href="#"
                          className="font-script text-2xl text-gold hover:text-white transition-colors ml-2 relative top-1"
                          onClick={() => navigate('/register')}
            >
              Manifest Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
