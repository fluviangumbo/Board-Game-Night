import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
// ALL OTHER MODELS IMPORT HERE IF WE MAKE THEM

const User = UserFactory(sequelize);

export { User };
