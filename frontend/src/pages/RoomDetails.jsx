import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { roomAPI, bookingAPI } from '../utils/api';
import { FaUsers, FaRulerCombined, FaBed, FaWifi, FaTv, FaSnowflake } from 'react-icons/fa';
import './RoomDetails.css';

const RoomDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookingData, setBookingData] = useState({
        checkInDate: '',
        checkOutDate: '',
        numberOfGuests: 1,
        specialRequests: ''
    });
    const [bookingLoading, setBookingLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchRoom();
    }, [id]);

    const fetchRoom = async () => {
        try {
            const { data } = await roomAPI.getRoom(id);
            setRoom(data.data);
            setLoading(false);
        } catch (err) {
            setMessage({ type: 'danger', text: 'Failed to load room details' });
            setLoading(false);
        }
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        setBookingLoading(true);
        setMessage({ type: '', text: '' });

        try {
            await bookingAPI.createBooking({
                room: id,
                ...bookingData
            });
            setMessage({ type: 'success', text: 'Booking created successfully!' });
            setTimeout(() => navigate('/my-bookings'), 2000);
        } catch (err) {
            setMessage({ type: 'danger', text: err.response?.data?.message || 'Booking failed' });
        }

        setBookingLoading(false);
    };

    if (loading) {
        return <div className="loading"><div className="spinner"></div></div>;
    }

    if (!room) {
        return <div className="container mt-5"><div className="alert alert-danger">Room not found</div></div>;
    }

    return (
        <div className="room-details-page">
            <div className="container">
                <div className="room-details-grid">
                    <div className="room-images">
                        {room.images && room.images.length > 0 ? (
                            <img src={room.images[0]} alt={room.name} className="main-image" />
                        ) : (
                            <div className="placeholder-main"><FaBed /></div>
                        )}
                    </div>

                    <div className="room-info">
                        <h1>{room.name}</h1>
                        <p className="room-number">Room #{room.roomNumber}</p>
                        <div className="room-price-large">
                            <span className="price">${room.price}</span>
                            <span className="period">/night</span>
                        </div>

                        <div className="room-specs">
                            <div className="spec"><FaUsers /> {room.capacity} Guests</div>
                            <div className="spec"><FaRulerCombined /> {room.size} sq ft</div>
                            <div className="spec"><FaBed /> Floor {room.floor}</div>
                        </div>

                        <div className="room-description-full">
                            <h3>Description</h3>
                            <p>{room.description}</p>
                        </div>

                        {room.amenities && room.amenities.length > 0 && (
                            <div className="amenities">
                                <h3>Amenities</h3>
                                <div className="amenities-list">
                                    {room.amenities.map((amenity, index) => (
                                        <span key={index} className="amenity-badge">
                                            <FaWifi /> {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="booking-section card">
                    <h2>Book This Room</h2>
                    {message.text && <div className={`alert alert-${message.type}`}>{message.text}</div>}

                    <form onSubmit={handleBooking}>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Check-in Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={bookingData.checkInDate}
                                    onChange={(e) => setBookingData({ ...bookingData, checkInDate: e.target.value })}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Check-out Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={bookingData.checkOutDate}
                                    onChange={(e) => setBookingData({ ...bookingData, checkOutDate: e.target.value })}
                                    min={bookingData.checkInDate || new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Number of Guests</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={bookingData.numberOfGuests}
                                    onChange={(e) => setBookingData({ ...bookingData, numberOfGuests: e.target.value })}
                                    min="1"
                                    max={room.capacity}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Special Requests (Optional)</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={bookingData.specialRequests}
                                onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                                placeholder="Any special requests or requirements..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" disabled={bookingLoading || room.status !== 'available'}>
                            {bookingLoading ? 'Processing...' : room.status !== 'available' ? 'Room Not Available' : 'Book Now'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
