import { Crafts } from "../components/about/craftmanship";
import { HeroSectionAbout } from "../components/about/herosection";
import { History } from "../components/about/history";
import { Promise } from "../components/about/Promise";

export function About(){
    return(
        <div className="bg-black flex flex-col justify-center items-center">
            <HeroSectionAbout/>
            <History/>
            <Crafts/>
            <Promise/>
        </div>
    )
}