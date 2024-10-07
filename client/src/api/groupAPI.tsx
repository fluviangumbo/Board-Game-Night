// import type { Request, Response } from 'express';
// // import type { Group } from '../interfaces/Group';
// // import type { Access } from '../interfaces/Access';
// //Still having some issues here


// export const createGroup = async (req: Request, res: Response) => {
//     const { name } = req.body.groupName;
//     const { user } = req.body.creatorId;
//     try {
//         const newGroup = await Group.create({ name });
//         const group = newGroup.id;
//         const level = 'Owner';

//         // @ts-ignore
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         const newAccess = await Access.create({ user, group, level }); // Shouldn't matter that we don't reference this

//         res.status(201).json(newGroup);
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//     }
// };

// MIGHT NEED TO TROUBLESHOOT THIS WITH IAN/ELI