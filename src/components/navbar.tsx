import { Link, useNavigate } from "react-router"
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

export function Navbar(){
    const navigate= useNavigate();
    return(
      <nav className="bg-[black] bg-opacity-90 backdrop-blur-sm py-4 px-6 sticky top-0 z-50 border-b border-amber-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button 
            onClick={()=>navigate("/")}
            className="text-2xl font-serif font-bold text-amber-400 tracking-wider hover:cursor-pointer" 
            >AURÉA</button>
            <div className="hidden md:flex space-x-8">
              <Link to={"/"} >
                <div className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-105">Home</div>
              </Link>
              <Link to={"/collections/herosection"} >
                <div className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-105">Collections</div>
              </Link>
              <Link to={"/newarrivals"} >
                <div className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-105">New Arrivals</div>
              </Link>
              <Link to={"/about"} >
                <div className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-105">About</div>
              </Link>
              <Link to={"/contact"} >
                <div className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-105">Contact</div>
              </Link>
            </div>
            <div className="flex items-center space-x-5">
                <IoSearch size={25} className="text-gray-300 hover:text-amber-500 transition-all duration-30 hover:cursor-pointer" />
                <Link to={"profilepage"}>
                  <IoPersonOutline size={25} className="text-gray-300 hover:text-amber-500 transition-all duration-30 hover:cursor-pointer" />
                </Link>
                <button className="relative">
                <Link to={"buysection"}>
                  <MdOutlineShoppingCart size={25} className="text-gray-300 hover:text-amber-500 transition-all duration-30 hover:cursor-pointer"/>
                </Link>
                
                </button>
            </div>
        </div>
      </nav>
    )
}