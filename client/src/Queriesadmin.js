import React, { useEffect, useState } from 'react';
import { Card, Table, Spinner, Container } from 'react-bootstrap';
import './Queries.css'; // Optional: For custom styling

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch('http://localhost:8080/getcontact');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setQueries(data.data); // Assuming the API returns { status, message, data }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </Container>
    );
  }

  return (
    <Card className="dashboard-card shadow-sm">
      <Card.Body>
        <Card.Title className="mb-4">
          <h3>Customer Queries</h3>
          <p className="text-muted">Manage all customer inquiries and feedback.</p>
        </Card.Title>

        <Table striped bordered hover responsive className="queries-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query) => (
              <tr key={query._id}>
                <td>{query._id}</td>
                <td>{query.name}</td>
                <td>{query.email}</td>
                <td>{query.message}</td>
                <td>{new Date(query.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Queries;