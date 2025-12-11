import { useParams } from "react-router"
import { useEffect } from "react"
import { HeroSection } from "../components/collections/herosection"
import { Gold } from "../components/collections/gold"
import { WhiteGold } from "../components/collections/whitegold"
import { Diamond } from "../components/collections/diamond"
export function Collections(){
    
    const {sectionId}= useParams();
    useEffect(()=>{
        if (sectionId){
            const section= document.getElementById(sectionId);
            section?.scrollIntoView({behavior: "smooth"});
        }
    }, [sectionId])
    return(
        <div>
            <HeroSection/>
            <div className="flex flex-col gap-10">
                <Gold/>
                <WhiteGold/>
                <Diamond/>
            </div>
        </div>
    )
}