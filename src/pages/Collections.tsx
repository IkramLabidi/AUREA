import { useParams } from "react-router"
import { useEffect } from "react"
import { HeroSectionCollections } from "../components/collections/herosectioncollections"
import { GoldCollection } from "../components/collections/goldcollection"
import { SilverCollection } from "../components/collections/silvercollection"
import { DiamondCollection } from "../components/collections/diamondcollection"
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
            <HeroSectionCollections/>
            <div className="flex flex-col gap-10">
                <GoldCollection/>
                <SilverCollection/>
                <DiamondCollection/>
            </div>
        </div>
    )
}