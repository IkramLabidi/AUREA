import { Link } from "react-router"
export function HeroSectionHomePage(){
    return(
        <div className="flex justify-center items-center gap-10 h-150 ">
            <div className="flex flex-col gap-5 w-150 h-75 p-10 text-start">
                <h1 className="text-4xl font-serif font-bold ">Timeless Elegance,<span className="text-amber-400 ">  Modern Luxury</span></h1>
                <p className="text-gray-400">Discover our exquisite collection of luxury gold, silver, and diamond accessories. Each piece is crafted with precision and passion for the modern woman who appreciates fine craftsmanship.</p>
                <div className="flex items-center justify-center gap-5">
                    <Link to={"/collections/herosection"}>
                        <button className="bg-amber-500 text-black py-2 px-5 rounded-md hover:cursor-pointer">Shop Collection</button>
                    </Link>
                    <Link to={"about"}>
                        <button className="text-amber-500 border-2 py-2 px-5 rounded-md hover:cursor-pointer">Learn More</button>
                    </Link>
                    
                </div>
            </div>
            <img src="https://i.pinimg.com/736x/c5/82/a1/c582a1c98129686c5e732b3e7e275df9.jpg" alt="" className="w-120 h-120 rounded-md"/>
        
        </div>
    )
}