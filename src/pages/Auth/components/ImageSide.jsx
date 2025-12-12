import React from "react";

const ImageSide = () => {
  return (
    <div className="hidden lg:flex w-1/2 relative overflow-hidden flex-col justify-center items-center h-screen border-r border-white/10">
   
    <div className="absolute inset-0 z-0">
        
        <img src="https://images.unsplash.com/photo-1603847734787-9e8a3f3e9d60?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5c3RhbCUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D" alt="Mystical Texture" className="w-full h-full object-cover opacity-80 box-decoration-slice"/>
        
      
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
    </div>

    
    <div className="relative z-10 text-center max-w-md p-10 animate-fade-in mt-20">
        
    
        <div className="mb-10 flex justify-center perspective-1000">
            <div className="w-48 h-72 border-2 border-gold/40 rounded-lg flex items-center justify-center backdrop-blur-sm bg-black/40 animate-float shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden group">
          
                <div className="absolute inset-0 m-2 border border-white/10 flex flex-col items-center justify-between p-4">
                    <span className="text-gold font-display text-xs">II</span>
                    <div className="text-center">
                        <i className="fa-solid fa-moon text-4xl text-white mb-2 group-hover:text-gold transition-colors duration-500"></i>
                        <span className="block font-script text-2xl text-white/90">The High Priestess</span>
                    </div>
                    <span className="text-white/20 text-[8px] tracking-[0.2em] uppercase">Amor Fati</span>
                </div>
            </div>
        </div>

        <h2 className="font-display text-5xl text-white mb-2 tracking-widest drop-shadow-2xl">THE ARCANA</h2>
        <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
        <p className="font-script text-4xl text-gray-200 transform -rotate-2 drop-shadow-md">
            Your destiny is waiting.
        </p>
    </div>
</div>
  );
};

export default ImageSide;
