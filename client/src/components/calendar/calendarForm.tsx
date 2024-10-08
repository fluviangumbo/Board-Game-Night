import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MeetingData { 
  dayOfWeek: string; 
  meetingTime: string; 
  gameTitle: string; 
  groupName: string};

const MeetingForm = ({onSubmit}: { onSubmit: (data: MeetingData) => void }) => {
  const [formData, setFormData] = useState({
    dayOfWeek: '',
    meetingTime: '',
    gameTitle: '',
    groupName: '',
  });

  const groupNames = ['Team A', 'Team B', 'Team C'];

  // Updated handleChange to handle both input and select elements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Handle form data submission
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formDayOfWeek">
          <Form.Label>Day of the Week</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter day of the week"
            name="dayOfWeek"
            value={formData.dayOfWeek}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formMeetingTime">
          <Form.Label>Meeting Time</Form.Label>
          <Form.Control
            type="time"
            name="meetingTime"
            value={formData.meetingTime}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGameTitle">
        <Form.Label>Game Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter game title"
          name="gameTitle"
          value={formData.gameTitle}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Group Name</Form.Label>
        <Form.Select
          name="groupName"
          value={formData.groupName}
          onChange={handleChange}
        >
          <option value="">Choose group...</option>
          {groupNames.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MeetingForm;
