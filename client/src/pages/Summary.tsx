import SummaryForm from "../components/Summary/summary";
import DisplayData from "../components/Summary/displayData";
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const SummaryComponent: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<{
    gameSummary: string;
    winner: string;
    foodReview: string;
  } | null>(null); // Changed to null to check if anything is submitted

  // Handle form submission
  const handleFormSubmit = (data: {
    gameSummary: string;
    winner: string;
    foodReview: string;
  }) => {
    setSubmittedData(data); // Set the submitted data
  };

  // Handle delete/reset functionality
  const handleDelete = () => {
    setSubmittedData(null); // Reset the form data
  };

  return (
    <Container className="p-4">
      {/* If data is submitted, display it; else show the form */}
      {!submittedData ? (
        <SummaryForm onSubmit={handleFormSubmit} />
      ) : (
        <>
          {/* Display the submitted data */}
          <DisplayData formData={submittedData} />
          {/* Delete Button */}
          <Button variant="danger" className="mt-3" onClick={handleDelete}>
            Delete Data
          </Button>
        </>
      )}
    </Container>
  );
};

export default SummaryComponent;
