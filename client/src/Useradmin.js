import React, { useEffect, useState } from 'react';
import { Card, Table, Spinner, Alert, Button } from 'react-bootstrap';
import { FaUser, FaPhone, FaEnvelope, FaKey, FaBirthdayCake, FaTrash } from 'react-icons/fa'; // Import icons

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the API
  useEffect(() => {
    fetch('http://localhost:8080/getalluserdata')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          throw new Error('Invalid data format: Expected an array inside the response');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Function to delete a user
  const handleDeleteUser = async (userEmail) => {
    try {
      // Encode the email to handle special characters
      const encodedEmail = encodeURIComponent(userEmail);

      // Construct the URL with the encoded email
      const url = `http://localhost:8080/deleteuser/${encodedEmail}`;

      // Send the DELETE request
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      // Remove the deleted user from the state
      setUsers((prevUsers) => prevUsers.filter((user) => user.email !== userEmail));

      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  return (
    <Card className="dashboard-card shadow-sm">
      <Card.Body>
        <h3 className="mb-4">Users</h3>
        <p className="text-muted">Manage all users here.</p>

        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : users.length === 0 ? (
          <Alert variant="info">No users found.</Alert>
        ) : (
          <Table striped bordered hover responsive className="custom-table">
            <thead>
              <tr>
                <th>
                  <FaUser className="me-2" />
                  ID
                </th>
                <th>
                  <FaUser className="me-2" />
                  Name
                </th>
                <th>
                  <FaPhone className="me-2" />
                  Mobile
                </th>
                <th>
                  <FaEnvelope className="me-2" />
                  Email
                </th>
                <th>
                  <FaKey className="me-2" />
                  Password
                </th>
                <th>
                  <FaBirthdayCake className="me-2" />
                  Age
                </th>
                <th>
                  <FaTrash className="me-2" />
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="table-row">
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.mobile}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.age}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteUser(user.email)}
                    >
                      <FaTrash className="me-1" />
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default Users;

// Custom CSS for the table
const customStyles = `
  .dashboard-card {
    border: none;
    border-radius: 10px;
    background: #ffffff;
    padding: 20px;
  }

  .custom-table {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .custom-table thead th {
    background-color: #007bff;
    color: white;
    font-weight: 600;
    border: none;
  }

  .custom-table tbody td {
    vertical-align: middle;
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
`;

// Inject custom styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = customStyles;
document.head.appendChild(styleSheet);