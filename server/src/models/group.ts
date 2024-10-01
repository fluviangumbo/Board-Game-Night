import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface GroupAttributes {
    id: number;
    name: string;
    games: number[] | []; //array of game ids, not sure if we need if we are nixing the BGG api
    members: number[];  // Just use User's ID, see in factory below the logic
} //if we used Permissions, that would be struct: 
// {
//   user: number; (users.id)
//   acess: 'Owner' | 'Admin' | 'Member';
// }
// Part of my worry here is that we would need to construct
// the permission object as we make the group, but we would
// just need to be sure that the form submission for adding 
// member would include somewhere we specify their level. Check w/Ian.

// Another thought, we could still use BGG just to grab the 
// names of games and some basic info. Might be good practice anyway.

interface GroupCreationAttributes extends Optional<GroupAttributes, 'id'> {}

export class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
    public id!: number;
    public name!: string;
    public games!: number[] | [];
    public members!: number[] | [];

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
            games: {
                type: DataTypes.ARRAY(DataTypes.INTEGER),
                allowNull: true,
            },
            members: {
                type: DataTypes.ARRAY(DataTypes.INTEGER), // was thinking of using DataTypes.JSONB but this will be cleaner because we will just make an access table that references a group and user id and then sets an access level
                allowNull: false, // Creator of group will be added as owner
            },
        }, //VALIDATION?
        {
            tableName: 'groups',
            sequelize,
            hooks: {}, // I believe we will have some
        }
    );

    return Group;
}