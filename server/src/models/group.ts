import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

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
            },
            // games: {
            //     type: DataTypes.ARRAY(DataTypes.INTEGER),
            //     allowNull: true,
            // },
            // members: {
            //     type: DataTypes.ARRAY(DataTypes.INTEGER),
            //     allowNull: false,
            // },
        }, //VALIDATION?
        {
            tableName: 'groups',
            sequelize,
            hooks: {}, // I believe we will have some
        }
    );

    return Group;
}