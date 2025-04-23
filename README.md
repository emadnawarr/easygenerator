# EasyGenerator — Full Stack Authentication App

This is the full-stack implementation of the EasyGenerator test task, built with React (frontend) and NestJS (backend) using MongoDB Atlas and JWT authentication.

---

## Project Structure

```
easygenerator/
├── backend/    # NestJS API for authentication and user management
├── frontend/   # React app for signup, signin, and profile display
```

---

## How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/easygenerator.git
cd easygenerator
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

You can also skip this step. The app includes fallback values that allow it to run without a `.env` file.

Start the backend server:

```bash
npm run start:dev
```

---

### 3. Frontend Setup

Open a new terminal window, then:

```bash
cd easygenerator/frontend
npm install
npm start
```

- Frontend runs on: `http://localhost:3000`  
- Backend runs on: `http://localhost:4000`  
- Swagger API docs: `http://localhost:4000/api`

---

## Environment Variables

These can be configured in a `.env` file in the `backend/` directory:

```env
MONGO_URI=mongodb+srv://emadnawar:2Yu8TJUiweZjKAIz@cluster0.ehk2xpq.mongodb.net/
JWT_SECRET=emad-easy-generator
PORT=4000
```

**Note:** The MongoDB Atlas URI is included intentionally to allow you to run the project without additional setup.  
The database is IP-whitelisted (`0.0.0.0/0`) and safe to use for evaluation purposes only.  
This URI will be rotated or removed after the review is complete.

---

## API Documentation

Swagger UI is available at:

```
http://localhost:4000/api
```

You can test all available endpoints and authenticate using a JWT by clicking the "Authorize" button.

---

## Features Implemented

- Logging with `Logger` (signup, signin, refresh)
- Error handling using NestJS HTTP exceptions
- Swagger API documentation with DTO annotations
- Clean modular architecture and DTO validation
- `.env.example` included with public MongoDB URI

---

## Author

**Emad Nawar**  

