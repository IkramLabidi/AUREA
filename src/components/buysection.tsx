import { useEffect, useState } from "react"
export function BuySection(){
    const [cart, setCart]= useState([]);
    useEffect(()=>{
        const storedCart= JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);
    if (cart.length=== 0){
        return <div className="text-center mt-20 text-red-500">No products in your cart.</div>;     
    }
    const handleRemove= (idRemove: number)=>{
        const updatedCart= cart.filter(product => product.id !== idRemove);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    return(
        <div className="min-h-screen">
            <h1 className="text-4xl font-serif font-bold text-amber-400 h-20 text-center p-10">Your Products</h1>
            <div className="grid grid-cols-3 gap-5 p-10">
                {cart.map((product, index) => (
                    <div key={index} className="flex flex-col justify-center items-center text-start p-5 border border-gray-400 rounded-md hover:transition-all hover:duration-300 hover:scale-105">
                        <img src={product.url} alt={product.title} className="w-75 h-100 mb-4 " />
                        <h2 className="font-medium text-amber-500">{product.title}</h2>
                        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                        <div className="flex justify-between items-center gap-5">
                            <p className="text-amber-500 font-semibold">{product.price}</p>
                            <button className="text-amber-500 hover:text-amber-400 hover:cursor-pointer transition-all duration-300">Confirm</button>
                            <button className="text-amber-500 hover:text-amber-400 hover:cursor-pointer transition-all duration-300"
                            onClick={()=>handleRemove(product.id)}
                            >Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}