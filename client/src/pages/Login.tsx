import { useState, type FormEvent } from 'react';
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interfaces/UserLogin';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'


const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
<div className="form-container">
      <form className="form login-form login-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <Form.Label>Email address</Form.Label>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <Form.Label>Password</Form.Label>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
          </FloatingLabel>
        </div>
        <div className="form-group">
          <Form.Group className="mb-3 remember" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Remember Me" />
            {" "}
          </Form.Group>
          {" "}
          <Button variant="primary" type="submit">
            Submit{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
