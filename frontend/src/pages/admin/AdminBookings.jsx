import { useState, useEffect } from 'react';
import { bookingAPI } from '../../utils/api';
import './AdminPages.css';

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const { data } = await bookingAPI.getAllBookings();
            setBookings(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await bookingAPI.updateBooking(id, { status });
            fetchBookings();
        } catch (err) {
            alert('Update failed');
        }
    };

    return (
        <div className="admin-page">
            <div className="container">
                <h1>Manage Bookings</h1>

                <div className="admin-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking Ref</th>
                                <th>User</th>
                                <th>Room</th>
                                <th>Check-in</th>
                                <th>Check-out</th>
                                <th>Guests</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => (
                                <tr key={booking._id}>
                                    <td>{booking.bookingReference}</td>
                                    <td>{booking.user?.name}</td>
                                    <td>{booking.room?.roomNumber}</td>
                                    <td>{new Date(booking.checkInDate).toLocaleDateString()}</td>
                                    <td>{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                                    <td>{booking.numberOfGuests}</td>
                                    <td>${booking.totalPrice}</td>
                                    <td><span className={`badge badge-${booking.status === 'confirmed' ? 'success' : 'warning'}`}>{booking.status}</span></td>
                                    <td>
                                        <select
                                            value={booking.status}
                                            onChange={(e) => handleStatusUpdate(booking._id, e.target.value)}
                                            className="form-control"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="confirmed">Confirmed</option>
                                            <option value="checked-in">Checked-in</option>
                                            <option value="checked-out">Checked-out</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
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

export default AdminBookings;
