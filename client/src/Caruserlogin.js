import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button, Form, Container, Card, Row, Col, Modal } from "react-bootstrap";
import CarFooter from "./Carfooter";

const Caruserlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  const handleClosePopup = () => setShowPopup(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("carservice-production-86c5.up.railway.app/getuserlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("userEmail", email); // Store email in local storage
        localStorage.setItem("userData", JSON.stringify(data)); // Store user data
        setPopupMessage("Login Successful!");
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
          navigate("/userdashboard"); // Navigate to user dashboard
        }, 1500);
      } else {
        setPopupMessage(data.error || "Login failed. Please try again.");
        setShowPopup(true);
      }
    } catch (err) {
      setPopupMessage("Something went wrong. Please try again later.");
      setShowPopup(true);
    }
  };

  return (
    <div className="login-page">
      <Container className="login-container d-flex align-items-center justify-content-center">
        <Row className="login-row align-items-center">
          <Col md={5} className="d-flex justify-content-center">
            <img
              src="https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9916.jpg"
              alt="Login Visual"
              className="login-image"
            />
          </Col>
          <Col md={7} className="login-form-container d-flex justify-content-center">
            <Card className="login-card p-5 shadow-lg">
              <Card.Body>
                <h2 className="text-center mb-4 fw-bold text-primary">Log In</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <div className="input-icon-wrapper">
                      <FaEnvelope className="input-icon" />
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ color: email ? "black" : "inherit" }}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="input-icon-wrapper">
                      <FaLock className="input-icon" />
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ color: password ? "black" : "inherit" }}
                      />
                    </div>
                  </Form.Group>

                  <Button type="submit" className="btn-primary w-100 py-2">
                    Login
                  </Button>
                </Form>
                <div className="text-center mt-3">
                  <Link to="/signup" className="text-decoration-none text-primary fw-bold">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Popup Modal */}
      <Modal show={showPopup} onHide={handleClosePopup} centered>
        <Modal.Body className="text-center">
          <p className="fw-bold">{popupMessage}</p>
          <Button variant="primary" onClick={handleClosePopup}>
            OK
          </Button>
        </Modal.Body>
      </Modal>

      <style>
        {`
          .login-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to right, #e0e0e0, #d6dbe0);
          }

          .login-container {
            width: 100%;
            max-width: 900px;
          }

          .login-card {
            width: 100%;
            max-width: 500px;
            border-radius: 12px;
            background: white;
            border: none;
          }

          .input-icon-wrapper {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 10px;
            background: #f9f9f9;
          }

          .input-icon {
            margin-right: 10px;
            color: #007bff;
          }

          .login-image {
            width: 100%;
            max-width: 600px;
            border-radius: 12px;
          }

          .btn-primary {
            background: #007bff;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .btn-primary:hover {
            background: #0056b3;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

const caruser = () => {
  return (
    <div>
      <Caruserlogin />
      <CarFooter />
    </div>
  );
};

export default caruser;
