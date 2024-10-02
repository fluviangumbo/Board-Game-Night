import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface GameAttributes {
    id: number;
    name: string;
    published: number;
    rank: number;
}

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Game extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
    public id!: number;
    public name!: string;
    public published!: number;
    public rank!: number;
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
            published: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            rank: {
                type: DataTypes.NUMBER,
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