import { FeatureCard } from "../homepage/featuresCard"
export function LatestAdditions(){
    const newArrivalsTab=[
        {
            id:1,
            url:"https://i.pinimg.com/1200x/81/10/46/81104686cb9c5f95eaa9f1d8c01d8208.jpg",
            title:"Celestial Diamond Necklace",
            description:"18k Gold | 0.75ct Diamonds",
            price:"$2,199"
        },
        {
            id:2,
            url:"https://i.pinimg.com/1200x/d4/9d/f8/d49df81fcc4f9214a0c0a192761fac18.jpg",
            title:"Aurora Bangle Bracelet",
            description:"Rose Gold | Sapphire Accents",
            price:"$1,499"
        },
        {
            id:3,
            url:"https://i.pinimg.com/736x/a0/6a/7c/a06a7c8134d991db6de629287fa29b7d.jpg",
            title:"Ethereal Pearl Earrings",
            description:"Sterling Silver | Freshwater Pearls",
            price:"$899"
        },
        {
            id:4,
            url:"https://i.pinimg.com/1200x/b4/c9/3d/b4c93df6f6ef2eed4778518f7facd1e9.jpg",
            title:"Radiant Emerald Ring",
            description:"Platinum | 1.2ct Emerald",
            price:"$3,299"
        },
        {
            id:5,
            url:"https://i.pinimg.com/736x/c4/53/c5/c453c5317424a6a0470206edcac0cdf5.jpg",
            title:"GoldAura Watch",
            description:"Sterling Silver | Solid 18K Gold Parts",
            price:"$3,299"
        }, 
        {
            id:6,
            url:"https://i.pinimg.com/736x/54/4b/ac/544bac8ed832bf35913bade31f210470.jpg",
            title:"Solstice Ruby Pendant",
            description:"18k Gold | 0.75ct Diamonds",
            price:"$2,499"
        }
    ]
    return(
        <div className="flex flex-col items-center gap-10 p-10 " id="newArrivals"> 
            <div className="flex flex-col gap-5">
                <h1 className=" text-center text-amber-500 text-3xl font-serif font-bold">Latest Additions</h1>
                <p className="text-gray-400 text-center ">Be among the first to experience our newest masterpieces, fresh from our artisan workshop.</p>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {newArrivalsTab.map((item)=>(
                    <FeatureCard
                    key= {item.id}
                    url={item.url}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    />
                ))}
            </div>
            <button className="bg-amber-500 py-3 px-6 rounded-md text-black hover:cursor-pointer">View All New Arrivals</button>
        </div>
    )
}