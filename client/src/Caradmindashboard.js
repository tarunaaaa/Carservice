import React, { useState } from "react";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
import { FaUsers, FaCalendarAlt, FaEnvelope, FaBars } from "react-icons/fa";
import Users from "./Useradmin";
import Bookings from "./Bookingadmin";
import Queries from "./Queriesadmin";
import "./CarAdminDashboard.css";

export default function CarAdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <Users />;
      case "bookings":
        return <Bookings />;
      case "queries":
        return <Queries />;
      default:
        return <Users />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <Button variant="link" className="sidebar-toggle" onClick={toggleSidebar}>
            <FaBars size={20} />
          </Button>
          <h3 className="sidebar-title">Admin Panel</h3>
        </div>
        <Nav className="flex-column">
          <Nav.Link
            className={`sidebar-link ${activeTab === "users" ? "active" : ""}`}
            onClick={() => handleTabChange("users")}
          >
            <FaUsers className="sidebar-icon" /> {!sidebarCollapsed && "Users"}
          </Nav.Link>
          <Nav.Link
            className={`sidebar-link ${activeTab === "bookings" ? "active" : ""}`}
            onClick={() => handleTabChange("bookings")}
          >
            <FaCalendarAlt className="sidebar-icon" /> {!sidebarCollapsed && "Bookings"}
          </Nav.Link>
          <Nav.Link
            className={`sidebar-link ${activeTab === "queries" ? "active" : ""}`}
            onClick={() => handleTabChange("queries")}
          >
            <FaEnvelope className="sidebar-icon" /> {!sidebarCollapsed && "Queries"}
          </Nav.Link>
        </Nav>
      </div>

      <div className="main-content">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="dashboard-title">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>{renderContent()}</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}