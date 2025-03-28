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

  const handleDeleteBooking = async (booking) => {
    try {
      const isConfirmed = window.confirm(`Are you sure you want to delete the booking for ${booking.email}?`);
      if (!isConfirmed) return;

      const response = await fetch(`http://localhost:8080/deletebooking`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: booking.email }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }

      setBookings(prevBookings => prevBookings.filter(b => b.email !== booking.email));
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
          <div className="table-responsive-container">
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
                        onClick={() => handleDeleteBooking(booking)}
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

// Custom CSS for the table with improved scrolling
const customStyles = `
  .dashboard-card {
    border: none;
    border-radius: 10px;
    background: #ffffff;
    padding: 20px;
    overflow: hidden;
  }

  .table-responsive-container {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .custom-table {
    width: 100%;
    min-width: 1200px;
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;
  }

  .custom-table thead th {
    position: sticky;
    top: 0;
    background-color: #007bff;
    color: white;
    font-weight: 600;
    border: none;
    padding: 12px;
    text-align: center;
    z-index: 10;
  }

  .custom-table tbody td {
    vertical-align: middle;
    padding: 12px;
    text-align: center;
    background: white;
  }

  .table-row:hover td {
    background-color: #f8f9fa;
  }

  .btn-danger {
    background-color: #dc3545;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
    white-space: nowrap;
  }

  .btn-danger:hover {
    background-color: #c82333;
  }

  /* Column Widths */
  .col-id {
    width: 5%;
    min-width: 50px;
  }

  .col-name {
    width: 10%;
    min-width: 120px;
  }

  .col-email {
    width: 15%;
    min-width: 180px;
  }

  .col-car-brand {
    width: 10%;
    min-width: 120px;
  }

  .col-car-type {
    width: 10%;
    min-width: 120px;
  }

  .col-service-type {
    width: 10%;
    min-width: 120px;
  }

  .col-timings {
    width: 10%;
    min-width: 120px;
  }

  .col-notes {
    width: 15%;
    min-width: 180px;
  }

  .col-created-at {
    width: 10%;
    min-width: 150px;
  }

  .col-action {
    width: 5%;
    min-width: 80px;
  }

  /* Scrollbar styling */
  .table-responsive-container::-webkit-scrollbar {
    height: 8px;
  }

  .table-responsive-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0 0 10px 10px;
  }

  .table-responsive-container::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  .table-responsive-container::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

// Inject custom styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = customStyles;
document.head.appendChild(styleSheet);