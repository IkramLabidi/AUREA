import { Card } from "../seasonalcollections/seasoncollectioncard"

export function SeasonalCollections(){
    const SeasonalCollectionTab=[
        {
            id:1,
            title:"Summer Radiance",
            desc:"Vibrant pieces inspired by summer sunsets and coastal beauty",
            pieces:"10 pieces"
        },
        {
            id:2,
            title:"Autumn Whispers",
            desc:"Warm tones and organic shapes celebrating fall's natural elegance",
            pieces:"9 pieces"
        },
        {
            id:3,
            title:"Winter Frost",
            desc:"Icy brilliance and cool sophistication for the winter season",
            pieces:"8 pieces"
        }
    ]
    
    return(
        <div className="p-10 flex flex-col gap-5">
            <h1 className="text-amber-500 text-3xl font-serif">Seasonal Collections</h1>
            <p className="text-gray-400">Explore our curated collections inspired by the changing seasons and timeless elegance.</p>
            <div className="flex justify-around items-center gap-5">
                {SeasonalCollectionTab.map((item)=>(
                    <Card
                    key={item.id}
                    title={item.title}
                    desc={item.desc}
                    pieces={item.pieces}
                    />
                ))}
            </div>
        </div>
    )
}