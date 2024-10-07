import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TimeInput = () => {
    const [time, setTime] = useState("");

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTime(event.target.value);//had to add this line due to error on event listener not infering the proper type
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // You can process the time string here
        alert(`Time submitted: ${time}`);
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <Form.Group controlId="timeInput">
                <Form.Label>Enter Time (e.g., 12:00 PM)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter time as string"
                    value={time}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
                Submit
            </Button>
        </Form>
    );
};

export default TimeInput;
// import React, { useState } from 'react';

// const DateTimeEntry = () => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleTimeChange = (e) => {
//     setTime(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Selected Date: ${date}, Selected Time: ${time}`);
//     // Handle form submission, you could send the data to a server, etc.
//     alert(`Selected Date: ${date}, Selected Time: ${time}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="date">Date: </label>
//         <input
//           type="date"
//           id="date"
//           value={date}
//           onChange={handleDateChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="time">Time: </label>
//         <input
//           type="time"
//           id="time"
//           value={time}
//           onChange={handleTimeChange}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default DateTimeEntry; PLEASE REVIEW THIS CODE AND SEE IF IT CAN BE USED INSTEAD OF THE ABOVE CODE