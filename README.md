# Hotel Management System - MERN Stack

A complete hotel management system built with MongoDB, Express.js, React.js, and Node.js. This application provides comprehensive features for both administrators and regular users to manage hotel operations efficiently.

## 🌟 Features

### Admin Features
- **Dashboard**: Overview of hotel operations
- **Room Management**: Add, update, delete, and view all rooms
- **Category Management**: Manage room categories
- **Booking Management**: View and manage all bookings, update booking status
- **User Management**: View, activate/deactivate, and delete users
- **Settings**: Configure hotel information, policies, and preferences

### User Features
- **User Registration & Login**: Secure authentication system
- **Browse Rooms**: View available rooms with detailed information
- **Room Categories**: Explore different room types
- **Booking System**: Book rooms with date selection and guest count
- **My Bookings**: View and manage personal reservations
- **Profile Management**: Update personal information
- **Dashboard**: Quick access to user features

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud Database (or Local MongoDB)
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React.js** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Icons** - Icon library

### Additional Features
- **Google Drive Integration** - Image URL support for room photos
- **Sri Lankan Rupees (LKR)** - Currency formatting and display
- **Auto URL Conversion** - Automatic Google Drive link conversion

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB Atlas Account** (Cloud) OR **MongoDB** (Local installation)
- **npm** or **yarn**

## 🚀 Installation & Setup

### 1. Clone or Navigate to Project Directory
```bash
cd "c:\Users\Hi\Desktop\mern asiment\mern hotel 2"
```

### 2. Database Setup - MongoDB Atlas (Cloud) **RECOMMENDED**

**Quick Setup:**
1. Your MongoDB Atlas connection is already configured
2. Connection String: `mongodb+srv://yasith:yasith123@cluster0.cdkpovy.mongodb.net/hotel-management`
3. Update `backend/.env` with this connection string
4. Skip to Step 3 (Backend Setup)

**Detailed Setup (if needed):**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (Free tier available)
4. Go to Database Access → Add New Database User
5. Go to Network Access → Add IP Address (Allow from anywhere: 0.0.0.0/0 for development)
6. Get your connection string from "Connect" → "Connect your application"
7. Update `backend/.env` with your connection string

**OR - Local MongoDB Setup:**

If you prefer local MongoDB:

**Windows:**
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer and follow the installation wizard
3. MongoDB will typically install to `C:\Program Files\MongoDB\Server\{version}\bin`
4. Add MongoDB to your system PATH
5. Create data directory: `mkdir C:\data\db`
6. Start MongoDB: `mongod`

**Alternative - MongoDB as Windows Service:**
MongoDB installer can set it up as a Windows service that starts automatically.

### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Update .env file with MongoDB Atlas connection string
# MONGODB_URI=mongodb+srv://yasith:yasith123@cluster0.cdkpovy.mongodb.net/hotel-management?retryWrites=true&w=majority&appName=Cluster0

# Start the backend server
npm run dev
```

The backend server will run on **http://localhost:5000**

### 4. Frontend Setup

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on **http://localhost:3000**

## 📊 Database Setup

The application will automatically create the database and collections when you start using it. However, you need to create an admin user first.

### Creating Admin User

You can create an admin user in two ways:

**Method 1: Using MongoDB Compass or Shell**

Connect to your local MongoDB and run:

```javascript
use hotel_management

