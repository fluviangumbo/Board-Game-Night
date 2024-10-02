import { useState, type FormEvent, type ChangeEvent } from "react";

import Auth from "../utils/auth";
import { login } from "../api/authAPI";
import type { UserLogin } from "../interfaces/UserLogin";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const SignUp = () => {
  const [userData, setUserData] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement
    >
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(userData);
      Auth.login(data.token);
      console.log("User created successfully");
    } catch (err) {
      console.error("Failed to create user", err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create a New Account</h2>
        <div className="form-group">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="username"
              placeholder="name@example.com"
              value={userData.username ?? ''}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password ?? ''}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            //{" "}
            <Form.Check
              type="checkbox"
              label="Check the box to agree to the terms and conditions."
            />
            //{" "}
          </Form.Group>
          //{" "}
          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
