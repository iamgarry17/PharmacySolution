const API_URL = "http://localhost:5000/api/medicineapi";

export async function getMedicines() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addMedicine(medicine) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medicine),
  });
  return res.json();
}

export async function deleteMedicine(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}
