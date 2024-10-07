import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import React, { FormEvent } from "react";
import { FormGroup } from "react-bootstrap";

const SummaryForm = () => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const {} = e.target;
    // setLoginData({
    //   ...loginData,
    //   [name]: value,
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // try {
    //   const data = await login(loginData);
    //   Auth.login(data.token);
    // } catch (err) {
    //   console.error('Failed to login', err);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Game Summary</h1>
        <div className="form-group">
          <Form.Label>What happened?</Form.Label>
          <FloatingLabel
            controlId="floatingPassword"
            label="Type anything fun or of note here"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <Form.Label>Who won?</Form.Label>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>What happened?</Form.Label>
          <FloatingLabel
            controlId="floatingPassword"
            label="Type anything fun or of note here"
          >
            <Form.Control as="textarea" rows={3} onChange={handleChange} />
          </FloatingLabel>
        </FormGroup>
        </div>
        <div className="form-group">
          <Form.Label>Food Review</Form.Label>
          <FloatingLabel
            controlId="floatingPassword"
            label="Write any food notes here"
          >
            <Form.Control as="textarea" rows={3} onChange={handleChange} />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            // <Form.Check type="checkbox" label="Remember Me" />
            //{" "}
          </Form.Group>
          //{" "}
          <Button variant="primary" type="submit">
            // Submit //{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SummaryForm;
