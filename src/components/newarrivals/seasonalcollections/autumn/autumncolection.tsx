import { FeatureCard } from "../../../homepage/featuresCard"
import { AutumnCollectionTab } from "./autumntab"

export function AutumnCollection(){
        return(
            <div className="flex flex-col justify-center items-center gap-10 p-10">
                <div className="h-100 flex flex-col justify-center items-center gap-5">
                    <h1 className="font-serif text-4xl font-bold">Embrace the <span className="text-amber-700">Autumn Glow</span>
                    </h1>
                    <p className="text-gray-400 text-medium">
                        Discover timeless pieces inspired by the warmth, elegance, and golden tones of the autumn season.</p>
                </div>

                 <div className="grid grid-cols-3 gap-5">
                    {AutumnCollectionTab.map((item)=>(
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