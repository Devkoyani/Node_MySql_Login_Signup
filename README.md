# 🔐 Full Stack Login & Signup App

This is a full-stack login/signup authentication app built with:

- **Frontend**: React, Tailwind CSS, Axios, React Router, React Toastify
- **Backend**: Node.js, Express.js, MySQL (with `mysql2/promise`)
- **Security**: Password validation, proper API status handling
- **Notifications**: Toasts for success and error feedback

---

## 🚀 Setup Instructions

### ✅ 1. Clone the repository & Setup Frontend
```bash
git clone https://github.com/Devkoyani/Node_MySql_Login.git
cd frontend
npm install
npm start
```
### ✅ 2. Setup Backend
```bash
cd backend
npm install
```
### ✅ 3. Create a .env file in /backend/
```bash
PORT=5050
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=students_db
```
### ✅ 4. Start the backend
```bash
npm run server
```
### ✅ 4. MySQL Table Setup
```bash
CREATE DATABASE students_db;

CREATE TABLE login (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

## 🧑‍💻 Author Dev Koyani
