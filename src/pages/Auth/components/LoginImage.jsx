import React from 'react'

const LoginImage = () => {
  return (
    <div className="hidden lg:flex w-1/2 relative overflow-hidden flex-col justify-center items-center h-full bg-[#070707]">
            
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1569154107747-fb00e3b3430d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExfHx8ZW58MHx8fHx8" className="w-full h-full object-cover opacity-60"/>
                <div className="absolute inset-0 bg-linear-to-l from-void/90 via-void/50 to-void"></div>
            </div>

       
            <div className="relative z-10 text-center animate-fade-in mt-6">
                
            
                <div className="mb-10 flex justify-center perspective-1000 card-container">
                  
                    <div className="tarot-card w-72 h-104 rounded-xl border-2 border-gold/30 relative overflow-hidden bg-linear-to-b from-[#1a1a1a] to-black shadow-[0_0_80px_rgba(212,175,55,0.15)] animate-float group cursor-pointer hover:border-gold/60 transition-colors duration-500">
                        
                  
                        <div className="absolute inset-3 border border-white/10 z-20 flex flex-col justify-between p-4">
                          
                            <div className="flex justify-between text-gold/60 font-display text-sm">
                                <span>VI</span>
                                <span><i className="fa-solid fa-venus"></i></span>
                            </div>

                       
                            <div className="text-center pb-2">
                                <h3 className="font-display text-2xl text-white tracking-widest mb-1 group-hover:text-gold transition-colors duration-500">The Lovers</h3>
                                <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">Major Arcana</span>
                            </div>
                        </div>

                  
                        <div className="absolute inset-0 z-10">
                          
                            <img src="https://images.unsplash.com/photo-1630325937830-c1742dd1a10c?q=80&w=2265&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700 mix-blend-lighten grayscale group-hover:grayscale-0"/>
                         
                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40"></div>
                        </div>
                    </div>
                </div>

                <h2 className="font-display text-6xl text-white mb-4 tracking-tighter drop-shadow-2xl">UNION</h2>
                <div className="flex justify-center items-center gap-4 mb-6">
                    <span className="text-gold/50 text-xs tracking-widest uppercase">Reflection</span>
                    <div className="w-16 h-px bg-white/20"></div>
                    <span className="text-gold/50 text-xs tracking-widest uppercase">Connection</span>
                </div>
                <p className="font-script text-4xl text-gray-200 transform rotate-1 drop-shadow-md">
                    "Alignment of the soul."
                </p>
            </div>
        </div>
  )
}

export default LoginImage