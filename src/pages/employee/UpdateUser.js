import "./UpdateUser.css";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deparment: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/employee/${id}`,
        );
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching user", error.message);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("User updated:", data);
      navigate(`/`);
    } catch (error) {
      console.error("Error updating user", error.message);
    }
  };
  return (
    <div className="center-form">
      <h3 className="title">Update Employee</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter valid name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter valid email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter valid phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter valid deparment"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Edit Employee
        </Button>
      </Form>
    </div>
  );
}

export default UpdateUser;
