✅ 1️⃣ Root README.md (PharmacySolution/README.md)

(Describes whole project: architecture, tech stack, setup)

📦 PharmacySolution

A full-stack pharmacy management system built with:

ASP.NET Core Web API (backend)

React + Vite + Tailwind (frontend)

SQL Server + Entity Framework Core (database)

Stripe (optional) for payment processing

This solution includes:

PharmacySolution
 ├── Pharmacy.Web          # ASP.NET Core backend
 ├── pharmacy-frontend     # React + Vite frontend
 └── PharmacySolution.sln  # Solution file

🚀 Features
💊 Medicine Management

Add, update, view, and delete medicines

Stock tracking

Price management

🛒 Shopping Cart

Add/remove items

Quantity updates

Auto-calculated totals

💳 Checkout Flow

Order summary

Optional Stripe payment integration

🗃 Backend API

RESTful endpoints for medicines and orders

SQL database using EF Core migrations

🧱 Tech Stack
Frontend:

React

Vite

Tailwind CSS

React Context API

Backend:

ASP.NET Core 8

Entity Framework Core

SQL Server / LocalDB

⚙️ Running the Project
🟦 Backend (ASP.NET Core)
cd Pharmacy.Web
dotnet build
dotnet ef database update
dotnet run


Backend runs on:

https://localhost:7224
http://localhost:5000


API endpoint example:

GET /api/medicineapi

🟩 Frontend (React + Vite)
cd pharmacy-frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🗄 Database

Entity Framework handles migrations automatically:

dotnet ef migrations add <Name>
dotnet ef database update


Medicine Model:

public class Medicine {
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public int Stock { get; set; }
}

🔒 Environment Variables (Recommended)

Backend (set via environment variables):

Stripe__SecretKey=
Stripe__PublishableKey=


Frontend (Vite):

VITE_STRIPE_PUBLISHABLE_KEY=
