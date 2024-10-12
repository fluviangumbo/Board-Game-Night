import React, { useCallback, useEffect, useState } from 'react';
// import AddUserForm from '../components/AddUserForm';
import { useParams } from 'react-router-dom';
import { getGroup } from '../api/groupAPI';
import { GroupData } from '../interfaces/Group';

const Group: React.FC = () => {
    const { name } = useParams();
    const [group, setGroup] = useState<GroupData>();
    const initGroup = useCallback(async () => {
        const currentGroup = await getGroup(name!);
        setGroup(currentGroup);
    }, []);

    useEffect(() => {initGroup()}, []);
    console.log(group); 

    // don't have to strigify, we can render the group hwoever we like inside the div
    return (
        <div className="container mt-5">
            <p>{name}</p>
            <div>
                {JSON.stringify(group)}
            </div>
            {/* <AddUserForm onAddUser={handleAddUser} /> */}
        </div>
    );
};

export default Group;