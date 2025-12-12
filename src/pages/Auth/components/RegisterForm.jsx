import React, { useState } from "react";
import {useNavigate} from 'react-router'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    
    const handleSubmit = e => {
        e.preventDefault();

        navigate('/onboarding')
    }
  return (
    <div className="w-full lg:w-1/2 relative bg-void flex flex-col justify-center h-screen py-12 overflow-y-auto px-6 sm:px-12 lg:px-24">
      <div className="absolute top-0 right-0 p-8 z-20">
        <i className="fa-solid fa-star-of-life text-gold/20 text-4xl animate-spin-slow"></i>
      </div>

      <a
        href="#"
        className="absolute top-8 left-8 text-xs font-bold tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2 group z-50"
      >
        <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>{" "}
        BACK TO VOID
      </a>

      <div
        className="max-w-md w-full mx-auto animate-slide-up relative z-10"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl text-white tracking-widest mb-2 text-glow">
            AMOR FATI.
          </h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase">
            Member Initiation
          </p>
        </div>

        <div className="mb-8 mt-30">
          <h2 className="text-white text-3xl font-serif italic">
            Join the Coven
          </h2>
          <div className="flex items-center gap-4 mt-3">
            <div className="h-px bg-white/10 grow"></div>
            <p className="text-gray-500 text-[10px] tracking-widest uppercase">
              Begin Your Journey
            </p>
            <div className="h-px bg-white/10 grow"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">
                First Name
              </label>
              <input
                type="text"
                className="mystic-input w-full p-4 rounded-sm text-white text-sm placeholder-gray-600 bg-black/40"
                placeholder="Soul Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="group relative">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">
                Last Name
              </label>
              <input
                type="text"
                className="mystic-input w-full p-4 rounded-sm text-white text-sm placeholder-gray-600 bg-black/40"
                placeholder="Lineage"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="group relative">
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">
              Astral Contact
            </label>
            <div className="relative">
              <input
                type="email"
                className="mystic-input w-full p-4 rounded-sm text-white text-sm placeholder-gray-600 pl-10 bg-black/40"
                placeholder="email@universe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="fa-regular fa-envelope absolute left-3 top-4 text-gray-500"></i>
            </div>
          </div>

          <div className="group relative">
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">
              Date of Arrival
            </label>
            <div className="relative">
              <input
                type="date"
                className="mystic-input w-full p-4 rounded-sm text-sm placeholder-gray-600 text-gray-400 bg-black/40"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
          </div>

          <div className="group relative">
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 ml-1 group-focus-within:text-gold transition-colors">
              Secret Cipher
            </label>
            <div className="relative">
              <input
                type="password"
                className="mystic-input w-full p-4 rounded-sm text-white text-sm placeholder-gray-600 pl-10 bg-black/40"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-solid fa-key absolute left-3 top-4 text-gray-500 text-xs text-opacity-70"></i>
              <button
                type="button"
                className="absolute right-3 top-4 text-gray-500 hover:text-white transition-colors"
              >
                <i className="fa-regular fa-eye-slash text-xs"></i>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <input
              type="checkbox"
              id="terms"
              className="text-gold border-gray-700 rounded-sm focus:ring-0 cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-500 select-none"
            >
              I accept the{" "}
              <a
                href="#"
                className="text-white hover:text-gold border-b border-gray-700 hover:border-gold transition-colors"
              >
                Law of 3
              </a>{" "}
              and Terms of Service.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-bold tracking-widest py-4 rounded-sm hover:bg-gold transition-colors duration-500 mt-6 relative overflow-hidden group"
          >
            <span className="relative z-10">INITIATE SEQUENCE</span>
            <div className="absolute inset-0 bg-crimson transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </form>

        <div className="relative flex py-8 items-center">
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

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Already an initiate?
            <a
              href="/login"
              className="font-script text-3xl text-gold hover:text-white transition-colors ml-2 relative top-1"
            >
              Enter Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
