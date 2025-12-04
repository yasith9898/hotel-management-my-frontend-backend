import { useState, useEffect } from 'react';
import { bookingAPI } from '../utils/api';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const { data } = await bookingAPI.getMyBookings();
            setBookings(data.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };

    const handleCancel = async (id) => {
        if (window.confirm('Are you sure you want to cancel this booking?')) {
            try {
                await bookingAPI.cancelBooking(id);
                fetchBookings();
            } catch (err) {
                alert('Failed to cancel booking');
            }
        }
    };

    if (loading) return <div className="loading"><div className="spinner"></div></div>;

    return (
        <div className="my-bookings-page">
            <div className="container">
                <h1>My Bookings</h1>

                {bookings.length === 0 ? (
                    <div className="alert alert-info">No bookings found</div>
                ) : (
                    <div className="bookings-list">
                        {bookings.map((booking) => (
                            <div key={booking._id} className="booking-card card">
                                <h3>{booking.room?.name}</h3>
                                <p>Room: {booking.room?.roomNumber}</p>
                                <p>Check-in: {new Date(booking.checkInDate).toLocaleDateString()}</p>
                                <p>Check-out: {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                                <p>Guests: {booking.numberOfGuests}</p>
                                <p>Total: ${booking.totalPrice}</p>
                                <p>Status: <span className={`badge badge-${booking.status === 'confirmed' ? 'success' : 'warning'}`}>{booking.status}</span></p>
                                {booking.status === 'pending' && (
                                    <button onClick={() => handleCancel(booking._id)} className="btn btn-danger">Cancel</button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookings;
