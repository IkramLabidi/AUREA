import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  url: string;
};

export function BuySection() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleRemove = (idRemove: number) => {
    const updatedCart = cart.filter(product => product.id !== idRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-amber-500 text-lg">
        No products in your cart.
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-amber-400 text-center my-10">
        Your Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map(product => (
          <div
            key={product.id}
            className="flex flex-col justify-center items-center text-start p-5 border border-gray-400 rounded-md hover:transition-all hover:duration-300 hover:scale-105"
          >
            <img
              src={product.url}
              alt={product.title}
              className="w-75 h-100 mb-4 rounded"
            />

            <h2 className="font-medium text-amber-500">
              {product.title}
            </h2>

            <p className="text-gray-500 text-sm mb-3 text-center">
              {product.description}
            </p>

            <div className="flex items-center justify-between w-full mt-3">
              <p className="text-amber-500 font-semibold">
                {product.price}
              </p>

              <div className="flex gap-4">
                <button className="text-amber-500 hover:text-amber-400 transition">
                  Confirm
                </button>

                <button
                  onClick={() => handleRemove(product.id)}
                  className="text-red-500 hover:text-red-400 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
