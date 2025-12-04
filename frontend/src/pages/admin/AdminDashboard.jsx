import { Link } from 'react-router-dom';
import { FaDoorOpen, FaUsers, FaCalendarCheck, FaCog, FaThLarge } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <div className="container">
                <h1>Admin Dashboard</h1>
                <p className="dashboard-subtitle">Manage your hotel operations</p>

                <div className="admin-grid">
                    <Link to="/admin/rooms" className="admin-card card">
                        <div className="admin-icon"><FaDoorOpen /></div>
                        <h3>Rooms</h3>
                        <p>Manage hotel rooms</p>
                    </Link>

                    <Link to="/admin/categories" className="admin-card card">
                        <div className="admin-icon"><FaThLarge /></div>
                        <h3>Categories</h3>
                        <p>Manage room categories</p>
                    </Link>

                    <Link to="/admin/bookings" className="admin-card card">
                        <div className="admin-icon"><FaCalendarCheck /></div>
                        <h3>Bookings</h3>
                        <p>Manage reservations</p>
                    </Link>

                    <Link to="/admin/users" className="admin-card card">
                        <div className="admin-icon"><FaUsers /></div>
                        <h3>Users</h3>
                        <p>Manage users</p>
                    </Link>

                    <Link to="/admin/settings" className="admin-card card">
                        <div className="admin-icon"><FaCog /></div>
                        <h3>Settings</h3>
                        <p>Hotel settings</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
