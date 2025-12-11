import { Card } from "../seasons/collectionCard"

export function SeasonalCollections(){
    const SeasonalCollectionTab=[
        {
            id:1,
            title:"Summer Radiance",
            desc:"Vibrant pieces inspired by summer sunsets and coastal beauty",
            pieces:"9 pieces"
        },
        {
            id:2,
            title:"Autumn Whispers",
            desc:"Warm tones and organic shapes celebrating fall's natural elegance",
            pieces:"9 pieces"
        },
        {
            id:3,
            title:"Winter’s Icy Embrace",
            desc:"Icy brilliance and cool sophistication for the winter season",
            pieces:"9 pieces"
        }
    ]
    
    return(
        <div className="w-full px-4 sm:px-10 lg:px-20 py-10 flex flex-col gap-20 ">
            <div className="flex flex-col gap-3 text-center lg:text-left max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-amber-500">Seasonal Collections</h1>
                <p className="text-gray-400 text-sm sm:text-base">Explore our curated collections inspired by the changing seasons and timeless elegance.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-max-300">
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