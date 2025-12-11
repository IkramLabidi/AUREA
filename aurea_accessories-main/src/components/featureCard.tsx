import { useNavigate } from "react-router"
type FeaturesCardProps = {
    title: string;
    description: string;
    price: string;
    url: string;
}

export function FeatureCard({title , description , price, url}: FeaturesCardProps){
    const navigate= useNavigate();
    const handleBuyNow=()=>{
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push({ id: Date.now(),url, title, description, price});
        localStorage.setItem("cart", JSON.stringify(cart));
        navigate("/buysection");
    }
    return(
        <div className="flex flex-col justify-center items-center text-start p-5 border border-gray-400 rounded-md hover:transition-all hover:duration-300 hover:scale-105">
            <img src={url} alt="image of accessories" className="w-75 h-100 mb-4 " />
            <div>
                <h3 className="font-medium text-amber-500">{title}</h3>
                <p className="text-gray-500 text-sm mb-3">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-amber-500 font-semibold">{price}</span>
                    <button className="text-amber-500 hover:text-amber-400 hover:cursor-pointer transition-all duration-300"
                    onClick={handleBuyNow}
                    >More Details</button>
                </div>
            </div>
        </div>
    )
}