import { Features } from "../components/homepage/features"
import { HeroSectionHomePage } from "../components/homepage/herosectionhomepage"
import { CollectionsPath } from "../components/homepage/collectionspath"
export function HomePage(){
    return(
        <div className="flex flex-col gap-10">
            <HeroSectionHomePage/>
            <CollectionsPath/>
            <Features/>
        </div>
    )
}