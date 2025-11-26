import { FeatureCard } from "../homepage/featuresCard"
export function DiamondCollection(){
    const diamondtab=[
        {
            id: 1,
            url: "https://i.pinimg.com/1200x/46/4b/d6/464bd68dd3dd233ff8c1ce70814a2fec.jpg",
            title:"Diamond Solitaire Necklace",
            description:"18k Gold | 0.5ct Diamond",
            price:"$2,499"
        },
        {
            id: 2,
            url:"https://i.pinimg.com/736x/46/cb/8a/46cb8ae57769d7a1d1fb1dba6ae70d6b.jpg",
            title:"Diamond Engagement Ring",
            description:"Platinum | 1.0ct Diamond",
            price:"$4,999"
        },
        {
            id:3 ,
            url:"https://i.pinimg.com/736x/57/7c/cb/577ccb11409cd02dd7bf781b27e22707.jpg",
            title:"Diamond Tennis Bracelet",
            description:"Platinum | 2.0ct Diamonds",
            price:"$3,499"
        },
        {
            id: 4,
            url:"https://i.pinimg.com/1200x/7c/d8/bd/7cd8bd34d8eb2b21be375f7e5e188fae.jpg",
            title:"Diamond Drop Earrings",
            description:"18k Gold | 0.75ct Diamonds",
            price:"$1,899"
        }
    ]
    return (
        <div id="diamond">
            <div className="px-20 py-5 flex gap-10 items-center justify-center ">
                <div className="text-start p-10 flex flex-col gap-2">
                    <h1 className="text-3xl font-serif"><span className="text-amber-500">Diamond</span> Collection</h1>
                    <span className="text-gray-400 w-150">Our diamond collection features brilliant stones set in exquisite designs. Each piece is a celebration of light and luxury, perfect for special moments and everyday elegance.</span>
                </div>
                <img src="https://i.pinimg.com/1200x/ac/db/3e/acdb3ea6f37210fac77047a71c0596fd.jpg" alt="" className="w-100 h-100 rounded-md" />
            </div>
            <div className="grid grid-cols-4 gap-5 px-30 py-5">
                {diamondtab.map((item)=>(
                    <FeatureCard
                    key= {item.id}
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