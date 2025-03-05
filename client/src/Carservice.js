import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import CarFooter from './Carfooter';
import carwash1 from './img/carwash1.jpg';
import carwash2 from './img/carwash2.jpg';
import carwash3 from './img/carwash3.jpg';
import carwash4 from './img/carwash4.jpg';
import carwash5 from './img/carwash5.jpg';
import carwash6 from './img/carwash6.jpg';

const CarService = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div>
      <Container style={{ maxWidth: '1200px', padding: '3rem 1rem' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#333',
          borderBottom: '3px solid #007bff',
          paddingBottom: '1rem'
        }}>
          <h1 style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '0.5rem' }}>Our Washing Services</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Explore a variety of premium car wash options designed to suit every need—from basic care to deep cleaning and protective coatings.
          </p>
        </div>

        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="service-card" style={{ marginBottom: '2rem' }}>
              <Card style={{
                border: 'none',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
                className="card-hover"
              >
                <Card.Img variant="top" src={service.image} style={{
                  height: '200px',
                  objectFit: 'cover',
                  filter: 'brightness(0.9)',
                  transition: 'transform 0.3s ease'
                }} />
                <Card.Body style={{
                  padding: '1.5rem',
                  backgroundColor: '#f8f9fa',
                  color: '#333',
                  textAlign: 'center',
                  minHeight: '320px'
                }}>
                  <h3 style={{ color: '#007bff', fontWeight: '600', marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#777' }}>{service.description}</p>
                  <p style={{ fontSize: '0.9rem', color: '#555' }}>{service.details}</p>
                  <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>Price: {service.price}</p>
                  <Button variant="primary" style={{ marginTop: '10px' }}>Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
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
  { title: 'Teflon Coating', description: 'Long-lasting paint protection.', details: 'Resistant to dirt and scratches.', price: '$50', image: carwash6 }
];

export default CarService;
