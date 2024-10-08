import React from 'react';
import { Card } from 'react-bootstrap';

interface DisplayDataProps {
  formData: {
    dayOfWeek: string;
    meetingTime: string;
    gameTitle: string;
    groupName: string;
  };
}

const DisplayData: React.FC<DisplayDataProps> = ({ formData }) => {
  const { dayOfWeek, meetingTime, gameTitle, groupName } = formData;

  return (
    <Card className="mt-4 custom-card">
      <Card.Body>
        <Card.Title className="card-title">Meeting Information</Card.Title>
        <Card.Text className="card-text">
          <strong>Day of the Week:</strong> {dayOfWeek || 'N/A'}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Meeting Time:</strong> {meetingTime || 'N/A'}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Game Title:</strong> {gameTitle || 'N/A'}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Group Name:</strong> {groupName || 'N/A'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DisplayData;
