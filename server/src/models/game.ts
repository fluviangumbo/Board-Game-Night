import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface GameAttributes {
    id: number;
    name: string;
    format: Text; // might be a lot of info
    genre: string;
}

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Game extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
    public id!: number;
    public name!: string;
    public format!: Text;
    public genre!: string;
}

export function GameFactory(sequelize: Sequelize): typeof Game {
    Game.init(
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
            format: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'games',
            sequelize,
            hooks: {}, // unsure
        }
    );

    return Game;
}