import axios from 'axios';

const API = axios.create({
    baseURL: '/api'
});

// Add token to requests
API.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
});

// Auth APIs
export const authAPI = {
    register: (data) => API.post('/auth/register', data),
    login: (data) => API.post('/auth/login', data),
    getMe: () => API.get('/auth/me'),
    updateProfile: (data) => API.put('/auth/profile', data),
    changePassword: (data) => API.put('/auth/change-password', data)
};

// User APIs (Admin)
export const userAPI = {
    getAllUsers: () => API.get('/users'),
    getUser: (id) => API.get(`/users/${id}`),
    updateUser: (id, data) => API.put(`/users/${id}`, data),
    deleteUser: (id) => API.delete(`/users/${id}`),
    createAdmin: (data) => API.post('/users/admin', data)
};

// Category APIs
export const categoryAPI = {
    getAllCategories: () => API.get('/categories'),
    getCategory: (id) => API.get(`/categories/${id}`),
    createCategory: (data) => API.post('/categories', data),
    updateCategory: (id, data) => API.put(`/categories/${id}`, data),
    deleteCategory: (id) => API.delete(`/categories/${id}`)
};

// Room APIs
export const roomAPI = {
    getAllRooms: (params) => API.get('/rooms', { params }),
    getRoom: (id) => API.get(`/rooms/${id}`),
    getAvailableRooms: () => API.get('/rooms/available'),
    createRoom: (data) => API.post('/rooms', data),
    updateRoom: (id, data) => API.put(`/rooms/${id}`, data),
    deleteRoom: (id) => API.delete(`/rooms/${id}`)
};

// Booking APIs
export const bookingAPI = {
    getAllBookings: () => API.get('/bookings'),
    getMyBookings: () => API.get('/bookings/my-bookings'),
    getBooking: (id) => API.get(`/bookings/${id}`),
    createBooking: (data) => API.post('/bookings', data),
    updateBooking: (id, data) => API.put(`/bookings/${id}`, data),
    cancelBooking: (id) => API.put(`/bookings/${id}/cancel`),
    deleteBooking: (id) => API.delete(`/bookings/${id}`)
};

// Settings APIs
export const settingAPI = {
    getSettings: () => API.get('/settings'),
    updateSettings: (data) => API.put('/settings', data)
};

export default API;
