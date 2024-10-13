import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { GroupFactory } from './group.js';
import { AccessFactory } from './access.js';
import { GameFactory } from './game.js';

const User = UserFactory(sequelize);
const Group = GroupFactory(sequelize);
const Access = AccessFactory(sequelize);
const Game = GameFactory(sequelize);

// ALL ASSOCIATIONS FOR SEQUELIZE HERE
User.belongsToMany(Group, { through: Access, as: 'UserAccess', foreignKey: 'user' }); // Added this so we could see if that fixes the associations issues on single group page rendering of users
Group.belongsToMany(User, { through: Access, as: 'GroupAccess', foreignKey: 'group' });
Game.belongsToMany(Group, { through: 'GroupGames' });
Group.belongsToMany(Game, { through: 'GroupGames' });

export { User, Group, Access, Game };