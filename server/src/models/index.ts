import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { GroupFactory } from './group.js';
import { AccessFactory } from './access.js';
import { GameFactory } from './game.js';
// ALL OTHER MODELS IMPORT HERE IF WE MAKE THEM

const User = UserFactory(sequelize);
const Group = GroupFactory(sequelize);
const Access = AccessFactory(sequelize);
const Game = GameFactory(sequelize);

// ALL ASSOCIATIONS FOR SEQUELIZE HERE
User.belongsToMany(Group, { through: Access });
Group.belongsToMany(User, { through: Access });
Game.belongsToMany(Group, { through: 'GroupGames' });
Group.belongsToMany(Game, { through: 'GroupGames' });

export { User, Group, Access, Game };