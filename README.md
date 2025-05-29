# 🎬 Movie App & User API Server

This is a backend server built with **Node.js**, **Express.js**, and **MongoDB/Mongoose** that allows you to:

- Register and authenticate users.
- Upload and manage movie data through a full CRUD system.

## 📁 Project Structure
server/
│
├── config/
│ └── db.js # Database configuration
│
├── controllers/
│ ├── auth.controller.js # Authentication controller
│ ├── movie.controller.js # Movie operations controller
│ └── user.controller.js # User operations controller
│
├── middlewares/
│ └── authenticated.js # Middleware for authentication verification
│
├── models/
│ ├── movie.model.js # Movie data model
│ └── user.model.js # User data model
│
├── router/
│ ├── auth.router.js # Authentication routes
│ ├── movie.router.js # Movie routes
│ └── user.router.js # User routes
│
├── seed/
│ └── seedMovies.js # Script to seed movie data
│
├── uploads/
│ └── movie/ # Folder for uploaded files (e.g., movie images)
│
├── utils/
│ ├── image.js # Image-related utilities
│ └── jwt.js # JWT utility functions
│
├── .env # Environment variables file
├── app.js # Main Express app configuration
├── server.js # Server entry point
├── package.json
└── package-lock.json

## 🚀 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **dotenv** for environment variable management

## ⚙️ Installation

1. Clone the repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Install dependencies:

npm install

3. Create a .env file in the project root and add your environment variables:

PORT=3000
MONGO_URI=mongodb://localhost:3000/movie-api
JWT_SECRET=your_secret_key

4. Start the server:

npm start

## 🧪 Main Endpoints
- Auth

    POST /api/auth/register — Register a new user

    POST /api/auth/login — User login

- Users

    GET /api/users — Get all users (restricted)

    GET /api/users/:id — Get a specific user

- Movies

    GET /api/movies — Get all movies

    GET /api/movies/:id — Get a specific movie

    POST /api/movies — Create a new movie

    PUT /api/movies/:id — Update a movie

    DELETE /api/movies/:id — Delete a movie

## 📚 Course
FullStack developer course in [DevSchool Academia](https://devschool.com.ar/)