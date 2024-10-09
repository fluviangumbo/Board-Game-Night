import { useState, type FormEvent } from "react";
import { makeGroup } from "../api/groupAPI";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import type { GroupData } from "../interfaces/Group";

const GroupCreation = () => {
  const [groupData, setGroupData] = useState<GroupData>({
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement
    >
  ) => {
    const { name, value } = e.target;
    setGroupData({
      ...groupData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await makeGroup(groupData);
      console.log("Group created successfully");
    } catch (err) {
      console.error("Failed to create group", err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create a New Group</h2>
        <div className="form-group">
          <FloatingLabel
            controlId="floatingInput"
            label="Unique Group Name"
            className="mb-3"
          >
            <Form.Control
              type="name"
              name="name"
              placeholder="Group names must be unique!"
              value={groupData.name ?? ''}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </div>
          <Button variant="primary" type="submit">
            Create Group
          </Button>
      </form>
    </div>
  );
};


export default GroupCreation;



// To create a group:
// 1. User must be logged in
    // a. check if user is logged in
    // b. promt to log in if not

// 2. User must create a group name
    // a. form to create group name 
    // b. check if group name is unique
    // c.  if yes proceed to next step
    // d. if no, prompt user to create a new group name
    // e. group name must be alphanumeric

// 3. User must add members to the group
    // a. form to add members to the group
        // i. form must have a search bar to search for users
        // ii. form must have a button to add members
        // iii. form must have a button to submit members
        // iv. form must have a button to cancel adding members
        // v. user must be able to see the members they have added
        // vi. search bar must have autocomplete
        // vii. search bar must have a dropdown of users
        // viii. Search with username or email
    // b. check if members are valid users
    // c. check if members are already in the group
    // d. if yes proceed to next step
    // e. if no, prompt user to add valid users

// 4. User may add games to the group
    // a. form to add games to the group
        // i. form must have a search bar to search for games
        // ii. form must have a button to add games
        // iii. form must have a button to submit games
        // iv. form must have a button to cancel adding games
        // v. user must be able to see the games they have added
        // vi. search bar must have autocomplete
        // vii. search bar must have a dropdown of games
        // viii. Search with game name