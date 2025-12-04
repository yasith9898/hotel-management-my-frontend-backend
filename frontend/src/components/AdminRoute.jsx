import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
    const { isAdmin, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
            </div>
        );
    }

    return isAdmin() ? children : <Navigate to="/" />;
};

export default AdminRoute;
