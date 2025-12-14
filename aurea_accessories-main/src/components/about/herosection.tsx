export function HeroSectionAbout() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 to-black"></div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')]
                   bg-cover bg-center opacity-30 transform transition-transform duration-700 hover:scale-105"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-6 animate-fadeIn">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-400 mb-4 sm:mb-6 drop-shadow-lg">Our Story</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">Crafting exquisite jewelry with passion and precision since 1992</p>
        </div>
        
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,200,100,0.1)_0%,_transparent_80%)]"></div>
    </div>
  );
}
