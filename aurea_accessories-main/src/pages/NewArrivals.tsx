import { HeroSection } from "../components/newarrivals/herosection"
import { Features } from "../components/newarrivals/features"
import { SeasonalCollections } from "../components/newarrivals/seasons/sesonalCollections"


export function NewArrivals(){
    return(
        <div className="grid grid-cols-1 gap-10">
            <HeroSection/>
            <Features/>
            <SeasonalCollections/>
        </div>
    )
}