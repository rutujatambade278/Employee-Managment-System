import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import './Add.css';

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    employeeId: "", // Added employeeId state
    
  });

  const { name, username, email, employeeId } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to upload image using Spring Boot API
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formFile">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            
            <div className="mb-3">
              <Form.Label htmlFor="Name">FullName</Form.Label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
        
            <div className="mb-3">
              <Form.Label htmlFor="EmployeeId">Employee ID</Form.Label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Employee ID"
                name="employeeId"
                value={employeeId}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <Form.Label htmlFor="Username">Username</Form.Label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <Form.Label htmlFor="Email">E-mail</Form.Label>
              <input
                type={"text"}
                className="form-control"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
