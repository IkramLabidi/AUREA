import { FeatureCard } from "../featureCard"
export function WhiteGold(){
    const whiteGoldTab=[
        {
            id: 1,
            url: "https://i.pinimg.com/1200x/41/c2/a5/41c2a5859cb9740ec908bfd8d5ddfa9b.jpg",
            title: "White Gold Pendant Necklace",
            description: "White Gold",
            price: "$499",
        },
        {
            id: 2,
            url:"https://i.pinimg.com/1200x/eb/2f/81/eb2f81deccc425cfe83825f20765ba5c.jpg" ,
            title:"White Gold Band Ring" ,
            description:"White Gold | Polished" ,
            price:"$349" ,
        },
        {
            id: 3,
            url:"https://i.pinimg.com/1200x/60/a9/05/60a905a209bfe8ae9020e614839be37f.jpg" ,
            title:"White Gold Bangle Bracelet" ,
            description:"White Gold | Adjustable" ,
            price:"$399" ,
        },
        {
            id: 4,
            url:"https://i.pinimg.com/1200x/a2/6f/1b/a26f1b8494b5e57f659bcf88006fbef9.jpg" ,
            title:"White Gold Stud Earrings" ,
            description:"White Gold | Handcrafted" ,
            price:"$299" ,
        } 
    ]
    return (
        <div className="bg-[#0b111f]" id="whitegold">  
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-4 sm:px-10 lg:px-20 py-5">
                <img src="https://i.pinimg.com/736x/e3/b4/3c/e3b43ca9097e48fb72a92f1be6c2a430.jpg" alt="" className="w-full sm:w-80 lg:w-[28rem] h-auto rounded-md object-cover shadow-lg shadow-amber-500/20" />
                <div className="flex flex-col gap-4 max-w-lg text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold"><span className="text-amber-500">White Gold</span> Collection</h1>
                    <p className="text-gray-400 text-sm sm:text-base">Our white gold collection combines modern design with traditional craftsmanship. Each white gold piece is meticulously crafted to provide a contemporary look that complements any style.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-10 lg:px-20 py-10">  
                {whiteGoldTab.map((item)=>(
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