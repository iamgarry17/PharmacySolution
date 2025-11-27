import { useState } from "react";
import { addMedicine } from "../api";

export default function AddMedicineForm({ onAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await addMedicine({
      name,
      price,
      stock: parseInt(stock),
    });

    setName("");
    setPrice("");
    setStock("");

    onAdded(); // refresh the list in parent
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Medicine</h2>

      <input
        placeholder="Medicine name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginLeft: "10px" }}
        required
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        style={{ marginLeft: "10px" }}
        required
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        Add
      </button>
    </form>
  );
}
