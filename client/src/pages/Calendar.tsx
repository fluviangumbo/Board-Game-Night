import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import MeetingForm from '../components/calendar/calendarForm'; // Assuming the form is in a separate file
import DisplayData from '../components/calendar/displayData'; // Child component that displays form data



const ParentComponent: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<{
    dayOfWeek: string;
    meetingTime: string;
    gameTitle: string;
    groupName: string;
  } | null>(null); // Changed to null to check if anything is submitted

  // Handle form submission
  const handleFormSubmit = (data: { dayOfWeek: string; meetingTime: string; gameTitle: string; groupName: string }) => {
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
        <MeetingForm onSubmit={handleFormSubmit} />
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

export default ParentComponent;
