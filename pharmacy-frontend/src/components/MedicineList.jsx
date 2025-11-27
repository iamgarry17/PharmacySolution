import { useEffect, useState } from "react";
import { getMedicines, deleteMedicine } from "../api";

export default function MedicineList() {
  const [medicines, setMedicines] = useState([]);

  async function loadMedicines() {
    const data = await getMedicines();
    setMedicines(data);
  }

  async function handleDelete(id) {
    await deleteMedicine(id);
    loadMedicines(); // reload after delete
  }

  useEffect(() => {
    loadMedicines();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Medicine Inventory</h2>

      <ul>
        {medicines.map((m) => (
          <li key={m.id} style={{ marginBottom: "10px" }}>
            {m.name} — £{m.price} — Stock: {m.stock}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(m.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
