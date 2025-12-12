import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Hero from "./Hero";
import ValueProp from "./ValueProp";
import FloatingCards from "./FloatingCards";
import SocialProof from "./SocialProof";
import CTA from "./CTA";
import Footer from "../../components/Footer";

const Landing = () => {
  return (
    <div className="font-sans">
      <div className="grain-overlay"></div>
      <HeaderNav />
      <Hero />
      {/* Scrolling Marquee */}
      <div className="w-full bg-gold text-black overflow-hidden py-4 border-y border-gold z-20 relative">
        <div className="whitespace-nowrap flex gap-12 animate-[spin-slow_40s_linear_infinite] w-max font-display font-bold tracking-widest text-sm md:text-base px-4 uppercase items-center">
          <span>Love is a Curse</span>
          <span className="font-script text-3xl opacity-60 normal-case font-bold">
            Amor
          </span>
          <span>Fate is a Choice</span>
          <span className="font-script text-3xl opacity-60 normal-case font-bold">
            Fati
          </span>
          <span>The Cards Never Lie</span>
          <span className="font-script text-3xl opacity-60 normal-case font-bold">
            Veritas
          </span>
          <span>Amor Fati</span>
          <span className="font-script text-3xl opacity-60 normal-case font-bold">
            Mors
          </span>
          <span>Love is a Curse</span>
          <span className="font-script text-3xl opacity-60 normal-case font-bold">
            Amor
          </span>
          <span>Fate is a Choice</span>
          <span className="font-script text-3xl opacity-60 normal-case font-bold">
            Fati
          </span>
          <span>The Cards Never Lie</span>
          <span className="font-script text-3xl opacity-60 normal-case font-bold">
            Veritas
          </span>
          <span>Amor Fati</span>
          <span className="font-script text-3xl opacity-60 normal-case font-bold">
            Mors
          </span>
        </div>
          </div>
          <ValueProp />
          <FloatingCards />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
