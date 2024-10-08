import React, { useState } from 'react';
import AddUserForm from './AddUserForm';

interface GroupProps {
    groupName: string;
    users: string[];
}

const Group: React.FC<GroupProps> = ({ groupName, users }) => {
    const [groupUsers, setGroupUsers] = useState<string[]>(users);

    const handleAddUser = (username: string) => {
        setGroupUsers([...groupUsers, username]);
    };

    return (
        <div className="container mt-5">
            <h1>Group: {groupName}</h1>
            <ul className="list-group mb-3">
                {groupUsers.map((user, index) => (
                    <li key={index} className="list-group-item">
                        {user}
                    </li>
                ))}
            </ul>
            <AddUserForm onAddUser={handleAddUser} />
        </div>
    );
};

export default Group;