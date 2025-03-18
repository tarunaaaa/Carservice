import React, { useState } from "react";
import { Form, Button, Card, Container, InputGroup, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock, FaKey } from "react-icons/fa";
import "./AdminLogin.css"; // Custom styles for the theme

import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "taruna" && password === "123456") {
      console.log("Admin Logged In", { username, password });
      navigate("/admindashboard")
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Container
      fluid
      className="admin-login-container d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1387759698/photo/hand-of-car-mechanic-with-wrench-auto-repair-garage-mechanic-works-on-the-engine-of-the-car.jpg?s=612x612&w=0&k=20&c=JVYyKMvP-NN-bTMyIF-pNrifwvjyjKcIRjTVEmSmPsM=')", // Replace with your preferred bg image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={5} lg={4}>
          <Card className="admin-login-card border-0 shadow-lg">
            <Card.Body className="p-5">
              {/* Header with Icon */}
              <div className="text-center mb-5">
                <FaKey className="theme-icon mb-3" size={40} />
                <h2 className="fw-bold text-uppercase">Admin Access</h2>
                <p className="text-muted small">Secure Login Portal</p>
              </div>

              {/* Form */}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername" className="mb-4">
                  <InputGroup>
                    <InputGroup.Text className="bg-transparent border-end-0">
                      <FaUser className="text-blue" />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="border-start-0 border-top-0 border-right-0 rounded-0 shadow-none"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <InputGroup>
                    <InputGroup.Text className="bg-transparent border-end-0">
                      <FaLock className="text-blue" />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="border-start-0 border-top-0 border-right-0 rounded-0 shadow-none"
                    />
                  </InputGroup>
                </Form.Group>

                {error && (
                  <p className="text-danger text-center small mb-4">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-100 py-2 fw-semibold login-button"
                >
                  Login
                </Button>
              </Form>

             

              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;