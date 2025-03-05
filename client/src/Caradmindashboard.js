import React, { useState, useEffect } from "react";
import { Button, Table, Form, Container, Row, Col, Card } from "react-bootstrap";


export default function CarAdminDashboard() {
  const [student, setStudent] = useState({ msg: [] });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    console.log("Fetching data from API...");
    fetch("http://localhost:8080/getcarsignup")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((resp) => {
        console.log("Data fetched:", resp);
        setStudent(resp);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function apiPost() {
    console.log("Posting data to API...");
    let values = { name, email, password };
    const reqOpt = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch("http://localhost:8080/carsignup", reqOpt)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((resp) => {
        console.log("Data saved successfully:", resp);
        getData();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  }

  return (
    <div className="container">
    
                
                    <h1 className="text-center mb-4">Manage Students</h1>
                    <Row className="justify-content-center mb-4">
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                    className="shadow-sm"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter course"
                                    
                                    // onChange={(e) => setCourse(e.target.value)}
                                    className="shadow-sm"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mb-3">
                        <Col md={4} className="text-center">
                            {flag ? (
                                <Button variant="success" className="px-4 py-2">
                                    Save New User
                                </Button>
                            ) : (
                                <>
                                    <Button variant="warning" className="me-2 px-4 py-2">
                                        Update Data
                                    </Button>
                                    <Button variant="secondary" className="px-4 py-2">
                                        Cancel
                                    </Button>
                                </>
                            )}
                        </Col>
                    </Row>

      <Table
        bordered
        hover
        className="shadow-sm mt-4"
        style={{ width: "100%", backgroundColor: "#ffffff", margin: 0 }}
      >
        <thead className="bg-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.msg.length > 0 ? (
            student.msg.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                                            <Button
                                                variant="outline-primary"
                                                
                                                className="me-2"
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="outline-danger"
                                              
                                            >
                                                Delete
                                            </Button>
                                        </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
