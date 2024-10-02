<<<<<<< HEAD
// import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
// import { User, Group } from './index.js';

// interface AccessAttributes {

// }

// interface AccessCreationAttributes extends Optional<AccessAttributes, > {} //check with Ian on this

// export class Access extends Model<AccessAttributes, AccessCreationAttributes> implements AccessAttributes {

// }

// export function AccessFactory(sequelize: Sequelize): typeof Access {
//     Access.init(
//         {
//             user: {
//                 type: DataTypes.INTEGER,
//                 refernces: {
//                     model: User,
//                     key: 'id',
//                 },
//                 allowNull: false,
//             },
//             group: {
//                 type: DataTypes.INTEGER,
//                 references: {
//                     model: Group,
//                     key: 'id',
//                 },
//                 allowNull: false,
//             },
//             level: {
//                 type: DataTypes.ENUM('Owner', 'Admin', 'Member'),
//                 allowNull: false,
//             },
//         },
//         {
//             tableName: 'access',
//             sequelize,
//             hooks: {},
//         }
//     );
=======
import { Model, type InferAttributes, type InferCreationAttributes, type CreationOptional, DataTypes, type Sequelize, type ForeignKey, } from 'sequelize';
import type { User } from './user.js';
import type { Group } from './group.js';

export class Access extends Model<InferAttributes<Access>, InferCreationAttributes<Access>> {
    declare accessId: CreationOptional<number>;
    declare user: ForeignKey<User['id']>;
    declare group: ForeignKey<Group['id']>;
    declare level: string;
}

export function AccessFactory(sequelize: Sequelize): typeof Access {
    Access.init(
        {
            accessId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            level: {
                type: DataTypes.ENUM('Owner', 'Admin', 'Member'),
                allowNull: false,
            },
        },
        {
            tableName: 'access',
            sequelize,
            hooks: {},
        }
    );
>>>>>>> ed81c181e077455149f30611d7e6865fbfe97f93

//     return Access;
// }