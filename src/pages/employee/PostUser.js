import React, { useState } from "react";
import "./PostUser.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const PostUser = () => {
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

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8080/api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Employee created:", data);
      navigate("/");
    } catch (error) {
      console.log("Error create employee", error);
    }
  };
  return (
    <div className="center-form">
      <h3 className="title">Create New Employee</h3>
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
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PostUser;
