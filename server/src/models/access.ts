import { Model, type Optional, type CreationOptional, DataTypes, type Sequelize, type ForeignKey, } from 'sequelize';
import type { User } from './user.js';
import type { Group } from './group.js';

interface AccessAttributes {
    accessId: number;
    user: number;
    group: number;
    level: string;
}

interface AccessCreationAttributes extends Optional<AccessAttributes, 'accessId'> {}

export class Access extends Model<AccessAttributes, AccessCreationAttributes> implements AccessAttributes {
    public accessId!: CreationOptional<number>;
    public user!: ForeignKey<User['id']>;
    public group!: ForeignKey<Group['id']>;
    public level!: string;
}
export function AccessFactory(sequelize: Sequelize): typeof Access {
    Access.init(
        {
            accessId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            group: {
                type: DataTypes.INTEGER,
                allowNull: false,
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