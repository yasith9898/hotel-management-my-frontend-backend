import { useState, useEffect } from 'react';
import { settingAPI } from '../../utils/api';
import './AdminPages.css';

const AdminSettings = () => {
    const [formData, setFormData] = useState({
        hotelName: '',
        hotelEmail: '',
        hotelPhone: '',
        hotelAddress: '',
        currency: 'USD',
        taxRate: 0,
        checkInTime: '14:00',
        checkOutTime: '12:00',
        cancellationPolicy: ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const { data } = await settingAPI.getSettings();
            setFormData(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await settingAPI.updateSettings(formData);
            setMessage({ type: 'success', text: 'Settings updated successfully!' });
        } catch (err) {
            setMessage({ type: 'danger', text: 'Update failed' });
        }
    };

    return (
        <div className="admin-page">
            <div className="container">
                <h1>Hotel Settings</h1>

                {message.text && <div className={`alert alert-${message.type}`}>{message.text}</div>}

                <div className="admin-form card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Hotel Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.hotelName}
                                    onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={formData.hotelEmail}
                                    onChange={(e) => setFormData({ ...formData, hotelEmail: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={formData.hotelPhone}
                                    onChange={(e) => setFormData({ ...formData, hotelPhone: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.hotelAddress}
                                onChange={(e) => setFormData({ ...formData, hotelAddress: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Currency</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.currency}
                                    onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Tax Rate (%)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={formData.taxRate}
                                    onChange={(e) => setFormData({ ...formData, taxRate: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Check-in Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    value={formData.checkInTime}
                                    onChange={(e) => setFormData({ ...formData, checkInTime: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Check-out Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    value={formData.checkOutTime}
                                    onChange={(e) => setFormData({ ...formData, checkOutTime: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Cancellation Policy</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={formData.cancellationPolicy}
                                onChange={(e) => setFormData({ ...formData, cancellationPolicy: e.target.value })}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-success">Update Settings</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
