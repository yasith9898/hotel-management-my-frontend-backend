import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { roomAPI } from '../utils/api';
import { FaUsers, FaRulerCombined, FaBed } from 'react-icons/fa';
import './Rooms.css';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const { data } = await roomAPI.getAllRooms();
            setRooms(data.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to load rooms');
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger container mt-5">{error}</div>;
    }

    return (
        <div className="rooms-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Rooms</h1>
                    <p>Find your perfect accommodation</p>
                </div>
            </div>

            <div className="container">
                <div className="rooms-grid">
                    {rooms.length === 0 ? (
                        <p className="text-center">No rooms available at the moment</p>
                    ) : (
                        rooms.map((room) => (
                            <div key={room._id} className="room-card card">
                                <div className="room-image">
                                    {room.images && room.images.length > 0 ? (
                                        <img src={room.images[0]} alt={room.name} />
                                    ) : (
                                        <div className="placeholder-image">
                                            <FaBed />
                                        </div>
                                    )}
                                    <span className={`room-status badge badge-${room.status === 'available' ? 'success' : 'warning'}`}>
                                        {room.status}
                                    </span>
                                </div>

                                <div className="room-content">
                                    <h3>{room.name}</h3>
                                    <p className="room-number">Room #{room.roomNumber}</p>
                                    <p className="room-description">{room.description}</p>

                                    <div className="room-details">
                                        <span><FaUsers /> {room.capacity} Guests</span>
                                        <span><FaRulerCombined /> {room.size} sq ft</span>
                                    </div>

                                    <div className="room-footer">
                                        <div className="room-price">
                                            <span className="price-label">From</span>
                                            <span className="price-value">${room.price}</span>
                                            <span className="price-period">/night</span>
                                        </div>
                                        <Link to={`/rooms/${room._id}`} className="btn btn-primary">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Rooms;
