// import type { Access } from '../interfaces/Access';
import Auth from '../utils/auth';
import { GroupCreate } from "../interfaces/Group";

export const makeGroup = async (groupInfo: GroupCreate) => {
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