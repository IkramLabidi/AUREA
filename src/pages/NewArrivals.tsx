import { HeroSectionArrivals } from "../components/newarrivals/herosectionarrivals"
import { LatestAdditions } from "../components/newarrivals/latestadditions"
import { SeasonalCollections } from "../components/newarrivals/seasonalcollections/seasonalcollections"

export function NewArrivals(){
    return(
        <div className="flex flex-col gap-5">
            <HeroSectionArrivals/>
            <LatestAdditions/>
            <SeasonalCollections/>
        </div>
    )
}