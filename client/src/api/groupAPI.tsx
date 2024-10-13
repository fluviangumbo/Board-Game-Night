import Auth from '../utils/auth';
import { GroupData } from "../interfaces/Group";

export const makeGroup = async (groupInfo: GroupData) => {
    try {
        const response = await fetch('/api/groups', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${Auth.getToken()}`
            },
            body: JSON.stringify(groupInfo),
        });

        if (!response.ok) {
            throw new Error('Could not create group, check network tab!');
        }
        
        const data = await response.json();

        return data;
    } catch (err) {
        console.log('Error creating group: ', err);
    }
}

export const getGroup = async (groupName: string) => {
    try {
        const response = await fetch(`/api/groups/${groupName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Auth.getToken()}`
              },
        });

        const data = await response.json();

        return data;
    } catch (err) {
        console.log('Error finding group: ', err);
    }
}

export const getAllGroups = async () => {
    try {
        const response = await fetch('/api/groups', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Auth.getToken()}`
              },
        })

        return await response.json();
    } catch (err) {
        console.log('Error fetching groups.', err);
    }
}
