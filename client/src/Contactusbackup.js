import React, { useState, useEffect ,useRef } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Alert } from 'react-bootstrap';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Carcontactus.css'; // Import the CSS file
import CarFooter from './Carfooter';

function Carcontactus() {
  const testimonialsRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [response, setResponse] = useState({
    success: false,
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setResponse({
        success: false,
        message: 'All fields are required!',
      });
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/usercontactus', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setResponse({
        success: true,
        message: res.data.message || 'Thank you for contacting us! We will get back to you shortly.',
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setResponse({
        success: false,
        message: error.response?.data?.error || 'Failed to send message. Please try again later.',
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: "linear-gradient(135deg, #000428, #004e92)",
          color: "#fff",
          padding: "80px 0",
        }}
      >
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
                  <ChevronRight size={18} className="me-2" /> Trusted Since 2005
                </span>
                <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
                <p className="lead mb-4">
                  We are here to assist you with all your car service needs. Reach out to us through any of the methods below.
                </p>
                <Button variant="warning" size="lg" className="rounded-pill px-4" onClick={() => testimonialsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                  Learn More <ChevronRight size={20} />
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
                    src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
                    alt="Contact Us"
                    className="img-fluid rounded shadow-lg hover-scale"
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

     {/* Contact Form & Info Section */}
<section className="py-5">
  <Container>
    <Row>
      {/* Contact Form */}
      <Col md={6} className="mb-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Fly in to the center
          transition={{ duration: 0.8, delay: 0.2 }} // Add a slight delay
        >
          <h2 className="mb-4 fw-bold text-primary">Get in Touch</h2>
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
              className="w-100 py-3 rounded-pill"
            >
              Send Message
            </Button>
          </Form>
        </motion.div>
      </Col>

      {/* Contact Info & Google Map */}
      <Col md={6} className="mb-4">
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Fly in to the center
          transition={{ duration: 0.8, delay: 0.4 }} // Add a slight delay
        >
          <Card className="border-0 shadow-lg">
            <Card.Body>
              <h3 className="mb-4 fw-bold text-primary">Contact Information</h3>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center mb-3">
                  <Phone size={24} className="me-3 text-primary" />
                  <div>
                    <strong>Phone:</strong> +91 9876543210
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center mb-3">
                  <Mail size={24} className="me-3 text-primary" />
                  <div>
                    <strong>Email:</strong> info@elitecarservice.com
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center mb-3">
                  <MapPin size={24} className="me-3 text-primary" />
                  <div>
                    <strong>Address:</strong> Suvidha Marg, Hissar Road, Agrasain Colony, Sirsa-Haryana - 125055
                  </div>
                </ListGroup.Item>
              </ListGroup>
              {/* Google Map */}
              <div className="google-map mt-4">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.097144864362!2d75.028724315095!3d29.16614468218068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123d4b8e8a4b3b%3A0x4c7b8f0f9f0f9f0f!2sSuvidha%20Marg%2C%20Hissar%20Road%2C%20Agrasain%20Colony%2C%20Sirsa%2C%20Haryana%20125055!5e0!3m2!1sen!2sin!4v1632131234567!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    </Row>
  </Container>
</section>
    {/* Social Media Section */}
<section className="py-5 bg-light">
  <Container>
    <h2 className="text-center mb-5 fw-bold text-primary">Follow Us</h2>
    <Row className="g-4">
      {[
        { icon: <Facebook size={40} className="text-primary" />, name: "Facebook" },
        { icon: <Instagram size={40} className="text-primary" />, name: "Instagram" },
      ].map((social, index) => (
        <Col md={6} key={index}>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ scale: 1.1, y: -10 }} // Added slight lift effect
          >
            <Card className="text-center border-0 shadow-lg">
              <Card.Body>
                {social.icon}
                <Card.Title className="mt-3">{social.name}</Card.Title>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* Testimonials Section */}
      <section  ref={testimonialsRef} className="py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold text-primary">What Our Customers Say</h2>
          <Row className="g-4">
            {[
              { name: "Rohan Jain", text: "Amazing service! My car has never been this clean. Highly recommended!" },
              { name: "Amit Bansal", text: "Great customer service and attention to detail. Will definitely return!" },
              { name: "Ravi Verma", text: "Best car service in the city. Fast, efficient, and friendly staff!" },
            ].map((testimonial, index) => (
              <Col md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center border-0 shadow-lg">
                    <Card.Body>
                      <Card.Text className="fst-italic">"{testimonial.text}"</Card.Text>
                      <Card.Title className="mt-3">{testimonial.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold text-primary">Frequently Asked Questions</h2>
          <Row className="g-4">
            {[
              { question: "Do I need an appointment?", answer: "No. You can visit us anytime during our working hours." },
              { question: "What payment methods do you accept?", answer: "We accept all major credit cards, debit cards, and cash payments." },
            ].map((faq, index) => (
              <Col md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-0 shadow-lg">
                    <Card.Body>
                      <Card.Title>{faq.question}</Card.Title>
                      <Card.Text>{faq.answer}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <CarFooter />
    </div>
  );
}

export default Carcontactus;