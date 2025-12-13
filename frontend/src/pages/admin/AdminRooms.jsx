import { useState, useEffect } from 'react';
import { roomAPI, categoryAPI } from '../../utils/api';
import './AdminPages.css';

const AdminRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingRoom, setEditingRoom] = useState(null);
    const [formData, setFormData] = useState({
        roomNumber: '',
        name: '',
        category: '',
        description: '',
        price: '',
        capacity: '',
        floor: '',
        size: '',
        amenities: '',
        images: '',
        status: 'available'
    });

    useEffect(() => {
        fetchRooms();
        fetchCategories();
    }, []);

    const fetchRooms = async () => {
        try {
            const { data } = await roomAPI.getAllRooms();
            setRooms(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchCategories = async () => {
        try {
            const { data } = await categoryAPI.getAllCategories();
            setCategories(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const roomData = {
            ...formData,
            amenities: formData.amenities.split(',').map(a => a.trim()),
            images: formData.images.split(',').map(img => img.trim()).filter(img => img)
        };

        try {
            if (editingRoom) {
                await roomAPI.updateRoom(editingRoom._id, roomData);
            } else {
                await roomAPI.createRoom(roomData);
            }
            fetchRooms();
            resetForm();
        } catch (err) {
            alert(err.response?.data?.message || err.message || 'Operation failed');
        }
    };

    const handleEdit = (room) => {
        setEditingRoom(room);
        setFormData({
            ...room,
            category: room.category._id,
            amenities: room.amenities.join(', '),
            images: room.images ? room.images.join(', ') : ''
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this room?')) {
            try {
                await roomAPI.deleteRoom(id);
                fetchRooms();
            } catch (err) {
                alert(err.response?.data?.message || err.message || 'Delete failed');
            }
        }
    };

    const resetForm = () => {
        setFormData({
            roomNumber: '',
            name: '',
            category: '',
            description: '',
            price: '',
            capacity: '',
            floor: '',
            size: '',
            amenities: '',
            images: '',
            status: 'available'
        });
        setEditingRoom(null);
        setShowForm(false);
    };

    return (
        <div className="admin-page">
            <div className="container">
                <div className="admin-header">
                    <h1>Manage Rooms</h1>
                    <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
                        {showForm ? 'Cancel' : 'Add Room'}
                    </button>
                </div>

                {showForm && (
                    <div className="admin-form card">
                        <h2>{editingRoom ? 'Edit Room' : 'Add New Room'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Room Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={formData.roomNumber}
                                        onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Room Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Category</label>
                                    <select
                                        className="form-control"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat._id} value={cat._id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Price (LKR per night)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        required
                                        placeholder="e.g., 15000"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Capacity</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={formData.capacity}
                                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Floor</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={formData.floor}
                                        onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Size (sq ft)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={formData.size}
                                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Amenities (comma separated)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.amenities}
                                    onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                                    placeholder="WiFi, TV, AC, etc."
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Image URLs (comma separated)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={formData.images}
                                    onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                                    placeholder="https://drive.google.com/..., https://example.com/image2.jpg"
                                />
                                <small className="form-text text-muted">
                                    For Google Drive: Share image → Get link → Use direct image URL
                                </small>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Status</label>
                                <select
                                    className="form-control"
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                >
                                    <option value="available">Available</option>
                                    <option value="booked">Booked</option>
                                    <option value="maintenance">Maintenance</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-success">
                                {editingRoom ? 'Update Room' : 'Create Room'}
                            </button>
                        </form>
                    </div>
                )}

                <div className="admin-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Room #</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Capacity</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map(room => (
                                <tr key={room._id}>
                                    <td>{room.roomNumber}</td>
                                    <td>{room.name}</td>
                                    <td>{room.category?.name}</td>
                                    <td>LKR {room.price.toLocaleString()}</td>
                                    <td>{room.capacity}</td>
                                    <td><span className={`badge badge-${room.status === 'available' ? 'success' : 'warning'}`}>{room.status}</span></td>
                                    <td>
                                        <button onClick={() => handleEdit(room)} className="btn btn-sm btn-primary">Edit</button>
                                        <button onClick={() => handleDelete(room._id)} className="btn btn-sm btn-danger">Delete</button>
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

export default AdminRooms;
