import { FeatureCard } from "../featureCard"
export function Diamond(){
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
        <div id="diamond" className="w-full bg-black/5 py-10">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-4 sm:px-10 lg:px-20 py-5">
                <div className="flex flex-col gap-4 max-w-lg text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold"><span className="text-amber-500">Diamond</span> Collection</h1>
                    <p className="text-gray-400 text-sm sm:text-base">Our diamond collection features brilliant stones set in exquisite designs. Each piece is a celebration of light and luxury, perfect for special moments and everyday elegance.</p>
                </div>
                <img src="https://i.pinimg.com/1200x/ac/db/3e/acdb3ea6f37210fac77047a71c0596fd.jpg" alt="" className="w-full sm:w-80 lg:w-[28rem] h-auto rounded-md object-cover shadow-lg shadow-amber-500/20"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-10 lg:px-20 py-10">
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