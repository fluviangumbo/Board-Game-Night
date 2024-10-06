import type { Request, Response } from 'express';
import { Group, Access, Game } from '../models/index.js';

// TODO: Code out the controller functions for groups
// export const getGroups = async () => {
//     return
// };

export const getGroupById = async (req: Request, res: Response) => {
    const { id } = req.params;
// Check if they can access group

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

        await Access.create({ user, group, level }); // Shouldn't matter that we don't reference this

        res.status(201).json(newGroup);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

// export const getMembers = async () => { CAN BE FUTURE IMPLEMENTATION - routing to profiles from group
//     const { group } = req.params;
// };

// export const getMemberById = async () => {
//     return
// };

// export const getOwner = async () => {
//     return
// };

export const getGames = async (req: Request, res: Response) => { 
    const { groupId } = req.params;

    try {
        const games = await Game.findAll({
            include: [{
                model: Group,
                where: { id: groupId },
                through: { attributes: [] },
            }]
        });

        if (!games) {
            res.status(404).json({ message: 'No games found.' });
        }

        res.status(201).json(games);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const addGameToGroup = async (req: Request, res: Response) => {   
    try {
        const { gameId } = req.body.game; // can pass Game[]?
        const { groupId } = req.params;
    
        const group = await Group.findByPk(groupId);
        const game = await Game.findByPk(gameId);

        if (!group) {
            res.status(404).json({ message: 'Group Error.'});
        } else if (!game) {
            res.status(404).json({ message: 'Game not found.' });
        } else {
            await group.addGame(game);
        }

        res.status(200).json({ message: 'Game added!' });
        
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const addMember = async (req: Request, res: Response) => {
    const { id } = req.params;
    // Need to validate this person is not already a member
    try {
        const join = await Group.findByPk(id);
        
        let group = null;
        const user = req.body.user;
        if (join) {
            group = join.id;
        } else {
            res.status(500).json({ message: 'Error - group selection.' });
        }
        const level = req.body.level;

        if (!group || !user || !level) {
            res.status(500).json({ message: 'An error occurred.' });
        } else {
            await Access.create({ user, group, level });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

// export const deleteGame = async () => {
//     return
// };

// export const deleteMember = async () => {
//     return
// };

// export const transferOwner = async () => {
//     return
// };

// export const poll = async () => {
//     return
// };

// export const sendMessage = async () => {
//     return
// };

// export const deleteGroup = async () => {
//     return
// };

