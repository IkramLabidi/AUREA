import { History } from "../components/about/history"
import { Crafts } from "../components/about/craftsmanship"
import { HeroSectionAbout } from "../components/about/herosection"

export function About(){
    return(
        <div className="flex flex-col justify-center items-center">
            <HeroSectionAbout/>
            <History/>
            <Crafts/>
            <div className="h-80 flex flex-col justify-center items-center gap-10 py-10">
                <h1 className="text-3xl text-amber-400 font-bold font-serif">Experience AURÉA</h1>
                <p className="text-gray-400 font-bold">Visit our boutiques to discover the full AURÉA experience and explore our collections in person.</p>
                <button className="bg-amber-400 text-black py-2 px-10 rounded-md font-bold hover:cursor-pointer">Find a Boutique</button>
            </div>
        </div>
    )
}