db.users.insertOne({
  name: "Admin User",
  email: "admin@hotel.com",
  password: "$2a$10$YourHashedPasswordHere", // You'll need to hash this
  phone: "1234567890",
  role: "admin",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

**Method 2: Register and Manually Update (Easier)**

1. Register a normal user through the application
2. Use MongoDB Compass or shell to update the user's role:

```javascript
db.users.updateOne(
  { email: "youremail@example.com" },
  { $set: { role: "admin" } }
)
```

**Method 3: Using API (Recommended)**

First, create a regular admin user, then use the admin creation endpoint (requires authentication).

## 🔑 Default Credentials

After creating an admin user as described above, you can use:

- **Email**: admin@hotel.com (or your chosen email)
- **Password**: (your chosen password)

For testing, you can create:
- **Admin**: admin@hotel.com / Admin@123
- **User**: user@hotel.com / User@123

## 📁 Project Structure

```
mern hotel 2/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── bookingController.js  # Booking management
│   │   ├── categoryController.js # Category management
│   │   ├── roomController.js     # Room management
│   │   ├── settingController.js  # Settings management
│   │   └── userController.js     # User management
│   ├── middleware/
│   │   └── auth.js               # Authentication middleware
│   ├── models/
│   │   ├── Booking.js            # Booking schema
│   │   ├── Category.js           # Category schema
│   │   ├── Room.js               # Room schema
│   │   ├── Setting.js            # Setting schema
│   │   └── User.js               # User schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth routes
│   │   ├── bookingRoutes.js      # Booking routes
│   │   ├── categoryRoutes.js     # Category routes
│   │   ├── roomRoutes.js         # Room routes
│   │   ├── settingRoutes.js      # Setting routes
│   │   └── userRoutes.js         # User routes
│   ├── .env                      # Environment variables
│   ├── package.json
│   └── server.js                 # Entry point
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── AdminRoute.jsx    # Admin route protection
    │   │   ├── Footer.jsx        # Footer component
    │   │   ├── Navbar.jsx        # Navigation bar
    │   │   └── PrivateRoute.jsx  # User route protection
    │   ├── context/
    │   │   └── AuthContext.jsx   # Authentication context
    │   ├── pages/
    │   │   ├── admin/            # Admin pages
    │   │   │   ├── AdminBookings.jsx
    │   │   │   ├── AdminCategories.jsx
    │   │   │   ├── AdminDashboard.jsx
    │   │   │   ├── AdminRooms.jsx
    │   │   │   ├── AdminSettings.jsx
    │   │   │   └── AdminUsers.jsx
    │   │   ├── Categories.jsx    # Categories page
    │   │   ├── Dashboard.jsx     # User dashboard
    │   │   ├── Home.jsx          # Home page
    │   │   ├── Login.jsx         # Login page
    │   │   ├── MyBookings.jsx    # User bookings
    │   │   ├── Profile.jsx       # User profile
    │   │   ├── Register.jsx      # Registration page
    │   │   ├── RoomDetails.jsx   # Room details
    │   │   └── Rooms.jsx         # Rooms listing
    │   ├── utils/
    │   │   └── api.js            # API utilities
    │   ├── App.jsx               # Main app component
    │   ├── index.css             # Global styles
    │   └── main.jsx              # Entry point
    ├── index.html
    ├── package.json
    └── vite.config.js

```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/change-password` - Change password

### Rooms
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/:id` - Get single room
- `GET /api/rooms/available` - Get available rooms
- `POST /api/rooms` - Create room (Admin)
- `PUT /api/rooms/:id` - Update room (Admin)
- `DELETE /api/rooms/:id` - Delete room (Admin)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (Admin)
- `PUT /api/categories/:id` - Update category (Admin)
- `DELETE /api/categories/:id` - Delete category (Admin)

### Bookings
- `GET /api/bookings` - Get all bookings (Admin)
- `GET /api/bookings/my-bookings` - Get user bookings
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create booking
- `PUT /api/bookings/:id` - Update booking (Admin)
- `PUT /api/bookings/:id/cancel` - Cancel booking
- `DELETE /api/bookings/:id` - Delete booking (Admin)

### Users (Admin Only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `POST /api/users/admin` - Create admin user

### Settings
- `GET /api/settings` - Get settings
- `PUT /api/settings` - Update settings (Admin)

## 🎨 Design Features

- **Modern UI/UX**: Clean and intuitive interface
- **Responsive Design**: Works on all devices
- **Gradient Backgrounds**: Beautiful color schemes
- **Smooth Animations**: Enhanced user experience
- **Card-based Layouts**: Organized content presentation
- **Interactive Elements**: Hover effects and transitions

## 🔧 Configuration

### Environment Variables (Backend)

The `.env` file in the backend directory contains:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hotel_management
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

### Vite Configuration (Frontend)

The `vite.config.js` is configured to proxy API requests to the backend:

```javascript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true
    }
  }
}
```

## 📱 Usage Guide

### For Users:
1. **Register**: Create an account on the registration page
2. **Login**: Sign in with your credentials
3. **Browse Rooms**: Explore available rooms
4. **Book a Room**: Select dates and number of guests
5. **Manage Bookings**: View and cancel bookings from your dashboard
6. **Update Profile**: Keep your information up to date

### For Administrators:
1. **Login**: Sign in with admin credentials
2. **Manage Rooms**: Add, edit, or remove rooms
3. **Manage Categories**: Organize room types
4. **Handle Bookings**: View and update booking statuses
5. **User Management**: Monitor and manage user accounts
6. **Configure Settings**: Update hotel information and policies

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check Windows Services
- Verify the connection string in `.env`
- Check if port 27017 is available

### Port Already in Use
- Backend: Change `PORT` in `.env`
- Frontend: Change port in `vite.config.js`

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or use a cloud MongoDB service
2. Update `MONGODB_URI` in environment variables
3. Set `NODE_ENV=production`
4. Deploy to services like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist` folder to Netlify, Vercel, or similar services
3. Update API base URL if needed

## 📝 License

This project is open source and available for educational purposes.

## 👥 Support

For issues or questions:
- Check the troubleshooting section
- Review the code documentation
- Ensure all dependencies are properly installed

## 🎯 Future Enhancements

- Payment gateway integration
- Email notifications
- Room availability calendar
- Advanced search and filters
- Reviews and ratings system
- Multi-language support
- Image upload functionality
- Report generation

---

**Developed with ❤️ using MERN Stack**
