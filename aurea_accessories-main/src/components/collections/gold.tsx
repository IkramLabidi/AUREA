import { FeatureCard } from "../featureCard"
export function Gold(){
    const goldtTab= [
        {
            id: 1,
            url: "https://i.pinimg.com/1200x/eb/17/fd/eb17fd8ff6adf5320f35dea1c2d4bcc7.jpg",
            title:"Elegant Gold Necklace" ,
            description: "18k Gold",
            price: "$1,299",
        },
        {
            id: 2,
            url:"https://i.pinimg.com/736x/8b/f3/8c/8bf38c9f1f70cb25f49b08ae8d60e317.jpg",
            title: "Gold Statement Ring",
            description: "18k Gold | Diamond Accent",
            price: "$1,199",
        },
        {
            id: 3,
            url:"https://i.pinimg.com/1200x/bf/18/6b/bf186b1c3befaf12f72c876c1f71453d.jpg",
            title: "Gold Chain Bracelet",
            description: "14k Gold | Adjustable",
            price: "$899",
        },
        {
            id: 4,
            url:"https://i.pinimg.com/1200x/9a/80/37/9a80375903cdf8ecf0df0c1742efd661.jpg",
            title: "Gold Hoop Earrings",
            description: "18k Gold | Handcrafted",
            price: "$799",
        } 
    ]
    return (
        <div id="gold" className="w-full bg-black/5 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 sm:px-10 lg:px-20 py-5">
                <div className="flex flex-col gap-4 max-w-lg text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold"><span className="text-amber-500">Gold</span> Collection</h1>
                    <span className="text-gray-400 text-sm sm:text-base">Our gold collection features timeless spanieces crafted from the finest 18k and 14k gold. Each piece is designed to capture light and attention, becoming a cherished part of your jewelry collection for generations.</span>
                </div>
                <img src="https://i.pinimg.com/736x/a5/35/47/a53547f06f60a002582b8fdadd1b18cc.jpg" alt="accessories" className="w-full sm:w-80 lg:w-[28rem] h-auto rounded-md object-cover shadow-lg shadow-amber-500/20" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-10 lg:px-20 py-10">
                {goldtTab.map((item)=>(
                    <FeatureCard
                    key={item.id}
                    url={item.url}
                    title={item.title}
                    description ={item.description}
                    price={item.price}/>
                ))}
            </div>
        </div>
    )
}