// import type { Request, Response } from 'express';
import { Game } from '../models/index.js';

// TODO: Code out the controller functions for the games objects
export const getName = async () => {
    const game = await Game.findOne();
    return game?.name;
};

// export const getPublished = async () => {
//     return
// };

// export const getRank = async () => {
//     return
// };

export const hotGames = async (_req: Request, _res: Response) => {
    return;
}

// export const getDetails = async (_req: Request, _res: Response) => {
//     const game = await Game.findOne();
//     return game?.name;
//     // these functions need confirmation with Robby, this one might nor work because difference in API
// }