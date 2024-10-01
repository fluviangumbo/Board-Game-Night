import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import { User, Group } from './index.js';

interface AccessAttributes {

}

interface AccessCreationAttributes extends Optional<AccessAttributes, > {} //check with Ian on this

export class Access extends Model<AccessAttributes, AccessCreationAttributes> implements AccessAttributes {

}

export function AccessFactory(sequelize: Sequelize): typeof Access {
    Access.init(
        {
            user: {
                type: DataTypes.INTEGER,
                refernces: {
                    model: User,
                    key: 'id',
                },
                allowNull: false,
            },
            group: {
                type: DataTypes.INTEGER,
                references: {
                    model: Group,
                    key: 'id',
                },
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