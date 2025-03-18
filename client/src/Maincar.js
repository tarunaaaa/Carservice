// src/components/CustomNavbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FaHome, FaCar, FaInfoCircle, FaEnvelope, FaClipboardList, FaUserShield, FaUser, FaUserPlus } from 'react-icons/fa';
import Carhome from './Carhome';
import Caraboutus1 from './Caraboutus1';
import Aboutusbackup from './Aboutusbackup'
import Carcontactus from './Carcontactus';
import Carservice from './Carservice';
import Carbooking from './Carbooking';
import CarDashboard from './CarDasboard';
import CarAdminDashboard from './Caradmindashboard';
import Caruserlogin from './Caruserlogin';
import CarUserSignup from './Carusersignup';
import CarBookingPage from './CarBookingPage';
import Caruserdashboard from './Caruserdashboard';
import Caradminlogin from './Caradminlogin'
import Contactusbackup from './Contactusbackup'
function Maincar() {
  return (
    <div>
      <BrowserRouter>
        <Navbar expand="lg" style={navbarStyle} className="animated-navbar">
          <Container>
            <Navbar.Brand as={Link} to="/home" style={brandStyle} className="brand-hover">
              <FaHome style={homeIconStyle} /> Car Wash Service
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto" style={navContainerStyle}>
                <Nav.Link as={Link} to="/washservice" style={linkStyle} className="nav-hover">
                  <FaCar style={iconStyle} /> Car Services
                </Nav.Link>
                <Nav.Link as={Link} to="/aboutus" style={linkStyle} className="nav-hover">
                  <FaInfoCircle style={iconStyle} /> About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/contactus" style={linkStyle} className="nav-hover">
                  <FaEnvelope style={iconStyle} /> Contact Us
                </Nav.Link>
              </Nav>
              <div style={buttonContainerStyle}>
                <Button as={Link} to="/userlogin" style={authButtonStyle} className="button-hover">
                  <FaUser /> Login
                </Button>
                <Button as={Link} to="/usersignup" style={authButtonStyle} className="button-hover">
                  <FaUserPlus /> Signup
                </Button>
                <Button as={Link} to="/carbooking" style={iconButtonStyle} className="icon-hover">
                  <FaClipboardList />
                </Button>
                <Button as={Link} to="/adminlogin" style={iconButtonStyle} className="icon-hover">
                  <FaUserShield />
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Carhome />} />
          <Route path="/home" element={<Carhome />} />
          <Route path="/aboutus" element={<Aboutusbackup />} />
          {/* <Route path="/contactus" element={<Carcontactus />} /> */}
          <Route path="/contactus" element={<Contactusbackup />} />
          <Route path="/washservice" element={<Carservice />} />
          {/* <Route path="/booking" element={<Carbooking />} /> */}
          <Route path="/dashboard" element={<CarDashboard />} />
          <Route path="/admindashboard" element={<CarAdminDashboard />} />
          <Route path="/userlogin" element={<Caruserlogin />} />
          <Route path="/usersignup" element={<CarUserSignup/>} />
          <Route path="/carbooking" element={<CarBookingPage/>} />
          <Route path="/userdashboard" element={<Caruserdashboard/>} />
          <Route path="/adminlogin" element={<Caradminlogin/>} />
        </Routes>
      </BrowserRouter>

      {/* Animation Styles */}
      <style>
        {`
          /* Navbar Animation */
          .animated-navbar {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .animated-navbar:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
          }

          /* Nav Link Hover */
          .nav-hover {
            position: relative;
            overflow: hidden;
          }
          .nav-hover::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background: #ffcc00;
            left: -100%;
            bottom: 0;
            transition: left 0.3s ease-in-out;
          }
          .nav-hover:hover::after {
            left: 0;
          }

          /* Brand Hover */
          .brand-hover {
            transition: color 0.3s ease-in-out;
          }
          .brand-hover:hover {
            color: #ffcc00 !important;
          }

          /* Button Hover */
          .button-hover {
            transition: transform 0.3s ease, background 0.3s ease;
          }
          .button-hover:hover {
            transform: scale(1.05);
            background: #0056b3 !important;
          }

          /* Icon Button Hover */
          .icon-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .icon-hover:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(255, 204, 0, 0.6);
          }
        `}
      </style>
    </div>
  );
}

export default Maincar;

// Styles
const homeIconStyle = {
  marginRight: '5px',
  fontSize: '1.3rem',
  verticalAlign: 'middle',
};

const iconStyle = {
  marginRight: '5px',
  fontSize: '1rem',
  verticalAlign: 'middle',
};

const navbarStyle = {
  background: 'rgba(0, 82, 212, 0.85)',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  padding: '12px 0',
  borderRadius: '8px',
};

const brandStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
};

const navContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const linkStyle = {
  color: '#ffffff',
  fontSize: '1rem',
  fontWeight: '500',
  margin: '0 10px',
  transition: 'color 0.3s ease',
  textDecoration: 'none',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
};

const authButtonStyle = {
  fontSize: '0.9rem',
  fontWeight: 'bold',
  color: '#ffffff',
  backgroundColor: '#007bff',
  borderColor: '#007bff',
  borderRadius: '30px',
  padding: '6px 14px',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 8px rgba(0, 123, 255, 0.4)',
};

const iconButtonStyle = {
  backgroundColor: '#ffcc00',
  borderColor: '#ffcc00',
  color: '#ffffff',
  fontSize: '1rem',
  borderRadius: '50%',
  padding: '6px 10px',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 8px rgba(255, 204, 0, 0.4)',
};
