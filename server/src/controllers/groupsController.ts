import type { Request, Response } from 'express';
import { Group, Access, Game, User } from '../models/index.js';
import { JwtPayload } from '../middleware/auth.js';


export const getGroups = async (_req: Request, res: Response) => {
    const groups = await Group.findAll();

    return res.json(groups);
};


export const getGroupByName = async (req: Request, res: Response) => {
    const { name } = req.params;

    try {
        const group = await Group.findOne({
            where: { name },
            include: {
                model: User,
                through: { attributes: ['level'] }
            }
        });

        if (group) {
            res.json({group});
        } else {
            res.status(404).json({ message: 'Group not found.' });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
};


export const createGroup = async (req: Request, res: Response) => {
    const { name } = req.body;
    const user = req.user as JwtPayload;
    try {
        const newGroup = await Group.create({ name });
        const group = newGroup.id;
        const level = 'Owner';

        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const newAccess = await Access.create({ user: user.id, group, level });

        res.status(201).json(newGroup);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};


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

// export const addGameToGroup = async (req: Request, res: Response) => {   
//     try {
//         const { gameId } = req.body.game; // can pass Game[]?
//         const { groupId } = req.params;
    
//         const group = await Group.findByPk(groupId);
//         const game = await Game.findByPk(gameId);

//         if (!group) {
//             res.status(404).json({ message: 'Group Error.'});
//         } else if (!game) {
//             res.status(404).json({ message: 'Game not found.' });
//         } else {
//             await group.addGame(game);
//         }

//         res.status(200).json({ message: 'Game added!' });
        
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//     }
// };

export const addMember = async (req: Request, res: Response) => {
    const { name, email } = req.params;
    // const user = req.user as JwtPayload;
    // Need to validate this person is not already a member
    try {
        const join = await Group.findByPk(name);
        
        let group = null;
        let user = null;
        const member = await User.findByPk(email);
        if (member) {
            user = member.id;
        } else {
            res.status(500).json({ message: 'Error - user selection.' });
        }

        if (join) {
            group = join.id;
        } else {
            res.status(500).json({ message: 'Error - group selection.' });
        }
        const level = 'Member';
        

        if (!group || !user || !level) {
            res.status(500).json({ message: 'An error occurred.' });
        } else {
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const newAccess = await Access.create({ user, group, level });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};