# Companies API (Backend + Frontend)

## 📌 Overview

This project is a **MERN-style API module** for managing Company data.  
It includes:

- **Backend:** Node.js REST API with MongoDB.
- **Frontend:** Simple HTML/JavaScript UI to view and filter companies.
- **Filters:** Search by name, industry, location, and size.

---

## 🚀 Features

- Filtering by multiple query parameters.
- CORS-enabled API for browser access.
- Clean separation of backend and frontend code.
- Easily extendable to MongoDB or any database.

---

## 📡 API Endpoints

| Method | Endpoint         | Description                               |
| ------ | ---------------- | ----------------------------------------- |
| GET    | `/companies`     | Get all companies (with optional filters) |
| GET    | `/companies/:id` | Get a single company by ID                |
| POST   | `/companies`     | Add a new company                         |
| PUT    | `/companies/:id` | Update company details                    |
| DELETE | `/companies/:id` | Delete a company                          |
