import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaHotel, FaUser, FaSignOutAlt, FaHome, FaDoorOpen, FaCalendarCheck, FaTachometerAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const { user, logout, isAuthenticated, isAdmin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-brand">
                        <FaHotel className="brand-icon" />
                        <span>Grand Hotel</span>
                    </Link>

                    <div className="navbar-menu">
                        <Link to="/" className="nav-link">
                            <FaHome /> Home
                        </Link>
                        <Link to="/rooms" className="nav-link">
                            <FaDoorOpen /> Rooms
                        </Link>
                        <Link to="/categories" className="nav-link">
                            Categories
                        </Link>

                        {isAuthenticated() ? (
                            <>
                                {isAdmin() ? (
                                    <Link to="/admin/dashboard" className="nav-link">
                                        <FaTachometerAlt /> Admin Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link to="/dashboard" className="nav-link">
                                            <FaTachometerAlt /> Dashboard
                                        </Link>
                                        <Link to="/my-bookings" className="nav-link">
                                            <FaCalendarCheck /> My Bookings
                                        </Link>
                                    </>
                                )}
                                <Link to="/profile" className="nav-link">
                                    <FaUser /> Profile
                                </Link>
                                <button onClick={handleLogout} className="btn btn-outline">
                                    <FaSignOutAlt /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-primary">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
