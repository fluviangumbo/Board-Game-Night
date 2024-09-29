import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { GroupFactory } from './group.js';
import { AccessFactory } from './access.js';
// ALL OTHER MODELS IMPORT HERE IF WE MAKE THEM

const User = UserFactory(sequelize);
const Group = GroupFactory(sequelize);
const Access = AccessFactory(sequelize);

export { User, Group, Access };
