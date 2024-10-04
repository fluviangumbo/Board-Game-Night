import type { Request, Response } from 'express';
import { Group, Access } from '../models/index.js';

// TODO: Code out the controller functions for groups
// export const getGroups = async () => {
//     return
// };

export const getGroupById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const group = await Group.findByPk(id);

        if (group) {
            res.json(group);
        } else {
            res.status(404).json({ message: 'Group not found.' });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
};

export const createGroup = async (req: Request, res: Response) => {
    const { name } = req.body.groupName;
    const { user } = req.body.creatorId;
    try {
        const newGroup = await Group.create({ name });
        const group = newGroup.id;
        const level = 'Owner';

        const newAccess = await Access.create({ user, group, level }); // Shouldn't matter that we don't reference this

        res.status(201).json(newGroup);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const getMembers = async () => {
    return
};

export const getMemberById = async () => {
    return
};

export const getOwner = async () => {
    return
};

export const getGames = async () => {
    return
};

export const addGames = async () => {
    return
};

export const addMember = async () => { // We can add this as a method directly on the instance creation - see activity 20 Book.ts in week 14
    return
};

export const deleteGame = async () => {
    return
};

export const deleteMember = async () => {
    return
};

export const setAccess = async () => {
    return
};

// export const transferOwner = async () => {
//     return
// };

// export const poll = async () => {
//     return
// };

// export const sendMessage = async () => {
//     return
// };

export const deleteGroup = async () => {
    return
};

export { router as groupRouter };