import { useCallback, useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { getAllGroups, makeGroup } from "../api/groupAPI";
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

  const [existingGroups, setExistingGroups] = useState<GroupData[]>([]);
  const initGroups = useCallback(async () => {
    const groups = await getAllGroups();
    setExistingGroups(groups);
  }, [])

  useEffect(() => {initGroups()}, []);

  // const handleSelect = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   if (groupName.trim() === '') {
  //     setError('Group name cannot be empty.');
  //     return;
  //   }

  //   setLoading(true);
  //   setError(null); // Reset the error message

  //   try {
  //     const response = await fetch(`/api/groups/${groupName}`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch group.');
  //     }
  //     const data = await response.json();
  //     setGroupInfo(data);
  //   } catch (error) {
  //     setError((error as Error).message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
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
      <div className="container mt-5">
        <h2>All Groups</h2>
        <div className="mb-3">
          <ul>
            {existingGroups.map((group, index) => (
              <li key={index}><Link to={`/groups/${group.name}`}>{group.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="container mt-5">
        <h2>Fetch Group Details</h2>
        <form onSubmit={handleSelect}>
          <div className="mb-3">
            <label htmlFor="groupName" className="form-label">Group Name:</label>
            <input
              type="text"
              className="form-control"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Fetch Group</button>
        </form>
        {loading && <div>Loading...</div>}
        {error && <div className="text-danger mt-2">{error}</div>}
        {groupInfo && (
          <div className="mt-3">
            <h3>Group Details:</h3>
            <pre>{JSON.stringify(groupInfo, null, 2)}</pre>
          </div>
        )}
      </div> */}
    </div>
  );
};
















export default GroupCreation;


