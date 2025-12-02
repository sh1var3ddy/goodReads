# 📚 goodReads

A modern Goodreads-style personal reading tracker built by **sh1var3ddy**.
This application lets users manage books across shelves like **To Read**, **Currently Reading**, **Read**, and an unlimited number of **custom shelves**, all backed by secure JWT authentication.

---

## 📁 Project Structure

```
goodReads/
│
├── GoodReads_Backend/      # Node.js + Express + MongoDB API
│   ├── src/
│   ├── package.json
│   └── ...
│
└── goodreadsFrontend/      # React + Vite + Tailwind frontend
    ├── src/
    ├── package.json
    └── ...
```

---

## 🚀 Tech Stack

### **Frontend**

* ⚡ Vite
* ⚛️ React.js
* 🎨 TailwindCSS
* 🔧 Redux (state management)

### **Backend**

* 🟩 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 🔐 JWT Authentication
* 🧱 MVC + Services + Repositories architecture

---

## ✨ Features

### 📘 Book & Shelf Management

* Add books to:

  * **To Read**
  * **Currently Reading**
  * **Read**
* Create **custom shelves**
* Move books between shelves easily

### 👤 User Accounts

* Secure login/signup via JWT
* Protected routes with token validation
* User-specific shelves and books

### 🧭 UI / UX

* Clean, modern interface using TailwindCSS
* Components & layout structured for scalability
* Responsive design

---

# 🖥️ Frontend Setup (`goodreadsFrontend`)

### 1️⃣ Navigate to the folder

```bash
cd goodreadsFrontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

### 4️⃣ Build for production

```bash
npm run build
```

### 5️⃣ Environment Variables

Create a `.env` file:

```
VITE_API_BASE_URL=http://localhost:5173
```

---

# 🛠️ Backend Setup (`GoodReads_Backend`)

### 1️⃣ Navigate to backend

```bash
cd GoodReads_Backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create `.env`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3005
```

### 4️⃣ Run backend in development

```bash
npm run dev
```

### 5️⃣ Run backend normally

```bash
npm start
```

---

## 🔐 Authentication Workflow

1. User signs up or logs in
2. Server issues JWT token
3. Frontend stores token (localStorage)
4. All API requests use:

   ```
   Authorization: Bearer <token>
   ```
5. Backend validates token for protected routes
6. User gets personalized book + shelf data

---

## 🧩 Folder Breakdown

### **Backend (`GoodReads_Backend/src/`)**

* `config/` – DB & server config
* `controllers/` – Request handlers
* `middlewares/` – Auth, logging, validation
* `models/` – Mongoose schemas
* `repositories/` – DB query abstraction
* `services/` – Business logic
* `routes/` – Express routes
* `utils/` – Helpers

### **Frontend (`goodreadsFrontend/src/`)**

* `Pages/` – Screens
* `Components/` – Reusable UI
* `Layouts/` – Page wrappers
* `Redux/` – State management
* `Helpers/` – Utility functions
* `Configs/` – API configs
* `Routes/` – App routing

---

## 🧪 Scripts Summary

### 📦 Frontend

```
npm run dev         # Start development server
npm run build       # Build production bundle
npm run preview     # Preview production build
```

### ⚙️ Backend

```
npm run dev         # Start with nodemon
npm start           # Production server
```

---

## 📝 License

This project is licensed under the **MIT License**.
You are free to modify, distribute, and use it with attribution.

