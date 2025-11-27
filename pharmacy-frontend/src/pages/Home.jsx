import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";

export default function Home() {
  const [medicines, setMedicines] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/medicineapi")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {medicines.map((med) => (
        <div key={med.id} className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">{med.name}</h2>

          {/* Display normal £ price */}
          <p className="mt-2">💰 Price: £{med.price}</p>
          <p>📦 Stock: {med.stock}</p>

          {/* Store price in pence (Stripe format) */}
          <button
            onClick={() =>
              addToCart({
                id: med.id,
                name: med.name,
                price: Math.round(Number(med.price) * 100), // Convert £ → pence
                quantity: 1
              })
            }
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add to Bag
          </button>
        </div>
      ))}
    </div>
  );
}
