# Employee Management System – Angular Frontend

This project is a **production-ready Angular 16 frontend** for an **Employee Management System**.
It consumes a real **ASP.NET Core Web API backend** and performs complete CRUD operations.

---

## 🚀 Tech Stack

- Angular 16 (Standalone Components)
- TypeScript
- HTML5, CSS3
- Angular Router
- Reactive Forms
- RxJS
- REST API Integration

---

## ✨ Features

- View all employees
- Add new employee
- Update existing employee details
- Delete employee
- Client-side form validation
- Clean, responsive UI
- Real backend API integration (no mock data)

---

## 🔗 Backend Integration

This frontend consumes the following backend API:   http://localhost:5211/api/employees


Backend is implemented using:
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server

> ⚠️ Backend must be running before using the frontend.

---

## 📦 Project Setup

### 1️⃣ Install dependencies
```bash
npm install


2️⃣ Run development server
ng serve


Open browser at:

http://localhost:4200


****The app will automatically reload if you change any source files.

🛠️ Build
To build the project for production:

ng build


*****Build artifacts will be stored in the dist/ directory.



📂 Project Structure
src/
 ├── app/
 │   ├── components/
 │   │   ├── employee-list/
 │   │   └── employee-form/
 │   ├── services/
 │   │   └── employee.service.ts
 │   ├── models/
 │   │   └── employee.model.ts
 │   ├── app.component.*
 │   └── app.routes.ts
 ├── assets/
 └── environments/



🧠 Architecture Notes

Uses Angular 16 standalone architecture
No NgModule-based routing
Centralized API service
Clean separation of concerns
Interview-safe and production-ready


🧪 Testing
Unit and E2E testing are not configured yet.


👤 Author
Abhishek Patidar
Angular & .NET Full-Stack Developer