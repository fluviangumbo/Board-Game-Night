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