import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { GroupFactory } from './group.js';
// import { AccessFactory } from './access.js';
import { GameFactory } from './game.js';
// ALL OTHER MODELS IMPORT HERE IF WE MAKE THEM

const User = UserFactory(sequelize);
const Group = GroupFactory(sequelize);
// const Access = AccessFactory(sequelize);
const Game = GameFactory(sequelize);

export { User, Group,  Game };
