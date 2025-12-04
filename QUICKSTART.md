# Hotel Management System - Quick Start Guide

## Prerequisites
- Node.js installed
- MongoDB installed locally

## Installation Steps

### 1. Start MongoDB
```bash
# Windows - Run in Command Prompt
mongod
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 4. Start Backend Server
```bash
cd backend
npm run dev
```
Backend runs on: http://localhost:5000

### 5. Start Frontend Server (New Terminal)
```bash
cd frontend
npm run dev
```
Frontend runs on: http://localhost:3000

### 6. Create Admin User

**Option 1: Register and Update**
1. Go to http://localhost:3000/register
2. Create an account
3. Open MongoDB Compass or shell
4. Connect to `mongodb://localhost:27017`
5. Select `hotel_management` database
6. In `users` collection, update your user:
```javascript
db.users.updateOne(
  { email: "your@email.com" },
  { $set: { role: "admin" } }
)
```

**Option 2: Direct Insert**
1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Create database: `hotel_management`
4. Create collection: `users`
5. Register a user first through the app to get a hashed password
6. Then update the role to "admin"

## Default Test Accounts

After setup, create these accounts:

**Admin Account:**
- Email: admin@hotel.com
- Password: Admin@123
- (Register normally, then update role to "admin" in database)

**User Account:**
- Email: user@hotel.com
- Password: User@123

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Dashboard**: http://localhost:3000/admin/dashboard (after login as admin)
- **User Dashboard**: http://localhost:3000/dashboard (after login as user)

## Common Commands

```bash
# Backend
cd backend
npm install          # Install dependencies
npm run dev         # Start development server
npm start           # Start production server

# Frontend
cd frontend
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
```

## Troubleshooting

**MongoDB not starting:**
- Check if MongoDB service is running
- Verify MongoDB is installed correctly
- Try: `net start MongoDB` (Windows, as Administrator)

**Port already in use:**
- Backend: Change PORT in backend/.env
- Frontend: Change port in frontend/vite.config.js

**Cannot connect to database:**
- Ensure MongoDB is running
- Check connection string in backend/.env
- Default: mongodb://localhost:27017/hotel_management

## Project Features

✅ User registration and login
✅ Admin and user roles
✅ Room management (CRUD)
✅ Category management
✅ Booking system
✅ User profile management
✅ Admin dashboard
✅ Responsive design

Enjoy using the Hotel Management System! 🏨
