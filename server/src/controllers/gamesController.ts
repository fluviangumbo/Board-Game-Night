// import type { Request, Response } from 'express';
import { Game } from '../models/index.js';

// TODO: Code out the controller functions for the games objects
export const getName = async () => {
    const game = await Game.findOne();
    return game?.name;
};

export const getPublished = async () => {
    return
};

export const getRank = async () => {
    return
};