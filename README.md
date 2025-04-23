# EasyGenerator — Full Stack Authentication App

This is the full-stack implementation of the EasyGenerator test task, built with React (frontend) and NestJS (backend) using MongoDB Atlas and JWT authentication.

---

## Project Structure

easygenerator/ ├── backend/ # NestJS API for authentication and user management ├── frontend/ # React app for signup, signin, and profile display

yaml
Copy
Edit

---

## How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/easygenerator.git
cd easygenerator
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file based on .env.example:

bash
Copy
Edit
cp .env.example .env
You can also skip this step. The app includes fallback values that allow it to run without a .env file.

Start the backend server:

bash
Copy
Edit
npm run start:dev
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm start
Frontend will run on: http://localhost:3000
Backend API will run on: http://localhost:4000
Swagger API docs are available at: http://localhost:4000/api

Environment Variables
These can be configured in a .env file in the backend directory:

env
Copy
Edit
MONGO_URI=mongodb+srv://emadnawar:2Yu8TJUiweZjKAIz@cluster0.ehk2xpq.mongodb.net/
JWT_SECRET=emad-easy-generator
PORT=4000
API Documentation
Swagger UI is available at:

bash
Copy
Edit
http://localhost:4000/api
You can test all available endpoints and authenticate using a JWT by clicking the "Authorize" button.

