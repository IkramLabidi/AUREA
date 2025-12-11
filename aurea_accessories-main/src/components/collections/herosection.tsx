export function HeroSection(){
    const handleClick= (sectionId : string)=> {
        const section= document.getElementById(sectionId);
        section?.scrollIntoView({behavior: "smooth"});
    }
    return(
        <div id="herosection"className="min-h-[60vh] flex flex-col justify-center items-center gap-6 px-4 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold">Our <span className="text-amber-500">Collections</span></h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl">Discover our exquisite jewelry collections, each piece handcrafted with precision and passion to elevate your style.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">

                <button className="py-2 px-5 rounded-md bg-amber-500 text-black font-medium border border-amber-500 transition-all duration-300 hover:bg-amber-400 hover:cursor-pointer" onClick={()=>handleClick("gold")}
                >Gold Collection</button>

                <button className="py-2 px-5 rounded-md text-amber-500 font-medium border border-amber-500 transition-all duration-300 hover:bg-amber-500 hover:text-black hover:cursor-pointer" onClick={()=>handleClick("whitegold")}>White Gold Collection</button>

                <button className="py-2 px-5 rounded-md text-amber-500 font-medium border border-amber-500 transition-all duration-300 hover:bg-amber-500 hover:text-black hover:cursor-pointer" onClick={()=>handleClick("diamond")}>Diamond Collection</button>
            </div>
        </div>
    )
}