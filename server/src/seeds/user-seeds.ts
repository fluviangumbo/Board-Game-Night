import { User } from '../models/user.js';
//BOILERPLATE FOR SEEDERS
//remember the individualHooks: true for bulkCreate in case we go back

export const seedUsers = async () => {
  await User.create(
    { username: 'JollyGuru',
      email: 'jolly@guru.com',
      password: 'password'
    }
  );
};
