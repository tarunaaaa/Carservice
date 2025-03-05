import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card, InputGroup, Image, Modal } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCalendar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import CarFooter from "./Carfooter";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false); // State for popup modal

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending Data:", JSON.stringify(formData));

    try {
      const response = await fetch("http://localhost:8080/getusersignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setShowModal(true); // Show success popup
        setFormData({ name: "", email: "", mobile: "", age: "", password: "" }); // Reset form
      } else {
        setError(data.error || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  // Internal CSS styles (unchanged)
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to right, #eef2f6, #ffffff)",
      padding: "20px",
    },
    leftSection: {
      textAlign: "center",
      padding: "40px",
    },
    title: {
      fontWeight: "bold",
      color: "#007bff",
    },
    text: {
      fontSize: "1.2rem",
      color: "#555",
    },
    image: {
      width: "100%",
      maxWidth: "400px",
      marginTop: "15px",
      borderRadius: "10px",
    },
    formSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      width: "100%",
      maxWidth: "450px",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    inputGroupText: {
      backgroundColor: "#007bff",
      color: "white",
      borderRadius: "8px 0 0 8px",
    },
    inputField: {
      color: "black", // Ensures text color in input fields is black
    },
    button: {
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "1.1rem",
      padding: "10px",
      backgroundColor: "#007bff",
      border: "none",
      transition: "background 0.3s ease-in-out",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <Container fluid style={styles.container}>
      <Row className="align-items-center">
        {/* Left Section - Title and Image */}
        <Col md={6} style={styles.leftSection}>
          <h2 style={styles.title}>Join the Premium Car Service Community</h2>
          <p style={styles.text}>
            Get exclusive access to priority bookings, customized plans, and more.
          </p>
          <Image
            src="https://img.freepik.com/free-photo/silver-sport-car-with-driver-highway_114579-4004.jpg?t=st=1740720977~exp=1740724577~hmac=27495169408e562fa7187504aa2f4e1c8f26f70fc409be4ae4d53018ea6ad2ca&w=1800"
            alt="Car Service"
            fluid
            style={styles.image}
          />
        </Col>

        {/* Right Section - Signup Form */}
        <Col md={6} style={styles.formSection}>
          <Card style={styles.card}>
            <Card.Body>
              <h3 className="text-center text-primary">Create Your Account</h3>
              {error && <p className="text-danger text-center">{error}</p>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={styles.inputGroupText}>
                      <FaUser />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={styles.inputField}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={styles.inputGroupText}>
                      <FaPhone />
                    </InputGroup.Text>
                    <Form.Control
                      type="tel"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      style={styles.inputField}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={styles.inputGroupText}>
                      <FaEnvelope />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={styles.inputField}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={styles.inputGroupText}>
                      <FaLock />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      style={styles.inputField}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={styles.inputGroupText}>
                      <FaCalendar />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      name="age"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      style={styles.inputField}
                    />
                  </InputGroup>
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 mt-3"
                  style={styles.button}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Signup Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome to our service! Your account has been created successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SignupForm;
