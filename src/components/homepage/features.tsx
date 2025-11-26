import { FeatureCard } from "../homepage/featuresCard"
import { Link } from "react-router"
export function Features(){
    const featurestab= [
        {
            id: 1,
            url:"https://i.pinimg.com/1200x/2b/62/16/2b62162e3dcaf4bd2661d6f4bbfb6a23.jpg",
            title:"Diamond Pendant Necklace",
            description:"18k Gold | 0.5ct Diamond",
            price:"$1,299"
        },
        {
            id: 2,
            url: "https://i.pinimg.com/1200x/bf/18/6b/bf186b1c3befaf12f72c876c1f71453d.jpg",
            title:"Gold Chain Bracelet",
            description:"14k Gold | Adjustable",                price:"$899",

        },
        {
            id: 3,
            url: "https://i.pinimg.com/1200x/01/6b/16/016b160b844e31ed624bcee69690dfa7.jpg",
            title:"Silver Hoop Earrings",
            description:"Sterling Silver | Handcrafted",
            price:"$315"
        }
    ]
    return(
        <div className="flex flex-col items-center gap-10 p-10 bg-gradient-to-b from-black to-amber-900/20"> 
            <div className="flex flex-col gap-5">
                <h1 className=" text-center text-amber-500 text-3xl font-serif font-bold">Featured Pieces</h1>
                <p className="text-gray-400 text-center ">Discover our most coveted accessories, handcrafted with precision and passion.</p>
            </div>
            <div className="grid grid-cols-3 gap-10">                
                {featurestab.map((item)=>(
                    <FeatureCard
                    key= {item.id}
                    url={item.url}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    />
                ))}
            </div>
            <Link to={"/collections/herosection"}>
                <button className="bg-amber-500 py-3 px-6 rounded-md text-black hover:cursor-pointer">View All Products</button>
            </Link>
            
        </div>
    )
}