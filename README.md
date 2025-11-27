# 📦 PharmacySolution

A full-stack pharmacy management system built using a modern, scalable architecture:

- **ASP.NET Core Web API** (backend)
- **React + Vite + Tailwind CSS** (frontend)
- **SQL Server + Entity Framework Core** (database)
- **Stripe (optional)** for payments

---

## 📁 Solution Structure


PharmacySolution
 ├── Pharmacy.Web          # ASP.NET Core backend
 ├── pharmacy-frontend     # React + Vite frontend
 └── PharmacySolution.sln  # Solution file


---

# 🚀 Features

## 💊 Medicine Management
- Add, update, view, and delete medicines  
- Stock and price tracking  
- SQL-backed persistence  

## 🛒 Shopping Cart
- Add/remove items  
- Update quantities  
- Auto-calculated totals  

## 💳 Checkout Flow
- Order summary  
- Optional Stripe payment  

## 🗃 Backend API
- Fully RESTful endpoints  
- EF Core migrations  
- MVC + Repository Layer  

---

# 🧱 Tech Stack

## 🟩 Frontend
- React  
- Vite  
- Tailwind CSS  
- React Context API  

## 🟦 Backend
- ASP.NET Core 8  
- Entity Framework Core  
- SQL Server / LocalDB  

---

# ⚙️ Running the Project

## 🟦 Running Backend (ASP.NET Core)

sh
cd Pharmacy.Web
dotnet build
dotnet ef database update
dotnet run


Runs at:  

https://localhost:7224
http://localhost:5000


Example API endpoint:  


GET /api/medicineapi


---

## 🟩 Running Frontend (React + Vite)

sh
cd pharmacy-frontend
npm install
npm run dev


Frontend runs at:


http://localhost:5173


---

# 🗄 Database

### Entity Framework commands:

sh
dotnet ef migrations add <Name>
dotnet ef database update


### Example Model

csharp
public class Medicine {
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public int Stock { get; set; }
}


---

# 🔒 Environment Variables (Recommended)

## Backend


Stripe__SecretKey=
Stripe__PublishableKey=


## Frontend (Vite)


VITE_STRIPE_PUBLISHABLE_KEY=


