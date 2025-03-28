import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Alert } from 'react-bootstrap';
import axios from 'axios';
import CarFooter from './Carfooter';

function Carcontactus() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for API response
  const [response, setResponse] = useState({
    success: false,
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Validate form inputs
    if (!formData.name || !formData.email || !formData.message) {
      setResponse({
        success: false,
        message: 'All fields are required!',
      });
      return;
    }

    try {
      console.log('Sending form data:', formData); // Debugging: Log form data

      // Send POST request to the API
      const res = await axios.post('carservice-production-86c5.up.railway.app/usercontactus', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('API response:', res.data); // Debugging: Log API response

      // Handle success response
      setResponse({
        success: true,
        message: res.data.message || 'Thank you for contacting us! We will get back to you shortly.',
      });

      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('API error:', error); // Debugging: Log API error

      // Handle error response
      setResponse({
        success: false,
        message: error.response?.data?.error || 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <div>
      <Container fluid className="p-5" style={{ backgroundColor: '#f0f8ff' }}>
        {/* Header Section */}
        <Row className="mb-5 text-center">
          <Col>
            <h1 style={{ color: '#007bff', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>Contact Us</h1>
            <p style={{ fontSize: '18px' }}>
              We are here to assist you with all your car wash needs. Reach out to us through any of the methods below.
            </p>
          </Col>
        </Row>

        {/* Contact Info and Form Section */}
        <Row>
          <Col md={6} className="mb-4">
            <h2 style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '20px' }}>Get in Touch</h2>
            <p style={{ marginBottom: '30px' }}>Fill out the form below, and we'll get back to you as soon as possible.</p>

            {/* Display success/error message */}
            {response.message && (
              <Alert variant={response.success ? 'success' : 'danger'}>
                {response.message}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: '#007bff', borderColor: '#007bff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
              >
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="400"
                style={{ border: '0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Visit Us</Card.Title>
                <Card.Text>Suvidha Marg, Hissar Road, Agrasain Colony, Sirsa-Haryana - 125055</Card.Text>
                <Button variant="outline-primary" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>Get Directions</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Info Section */}
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="shadow-lg h-100 card-hover" style={{ border: 'none', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Call Us</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Phone:</strong> +91 9876543210</ListGroup.Item>
                  <ListGroup.Item><strong>Hours:</strong> Mon-Fri, 8 AM - 6 PM</ListGroup.Item>
                </ListGroup>
                <Button variant="outline-primary" className="mt-3" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>Call Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-lg h-100 card-hover" style={{ border: 'none', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Email Us</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Email:</strong> info@carwashservice.com</ListGroup.Item>
                </ListGroup>
                <Button variant="outline-primary" className="mt-3" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>Send an Email</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-lg h-100 card-hover" style={{ border: 'none', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Follow Us</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Facebook:</strong> facebook.com/carwashservice</ListGroup.Item>
                  <ListGroup.Item><strong>Instagram:</strong> @carwashservice</ListGroup.Item>
                </ListGroup>
                <Button variant="outline-primary" className="mt-3" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>Follow Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Customer Testimonials */}
        <Row className="mt-5">
          <Col className="text-center">
            <h2 style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '30px' }}>What Our Customers Say</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Text>"Amazing service! My car has never been this clean. Highly recommended!"</Card.Text>
                <footer className="blockquote-footer">Rohan Jain</footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Text>"Great customer service and attention to detail. Will definitely return!"</Card.Text>
                <footer className="blockquote-footer">Amit Bansal</footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Text>"Best car wash in the city. Fast, efficient, and friendly staff!"</Card.Text>
                <footer className="blockquote-footer">Ravi Verma</footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mt-5">
          <Col className="text-center">
            <h2 style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '30px' }}>Frequently Asked Questions</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Do I need an appointment?</Card.Title>
                <Card.Text>No. You can visit us anytime during our working hours.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>What payment methods do you accept?</Card.Title>
                <Card.Text>We accept all major credit cards, debit cards, and cash payments.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <CarFooter />
    </div>
  );
}

export default Carcontactus;