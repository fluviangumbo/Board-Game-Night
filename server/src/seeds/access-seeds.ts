import { Access } from '../models/index.js';

export const seedAccess = async () => {
    await Access.bulkCreate(
        [
            {
                user: 1,
                group: 1,
                level: 'Owner',
            },
            {
                user: 2,
                group: 2,
                level: 'Owner',
            },
            {
                user: 3,
                group: 3,
                level: 'Owner',
            },
        ],
        { individualHooks: true }
    );
};