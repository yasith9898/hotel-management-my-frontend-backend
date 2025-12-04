import { useState, useEffect } from 'react';
import { userAPI } from '../../utils/api';
import './AdminPages.css';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const { data } = await userAPI.getAllUsers();
            setUsers(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleToggleActive = async (id, isActive) => {
        try {
            await userAPI.updateUser(id, { isActive: !isActive });
            fetchUsers();
        } catch (err) {
            alert('Update failed');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this user?')) {
            try {
                await userAPI.deleteUser(id);
                fetchUsers();
            } catch (err) {
                alert('Delete failed');
            }
        }
    };

    return (
        <div className="admin-page">
            <div className="container">
                <h1>Manage Users</h1>

                <div className="admin-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td><span className={`badge badge-${user.role === 'admin' ? 'danger' : 'primary'}`}>{user.role}</span></td>
                                    <td><span className={`badge badge-${user.isActive ? 'success' : 'warning'}`}>{user.isActive ? 'Active' : 'Inactive'}</span></td>
                                    <td>
                                        <button
                                            onClick={() => handleToggleActive(user._id, user.isActive)}
                                            className={`btn btn-sm ${user.isActive ? 'btn-warning' : 'btn-success'}`}
                                        >
                                            {user.isActive ? 'Deactivate' : 'Activate'}
                                        </button>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
