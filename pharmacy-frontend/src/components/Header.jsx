import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Pharmacy Store
      </Link>

      <Link to="/cart" className="relative">
        🛒
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
          {cart.length}
        </span>
      </Link>
    </header>
  );
}
