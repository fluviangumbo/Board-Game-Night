import React, { useCallback, useEffect, useState } from 'react';
// import AddUserForm from '../components/AddUserForm';
import { useParams } from 'react-router-dom';
import { getGroup } from '../api/groupAPI';
import { GroupData } from '../interfaces/Group';
// import { UserData } from '../interfaces/UserData';

interface Member {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    Access: { level: string; }
}

interface GroupPage {
    name: string;
    GroupAccess: Member[];
}

const Group: React.FC = () => {
    const { name } = useParams();
    const [group, setGroup] = useState<GroupPage | null>();
    const initGroup = useCallback(async () => {
        const currentGroup = await getGroup(name!);
        setGroup(currentGroup);
    }, []);

    useEffect(() => {initGroup()}, []);
    console.log(group);

    // don't have to strigify, we can render the group hwoever we like inside the div
    return (
        <div className="container mt-5">
            <h2>{name}</h2>
            <div className="mb-3">
                <ul className="user-list">
                    {group!.GroupAccess!.map((user, index) => (
                        <li key={index}>{JSON.stringify(user)}</li>
                    ))}
                    {JSON.stringify(group)}
                </ul>
            </div>
            {/* <AddUserForm onAddUser={handleAddUser} /> */}
        </div>
    );
};

export default Group;