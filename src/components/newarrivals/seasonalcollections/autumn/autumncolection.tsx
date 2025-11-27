import { FeatureCard } from "../../../homepage/featuresCard"
import { AutumnCollectionTab } from "./autumntab"

export function WinterCollection(){
        return(
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
    )
}