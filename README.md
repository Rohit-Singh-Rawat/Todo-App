
# Single User Todo App

This is a simple todo application designed for a single user. It consists of a frontend built with React and a backend built with Node.js and Express.


## Features
- Add new todos
- Mark todos as completed
- Delete existing todos


## Prerequisites
Before running the application, ensure you have the following installed:
- Node.js (v20 or higher)

## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Rohit-Singh-Rawat/Todo-App
   ```
2. Navigate to the project directory:
   ```bash
   cd Todo-App
   ```
3.  *Before proceeding*, ensure you install dependencies in the root directory to get access to the `concurrently` package:
  ```bash
   npm install
   ```
4. Install dependencies for both frontend and backend:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```
  

## Configuration
Before running the application, you need to configure the MongoDB connection URL in the backend. 
1. Open the `backend/db.js` file.
2. Replace `'YOUR_MONGODB_URL'` with your actual MongoDB connection string. 
3. Save the `db.js` file.


## Starting the Application

To start the application, you have two options:

1. **Individual Servers**:
   - Start the backend server: Navigate to the `backend` directory and run:
     ```bash
     node index.js
     ```
     This will start the backend server at [http://localhost:5175](http://localhost:5175).
     
   - Start the frontend development server: Navigate to the `frontend` directory and run:
     ```bash
     npm run dev 
     ```
     This will start the frontend server and automatically open your default web browser to [http://localhost:3000](http://localhost:3000).


2. **Using Concurrently**:

   - Alternatively, you can start both the backend and frontend servers concurrently using `concurrently`. From the root directory, run:
     ```bash
     npm start
     ```
     
     or  
     
      ```bash
     npm run dev:start
     ```
     >Use this if u want to seamlessly work in frontend and backend as it uses nodemon in backend
     
     This command will start both servers concurrently, allowing you to access the todo app in your web browser at [http://localhost:3000](http://localhost:3000).


## Usage
Once both the backend and frontend servers are running, you can access the todo app in your web browser at http://localhost:5175.

- Add new todos using the input field at the top.
- Mark as Complete  using complete button
- Click on the delete icon to delete it.
