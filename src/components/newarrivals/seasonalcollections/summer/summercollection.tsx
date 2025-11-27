import { FeatureCard } from "../../../homepage/featuresCard"
import { SummerCollectionTab } from "./tab"
export function SummerCollection(){
        return(
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="h-100 flex flex-col justify-center items-center gap-5">
                    <h1 className="font-serif text-4xl font-bold">Shine <span className="text-amber-500">Bright</span> This Summer</h1>
                    <p className="text-gray-400 text-medium">Elevate your summer style with hand-crafted jewelry designed to capture the warmth and glow of the season</p>
                </div>
                <div className="grid grid-cols-3 gap-5 px-50 py-10">
                {SummerCollectionTab.map((item)=>(
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