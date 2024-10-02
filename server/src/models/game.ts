import { Model, type InferAttributes, type InferCreationAttributes,  DataTypes, type Sequelize, } from 'sequelize';

export class Game extends Model<InferAttributes<Game>, InferCreationAttributes<Game>> {
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