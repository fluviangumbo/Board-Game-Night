import { DataTypes, type Sequelize, Model, type Optional, BelongsToManyAddAssociationMixin } from 'sequelize';
import type { Game } from './game.js';

interface GroupAttributes {
    id: number;
    name: string;
}

interface GroupCreationAttributes extends Optional<GroupAttributes, 'id'> {}

export class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
    public id!: number;
    public name!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    declare addGame: BelongsToManyAddAssociationMixin<Game, Game['id']>;

}

export function GroupFactory(sequelize: Sequelize): typeof Group {
    Group.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            tableName: 'groups',
            sequelize,
            hooks: {}, // I believe we will have some
        }
    );

    return Group;
}