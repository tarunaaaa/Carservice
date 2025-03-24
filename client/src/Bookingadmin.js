import React, { useEffect, useState } from 'react';
import { Card, Table, Spinner, Alert, Button } from 'react-bootstrap';
import { FaIdCard, FaUser, FaEnvelope, FaCar, FaWrench, FaClock, FaStickyNote, FaCalendarAlt, FaTrash } from 'react-icons/fa'; 
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8080/getallbooking')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch booking data');
        }
        return response.json();
      })
      .then((data) => {
        if (data.bookings && Array.isArray(data.bookings)) {
          setBookings(data.bookings);
        } else {
          throw new Error('Invalid data format: Expected an array inside the response');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching booking data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Function to delete a booking
  const handleDeleteBooking = async (bookingId) => {
    try {
      // Send the DELETE request
      const response = await fetch(`http://localhost:8080/deletebooking/${bookingId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }

      // Remove the deleted booking from the state
      setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== bookingId));

      alert('Booking deleted successfully');
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking');
    }
  };

  return (
    <Card className="dashboard-card shadow-sm">
      <Card.Body>
        <h3 className="mb-4">Bookings</h3>
        <p className="text-muted">Manage all bookings here.</p>

        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : bookings.length === 0 ? (
          <Alert variant="info">No bookings found.</Alert>
        ) : (
          <div className="table-container">
            <Table striped bordered hover responsive className="custom-table">
              <thead>
                <tr>
                  <th className="col-id">
                    <FaIdCard className="me-2" />
                    ID
                  </th>
                  <th className="col-name">
                    <FaUser className="me-2" />
                    Name
                  </th>
                  <th className="col-email">
                    <FaEnvelope className="me-2" />
                    Email
                  </th>
                  <th className="col-car-brand">
                    <FaCar className="me-2" />
                    Car Brand
                  </th>
                  <th className="col-car-type">
                    <FaCar className="me-2" />
                    Car Type
                  </th>
                  <th className="col-service-type">
                    <FaWrench className="me-2" />
                    Service Type
                  </th>
                  <th className="col-timings">
                    <FaClock className="me-2" />
                    Timings
                  </th>
                  <th className="col-notes">
                    <FaStickyNote className="me-2" />
                    Notes
                  </th>
                  <th className="col-created-at">
                    <FaCalendarAlt className="me-2" />
                    Created At
                  </th>
                  <th className="col-action">
                    <FaTrash className="me-2" />
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking._id} className="table-row">
                    <td className="col-id">{index + 1}</td>
                    <td className="col-name">{booking.name}</td>
                    <td className="col-email">{booking.email}</td>
                    <td className="col-car-brand">{booking.carBrand}</td>
                    <td className="col-car-type">{booking.carType}</td>
                    <td className="col-service-type">{booking.serviceType}</td>
                    <td className="col-timings">{booking.timing}</td>
                    <td className="col-notes">{booking.notes || "No additional notes"}</td>
                    <td className="col-created-at">{new Date(booking.createdAt).toLocaleString()}</td>
                    <td className="col-action">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteBooking(booking._id)}
                      >
                        <FaTrash className="me-1" />
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Bookings;

// Custom CSS for the table
const customStyles = `
  .dashboard-card {
    border: none;
    border-radius: 10px;
    background: #ffffff;
    padding: 20px;
  }

  .table-container {
    overflow-x: auto;
    width: 100%;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .custom-table {
    width: 100%;
    min-width: 1200px; /* Ensure the table is wider than the container */
    border-collapse: separate;
    border-spacing: 0;
  }

  .custom-table thead th {
    background-color: #007bff;
    color: white;
    font-weight: 600;
    border: none;
    padding: 12px;
    text-align: center;
  }

  .custom-table tbody td {
    vertical-align: middle;
    padding: 12px;
    text-align: center;
  }

  .table-row:hover {
    background-color: #f8f9fa;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn-danger {
    background-color: #dc3545;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
  }

  .btn-danger:hover {
    background-color: #c82333;
  }

  /* Column Widths */
  .col-id {
    width: 5%;
  }

  .col-name {
    width: 10%;
  }

  .col-email {
    width: 15%;
  }

  .col-car-brand {
    width: 10%;
  }

  .col-car-type {
    width: 10%;
  }

  .col-service-type {
    width: 10%;
  }

  .col-timings {
    width: 10%;
  }

  .col-notes {
    width: 15%;
  }

  .col-created-at {
    width: 10%;
  }

  .col-action {
    width: 5%;
  }
`;

// Inject custom styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = customStyles;
document.head.appendChild(styleSheet);