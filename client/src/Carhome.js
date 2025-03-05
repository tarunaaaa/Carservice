import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { FaCar, FaHandSparkles, FaDollarSign, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import Carfooter from './Carfooter';
import homepic from './img/homepic.avif'
import { Link } from 'react-router-dom';

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Direct image URLs
const heroImage = "https://img.freepik.com/premium-photo/photo-man-washing-cleaning-dirty-car-car-service-center_1000320-2277.jpg?w=900";
const serviceImageURLs = [
  "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26058.jpg?t=st=1730809381~exp=1730812981~hmac=d566c72a665b2efb7364b55a00423b4a085fbde4b316548f2e3df00bb15f14d0&w=900",
  "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26047.jpg?t=st=1730809468~exp=1730813068~hmac=bfcba1d35e4091dac0f7f87040a6615d8feede582dda69df8738edc288d77abc&w=900",
  "https://img.freepik.com/free-photo/man-polish-car-garage_1157-26079.jpg?t=st=1730809512~exp=1730813112~hmac=4881b5d5ca292a95be3b4ea29381350636b6c390d6bc35d9d179dcf6eb0ffb63&w=900",
  "https://img.freepik.com/free-photo/man-washing-his-car-garage_1157-26048.jpg?t=st=1730814455~exp=1730818055~hmac=e0f65d3279482d7da4115d0693189d0e14c8547defee88029fb66f578af9150a&w=900",
 
];

function Carhome() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '100px 0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)', // Dark overlay
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Get Your Car Cleaned Right!</h1>
        <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>Professional and Affordable Car Wash Services</p>
        <Link to='/booking'>
        <Button variant="light" size="lg">Book Now</Button>
        </Link>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#e9ecef' }}>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>Why Choose Us?</h2>
          <Row>
            <Col md={4} className="text-center">
              <FaCar size={50} color="#007bff" />
              <h5 style={{ marginTop: '20px' }}>Experienced Staff</h5>
              <p>Our team is trained to provide the best care for your vehicle.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaHandSparkles size={50} color="#007bff" />
              <h5 style={{ marginTop: '20px' }}>Eco-friendly Products</h5>
              <p>We use products that are safe for you and the environment.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaDollarSign size={50} color="#007bff" />
              <h5 style={{ marginTop: '20px' }}>Competitive Pricing</h5>
              <p>Quality service without breaking the bank!</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
    <Container>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>Our Services</h2>
      <Row>
        {serviceImageURLs.slice(0, 4).map((url, index) => (
          <Col md={3} key={index}>
            <Card style={{
              border: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              height: '100%',
              cursor: 'pointer'
            }}
              className="mb-4 hover-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
              }}
            >
              <Card.Img variant="top" src={url} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>{['Basic Wash', 'Deluxe Wash', 'Full Detail', 'Exterior Detailing'][index]}</Card.Title>
                <Card.Text>{['Quick exterior wash to make your car shine.', 'Includes interior cleaning and exterior waxing.', 'Complete detail for interior and exterior.', 'Thorough wash and wax for the exterior.'][index]}</Card.Text>
                <Link to='/washservice'>
                <Button variant="primary">Learn More</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>

      {/* Membership Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#343a40', color: 'white' }}>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Unlimited Wash Club</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>Enjoy unlimited washes for a low monthly fee. Join today!</p>
          <div style={{ textAlign: 'center' }}>
            
            <Button variant="light" size="lg">Learn More</Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      {/* <section style={{
    padding: '80px 0', 
    background: 'linear-gradient(135deg, #d9e2f3, #f8f9fa)', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }}>
    <Container style={{ maxWidth: '800px', textAlign: 'center' }}>
      <h2 style={{
        fontWeight: '700', 
        fontSize: '2.5rem', 
        marginBottom: '50px', 
        color: '#343a40', 
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
      }}>
        What Our Customers Say
      </h2>
      <Carousel controls={false} indicators={true} interval={4000} fade>
        {[
          { text: "Amazing service, my car looks brand new!", name: "John Doe" },
          { text: "Very professional and thorough cleaning!", name: "Jane Smith" },
          { text: "Highly recommend for quick, quality service!", name: "Alice Johnson" },
        ].map((testimonial, idx) => (
          <Carousel.Item key={idx}>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              margin: '0 auto',
              maxWidth: '90%',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out',
            }}>
              <FaQuoteLeft size={28} style={{ color: '#007bff', marginBottom: '10px' }} />
              <p style={{
                fontSize: '1.2rem',
                fontStyle: 'italic',
                marginBottom: '20px',
                color: '#555',
                lineHeight: '1.6',
              }}>
                {testimonial.text}
              </p>
              <FaQuoteRight size={28} style={{ color: '#007bff', marginBottom: '20px' }} />
              <p style={{
                fontWeight: 'bold', 
                fontSize: '1.1rem', 
                color: '#007bff', 
                marginTop: '10px', 
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                — {testimonial.name}
              </p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </section> */}


      {/* Pricing Section */}
      {/* <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Pricing Plans</h2>
          <Row className="justify-content-center">
            <Col md={3} className="text-center">
              <Card style={{ marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Basic Wash</Card.Title>
                  <Card.Text>$15</Card.Text>
                  <Button variant="primary">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
              <Card style={{ marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Deluxe Wash</Card.Title>
                  <Card.Text>$25</Card.Text>
                  <Button variant="primary">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
              <Card style={{ marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Full Detail</Card.Title>
                  <Card.Text>$50</Card.Text>
                  <Button variant="primary">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Contact Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Contact Us</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>Have questions? We're here to help!</p>
          <Row className="justify-content-center">
            <Col md={4}>
            <Link to='/contactus'>
              <Button variant="primary" size="lg" style={{ width: '100%' }}>Get In Touch</Button>
              </Link>
            </Col>
          </Row>
          <Row className="text-center" style={{ marginTop: '30px' }}>
            <Col>
              <FaPhoneAlt size={30} style={{ marginBottom: '10px' }} />
              <p>Call Us: (123) 456-7890</p>
            </Col>
            <Col>
              <FaDollarSign size={30} style={{ marginBottom: '10px' }} />
              <p>Affordable Prices</p>
            </Col>
            <Col>
              <FaHandSparkles size={30} style={{ marginBottom: '10px' }} />
              <p>Quality Service</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Carfooter />
    </div>
  );
}

export default Carhome;
