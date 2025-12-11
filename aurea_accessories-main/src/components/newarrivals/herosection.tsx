export function HeroSection() {
  const handleClick=(sectionId: string)=>{
    const arrivals= document.getElementById(sectionId);
    arrivals?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-black"></div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-500 mb-6 tracking-wide">New Arrivals</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">Discover our latest collection of exquisite jewelry pieces, crafted with precision and passion for the modern connoisseur.</p>
            <div className="flex justify-center mt-10">
                <button className="bg-amber-500 text-black py-3 px-6 rounded-md font-medium hover:bg-amber-400 transition-all duration-300k hover:cursor-pointer" 
                onClick={()=> handleClick("newArrivals")}
                >Shop Now</button>
            </div>
        </div>
    </div>
  );
}
