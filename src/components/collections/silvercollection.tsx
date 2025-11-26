import { FeatureCard } from "../homepage/featuresCard"
export function SilverCollection(){
    const silverTab=[
        {
            id: 1,
            url: "https://i.pinimg.com/1200x/41/c2/a5/41c2a5859cb9740ec908bfd8d5ddfa9b.jpg",
            title: "Silver Pendant Necklace",
            description: "Sterling Silver",
            price: "$499",
        },
        {
            id: 2,
            url:"https://i.pinimg.com/1200x/eb/2f/81/eb2f81deccc425cfe83825f20765ba5c.jpg" ,
            title:"Silver Band Ring" ,
            description:"Sterling Silver | Polished" ,
            price:"$349" ,
        },
        {
            id: 3,
            url:"https://i.pinimg.com/1200x/60/a9/05/60a905a209bfe8ae9020e614839be37f.jpg" ,
            title:"Silver Bangle Bracelet" ,
            description:"Sterling Silver | Adjustable" ,
            price:"$399" ,
        },
        {
            id: 4,
            url:"https://i.pinimg.com/1200x/a2/6f/1b/a26f1b8494b5e57f659bcf88006fbef9.jpg" ,
            title:"Silver Stud Earrings" ,
            description:"Sterling Silver | Handcrafted" ,
            price:"$299" ,
        } 
    ]
    return (
        <div className="bg-[#0b111f]" id="silver">  
            <div className="px-20 py-5 flex gap-10 items-center justify-center">
                <img src="https://i.pinimg.com/736x/e3/b4/3c/e3b43ca9097e48fb72a92f1be6c2a430.jpg" alt="" className="w-100 h-100 rounded-md" />
                <div className="text-start p-10 flex flex-col gap-2">
                    <h1 className="text-3xl font-serif"><span className="text-amber-500">Silver</span> Collection</h1>
                    <span className="text-gray-400 w-150">Our silver collection combines modern design with traditional craftsmanship. Each sterling silver piece is meticulously crafted to provide a contemporary look that complements any style.</span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 px-30 py-5">  
                {silverTab.map((item)=>(
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