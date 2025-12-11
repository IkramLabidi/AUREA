import { HeroSection } from "../components/homepage/herosection"
import { CollectionsPath } from "../components/homepage/collectionspath"
import { Features } from "../components/homepage/features"
export function HomePage(){
    return(
        <div className="grid grid-cols-1 gap-20 bg-black">
            <HeroSection/>
            <CollectionsPath/>
            <Features/>
        </div>
    )
}