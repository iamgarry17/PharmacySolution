import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Bag</h1>

      {cart.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="border p-4 mb-3 rounded">
              <h3 className="font-semibold">{item.name}</h3>
              <p>£{item.price}</p>
            </div>
          ))}

          <Link
            to="/checkout"
            className="bg-green-600 text-white px-4 py-2 rounded inline-block mt-4"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}
