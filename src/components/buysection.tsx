import { useLocation } from "react-router"
export function BuySection(){
    const location = useLocation();
    const product= location.state?.product;

    if (!product){
        return <div className="text-center mt-20 text-red-500">No product data available.</div>;
    }
    return(
        <div className="h-300">
            <h1>Your Products</h1>
            <div>
                <h2>{product.title}</h2>
                <span>{product.description}</span>
                <span>{product.price}</span>
                <button>Confirm</button>
            </div>
        </div>
    )
}