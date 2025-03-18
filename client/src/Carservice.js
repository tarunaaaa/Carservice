import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import CarFooter from './Carfooter';
import carwash1 from './img/carwash1.jpg';
import carwash2 from './img/carwash2.jpg';
import carwash3 from './img/carwash3.jpg';
import carwash4 from './img/carwash4.jpg';
import carwash5 from './img/carwash5.jpg';
import carwash6 from './img/carwash6.jpg';
import oilchange from './img/oilchange.jpg';
import tireservice from './img/tireservice.jpg';
import brakeservice from './img/brakeservice.jpg';
import acservice from './img/acservice.jpg';
import batteryservice from './img/batteryservice.avif';
import inspectionservice from './img/inspectionservice.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './AboutUs.css'; // Import the same CSS file

const CarService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="car-service-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Credibility Badge */}
                <span className="badge rounded-pill bg-warning text-dark px-3 py-2 mb-3">
                  <CheckCircle size={18} className="me-2" /> Trusted Since 2005
                </span>
                <h1 className="display-4 fw-bold mb-4">Our Car Services</h1>
                <p className="lead mb-4">
                  Explore a variety of premium car services designed to suit every need—from basic care to deep cleaning, maintenance, and protective coatings.
                </p>
                <Button variant="warning" size="lg">
                  Book Now
                </Button>
              </motion.div>
            </Col>
            <Col lg={6} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="hero-image-container">
                  <img
                    src="https://img.freepik.com/free-photo/mechanic-hand-checking-fixing-broken-car-car-service-garage_146671-19718.jpg"
                    alt="Car Service"
                    className="img-fluid rounded shadow-lg hover-scale"
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 text-primary" data-aos="fade-up">
            Our Services
          </h2>
          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-100 border-0 shadow-lg">
                    <Card.Img
                      variant="top"
                      src={service.image}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <h3 className="text-primary fw-bold mb-3">{service.title}</h3>
                      <p className="text-muted mb-3">{service.description}</p>
                      <p className="text-muted small mb-3">{service.details}</p>
                      <p className="fw-bold text-dark">Price: {service.price}</p>
                      <Button variant="warning">Book Now</Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #ffcc00, #ff8800)",
          color: "#fff",
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <Container>
          <h2 className="fw-bold mb-4">Ready to Book Your Service?</h2>
          <p className="lead mb-4">Experience premium car care with our award-winning team.</p>
          <Button variant="dark" size="lg">
            Schedule Now
          </Button>
        </Container>
      </section>

      <CarFooter />
    </div>
  );
};

const services = [
  { title: 'Silver Wash', description: 'A quick, effective wash.', details: 'Basic exterior wash.', price: '$15', image: carwash1 },
  { title: 'Gold Wash', description: 'Includes exterior wash and wheel cleaning.', details: 'Regular maintenance wash.', price: '$25', image: carwash2 },
  { title: 'Platinum Wash', description: 'Full detailing and polish.', details: 'Comprehensive interior and exterior clean.', price: '$40', image: carwash3 },
  { title: 'Intensive Internal Cleaning', description: 'Deep clean of interior.', details: 'Seats, mats, and interior surfaces.', price: '$30', image: carwash4 },
  { title: 'Wax Rubbing and Buffing', description: 'Protective wax application.', details: 'Enhances shine and preserves paint.', price: '$35', image: carwash5 },
  { title: 'Teflon Coating', description: 'Long-lasting paint protection.', details: 'Resistant to dirt and scratches.', price: '$50', image: carwash6 },
  { title: 'Oil Change', description: 'Regular oil and filter change.', details: 'Keeps your engine running smoothly.', price: '$40', image: oilchange },
  { title: 'Tire Service', description: 'Tire rotation and balancing.', details: 'Ensures even tire wear and smooth ride.', price: '$30', image: tireservice },
  { title: 'Brake Service', description: 'Brake inspection and maintenance.', details: 'Ensures safe braking performance.', price: '$50', image: brakeservice },
  { title: 'AC Service', description: 'AC system check and recharge.', details: 'Keeps your car cool and comfortable.', price: '$45', image: acservice },
  { title: 'Battery Service', description: 'Battery check and replacement.', details: 'Ensures reliable starting power.', price: '$60', image: batteryservice },
  { title: 'Inspection Service', description: 'Comprehensive vehicle inspection.', details: 'Identifies potential issues early.', price: '$55', image: inspectionservice }
];

export default CarService;