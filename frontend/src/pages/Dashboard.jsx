import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaCalendarCheck, FaUser, FaDoorOpen } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="dashboard-page">
            <div className="container">
                <h1>Welcome, {user?.name}!</h1>
                <p className="dashboard-subtitle">Manage your bookings and profile</p>

                <div className="dashboard-grid">
                    <Link to="/my-bookings" className="dashboard-card card">
                        <div className="dashboard-icon">
                            <FaCalendarCheck />
                        </div>
                        <h3>My Bookings</h3>
                        <p>View and manage your reservations</p>
                    </Link>

                    <Link to="/profile" className="dashboard-card card">
                        <div className="dashboard-icon">
                            <FaUser />
                        </div>
                        <h3>Profile</h3>
                        <p>Update your personal information</p>
                    </Link>

                    <Link to="/rooms" className="dashboard-card card">
                        <div className="dashboard-icon">
                            <FaDoorOpen />
                        </div>
                        <h3>Browse Rooms</h3>
                        <p>Find your perfect accommodation</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
