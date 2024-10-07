import { seedUsers } from './user-seeds.js';
import { seedGroups } from './group-seeds.js';
import { seedAccess } from './access-seeds.js';
import { seedGames } from './game-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedGroups();
    console.log('\n----- GROUPS SEEDED -----\n');

    await seedAccess();
    console.log('\n----- ACCESS SEEDED -----\n');

    await seedGames();
    console.log('\n----- GAMES SEEDED -----\n');

    console.log('\nDatabase successfully seeded.\n');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
