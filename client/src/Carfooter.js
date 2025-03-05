import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const footerStyle = {
  backgroundColor: '#1a1a1a', // dark background
  color: '#f0f0f0', // light text color
  padding: '40px 0',
};

const CarFooter = () => {
  return (
    <footer style={footerStyle}>
      <Container fluid className="bg-dark text-light py-5">
        <Row className="mb-4">
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: 'bold', color: '#87CEEB99', borderBottom: '2px solid #87CEEB99', paddingBottom: '10px', marginBottom: '20px' }}>
              Car Wash Service
            </h5>
            <p>Suvidha Marg, Hissar Road, Agrasain Colony, Sirsa-Haryana - 125055</p>
            <p>
              Email: <a href="mailto:info@carwashservice.com" className="text-light" style={{ textDecoration: 'none' }}>info@carwashservice.com</a>
            </p>
            <p>
              Phone: <a href="tel:+919876543210" className="text-light" style={{ textDecoration: 'none' }}>+91 9876543210</a>
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: 'bold', color: '#87CEEB99', borderBottom: '2px solid #87CEEB99', paddingBottom: '10px', marginBottom: '20px' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Nav.Link as={Link} to="/home" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>Home</Nav.Link></li>
              <li><Nav.Link as={Link} to="/aboutus" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>About Us</Nav.Link></li>
              <li><Nav.Link as={Link} to="/washservice" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>Services</Nav.Link></li>
              <li><Nav.Link as={Link} to="/contactus" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>Contact Us</Nav.Link></li>
              <li><Nav.Link as={Link} to="/booking" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>Book Now</Nav.Link></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: 'bold', color: '#87CEEB99', borderBottom: '2px solid #87CEEB99', paddingBottom: '10px', marginBottom: '20px' }}>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px' }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px' }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px' }}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <p style={{ color: '#aaa', marginTop: '10px' }}>Stay connected with us for the latest updates and promotions.</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <h5 style={{ fontWeight: 'bold', color: '#87CEEB99', marginBottom: '20px' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
              Subscribe to Our Newsletter
            </h5>
            <form action="#" method="post" className="d-flex justify-content-center">
              <input type="email" placeholder="Enter your email" className="form-control me-2" style={{ maxWidth: '300px' }} />
              <button type="submit" className="btn" style={{ backgroundColor: '#87CEEB99', color: 'white' }}>Subscribe</button>
            </form>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col className="text-center">
            <p style={{ fontSize: '14px', color: '#aaa' }}>&copy; {new Date().getFullYear()} Car Wash Service. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CarFooter;
