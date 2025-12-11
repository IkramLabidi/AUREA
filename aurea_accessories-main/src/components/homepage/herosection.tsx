import { Link } from "react-router"
export function HeroSection(){
    return(
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 px-6 py-14 bg-black w-full">
            <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-snug">Timeless Elegance,<span className="text-amber-400 ">  Modern Luxury</span></h1>
                <p className="text-gray-400 text-sm sm:text-base">Discover our exquisite collection of luxury gold, silver, and diamond accessories. Each piece is crafted with precision and passion for the modern woman who appreciates fine craftsmanship.</p>
                <div className="flex gap-5 justify-center lg:justify-start">
                    <Link to={"/collections/herosection"}>
                        <button className="bg-amber-500 text-black py-2 px-6 rounded-md hover:bg-amber-400 transition-all duration-300">Shop Collection</button>
                    </Link>
                    <Link to={"about"}>
                        <button className="text-amber-500 border-2 border-amber-500 py-2 px-6 rounded-md hover:bg-amber-500 hover:text-black transition-all duration-300">Learn More</button>
                    </Link>
                    
                </div>
            </div>
            <img src="https://i.pinimg.com/736x/c5/82/a1/c582a1c98129686c5e732b3e7e275df9.jpg" alt="" className="w-64 sm:w-80 lg:w-[28rem] h-auto rounded-md shadow-lg shadow-amber-900/20 object-cover"/>
        
        </div>
    )
}