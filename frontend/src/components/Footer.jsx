import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Grand Hotel</h3>
                        <p>Experience luxury and comfort at its finest. Your perfect stay awaits.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/rooms">Rooms</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="contact-info">
                            <p><FaMapMarkerAlt /> 123 Hotel Street, City, Country</p>
                            <p><FaPhone /> +1 234 567 890</p>
                            <p><FaEnvelope /> info@grandhotel.com</p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Newsletter</h4>
                        <p>Subscribe to get special offers and updates</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your email" className="form-control" />
                            <button className="btn btn-secondary">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Grand Hotel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
