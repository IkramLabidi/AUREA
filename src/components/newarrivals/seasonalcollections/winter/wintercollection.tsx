import { FeatureCard } from "../../../homepage/featuresCard"
import { WinterCollectionTab } from "./wintertab"

export function WinterCollection(){
        return(
            <div className="flex flex-col justify-center items-center gap-10 p-10">
                <div className="h-100 flex flex-col justify-center items-center gap-5 text-center">
                    <h1 className="font-serif text-4xl font-bold">
                        Embrace the <span className="text-blue-200">Winter Elegance</span></h1>
                    <p className="text-gray-300 text-medium max-w-xl">
                        Discover shimmering pieces inspired by frosted mornings, icy brilliance, 
                        and the quiet luxury of the winter season. Crafted to illuminate your 
                        beauty with a cool, captivating glow.</p>
                </div>
                <div className="grid grid-cols-3 gap-5">
                {WinterCollectionTab.map((item)=>(
                    <FeatureCard
                    key={item.id}
                    url={item.url}  
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    />
                ))}
                </div>
            </div>
        
    )
}