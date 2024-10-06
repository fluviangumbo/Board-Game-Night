import { Group } from '../models/index.js';

export const seedGroups = async () => {
    await Group.bulkCreate(
        [
            {
                name: 'Gaming Goobers',
            },
            {
                name: 'Tabletop Tonys',
            },
            {
                name: 'Fun with Phil',
            }
        ],
        { individualHooks: true }
    );
};