import { Link } from 'react-router-dom';
import { FaHotel, FaDoorOpen, FaUsers, FaStar, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title fade-in">Welcome to Grand Hotel</h1>
                    <p className="hero-subtitle fade-in">Experience Luxury and Comfort Like Never Before</p>
                    <div className="hero-buttons fade-in">
                        <Link to="/rooms" className="btn btn-primary btn-lg">
                            Explore Rooms <FaArrowRight />
                        </Link>
                        <Link to="/register" className="btn btn-secondary btn-lg">
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <h2 className="section-title">Why Choose Us</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaHotel />
                            </div>
                            <h3>Luxury Rooms</h3>
                            <p>Experience comfort in our beautifully designed rooms with modern amenities</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaDoorOpen />
                            </div>
                            <h3>Easy Booking</h3>
                            <p>Simple and secure online booking system for your convenience</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaUsers />
                            </div>
                            <h3>24/7 Service</h3>
                            <p>Our dedicated staff is always ready to assist you</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaStar />
                            </div>
                            <h3>Best Rates</h3>
                            <p>Competitive pricing with no hidden charges</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Experience Luxury?</h2>
                        <p>Book your perfect stay with us today and create unforgettable memories</p>
                        <Link to="/rooms" className="btn btn-secondary btn-lg">
                            View All Rooms
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
