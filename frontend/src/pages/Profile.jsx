import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { authAPI } from '../utils/api';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        address: user?.address || ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const { data } = await authAPI.updateProfile(formData);
            updateUser(data.data);
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
        } catch (err) {
            setMessage({ type: 'danger', text: 'Failed to update profile' });
        }

        setLoading(false);
    };

    return (
        <div className="profile-page">
            <div className="container">
                <div className="profile-container">
                    <h1>My Profile</h1>

                    {message.text && <div className={`alert alert-${message.type}`}>{message.text}</div>}

                    <form onSubmit={handleSubmit} className="profile-form">
                        <div className="form-group">
                            <label className="form-label"><FaUser /> Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"><FaEnvelope /> Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={user?.email}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"><FaPhone /> Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"><FaMapMarkerAlt /> Address</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Updating...' : 'Update Profile'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
