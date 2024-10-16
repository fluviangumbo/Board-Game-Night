import React from 'react';
import { Card } from 'react-bootstrap';

interface DisplayDataProps {
  formData: {
    gameSummary: string;
    winner: string;
    foodReview: string;
  };
}

const DisplayData: React.FC<DisplayDataProps> = ({ formData }) => {
  const { gameSummary, winner, foodReview} = formData;

  return (
    <Card className="mt-4 custom-card">
      <Card.Body>
        <Card.Title className="card-title">Meeting Information</Card.Title>
        <Card.Text className="card-text">
          <strong>Game Summary:</strong> {gameSummary || 'N/A'}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Game Winner:</strong> {winner || 'N/A'}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Food Review:</strong> {foodReview || 'N/A'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DisplayData;
