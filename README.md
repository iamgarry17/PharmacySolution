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

# 🟦 Pharmacy.Web – ASP.NET Core Backend

This is the backend API for the **PharmacySolution** full-stack application.  
It manages all medicine logic, checkout logic, database interaction, and Stripe integration.

---

# 🚀 Features
- ✔ CRUD for medicines  
- ✔ SQL database using EF Core  
- ✔ RESTful API endpoints  
- ✔ Checkout API  
- ✔ Optional Stripe payment integration  

---

# 📁 Project Structure


Pharmacy.Web
 ├── Controllers
 ├── Models
 ├── Data
 ├── Migrations
 ├── Views
 └── wwwroot


---

# ⚙️ Run the Backend

sh
cd Pharmacy.Web
dotnet restore
dotnet build
dotnet ef database update
dotnet run


Base URL:


http://localhost:5000/api


---

# 🔗 API Endpoints

| Method | Endpoint                | Description            |
|--------|--------------------------|------------------------|
| GET    | /api/medicineapi         | Get all medicines      |
| GET    | /api/medicineapi/{id}    | Get medicine by ID     |
| POST   | /api/medicineapi         | Add new medicine       |
| PUT    | /api/medicineapi/{id}    | Update medicine        |
| DELETE | /api/medicineapi/{id}    | Remove medicine        |
| POST   | /api/checkout            | Checkout order         |

---

# 🗄 Database Setup

### Create migration:

sh
dotnet ef migrations add Init


### Apply migration:

sh
dotnet ef database update


---

# 🔐 Stripe Configuration (Optional)

Set environment variables:


Stripe__SecretKey=
Stripe__PublishableKey=


---

# 🛠 Technologies Used
- ASP.NET Core 8  
- Entity Framework Core  
- SQL Server / LocalDB  
- MVC + REST API  
- Stripe .NET SDK  


# 🟩 pharmacy-frontend – React + Vite Frontend

This is the frontend UI for the PharmacySolution project.  
Users can browse medicines, add items to a cart, and complete a checkout flow.

---

# 🎨 Features

- ✔ Responsive UI with Tailwind  
- ✔ View all medicines  
- ✔ Add to cart  
- ✔ Update cart items  
- ✔ Checkout page  
- ✔ Thank you screen  

---

# 📁 Folder Structure


pharmacy-frontend
 ├── src
 │   ├── pages
 │   ├── components
 │   ├── context
 │   └── api.js
 ├── public
 ├── index.html
 └── vite.config.js


---

# ⚙️ Run the Frontend

sh
cd pharmacy-frontend
npm install
npm run dev


Frontend URL:


http://localhost:5173


---

# 🔗 Connects to Backend

Default backend URL (editable in `src/api.js`):


http://localhost:5000/api


---

# 🧩 State Management (React Context API)

`CartContext.jsx` handles:

- Cart state  
- Add/remove items  
- Total price  
- Quantity updates  

---

# 🖥 Pages

| Page     | Description              |
|----------|--------------------------|
| Home     | Shows all medicines      |
| Cart     | View cart items          |
| Checkout | Order summary + submit   |
| Thankyou | Confirmation screen      |

---

# 🛠 Technologies

- React  
- Vite  
- Tailwind CSS  
- React Router  
- Context API  

---

# 💳 Optional Stripe Integration

Create `.env`:


VITE_STRIPE_PUBLISHABLE_KEY=


