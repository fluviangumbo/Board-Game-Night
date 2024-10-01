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

    return Access;
}