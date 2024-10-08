// import { useState, useEffect, useLayoutEffect } from "react";
// import { retrieveUsers } from "../api/userAPI";
// import type { UserData } from "../interfaces/UserData";
// import ErrorPage from "./ErrorPage";
// import UserList from "../components/Users";
// import auth from "../utils/auth";
// import { Link } from "react-router-dom";
// import Table from "react-bootstrap/Table";

// const calendar = () => {
//   return (
//     <>
//       <div>Header</div>
//       <div> Board Game Browesing</div>
//       <main>
//         <div className="Calendar">
//           <Table striped bordered hover>
//             <thead>
//                 <tr>
//                     <th>Monday</th>
//                     <th>Tuesday</th>
//                     <th>Wednesday</th>
//                     <th>Thursday</th>
//                     <th>Friday</th>
//                     <th>Saturday</th>
//                     <th>Sunday</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr> 
//                     <td>Game 1</td>
//                     <td>Game 2</td>
//                     <td>Game 3</td>
//                     <td>Game 4</td>
//                     <td>Game 5</td>
//                     <td>Game 6</td>
//                     <td>Game 7</td>
//                 </tr>
//                 <tr>
//                     <td>Game 8</td>
//                     <td>Game 9</td>
//                     <td>Game 10</td>
//                     <td>Game 11</td>
//                     <td>Game 12</td>
//                     <td>Game 13</td>
//                     <td>Game 14</td>
//                 </tr>
//                 <tr>
//                     <td>Game 15</td>
//                     <td>Game 16</td>
//                     <td>Game 17</td>
//                     <td>Game 18</td>
//                     <td>Game 19</td>
//                     <td>Game 20</td>
//                     <td>Game 21</td>
//                 </tr>
//             </tbody>
//           </Table>
//         </div>
//       </main>
//       <div>Game Notes</div>
//     </>
//   );
// };

// export default calendar;

import React, { useState } from 'react';
import { Modal, Button, Form, Container, Row, Col, Card } from 'react-bootstrap';

// Define the type for the events state
interface EventsState {
  [key: number]: string; // day (1 to 31) as key, event description as value
}

const Calendar: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [events, setEvents] = useState<EventsState>({});
  const [eventText, setEventText] = useState<string>('');

  // Open modal for the selected date
  const handleDayClick = (day: number) => {
    setSelectedDate(day);
    setEventText(events[day] || ''); // Pre-fill the event if it exists
    setShowModal(true);
  };

  // Handle the event submission
  const handleSaveEvent = () => {
    if (selectedDate !== null) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [selectedDate]: eventText,
      }));
    }
    setShowModal(false);
  };

  return (
    <Container>
      <h2 className="text-center my-4">Calendar</h2>
      <Row>
        {/* Render Days of the Month */}
        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
          <Col xs={12} sm={4} md={3} lg={2} key={day} className="mb-4">
            <Card onClick={() => handleDayClick(day)}>
              <Card.Body>
                <Card.Title>{`Day ${day}`}</Card.Title>
                <Card.Text>{events[day] ? events[day] : 'No events'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Event Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event for Day {selectedDate}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={eventText}
                onChange={(e) => setEventText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEvent}>
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Calendar;