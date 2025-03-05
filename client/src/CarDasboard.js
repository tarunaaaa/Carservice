import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Badge, Image } from 'react-bootstrap';
import { FaCalendarAlt, FaHistory, FaUserEdit, FaTag } from 'react-icons/fa';
import carbook from './img/bookcar.jpg'
import carapp from './img/carappointment.jpg'
import carserive from './img/carservice.jpg'
import carsetting from './img/carsetting.jpg'
import caroffers from './img/caroffers.jpg'
const CarDashboard = () => {
  const styles = {
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    card: {
      marginBottom: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s',
      backgroundColor: '#fff', // White background for each card
    },
    cardHover: {
      transform: 'scale(1.03)',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
    },
    button: {
      backgroundColor: '#007bff',
      border: 'none',
      fontWeight: 'bold',
    },
    listItem: {
      fontSize: '1rem',
      padding: '10px',
      color: '#555',
    },
    badge: {
      fontSize: '0.9rem',
      marginLeft: '8px',
      color: '#fff',
      backgroundColor: '#ff6347',
    },
    image: {
      width: '200px',
      height: '200px',
      borderRadius: '8px',
      objectFit: 'cover',
      marginRight: '20px',
    },
    cardContent: {
      display: 'flex',
      alignItems: 'center',
    },
    container: {
      marginTop: '30px',
      maxWidth: '1000px',
      backgroundColor: '#f5f5f5', // Light gray background for the page
      padding: '20px',
      borderRadius: '8px', // Rounded corners for the container
    },
  };

  return (
    <Container style={styles.container}>
      <h2 style={{ color: '#007bff', textAlign: 'center', marginBottom: '30px' }}>User Dashboard</h2>
      
      <Row>
        <Col md={12}>
          <Card
            style={styles.card}
            className="hoverable-card"
            onMouseEnter={(e) => e.currentTarget.style = styles.cardHover}
            onMouseLeave={(e) => e.currentTarget.style = styles.card}
          >
            <Card.Body style={styles.cardContent}>
              <Image src={carbook} style={styles.image} alt="Book Service" />
              <div>
                <Card.Title style={styles.sectionTitle}>
                  <FaCalendarAlt /> Book a Service
                </Card.Title>
                <Card.Text>
                  Schedule a car wash appointment at your convenience.
                </Card.Text>
                <Button style={styles.button}>Book Now</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card
            style={styles.card}
            className="hoverable-card"
            onMouseEnter={(e) => e.currentTarget.style = styles.cardHover}
            onMouseLeave={(e) => e.currentTarget.style = styles.card}
          >
            <Card.Body style={styles.cardContent}>
              <Image src={carapp} style={styles.image} alt="Upcoming Appointments" />
              <div>
                <Card.Title style={styles.sectionTitle}>
                  <FaCalendarAlt /> Upcoming Appointments
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item style={styles.listItem}>
                    Appointment on 15 Nov, 10:00 AM <Badge style={styles.badge}>Soon</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item style={styles.listItem}>Appointment on 20 Nov, 2:00 PM</ListGroup.Item>
                  <ListGroup.Item style={styles.listItem}>Appointment on 25 Nov, 4:00 PM</ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card
            style={styles.card}
            className="hoverable-card"
            onMouseEnter={(e) => e.currentTarget.style = styles.cardHover}
            onMouseLeave={(e) => e.currentTarget.style = styles.card}
          >
            <Card.Body style={styles.cardContent}>
              <Image src={carserive} style={styles.image} alt="Service History" />
              <div>
                <Card.Title style={styles.sectionTitle}>
                  <FaHistory /> Service History
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item style={styles.listItem}>Service on 1 Nov - Completed</ListGroup.Item>
                  <ListGroup.Item style={styles.listItem}>Service on 5 Oct - Completed</ListGroup.Item>
                  <ListGroup.Item style={styles.listItem}>Service on 20 Sept - Completed</ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card
            style={styles.card}
            className="hoverable-card"
            onMouseEnter={(e) => e.currentTarget.style = styles.cardHover}
            onMouseLeave={(e) => e.currentTarget.style = styles.card}
          >
            <Card.Body style={styles.cardContent}>
              <Image src={carsetting} style={styles.image} alt="Profile Settings" />
              <div>
                <Card.Title style={styles.sectionTitle}>
                  <FaUserEdit /> Profile Settings
                </Card.Title>
                <Card.Text>
                  View and update your profile information to keep it up to date.
                </Card.Text>
                <Button style={styles.button}>Edit Profile</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card
            style={styles.card}
            className="hoverable-card"
            onMouseEnter={(e) => e.currentTarget.style = styles.cardHover}
            onMouseLeave={(e) => e.currentTarget.style = styles.card}
          >
            <Card.Body style={styles.cardContent}>
              <Image src={caroffers} style={styles.image} alt="Exclusive Offers" />
              <div>
                <Card.Title style={styles.sectionTitle}>
                  <FaTag /> Exclusive Offers
                </Card.Title>
                <Card.Text>
                  Take advantage of our special discounts and offers for loyal customers.
                </Card.Text>
                <Button style={styles.button}>View Offers</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CarDashboard;
