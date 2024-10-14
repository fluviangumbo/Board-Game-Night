import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import React, { useState, FormEvent } from "react";
// import { FormGroup } from "react-bootstrap";

interface SummaryData {
  gameSummary: string;
  winner: string;
  foodReview: string;
}

const SummaryForm = ({onSubmit}:{ onSubmit: (data:SummaryData)=>void}) => {
  // Initial state for form data
  const [formData, setFormData] = useState({
    gameSummary: "",
    winner: "",
    foodReview: "",
  });

  // Handle input changes and update the formData state
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the corresponding field
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Handle form data submission
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Game Summary</h1>
        <div className="form-group">
          <Form.Label>What happened?</Form.Label>
          <FloatingLabel
            controlId="floatingGameSummary"
            label="Type anything fun or of note here"
          >
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type anything fun or of note here"
              name="gameSummary" // Add a name attribute
              value={formData.gameSummary}
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>

        <div className="form-group">
          <Form.Label>Who won?</Form.Label>
          <FloatingLabel
            controlId="floatingWinner"
            label="Type the name of the winner"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Who won the game?"
              name="winner" // Add a name attribute
              value={formData.winner}
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>

        <div className="form-group">
          <Form.Label>Food Review</Form.Label>
          <FloatingLabel
            controlId="floatingFoodReview"
            label="Write any food notes here"
          >
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write any food notes here"
              name="foodReview" // Add a name attribute
              value={formData.foodReview}
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>

        <div className="form-group">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SummaryForm;
