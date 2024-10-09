// import type { Access } from '../interfaces/Access';
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

export const getGroup = async (groupName: GroupData) => {
    try {
        const response = await fetch('/api/groups/:name', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Auth.getToken()}`
              },
              body: JSON.stringify(groupName),
        });

        const data = await response.json();

        return data;
    } catch (err) {
        console.log('Error finding group: ', err);
    }
}

export const addUserstoGroup = async (userEmail: string) => {
    try {
        
    } catch (err) {
        console.log('Error adding user: ', err);
    }
}